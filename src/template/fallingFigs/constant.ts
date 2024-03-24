import theme from "@styles/theme";

export const canvasWidth =
  Number(theme.size.containerAndSideInMain_side?.split("px")[0]) + 1;

export const canvasHeight = typeof window === "object" ? window.innerHeight : 0;
