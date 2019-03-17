class HandleInput {
  constructor(game) {
    document.addEventListener("keydown", (evt) => {
      switch(evt.keyCode){
        case 83:
          alert("start game");
          break;
        case 80:
          game.togglePause();
          break;
      }
    })
  }
}

module.exports = HandleInput;