(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Ruler"] = factory();
	else
		root["Ruler"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Tool = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Canvas);\n\n    this.options = options;\n    this.$el = this.createElement();\n    this.appendTo(options.selector);\n  }\n\n  _createClass(Canvas, [{\n    key: \"createElement\",\n    value: function createElement() {\n      var $canvas = document.createElement('canvas');\n      $canvas.id = this.options.id || 'canvas';\n      $canvas.width = this.options.width || 200;\n      $canvas.height = this.options.height || 100;\n      $canvas.style.width = $canvas.width / 2;\n      $canvas.style.height = $canvas.height / 2;\n      return $canvas;\n    }\n  }, {\n    key: \"appendTo\",\n    value: function appendTo() {\n      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';\n      document.querySelector(selector).appendChild(this.$el);\n    }\n  }]);\n\n  return Canvas;\n}();\n\nvar Ruler =\n/*#__PURE__*/\nfunction (_Canvas) {\n  _inherits(Ruler, _Canvas);\n\n  function Ruler(options) {\n    var _this;\n\n    _classCallCheck(this, Ruler);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ruler).call(this, options));\n    _this.options = options;\n    _this.event = {\n      startPosition: 0,\n      diff: 0\n    };\n\n    _this.addEvent();\n\n    return _this;\n  }\n\n  _createClass(Ruler, [{\n    key: \"setOptions\",\n    value: function setOptions(options) {\n      this.options.info = options;\n      this.ctx.clearRect(0, 0, this.options.width, this.options.width);\n      this.paintScale(this.options.info.init);\n      this.painMiddleLine();\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      this.$el.addEventListener('touchstart', this.touchstart);\n      this.$el.addEventListener('touchmove', this.touchmove);\n      this.$el.addEventListener('touchend', this.touchend);\n    }\n  }, {\n    key: \"touchstart\",\n    value: function touchstart(event) {}\n  }, {\n    key: \"touchmove\",\n    value: function touchmove(event) {}\n  }, {\n    key: \"touchend\",\n    value: function touchend() {}\n  }, {\n    key: \"paint\",\n    value: function paint() {\n      var $el = this.$el;\n      var ctx = $el.getContext('2d');\n      this.ctx = ctx;\n      ctx.clearRect(0, 0, this.options.width, this.options.width);\n      this.paintScale(this.options.info.init);\n      this.painMiddleLine();\n    }\n  }, {\n    key: \"clearPaint\",\n    value: function clearPaint() {\n      this.ctx.clearRect(0, 0, this.options.width, this.options.height);\n    }\n  }, {\n    key: \"painMiddleLine\",\n    value: function painMiddleLine() {\n      var ctx = this.ctx;\n      var info = this.options.info;\n      var y = this.options.height - info.lineWidth;\n      var x = 0;\n      ctx.beginPath();\n      ctx.strokeStyle = '#FF001A';\n      ctx.lineWidth = info.lineWidth;\n      x = this.options.width / 2;\n      ctx.moveTo(x, y);\n      ctx.lineTo(x, y - 50);\n      ctx.stroke();\n      ctx.closePath();\n    }\n  }, {\n    key: \"paintText\",\n    value: function paintText(text, x) {\n      var ctx = this.ctx;\n      var info = this.options.info;\n      var y = this.options.height - info.lineWidth;\n      ctx.save();\n      ctx.font = '10px Microsoft YaHei';\n      ctx.textAlign = 'center';\n      ctx.fillstyle = '#FF001A';\n      ctx.fillText(text, x, y - 30);\n      ctx.fill();\n      ctx.restore();\n    }\n  }, {\n    key: \"getValueBase\",\n    value: function getValueBase(v) {\n      /*\n          ew      每个宽度\n          halfp   一半宽度有多少个格子\n          vp      这个值的等于多一个格子\n      */\n      var ew = +this.options.info.lineWidth + +this.options.info.per;\n      var halfp = this.options.width / ew / 2;\n      var vp = v / this.options.info.unit;\n      return halfp - vp;\n    }\n  }, {\n    key: \"paintScale\",\n    value: function paintScale() {\n      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      var ctx = this.ctx;\n      var info = this.options.info;\n      var lineWidth = info.lineWidth;\n      var ew = info.per + lineWidth;\n      var y = this.options.height - info.lineWidth;\n      var all = this.options.width / ew;\n      this.all = all;\n      ctx.beginPath();\n      ctx.strokeStyle = '#333';\n      ctx.lineWidth = lineWidth;\n      var initPosition = this.getValueBase(value);\n\n      for (var i = initPosition; i < all; i++) {\n        var x = ew * i;\n        var yFix = 10;\n        var actualValue = Tool.add(i, -initPosition) * info.unit;\n\n        if (!(actualValue % (info.unit * info.scale))) {\n          yFix += 10;\n          this.paintText(actualValue, x);\n        }\n\n        ctx.moveTo(x, y);\n        ctx.lineTo(x, y - yFix);\n        ctx.stroke();\n      }\n\n      ctx.closePath();\n    }\n  }]);\n\n  return Ruler;\n}(Canvas);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ruler);\n\n//# sourceURL=webpack://Ruler/./src/canvas.js?");

/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  add: function add(num1, num2) {\n    var num1Digits = (num1.toString().split('.')[1] || '').length;\n    var num2Digits = (num2.toString().split('.')[1] || '').length;\n    var baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));\n    return (num1 * baseNum + num2 * baseNum) / baseNum;\n  }\n};\n\n//# sourceURL=webpack://Ruler/./src/tools.js?");

/***/ })

/******/ });
});