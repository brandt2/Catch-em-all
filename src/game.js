const Ball = require("./ball");

class Game {
  constructor(ctx, ball, paddle, brick) {
    this.ctx = ctx;
    this.ball = ball;
    this.paddle = paddle;
    this.brick = brick;

    this.gameLoop = this.gameLoop.bind(this);
  }

  gameLoop() {
    requestAnimationFrame(this.gameLoop);
    this.ctx.clearRect(0, 0, Game.width, Game.height)
    this.ball.drawBall(this.ctx);
    this.brick.drawBricks(this.ctx);
    this.paddle.drawPaddle(this.ctx);
    this.ball.move();
  }

}

Game.height = 600;
Game.width = 800;
Game.style = "background: black";
module.exports = Game;