const Ball = require("./ball");
const HandleInput = require("./input");

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
}

class Game {
  constructor(ctx, ball, paddle, brick) {
    this.ctx = ctx;
    this.ball = ball;
    this.paddle = paddle;
    this.brick = brick;
    this.gameState = GAMESTATE.MENU;

    this.gameLoop = this.gameLoop.bind(this);
    new HandleInput(this);
  }

  gameLoop() {
    requestAnimationFrame(this.gameLoop);
      if (this.gameState === GAMESTATE.PAUSED) {
        return;
      };
    this.ctx.clearRect(0, 0, Game.width, Game.height)
    this.ball.drawBall(this.ctx);
    this.brick.drawBricks(this.ctx);
    this.paddle.drawPaddle(this.ctx);
    this.ball.move();
  }

  drawPause(){
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    this.ctx.rect(0, 0, Game.width, Game.height);
    this.ctx.fill();
  }

  gameStart(){
    this.gameState = GAMESTATE.RUNNING;
    this.gameLoop();
  }

  togglePause(){
    if(this.gameState === GAMESTATE.PAUSED) {
      this.gameState = GAMESTATE.RUNNING;
    } else {
      this.gameState = GAMESTATE.PAUSED;
      this.drawPause();
    }
  }

}

Game.height = 600;
Game.width = 800;
Game.style = "background: black";
module.exports = Game;