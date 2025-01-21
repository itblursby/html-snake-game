import { bgCanvasCtx, canvasWidth, canvasHeight } from "./MainRenderer";

const bgImg = new Image();
bgImg.src = "../assets/bgtiles2.png";


export function renderBackground() : void{
    const pattern = bgCanvasCtx.createPattern(bgImg, "repeat") as CanvasPattern;
    bgCanvasCtx.fillStyle = pattern;
    bgCanvasCtx.fillRect(0,0, canvasWidth, canvasHeight);
}



