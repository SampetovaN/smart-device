'use strict';
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/scrollBlock.js":
/*!**********************************!*\
  !*** ./source/js/scrollBlock.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


eval("\n\n(function () {\n  var BODY_LOCK_CLASS = 'body-lock';\n  var body = document.querySelector('body');\n\n  if (body) {\n    var existVerticalScroll = function () {\n      return document.body.offsetHeight > window.innerHeight;\n    };\n\n    var getBodyScrollTop = function () {\n      return self.pageYOffset || document.documentElement && document.documentElement.ScrollTop || document.body && document.body.scrollTop;\n    };\n\n    var setScrollBlock = function () {\n      body.dataset.scrollY = getBodyScrollTop();\n\n      if (existVerticalScroll()) {\n        body.classList.add(BODY_LOCK_CLASS);\n        body.style.top = '-' + body.dataset.scrollY + 'px';\n      }\n    };\n\n    var unsetScrollBlock = function () {\n      if (existVerticalScroll()) {\n        body.classList.remove(BODY_LOCK_CLASS);\n        window.scrollTo(0, body.dataset.scrollY);\n      }\n    };\n\n    window.scrollBlock = {\n      set: setScrollBlock,\n      unset: unsetScrollBlock\n    };\n  }\n})();\n\n//# sourceURL=webpack:///./source/js/scrollBlock.js?");

/***/ }),

/***/ "./source/js/utils..js":
/*!*****************************!*\
  !*** ./source/js/utils..js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


eval("\n\n(function () {\n  var ESCAPE_BUTTON = 'Escape';\n\n  var isEscEvent = function (evt, action) {\n    if (evt.key === ESCAPE_BUTTON) {\n      evt.preventDefault();\n      action(evt);\n    }\n  };\n\n  window.utils = {\n    isEscEvent: isEscEvent\n  };\n})();\n\n//# sourceURL=webpack:///./source/js/utils..js?");

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./source/js/scrollBlock.js ./source/js/utils..js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\nikas\\WebstormProjects\\smart-device\\source\\js\\scrollBlock.js */\"./source/js/scrollBlock.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\nikas\\WebstormProjects\\smart-device\\source\\js\\utils..js */\"./source/js/utils..js\");\n\n\n//# sourceURL=webpack:///multi_./source/js/scrollBlock.js_./source/js/utils..js?");

/***/ })

/******/ });