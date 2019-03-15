const Ball = require("./ball");
const Game = require("./game");
const Paddle = require("./paddle");
const Brick = require("./brick");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  
  canvasEl.width = Game.width;
  canvasEl.height = Game.height;
  canvasEl.style = Game.style;

  // new paddle
  let paddle = new Paddle({
    color: "red",
    canvasEl: canvasEl
  });
  
  // new ball
  let ball = new Ball({ 
    pos: [400, 300],
    radius: 10,
    color: "pink",
    paddle: paddle
  });

  // new brick
  let brick = new Brick({
    ctx: ctx
  })
    
  let newGame = new Game(ctx, ball, paddle, brick);
  newGame.gameLoop();

  console.log("Webpack is working!")
})