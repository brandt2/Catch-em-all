class Paddle {
  constructor(params){
    this.color = params.color,
    this.canvasEl = params.canvasEl,
    this.paddleX = 400

    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.canvasEl.addEventListener("mousemove", this.mouseMoveHandler);
  }

  drawPaddle(ctx) {
    ctx.fillstyle = this.color;
    ctx.fillRect(this.paddleX, 590, 100, 10);
  }

  setPaddlePos({ x, y }){
    this.paddleX = x;
  }

  mouseMoveHandler(evt){
    let mousePos = this.calculateMousePos(evt);
    this.setPaddlePos(mousePos);
  }

  removeHandler(){
    this.canvasEl.removeEventListener("mousemove", this.mouseMoveHandler)
  }
  
  calculateMousePos(evt) {
    let rect = this.canvasEl.getBoundingClientRect();
    let root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
      x: mouseX,
      y: mouseY
    };
  }

}


module.exports = Paddle;