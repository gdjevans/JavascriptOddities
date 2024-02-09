//import * as PIXI from "../node_modules/pixi.js/dist/pixi.js";
// import Victor from "victor";
//import Matter from "matter-js";
import { Player } from './player.js';
import { Zombie } from './zombie.js';

const canvasSize = 256;
const canvas = document.getElementById("mycanvas");
const app = new PIXI.Application({
  view: canvas,
  width: canvasSize,
  height: canvasSize,
  backgroundColor: 0x5c812f
});

let player = new Player({app});
let zombie = new Zombie({app, player});

app.ticker.add((delta) => {
  player.update();
  zombie.update();
});