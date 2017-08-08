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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locationFinder = __webpack_require__(13);

var _locationFinder2 = _interopRequireDefault(_locationFinder);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _locationFinder2.default;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocationFinder = function () {
  function LocationFinder() {
    _classCallCheck(this, LocationFinder);

    this.locationFinder = document.querySelector(".js-location-finder");
    this.locationFinderButton = document.querySelector(".js-location-finder-button");
    this.locationFinderSelect = this.locationFinder.querySelectorAll(".js-location-finder-select");

    this.buildFilterUrl = this.buildFilterUrl.bind(this);
  }

  _createClass(LocationFinder, [{
    key: "buildFilterUrl",
    value: function buildFilterUrl(params) {
      this.locationFinderButton.href = "/locations/" + Object.values(params).join("/");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var params = {};

      this.locationFinderSelect.forEach(function (select, index) {
        params[select.id] = select.value;

        [select][0].onchange = function (event) {
          params[select.id] = event.target.value;

          _this.buildFilterUrl(params);
        };
      });

      this.buildFilterUrl(params);
    }
  }]);

  return LocationFinder;
}();

exports.default = LocationFinder;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(2);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(62);

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(64);

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(66);

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(68);

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(82);

var _locationFinder = __webpack_require__(12);

var _locationFinder2 = _interopRequireDefault(_locationFinder);

__webpack_require__(61);

__webpack_require__(63);

__webpack_require__(65);

__webpack_require__(3);

__webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import page-specific components
var locationFinder = new _locationFinder2.default(); // Import page module


locationFinder.render();

var loc = document.querySelector(".js-location-finder");

window.addEventListener("scroll", function (event) {
  setTimeout(function () {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    console.log(scrollPosition, loc.parentNode.offsetTop);

    if (scrollPosition >= loc.parentNode.offsetTop) {
      loc.classList.add("is-sticky");
      // loc.parentNode.classList.remove("container");
      // console.log("is-sticky");
    } else {
      loc.classList.remove("is-sticky");
      // loc.parentNode.classList.add("container");
      // console.log("is-not-sticky");
    }
  }, 100);
});

console.info("Locations loaded");

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(83);

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });