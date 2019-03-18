class Brick {
  constructor(pokemon){
    this.brickWidth = 53.3;
    this.brickThickness = 36.5;
    this.gap = 2;
    this.brickRows = 10;
    this.brickCols = 15;
    this.pokemon = pokemon;
    this.brickGrid = new Array(this.brickRows * this.brickCols);

    this.drawBrick = this.drawBrick.bind(this);
    this.isBrickAtTileCoord = this.isBrickAtTileCoord.bind(this);
    // this.brickTileToIndex = this.brickTileToIndex.bind(this);
  }

  brickTileToIndex(tileCol, tileRow){
    return (tileCol + this.brickCols*tileRow)
  }

  checkForAndRemoveBrickAtPixelCoord(pixelX, pixelY){
    let tileCol = Math.floor(pixelX / this.brickWidth);
    let tileRow = Math.floor(pixelY / this.brickThickness);
    let brickIndex = this.brickTileToIndex(tileCol, tileRow)

    if (tileCol < 0 || tileCol >= this.brickCols || tileRow < 0 || tileRow >= this.brickRows) {
      return false;
    }

    if (this.brickGrid[brickIndex] === 1) {
      this.brickGrid[brickIndex] = 0;
      return true;
    }

    return false;
  }

  isBrickAtTileCoord(brickTileCol, brickTileRow) {
    let brickIndex = brickTileCol + this.brickCols*brickTileRow;
    return (this.brickGrid[brickIndex] === 1);
  }

  resetBricks() {
    for(var i = 0; i < this.brickCols * this.brickRows; i++) {
      this.brickGrid[i] = 1;
    }
  }

  // draw one brick
  drawBrick(ctx, left, top){
    // ctx.fillStyle = "yellow";
    // ctx.fillRect(left, top, this.brickWidth - this.gap, this.brickThickness - this.gap);
    ctx.drawImage(this.pokemon, left, top, 53.3, 36.5, left, top, 50, 30)
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