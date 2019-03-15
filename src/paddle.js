class Paddle {
  constructor(params){
    this.color = params.color
  }

  drawPaddle(ctx) {
    ctx.fillstyle = this.color;
    ctx.fillRect(400, 590, 100, 10);
  }
}

module.exports = Paddle;