var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cmd/validate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cmd/validate.js":
/*!*****************************!*\
  !*** ./src/cmd/validate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validators */ "./src/validators.js");


function validate(context, hideSuccess) {
  var result = Object(_validators__WEBPACK_IMPORTED_MODULE_1__["validateAll"])(context);

  if (result.success) {
    sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.message("\uD83D\uDE0D Looks good");
  } else {
    sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.message("\u203C\uFE0F ".concat(result.message));
  }
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getMasterPage, colorFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMasterPage", function() { return getMasterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorFromString", function() { return colorFromString; });
function getMasterPage(context) {
  var pages = context.document.pages();

  for (var i = 0; i < pages.length; i++) {
    if (pages[i].name() == "Master") {
      return pages[i];
    }
  }

  return null;
}
function colorFromString(color) {
  return MSImmutableColor.colorWithSVGString(color).newMutableCounterpart();
}

/***/ }),

/***/ "./src/validators.js":
/*!***************************!*\
  !*** ./src/validators.js ***!
  \***************************/
/*! exports provided: default, validateAll, validateMasterPresence, validatePageNames, validateArtboardNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAll", function() { return validateAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMasterPresence", function() { return validateMasterPresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePageNames", function() { return validatePageNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateArtboardNames", function() { return validateArtboardNames; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");

var validators = [validateMasterPresence, validatePageNames, validateArtboardNames];
/* harmony default export */ __webpack_exports__["default"] = (validators);
function validateAll(context) {
  for (var _i = 0; _i < validators.length; _i++) {
    var validator = validators[_i];
    var result = validator(context);

    if (!result.success) {
      return result;
    }
  }

  return {
    success: true
  };
}
function validateMasterPresence(context) {
  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getMasterPage"])(context)) {
    return {
      success: false,
      message: "Missing page 'Master'"
    };
  }

  return {
    success: true
  };
}
function validatePageNames(context) {
  var allowedNames = ["Master", "Symbols"];
  var pages = context.document.pages();

  for (var i = 0; i < pages.length; i++) {
    var name = String(pages[i].name());

    if (allowedNames.indexOf(name) === -1) {
      return {
        success: false,
        message: "Invalid page name '".concat(name, "'")
      };
    }
  }

  return {
    success: true
  };
}
function validateArtboardNames(context) {
  var master = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getMasterPage"])(context);
  var artboards = master.artboards();
  var artboardsByName = {};

  for (var i = 0; i < artboards.length; i++) {
    var name = String(artboards[i].name());

    if (artboardsByName[name]) {
      return {
        success: false,
        message: "Duplicate artboard name '".concat(name, "'")
      };
    }

    artboardsByName[name] = name;

    if (!name.match(/^\d{3,4}(\.[A-Z]{1,2})?/)) {
      return {
        success: false,
        message: "Invalid artboard name '".concat(name, "'")
      };
    }
  }

  return {
    success: true
  };
}

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=validate.js.map