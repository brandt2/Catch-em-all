# Catch'em All

[Live Demo](https://brandt2.github.io/Catch-em-all/)
![Instructions](https://github.com/brandt2/Catch-em-all/blob/master/images/instructions.png)

### Overview
Catch'em All is a game that is a clone of brick breaker. The main goal of the game is to bounce the ball off the paddle to break all the bricks. For this clone the theme is based off of pokemon. There are 150 bricks with the picture of the first 150 pokemon on them and the ball is a pokeball. The user can bounce the pokeball of the paddle to capture the pokemon. Once all 150 pokemon have been captured the player becomes a pokemon master.

### Functionality & MVP
In the game, the player can:
* control the paddle with a mouse or touchpad
* the ball bounces at different speeds and angles depending on where it hits the paddle
* break the bricks when the ball collides with them
* have the ball bounce off the sides of the wall
* lose a try when the ball hits the bottom of the screen
* pause the game when 'p' is clicked

### Technologies
* Vanilla Javascript was used for overall structure and game logic
* HTML Canvas for DOM manipulation and rendering
* CSS for styling

### Interesting Code Parts
The game runs by continuously calling the draw methods inside the `gameloop()` method. This `gameloop()` draws the ball, bricks, and paddle after it erases everything. By clearing the canvas before redrawing everything the previous location of the items would not be shown. The `gameloop()` also has additional logic built in it that will pause the game and display a pause screen when 'p' is pressed, display the gameover page if the player loses too many lives, and display the winning page if all the bricks were hit.
![Gameplay](https://github.com/brandt2/Catch-em-all/blob/master/images/pokemon_gif.gif)
```js
gameLoop() {
    if (Game.lives === 0 ) {
      this.gameState = GAMESTATE.GAMEOVER;
      this.drawGameOver();
    }
    if (Game.bricks === 0) {
      this.drawWin();
      return;
    }
    requestAnimationFrame(this.gameLoop);
      if (this.gameState === GAMESTATE.PAUSED || 
        this.gameState === GAMESTATE.MENU || 
        this.gameState === GAMESTATE.GAMEOVER) {
        return;
      };
    this.ctx.clearRect(0, 0, Game.width, Game.height)
    this.ball.drawBall(this.ctx);
    this.brick.drawBricks(this.ctx);
    this.paddle.drawPaddle(this.ctx);
    this.ball.move();
  }
  ```
In addition to the `gameloop()` method. Another piece of code that I am proud of are the `drawBricks()` and `drawBrick()` methods. The `drawBricks()` method uses a nested for loop in order to create the location of all the bricks and calls the `drawBrick()` method to create each individual brick at that location. The `drawBrick()` method takes in the arguments given to it be `drawBricks()` and uses it to select the appropriate pokemon from the sprite sheet to create a brick with the correct image in it.
![All of the Pokemon](https://github.com/brandt2/Catch-em-all/blob/master/images/all_the_pokemon.png)
```js
  drawBrick(ctx, left, top){
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
  ```
