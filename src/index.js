const Ball = require("./ball");
const Game = require("./game");
const Paddle = require("./paddle");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  
  canvasEl.width = Game.width;
  canvasEl.height = Game.height;
  canvasEl.style = Game.style;
  
  // new ball
  let ball = new Ball(
    { pos: [80, 300], radius: 10, color: "white"}
  );

  // new paddle
  let paddle = new Paddle({
    color: "white",
    canvasEl
    }
  );
    
  let newGame = new Game(ctx, ball, paddle);
  newGame.gameLoop()

  console.log("Webpack is working!")
})