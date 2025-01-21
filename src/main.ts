import { renderBackground } from "./BackgroundRenderer.js";
import { renderSnake } from "./SnakeTilesetRenderer.js";

window.onload = init;

const states = {
    START: "START",
    RUNNING: "RUNNING",
    PAUSE: "PAUSE",
    GAME_OVER: "GAME_OVER",
}
let gameState = states.START;

interface StringFunctionMap {
    [index: string]: (() => (void)); 
}
const keyActions : StringFunctionMap = {
    "ArrowRight" : () => { moveSnake(1,0) },
    "ArrowLeft" : () => { moveSnake(-1,0) },
    "ArrowDown" : () => { moveSnake(0,1) },
    "ArrowUp" : () => { moveSnake(0,-1) },
}

const snake = [[0,0], [1,0], [2,0], [3,0], [4,0], [5,0]];

function moveSnake(dx: number, dy: number) {
    const head = snake[snake.length-1];
    snake.push([head[0] + dx, head[1] + dy]);
    snake.shift();
    console.log(snake);
}

function init() {

    renderBackground();

    addEventListener("keydown", (event) => {keyDown(event)});
}

function keyDown(event: KeyboardEvent) {
    if (Object.keys(keyActions).includes(event.key)) {
        keyActions[event.key]();
        renderSnake(snake);
    }
}

