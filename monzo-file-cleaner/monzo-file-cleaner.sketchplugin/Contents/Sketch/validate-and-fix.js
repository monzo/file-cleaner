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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cmd/validate-and-fix.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/artboards.js":
/*!**************************!*\
  !*** ./src/artboards.js ***!
  \**************************/
/*! exports provided: artboardsByName, artboardRowsByName, artboardRowsByPosition, autoAlignArtboards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "artboardsByName", function() { return artboardsByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "artboardRowsByName", function() { return artboardRowsByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "artboardRowsByPosition", function() { return artboardRowsByPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoAlignArtboards", function() { return autoAlignArtboards; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validators */ "./src/validators.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function artboardsByName(page) {
  var artboards = page.artboards();
  var artboardsByName = {};

  for (var i = 0; i < artboards.length; i++) {
    var name = String(artboards[i].name());
    artboardsByName[name] = artboards[i];
  }

  return artboardsByName;
}
function artboardRowsByName(page) {
  var artboards = page.artboards();
  var rows = {};

  for (var i = 0; i < artboards.length; i++) {
    var name = String(artboards[i].name());
    var number = parseInt(name.match(/\d+/)[0], 10);
    var rowName = String(number - number % 100);
    var row = rows[rowName] || [];
    row.push(artboards[i]);
    rows[rowName] = row.sort(function (a, b) {
      return a.frame().x() - b.frame().x();
    });
  }

  return rows;
}
function artboardRowsByPosition(page) {
  var artboards = page.artboards(); // Find the row covers

  var rowCovers = [];

  for (var i = 0; i < artboards.length; i++) {
    var number = parseInt(artboards[i].name(), 10);

    if (number % 100 === 0) {
      rowCovers.push(artboards[i]);
    }
  } // Sort the existing covers


  rowCovers.sort(function (a, b) {
    return a.frame().y() - b.frame().y();
  }); // Build up the rows, starting with their covers

  var rows = {};

  for (var _i = 0; _i < rowCovers.length; _i++) {
    var rowName = ((_i + 1) * 100).toString();
    rows[rowName] = [rowCovers[_i]];
  }

  var yPositions = Object.entries(rows).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        row = _ref2[1];

    return [name, row[0].frame().y()];
  }); // Add other artboards into the rows

  for (var _i2 = 0; _i2 < artboards.length; _i2++) {
    var artboard = artboards[_i2]; // Skip row covers, obvs...

    if (rowCovers.includes(artboard)) {
      continue;
    }

    var yPos = artboard.frame().y();
    var closestRow = void 0;
    var smallestDist = Infinity;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = yPositions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            _rowName = _step$value[0],
            rowYPos = _step$value[1];

        var yDist = Math.abs(yPos - rowYPos);

        if (yDist < smallestDist) {
          closestRow = _rowName;
          smallestDist = yDist;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    rows[closestRow].push(artboards[_i2]);
  } // Sort rows by board x position


  Object.values(rows).forEach(function (row) {
    return row.sort(function (a, b) {
      return a.frame().x() - b.frame().x();
    });
  });
  return rows;
}
function autoAlignArtboards(page) {
  var rows = artboardRowsByPosition(page);
  var rowNames = Object.keys(rows).sort(function (a, b) {
    return parseInt(a, 10) - parseInt(b, 10);
  });
  var y = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = rowNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var rowName = _step2.value;
      var row = rows[rowName];
      var x = 0;
      var nextYOffset = 1000;
      var sequenceNumber = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = row[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var artboard = _step3.value;
          // Make sure they're in the right order, so the list on the left is sorted
          var parent = artboard.parentGroup();
          artboard.removeFromParent();
          parent.insertLayer_atIndex(artboard, 0); // Update name

          var artboardNumber = parseInt(rowName, 10) + sequenceNumber;
          artboard.name = artboardNumber.toString(); // Update artboard's position
          // artboard.frame().{x,y}() isn't always relatively to (0,0), and using
          // absoluteRect.ruler{X,Y} seems to solve this

          artboard.absoluteRect().rulerX = x;
          artboard.absoluteRect().rulerY = y; // Use the height of the largest artboard on this row to determine the
          // y-offset of the next row (plus a small buffer for labels)

          var height = artboard.frame().height() + 100;

          if (height > nextYOffset) {
            // Snap to a 500 unit grid
            nextYOffset = height + (500 - height % 500);
          }

          x += 500;
          sequenceNumber++;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      y += nextYOffset;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

/***/ }),

/***/ "./src/cmd/validate-and-fix.js":
/*!*************************************!*\
  !*** ./src/cmd/validate-and-fix.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateAndFix; });
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validators */ "./src/validators.js");
/* harmony import */ var _artboards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artboards */ "./src/artboards.js");
/* harmony import */ var _wip_rows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wip-rows */ "./src/wip-rows.js");





function validateAndFix(context) {
  var result = Object(_validators__WEBPACK_IMPORTED_MODULE_2__["validateAll"])(context);

  if (!result.success) {
    sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.message("\u203C\uFE0F ".concat(result.message));
    return;
  }

  var master = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getMasterPage"])(context); // Fix artboard alignment on the Master page

  Object(_artboards__WEBPACK_IMPORTED_MODULE_3__["autoAlignArtboards"])(master); // Colour the backgrounds of rows with WIP symbols

  Object(_wip_rows__WEBPACK_IMPORTED_MODULE_4__["markWipRows"])(context, master);
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

/***/ "./src/wip-rows.js":
/*!*************************!*\
  !*** ./src/wip-rows.js ***!
  \*************************/
/*! exports provided: markWipRows, findWipRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markWipRows", function() { return markWipRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findWipRows", function() { return findWipRows; });
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _artboards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artboards */ "./src/artboards.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



var wipSymbolRegex = /\bWIP$/;
var defaultArtboardColor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["colorFromString"])("#000000");
var wipArtboardColor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["colorFromString"])("#F43951");
function markWipRows(context, page) {
  var wipRows = findWipRows(context, page);
  var rows = Object(_artboards__WEBPACK_IMPORTED_MODULE_1__["artboardRowsByName"])(page);

  var _arr = Object.keys(rows);

  for (var _i = 0; _i < _arr.length; _i++) {
    var rowNumber = _arr[_i];
    var artboard = rows[rowNumber][0];

    if (wipRows.includes(rowNumber)) {
      artboard.backgroundColor = wipArtboardColor;
    } else {
      // This conditional prevents us from e.g. changing green "approved"
      // artboards back to black
      if (artboard.backgroundColor().fuzzyIsEqual(wipArtboardColor)) {
        artboard.backgroundColor = defaultArtboardColor;
      }
    }
  }
}
function findWipRows(context, page) {
  var symbolMaster = sketch_dom__WEBPACK_IMPORTED_MODULE_0__["Document"].fromNative(context.document).getSymbols().find(function (s) {
    return s.name.match(wipSymbolRegex);
  });

  if (!symbolMaster) {
    console.log("Couldn't find WIP symbol");
    return [];
  }

  var wipRows = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = symbolMaster.getAllInstances()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var instance = _step.value;

      while (instance && instance.type != "Artboard") {
        instance = instance.parent;
      }

      if (instance && instance.sketchObject.parentPage() == page) {
        var boardNumber = parseInt(instance.name, 10);
        var rowName = (boardNumber - boardNumber % 100).toString();

        if (wipRows.indexOf(rowName) === -1) {
          wipRows.push(rowName);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return wipRows;
}

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

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

//# sourceMappingURL=validate-and-fix.js.map