export const canvasWidth = 320;
export const canvasHeight = 240

export const bgCanvasElm = document.getElementById("bgCanvas") as HTMLCanvasElement;
bgCanvasElm.width = canvasWidth;
bgCanvasElm.height = canvasHeight;
export const bgCanvasCtx = bgCanvasElm.getContext("2d") as CanvasRenderingContext2D;

export const gameCanvasElm = document.getElementById("gameCanvas") as HTMLCanvasElement;
gameCanvasElm.width = canvasWidth;
gameCanvasElm.height = canvasHeight;
export const gameCanvasCtx = gameCanvasElm.getContext("2d") as CanvasRenderingContext2D;

export const uiCanvasElm = document.getElementById("UICanvas") as HTMLCanvasElement;
uiCanvasElm.width = canvasWidth;
uiCanvasElm.height = canvasHeight;
export const uiCanvasCtx = uiCanvasElm.getContext("2d") as CanvasRenderingContext2D;





