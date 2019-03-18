const Game = require("./game");

let BALL_SPEEDX = 1;
let BALL_SPEEDY = 5;

class Ball {
  constructor(params){
    this.pos = params.pos;
    this.radius = params.radius;
    this.color = params.color;
    this.paddle = params.paddle;
    this.brick = params.brick;
    this.pokeball = params.pokeball;
  }

  // draws the ball
  drawBall(ctx) {
    ctx.fillStyle = "lightgray";
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 1 * Math.PI, true);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], 2, 0, 2 * Math.PI, true);
    ctx.fill();

  };

  move() {
    // allows ball to bounce off walls on left/right side
    if (this.pos[0] + this.radius > Game.width) {
      BALL_SPEEDX *= -1;
    } else if (this.pos[0] - this.radius < 0) {
      BALL_SPEEDX *= -1;
    }

    // allows ball to bounce off top
    if (this.pos[1] < 0) {
      BALL_SPEEDY *= -1;
    }

    // checks if the ball is above the paddle
    if (BALL_SPEEDY > 0.0) {
      if (this.pos[1] + this.radius >= this.paddle.paddleHeight && this.pos[1] <= this.paddle.paddleHeight + 10) { 
        // checks if the ball is within the paddle
        if (this.pos[0] > this.paddle.paddleX && this.pos[0] < this.paddle.paddleX + this.paddle.paddleWidth){
          BALL_SPEEDY *= -1;
  
          let deltaPosX = this.pos[0] - (this.paddle.paddleX + this.paddle.paddleWidth/2);
          BALL_SPEEDX = deltaPosX * 0.35;
        }
      }
    }
    
    // resets the ball position if ball position is greater than the game height
    if (this.pos[1] + this.radius > Game.height) {
      Game.lives -= 1;
      this.ballReset();
    }
    
    if (this.brick.checkForAndRemoveBrickAtPixelCoord(this.pos[0], this.pos[1])) {
      Game.bricks -= 1;
      BALL_SPEEDY *= -1;
    };

    // allows the ball to move
    this.pos[0] += BALL_SPEEDX;
    this.pos[1] += BALL_SPEEDY;
  }

  // resets ball position to the center of the map
  ballReset(){
    this.pos[0] = Game.width/2;
    this.pos[1] = Game.height/2 + 50;
  }

}

module.exports = Ball;