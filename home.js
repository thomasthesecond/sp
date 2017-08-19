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
/******/ 	return __webpack_require__(__webpack_require__.s = 113);
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

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(114);

var _coverVideo = __webpack_require__(57);

var _coverVideo2 = _interopRequireDefault(_coverVideo);

__webpack_require__(16);

__webpack_require__(6);

__webpack_require__(3);

var _locationFinder = __webpack_require__(18);

var _locationFinder2 = _interopRequireDefault(_locationFinder);

__webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import page-specific components
var coverVideo = new _coverVideo2.default(); // Import page module

var locationFinder = new _locationFinder2.default();

coverVideo.render();
locationFinder.render();

console.info("Home loaded");

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(115);

/***/ }),

/***/ 115:
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locationFinder = __webpack_require__(19);

var _locationFinder2 = _interopRequireDefault(_locationFinder);

__webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _locationFinder2.default;

/***/ }),

/***/ 19:
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

/***/ 2:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 20:
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

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coverVideo = __webpack_require__(58);

var _coverVideo2 = _interopRequireDefault(_coverVideo);

__webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _coverVideo2.default;

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CoverVideo = function () {
  function CoverVideo(options) {
    _classCallCheck(this, CoverVideo);

    this.options = options;

    this.container = document.querySelector(".js-cover-video");
    this.image = this.container.querySelector("img");
    this.video = this.container.querySelector("video");
    this.mql = window.matchMedia("(min-width: 768px)");

    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.createVideo = this.createVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
    this.addVideo = this.addVideo.bind(this);
    this.removeVideo = this.removeVideo.bind(this);
  }

  _createClass(CoverVideo, [{
    key: "checkScreenSize",
    value: function checkScreenSize(mql) {
      if (mql.matches) {
        this.addVideo();
      } else {
        this.removeVideo();
      }
    }
  }, {
    key: "createVideo",
    value: function createVideo() {
      var _this = this;

      var src = this.container.dataset.src;
      var type = this.container.dataset.type;

      this.video = document.createElement("video");
      this.video.setAttribute("poster", this.image.src);
      this.video.setAttribute("preload", "auto");
      this.video.setAttribute("loop", "");
      this.video.setAttribute("muted", "");

      var source = document.createElement("source");
      source.setAttribute("src", src);
      source.setAttribute("type", type);

      this.video.appendChild(source);

      this.video.addEventListener("click", function (event) {
        _this.pauseVideo(event.target);
      });
    }
  }, {
    key: "pauseVideo",
    value: function pauseVideo(video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, {
    key: "addVideo",
    value: function addVideo() {
      var autoplay = !!this.container.dataset.autoplay;
      this.container.replaceChild(this.video, this.image);

      if (autoplay) {
        this.video.play();
      }
    }
  }, {
    key: "removeVideo",
    value: function removeVideo() {
      if (this.video && this.video.parentNode) {
        this.video.currentTime = 0;
        this.video.removeEventListener("click", this.pauseVideo);
        this.container.replaceChild(this.image, this.video);
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.createVideo();
      this.checkScreenSize(this.mql);
      this.mql.addListener(this.checkScreenSize);
    }
  }]);

  return CoverVideo;
}();

exports.default = CoverVideo;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(60);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });