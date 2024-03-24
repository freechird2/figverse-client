'use client'
import { figkListState } from '@store/atom/figkText'
import { Wall } from '@template/fallingFigs/Wall'
import { addFig } from '@template/fallingFigs/addFig'
import { canvasHeight, canvasWidth } from '@template/fallingFigs/constant'
import { Common, Composite, Engine, Events, Mouse, MouseConstraint, Render, Runner } from 'matter-js'
import Image from 'next/image'
import decomp from 'poly-decomp'
import { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import FigImage from '/public/images/png/fig_ascii.png'

const FallingFigs = () => {
    const figkList = useRecoilValue(figkListState)

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)

    let engine: Engine, render: Render, runner: Runner, mouse: Mouse, mouseConstraint: MouseConstraint
    useEffect(() => {
        Common.setDecomp(decomp)
        const canvas = canvasRef.current
        const _imgRef = imgRef.current
        const context = canvas?.getContext('2d')
        engine = Engine.create({ enableSleeping: false })
        render = Render.create({
            canvas: canvas!,
            engine: engine,
            options: {
                width: canvasWidth,
                height: canvasHeight,
                wireframes: false,
                pixelRatio: 2, //성능에 영향 낮을수록 퀄리티 낮아지고 성능 올라감
                background: '#000',
            },
        })

        runner = Runner.create()
        Render.run(render)
        Runner.run(runner, engine)

        initScene()
        initGround()
        initMouse()
        removeOutsideObject()

        function initScene() {}
        function initGround() {}
        function initMouse() {}
        mouse = Mouse.create(canvas!)
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                // stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        })

        // Composite.add(engine.world, mouseConstraint);

        Composite.add(engine.world, [Wall('ground'), Wall('left'), Wall('right'), mouseConstraint])

        function removeOutsideObject() {
            Events.on(runner, 'tick', () => {
                engine.world.bodies.forEach((body) => {
                    if (body.position.y > canvasHeight) {
                        Composite.remove(engine.world, body)
                    }
                })
            })
        }
        canvas?.addEventListener('click', () => {
            addFig(engine, imgRef.current?.src!)
        })
        canvas?.addEventListener('wheel', () => {
            addFig(engine, imgRef.current?.src!)
        })
        return () => {
            Composite.clear(engine.world, false)
            Mouse.clearSourceEvents(mouse)
            Runner.stop(runner)
            Render.stop(render)
            Engine.clear(engine)
        }
    }, [])

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.dispatchEvent(new Event('click', { bubbles: true }))
        }
    }, [figkList])

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: `${canvasWidth}px`,
                    height: '100%',
                    transform: 'translateY(40px)',
                    zIndex: -1,
                }}
            />
            <Image
                ref={imgRef}
                style={{ display: 'none', opacity: 0 }}
                src={FigImage}
                alt=''
            />
        </>
    )
}

export default FallingFigs
