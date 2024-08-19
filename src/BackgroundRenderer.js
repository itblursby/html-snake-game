const canvasElm = document.getElementById("bgCanvas");
const canvasCtx = canvasElm.getContext("2d");
canvasElm.width = 320;
canvasElm.height = 240;

const bgImg = new Image();
bgImg.src = "../assets/bgtiles2.png";


export function renderBackground() {
    const pattern = canvasCtx.createPattern(bgImg, "repeat");
    canvasCtx.fillStyle = pattern;
    canvasCtx.fillRect(0,0, canvasElm.width,canvasElm.height);
}



