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
/******/ 	return __webpack_require__(__webpack_require__.s = 124);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subNavigation = __webpack_require__(11);

var _subNavigation2 = _interopRequireDefault(_subNavigation);

__webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _subNavigation2.default;

/***/ }),
/* 11 */
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
    this.sections = document.querySelectorAll(".js-spy-section");

    this.updateMarker = this.updateMarker.bind(this);
    this.makeMarkerVisible = this.makeMarkerVisible.bind(this);
    this.makeMarkerInvisible = this.makeMarkerInvisible.bind(this);
    this.setMarkerWidth = this.setMarkerWidth.bind(this);
    this.setMarkerOffset = this.setMarkerOffset.bind(this);
    this.setMarkerTransition = this.setMarkerTransition.bind(this);
    this.listenForAnchorClick = this.listenForAnchorClick.bind(this);
    this.scrollSpy = this.scrollSpy.bind(this);
    this.setUpScrollSpy = this.setUpScrollSpy.bind(this);
    this.setUpItems = this.setUpItems.bind(this);
    this.scrollActiveMarkerIntoView = this.scrollActiveMarkerIntoView.bind(this);
    // this.updateSubNavigationOffset = this.updateSubNavigationOffset.bind(this);

    this.activeClass = "is-active";
    this.currentItem = null;
    this.scrollSpySettings = [];
    // this.subNavigationOffset = this.subNavigation.parentNode.offsetTop;
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
    key: "scrollActiveMarkerIntoView",
    value: function scrollActiveMarkerIntoView(offset) {
      var list = this.subNavigation.querySelector("ul");

      list.scroll({
        top: 0,
        left: offset - 24,
        behavior: "smooth"
      });
    }
  }, {
    key: "updateMarker",
    value: function updateMarker(item) {
      var mql = window.matchMedia("(max-width: 1006px)");
      var activeWidth = item.offsetWidth;
      var activeOffset = item.offsetLeft;

      var padding = function padding() {
        return mql.matches ? 10 : 0;
      };
      mql.addListener(padding);

      this.makeMarkerVisible();
      this.setMarkerWidth(activeWidth);
      this.setMarkerOffset(activeOffset - padding());
      this.scrollActiveMarkerIntoView(activeOffset);
    }
  }, {
    key: "makeMarkerVisible",
    value: function makeMarkerVisible() {
      this.subNavigationMarker.style.opacity = 1;
    }
  }, {
    key: "makeMarkerInvisible",
    value: function makeMarkerInvisible() {
      this.subNavigationMarker.style.opacity = 0;
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
      var _this = this;

      setTimeout(function () {
        _this.subNavigationMarker.style.transition = "opacity 200ms, transform 200ms";
      }, 200);
    }
  }, {
    key: "listenForAnchorClick",
    value: function listenForAnchorClick(anchor) {
      anchor.addEventListener("click", function (event) {
        var parent = anchor.parentNode;
        var hashId = anchor.hash.replace("#", "");

        // if (!parent.classList.contains("is-active")) {
        //   this.removeActiveClass(this.subNavigation.querySelector(`.${this.activeClass}`));
        //   this.addActiveClass(parent);
        // }

        window.scroll({
          top: document.getElementById(hashId).offsetTop,
          left: 0,
          behavior: "smooth"
        });

        // this.updateMarker(anchor.parentNode);

        event.preventDefault();
      });
    }
  }, {
    key: "scrollSpy",
    value: function scrollSpy(settings) {
      var _this2 = this;

      var currentId = null;

      settings.forEach(function (item) {
        var top = document.getElementById(item.id).offsetTop;
        var bottom = top + document.getElementById(item.id).offsetHeight;

        if ((window.pageYOffset || document.documentElement.scrollTop) >= top && (window.pageYOffset || document.documentElement.scrollTop) < bottom) {
          currentId = item.id;
        }
      });

      this.currentItem = this.subNavigation.querySelector("#" + currentId + "-item");

      if (this.currentItem && !this.currentItem.classList.contains(this.activeClass)) {
        this.removeActiveClass(this.subNavigation.querySelector("." + this.activeClass));
        this.addActiveClass(this.currentItem);
      }

      if (this.currentItem) {
        this.updateMarker(this.currentItem);
        window.addEventListener("resize", function () {
          setTimeout(function () {
            _this2.updateMarker(_this2.currentItem);
          }, 200);
        });
      } else {
        this.makeMarkerInvisible();
        this.removeActiveClass(this.subNavigation.querySelector("." + this.activeClass));
      }
    }
  }, {
    key: "setUpScrollSpy",
    value: function setUpScrollSpy() {
      var _this3 = this;

      this.sections.forEach(function (section) {
        _this3.scrollSpySettings.push({
          id: section.id,
          top: section.offsetTop,
          bottom: section.offsetTop + section.offsetHeight,
          height: section.offsetHeight
        });
      });

      this.scrollSpy(this.scrollSpySettings);

      window.addEventListener("scroll", function (event) {
        setTimeout(function () {
          _this3.scrollSpy(_this3.scrollSpySettings);

          if (_this3.currentItem) {
            _this3.setMarkerTransition();
          };

          // const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
          //
          // if (scrollPosition >= this.subNavigationOffset) {
          //   this.subNavigation.classList.add("is-sticky");
          // } else {
          //   this.subNavigation.classList.remove("is-sticky");
          // }
        }, 100);
      });
    }
  }, {
    key: "setUpItems",
    value: function setUpItems() {
      var _this4 = this;

      this.subNavigationItems.forEach(function (item, index) {
        var anchor = item.querySelector("a");

        if (item.classList.contains(_this4.activeClass)) {
          _this4.updateMarker(item);
        }

        _this4.listenForAnchorClick(anchor);
      });
    }

    // updateSubNavigationOffset() {
    //   window.addEventListener("resize", (event) => {
    //     setTimeout(() => {
    //       this.subNavigationOffset = this.subNavigation.offsetTop;
    //     }, 200);
    //   });
    // }

  }, {
    key: "render",
    value: function render() {
      this.setUpScrollSpy();
      this.setUpItems();
      // this.updateSubNavigationOffset();
    }
  }]);

  return SubNavigation;
}();

exports.default = SubNavigation;

/***/ }),
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

/***/ }),
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
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(76);

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(78);

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(80);

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(82);

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(84);

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(86);

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(88);

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(90);

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(92);

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(94);

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(96);

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(98);

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(100);

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(102);

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(104);

__webpack_require__(13);

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(106);

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(125);

__webpack_require__(75);

__webpack_require__(77);

__webpack_require__(79);

__webpack_require__(81);

__webpack_require__(8);

__webpack_require__(83);

__webpack_require__(85);

__webpack_require__(87);

__webpack_require__(89);

__webpack_require__(91);

__webpack_require__(93);

__webpack_require__(95);

__webpack_require__(97);

__webpack_require__(99);

__webpack_require__(101);

__webpack_require__(10);

__webpack_require__(103);

__webpack_require__(23);

__webpack_require__(105);

// Import page module
console.info("Investors loaded");

// Import page-specific components

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(126);

/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);