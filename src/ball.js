const Game = require("./game");

let BALL_SPEEDX = 4;
let BALL_SPEEDY = 6;

class Ball {
  constructor(params){
    this.pos = params.pos,
    this.radius = params.radius,
    this.color = params.color,
    this.paddle = params.paddle
  }

  drawBall(ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      true
    );
    ctx.fill();
  };

  move() {
    if (this.pos[0] + this.radius > Game.width) {
      BALL_SPEEDX *= -1;
    } else if (this.pos[0] - this.radius < 0) {
      BALL_SPEEDX *= -1;
    }
    this.pos[0] += BALL_SPEEDX;

    if (this.pos[1] + this.radius > Game.height) {
      // checks if the ball is within the paddle
      if (this.pos[0] > this.paddle.paddleX && this.pos[0] < this.paddle.paddleX + this.paddle.paddleWidth){
        BALL_SPEEDY *= -1;
      } else {
        this.ballReset();

      }

    } else if ( this.pos[1] - this.radius < 0 ) {
      BALL_SPEEDY *= -1;
    }
    this.pos[1] += BALL_SPEEDY;
  }

  ballReset(){
    this.pos[0] = Game.width/2;
    this.pos[1] = Game.height/2;
  }

}

module.exports = Ball;