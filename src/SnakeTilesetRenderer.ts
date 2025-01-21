import { gameCanvasCtx } from "./MainRenderer.js";
import { gameCanvasElm } from "./MainRenderer.js";
import { dirTwoPoints } from "./utils.js";

const commonDimensions : [number, number] = [32, 48];
// directions: 
//
//   3
// 2 # 0
//   1

// head tiles, reference by direction
const headTiles: [number, number][] = [[8, 80], [40, 80], [72, 80], [104, 80]];

// tail tiles, reference by forward direction (against tail direction)
const tailTiles: [number, number][] = [[8, 208], [40, 208], [72, 208], [104, 208]];


interface StringMap {
    [index: string]: [number, number];
}
// Reference by directions to connect to both sides
const connectTiles: StringMap = {
    "0-1": [248, 144],
    "1-2": [152, 144],
    "2-3": [184, 144],
    "0-3": [216, 144],
    "0-2": [8, 144],
    "1-3": [40, 144]
}
const snakeImg = new Image();
snakeImg.src = "../assets/snakebody2.png";

export function testRender(): void {
    gameCanvasCtx.drawImage(snakeImg, 0, 0);
}

export function renderSnake(coords: number[][]): void {
    const toRender: [[number, number], [number, number]][] = [];

    const headPoint = coords[coords.length - 1];
    const drawHeadPoint : [number, number]= [headPoint[0] * 16 - 8, headPoint[1] * 16 - 16];
    let headDir = dirTwoPoints(coords[coords.length - 2], headPoint);
    toRender.push([drawHeadPoint, headTiles[headDir]]);

    const tailPoint = coords[0];
    const drawTailPoint : [number, number] = [tailPoint[0] * 16 - 8, tailPoint[1] * 16 - 16];
    let tailDir = dirTwoPoints(tailPoint, coords[1]);
    console.log(`tailDir: ${tailDir}`);
    toRender.push([drawTailPoint, tailTiles[tailDir]]);

    for (let i = 1; i < coords.length - 1; i++) {
        const point = coords[i];
        let dir1 = dirTwoPoints(coords[i], coords[i - 1]);
        let dir2 = dirTwoPoints(coords[i], coords[i + 1]);
        if (dir1 > dir2) {
            const temp = dir1;
            dir1 = dir2;
            dir2 = temp;
        }
        console.log(`${dir1}-${dir2}`);
        const drawPoint: [number, number] = [point[0] * 16 - 8, point[1] * 16 - 16];
        toRender.push([drawPoint, connectTiles[`${dir1}-${dir2}`]]);
    }
    toRender.sort((a, b) => {
        return a[0][1] - b[0][1];
    });

    gameCanvasCtx.clearRect(0, 0, gameCanvasElm.width, gameCanvasElm.height)
    for (const tile of toRender) {
        console.log(tile);
        gameCanvasCtx.drawImage(snakeImg, ...tile[1], ...commonDimensions, ...tile[0], ...commonDimensions);
    }
    console.log("hey");
}

