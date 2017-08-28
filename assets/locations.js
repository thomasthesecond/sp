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
/******/ 	return __webpack_require__(__webpack_require__.s = 144);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * forEach for NodeList
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var forEach = function forEach(array, callback, scope) {
  for (var i = 0; i < array.length; i += 1) {
    callback.call(scope, i, array[i]);
  }
};

/**
 * Replace no-js className
 */
var replaceNoJsClassName = function replaceNoJsClassName() {
  document.documentElement.className = document.documentElement.className.replace("no-js", "js");
};

/**
 * Polyfill object-fit: cover
 */
var objectFitCover = function objectFitCover() {
  if ("objectFit" in document.documentElement.style === false) {
    document.addEventListener("DOMContentLoaded", function () {
      var nodes = document.querySelectorAll(".object-fit-cover");

      forEach(nodes, function (index, node) {
        var image = node.querySelector("img");
        (node.runtimeStyle || node.style).background = "url(\"" + image.src + "\") no-repeat 50% / cover";
        (image.runtimeStyle || image.style).display = "none";
      });
    });
  }
};

exports.forEach = forEach;
exports.replaceNoJsClassName = replaceNoJsClassName;
exports.objectFitCover = objectFitCover;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Import page module

var _locations = __webpack_require__(145);

var _locations2 = _interopRequireDefault(_locations);

__webpack_require__(3);

var _locationFinder = __webpack_require__(17);

var _locationFinder2 = _interopRequireDefault(_locationFinder);

__webpack_require__(83);

__webpack_require__(85);

__webpack_require__(87);

__webpack_require__(4);

__webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locationsPage = new _locations2.default();

// Import page-specific components

var locationFinder = new _locationFinder2.default();

locationsPage.render();
locationFinder.render();

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locations = __webpack_require__(146);

var _locations2 = _interopRequireDefault(_locations);

__webpack_require__(147);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _locations2.default;

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocationsPage = function () {
  function LocationsPage(options) {
    _classCallCheck(this, LocationsPage);

    this.options = options;

    this.locationFinder = document.querySelector(".js-location-finder");
  }

  _createClass(LocationsPage, [{
    key: "render",
    value: function render() {
      var _this = this;

      window.addEventListener("scroll", function () {
        setTimeout(function () {
          var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

          // console.log(scrollPosition, this.locationFinder.parentNode.offsetTop);

          if (scrollPosition >= _this.locationFinder.parentNode.offsetTop) {
            _this.locationFinder.classList.add("is-sticky");
            // this.locationFinder.parentNode.classList.remove("container");
            // console.log("is-sticky");
          } else {
            _this.locationFinder.classList.remove("is-sticky");
            // this.locationFinder.parentNode.classList.add("container");
            // console.log("is-not-sticky");
          }
        }, 100);
      });
    }
  }]);

  return LocationsPage;
}();

exports.default = LocationsPage;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locationFinder = __webpack_require__(18);

var _locationFinder2 = _interopRequireDefault(_locationFinder);

__webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _locationFinder2.default;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

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
      var url = this.locationFinder.dataset.locationUrl;
      this.locationFinderButton.href = url + "/" + Object.values(params).join("/");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var params = {};

      (0, _utils.forEach)(this.locationFinderSelect, function (index, select) {
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

/***/ 19:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(84);

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(86);

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(88);

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(90);

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });