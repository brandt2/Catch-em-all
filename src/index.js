const Ball = require("./ball");
const Game = require("./game");
const Paddle = require("./paddle");
const Brick = require("./brick");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  const pokemon = document.getElementById("pokemon");
  const pokemon2 = document.getElementById("pokemon2");
  
  canvasEl.width = Game.width;
  canvasEl.height = Game.height;
  canvasEl.style = Game.style;

  // new paddle
  let paddle = new Paddle({
    color: "rgb(66, 104, 173)",
    canvasEl: canvasEl
  });
  
  // new brick
  let brick = new Brick(pokemon);
  brick.resetBricks();
 
  // new ball
  let ball = new Ball({ 
    pos: [400, 400],
    radius: 13,
    color: "aqua",
    paddle: paddle,
    brick: brick
  });

  // new game
  let newGame = new Game(ctx, ball, paddle, brick, pokemon2);
  newGame.gameStart();

  console.log("Webpack is working!")
})