const Ball = require("./ball");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  
  canvasEl.width = Game.width;
  canvasEl.height = Game.height;
  canvasEl.style = Game.style;
  
  let ball = new Ball(
    { pos: [50, 50], radius: 10, color: "white"}
  );
    
  let newGame = new Game(ctx, ball);

  newGame.gameLoop()

  console.log("Webpack is working!")
})