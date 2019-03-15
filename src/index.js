const Ball = require("./ball");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  
  let newGame = new Game(canvasEl);

  canvasEl.width = newGame.width;
  canvasEl.height = newGame.height;
  canvasEl.style = newGame.style;

  // test if ball can be drawn
  let test = new Ball(
    { pos: [50, 50], radius: 50, color: "#00FF00"}
  );
  test.draw(ctx);

  // test if the ball can be moved
  test.move();

  test.draw(ctx);

  // testing movement



  function gameLoop () {
    requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
    test.draw(ctx);
    test.move(ctx);
  }

  gameLoop();

  console.log("Webpack is working!")
})