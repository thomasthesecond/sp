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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(44);

__webpack_require__(0);

__webpack_require__(12);

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(46);

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

__webpack_require__(48);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subNavigation = __webpack_require__(50);

var _subNavigation2 = _interopRequireDefault(_subNavigation);

__webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _subNavigation2.default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SubNavigation = function () {
  function SubNavigation(options) {
    _classCallCheck(this, SubNavigation);

    this.options = options;
    this.subNavigation = document.querySelector(".js-sub-navigation");
    this.subNavigationMarker = this.subNavigation.querySelector(".js-sub-navigation-marker");
    this.subNavigationItems = this.subNavigation.querySelectorAll("li");

    this.updateMarker = this.updateMarker.bind(this);
    this.setMarkerWidth = this.setMarkerWidth.bind(this);
    this.setMarkerOffset = this.setMarkerOffset.bind(this);
    this.setMarkerTransition = this.setMarkerTransition.bind(this);
    this.listenForAnchorClick = this.listenForAnchorClick.bind(this);
    this.scrollSpy = this.scrollSpy.bind(this);

    this.margin = 14;
    this.subNavigationHeight = this.subNavigation.offsetHeight;
    this.activeClass = "is-active";
  }

  _createClass(SubNavigation, [{
    key: "addActiveClass",
    value: function addActiveClass(item) {
      item.classList.add(this.activeClass);
    }
  }, {
    key: "removeActiveClass",
    value: function removeActiveClass(item) {
      if (item) {
        item.classList.remove(this.activeClass);
      }
    }
  }, {
    key: "updateMarker",
    value: function updateMarker(item) {
      var activeWidth = item.offsetWidth;
      var activeOffset = item.offsetLeft;

      this.setMarkerWidth(activeWidth);
      this.setMarkerOffset(activeOffset);
    }
  }, {
    key: "setMarkerWidth",
    value: function setMarkerWidth(width) {
      this.subNavigationMarker.style.width = width + "px";
    }
  }, {
    key: "setMarkerOffset",
    value: function setMarkerOffset(offset) {
      this.subNavigationMarker.style.transform = "translateX(" + offset + "px)";
    }
  }, {
    key: "setMarkerTransition",
    value: function setMarkerTransition() {
      if (this.subNavigationMarker.style.transition === "") {
        this.subNavigationMarker.style.transition = "transform 200ms";
      }
    }
  }, {
    key: "listenForAnchorClick",
    value: function listenForAnchorClick(anchor) {
      var _this = this;

      anchor.addEventListener("click", function (event) {
        var parent = anchor.parentNode;
        var hashId = anchor.hash.replace("#", "");

        if (!parent.classList.contains("is-active")) {
          _this.removeActiveClass(_this.subNavigation.querySelector("." + _this.activeClass));
          _this.addActiveClass(parent);
        }

        document.getElementById(hashId).scrollIntoView();

        _this.setMarkerTransition();
        _this.updateMarker(anchor.parentNode);

        event.preventDefault();
      });
    }
  }, {
    key: "scrollSpy",
    value: function scrollSpy(settings) {
      // console.log(settings);
      // console.log(window.scrollTop);
      // console.log(document.body.scrollTop);

      // console.log(window.pageYOffset || document.documentElement.scrollTop);
      // console.log(
      //   document.getElementById("what-we-do").offsetTop,
      //   document.getElementById("what-we-do").offsetHeight
      // );

      // settings.forEach((item) => {
      //   console.log(
      //     window.pageYOffset >= item.top && window.pageYOffset < item.bottom
      //     ? item.id : null);
      // });

      // const top = document.getElementById("what-we-do").offsetTop;
      // const bottom = top + document.getElementById("what-we-do").offsetHeight;

      // console.log(window.pageYOffset,
      //   window.pageYOffset >= top && window.pageYOffset < bottom
      //   ? true : false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var sections = document.querySelectorAll(".js-spy-section");
      var scrollSpySettings = [];
      // const scrollSpySettings = {};

      sections.forEach(function (section) {
        scrollSpySettings.push({
          id: section.id,
          top: section.offsetTop,
          bottom: section.offsetTop + section.offsetHeight,
          height: section.offsetHeight
        });
        // scrollSpySettings[section.id] = {
        //   top: section.offsetTop,
        //   bottom: (section.offsetTop + section.offsetHeight),
        //   height: section.offsetHeight,
        // };
      });

      // console.log(scrollSpySettings);

      // this.scrollSpy(scrollSpySettings);
      // window.addEventListener("scroll", (event) => {
      //   setTimeout(() => {
      //     this.scrollSpy(scrollSpySettings);
      //   }, 500);
      // });

      this.subNavigationItems.forEach(function (item, index) {
        var anchor = item.querySelector("a");
        // const isFirstItem = index === 0;

        if (item.classList.contains(_this2.activeClass)) {
          _this2.updateMarker(item);
        }

        // if ($item.classList.contains("is-active")) {
        //   updateMarker($item);
        // } else if (isFirstItem) {
        //   addActiveClass($item);
        //   updateMarker($item);
        // }

        _this2.listenForAnchorClick(anchor);
      });
    }
  }]);

  return SubNavigation;
}();

exports.default = SubNavigation;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(53);

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(55);

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(63);

__webpack_require__(43);

__webpack_require__(3);

__webpack_require__(45);

__webpack_require__(5);

__webpack_require__(47);

var _subNavigation = __webpack_require__(49);

var _subNavigation2 = _interopRequireDefault(_subNavigation);

__webpack_require__(52);

__webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import page-specific components
var subNavigation = new _subNavigation2.default(); // Import page module


subNavigation.render();

console.info("About loaded");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(64);

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);