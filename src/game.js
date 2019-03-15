const Ball = require("./ball");

class Game {
  constructor(ctx, ball) {
    this.ctx = ctx,
    this.ball = ball
    this.gameLoop = this.gameLoop.bind(this);
  }

  gameLoop() {
    requestAnimationFrame(this.gameLoop);
    this.ctx.clearRect(0, 0, Game.width, Game.height)
    this.ball.draw(this.ctx);
    this.ball.move(this.ctx);
  }

}

Game.height = 800;
Game.width = 600;
Game.style = "background: black";
module.exports = Game;