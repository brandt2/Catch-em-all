const Ball = require("./ball");

class Game {
  constructor(canvas) {
    this.canvas = canvas,
    this.height = 800,
    this.width = 600,
    this.style = "background: aqua"
    // document.body.appendChild(this.canvas)
  }
}

Game.height = 800;
Game.width = 600;
module.exports = Game;