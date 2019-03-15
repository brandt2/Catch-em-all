class Brick {
  constructor(){
    this.brickWidth = 80;
    this.brickThickness = 20;
    this.gap = 5;
    this.brickRows = 10;
    this.brickCols = 10;

    this.drawBrick = this.drawBrick.bind(this);
  }

  drawBrick(ctx, left, top){
    ctx.fillStyle = "yellow";
    ctx.fillRect(left, top, this.brickWidth - this.gap, this.brickThickness - this.gap);
  }

  drawBricks(ctx) {
    for (let i = 0; i < this.brickCols; i++) {
      for(let j = 0; j < this.brickRows; j++) {
        let brickLeftEdgeX = i * this.brickWidth;
        let brickTopEdgeY = j * this.brickThickness;
        this.drawBrick(ctx, brickLeftEdgeX, brickTopEdgeY)
      }
    }
  }

}

module.exports = Brick;