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
/******/ 	return __webpack_require__(__webpack_require__.s = 155);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
		// CommonJS
		module.exports = factory();
	} else {
		// Browser global
		root.ScrollMagic = factory();
	}
})(undefined, function () {
	"use strict";

	var ScrollMagic = function ScrollMagic() {
		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
	};

	ScrollMagic.version = "2.0.5";

	// TODO: temporary workaround for chrome's scroll jitter bug
	window.addEventListener("mousewheel", function () {});

	// global const
	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

	/**
  * The main class that is needed once per scroll container.
  *
  * @class
  *
  * @example
  * // basic initialization
  * var controller = new ScrollMagic.Controller();
  *
  * // passing options
  * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
  *
  * @param {object} [options] - An object containing one or more options for the controller.
  * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
  * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
  * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
  * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
  ** `0` => silent
  ** `1` => errors
  ** `2` => errors, warnings
  ** `3` => errors, warnings, debuginfo
  * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
  This interval polls these parameters to fire the necessary events.  
  If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
  *
  */
	ScrollMagic.Controller = function (options) {
		/*
  	 * ----------------------------------------------------------------
  	 * settings
  	 * ----------------------------------------------------------------
  	 */
		var NAMESPACE = 'ScrollMagic.Controller',
		    SCROLL_DIRECTION_FORWARD = 'FORWARD',
		    SCROLL_DIRECTION_REVERSE = 'REVERSE',
		    SCROLL_DIRECTION_PAUSED = 'PAUSED',
		    DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

		/*
  	 * ----------------------------------------------------------------
  	 * private vars
  	 * ----------------------------------------------------------------
  	 */
		var Controller = this,
		    _options = _util.extend({}, DEFAULT_OPTIONS, options),
		    _sceneObjects = [],
		    _updateScenesOnNextCycle = false,

		// can be boolean (true => all scenes) or an array of scenes to be updated
		_scrollPos = 0,
		    _scrollDirection = SCROLL_DIRECTION_PAUSED,
		    _isDocument = true,
		    _viewPortSize = 0,
		    _enabled = true,
		    _updateTimeout,
		    _refreshTimeout;

		/*
  	 * ----------------------------------------------------------------
  	 * private functions
  	 * ----------------------------------------------------------------
  	 */

		/**
   * Internal constructor function of the ScrollMagic Controller
   * @private
   */
		var construct = function construct() {
			for (var key in _options) {
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			_options.container = _util.get.elements(_options.container)[0];
			// check ScrollContainer
			if (!_options.container) {
				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
				throw NAMESPACE + " init failed."; // cancel
			}
			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
			// normalize to window
			if (_isDocument) {
				_options.container = window;
			}
			// update container size immediately
			_viewPortSize = getViewportSize();
			// set event handlers
			_options.container.addEventListener("resize", onChange);
			_options.container.addEventListener("scroll", onChange);

			_options.refreshInterval = parseInt(_options.refreshInterval) || DEFAULT_OPTIONS.refreshInterval;
			scheduleRefresh();

			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
		};

		/**
   * Schedule the next execution of the refresh function
   * @private
   */
		var scheduleRefresh = function scheduleRefresh() {
			if (_options.refreshInterval > 0) {
				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
			}
		};

		/**
   * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
   * @private
   */
		var getScrollPos = function getScrollPos() {
			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
		};

		/**
   * Returns the current viewport Size (width vor horizontal, height for vertical)
   * @private
   */
		var getViewportSize = function getViewportSize() {
			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
		};

		/**
   * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
   * Make available publicly for pinned mousewheel workaround.
   * @private
   */
		var setScrollPos = this._setScrollPos = function (pos) {
			if (_options.vertical) {
				if (_isDocument) {
					window.scrollTo(_util.get.scrollLeft(), pos);
				} else {
					_options.container.scrollTop = pos;
				}
			} else {
				if (_isDocument) {
					window.scrollTo(pos, _util.get.scrollTop());
				} else {
					_options.container.scrollLeft = pos;
				}
			}
		};

		/**
   * Handle updates in cycles instead of on scroll (performance)
   * @private
   */
		var updateScenes = function updateScenes() {
			if (_enabled && _updateScenesOnNextCycle) {
				// determine scenes to update
				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
				// reset scenes
				_updateScenesOnNextCycle = false;
				var oldScrollPos = _scrollPos;
				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
				_scrollPos = Controller.scrollPos();
				var deltaScroll = _scrollPos - oldScrollPos;
				if (deltaScroll !== 0) {
					// scroll position changed?
					_scrollDirection = deltaScroll > 0 ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
				}
				// reverse order of scenes if scrolling reverse
				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
					scenesToUpdate.reverse();
				}
				// update scenes
				scenesToUpdate.forEach(function (scene, index) {
					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
					scene.update(true);
				});
				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
					log(3, "updating 0 Scenes (nothing added to controller)");
				}
			}
		};

		/**
   * Initializes rAF callback
   * @private
   */
		var debounceUpdate = function debounceUpdate() {
			_updateTimeout = _util.rAF(updateScenes);
		};

		/**
   * Handles Container changes
   * @private
   */
		var onChange = function onChange(e) {
			log(3, "event fired causing an update:", e.type);
			if (e.type == "resize") {
				// resize
				_viewPortSize = getViewportSize();
				_scrollDirection = SCROLL_DIRECTION_PAUSED;
			}
			// schedule update
			if (_updateScenesOnNextCycle !== true) {
				_updateScenesOnNextCycle = true;
				debounceUpdate();
			}
		};

		var refresh = function refresh() {
			if (!_isDocument) {
				// simulate resize event. Only works for viewport relevant param (performance)
				if (_viewPortSize != getViewportSize()) {
					var resizeEvent;
					try {
						resizeEvent = new Event('resize', {
							bubbles: false,
							cancelable: false
						});
					} catch (e) {
						// stupid IE
						resizeEvent = document.createEvent("Event");
						resizeEvent.initEvent("resize", false, false);
					}
					_options.container.dispatchEvent(resizeEvent);
				}
			}
			_sceneObjects.forEach(function (scene, index) {
				// refresh all scenes
				scene.refresh();
			});
			scheduleRefresh();
		};

		/**
   * Send a debug message to the console.
   * provided publicly with _log for plugins
   * @private
   *
   * @param {number} loglevel - The loglevel required to initiate output for the message.
   * @param {...mixed} output - One or more variables that should be passed to the console.
   */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};
		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
		this._options = _options;

		/**
   * Sort scenes in ascending order of their start offset.
   * @private
   *
   * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
   * @return {array} The sorted array of Scenes.
   */
		var sortScenes = function sortScenes(ScenesArray) {
			if (ScenesArray.length <= 1) {
				return ScenesArray;
			} else {
				var scenes = ScenesArray.slice(0);
				scenes.sort(function (a, b) {
					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
				});
				return scenes;
			}
		};

		/**
   * ----------------------------------------------------------------
   * public functions
   * ----------------------------------------------------------------
   */

		/**
   * Add one ore more scene(s) to the controller.  
   * This is the equivalent to `Scene.addTo(controller)`.
   * @public
   * @example
   * // with a previously defined scene
   * controller.addScene(scene);
   *
   * // with a newly created scene.
   * controller.addScene(new ScrollMagic.Scene({duration : 0}));
   *
   * // adding multiple scenes
   * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
   *
   * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
   * @return {Controller} Parent object for chaining.
   */
		this.addScene = function (newScene) {
			if (_util.type.Array(newScene)) {
				newScene.forEach(function (scene, index) {
					Controller.addScene(scene);
				});
			} else if (newScene instanceof ScrollMagic.Scene) {
				if (newScene.controller() !== Controller) {
					newScene.addTo(Controller);
				} else if (_sceneObjects.indexOf(newScene) < 0) {
					// new scene
					_sceneObjects.push(newScene); // add to array
					_sceneObjects = sortScenes(_sceneObjects); // sort
					newScene.on("shift.controller_sort", function () {
						// resort whenever scene moves
						_sceneObjects = sortScenes(_sceneObjects);
					});
					// insert Global defaults.
					for (var key in _options.globalSceneOptions) {
						if (newScene[key]) {
							newScene[key].call(newScene, _options.globalSceneOptions[key]);
						}
					}
					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
				}
			} else {
				log(1, "ERROR: invalid argument supplied for '.addScene()'");
			}
			return Controller;
		};

		/**
   * Remove one ore more scene(s) from the controller.  
   * This is the equivalent to `Scene.remove()`.
   * @public
   * @example
   * // remove a scene from the controller
   * controller.removeScene(scene);
   *
   * // remove multiple scenes from the controller
   * controller.removeScene([scene, scene2, scene3]);
   *
   * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
   * @returns {Controller} Parent object for chaining.
   */
		this.removeScene = function (Scene) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.removeScene(scene);
				});
			} else {
				var index = _sceneObjects.indexOf(Scene);
				if (index > -1) {
					Scene.off("shift.controller_sort");
					_sceneObjects.splice(index, 1);
					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
					Scene.remove();
				}
			}
			return Controller;
		};

		/**
   * Update one ore more scene(s) according to the scroll position of the container.  
   * This is the equivalent to `Scene.update()`.  
   * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
   * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
   * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
   * @public
   * @example
   * // update a specific scene on next cycle
   * controller.updateScene(scene);
   *
   * // update a specific scene immediately
   * controller.updateScene(scene, true);
   *
   * // update multiple scenes scene on next cycle
   * controller.updateScene([scene1, scene2, scene3]);
   *
   * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
   * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
   This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
   * @return {Controller} Parent object for chaining.
   */
		this.updateScene = function (Scene, immediately) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.updateScene(scene, immediately);
				});
			} else {
				if (immediately) {
					Scene.update(true);
				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) {
					// if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
					// prep array for next update cycle
					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
						_updateScenesOnNextCycle.push(Scene);
					}
					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
					debounceUpdate();
				}
			}
			return Controller;
		};

		/**
   * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
   * See `Controller.updateScene()` for more information about what this means.  
   * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
   * The only application for this method is when ScrollMagic fails to detect these events.  
   * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
   * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
   * @public
   * @example
   * // update the controller on next cycle (saves performance due to elimination of redundant updates)
   * controller.update();
   *
   * // update the controller immediately
   * controller.update(true);
   *
   * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
   * @return {Controller} Parent object for chaining.
   */
		this.update = function (immediately) {
			onChange({
				type: "resize"
			}); // will update size and set _updateScenesOnNextCycle to true
			if (immediately) {
				updateScenes();
			}
			return Controller;
		};

		/**
   * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
   * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
   * @public
   *
   * @since 1.1.0
   * @example
   * // scroll to an offset of 100
   * controller.scrollTo(100);
   *
   * // scroll to a DOM element
   * controller.scrollTo("#anchor");
   *
   * // scroll to the beginning of a scene
   * var scene = new ScrollMagic.Scene({offset: 200});
   * controller.scrollTo(scene);
   *
   * // define a new scroll position modification function (jQuery animate instead of jump)
   * controller.scrollTo(function (newScrollPos) {
   *	$("html, body").animate({scrollTop: newScrollPos});
   * });
   * controller.scrollTo(100); // call as usual, but the new function will be used instead
   *
   * // define a new scroll function with an additional parameter
   * controller.scrollTo(function (newScrollPos, message) {
   *  console.log(message);
   *	$(this).animate({scrollTop: newScrollPos});
   * });
   * // call as usual, but supply an extra parameter to the defined custom function
   * controller.scrollTo(100, "my message");
   *
   * // define a new scroll function with an additional parameter containing multiple variables
   * controller.scrollTo(function (newScrollPos, options) {
   *  someGlobalVar = options.a + options.b;
   *	$(this).animate({scrollTop: newScrollPos});
   * });
   * // call as usual, but supply an extra parameter containing multiple options
   * controller.scrollTo(100, {a: 1, b: 2});
   *
   * // define a new scroll function with a callback supplied as an additional parameter
   * controller.scrollTo(function (newScrollPos, callback) {
   *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
   * });
   * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
   * controller.scrollTo(100, function() {
   *	console.log("scroll has finished.");
   * });
   *
   * @param {mixed} scrollTarget - The supplied argument can be one of these types:
   * 1. `number` -> The container will scroll to this new scroll offset.
   * 2. `string` or `object` -> Can be a selector or a DOM object.  
   *  The container will scroll to the position of this element.
   * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
   * 4. `function` -> This function will be used for future scroll position modifications.  
   *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
   *  It may also optionally receive an optional additional parameter (see below)  
   *  _**NOTE:**  
   *  All other options will still work as expected, using the new function to scroll._
   * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
   * @returns {Controller} Parent object for chaining.
   */
		this.scrollTo = function (scrollTarget, additionalParameter) {
			if (_util.type.Number(scrollTarget)) {
				// excecute
				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
			} else if (scrollTarget instanceof ScrollMagic.Scene) {
				// scroll to scene
				if (scrollTarget.controller() === Controller) {
					// check if the controller is associated with this scene
					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
				}
			} else if (_util.type.Function(scrollTarget)) {
				// assign new scroll function
				setScrollPos = scrollTarget;
			} else {
				// scroll to element
				var elem = _util.get.elements(scrollTarget)[0];
				if (elem) {
					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						elem = elem.parentNode;
					}

					var param = _options.vertical ? "top" : "left",

					// which param is of interest ?
					containerOffset = _util.get.offset(_options.container),

					// container position is needed because element offset is returned in relation to document, not in relation to container.
					elementOffset = _util.get.offset(elem);

					if (!_isDocument) {
						// container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
						containerOffset[param] -= Controller.scrollPos();
					}

					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
				}
			}
			return Controller;
		};

		/**
   * **Get** the current scrollPosition or **Set** a new method to calculate it.  
   * -> **GET**:
   * When used as a getter this function will return the current scroll position.  
   * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
   * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
   *
   * -> **SET**:
   * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
   * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
   * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
   * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
   * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
   *
   * To change the current scroll position please use `Controller.scrollTo()`.
   * @public
   *
   * @example
   * // get the current scroll Position
   * var scrollPos = controller.scrollPos();
   *
   * // set a new scroll position calculation method
   * controller.scrollPos(function () {
   *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
   * });
   *
   * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
   * @returns {(number|Controller)} Current scroll position or parent object for chaining.
   */
		this.scrollPos = function (scrollPosMethod) {
			if (!arguments.length) {
				// get
				return getScrollPos.call(Controller);
			} else {
				// set
				if (_util.type.Function(scrollPosMethod)) {
					getScrollPos = scrollPosMethod;
				} else {
					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
				}
			}
			return Controller;
		};

		/**
   * **Get** all infos or one in particular about the controller.
   * @public
   * @example
   * // returns the current scroll position (number)
   * var scrollPos = controller.info("scrollPos");
   *
   * // returns all infos as an object
   * var infos = controller.info();
   *
   * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
   Valid options are:
   ** `"size"` => the current viewport size of the container
   ** `"vertical"` => true if vertical scrolling, otherwise false
   ** `"scrollPos"` => the current scroll position
   ** `"scrollDirection"` => the last known direction of the scroll
   ** `"container"` => the container element
   ** `"isDocument"` => true if container element is the document.
   * @returns {(mixed|object)} The requested info(s).
   */
		this.info = function (about) {
			var values = {
				size: _viewPortSize,
				// contains height or width (in regard to orientation);
				vertical: _options.vertical,
				scrollPos: _scrollPos,
				scrollDirection: _scrollDirection,
				container: _options.container,
				isDocument: _isDocument
			};
			if (!arguments.length) {
				// get all as an object
				return values;
			} else if (values[about] !== undefined) {
				return values[about];
			} else {
				log(1, "ERROR: option \"" + about + "\" is not available");
				return;
			}
		};

		/**
   * **Get** or **Set** the current loglevel option value.
   * @public
   *
   * @example
   * // get the current value
   * var loglevel = controller.loglevel();
   *
   * // set a new value
   * controller.loglevel(3);
   *
   * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
   * @returns {(number|Controller)} Current loglevel or parent object for chaining.
   */
		this.loglevel = function (newLoglevel) {
			if (!arguments.length) {
				// get
				return _options.loglevel;
			} else if (_options.loglevel != newLoglevel) {
				// set
				_options.loglevel = newLoglevel;
			}
			return Controller;
		};

		/**
   * **Get** or **Set** the current enabled state of the controller.  
   * This can be used to disable all Scenes connected to the controller without destroying or removing them.
   * @public
   *
   * @example
   * // get the current value
   * var enabled = controller.enabled();
   *
   * // disable the controller
   * controller.enabled(false);
   *
   * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
   * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
   */
		this.enabled = function (newState) {
			if (!arguments.length) {
				// get
				return _enabled;
			} else if (_enabled != newState) {
				// set
				_enabled = !!newState;
				Controller.updateScene(_sceneObjects, true);
			}
			return Controller;
		};

		/**
   * Destroy the Controller, all Scenes and everything.
   * @public
   *
   * @example
   * // without resetting the scenes
   * controller = controller.destroy();
   *
   * // with scene reset
   * controller = controller.destroy(true);
   *
   * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
   * @returns {null} Null to unset handler variables.
   */
		this.destroy = function (resetScenes) {
			window.clearTimeout(_refreshTimeout);
			var i = _sceneObjects.length;
			while (i--) {
				_sceneObjects[i].destroy(resetScenes);
			}
			_options.container.removeEventListener("resize", onChange);
			_options.container.removeEventListener("scroll", onChange);
			_util.cAF(_updateTimeout);
			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
			return null;
		};

		// INIT
		construct();
		return Controller;
	};

	// store pagewide controller options
	var CONTROLLER_OPTIONS = {
		defaults: {
			container: window,
			vertical: true,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
	/*
  * method used to add an option to ScrollMagic Scenes.
  */
	ScrollMagic.Controller.addOption = function (name, defaultValue) {
		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
	};
	// instance extension function for plugins
	ScrollMagic.Controller.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Controller = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
	};

	/**
  * A Scene defines where the controller should react and how.
  *
  * @class
  *
  * @example
  * // create a standard scene and add it to a controller
  * new ScrollMagic.Scene()
  *		.addTo(controller);
  *
  * // create a scene with custom options and assign a handler to it.
  * var scene = new ScrollMagic.Scene({
  * 		duration: 100,
  *		offset: 200,
  *		triggerHook: "onEnter",
  *		reverse: false
  * });
  *
  * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
  Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
  When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
  * @param {(number|function)} [options.duration=0] - The duration of the scene. 
  If `0` tweens will auto-play when reaching the scene start point, pins will be pinned indefinetly starting at the start position.  
  A function retuning the duration value is also supported. Please see `Scene.duration()` for details.
  * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
  * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
  * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
  Can also be defined using a string:
  ** `"onEnter"` => `1`
  ** `"onCenter"` => `0.5`
  ** `"onLeave"` => `0`
  * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
  * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
  ** `0` => silent
  ** `1` => errors
  ** `2` => errors, warnings
  ** `3` => errors, warnings, debuginfo
  * 
  */
	ScrollMagic.Scene = function (options) {

		/*
  	 * ----------------------------------------------------------------
  	 * settings
  	 * ----------------------------------------------------------------
  	 */

		var NAMESPACE = 'ScrollMagic.Scene',
		    SCENE_STATE_BEFORE = 'BEFORE',
		    SCENE_STATE_DURING = 'DURING',
		    SCENE_STATE_AFTER = 'AFTER',
		    DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

		/*
  	 * ----------------------------------------------------------------
  	 * private vars
  	 * ----------------------------------------------------------------
  	 */

		var Scene = this,
		    _options = _util.extend({}, DEFAULT_OPTIONS, options),
		    _state = SCENE_STATE_BEFORE,
		    _progress = 0,
		    _scrollOffset = {
			start: 0,
			end: 0
		},

		// reflects the controllers's scroll position for the start and end of the scene respectively
		_triggerPos = 0,
		    _enabled = true,
		    _durationUpdateMethod,
		    _controller;

		/**
   * Internal constructor function of the ScrollMagic Scene
   * @private
   */
		var construct = function construct() {
			for (var key in _options) {
				// check supplied options
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			// add getters/setters for all possible options
			for (var optionName in DEFAULT_OPTIONS) {
				addSceneOption(optionName);
			}
			// validate all options
			validateOption();
		};

		/*
   * ----------------------------------------------------------------
   * Event Management
   * ----------------------------------------------------------------
   */

		var _listeners = {};
		/**
   * Scene start event.  
   * Fires whenever the scroll position its the starting point of the scene.  
   * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#start
   *
   * @example
   * scene.on("start", function (event) {
   * 	console.log("Hit start point of scene.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene end event.  
   * Fires whenever the scroll position its the ending point of the scene.  
   * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#end
   *
   * @example
   * scene.on("end", function (event) {
   * 	console.log("Hit end point of scene.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene enter event.  
   * Fires whenever the scene enters the "DURING" state.  
   * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#enter
   *
   * @example
   * scene.on("enter", function (event) {
   * 	console.log("Scene entered.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene - always `"DURING"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene leave event.  
   * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
   * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#leave
   *
   * @example
   * scene.on("leave", function (event) {
   * 	console.log("Scene left.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene update event.  
   * Fires whenever the scene is updated (but not necessarily changes the progress).
   *
   * @event ScrollMagic.Scene#update
   *
   * @example
   * scene.on("update", function (event) {
   * 	console.log("Scene updated.");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
   * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
   * @property {number} event.scrollPos - The current scroll position of the container
   */
		/**
   * Scene progress event.  
   * Fires whenever the progress of the scene changes.
   *
   * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
   *
   * @event ScrollMagic.Scene#progress
   *
   * @example
   * scene.on("progress", function (event) {
   * 	console.log("Scene progress changed to " + event.progress);
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {number} event.progress - Reflects the current progress of the scene
   * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
   * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
   */
		/**
   * Scene change event.  
   * Fires whenvever a property of the scene is changed.
   *
   * @event ScrollMagic.Scene#change
   *
   * @example
   * scene.on("change", function (event) {
   * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {string} event.what - Indicates what value has been changed
   * @property {mixed} event.newval - The new value of the changed property
   */
		/**
   * Scene shift event.  
   * Fires whenvever the start or end **scroll offset** of the scene change.
   * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
   * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
   * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
   *
   * @event ScrollMagic.Scene#shift
   * @since 1.1.0
   *
   * @example
   * scene.on("shift", function (event) {
   * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {string} event.reason - Indicates why the scene has shifted
   */
		/**
   * Scene destroy event.  
   * Fires whenvever the scene is destroyed.
   * This can be used to tidy up custom behaviour used in events.
   *
   * @event ScrollMagic.Scene#destroy
   * @since 1.1.0
   *
   * @example
   * scene.on("enter", function (event) {
   *        // add custom action
   *        $("#my-elem").left("200");
   *      })
   *      .on("destroy", function (event) {
   *        // reset my element to start position
   *        if (event.reset) {
   *          $("#my-elem").left("0");
   *        }
   *      });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
   */
		/**
   * Scene add event.  
   * Fires when the scene is added to a controller.
   * This is mostly used by plugins to know that change might be due.
   *
   * @event ScrollMagic.Scene#add
   * @since 2.0.0
   *
   * @example
   * scene.on("add", function (event) {
   * 	console.log('Scene was added to a new controller.');
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   * @property {boolean} event.controller - The controller object the scene was added to.
   */
		/**
   * Scene remove event.  
   * Fires when the scene is removed from a controller.
   * This is mostly used by plugins to know that change might be due.
   *
   * @event ScrollMagic.Scene#remove
   * @since 2.0.0
   *
   * @example
   * scene.on("remove", function (event) {
   * 	console.log('Scene was removed from its controller.');
   * });
   *
   * @property {object} event - The event Object passed to each callback
   * @property {string} event.type - The name of the event
   * @property {Scene} event.target - The Scene object that triggered this event
   */

		/**
   * Add one ore more event listener.  
   * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
   * @method ScrollMagic.Scene#on
   *
   * @example
   * function callback (event) {
   * 		console.log("Event fired! (" + event.type + ")");
   * }
   * // add listeners
   * scene.on("change update progress start end enter leave", callback);
   *
   * @param {string} names - The name or names of the event the callback should be attached to.
   * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
   * @returns {Scene} Parent object for chaining.
   */
		this.on = function (names, callback) {
			if (_util.type.Function(callback)) {
				names = names.trim().split(' ');
				names.forEach(function (fullname) {
					var nameparts = fullname.split('.'),
					    eventname = nameparts[0],
					    namespace = nameparts[1];
					if (eventname != "*") {
						// disallow wildcards
						if (!_listeners[eventname]) {
							_listeners[eventname] = [];
						}
						_listeners[eventname].push({
							namespace: namespace || '',
							callback: callback
						});
					}
				});
			} else {
				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
			}
			return Scene;
		};

		/**
   * Remove one or more event listener.
   * @method ScrollMagic.Scene#off
   *
   * @example
   * function callback (event) {
   * 		console.log("Event fired! (" + event.type + ")");
   * }
   * // add listeners
   * scene.on("change update", callback);
   * // remove listeners
   * scene.off("change update", callback);
   *
   * @param {string} names - The name or names of the event that should be removed.
   * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
   * @returns {Scene} Parent object for chaining.
   */
		this.off = function (names, callback) {
			if (!names) {
				log(1, "ERROR: Invalid event name supplied.");
				return Scene;
			}
			names = names.trim().split(' ');
			names.forEach(function (fullname, key) {
				var nameparts = fullname.split('.'),
				    eventname = nameparts[0],
				    namespace = nameparts[1] || '',
				    removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
				removeList.forEach(function (remove) {
					var list = _listeners[remove] || [],
					    i = list.length;
					while (i--) {
						var listener = list[i];
						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
							list.splice(i, 1);
						}
					}
					if (!list.length) {
						delete _listeners[remove];
					}
				});
			});
			return Scene;
		};

		/**
   * Trigger an event.
   * @method ScrollMagic.Scene#trigger
   *
   * @example
   * this.trigger("change");
   *
   * @param {string} name - The name of the event that should be triggered.
   * @param {object} [vars] - An object containing info that should be passed to the callback.
   * @returns {Scene} Parent object for chaining.
   */
		this.trigger = function (name, vars) {
			if (name) {
				var nameparts = name.trim().split('.'),
				    eventname = nameparts[0],
				    namespace = nameparts[1],
				    listeners = _listeners[eventname];
				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
				if (listeners) {
					listeners.forEach(function (listener, key) {
						if (!namespace || namespace === listener.namespace) {
							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
						}
					});
				}
			} else {
				log(1, "ERROR: Invalid event name supplied.");
			}
			return Scene;
		};

		// set event listeners
		Scene.on("change.internal", function (e) {
			if (e.what !== "loglevel" && e.what !== "tweenChanges") {
				// no need for a scene update scene with these options...
				if (e.what === "triggerElement") {
					updateTriggerElementPosition();
				} else if (e.what === "reverse") {
					// the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
					Scene.update();
				}
			}
		}).on("shift.internal", function (e) {
			updateScrollOffset();
			Scene.update(); // update scene to reflect new position
		});

		/**
   * Send a debug message to the console.
   * @private
   * but provided publicly with _log for plugins
   *
   * @param {number} loglevel - The loglevel required to initiate output for the message.
   * @param {...mixed} output - One or more variables that should be passed to the console.
   */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};

		/**
   * Add the scene to a controller.  
   * This is the equivalent to `Controller.addScene(scene)`.
   * @method ScrollMagic.Scene#addTo
   *
   * @example
   * // add a scene to a ScrollMagic Controller
   * scene.addTo(controller);
   *
   * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
   * @returns {Scene} Parent object for chaining.
   */
		this.addTo = function (controller) {
			if (!(controller instanceof ScrollMagic.Controller)) {
				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
			} else if (_controller != controller) {
				// new controller
				if (_controller) {
					// was associated to a different controller before, so remove it...
					_controller.removeScene(Scene);
				}
				_controller = controller;
				validateOption();
				updateDuration(true);
				updateTriggerElementPosition(true);
				updateScrollOffset();
				_controller.info("container").addEventListener('resize', onContainerResize);
				controller.addScene(Scene);
				Scene.trigger("add", {
					controller: _controller
				});
				log(3, "added " + NAMESPACE + " to controller");
				Scene.update();
			}
			return Scene;
		};

		/**
   * **Get** or **Set** the current enabled state of the scene.  
   * This can be used to disable this scene without removing or destroying it.
   * @method ScrollMagic.Scene#enabled
   *
   * @example
   * // get the current value
   * var enabled = scene.enabled();
   *
   * // disable the scene
   * scene.enabled(false);
   *
   * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
   * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
   */
		this.enabled = function (newState) {
			if (!arguments.length) {
				// get
				return _enabled;
			} else if (_enabled != newState) {
				// set
				_enabled = !!newState;
				Scene.update(true);
			}
			return Scene;
		};

		/**
   * Remove the scene from the controller.  
   * This is the equivalent to `Controller.removeScene(scene)`.
   * The scene will not be updated anymore until you readd it to a controller.
   * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
   * @method ScrollMagic.Scene#remove
   * @example
   * // remove the scene from its controller
   * scene.remove();
   *
   * @returns {Scene} Parent object for chaining.
   */
		this.remove = function () {
			if (_controller) {
				_controller.info("container").removeEventListener('resize', onContainerResize);
				var tmpParent = _controller;
				_controller = undefined;
				tmpParent.removeScene(Scene);
				Scene.trigger("remove");
				log(3, "removed " + NAMESPACE + " from controller");
			}
			return Scene;
		};

		/**
   * Destroy the scene and everything.
   * @method ScrollMagic.Scene#destroy
   * @example
   * // destroy the scene without resetting the pin and tween to their initial positions
   * scene = scene.destroy();
   *
   * // destroy the scene and reset the pin and tween
   * scene = scene.destroy(true);
   *
   * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
   * @returns {null} Null to unset handler variables.
   */
		this.destroy = function (reset) {
			Scene.trigger("destroy", {
				reset: reset
			});
			Scene.remove();
			Scene.off("*.*");
			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
			return null;
		};

		/**
   * Updates the Scene to reflect the current state.  
   * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
   * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
   * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
   * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
   * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
   * @method ScrollMagic.Scene#update
   * @example
   * // update the scene on next tick
   * scene.update();
   *
   * // update the scene immediately
   * scene.update(true);
   *
   * @fires Scene.update
   *
   * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
   * @returns {Scene} Parent object for chaining.
   */
		this.update = function (immediately) {
			if (_controller) {
				if (immediately) {
					if (_controller.enabled() && _enabled) {
						var scrollPos = _controller.info("scrollPos"),
						    newProgress;

						if (_options.duration > 0) {
							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
						} else {
							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
						}

						Scene.trigger("update", {
							startPos: _scrollOffset.start,
							endPos: _scrollOffset.end,
							scrollPos: scrollPos
						});

						Scene.progress(newProgress);
					} else if (_pin && _state === SCENE_STATE_DURING) {
						updatePinState(true); // unpin in position
					}
				} else {
					_controller.updateScene(Scene, false);
				}
			}
			return Scene;
		};

		/**
   * Updates dynamic scene variables like the trigger element position or the duration.
   * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
   * 
   * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
   * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
   *
   * @method ScrollMagic.Scene#refresh
   * @since 1.1.0
   * @example
   * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
   * 
   * // change the position of the trigger
   * $("#trigger").css("top", 500);
   * // immediately let the scene know of this change
   * scene.refresh();
   *
   * @fires {@link Scene.shift}, if the trigger element position or the duration changed
   * @fires {@link Scene.change}, if the duration changed
   *
   * @returns {Scene} Parent object for chaining.
   */
		this.refresh = function () {
			updateDuration();
			updateTriggerElementPosition();
			// update trigger element position
			return Scene;
		};

		/**
   * **Get** or **Set** the scene's progress.  
   * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
   * The order in which the events are fired depends on the duration of the scene:
   *  1. Scenes with `duration == 0`:  
   *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
   *  When the trigger position of the scene is passed the events are always fired in this order:  
   *  `enter`, `start`, `progress` when scrolling forward  
   *  and  
   *  `progress`, `start`, `leave` when scrolling in reverse
   *  2. Scenes with `duration > 0`:  
   *  Scenes with a set duration have a defined start and end point.  
   *  When scrolling past the start position of the scene it will fire these events in this order:  
   *  `enter`, `start`, `progress`  
   *  When continuing to scroll and passing the end point it will fire these events:  
   *  `progress`, `end`, `leave`  
   *  When reversing through the end point these events are fired:  
   *  `enter`, `end`, `progress`  
   *  And when continuing to scroll past the start position in reverse it will fire:  
   *  `progress`, `start`, `leave`  
   *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
   * 
   * In short:  
   * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
   * `start` and `end` will always trigger at their respective position.
   * 
   * Please review the event descriptions for details on the events and the event object that is passed to the callback.
   * 
   * @method ScrollMagic.Scene#progress
   * @example
   * // get the current scene progress
   * var progress = scene.progress();
   *
   * // set new scene progress
   * scene.progress(0.3);
   *
   * @fires {@link Scene.enter}, when used as setter
   * @fires {@link Scene.start}, when used as setter
   * @fires {@link Scene.progress}, when used as setter
   * @fires {@link Scene.end}, when used as setter
   * @fires {@link Scene.leave}, when used as setter
   *
   * @param {number} [progress] - The new progress value of the scene `[0-1]`.
   * @returns {number} `get` -  Current scene progress.
   * @returns {Scene} `set` -  Parent object for chaining.
   */
		this.progress = function (progress) {
			if (!arguments.length) {
				// get
				return _progress;
			} else {
				// set
				var doUpdate = false,
				    oldState = _state,
				    scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
				    reverseOrForward = _options.reverse || progress >= _progress;
				if (_options.duration === 0) {
					// zero duration scenes
					doUpdate = _progress != progress;
					_progress = progress < 1 && reverseOrForward ? 0 : 1;
					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
				} else {
					// scenes with start and end
					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
						// go back to initial state
						_progress = 0;
						_state = SCENE_STATE_BEFORE;
						doUpdate = true;
					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
						_progress = progress;
						_state = SCENE_STATE_DURING;
						doUpdate = true;
					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
						_progress = 1;
						_state = SCENE_STATE_AFTER;
						doUpdate = true;
					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
					}
				}
				if (doUpdate) {
					// fire events
					var eventVars = {
						progress: _progress,
						state: _state,
						scrollDirection: scrollDirection
					},
					    stateChanged = _state != oldState;

					var trigger = function trigger(eventName) {
						// tmp helper to simplify code
						Scene.trigger(eventName, eventVars);
					};

					if (stateChanged) {
						// enter events
						if (oldState !== SCENE_STATE_DURING) {
							trigger("enter");
							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
						}
					}
					trigger("progress");
					if (stateChanged) {
						// leave events
						if (_state !== SCENE_STATE_DURING) {
							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
							trigger("leave");
						}
					}
				}

				return Scene;
			}
		};

		/**
   * Update the start and end scrollOffset of the container.
   * The positions reflect what the controller's scroll position will be at the start and end respectively.
   * Is called, when:
   *   - Scene event "change" is called with: offset, triggerHook, duration 
   *   - scroll container event "resize" is called
   *   - the position of the triggerElement changes
   *   - the controller changes -> addTo()
   * @private
   */
		var updateScrollOffset = function updateScrollOffset() {
			_scrollOffset = {
				start: _triggerPos + _options.offset
			};
			if (_controller && _options.triggerElement) {
				// take away triggerHook portion to get relative to top
				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
			}
			_scrollOffset.end = _scrollOffset.start + _options.duration;
		};

		/**
   * Updates the duration if set to a dynamic function.
   * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
   * 
   * @fires {@link Scene.change}, if the duration changed
   * @fires {@link Scene.shift}, if the duration changed
   *
   * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
   * @private
   */
		var updateDuration = function updateDuration(suppressEvents) {
			// update duration
			if (_durationUpdateMethod) {
				var varname = "duration";
				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) {
					// set
					Scene.trigger("change", {
						what: varname,
						newval: _options[varname]
					});
					Scene.trigger("shift", {
						reason: varname
					});
				}
			}
		};

		/**
   * Updates the position of the triggerElement, if present.
   * This method is called ...
   *  - ... when the triggerElement is changed
   *  - ... when the scene is added to a (new) controller
   *  - ... in regular intervals from the controller through scene.refresh().
   * 
   * @fires {@link Scene.shift}, if the position changed
   *
   * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
   * @private
   */
		var updateTriggerElementPosition = function updateTriggerElementPosition(suppressEvents) {
			var elementPos = 0,
			    telem = _options.triggerElement;
			if (_controller && telem) {
				var controllerInfo = _controller.info(),
				    containerOffset = _util.get.offset(controllerInfo.container),

				// container position is needed because element offset is returned in relation to document, not in relation to container.
				param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?
				// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
				while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
					telem = telem.parentNode;
				}

				var elementOffset = _util.get.offset(telem);

				if (!controllerInfo.isDocument) {
					// container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
					containerOffset[param] -= _controller.scrollPos();
				}

				elementPos = elementOffset[param] - containerOffset[param];
			}
			var changed = elementPos != _triggerPos;
			_triggerPos = elementPos;
			if (changed && !suppressEvents) {
				Scene.trigger("shift", {
					reason: "triggerElementPosition"
				});
			}
		};

		/**
   * Trigger a shift event, when the container is resized and the triggerHook is > 1.
   * @private
   */
		var onContainerResize = function onContainerResize(e) {
			if (_options.triggerHook > 0) {
				Scene.trigger("shift", {
					reason: "containerResize"
				});
			}
		};

		var _validate = _util.extend(SCENE_OPTIONS.validate, {
			// validation for duration handled internally for reference to private var _durationMethod
			duration: function duration(val) {
				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
					// percentage value
					var perc = parseFloat(val) / 100;
					val = function val() {
						return _controller ? _controller.info("size") * perc : 0;
					};
				}
				if (_util.type.Function(val)) {
					// function
					_durationUpdateMethod = val;
					try {
						val = parseFloat(_durationUpdateMethod());
					} catch (e) {
						val = -1; // will cause error below
					}
				}
				// val has to be float
				val = parseFloat(val);
				if (!_util.type.Number(val) || val < 0) {
					if (_durationUpdateMethod) {
						_durationUpdateMethod = undefined;
						throw ["Invalid return value of supplied function for option \"duration\":", val];
					} else {
						throw ["Invalid value for option \"duration\":", val];
					}
				}
				return val;
			}
		});

		/**
   * Checks the validity of a specific or all options and reset to default if neccessary.
   * @private
   */
		var validateOption = function validateOption(check) {
			check = arguments.length ? [check] : Object.keys(_validate);
			check.forEach(function (optionName, key) {
				var value;
				if (_validate[optionName]) {
					// there is a validation method for this option
					try {
						// validate value
						value = _validate[optionName](_options[optionName]);
					} catch (e) {
						// validation failed -> reset to default
						value = DEFAULT_OPTIONS[optionName];
						var logMSG = _util.type.String(e) ? [e] : e;
						if (_util.type.Array(logMSG)) {
							logMSG[0] = "ERROR: " + logMSG[0];
							logMSG.unshift(1); // loglevel 1 for error msg
							log.apply(this, logMSG);
						} else {
							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
						}
					} finally {
						_options[optionName] = value;
					}
				}
			});
		};

		/**
   * Helper used by the setter/getters for scene options
   * @private
   */
		var changeOption = function changeOption(varname, newval) {
			var changed = false,
			    oldval = _options[varname];
			if (_options[varname] != newval) {
				_options[varname] = newval;
				validateOption(varname); // resets to default if necessary
				changed = oldval != _options[varname];
			}
			return changed;
		};

		// generate getters/setters for all options
		var addSceneOption = function addSceneOption(optionName) {
			if (!Scene[optionName]) {
				Scene[optionName] = function (newVal) {
					if (!arguments.length) {
						// get
						return _options[optionName];
					} else {
						if (optionName === "duration") {
							// new duration is set, so any previously set function must be unset
							_durationUpdateMethod = undefined;
						}
						if (changeOption(optionName, newVal)) {
							// set
							Scene.trigger("change", {
								what: optionName,
								newval: _options[optionName]
							});
							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
								Scene.trigger("shift", {
									reason: optionName
								});
							}
						}
					}
					return Scene;
				};
			}
		};

		/**
   * **Get** or **Set** the duration option value.
   * As a setter it also accepts a function returning a numeric value.  
   * This is particularly useful for responsive setups.
   *
   * The duration is updated using the supplied function every time `Scene.refresh()` is called, which happens periodically from the controller (see ScrollMagic.Controller option `refreshInterval`).  
   * _**NOTE:** Be aware that it's an easy way to kill performance, if you supply a function that has high CPU demand.  
   * Even for size and position calculations it is recommended to use a variable to cache the value. (see example)  
   * This counts double if you use the same function for multiple scenes._
   *
   * @method ScrollMagic.Scene#duration
   * @example
   * // get the current duration value
   * var duration = scene.duration();
   *
   * // set a new duration
   * scene.duration(300);
   *
   * // use a function to automatically adjust the duration to the window height.
   * var durationValueCache;
   * function getDuration () {
   *   return durationValueCache;
   * }
   * function updateDuration (e) {
   *   durationValueCache = window.innerHeight;
   * }
   * $(window).on("resize", updateDuration); // update the duration when the window size changes
   * $(window).triggerHandler("resize"); // set to initial value
   * scene.duration(getDuration); // supply duration method
   *
   * @fires {@link Scene.change}, when used as setter
   * @fires {@link Scene.shift}, when used as setter
   * @param {(number|function)} [newDuration] - The new duration of the scene.
   * @returns {number} `get` -  Current scene duration.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the offset option value.
   * @method ScrollMagic.Scene#offset
   * @example
   * // get the current offset
   * var offset = scene.offset();
   *
   * // set a new offset
   * scene.offset(100);
   *
   * @fires {@link Scene.change}, when used as setter
   * @fires {@link Scene.shift}, when used as setter
   * @param {number} [newOffset] - The new offset of the scene.
   * @returns {number} `get` -  Current scene offset.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the triggerElement option value.
   * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
   * @method ScrollMagic.Scene#triggerElement
   * @example
   * // get the current triggerElement
   * var triggerElement = scene.triggerElement();
   *
   * // set a new triggerElement using a selector
   * scene.triggerElement("#trigger");
   * // set a new triggerElement using a DOM object
   * scene.triggerElement(document.getElementById("trigger"));
   *
   * @fires {@link Scene.change}, when used as setter
   * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
   * @returns {(string|object)} `get` -  Current triggerElement.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the triggerHook option value.
   * @method ScrollMagic.Scene#triggerHook
   * @example
   * // get the current triggerHook value
   * var triggerHook = scene.triggerHook();
   *
   * // set a new triggerHook using a string
   * scene.triggerHook("onLeave");
   * // set a new triggerHook using a number
   * scene.triggerHook(0.7);
   *
   * @fires {@link Scene.change}, when used as setter
   * @fires {@link Scene.shift}, when used as setter
   * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
   * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the reverse option value.
   * @method ScrollMagic.Scene#reverse
   * @example
   * // get the current reverse option
   * var reverse = scene.reverse();
   *
   * // set new reverse option
   * scene.reverse(false);
   *
   * @fires {@link Scene.change}, when used as setter
   * @param {boolean} [newReverse] - The new reverse setting of the scene.
   * @returns {boolean} `get` -  Current reverse option value.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** or **Set** the loglevel option value.
   * @method ScrollMagic.Scene#loglevel
   * @example
   * // get the current loglevel
   * var loglevel = scene.loglevel();
   *
   * // set new loglevel
   * scene.loglevel(3);
   *
   * @fires {@link Scene.change}, when used as setter
   * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
   * @returns {number} `get` -  Current loglevel.
   * @returns {Scene} `set` -  Parent object for chaining.
   */

		/**
   * **Get** the associated controller.
   * @method ScrollMagic.Scene#controller
   * @example
   * // get the controller of a scene
   * var controller = scene.controller();
   *
   * @returns {ScrollMagic.Controller} Parent controller or `undefined`
   */
		this.controller = function () {
			return _controller;
		};

		/**
   * **Get** the current state.
   * @method ScrollMagic.Scene#state
   * @example
   * // get the current state
   * var state = scene.state();
   *
   * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
   */
		this.state = function () {
			return _state;
		};

		/**
   * **Get** the current scroll offset for the start of the scene.  
   * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
   * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
   * @method ScrollMagic.Scene#scrollOffset
   * @example
   * // get the current scroll offset for the start and end of the scene.
   * var start = scene.scrollOffset();
   * var end = scene.scrollOffset() + scene.duration();
   * console.log("the scene starts at", start, "and ends at", end);
   *
   * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
   */
		this.scrollOffset = function () {
			return _scrollOffset.start;
		};

		/**
   * **Get** the trigger position of the scene (including the value of the `offset` option).  
   * @method ScrollMagic.Scene#triggerPosition
   * @example
   * // get the scene's trigger position
   * var triggerPosition = scene.triggerPosition();
   *
   * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
   */
		this.triggerPosition = function () {
			var pos = _options.offset; // the offset is the basis
			if (_controller) {
				// get the trigger position
				if (_options.triggerElement) {
					// Element as trigger
					pos += _triggerPos;
				} else {
					// return the height of the triggerHook to start at the beginning
					pos += _controller.info("size") * Scene.triggerHook();
				}
			}
			return pos;
		};

		var _pin, _pinOptions;

		Scene.on("shift.internal", function (e) {
			var durationChanged = e.reason === "duration";
			if (_state === SCENE_STATE_AFTER && durationChanged || _state === SCENE_STATE_DURING && _options.duration === 0) {
				// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
				updatePinState();
			}
			if (durationChanged) {
				updatePinDimensions();
			}
		}).on("progress.internal", function (e) {
			updatePinState();
		}).on("add.internal", function (e) {
			updatePinDimensions();
		}).on("destroy.internal", function (e) {
			Scene.removePin(e.reset);
		});
		/**
   * Update the pin state.
   * @private
   */
		var updatePinState = function updatePinState(forceUnpin) {
			if (_pin && _controller) {
				var containerInfo = _controller.info(),
				    pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins
				if (!forceUnpin && _state === SCENE_STATE_DURING) {
					// during scene or if duration is 0 and we are past the trigger
					// pinned state
					if (_util.css(pinTarget, "position") != "fixed") {
						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
						_util.css(pinTarget, {
							"position": "fixed"
						});
						// update pin spacer
						updatePinDimensions();
					}

					var fixedPos = _util.get.offset(_pinOptions.spacer, true),

					// get viewport position of spacer
					scrollDistance = _options.reverse || _options.duration === 0 ? containerInfo.scrollPos - _scrollOffset.start // quicker
					: Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress
					// add scrollDistance
					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

					// set new values
					_util.css(_pinOptions.spacer.firstChild, {
						top: fixedPos.top,
						left: fixedPos.left
					});
				} else {
					// unpinned state
					var newCSS = {
						position: _pinOptions.inFlow ? "relative" : "absolute",
						top: 0,
						left: 0
					},
					    change = _util.css(pinTarget, "position") != newCSS.position;

					if (!_pinOptions.pushFollowers) {
						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
					} else if (_options.duration > 0) {
						// only concerns scenes with duration
						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
							change = true; // if in after state but havent updated spacer yet (jumped past pin)
						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) {
							// before
							change = true; // jumped past fixed state upward direction
						}
					}
					// set new values
					_util.css(pinTarget, newCSS);
					if (change) {
						// update pin spacer if state changed
						updatePinDimensions();
					}
				}
			}
		};

		/**
   * Update the pin spacer and/or element size.
   * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
   * @private
   */
		var updatePinDimensions = function updatePinDimensions() {
			if (_pin && _controller && _pinOptions.inFlow) {
				// no spacerresize, if original position is absolute
				var after = _state === SCENE_STATE_AFTER,
				    before = _state === SCENE_STATE_BEFORE,
				    during = _state === SCENE_STATE_DURING,
				    vertical = _controller.info("vertical"),
				    pinTarget = _pinOptions.spacer.firstChild,

				// usually the pined element but can also be another spacer (cascaded pins)
				marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
				    css = {};

				// set new size
				// if relsize: spacer -> pin | else: pin -> spacer
				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
					if (during) {
						_util.css(_pin, {
							"width": _util.get.width(_pinOptions.spacer)
						});
					} else {
						_util.css(_pin, {
							"width": "100%"
						});
					}
				} else {
					// minwidth is needed for cascaded pins.
					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
					css.width = during ? css["min-width"] : "auto";
				}
				if (_pinOptions.relSize.height) {
					if (during) {
						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
						_util.css(_pin, {
							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
						});
					} else {
						_util.css(_pin, {
							"height": "100%"
						});
					}
				} else {
					// margin is only included if it's a cascaded pin to resolve an IE9 bug
					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
					css.height = during ? css["min-height"] : "auto";
				}

				// add space for duration if pushFollowers is true
				if (_pinOptions.pushFollowers) {
					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
				}
				_util.css(_pinOptions.spacer, css);
			}
		};

		/**
   * Updates the Pin state (in certain scenarios)
   * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
   * So this function is called on resize and scroll of the document.
   * @private
   */
		var updatePinInContainer = function updatePinInContainer() {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				updatePinState();
			}
		};

		/**
   * Updates the Pin spacer size state (in certain scenarios)
   * If container is resized during pin and relatively sized the size of the pin might need to be updated...
   * So this function is called on resize of the container.
   * @private
   */
		var updateRelativePinSpacer = function updateRelativePinSpacer() {
			if (_controller && _pin && // well, duh
			_state === SCENE_STATE_DURING && ( // element in pinned state?
			// is width or height relatively sized, but not in relation to body? then we need to recalc.
			(_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode) || _pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode))) {
				updatePinDimensions();
			}
		};

		/**
   * Is called, when the mousewhel is used while over a pinned element inside a div container.
   * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
   * @private
   */
		var onMousewheelOverPin = function onMousewheelOverPin(e) {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				// in pin state
				e.preventDefault();
				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
			}
		};

		/**
   * Pin an element for the duration of the tween.  
   * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
   * Make sure only one pin is applied to an element at the same time.
   * An element can be pinned multiple times, but only successively.
   * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
   * @method ScrollMagic.Scene#setPin
   * @example
   * // pin element and push all following elements down by the amount of the pin duration.
   * scene.setPin("#pin");
   *
   * // pin element and keeping all following elements in their place. The pinned element will move past them.
   * scene.setPin("#pin", {pushFollowers: false});
   *
   * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
   * @param {object} [settings] - settings for the pin
   * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
   Ignored, when duration is `0`.
   * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
   *
   * @returns {Scene} Parent object for chaining.
   */
		this.setPin = function (element, settings) {
			var defaultSettings = {
				pushFollowers: true,
				spacerClass: "scrollmagic-pin-spacer"
			};
			settings = _util.extend({}, defaultSettings, settings);

			// validate Element
			element = _util.get.elements(element)[0];
			if (!element) {
				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
				return Scene; // cancel
			} else if (_util.css(element, "position") === "fixed") {
				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
				return Scene; // cancel
			}

			if (_pin) {
				// preexisting pin?
				if (_pin === element) {
					// same pin we already have -> do nothing
					return Scene; // cancel
				} else {
					// kill old pin
					Scene.removePin();
				}
			}
			_pin = element;

			var parentDisplay = _pin.parentNode.style.display,
			    boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
			var inFlow = _util.css(_pin, "position") != "absolute",
			    pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
			    sizeCSS = _util.css(_pin, ["width", "height"]);
			_pin.parentNode.style.display = parentDisplay; // hack end.
			if (!inFlow && settings.pushFollowers) {
				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
				settings.pushFollowers = false;
			}
			window.setTimeout(function () {
				// wait until all finished, because with responsive duration it will only be set after scene is added to controller
				if (_pin && _options.duration === 0 && settings.pushFollowers) {
					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
				}
			}, 0);

			// create spacer and insert
			var spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
			    spacerCSS = _util.extend(pinCSS, {
				position: inFlow ? "relative" : "absolute",
				boxSizing: "content-box",
				mozBoxSizing: "content-box",
				webkitBoxSizing: "content-box"
			});

			if (!inFlow) {
				// copy size if positioned absolutely, to work for bottom/right positioned elements.
				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
			}

			_util.css(spacer, spacerCSS);
			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
			_util.addClass(spacer, settings.spacerClass);

			// set the pin Options
			_pinOptions = {
				spacer: spacer,
				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
					width: sizeCSS.width.slice(-1) === "%",
					height: sizeCSS.height.slice(-1) === "%",
					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
				},
				pushFollowers: settings.pushFollowers,
				inFlow: inFlow
				// stores if the element takes up space in the document flow
			};

			if (!_pin.___origStyle) {
				_pin.___origStyle = {};
				var pinInlineCSS = _pin.style,
				    copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
				copyStyles.forEach(function (val) {
					_pin.___origStyle[val] = pinInlineCSS[val] || "";
				});
			}

			// if relative size, transfer it to spacer and make pin calculate it...
			if (_pinOptions.relSize.width) {
				_util.css(spacer, {
					width: sizeCSS.width
				});
			}
			if (_pinOptions.relSize.height) {
				_util.css(spacer, {
					height: sizeCSS.height
				});
			}

			// now place the pin element inside the spacer	
			spacer.appendChild(_pin);
			// and set new css
			_util.css(_pin, {
				position: inFlow ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			});

			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
				_util.css(_pin, {
					boxSizing: "border-box",
					mozBoxSizing: "border-box",
					webkitBoxSizing: "border-box"
				});
			}

			// add listener to document to update pin position in case controller is not the document.
			window.addEventListener('scroll', updatePinInContainer);
			window.addEventListener('resize', updatePinInContainer);
			window.addEventListener('resize', updateRelativePinSpacer);
			// add mousewheel listener to catch scrolls over fixed elements
			_pin.addEventListener("mousewheel", onMousewheelOverPin);
			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

			log(3, "added pin");

			// finally update the pin to init
			updatePinState();

			return Scene;
		};

		/**
   * Remove the pin from the scene.
   * @method ScrollMagic.Scene#removePin
   * @example
   * // remove the pin from the scene without resetting it (the spacer is not removed)
   * scene.removePin();
   *
   * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
   * scene.removePin(true);
   *
   * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
   * @returns {Scene} Parent object for chaining.
   */
		this.removePin = function (reset) {
			if (_pin) {
				if (_state === SCENE_STATE_DURING) {
					updatePinState(true); // force unpin at position
				}
				if (reset || !_controller) {
					// if there's no controller no progress was made anyway...
					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						// copy margins to child spacer
						var style = _pinOptions.spacer.style,
						    values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
						margins = {};
						values.forEach(function (val) {
							margins[val] = style[val] || "";
						});
						_util.css(pinTarget, margins);
					}
					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						// if it's the last pin for this element -> restore inline styles
						// TODO: only correctly set for first pin (when cascading) - how to fix?
						_util.css(_pin, _pin.___origStyle);
						delete _pin.___origStyle;
					}
				}
				window.removeEventListener('scroll', updatePinInContainer);
				window.removeEventListener('resize', updatePinInContainer);
				window.removeEventListener('resize', updateRelativePinSpacer);
				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
				_pin = undefined;
				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};

		var _cssClasses,
		    _cssClassElems = [];

		Scene.on("destroy.internal", function (e) {
			Scene.removeClassToggle(e.reset);
		});
		/**
   * Define a css class modification while the scene is active.  
   * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
   * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
   * @method ScrollMagic.Scene#setClassToggle
   * @example
   * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
   * scene.setClassToggle("#my-elem", "myclass");
   *
   * // add multiple classes to multiple elements defined by the selector '.classChange'
   * scene.setClassToggle(".classChange", "class1 class2 class3");
   *
   * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
   * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
   *
   * @returns {Scene} Parent object for chaining.
   */
		this.setClassToggle = function (element, classes) {
			var elems = _util.get.elements(element);
			if (elems.length === 0 || !_util.type.String(classes)) {
				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
				return Scene;
			}
			if (_cssClassElems.length > 0) {
				// remove old ones
				Scene.removeClassToggle();
			}
			_cssClasses = classes;
			_cssClassElems = elems;
			Scene.on("enter.internal_class leave.internal_class", function (e) {
				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
				_cssClassElems.forEach(function (elem, key) {
					toggle(elem, _cssClasses);
				});
			});
			return Scene;
		};

		/**
   * Remove the class binding from the scene.
   * @method ScrollMagic.Scene#removeClassToggle
   * @example
   * // remove class binding from the scene without reset
   * scene.removeClassToggle();
   *
   * // remove class binding and remove the changes it caused
   * scene.removeClassToggle(true);
   *
   * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
   * @returns {Scene} Parent object for chaining.
   */
		this.removeClassToggle = function (reset) {
			if (reset) {
				_cssClassElems.forEach(function (elem, key) {
					_util.removeClass(elem, _cssClasses);
				});
			}
			Scene.off("start.internal_class end.internal_class");
			_cssClasses = undefined;
			_cssClassElems = [];
			return Scene;
		};

		// INIT
		construct();
		return Scene;
	};

	// store pagewide scene options
	var SCENE_OPTIONS = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: undefined,
			triggerHook: 0.5,
			reverse: true,
			loglevel: 2
		},
		validate: {
			offset: function offset(val) {
				val = parseFloat(val);
				if (!_util.type.Number(val)) {
					throw ["Invalid value for option \"offset\":", val];
				}
				return val;
			},
			triggerElement: function triggerElement(val) {
				val = val || undefined;
				if (val) {
					var elem = _util.get.elements(val)[0];
					if (elem) {
						val = elem;
					} else {
						throw ["Element defined in option \"triggerElement\" was not found:", val];
					}
				}
				return val;
			},
			triggerHook: function triggerHook(val) {
				var translate = {
					"onCenter": 0.5,
					"onEnter": 1,
					"onLeave": 0
				};
				if (_util.type.Number(val)) {
					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
				} else if (val in translate) {
					val = translate[val];
				} else {
					throw ["Invalid value for option \"triggerHook\": ", val];
				}
				return val;
			},
			reverse: function reverse(val) {
				return !!val; // force boolean
			},
			loglevel: function loglevel(val) {
				val = parseInt(val);
				if (!_util.type.Number(val) || val < 0 || val > 3) {
					throw ["Invalid value for option \"loglevel\":", val];
				}
				return val;
			}
		},
		// holder for  validation methods. duration validation is handled in 'getters-setters.js'
		shifts: ["duration", "offset", "triggerHook"]
		// list of options that trigger a `shift` event
	};
	/*
  * method used to add an option to ScrollMagic Scenes.
  * TODO: DOC (private for dev)
  */
	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
		if (!(name in SCENE_OPTIONS.defaults)) {
			SCENE_OPTIONS.defaults[name] = defaultValue;
			SCENE_OPTIONS.validate[name] = validationCallback;
			if (shifts) {
				SCENE_OPTIONS.shifts.push(name);
			}
		} else {
			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
		}
	};
	// instance extension function for plugins
	// TODO: DOC (private for dev)
	ScrollMagic.Scene.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Scene = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
	};

	/**
  * TODO: DOCS (private for dev)
  * @class
  * @private
  */

	ScrollMagic.Event = function (type, namespace, target, vars) {
		vars = vars || {};
		for (var key in vars) {
			this[key] = vars[key];
		}
		this.type = type;
		this.target = this.currentTarget = target;
		this.namespace = namespace || '';
		this.timeStamp = this.timestamp = Date.now();
		return this;
	};

	/*
  * TODO: DOCS (private for dev)
  */

	var _util = ScrollMagic._util = function (window) {
		var U = {},
		    i;

		/**
   * ------------------------------
   * internal helpers
   * ------------------------------
   */

		// parse float and fall back to 0.
		var floatval = function floatval(number) {
			return parseFloat(number) || 0;
		};
		// get current style IE safe (otherwise IE would return calculated values for 'auto')
		var _getComputedStyle = function _getComputedStyle(elem) {
			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
		};

		// get element dimension (width or height)
		var _dimension = function _dimension(which, elem, outer, includeMargin) {
			elem = elem === document ? window : elem;
			if (elem === window) {
				includeMargin = false;
			} else if (!_type.DomElement(elem)) {
				return 0;
			}
			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
			if (outer && includeMargin) {
				var style = _getComputedStyle(elem);
				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
			}
			return dimension;
		};
		// converts 'margin-top' into 'marginTop'
		var _camelCase = function _camelCase(str) {
			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});
		};

		/**
   * ------------------------------
   * external helpers
   * ------------------------------
   */

		// extend obj – same as jQuery.extend({}, objA, objB)
		U.extend = function (obj) {
			obj = obj || {};
			for (i = 1; i < arguments.length; i++) {
				if (!arguments[i]) {
					continue;
				}
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) {
						obj[key] = arguments[i][key];
					}
				}
			}
			return obj;
		};

		// check if a css display type results in margin-collapse or not
		U.isMarginCollapseType = function (str) {
			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
		};

		// implementation of requestAnimationFrame
		// based on https://gist.github.com/paulirish/1579671
		var lastTime = 0,
		    vendors = ['ms', 'moz', 'webkit', 'o'];
		var _requestAnimationFrame = window.requestAnimationFrame;
		var _cancelAnimationFrame = window.cancelAnimationFrame;
		// try vendor prefixes if the above doesn't work
		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}

		// fallbacks
		if (!_requestAnimationFrame) {
			_requestAnimationFrame = function _requestAnimationFrame(callback) {
				var currTime = new Date().getTime(),
				    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
				    id = window.setTimeout(function () {
					callback(currTime + timeToCall);
				}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!_cancelAnimationFrame) {
			_cancelAnimationFrame = function _cancelAnimationFrame(id) {
				window.clearTimeout(id);
			};
		}
		U.rAF = _requestAnimationFrame.bind(window);
		U.cAF = _cancelAnimationFrame.bind(window);

		var loglevels = ["error", "warn", "log"],
		    console = window.console || {};

		console.log = console.log || function () {}; // no console log, well - do nothing then...
		// make sure methods for all levels exist.
		for (i = 0; i < loglevels.length; i++) {
			var method = loglevels[i];
			if (!console[method]) {
				console[method] = console.log; // prefer .log over nothing
			}
		}
		U.log = function (loglevel) {
			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
			var now = new Date(),
			    time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
			    method = loglevels[loglevel - 1],
			    args = Array.prototype.splice.call(arguments, 1),
			    func = Function.prototype.bind.call(console[method], console);
			args.unshift(time);
			func.apply(console, args);
		};

		/**
   * ------------------------------
   * type testing
   * ------------------------------
   */

		var _type = U.type = function (v) {
			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		};
		_type.String = function (v) {
			return _type(v) === 'string';
		};
		_type.Function = function (v) {
			return _type(v) === 'function';
		};
		_type.Array = function (v) {
			return Array.isArray(v);
		};
		_type.Number = function (v) {
			return !_type.Array(v) && v - parseFloat(v) + 1 >= 0;
		};
		_type.DomElement = function (o) {
			return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === "object" ? o instanceof HTMLElement : //DOM2
			o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
		};

		/**
   * ------------------------------
   * DOM Element info
   * ------------------------------
   */
		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
		var _get = U.get = {};
		_get.elements = function (selector) {
			var arr = [];
			if (_type.String(selector)) {
				try {
					selector = document.querySelectorAll(selector);
				} catch (e) {
					// invalid selector
					return arr;
				}
			}
			if (_type(selector) === 'nodelist' || _type.Array(selector)) {
				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) {
					// list of elements
					var elem = selector[i];
					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
				}
			} else if (_type.DomElement(selector) || selector === document || selector === window) {
				arr = [selector]; // only the element
			}
			return arr;
		};
		// get scroll top value
		_get.scrollTop = function (elem) {
			return elem && typeof elem.scrollTop === 'number' ? elem.scrollTop : window.pageYOffset || 0;
		};
		// get scroll left value
		_get.scrollLeft = function (elem) {
			return elem && typeof elem.scrollLeft === 'number' ? elem.scrollLeft : window.pageXOffset || 0;
		};
		// get element height
		_get.width = function (elem, outer, includeMargin) {
			return _dimension('width', elem, outer, includeMargin);
		};
		// get element width
		_get.height = function (elem, outer, includeMargin) {
			return _dimension('height', elem, outer, includeMargin);
		};

		// get element position (optionally relative to viewport)
		_get.offset = function (elem, relativeToViewport) {
			var offset = {
				top: 0,
				left: 0
			};
			if (elem && elem.getBoundingClientRect) {
				// check if available
				var rect = elem.getBoundingClientRect();
				offset.top = rect.top;
				offset.left = rect.left;
				if (!relativeToViewport) {
					// clientRect is by default relative to viewport...
					offset.top += _get.scrollTop();
					offset.left += _get.scrollLeft();
				}
			}
			return offset;
		};

		/**
   * ------------------------------
   * DOM Element manipulation
   * ------------------------------
   */

		U.addClass = function (elem, classname) {
			if (classname) {
				if (elem.classList) elem.classList.add(classname);else elem.className += ' ' + classname;
			}
		};
		U.removeClass = function (elem, classname) {
			if (classname) {
				if (elem.classList) elem.classList.remove(classname);else elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		// if options is string -> returns css value
		// if options is array -> returns object with css value pairs
		// if options is object -> set new css values
		U.css = function (elem, options) {
			if (_type.String(options)) {
				return _getComputedStyle(elem)[_camelCase(options)];
			} else if (_type.Array(options)) {
				var obj = {},
				    style = _getComputedStyle(elem);
				options.forEach(function (option, key) {
					obj[option] = style[_camelCase(option)];
				});
				return obj;
			} else {
				for (var option in options) {
					var val = options[option];
					if (val == parseFloat(val)) {
						// assume pixel for seemingly numerical values
						val += 'px';
					}
					elem.style[_camelCase(option)] = val;
				}
			}
		};

		return U;
	}(window || {});

	ScrollMagic.Scene.prototype.addIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	};
	ScrollMagic.Scene.prototype.removeIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	};
	ScrollMagic.Scene.prototype.setTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	};
	ScrollMagic.Scene.prototype.removeTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	};
	ScrollMagic.Scene.prototype.setVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	};
	ScrollMagic.Scene.prototype.removeVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	};

	return ScrollMagic;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subNavigation = __webpack_require__(10);

var _subNavigation2 = _interopRequireDefault(_subNavigation);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _subNavigation2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scrollmagic = __webpack_require__(2);

var _scrollmagic2 = _interopRequireDefault(_scrollmagic);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SubNavigation = function () {
  function SubNavigation() {
    _classCallCheck(this, SubNavigation);

    this.subNavigation = document.querySelector(".js-sub-navigation");
    this.subNavigationMarker = this.subNavigation.querySelector(".js-sub-navigation-marker");
    this.subNavigationItems = this.subNavigation.querySelectorAll("li");
    this.sections = document.querySelectorAll(".js-spy-section");

    this.listenForAnchorClick = this.listenForAnchorClick.bind(this);
    this.updateMarker = this.updateMarker.bind(this);
    this.makeMarkerVisible = this.makeMarkerVisible.bind(this);
    this.makeMarkerInvisible = this.makeMarkerInvisible.bind(this);
    this.setMarkerWidth = this.setMarkerWidth.bind(this);
    this.setMarkerOffset = this.setMarkerOffset.bind(this);
    this.setMarkerTransition = this.setMarkerTransition.bind(this);
    this.updateMarkerOffsetOnResize = this.updateMarkerOffsetOnResize.bind(this);
    this.setUpScrollSpy = this.setUpScrollSpy.bind(this);
    this.setUpItems = this.setUpItems.bind(this);
    this.scrollActiveMarkerIntoView = this.scrollActiveMarkerIntoView.bind(this);

    this.currentItem = null;

    this.motionQuery = window.matchMedia("(prefers-reduced-motion)");
  }

  _createClass(SubNavigation, [{
    key: "listenForAnchorClick",
    value: function listenForAnchorClick(anchor) {
      var _this = this;

      anchor.addEventListener("click", function (event) {
        var hashId = anchor.hash.replace("#", "");

        window.scroll({
          top: document.getElementById(hashId).offsetTop - _this.subNavigation.offsetHeight,
          left: 0,
          behavior: "smooth"
        });

        event.preventDefault();
      });
    }
  }, {
    key: "scrollActiveMarkerIntoView",
    value: function scrollActiveMarkerIntoView(offset) {
      var list = this.subNavigation.querySelector("ul");

      if (typeof list.scroll === "function") {
        list.scroll({
          top: 0,
          left: offset - 24,
          behavior: "smooth"
        });
      }
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
      var _this2 = this;

      setTimeout(function () {
        _this2.subNavigationMarker.style.transition = "opacity 200ms, transform 200ms";
      }, 200);
    }
  }, {
    key: "updateMarkerOffsetOnResize",
    value: function updateMarkerOffsetOnResize() {
      var _this3 = this;

      window.addEventListener("resize", function () {
        setTimeout(function () {
          if (_this3.currentItem) {
            _this3.updateMarker(_this3.currentItem);
          }
        }, 100);
      });
    }
  }, {
    key: "setUpScrollSpy",
    value: function setUpScrollSpy() {
      var _this4 = this;

      var controller = new _scrollmagic2.default.Controller({
        globalSceneOptions: {
          triggerHook: "onEnter"
        }
      });

      this.updateMarkerOffsetOnResize();

      (0, _utils.forEach)(this.sections, function (index, section) {
        var scene = new _scrollmagic2.default.Scene({
          duration: document.getElementById(section.id).offsetHeight,
          offset: document.getElementById(section.id).offsetTop - _this4.subNavigation.offsetHeight
        }).addTo(controller);

        scene.on("enter", function () {
          _this4.currentItem = document.getElementById(section.id + "-item");
          _this4.updateMarker(_this4.currentItem);

          if (_this4.currentItem && !_this4.motionQuery.matches) {
            _this4.setMarkerTransition();
          }
        });

        scene.on("leave", function (event) {
          if (index === 0 && event.scrollDirection === "REVERSE") {
            _this4.makeMarkerInvisible();
          }

          if (index === _this4.sections.length - 1 && event.scrollDirection === "FORWARD") {
            _this4.makeMarkerInvisible();
          }
        });
      });
    }
  }, {
    key: "setUpItems",
    value: function setUpItems() {
      var _this5 = this;

      (0, _utils.forEach)(this.subNavigationItems, function (index, item) {
        var anchor = item.querySelector("a");

        _this5.listenForAnchorClick(anchor);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (typeof window.CSS !== "undefined" && window.CSS.supports("position", "sticky")) {
        this.setUpScrollSpy();
      }

      this.setUpItems();
    }
  }]);

  return SubNavigation;
}();

exports.default = SubNavigation;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(22);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = __webpack_require__(25);

var _modal2 = _interopRequireDefault(_modal);

__webpack_require__(26);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _modal2.default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _noScroll = __webpack_require__(6);

var _noScroll2 = _interopRequireDefault(_noScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.document = document.documentElement;
    this.modal = document.querySelector(".js-modal");
    this.modalTrigger = document.querySelector(".js-modal-trigger");
    this.modalContent = document.querySelector(".js-modal-content");
    this.modalClose = document.querySelector(".js-modal-close");
    this.modalOverlay = document.querySelector(".js-overlay");
    this.mql = window.matchMedia("(min-width: 768px)");

    this.content = null;
    this.openClassName = "is-open";

    // this.checkScreenSize = this.checkScreenSize.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
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
    key: "close",
    value: function close() {
      var _this = this;

      if (this.modal.classList.contains(this.openClassName)) {
        _noScroll2.default.off();
        this.modalClose.removeEventListener("click", this.close, false);

        this.modal.setAttribute("tabindex", "-1");
        this.modal.setAttribute("aria-hidden", "true");
        this.modal.classList.remove(this.openClassName);
        this.modalOverlay.classList.remove(this.openClassName);

        setTimeout(function () {
          _this.modal.classList.add("hidden");
          _this.modalOverlay.classList.add("hidden");
          // this.modal.style.display = "none";
          // this.modalOverlay.style.display = "none";
          if (_this.content) {
            _this.modalContent.innerHTML = "";
          }
        }, 200);

        // this.modalOverlay.classList.remove(this.openClassName);
        // setTimeout(() => {
        //   document.body.removeChild(this.modalOverlay);
        // }, 200);

        document.removeEventListener("click", this.clickOutside, false);
      }
    }
  }, {
    key: "open",
    value: function open(content) {
      var _this2 = this;

      if (!this.modal.classList.contains(this.openClassName)) {
        _noScroll2.default.on();
        this.modalClose.addEventListener("click", this.close, false);
        document.addEventListener("click", this.clickOutside, false);
        this.onEscapePress();

        this.modal.setAttribute("tabindex", "0");
        this.modal.setAttribute("aria-hidden", "false");
        // this.modal.style.display = "block";
        // this.modalOverlay.style.display = "block";
        this.modal.classList.remove("hidden");
        this.modalOverlay.classList.remove("hidden");

        setTimeout(function () {
          _this2.modal.classList.add(_this2.openClassName);
          _this2.modalOverlay.classList.add(_this2.openClassName);
        }, 10);

        if (content) {
          this.content = content;
          this.modalContent.innerHTML = this.content;
        }

        // document.body.appendChild(this.modalOverlay);
        // setTimeout(() => {
        //   this.modalOverlay.classList.add(this.openClassName);
        // }, 10);
      }
    }
  }, {
    key: "clickOutside",
    value: function clickOutside(event) {
      var isModal = this.modal.contains(event.target);
      // const isTrigger = this.modalTrigger.contains(event.target);

      // if (!isModal && !isTrigger) {
      if (!isModal) {
        this.close();
      }

      event.preventDefault();
    }
  }, {
    key: "onEscapePress",
    value: function onEscapePress() {
      var _this3 = this;

      document.onkeyup = function (event) {
        if (event.keyCode === 27) {
          _this3.close();
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      // this.checkScreenSize(this.mql);
      // this.mql.addListener(this.checkScreenSize);

      // console.log(this.modalOverlay());
      // console.log(this.mod());

      // this.modal.style.display = "none";
      // this.modalOverlay.style.display = "none";

      console.log(this.modalContent);

      // if (this.modalTrigger) {
      //   this.modalTrigger.addEventListener("click", () => {
      //     this.open();
      //
      //
      //     // document.body.innerHTML = this.modalOverlay();
      //     // $("body").append(this.modalOverlay());
      //     // $("body").find(".js-overlay").addClass("is-open");
      //     // this.document.querySelector(".js-overlay").classList.add("is-open");
      //
      //     // console.log(this.modalOverlay());
      //     // document.body.appendChild();
      //   });
      // }
    }
  }]);

  return Modal;
}();

exports.default = Modal;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(28);

__webpack_require__(1);

__webpack_require__(15);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hamburger = __webpack_require__(42);

var _hamburger2 = _interopRequireDefault(_hamburger);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _hamburger2.default;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function (window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if (window.HTMLPictureElement && /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) {
		addEventListener("resize", function () {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function fixRespimg(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function () {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function () {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function findPictureImgs() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function onResize() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function init() {
				onResize();

				if (mq && mq.addListener) {
					mq.addListener(onResize);
				}
			};

			dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

			if (/^[c|i]|d$/.test(document.readyState || "")) {
				init();
			} else {
				document.addEventListener("DOMContentLoaded", init);
			}

			return onResize;
		}());
	}
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function (window, document, undefined) {
	// Enable strict mode
	"use strict";

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)

	document.createElement("picture");

	var warn, eminpx, alwaysCheckWDescriptor, evalId;
	// local object for method references and testing exposure
	var pf = {};
	var isSupportTestReady = false;
	var noop = function noop() {};
	var image = document.createElement("img");
	var getImgAttr = image.getAttribute;
	var setImgAttr = image.setAttribute;
	var removeImgAttr = image.removeAttribute;
	var docElem = document.documentElement;
	var types = {};
	var cfg = {
		//resource selection:
		algorithm: ""
	};
	var srcAttr = "data-pfsrc";
	var srcsetAttr = srcAttr + "set";
	// ua sniffing is done for undetectable img loading features,
	// to do some non crucial perf optimizations
	var ua = navigator.userAgent;
	var supportAbort = /rident/.test(ua) || /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35;
	var curSrcProp = "currentSrc";
	var regWDesc = /\s+\+?\d+(e\d+)?w/;
	var regSize = /(\([^)]+\))?\s*(.+)/;
	var setOptions = window.picturefillCFG;
	/**
  * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
  */
	// baseStyle also used by getEmValue (i.e.: width: 1em is important)
	var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
	var fsCss = "font-size:100%!important;";
	var isVwDirty = true;

	var cssCache = {};
	var sizeLengthCache = {};
	var DPR = window.devicePixelRatio;
	var units = {
		px: 1,
		"in": 96
	};
	var anchor = document.createElement("a");
	/**
  * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
  * @type {boolean}
  */
	var alreadyRun = false;

	// Reusable, non-"g" Regexes

	// (Don't use \s, to avoid matching non-breaking space.)
	var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
	    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
	    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
	    regexTrailingCommas = /[,]+$/,
	    regexNonNegativeInteger = /^\d+$/,


	// ( Positive or negative or unsigned integers or decimals, without or without exponents.
	// Must include at least one digit.
	// According to spec tests any decimal point must be followed by a digit.
	// No leading plus sign is allowed.)
	// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
	regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

	var on = function on(obj, evt, fn, capture) {
		if (obj.addEventListener) {
			obj.addEventListener(evt, fn, capture || false);
		} else if (obj.attachEvent) {
			obj.attachEvent("on" + evt, fn);
		}
	};

	/**
  * simple memoize function:
  */

	var memoize = function memoize(fn) {
		var cache = {};
		return function (input) {
			if (!(input in cache)) {
				cache[input] = fn(input);
			}
			return cache[input];
		};
	};

	// UTILITY FUNCTIONS

	// Manual is faster than RegEx
	// http://jsperf.com/whitespace-character/5
	function isSpace(c) {
		return c === " " || // space
		c === "\t" || // horizontal tab
		c === "\n" || // new line
		c === "\f" || // form feed
		c === "\r"; // carriage return
	}

	/**
  * gets a mediaquery and returns a boolean or gets a css length and returns a number
  * @param css mediaqueries or css length
  * @returns {boolean|number}
  *
  * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
  */
	var evalCSS = function () {

		var regLength = /^([\d\.]+)(em|vw|px)$/;
		var replace = function replace() {
			var args = arguments,
			    index = 0,
			    string = args[0];
			while (++index in args) {
				string = string.replace(args[index], args[++index]);
			}
			return string;
		};

		var buildStr = memoize(function (css) {

			return "return " + replace((css || "").toLowerCase(),
			// interpret `and`
			/\band\b/g, "&&",

			// interpret `,`
			/,/g, "||",

			// interpret `min-` as >=
			/min-([a-z-\s]+):/g, "e.$1>=",

			// interpret `max-` as <=
			/max-([a-z-\s]+):/g, "e.$1<=",

			//calc value
			/calc([^)]+)/g, "($1)",

			// interpret css values
			/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
			//make eval less evil
			/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, "") + ";";
		});

		return function (css, length) {
			var parsedLength;
			if (!(css in cssCache)) {
				cssCache[css] = false;
				if (length && (parsedLength = css.match(regLength))) {
					cssCache[css] = parsedLength[1] * units[parsedLength[2]];
				} else {
					/*jshint evil:true */
					try {
						cssCache[css] = new Function("e", buildStr(css))(units);
					} catch (e) {}
					/*jshint evil:false */
				}
			}
			return cssCache[css];
		};
	}();

	var setResolution = function setResolution(candidate, sizesattr) {
		if (candidate.w) {
			// h = means height: || descriptor.type === 'h' do not handle yet...
			candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
			candidate.res = candidate.w / candidate.cWidth;
		} else {
			candidate.res = candidate.d;
		}
		return candidate;
	};

	/**
  *
  * @param opt
  */
	var picturefill = function picturefill(opt) {

		if (!isSupportTestReady) {
			return;
		}

		var elements, i, plen;

		var options = opt || {};

		if (options.elements && options.elements.nodeType === 1) {
			if (options.elements.nodeName.toUpperCase() === "IMG") {
				options.elements = [options.elements];
			} else {
				options.context = options.elements;
				options.elements = null;
			}
		}

		elements = options.elements || pf.qsa(options.context || document, options.reevaluate || options.reselect ? pf.sel : pf.selShort);

		if (plen = elements.length) {

			pf.setupRun(options);
			alreadyRun = true;

			// Loop through all elements
			for (i = 0; i < plen; i++) {
				pf.fillImg(elements[i], options);
			}

			pf.teardownRun(options);
		}
	};

	/**
  * outputs a warning for the developer
  * @param {message}
  * @type {Function}
  */
	warn = window.console && console.warn ? function (message) {
		console.warn(message);
	} : noop;

	if (!(curSrcProp in image)) {
		curSrcProp = "src";
	}

	// Add support for standard mime types.
	types["image/jpeg"] = true;
	types["image/gif"] = true;
	types["image/png"] = true;

	function detectTypeSupport(type, typeUri) {
		// based on Modernizr's lossless img-webp test
		// note: asynchronous
		var image = new window.Image();
		image.onerror = function () {
			types[type] = false;
			picturefill();
		};
		image.onload = function () {
			types[type] = image.width === 1;
			picturefill();
		};
		image.src = typeUri;
		return "pending";
	}

	// test svg support
	types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");

	/**
  * updates the internal vW property with the current viewport width in px
  */
	function updateMetrics() {

		isVwDirty = false;
		DPR = window.devicePixelRatio;
		cssCache = {};
		sizeLengthCache = {};

		pf.DPR = DPR || 1;

		units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
		units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

		units.vw = units.width / 100;
		units.vh = units.height / 100;

		evalId = [units.height, units.width, DPR].join("-");

		units.em = pf.getEmValue();
		units.rem = units.em;
	}

	function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
		var bonusFactor, tooMuch, bonus, meanDensity;

		//experimental
		if (cfg.algorithm === "saveData") {
			if (lowerValue > 2.7) {
				meanDensity = dprValue + 1;
			} else {
				tooMuch = higherValue - dprValue;
				bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

				bonus = tooMuch * bonusFactor;

				if (isCached) {
					bonus += 0.1 * bonusFactor;
				}

				meanDensity = lowerValue + bonus;
			}
		} else {
			meanDensity = dprValue > 1 ? Math.sqrt(lowerValue * higherValue) : lowerValue;
		}

		return meanDensity > dprValue;
	}

	function applyBestCandidate(img) {
		var srcSetCandidates;
		var matchingSet = pf.getSet(img);
		var evaluated = false;
		if (matchingSet !== "pending") {
			evaluated = evalId;
			if (matchingSet) {
				srcSetCandidates = pf.setRes(matchingSet);
				pf.applySetCandidate(srcSetCandidates, img);
			}
		}
		img[pf.ns].evaled = evaluated;
	}

	function ascendingSort(a, b) {
		return a.res - b.res;
	}

	function setSrcToCur(img, src, set) {
		var candidate;
		if (!set && src) {
			set = img[pf.ns].sets;
			set = set && set[set.length - 1];
		}

		candidate = getCandidateForSrc(src, set);

		if (candidate) {
			src = pf.makeUrl(src);
			img[pf.ns].curSrc = src;
			img[pf.ns].curCan = candidate;

			if (!candidate.res) {
				setResolution(candidate, candidate.set.sizes);
			}
		}
		return candidate;
	}

	function getCandidateForSrc(src, set) {
		var i, candidate, candidates;
		if (src && set) {
			candidates = pf.parseSet(set);
			src = pf.makeUrl(src);
			for (i = 0; i < candidates.length; i++) {
				if (src === pf.makeUrl(candidates[i].url)) {
					candidate = candidates[i];
					break;
				}
			}
		}
		return candidate;
	}

	function getAllSourceElements(picture, candidates) {
		var i, len, source, srcset;

		// SPEC mismatch intended for size and perf:
		// actually only source elements preceding the img should be used
		// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
		var sources = picture.getElementsByTagName("source");

		for (i = 0, len = sources.length; i < len; i++) {
			source = sources[i];
			source[pf.ns] = true;
			srcset = source.getAttribute("srcset");

			// if source does not have a srcset attribute, skip
			if (srcset) {
				candidates.push({
					srcset: srcset,
					media: source.getAttribute("media"),
					type: source.getAttribute("type"),
					sizes: source.getAttribute("sizes")
				});
			}
		}
	}

	/**
  * Srcset Parser
  * By Alex Bell |  MIT License
  *
  * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
  *
  * Based super duper closely on the reference algorithm at:
  * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
  */

	// 1. Let input be the value passed to this algorithm.
	// (TO-DO : Explain what "set" argument is here. Maybe choose a more
	// descriptive & more searchable name.  Since passing the "set" in really has
	// nothing to do with parsing proper, I would prefer this assignment eventually
	// go in an external fn.)
	function parseSrcset(input, set) {

		function collectCharacters(regEx) {
			var chars,
			    match = regEx.exec(input.substring(pos));
			if (match) {
				chars = match[0];
				pos += chars.length;
				return chars;
			}
		}

		var inputLength = input.length,
		    url,
		    descriptors,
		    currentDescriptor,
		    state,
		    c,


		// 2. Let position be a pointer into input, initially pointing at the start
		//    of the string.
		pos = 0,


		// 3. Let candidates be an initially empty source set.
		candidates = [];

		/**
  * Adds descriptor properties to a candidate, pushes to the candidates array
  * @return undefined
  */
		// (Declared outside of the while loop so that it's only created once.
		// (This fn is defined before it is used, in order to pass JSHINT.
		// Unfortunately this breaks the sequencing of the spec comments. :/ )
		function parseDescriptors() {

			// 9. Descriptor parser: Let error be no.
			var pError = false,


			// 10. Let width be absent.
			// 11. Let density be absent.
			// 12. Let future-compat-h be absent. (We're implementing it now as h)
			w,
			    d,
			    h,
			    i,
			    candidate = {},
			    desc,
			    lastChar,
			    value,
			    intVal,
			    floatVal;

			// 13. For each descriptor in descriptors, run the appropriate set of steps
			// from the following list:
			for (i = 0; i < descriptors.length; i++) {
				desc = descriptors[i];

				lastChar = desc[desc.length - 1];
				value = desc.substring(0, desc.length - 1);
				intVal = parseInt(value, 10);
				floatVal = parseFloat(value);

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0077 LATIN SMALL LETTER W character
				if (regexNonNegativeInteger.test(value) && lastChar === "w") {

					// If width and density are not both absent, then let error be yes.
					if (w || d) {
						pError = true;
					}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes.
					// Otherwise, let width be the result.
					if (intVal === 0) {
						pError = true;
					} else {
						w = intVal;
					}

					// If the descriptor consists of a valid floating-point number followed by
					// a U+0078 LATIN SMALL LETTER X character
				} else if (regexFloatingPoint.test(value) && lastChar === "x") {

					// If width, density and future-compat-h are not all absent, then let error
					// be yes.
					if (w || d || h) {
						pError = true;
					}

					// Apply the rules for parsing floating-point number values to the descriptor.
					// If the result is less than zero, let error be yes. Otherwise, let density
					// be the result.
					if (floatVal < 0) {
						pError = true;
					} else {
						d = floatVal;
					}

					// If the descriptor consists of a valid non-negative integer followed by
					// a U+0068 LATIN SMALL LETTER H character
				} else if (regexNonNegativeInteger.test(value) && lastChar === "h") {

					// If height and density are not both absent, then let error be yes.
					if (h || d) {
						pError = true;
					}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes. Otherwise, let future-compat-h
					// be the result.
					if (intVal === 0) {
						pError = true;
					} else {
						h = intVal;
					}

					// Anything else, Let error be yes.
				} else {
					pError = true;
				}
			} // (close step 13 for loop)

			// 15. If error is still no, then append a new image source to candidates whose
			// URL is url, associated with a width width if not absent and a pixel
			// density density if not absent. Otherwise, there is a parse error.
			if (!pError) {
				candidate.url = url;

				if (w) {
					candidate.w = w;
				}
				if (d) {
					candidate.d = d;
				}
				if (h) {
					candidate.h = h;
				}
				if (!h && !d && !w) {
					candidate.d = 1;
				}
				if (candidate.d === 1) {
					set.has1x = true;
				}
				candidate.set = set;

				candidates.push(candidate);
			}
		} // (close parseDescriptors fn)

		/**
  * Tokenizes descriptor properties prior to parsing
  * Returns undefined.
  * (Again, this fn is defined before it is used, in order to pass JSHINT.
  * Unfortunately this breaks the logical sequencing of the spec comments. :/ )
  */
		function tokenize() {

			// 8.1. Descriptor tokeniser: Skip whitespace
			collectCharacters(regexLeadingSpaces);

			// 8.2. Let current descriptor be the empty string.
			currentDescriptor = "";

			// 8.3. Let state be in descriptor.
			state = "in descriptor";

			while (true) {

				// 8.4. Let c be the character at position.
				c = input.charAt(pos);

				//  Do the following depending on the value of state.
				//  For the purpose of this step, "EOF" is a special character representing
				//  that position is past the end of input.

				// In descriptor
				if (state === "in descriptor") {
					// Do the following, depending on the value of c:

					// Space character
					// If current descriptor is not empty, append current descriptor to
					// descriptors and let current descriptor be the empty string.
					// Set state to after descriptor.
					if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}

						// U+002C COMMA (,)
						// Advance position to the next character in input. If current descriptor
						// is not empty, append current descriptor to descriptors. Jump to the step
						// labeled descriptor parser.
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

						// U+0028 LEFT PARENTHESIS (()
						// Append c to current descriptor. Set state to in parens.
					} else if (c === "(") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";

						// EOF
						// If current descriptor is not empty, append current descriptor to
						// descriptors. Jump to the step labeled descriptor parser.
					} else if (c === "") {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

						// Anything else
						// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}
					// (end "in descriptor"

					// In parens
				} else if (state === "in parens") {

					// U+0029 RIGHT PARENTHESIS ())
					// Append c to current descriptor. Set state to in descriptor.
					if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";

						// EOF
						// Append current descriptor to descriptors. Jump to the step labeled
						// descriptor parser.
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;

						// Anything else
						// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}

					// After descriptor
				} else if (state === "after descriptor") {

					// Do the following, depending on the value of c:
					// Space character: Stay in this state.
					if (isSpace(c)) {

						// EOF: Jump to the step labeled descriptor parser.
					} else if (c === "") {
						parseDescriptors();
						return;

						// Anything else
						// Set state to in descriptor. Set position to the previous character in input.
					} else {
						state = "in descriptor";
						pos -= 1;
					}
				}

				// Advance position to the next character in input.
				pos += 1;

				// Repeat this step.
			} // (close while true loop)
		}

		// 4. Splitting loop: Collect a sequence of characters that are space
		//    characters or U+002C COMMA characters. If any U+002C COMMA characters
		//    were collected, that is a parse error.
		while (true) {
			collectCharacters(regexLeadingCommasOrSpaces);

			// 5. If position is past the end of input, return candidates and abort these steps.
			if (pos >= inputLength) {
				return candidates; // (we're done, this is the sole return path)
			}

			// 6. Collect a sequence of characters that are not space characters,
			//    and let that be url.
			url = collectCharacters(regexLeadingNotSpaces);

			// 7. Let descriptors be a new empty list.
			descriptors = [];

			// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
			//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
			//         more than one character, that is a parse error.
			if (url.slice(-1) === ",") {
				url = url.replace(regexTrailingCommas, "");
				// (Jump ahead to step 9 to skip tokenization and just push the candidate).
				parseDescriptors();

				//	Otherwise, follow these substeps:
			} else {
				tokenize();
			} // (close else of step 8)

			// 16. Return to the step labeled splitting loop.
		} // (Close of big while loop.)
	}

	/*
  * Sizes Parser
  *
  * By Alex Bell |  MIT License
  *
  * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
  *
  * Reference algorithm at:
  * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
  *
  * Most comments are copied in directly from the spec
  * (except for comments in parens).
  *
  * Grammar is:
  * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
  * <source-size> = <media-condition> <source-size-value>
  * <source-size-value> = <length>
  * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
  *
  * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
  * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
  *
  * Returns the first valid <css-length> with a media condition that evaluates to true,
  * or "100vw" if all valid media conditions evaluate to false.
  *
  */

	function parseSizes(strValue) {

		// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
		// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
		// CSS allows a single optional plus or minus sign:
		// http://www.w3.org/TR/CSS2/syndata.html#numbers
		// CSS is ASCII case-insensitive:
		// http://www.w3.org/TR/CSS2/syndata.html#characters )
		// Spec allows exponential notation for <number> type:
		// http://dev.w3.org/csswg/css-values/#numbers
		var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

		// (This is a quick and lenient test. Because of optional unlimited-depth internal
		// grouping parens and strict spacing rules, this could get very complicated.)
		var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

		var i;
		var unparsedSizesList;
		var unparsedSizesListLength;
		var unparsedSize;
		var lastComponentValue;
		var size;

		// UTILITY FUNCTIONS

		//  (Toy CSS parser. The goals here are:
		//  1) expansive test coverage without the weight of a full CSS parser.
		//  2) Avoiding regex wherever convenient.
		//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
		//  Returns an array of arrays.)
		function parseComponentValues(str) {
			var chrctr;
			var component = "";
			var componentArray = [];
			var listArray = [];
			var parenDepth = 0;
			var pos = 0;
			var inComment = false;

			function pushComponent() {
				if (component) {
					componentArray.push(component);
					component = "";
				}
			}

			function pushComponentArray() {
				if (componentArray[0]) {
					listArray.push(componentArray);
					componentArray = [];
				}
			}

			// (Loop forwards from the beginning of the string.)
			while (true) {
				chrctr = str.charAt(pos);

				if (chrctr === "") {
					// ( End of string reached.)
					pushComponent();
					pushComponentArray();
					return listArray;
				} else if (inComment) {
					if (chrctr === "*" && str[pos + 1] === "/") {
						// (At end of a comment.)
						inComment = false;
						pos += 2;
						pushComponent();
						continue;
					} else {
						pos += 1; // (Skip all characters inside comments.)
						continue;
					}
				} else if (isSpace(chrctr)) {
					// (If previous character in loop was also a space, or if
					// at the beginning of the string, do not add space char to
					// component.)
					if (str.charAt(pos - 1) && isSpace(str.charAt(pos - 1)) || !component) {
						pos += 1;
						continue;
					} else if (parenDepth === 0) {
						pushComponent();
						pos += 1;
						continue;
					} else {
						// (Replace any space character with a plain space for legibility.)
						chrctr = " ";
					}
				} else if (chrctr === "(") {
					parenDepth += 1;
				} else if (chrctr === ")") {
					parenDepth -= 1;
				} else if (chrctr === ",") {
					pushComponent();
					pushComponentArray();
					pos += 1;
					continue;
				} else if (chrctr === "/" && str.charAt(pos + 1) === "*") {
					inComment = true;
					pos += 2;
					continue;
				}

				component = component + chrctr;
				pos += 1;
			}
		}

		function isValidNonNegativeSourceSizeValue(s) {
			if (regexCssLengthWithUnits.test(s) && parseFloat(s) >= 0) {
				return true;
			}
			if (regexCssCalc.test(s)) {
				return true;
			}
			// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
			// "-0 is equivalent to 0 and is not a negative number." which means that
			// unitless zero and unitless negative zero must be accepted as special cases.)
			if (s === "0" || s === "-0" || s === "+0") {
				return true;
			}
			return false;
		}

		// When asked to parse a sizes attribute from an element, parse a
		// comma-separated list of component values from the value of the element's
		// sizes attribute (or the empty string, if the attribute is absent), and let
		// unparsed sizes list be the result.
		// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

		unparsedSizesList = parseComponentValues(strValue);
		unparsedSizesListLength = unparsedSizesList.length;

		// For each unparsed size in unparsed sizes list:
		for (i = 0; i < unparsedSizesListLength; i++) {
			unparsedSize = unparsedSizesList[i];

			// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
			// ( parseComponentValues() already omits spaces outside of parens. )

			// If unparsed size is now empty, that is a parse error; continue to the next
			// iteration of this algorithm.
			// ( parseComponentValues() won't push an empty array. )

			// 2. If the last component value in unparsed size is a valid non-negative
			// <source-size-value>, let size be its value and remove the component value
			// from unparsed size. Any CSS function other than the calc() function is
			// invalid. Otherwise, there is a parse error; continue to the next iteration
			// of this algorithm.
			// http://dev.w3.org/csswg/css-syntax/#parse-component-value
			lastComponentValue = unparsedSize[unparsedSize.length - 1];

			if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
				size = lastComponentValue;
				unparsedSize.pop();
			} else {
				continue;
			}

			// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
			// size. If unparsed size is now empty, return size and exit this algorithm.
			// If this was not the last item in unparsed sizes list, that is a parse error.
			if (unparsedSize.length === 0) {
				return size;
			}

			// 4. Parse the remaining component values in unparsed size as a
			// <media-condition>. If it does not parse correctly, or it does parse
			// correctly but the <media-condition> evaluates to false, continue to the
			// next iteration of this algorithm.
			// (Parsing all possible compound media conditions in JS is heavy, complicated,
			// and the payoff is unclear. Is there ever an situation where the
			// media condition parses incorrectly but still somehow evaluates to true?
			// Can we just rely on the browser/polyfill to do it?)
			unparsedSize = unparsedSize.join(" ");
			if (!pf.matchesMedia(unparsedSize)) {
				continue;
			}

			// 5. Return size and exit this algorithm.
			return size;
		}

		// If the above algorithm exhausts unparsed sizes list without returning a
		// size value, return 100vw.
		return "100vw";
	}

	// namespace
	pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

	// srcset support test
	pf.supSrcset = "srcset" in image;
	pf.supSizes = "sizes" in image;
	pf.supPicture = !!window.HTMLPictureElement;

	// UC browser does claim to support srcset and picture, but not sizes,
	// this extended test reveals the browser does support nothing
	if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
		(function (image2) {
			image.srcset = "data:,a";
			image2.src = "data:,a";
			pf.supSrcset = image.complete === image2.complete;
			pf.supPicture = pf.supSrcset && pf.supPicture;
		})(document.createElement("img"));
	}

	// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
	if (pf.supSrcset && !pf.supSizes) {

		(function () {
			var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
			var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
			var img = document.createElement("img");
			var test = function test() {
				var width = img.width;

				if (width === 2) {
					pf.supSizes = true;
				}

				alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

				isSupportTestReady = true;
				// force async
				setTimeout(picturefill);
			};

			img.onload = test;
			img.onerror = test;
			img.setAttribute("sizes", "9px");

			img.srcset = width1 + " 1w," + width2 + " 9w";
			img.src = width1;
		})();
	} else {
		isSupportTestReady = true;
	}

	// using pf.qsa instead of dom traversing does scale much better,
	// especially on sites mixing responsive and non-responsive images
	pf.selShort = "picture>img,img[srcset]";
	pf.sel = pf.selShort;
	pf.cfg = cfg;

	/**
  * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
  */
	pf.DPR = DPR || 1;
	pf.u = units;

	// container of supported mime types that one might need to qualify before using
	pf.types = types;

	pf.setSize = noop;

	/**
  * Gets a string and returns the absolute URL
  * @param src
  * @returns {String} absolute URL
  */

	pf.makeUrl = memoize(function (src) {
		anchor.href = src;
		return anchor.href;
	});

	/**
  * Gets a DOM element or document and a selctor and returns the found matches
  * Can be extended with jQuery/Sizzle for IE7 support
  * @param context
  * @param sel
  * @returns {NodeList|Array}
  */
	pf.qsa = function (context, sel) {
		return "querySelector" in context ? context.querySelectorAll(sel) : [];
	};

	/**
  * Shortcut method for matchMedia ( for easy overriding in tests )
  * wether native or pf.mMQ is used will be decided lazy on first call
  * @returns {boolean}
  */
	pf.matchesMedia = function () {
		if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
			pf.matchesMedia = function (media) {
				return !media || matchMedia(media).matches;
			};
		} else {
			pf.matchesMedia = pf.mMQ;
		}

		return pf.matchesMedia.apply(this, arguments);
	};

	/**
  * A simplified matchMedia implementation for IE8 and IE9
  * handles only min-width/max-width with px or em values
  * @param media
  * @returns {boolean}
  */
	pf.mMQ = function (media) {
		return media ? evalCSS(media) : true;
	};

	/**
  * Returns the calculated length in css pixel from the given sourceSizeValue
  * http://dev.w3.org/csswg/css-values-3/#length-value
  * intended Spec mismatches:
  * * Does not check for invalid use of CSS functions
  * * Does handle a computed length of 0 the same as a negative and therefore invalid value
  * @param sourceSizeValue
  * @returns {Number}
  */
	pf.calcLength = function (sourceSizeValue) {

		var value = evalCSS(sourceSizeValue, true) || false;
		if (value < 0) {
			value = false;
		}

		return value;
	};

	/**
  * Takes a type string and checks if its supported
  */

	pf.supportsType = function (type) {
		return type ? types[type] : true;
	};

	/**
  * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
  * @param sourceSizeStr
  * @returns {*}
  */
	pf.parseSize = memoize(function (sourceSizeStr) {
		var match = (sourceSizeStr || "").match(regSize);
		return {
			media: match && match[1],
			length: match && match[2]
		};
	});

	pf.parseSet = function (set) {
		if (!set.cands) {
			set.cands = parseSrcset(set.srcset, set);
		}
		return set.cands;
	};

	/**
  * returns 1em in css px for html/body default size
  * function taken from respondjs
  * @returns {*|number}
  */
	pf.getEmValue = function () {
		var body;
		if (!eminpx && (body = document.body)) {
			var div = document.createElement("div"),
			    originalHTMLCSS = docElem.style.cssText,
			    originalBodyCSS = body.style.cssText;

			div.style.cssText = baseStyle;

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.cssText = fsCss;
			body.style.cssText = fsCss;

			body.appendChild(div);
			eminpx = div.offsetWidth;
			body.removeChild(div);

			//also update eminpx before returning
			eminpx = parseFloat(eminpx, 10);

			// restore the original values
			docElem.style.cssText = originalHTMLCSS;
			body.style.cssText = originalBodyCSS;
		}
		return eminpx || 16;
	};

	/**
  * Takes a string of sizes and returns the width in pixels as a number
  */
	pf.calcListLength = function (sourceSizeListStr) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//
		//                           or (min-width:30em) calc(30% - 15px)
		if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
			var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));

			sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength;
		}

		return sizeLengthCache[sourceSizeListStr];
	};

	/**
  * Takes a candidate object with a srcset property in the form of url/
  * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
  *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
  *     "images/pic-small.png"
  * Get an array of image candidates in the form of
  *      {url: "/foo/bar.png", resolution: 1}
  * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
  * If sizes is specified, res is calculated
  */
	pf.setRes = function (set) {
		var candidates;
		if (set) {

			candidates = pf.parseSet(set);

			for (var i = 0, len = candidates.length; i < len; i++) {
				setResolution(candidates[i], set.sizes);
			}
		}
		return candidates;
	};

	pf.setRes.res = setResolution;

	pf.applySetCandidate = function (candidates, img) {
		if (!candidates.length) {
			return;
		}
		var candidate, i, j, length, bestCandidate, curSrc, curCan, candidateSrc, abortCurSrc;

		var imageData = img[pf.ns];
		var dpr = pf.DPR;

		curSrc = imageData.curSrc || img[curSrcProp];

		curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

		// if we have a current source, we might either become lazy or give this source some advantage
		if (curCan && curCan.set === candidates[0].set) {

			// if browser can abort image request and the image has a higher pixel density than needed
			// and this image isn't downloaded yet, we skip next part and try to save bandwidth
			abortCurSrc = supportAbort && !img.complete && curCan.res - 0.1 > dpr;

			if (!abortCurSrc) {
				curCan.cached = true;

				// if current candidate is "best", "better" or "okay",
				// set it to bestCandidate
				if (curCan.res >= dpr) {
					bestCandidate = curCan;
				}
			}
		}

		if (!bestCandidate) {

			candidates.sort(ascendingSort);

			length = candidates.length;
			bestCandidate = candidates[length - 1];

			for (i = 0; i < length; i++) {
				candidate = candidates[i];
				if (candidate.res >= dpr) {
					j = i - 1;

					// we have found the perfect candidate,
					// but let's improve this a little bit with some assumptions ;-)
					if (candidates[j] && (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) && chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {

						bestCandidate = candidates[j];
					} else {
						bestCandidate = candidate;
					}
					break;
				}
			}
		}

		if (bestCandidate) {

			candidateSrc = pf.makeUrl(bestCandidate.url);

			imageData.curSrc = candidateSrc;
			imageData.curCan = bestCandidate;

			if (candidateSrc !== curSrc) {
				pf.setSrc(img, bestCandidate);
			}
			pf.setSize(img);
		}
	};

	pf.setSrc = function (img, bestCandidate) {
		var origWidth;
		img.src = bestCandidate.url;

		// although this is a specific Safari issue, we don't want to take too much different code paths
		if (bestCandidate.set.type === "image/svg+xml") {
			origWidth = img.style.width;
			img.style.width = img.offsetWidth + 1 + "px";

			// next line only should trigger a repaint
			// if... is only done to trick dead code removal
			if (img.offsetWidth + 1) {
				img.style.width = origWidth;
			}
		}
	};

	pf.getSet = function (img) {
		var i, set, supportsType;
		var match = false;
		var sets = img[pf.ns].sets;

		for (i = 0; i < sets.length && !match; i++) {
			set = sets[i];

			if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
				continue;
			}

			if (supportsType === "pending") {
				set = supportsType;
			}

			match = set;
			break;
		}

		return match;
	};

	pf.parseSets = function (element, parent, options) {
		var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

		var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
		var imageData = element[pf.ns];

		if (imageData.src === undefined || options.src) {
			imageData.src = getImgAttr.call(element, "src");
			if (imageData.src) {
				setImgAttr.call(element, srcAttr, imageData.src);
			} else {
				removeImgAttr.call(element, srcAttr);
			}
		}

		if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
			srcsetAttribute = getImgAttr.call(element, "srcset");
			imageData.srcset = srcsetAttribute;
			srcsetParsed = true;
		}

		imageData.sets = [];

		if (hasPicture) {
			imageData.pic = true;
			getAllSourceElements(parent, imageData.sets);
		}

		if (imageData.srcset) {
			imageSet = {
				srcset: imageData.srcset,
				sizes: getImgAttr.call(element, "sizes")
			};

			imageData.sets.push(imageSet);

			isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

			// add normal src as candidate, if source has no w descriptor
			if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
				imageSet.srcset += ", " + imageData.src;
				imageSet.cands.push({
					url: imageData.src,
					d: 1,
					set: imageSet
				});
			}
		} else if (imageData.src) {
			imageData.sets.push({
				srcset: imageData.src,
				sizes: null
			});
		}

		imageData.curCan = null;
		imageData.curSrc = undefined;

		// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
		// or has a w descriptor (and does not support sizes) set support to false to evaluate
		imageData.supported = !(hasPicture || imageSet && !pf.supSrcset || isWDescripor && !pf.supSizes);

		if (srcsetParsed && pf.supSrcset && !imageData.supported) {
			if (srcsetAttribute) {
				setImgAttr.call(element, srcsetAttr, srcsetAttribute);
				element.srcset = "";
			} else {
				removeImgAttr.call(element, srcsetAttr);
			}
		}

		if (imageData.supported && !imageData.srcset && (!imageData.src && element.src || element.src !== pf.makeUrl(imageData.src))) {
			if (imageData.src === null) {
				element.removeAttribute("src");
			} else {
				element.src = imageData.src;
			}
		}

		imageData.parsed = true;
	};

	pf.fillImg = function (element, options) {
		var imageData;
		var extreme = options.reselect || options.reevaluate;

		// expando for caching data on the img
		if (!element[pf.ns]) {
			element[pf.ns] = {};
		}

		imageData = element[pf.ns];

		// if the element has already been evaluated, skip it
		// unless `options.reevaluate` is set to true ( this, for example,
		// is set to true when running `picturefill` on `resize` ).
		if (!extreme && imageData.evaled === evalId) {
			return;
		}

		if (!imageData.parsed || options.reevaluate) {
			pf.parseSets(element, element.parentNode, options);
		}

		if (!imageData.supported) {
			applyBestCandidate(element);
		} else {
			imageData.evaled = evalId;
		}
	};

	pf.setupRun = function () {
		if (!alreadyRun || isVwDirty || DPR !== window.devicePixelRatio) {
			updateMetrics();
		}
	};

	// If picture is supported, well, that's awesome.
	if (pf.supPicture) {
		picturefill = noop;
		pf.fillImg = noop;
	} else {

		// Set up picture polyfill by polling the document
		(function () {
			var isDomReady;
			var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

			var run = function run() {
				var readyState = document.readyState || "";

				timerId = setTimeout(run, readyState === "loading" ? 200 : 999);
				if (document.body) {
					pf.fillImgs();
					isDomReady = isDomReady || regReady.test(readyState);
					if (isDomReady) {
						clearTimeout(timerId);
					}
				}
			};

			var timerId = setTimeout(run, document.body ? 9 : 99);

			// Also attach picturefill on resize and readystatechange
			// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
			var debounce = function debounce(func, wait) {
				var timeout, timestamp;
				var later = function later() {
					var last = new Date() - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func();
					}
				};

				return function () {
					timestamp = new Date();

					if (!timeout) {
						timeout = setTimeout(later, wait);
					}
				};
			};
			var lastClientWidth = docElem.clientHeight;
			var onResize = function onResize() {
				isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
				lastClientWidth = docElem.clientHeight;
				if (isVwDirty) {
					pf.fillImgs();
				}
			};

			on(window, "resize", debounce(onResize, 99));
			on(document, "readystatechange", run);
		})();
	}

	pf.picturefill = picturefill;
	//use this internally for easy monkey patching/performance testing
	pf.fillImgs = picturefill;
	pf.teardownRun = noop;

	/* expose methods for testing */
	picturefill._ = pf;

	window.picturefillCFG = {
		pf: pf,
		push: function push(args) {
			var name = args.shift();
			if (typeof pf[name] === "function") {
				pf[name].apply(pf, args);
			} else {
				cfg[name] = args[0];
				if (alreadyRun) {
					pf.fillImgs({ reselect: true });
				}
			}
		}
	};

	while (setOptions && setOptions.length) {
		window.picturefillCFG.push(setOptions.shift());
	}

	/* expose picturefill */
	window.picturefill = picturefill;

	/* expose picturefill */
	if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
		// CommonJS, just export
		module.exports = picturefill;
	} else if (true) {
		// AMD support
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return picturefill;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// IE8 evals this sync, so it must be the last thing we do
	if (!pf.supPicture) {
		types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
	}
})(window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _banner = __webpack_require__(41);

var _banner2 = _interopRequireDefault(_banner);

__webpack_require__(43);

__webpack_require__(13);

__webpack_require__(31);

__webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _banner2.default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _noScroll = __webpack_require__(6);

var _noScroll2 = _interopRequireDefault(_noScroll);

var _hamburger = __webpack_require__(30);

var _hamburger2 = _interopRequireDefault(_hamburger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Banner = function () {
  function Banner(options) {
    _classCallCheck(this, Banner);

    this.options = options;

    this.document = document.documentElement;
    this.header = document.querySelector(".js-banner");
    this.hamburger = document.querySelector(".js-hamburger");
    this.navigation = document.querySelector(".js-navigation");
    this.mql = window.matchMedia("(max-width: 619px)");

    this.openClassName = "is-open";
    this.isOpen = false;

    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.hideNavigation = this.hideNavigation.bind(this);
    this.showNavigation = this.showNavigation.bind(this);
    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.onEscapePress = this.onEscapePress.bind(this);
  }

  _createClass(Banner, [{
    key: "checkScreenSize",
    value: function checkScreenSize(mql) {
      if (!mql.matches) {
        this.hideNavigation();
      }
    }
  }, {
    key: "hideNavigation",
    value: function hideNavigation() {
      if (this.navigation.classList.contains(this.openClassName)) {
        this.isOpen = false;
        _noScroll2.default.off();
        this.header.classList.remove(this.openClassName);
        this.navigation.classList.remove(this.openClassName);
        this.hamburger.classList.remove(this.openClassName);
      }
    }
  }, {
    key: "showNavigation",
    value: function showNavigation() {
      if (!this.navigation.classList.contains(this.openClassName)) {
        this.isOpen = true;
        _noScroll2.default.on();
        this.header.classList.add(this.openClassName);
        this.navigation.classList.add(this.openClassName);
        this.hamburger.classList.add(this.openClassName);
      }
    }
  }, {
    key: "toggleNavigation",
    value: function toggleNavigation() {
      return this.isOpen ? this.hideNavigation() : this.showNavigation();
    }
  }, {
    key: "onEscapePress",
    value: function onEscapePress() {
      var _this = this;

      document.onkeyup = function (event) {
        if (event.keyCode === 27) {
          _this.hideNavigation();
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var hamburger = new _hamburger2.default({
        onClick: function onClick() {
          _this2.toggleNavigation();
        }
      });

      hamburger.render();

      this.checkScreenSize(this.mql);
      this.mql.addListener(this.checkScreenSize);

      this.onEscapePress();
    }
  }]);

  return Banner;
}();

exports.default = Banner;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hamburger = function () {
  function Hamburger(options) {
    _classCallCheck(this, Hamburger);

    this.options = options;
    this.hamburger = document.querySelector(".js-hamburger");
    this.icon = this.hamburger.querySelector(".Hamburger-icon");
    this.onClick = this.onClick.bind(this);
    this.setIconLabel = this.setIconLabel.bind(this);
  }

  _createClass(Hamburger, [{
    key: "onClick",
    value: function onClick(event) {
      var onClick = this.options.onClick;


      onClick();
      this.setIconLabel();

      event.preventDefault();
    }
  }, {
    key: "setIconLabel",
    value: function setIconLabel() {
      if (this.hamburger.classList.contains("is-open")) {
        this.icon.innerHTML = "Close menu";
      } else {
        this.icon.innerHTML = "Open menu";
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.hamburger.addEventListener("click", this.onClick);
    }
  }]);

  return Hamburger;
}();

exports.default = Hamburger;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(45);

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(47);

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentinfo = __webpack_require__(49);

var _contentinfo2 = _interopRequireDefault(_contentinfo);

__webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentinfo2.default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable class-methods-use-this */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _locationSelect = __webpack_require__(50);

var _locationSelect2 = _interopRequireDefault(_locationSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Contentinfo = function () {
  function Contentinfo(options) {
    _classCallCheck(this, Contentinfo);

    this.options = options;
  }

  _createClass(Contentinfo, [{
    key: "render",
    value: function render() {
      var locationSelect = new _locationSelect2.default();

      locationSelect.render();
    }
  }]);

  return Contentinfo;
}();

exports.default = Contentinfo;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locationSelect = __webpack_require__(51);

var _locationSelect2 = _interopRequireDefault(_locationSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _locationSelect2.default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocationSelect = function () {
  function LocationSelect() {
    _classCallCheck(this, LocationSelect);

    this.locationSelect = document.querySelector(".js-location-select");
  }

  _createClass(LocationSelect, [{
    key: "render",
    value: function render() {
      this.locationSelect.onchange = function (event) {
        if (event.target.value) {
          window.location = event.target.value;
        }
      };
    }
  }]);

  return LocationSelect;
}();

exports.default = LocationSelect;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(54);

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(56);

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(58);

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(60);

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(62);

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(64);

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(66);

/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(68);

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(70);

/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * smoothscroll polyfill - v0.3.5
 * https://iamdustan.github.io/smoothscroll
 * 2016 (c) Dustan Kasten, Jeremias Menichelli - MIT License
 */

(function (w, d, undefined) {
  'use strict';

  /*
   * aliases
   * w: window global object
   * d: document
   * undefined: undefined
   */

  // polyfill

  function polyfill() {
    // return when scrollBehavior interface is supported
    if ('scrollBehavior' in d.documentElement.style) {
      return;
    }

    /*
     * globals
     */
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    /*
     * object gathering original scroll methods
     */
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    /*
     * define timing method
     */
    var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} x
     * @returns {Boolean}
     */
    function shouldBailOut(x) {
      if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object' || x === null || x.behavior === undefined || x.behavior === 'auto' || x.behavior === 'instant') {
        // first arg not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError('behavior not valid');
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      var isBody;
      var hasScrollableSpace;
      var hasVisibleOverflow;

      do {
        el = el.parentNode;

        // set condition variables
        isBody = el === d.body;
        hasScrollableSpace = el.clientHeight < el.scrollHeight || el.clientWidth < el.scrollWidth;
        hasVisibleOverflow = w.getComputedStyle(el, null).overflow === 'visible';
      } while (!isBody && !(hasScrollableSpace && !hasVisibleOverflow));

      isBody = hasScrollableSpace = hasVisibleOverflow = null;

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    /*
     * ORIGINAL METHODS OVERRIDES
     */

    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function () {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scroll.call(w, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(w, d.body, ~~arguments[0].left, ~~arguments[0].top);
    };

    // w.scrollBy
    w.scrollBy = function () {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(w, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function () {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.elScroll.call(this, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(this, this, typeof left === 'number' ? left : this.scrollLeft, typeof top === 'number' ? top : this.scrollTop);
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function () {
      var arg0 = arguments[0];

      if ((typeof arg0 === 'undefined' ? 'undefined' : _typeof(arg0)) === 'object') {
        this.scroll({
          left: arg0.left + this.scrollLeft,
          top: arg0.top + this.scrollTop,
          behavior: arg0.behavior
        });
      } else {
        this.scroll(this.scrollLeft + arg0, this.scrollTop + arguments[1]);
      }
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function () {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
        // reveal parent in viewport
        w.scrollBy({
          left: parentRects.left,
          top: parentRects.top,
          behavior: 'smooth'
        });
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (( false ? 'undefined' : _typeof(exports)) === 'object') {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {
    // global
    polyfill();
  }
})(window, document);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coverVideo = __webpack_require__(74);

var _coverVideo2 = _interopRequireDefault(_coverVideo);

__webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _coverVideo2.default;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CoverVideo = function () {
  _createClass(CoverVideo, null, [{
    key: "pauseVideo",
    value: function pauseVideo(video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  }]);

  function CoverVideo(options) {
    _classCallCheck(this, CoverVideo);

    this.options = options;

    this.container = document.querySelector(".js-cover-video");
    this.image = this.container.querySelector("img");
    this.video = this.container.querySelector("video");
    this.mql = window.matchMedia("(min-width: 768px)");
    this.motionQuery = window.matchMedia("(prefers-reduced-motion)");

    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.createVideo = this.createVideo.bind(this);
    this.addVideo = this.addVideo.bind(this);
    this.removeVideo = this.removeVideo.bind(this);

    this.shouldLoadVideo = "objectFit" in document.documentElement.style;
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
        CoverVideo.pauseVideo(event.target);
      });
    }
  }, {
    key: "addVideo",
    value: function addVideo() {
      var autoplay = !!this.container.dataset.autoplay;
      this.container.replaceChild(this.video, this.image);

      if (autoplay && !this.motionQuery.matches) {
        this.video.play();
      }
    }
  }, {
    key: "removeVideo",
    value: function removeVideo() {
      if (this.video && this.video.parentNode) {
        this.video.currentTime = 0;
        this.video.removeEventListener("click", CoverVideo.pauseVideo);
        this.container.replaceChild(this.image, this.video);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.shouldLoadVideo) {
        this.createVideo();
        this.checkScreenSize(this.mql);
        this.mql.addListener(this.checkScreenSize);
      }
    }
  }]);

  return CoverVideo;
}();

exports.default = CoverVideo;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(77);

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(79);

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


__webpack_require__(33);

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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(115);

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(117);

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(119);

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(121);

/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(123);

__webpack_require__(12);

/***/ }),
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(125);

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(127);

/***/ }),
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(129);

/***/ }),
/* 129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Import global modules

__webpack_require__(34);

__webpack_require__(36);

__webpack_require__(37);

__webpack_require__(156);

__webpack_require__(38);

__webpack_require__(39);

var _banner = __webpack_require__(40);

var _banner2 = _interopRequireDefault(_banner);

__webpack_require__(44);

__webpack_require__(92);

__webpack_require__(46);

__webpack_require__(128);

var _contentinfo = __webpack_require__(48);

var _contentinfo2 = _interopRequireDefault(_contentinfo);

__webpack_require__(3);

var _coverVideo = __webpack_require__(73);

var _coverVideo2 = _interopRequireDefault(_coverVideo);

__webpack_require__(27);

__webpack_require__(94);

__webpack_require__(96);

__webpack_require__(98);

__webpack_require__(30);

__webpack_require__(53);

__webpack_require__(100);

__webpack_require__(157);

__webpack_require__(55);

__webpack_require__(16);

__webpack_require__(57);

__webpack_require__(7);

__webpack_require__(80);

__webpack_require__(59);

var _locationFinder = __webpack_require__(18);

var _locationFinder2 = _interopRequireDefault(_locationFinder);

__webpack_require__(76);

__webpack_require__(86);

__webpack_require__(88);

__webpack_require__(158);

__webpack_require__(90);

__webpack_require__(4);

var _modal2 = __webpack_require__(24);

var _modal3 = _interopRequireDefault(_modal2);

__webpack_require__(21);

__webpack_require__(159);

__webpack_require__(102);

__webpack_require__(61);

__webpack_require__(160);

__webpack_require__(104);

__webpack_require__(63);

__webpack_require__(106);

__webpack_require__(108);

__webpack_require__(110);

__webpack_require__(112);

__webpack_require__(65);

__webpack_require__(161);

__webpack_require__(82);

__webpack_require__(114);

__webpack_require__(116);

__webpack_require__(118);

__webpack_require__(120);

__webpack_require__(9);

__webpack_require__(67);

__webpack_require__(78);

__webpack_require__(122);

__webpack_require__(29);

__webpack_require__(126);

__webpack_require__(69);

__webpack_require__(84);

__webpack_require__(124);

__webpack_require__(71);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import layout modules
if (document.querySelector(".CoverVideo")) {
  var coverVideo = new _coverVideo2.default();
  coverVideo.render();
}

// Import utils


// Import components


// Import icons


if (document.querySelector(".Contentinfo")) {
  var contentinfo = new _contentinfo2.default();
  contentinfo.render();
}

if (document.querySelector(".Banner")) {
  var banner = new _banner2.default();
  banner.render();
}

if (document.querySelector(".js-location-finder")) {
  var locationFinder = new _locationFinder2.default();
  locationFinder.render();
}

if (document.getElementById("modal-with-trigger-example")) {
  var modal = new _modal3.default();
  var modalTrigger = document.querySelector(".js-modal-trigger");

  if (modalTrigger) {
    modalTrigger.addEventListener("click", function () {
      modal.open();
    });
  }
}

if (document.getElementById("modal-with-dynamic-content-example")) {
  var _modal = new _modal3.default();
  var _modalTrigger = document.querySelector(".js-modal-trigger");
  var content = "\n    <h2 id=\"modal-with-dynamic-content-example-title\">Dynamic content example</h2>\n    <p id=\"modal-with-dynamic-content-example-description\">This content has been loaded dyanmically via JavaScript.</p>\n  ";

  if (_modalTrigger) {
    _modalTrigger.addEventListener("click", function () {
      _modal.open(content);
    });
  }
}

(0, _utils.replaceNoJsClassName)();
(0, _utils.objectFitCover)();

__webpack_require__(72).polyfill();

/***/ }),
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(15);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

__webpack_require__(13);

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(33);

/***/ })
/******/ ]);