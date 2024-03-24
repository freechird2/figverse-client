'use client'
import theme from '@styles/theme'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Thumbnail = styled.div`
    --endPoint: 56px;
    aspect-ratio: 1/1;
    position: fixed;
    width: 100%;
    top: 50%;
    right: var(--endPoint);
    transform: ${`translate3d(0, calc(-50% + ${theme.size.menu_tab_height} ), 0)`};
    height: 33vw;
    z-index: -10;
    div {
        text-align: right;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        width: ${`calc(100% - ${theme.size.nav_expended_width} - var(--endPoint))`};
        height: 30vw;
        z-index: 1;
        transition: opacity 0.8s ease;
        &.resized {
            z-index: 10;
        }
        img {
            display: inline;
            max-inline-size: revert;
            max-inline-size: ${`calc(100% - ${theme.size.nav_expended_width} - var(--endPoint))`};
            max-block-size: revert;
            width: initial;
            height: 100%;
            object-position: center;
            object-fit: contain;
        }
    }
`
const PortfolioThumbnail = ({ src }: { src: string }) => {
    const [loadedSrc, setLoadedSrc] = useState<boolean>(false)
    useEffect(() => {
        if (loadedSrc) {
            setLoadedSrc(false)
        }
    }, [])

    return (
        <Thumbnail>
            <div
                data-src={src}
                className={`resized`}>
                <img
                    src={src}
                    alt=''
                />
            </div>
            <div
                data-src={src.replace('resized-', '')}
                style={{ opacity: loadedSrc ? 1 : 0, zIndex: loadedSrc ? 11 : 1 }}>
                <img
                    src={src.replace('resized-', '')}
                    alt=''
                    onLoad={() => {
                        setLoadedSrc(true)
                    }}
                />
            </div>
        </Thumbnail>
    )
}

export default PortfolioThumbnail
