const Game = require("./game");

let BALL_SPEEDX = 4;

class Ball {
  constructor(params){
    this.pos = params.pos,
    // this.vel = params.vel,
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
    if (this.pos[0] > Game.width) {
      BALL_SPEEDX *= -1;
    }
    this.pos[0] += BALL_SPEEDX;
  }

}

module.exports = Ball;