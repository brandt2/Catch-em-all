const HandleInput = require("./input");

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
}

class Game {
  constructor(ctx, ball, paddle, brick, pokemon2) {
    this.ctx = ctx;
    this.ball = ball;
    this.paddle = paddle;
    this.brick = brick;
    this.gameState = GAMESTATE.MENU;
    this.pokemon2 = pokemon2;

    this.gameLoop = this.gameLoop.bind(this);
    new HandleInput(this);
  }

  // the game loop
  gameLoop() {
    if (Game.lives === 0 ) {
      this.gameState = GAMESTATE.GAMEOVER;
      this.drawGameOver();
    }
    requestAnimationFrame(this.gameLoop);
      if (this.gameState === GAMESTATE.PAUSED || 
        this.gameState === GAMESTATE.MENU || 
        this.gameState === GAMESTATE.GAMEOVER) {
        return;
      };
    this.ctx.clearRect(0, 0, Game.width, Game.height)
    this.ball.drawBall(this.ctx);
    this.brick.drawBricks(this.ctx);
    this.paddle.drawPaddle(this.ctx);
    this.ball.move();
  }

  // draws the pause screen
  drawPause(){
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    this.ctx.rect(0, 0, Game.width, Game.height);
    this.ctx.fill();
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Paused", Game.width/2, Game.height/2);
  }

  // draws the start screen
  drawStart(){
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle = "rgb(63, 107, 183)";
    this.ctx.textAlign = "center";
    this.ctx.fillText("You have 8 tries", Game.width/2, Game.height/2 - 50);
    this.ctx.fillText("Are you ready to catch 'em all?", Game.width/2, Game.height/2);
    this.ctx.fillText("Press SPACEBAR to begin", Game.width / 2, Game.height / 2 + 50);
    this.ctx.drawImage(this.pokemon2, Game.width, Game.height);
  }

  // draws the gameover screen
  drawGameOver(){
    this.ctx.drawImage(this.pokemon2, Game.width, Game.height);
    this.ctx.fill();
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Nice try, but you're not a pokemon master", Game.width/2, Game.height/2);
  }

  // begins the game when SPACEBAR is hit
  gameStart(){
    this.drawStart();
    this.gameLoop();
  }

  // changes the gamestate from menu to running
  beginGame(){
    if(this.gameState === GAMESTATE.MENU) {
      this.gameState = GAMESTATE.RUNNING;
    }
  }

  // changes the gamestate between running and paused
  togglePause(){
    if(this.gameState === GAMESTATE.PAUSED) {
      this.gameState = GAMESTATE.RUNNING;
    } else {
      this.gameState = GAMESTATE.PAUSED;
      this.drawPause();
    }
  }

}

Game.height = 680;
Game.width = 800;
Game.lives = 8;
Game.style = "border: 1px solid black";
module.exports = Game;