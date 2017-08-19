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
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
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

/***/ 10:
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

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(108);

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 11:
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
    key: "updateMarker",
    value: function updateMarker(item) {
      var activeWidth = item.offsetWidth;
      var activeOffset = item.offsetLeft;

      this.makeMarkerVisible();
      this.setMarkerWidth(activeWidth);
      this.setMarkerOffset(activeOffset);
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
      } else {
        this.makeMarkerInvisible();
        this.removeActiveClass(this.subNavigation.querySelector("." + this.activeClass));
      }
    }
  }, {
    key: "setUpScrollSpy",
    value: function setUpScrollSpy() {
      var _this2 = this;

      this.sections.forEach(function (section) {
        _this2.scrollSpySettings.push({
          id: section.id,
          top: section.offsetTop,
          bottom: section.offsetTop + section.offsetHeight,
          height: section.offsetHeight
        });
      });

      this.scrollSpy(this.scrollSpySettings);

      window.addEventListener("scroll", function (event) {
        setTimeout(function () {
          _this2.scrollSpy(_this2.scrollSpySettings);

          if (_this2.currentItem) {
            _this2.setMarkerTransition();
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
      var _this3 = this;

      this.subNavigationItems.forEach(function (item, index) {
        var anchor = item.querySelector("a");

        if (item.classList.contains(_this3.activeClass)) {
          _this3.updateMarker(item);
        }

        _this3.listenForAnchorClick(anchor);
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

/***/ 12:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(126);

__webpack_require__(21);

__webpack_require__(6);

__webpack_require__(16);

__webpack_require__(3);

__webpack_require__(8);

var _subNavigation = __webpack_require__(10);

var _subNavigation2 = _interopRequireDefault(_subNavigation);

__webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import page module
var subNavigation = new _subNavigation2.default();

// Import page-specific components


subNavigation.render();

console.info("Partnerships loaded");

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(127);

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(5);

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(22);

__webpack_require__(0);

__webpack_require__(15);

/***/ }),

/***/ 22:
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

/***/ 5:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });