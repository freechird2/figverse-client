import { getRandomBetween } from "@function/getRandom";
import { Bodies, Composite, Engine } from "matter-js";
import { canvasWidth } from "./constant";

export function addFig(engine: Engine, img: string) {
  const fig = Bodies.rectangle(
    getRandomBetween(canvasWidth * 0.3, canvasWidth * 1),
    getRandomBetween(-200, 40),
    20,
    46,
    {
      chamfer: { radius: [10, 10, 10, 10, 10], quality: 10 },
      density: 0.01,
      friction: 0.5,
      frictionAir: 0.01,
      restitution: 0.3,
      render: {
        sprite: {
          xScale: 0.2,
          yScale: 0.2,
          texture: img,
        },
      },
    }
  );
  Composite.add(engine.world, [fig]);
}
