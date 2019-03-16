class Brick {
  constructor(){
    this.brickWidth = 80;
    this.brickThickness = 20;
    this.gap = 5;
    this.brickRows = 10;
    this.brickCols = 10;
    this.brickGrid = new Array(this.brickRows * this.brickCols);

    this.drawBrick = this.drawBrick.bind(this);
    this.isBrickAtTileCoord = this.isBrickAtTileCoord.bind(this);
  }

  isBrickAtTileCoord(brickTileCol, brickTileRow) {
    let brickIndex = brickTileCol + this.brickCols*brickTileRow;
    return (this.brickGrid[brickIndex] === 1);
  }

  resetBricks() {
    for(var i = 0; i < this.brickCols * this.brickRows; i++) {
      if(Math.random() < 0.5) {
        this.brickGrid[i] = 1;
      } else {
        this.brickGrid[i] = 0;
      }
    }
  }

  // draw one brick
  drawBrick(ctx, left, top){
    ctx.fillStyle = "yellow";
    ctx.fillRect(left, top, this.brickWidth - this.gap, this.brickThickness - this.gap);
  }

  // draw all the bricks by looping
  drawBricks(ctx) {
    for (let i = 0; i < this.brickCols; i++) {
      for(let j = 0; j < this.brickRows; j++) {
        if (this.isBrickAtTileCoord(i, j)) {
          let brickLeftEdgeX = i * this.brickWidth;
          let brickTopEdgeY = j * this.brickThickness;
          this.drawBrick(ctx, brickLeftEdgeX, brickTopEdgeY)

        }
      }
    }
  }

}

module.exports = Brick;