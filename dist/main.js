/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nlet BALL_SPEEDX = 1;\nlet BALL_SPEEDY = 6;\n\nclass Ball {\n  constructor(params){\n    this.pos = params.pos;\n    this.radius = params.radius;\n    this.color = params.color;\n    this.paddle = params.paddle;\n    this.brick = params.brick;\n  }\n\n  drawBall(ctx) {\n    ctx.fillStyle = this.color;\n\n    ctx.beginPath();\n    ctx.arc(\n      this.pos[0],\n      this.pos[1],\n      this.radius,\n      0,\n      2 * Math.PI,\n      true\n    );\n    ctx.fill();\n  };\n\n  move() {\n    // allows ball to bounce off walls on left/right side\n    if (this.pos[0] + this.radius > Game.width) {\n      BALL_SPEEDX *= -1;\n    } else if (this.pos[0] - this.radius < 0) {\n      BALL_SPEEDX *= -1;\n    }\n\n    // allows ball to bounce off top\n    if (this.pos[1] < 0) {\n      BALL_SPEEDY *= -1;\n    }\n\n    // checks if the is above the paddle\n    if (BALL_SPEEDY > 0.0) {\n      if (this.pos[1] + this.radius >= this.paddle.paddleHeight && this.pos[1] <= this.paddle.paddleHeight + 10) { \n        // checks if the ball is within the paddle\n        if (this.pos[0] > this.paddle.paddleX && this.pos[0] < this.paddle.paddleX + this.paddle.paddleWidth){\n          BALL_SPEEDY *= -1;\n  \n          let deltaPosX = this.pos[0] - (this.paddle.paddleX + this.paddle.paddleWidth/2);\n          BALL_SPEEDX = deltaPosX * 0.35;\n        }\n      }\n    }\n    \n    if (this.brick.checkForAndRemoveBrickAtPixelCoord(this.pos[0], this.pos[1])) {\n      BALL_SPEEDY *= -1;\n    };\n\n    // resets the ball position if ball position is greater than the game height\n    if (this.pos[1] + this.radius > Game.height) {\n      this.ballReset();\n    }\n\n    // allows the ball to move\n    this.pos[0] += BALL_SPEEDX;\n    this.pos[1] += BALL_SPEEDY;\n  }\n\n  ballReset(){\n    this.pos[0] = Game.width/2;\n    this.pos[1] = Game.height/2;\n  }\n\n}\n\nmodule.exports = Ball;\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/brick.js":
/*!**********************!*\
  !*** ./src/brick.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Brick {\n  constructor(){\n    this.brickWidth = 80;\n    this.brickThickness = 20;\n    this.gap = 5;\n    this.brickRows = 10;\n    this.brickCols = 10;\n    this.brickGrid = new Array(this.brickRows * this.brickCols);\n\n    this.drawBrick = this.drawBrick.bind(this);\n    this.isBrickAtTileCoord = this.isBrickAtTileCoord.bind(this);\n    // this.brickTileToIndex = this.brickTileToIndex.bind(this);\n  }\n\n  brickTileToIndex(tileCol, tileRow){\n    return (tileCol + this.brickCols*tileRow)\n  }\n\n  checkForAndRemoveBrickAtPixelCoord(pixelX, pixelY){\n    let tileCol = Math.floor(pixelX / this.brickWidth);\n    let tileRow = Math.floor(pixelY / this.brickThickness);\n    let brickIndex = this.brickTileToIndex(tileCol, tileRow)\n\n    if (tileCol < 0 || tileCol >= this.brickCols || tileRow < 0 || tileRow >= this.brickRows) {\n      return false;\n    }\n\n\n    if (this.brickGrid[brickIndex] === 1) {\n      this.brickGrid[brickIndex] = 0;\n      return true;\n    }\n    return false;\n  }\n\n  isBrickAtTileCoord(brickTileCol, brickTileRow) {\n    let brickIndex = brickTileCol + this.brickCols*brickTileRow;\n    return (this.brickGrid[brickIndex] === 1);\n  }\n\n  resetBricks() {\n    for(var i = 0; i < this.brickCols * this.brickRows; i++) {\n      this.brickGrid[i] = 1;\n    }\n  }\n\n  // draw one brick\n  drawBrick(ctx, left, top){\n    ctx.fillStyle = \"yellow\";\n    ctx.fillRect(left, top, this.brickWidth - this.gap, this.brickThickness - this.gap);\n  }\n\n  // draw all the bricks by looping\n  drawBricks(ctx) {\n    for (let i = 0; i < this.brickCols; i++) {\n      for(let j = 0; j < this.brickRows; j++) {\n        if (this.isBrickAtTileCoord(i, j)) {\n          let brickLeftEdgeX = i * this.brickWidth;\n          let brickTopEdgeY = j * this.brickThickness;\n          this.drawBrick(ctx, brickLeftEdgeX, brickTopEdgeY)\n\n        }\n      }\n    }\n  }\n\n}\n\nmodule.exports = Brick;\n\n//# sourceURL=webpack:///./src/brick.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Ball = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\n\nclass Game {\n  constructor(ctx, ball, paddle, brick) {\n    this.ctx = ctx;\n    this.ball = ball;\n    this.paddle = paddle;\n    this.brick = brick;\n\n    this.gameLoop = this.gameLoop.bind(this);\n  }\n\n  gameLoop() {\n    requestAnimationFrame(this.gameLoop);\n    this.ctx.clearRect(0, 0, Game.width, Game.height)\n    this.ball.drawBall(this.ctx);\n    this.brick.drawBricks(this.ctx);\n    this.paddle.drawPaddle(this.ctx);\n    this.ball.move();\n  }\n\n}\n\nGame.height = 600;\nGame.width = 800;\nGame.style = \"background: black\";\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Ball = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Paddle = __webpack_require__(/*! ./paddle */ \"./src/paddle.js\");\nconst Brick = __webpack_require__(/*! ./brick */ \"./src/brick.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  const ctx = canvasEl.getContext(\"2d\");\n  \n  canvasEl.width = Game.width;\n  canvasEl.height = Game.height;\n  canvasEl.style = Game.style;\n\n  // new paddle\n  let paddle = new Paddle({\n    color: \"red\",\n    canvasEl: canvasEl\n  });\n  \n  // new brick\n  let brick = new Brick();\n  brick.resetBricks();\n \n  // new ball\n  let ball = new Ball({ \n    pos: [400, 300],\n    radius: 10,\n    color: \"aqua\",\n    paddle: paddle,\n    brick: brick\n  });\n\n    \n  let newGame = new Game(ctx, ball, paddle, brick);\n  newGame.gameLoop();\n\n  console.log(\"Webpack is working!\")\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/paddle.js":
/*!***********************!*\
  !*** ./src/paddle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Paddle {\n  constructor(params){\n    this.color = params.color,\n    this.canvasEl = params.canvasEl,\n    this.paddleX = 400,\n    this.paddleThickness = 10;\n    this.paddleHeight = 560;\n    this.paddleWidth = 100;\n\n    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);\n    this.canvasEl.addEventListener(\"mousemove\", this.mouseMoveHandler);\n  }\n\n  drawPaddle(ctx) {\n    ctx.fillStyle = this.color;\n    // debugger\n    ctx.fillRect(this.paddleX, this.paddleHeight, this.paddleWidth, this.paddleThickness);\n  }\n\n  setPaddlePos({ x, y }){\n    this.paddleX = x - (this.paddleWidth/2);\n  }\n\n  mouseMoveHandler(evt){\n    let mousePos = this.calculateMousePos(evt);\n    this.setPaddlePos(mousePos);\n  }\n\n  removeHandler(){\n    this.canvasEl.removeEventListener(\"mousemove\", this.mouseMoveHandler)\n  }\n  \n  calculateMousePos(evt) {\n    let rect = this.canvasEl.getBoundingClientRect();\n    let root = document.documentElement;\n    var mouseX = evt.clientX - rect.left - root.scrollLeft;\n    var mouseY = evt.clientY - rect.top - root.scrollTop;\n    return {\n      x: mouseX,\n      y: mouseY\n    };\n  }\n\n}\n\n\nmodule.exports = Paddle;\n\n//# sourceURL=webpack:///./src/paddle.js?");

/***/ })

/******/ });