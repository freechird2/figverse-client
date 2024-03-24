import Matter, { Bodies, IChamferableBodyDefinition } from "matter-js";
import { canvasHeight, canvasWidth } from "@template/fallingFigs/constant";

type wallConfigType = {
  x: number;
  y: number;
  width: number;
  height: number;
};
/** 벽두깨 */
const thickness = 40;
const sideThickness = 1;

export const Wall = (position: "left" | "right" | "ground") => {
  let wallConfigType: wallConfigType = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  if (position === "ground") {
    wallConfigType = {
      // x: canvasWidth / 2,
      x: (canvasWidth * 2) / 3,
      y: canvasHeight - thickness / 2,
      width: canvasWidth,
      height: thickness,
    };
  }
  if (position === "left") {
    wallConfigType = {
      x: sideThickness / 2,
      y: canvasHeight / 2 - sideThickness / 2,
      width: sideThickness,
      height: canvasHeight - sideThickness,
    };
  }
  if (position === "right") {
    wallConfigType = {
      x: canvasWidth - sideThickness / 2,
      y: canvasHeight / 2 - sideThickness / 2,
      width: sideThickness,
      height: canvasHeight - sideThickness,
    };
  }
  return Bodies.rectangle(
    Object.values(wallConfigType)[0],
    Object.values(wallConfigType)[1],
    Object.values(wallConfigType)[2],
    Object.values(wallConfigType)[3],
    {
      isStatic: true,
      render: {
        strokeStyle: "#000",
      },
    }
  );
};

// export const CanvasWalls = [Wall("ground"), Wall("left"), Wall("right")];
export const CanvasWalls = [Wall("ground"), Wall("right")];
