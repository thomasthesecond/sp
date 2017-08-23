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
/******/ 	return __webpack_require__(__webpack_require__.s = 131);
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

    this.activeClass = "is-active";
    this.currentItem = null;
    this.scrollSpySettings = [];

    this.motionQuery = window.matchMedia("(prefers-reduced-motion)");
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

        window.scroll({
          top: document.getElementById(hashId).offsetTop,
          left: 0,
          behavior: "smooth"
        });

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

          if (_this3.currentItem && !_this3.motionQuery.matches) {
            _this3.setMarkerTransition();
          };
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
  }, {
    key: "render",
    value: function render() {
      this.setUpScrollSpy();
      this.setUpItems();
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (root) {
  var isOn = false;
  var scrollbarSize;
  var scrollTop;

  function getScrollbarSize() {
    if (typeof scrollbarSize !== 'undefined') return scrollbarSize;

    var doc = document.documentElement;
    var dummyScroller = document.createElement('div');
    dummyScroller.setAttribute('style', 'width:99px;height:99px;' + 'position:absolute;top:-9999px;overflow:scroll;');
    doc.appendChild(dummyScroller);
    scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
    doc.removeChild(dummyScroller);
    return scrollbarSize;
  }

  function hasScrollbar() {
    return document.documentElement.scrollHeight > window.innerHeight;
  }

  function on(options) {
    if (typeof document === 'undefined') return;
    var doc = document.documentElement;
    scrollTop = window.pageYOffset;
    if (hasScrollbar()) {
      doc.style.width = 'calc(100% - ' + getScrollbarSize() + 'px)';
    } else {
      doc.style.width = '100%';
    }
    doc.style.position = 'fixed';
    doc.style.top = -scrollTop + 'px';
    doc.style.overflow = 'hidden';
    isOn = true;
  }

  function off() {
    if (typeof document === 'undefined') return;
    var doc = document.documentElement;
    doc.style.width = '';
    doc.style.position = '';
    doc.style.top = '';
    doc.style.overflow = '';
    window.scroll(0, scrollTop);
    isOn = false;
  }

  function toggle() {
    if (isOn) {
      off();
      return;
    }
    on();
  }

  var noScroll = {
    on: on,
    off: off,
    toggle: toggle
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = noScroll;
  } else {
    root.noScroll = noScroll;
  }
})(undefined);

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
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
/* 75 */,
/* 76 */,
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = __webpack_require__(78);

var _modal2 = _interopRequireDefault(_modal);

__webpack_require__(79);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _modal2.default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _noScroll = __webpack_require__(14);

var _noScroll2 = _interopRequireDefault(_noScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
  function Modal(options) {
    _classCallCheck(this, Modal);

    this.options = options;

    this.document = document.documentElement;
    this.modal = document.querySelector(".js-modal");
    this.trigger = document.querySelector(".js-modal-trigger");
    this.content = document.querySelector(".js-modal-content");
    this.close = document.querySelector(".js-modal-close");
    this.overlay = document.querySelector(".js-overlay");
    this.mql = window.matchMedia("(min-width: 768px)");

    this.openClassName = "is-open";

    // this.checkScreenSize = this.checkScreenSize.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
    this.onEscapePress = this.onEscapePress.bind(this);
  }

  // checkScreenSize(mql) {
  //   if (mql.matches) {
  //     console.log("matches");
  //   } else {
  //     console.log("no matches");
  //   }
  // }

  _createClass(Modal, [{
    key: "closeModal",
    value: function closeModal() {
      var _this = this;

      if (this.modal.classList.contains(this.openClassName)) {
        _noScroll2.default.off();
        this.close.removeEventListener("click", this.closeModal, false);

        this.modal.setAttribute("tabindex", "-1");
        this.modal.setAttribute("aria-hidden", "true");
        this.modal.classList.remove(this.openClassName);
        this.overlay.classList.remove(this.openClassName);

        setTimeout(function () {
          _this.modal.classList.add("hidden");
          _this.overlay.classList.add("hidden");
          // this.modal.style.display = "none";
          // this.overlay.style.display = "none";
          _this.content.innerHTML = "";
        }, 200);

        // this.overlay.classList.remove(this.openClassName);
        // setTimeout(() => {
        //   document.body.removeChild(this.overlay);
        // }, 200);

        document.removeEventListener("click", this.clickOutside, false);
      }
    }
  }, {
    key: "openModal",
    value: function openModal(content) {
      var _this2 = this;

      if (!this.modal.classList.contains(this.openClassName)) {
        _noScroll2.default.on();
        this.close.addEventListener("click", this.closeModal, false);
        document.addEventListener("click", this.clickOutside, false);
        this.onEscapePress();

        this.modal.setAttribute("tabindex", "0");
        this.modal.setAttribute("aria-hidden", "false");
        // this.modal.style.display = "block";
        // this.overlay.style.display = "block";
        this.modal.classList.remove("hidden");
        this.overlay.classList.remove("hidden");

        setTimeout(function () {
          _this2.modal.classList.add(_this2.openClassName);
          _this2.overlay.classList.add(_this2.openClassName);
        }, 10);

        this.content.innerHTML = content;

        // document.body.appendChild(this.overlay);
        // setTimeout(() => {
        //   this.overlay.classList.add(this.openClassName);
        // }, 10);
      }
    }
  }, {
    key: "clickOutside",
    value: function clickOutside(event) {
      var isModal = this.modal.contains(event.target);
      var isTrigger = this.trigger.contains(event.target);

      if (!isModal && !isTrigger) {
        this.closeModal();
      }

      event.preventDefault();
    }
  }, {
    key: "onEscapePress",
    value: function onEscapePress() {
      var _this3 = this;

      document.onkeyup = function (event) {
        if (event.keyCode === 27) {
          _this3.closeModal();
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      // this.checkScreenSize(this.mql);
      // this.mql.addListener(this.checkScreenSize);

      // console.log(this.overlay());
      // console.log(this.mod());

      // this.modal.style.display = "none";
      // this.overlay.style.display = "none";

      this.trigger.addEventListener("click", function (event) {
        _this4.openModal();

        // document.body.innerHTML = this.overlay();
        // $("body").append(this.overlay());
        // $("body").find(".js-overlay").addClass("is-open");
        // this.document.querySelector(".js-overlay").classList.add("is-open");

        // console.log(this.overlay());
        // document.body.appendChild();
      });
    }
  }]);

  return Modal;
}();

exports.default = Modal;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(81);

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(83);

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(85);

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(89);

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(91);

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(93);

/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(95);

/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(97);

/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(99);

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(101);

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(103);

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(105);

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(107);

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(109);

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(111);

__webpack_require__(13);

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(113);

/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
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
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _investors = __webpack_require__(132);

var _investors2 = _interopRequireDefault(_investors);

__webpack_require__(80);

__webpack_require__(82);

__webpack_require__(84);

__webpack_require__(86);

__webpack_require__(88);

__webpack_require__(8);

__webpack_require__(90);

__webpack_require__(92);

__webpack_require__(94);

__webpack_require__(96);

__webpack_require__(98);

__webpack_require__(100);

__webpack_require__(102);

__webpack_require__(104);

__webpack_require__(106);

__webpack_require__(108);

__webpack_require__(10);

__webpack_require__(110);

__webpack_require__(24);

__webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const modal = new Modal();

// modal.render();

// Import page-specific components
var investorsPage = new _investors2.default();
// import Modal from "../components/03-components/modal";
// Import page module


investorsPage.render();

console.info("Investors loaded");

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _investors = __webpack_require__(133);

var _investors2 = _interopRequireDefault(_investors);

__webpack_require__(134);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _investors2.default;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modal = __webpack_require__(77);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InvestorsPage = function () {
  _createClass(InvestorsPage, null, [{
    key: "highlightsPage",
    value: function highlightsPage() {
      var modal = new _modal2.default();

      var modalElement = document.querySelector(".js-modal");
      var teamMembers = document.querySelectorAll(".js-team-member");

      teamMembers.forEach(function (member) {
        var name = member.querySelector(".TeamMember-name").innerHTML;
        var title = member.querySelector(".TeamMember-title").innerHTML;
        var bio = member.querySelector(".TeamMember-bio").innerHTML;
        var trigger = member.querySelector(".js-modal-trigger");

        var content = "\n        <div class=\"TeamMember\">\n          <h2 class=\"TeamMember-name\" id=\"" + modalElement.id + "-title\">" + name + "</h2>\n          <div class=\"TeamMember-title\">" + title + "</div>\n          <p class=\"TeamMember-bio\" id=\"" + modalElement.id + "-description\">" + bio + "</p>\n        </div>\n      ";

        trigger.addEventListener("click", function (event) {
          modal.openModal(content);
          event.preventDefault();
        }, false);
      });
    }
  }]);

  function InvestorsPage(options) {
    _classCallCheck(this, InvestorsPage);

    this.options = options;

    this.highlights = document.querySelector(".InvestorsPage-highlights");
  }

  _createClass(InvestorsPage, [{
    key: "render",
    value: function render() {
      if (this.highlights) {
        InvestorsPage.highlightsPage();
      }
    }
  }]);

  return InvestorsPage;
}();

exports.default = InvestorsPage;

/***/ }),
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);