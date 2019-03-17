class HandleInput {
  constructor(game) {
    document.addEventListener("keydown", (evt) => {
      switch(evt.keyCode){
        case 32:
          game.beginGame();
          break;
        case 80:
          game.togglePause();
          break;
      }
    })
  }
}

module.exports = HandleInput;