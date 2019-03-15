const Ball = require("./ball");
const Game = require("./game");
const Paddle = require("./paddle");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  
  canvasEl.width = Game.width;
  canvasEl.height = Game.height;
  canvasEl.style = Game.style;

  // new paddle
  let paddle = new Paddle({
    color: "white",
    canvasEl: canvasEl
  });
  
  // new ball
  let ball = new Ball({ 
    pos: [400, 300],
    radius: 10,
    color: "white",
    paddle: paddle
  });
    
  let newGame = new Game(ctx, ball, paddle);
  newGame.gameLoop()

  console.log("Webpack is working!")
})