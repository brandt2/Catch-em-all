const Game = require("./game");

let BALL_SPEEDX = 4;
let BALL_SPEEDY = 6;

class Ball {
  constructor(params){
    this.pos = params.pos,
    this.radius = params.radius,
    this.color = params.color
  }

  draw(ctx) {
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
      BALL_SPEEDY *= -1;
    } else if ( this.pos[1] - this.radius < 0 ) {
      BALL_SPEEDY *= -1;
    }
    this.pos[1] += BALL_SPEEDY;
  }

}

module.exports = Ball;