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
      if (this.gameState === GAMESTATE.PAUSED || this.gameState === GAMESTATE.MENU) {
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
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Paused", Game.width/2, Game.height/2);
  }

  drawStart(){
    this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
    this.ctx.rect(0, 0, Game.width, Game.height);
    this.ctx.fill();
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Press SPACEBAR to begin", Game.width/2, Game.height/2);
  }

  gameStart(){
    this.drawStart();
    this.gameLoop();
  }

  beginGame(){
    if(this.gameState === GAMESTATE.MENU) {
      this.gameState = GAMESTATE.RUNNING;
    }
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