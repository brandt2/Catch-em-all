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

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nlet BALL_SPEEDX = 1;\nlet BALL_SPEEDY = 6;\n\nclass Ball {\n  constructor(params){\n    this.pos = params.pos,\n    this.radius = params.radius,\n    this.color = params.color,\n    this.paddle = params.paddle\n  }\n\n  drawBall(ctx) {\n    ctx.fillStyle = this.color;\n\n    ctx.beginPath();\n    ctx.arc(\n      this.pos[0],\n      this.pos[1],\n      this.radius,\n      0,\n      2 * Math.PI,\n      true\n    );\n    ctx.fill();\n  };\n\n  move() {\n    // allows ball to bounce off walls on left/right side\n    if (this.pos[0] + this.radius > Game.width) {\n      BALL_SPEEDX *= -1;\n    } else if (this.pos[0] - this.radius < 0) {\n      BALL_SPEEDX *= -1;\n    }\n\n    // allows ball to bounce off top\n    if (this.pos[1] < 0) {\n      BALL_SPEEDY *= -1;\n    }\n\n    // checks if the is above the paddle\n    if (this.pos[1] + this.radius >= this.paddle.paddleHeight && this.pos[1] <= this.paddle.paddleHeight + 10) { \n      // checks if the ball is within the paddle\n      if (this.pos[0] > this.paddle.paddleX && this.pos[0] < this.paddle.paddleX + this.paddle.paddleWidth){\n        BALL_SPEEDY *= -1;\n\n        let deltaPosX = this.pos[0] - (this.paddle.paddleX + this.paddle.paddleWidth/2);\n        BALL_SPEEDX = deltaPosX * 0.35;\n      }\n    }\n    \n    // resets the ball position if ball position is greater than the game height\n    if (this.pos[1] + this.radius > Game.height) {\n      this.ballReset();\n    }\n\n    // allows the ball to move\n    this.pos[0] += BALL_SPEEDX;\n    this.pos[1] += BALL_SPEEDY;\n  }\n\n  ballReset(){\n    this.pos[0] = Game.width/2;\n    this.pos[1] = Game.height/2;\n  }\n\n}\n\nmodule.exports = Ball;\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Ball = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\n\nclass Game {\n  constructor(ctx, ball, paddle) {\n    this.ctx = ctx,\n    this.ball = ball,\n    this.paddle = paddle\n\n    this.gameLoop = this.gameLoop.bind(this);\n  }\n\n  gameLoop() {\n    requestAnimationFrame(this.gameLoop);\n    this.ctx.clearRect(0, 0, Game.width, Game.height)\n    this.paddle.drawPaddle(this.ctx);\n    this.ball.drawBall(this.ctx);\n    this.ball.move();\n  }\n\n}\n\nGame.height = 600;\nGame.width = 800;\nGame.style = \"background: black\";\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Ball = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Paddle = __webpack_require__(/*! ./paddle */ \"./src/paddle.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  const ctx = canvasEl.getContext(\"2d\");\n  \n  canvasEl.width = Game.width;\n  canvasEl.height = Game.height;\n  canvasEl.style = Game.style;\n\n  // new paddle\n  let paddle = new Paddle({\n    color: \"white\",\n    canvasEl: canvasEl\n  });\n  \n  // new ball\n  let ball = new Ball({ \n    pos: [400, 300],\n    radius: 10,\n    color: \"white\",\n    paddle: paddle\n  });\n    \n  let newGame = new Game(ctx, ball, paddle);\n  newGame.gameLoop()\n\n  console.log(\"Webpack is working!\")\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/paddle.js":
/*!***********************!*\
  !*** ./src/paddle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Paddle {\n  constructor(params){\n    this.color = params.color,\n    this.canvasEl = params.canvasEl,\n    this.paddleX = 400,\n    this.paddleLength = 10;\n    this.paddleHeight = 560;\n    this.paddleWidth = 100;\n\n    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);\n    this.canvasEl.addEventListener(\"mousemove\", this.mouseMoveHandler);\n  }\n\n  drawPaddle(ctx) {\n    ctx.fillstyle = this.color;\n    ctx.fillRect(this.paddleX, this.paddleHeight, this.paddleWidth, this.paddleLength);\n  }\n\n  setPaddlePos({ x, y }){\n    this.paddleX = x - (this.paddleWidth/2);\n  }\n\n  mouseMoveHandler(evt){\n    let mousePos = this.calculateMousePos(evt);\n    this.setPaddlePos(mousePos);\n  }\n\n  removeHandler(){\n    this.canvasEl.removeEventListener(\"mousemove\", this.mouseMoveHandler)\n  }\n  \n  calculateMousePos(evt) {\n    let rect = this.canvasEl.getBoundingClientRect();\n    let root = document.documentElement;\n    var mouseX = evt.clientX - rect.left - root.scrollLeft;\n    var mouseY = evt.clientY - rect.top - root.scrollTop;\n    return {\n      x: mouseX,\n      y: mouseY\n    };\n  }\n\n}\n\n\nmodule.exports = Paddle;\n\n//# sourceURL=webpack:///./src/paddle.js?");

/***/ })

/******/ });