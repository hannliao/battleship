/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --bg-light: rgb(219, 205, 191);
  --bg-dark: rgba(9, 49, 71, 0.7);
  --darkblue: rgb(9, 49, 71);
  --cell: rgb(106, 151, 160);
  --hover: rgb(131, 154, 164);
  --border: #bcbcbc;
  --hit: #c41000;
  --miss: #dadada;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: var(--darkblue);
}

body {
  background-color: var(--bg-light);
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 80px 0;
}

button:hover:enabled {
  background-color: var(--hover);
  cursor: pointer;
}

header {
  padding: 36px 100px;
  background-color: var(--darkblue);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  color: var(--bg-light);
}

#new-game {
  background-color: var(--hover);
  border: 2px outset var(--border);
  border-radius: 50px;
  padding: 16px 30px;
  font-size: 16px;
  font-weight: bold;
}

#new-game:active {
  border-style: inset;
}

section {
  display: flex;
  padding: 30px;
}

.gameboard {
  display: grid;
  grid-template-columns: 50px 1fr;
  margin-bottom: 50px;
}

.axis:first-of-type {
  grid-column: 1 / 3;
  display: flex;
}

.axis * {
  width: 50px;
  height: 50px;
  align-content: center;
  text-align: center;
}

.board {
  display: grid;
  grid-template-columns: repeat(10, 50px);
  grid-template-rows: repeat(10, 50px);
  border: 2px solid var(--border);
}

.cell {
  background-color: var(--cell);
  width: 50px;
  height: 50px;
  border: 1px solid var(--border);
  border-bottom: none;
  border-right: none;
}

.player.gameboard .ship {
  background-color: var(--darkblue);
}

.hit {
  background-color: var(--hit);
}

.miss {
  background-color: var(--miss);
}

.stats {
  text-align: center;
  padding: 130px 40px;
}

ul {
  list-style-type: none;
  margin: 50px 0;
}

li {
  font-size: 20px;
  padding: 10px;
}

.strikethrough {
  text-decoration: line-through;
}

dialog {
  position: absolute;
  top: 500px;
  background-color: var(--darkblue);
  display: none;
  justify-items: center;
  align-content: center;
  gap: 30px;
  width: 100vw;
  height: 250px;
  border: none;
}

dialog * {
  color: var(--bg-light);
}

dialog h1 {
  color: var(--hit);
}

#close {
  background-color: var(--cell);
  padding: 12px 70px;
  border: none;
  border: 1px solid var(--border);
  border-radius: 25px;
  color: var(--darkblue);
  font-weight: bold;
}

#close:hover {
  background-color: var(--hover);
  color: var(--darkblue);
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,+BAA+B;EAC/B,0BAA0B;EAC1B,0BAA0B;EAC1B,2BAA2B;EAC3B,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,qDAAqD;EACrD,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,aAAa;EACb,iCAAiC;EACjC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,iCAAiC;EACjC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;EAC9B,gCAAgC;EAChC,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;EAC7B,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,iCAAiC;EACjC,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EACrB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;EACZ,+BAA+B;EAC/B,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf","sourcesContent":[":root {\n  --bg-light: rgb(219, 205, 191);\n  --bg-dark: rgba(9, 49, 71, 0.7);\n  --darkblue: rgb(9, 49, 71);\n  --cell: rgb(106, 151, 160);\n  --hover: rgb(131, 154, 164);\n  --border: #bcbcbc;\n  --hit: #c41000;\n  --miss: #dadada;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  color: var(--darkblue);\n}\n\nbody {\n  background-color: var(--bg-light);\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  height: 100vh;\n}\n\nmain {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 80px 0;\n}\n\nbutton:hover:enabled {\n  background-color: var(--hover);\n  cursor: pointer;\n}\n\nheader {\n  padding: 36px 100px;\n  background-color: var(--darkblue);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nheader h1 {\n  color: var(--bg-light);\n}\n\n#new-game {\n  background-color: var(--hover);\n  border: 2px outset var(--border);\n  border-radius: 50px;\n  padding: 16px 30px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n#new-game:active {\n  border-style: inset;\n}\n\nsection {\n  display: flex;\n  padding: 30px;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: 50px 1fr;\n  margin-bottom: 50px;\n}\n\n.axis:first-of-type {\n  grid-column: 1 / 3;\n  display: flex;\n}\n\n.axis * {\n  width: 50px;\n  height: 50px;\n  align-content: center;\n  text-align: center;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  border: 2px solid var(--border);\n}\n\n.cell {\n  background-color: var(--cell);\n  width: 50px;\n  height: 50px;\n  border: 1px solid var(--border);\n  border-bottom: none;\n  border-right: none;\n}\n\n.player.gameboard .ship {\n  background-color: var(--darkblue);\n}\n\n.hit {\n  background-color: var(--hit);\n}\n\n.miss {\n  background-color: var(--miss);\n}\n\n.stats {\n  text-align: center;\n  padding: 130px 40px;\n}\n\nul {\n  list-style-type: none;\n  margin: 50px 0;\n}\n\nli {\n  font-size: 20px;\n  padding: 10px;\n}\n\n.strikethrough {\n  text-decoration: line-through;\n}\n\ndialog {\n  position: absolute;\n  top: 500px;\n  background-color: var(--darkblue);\n  display: none;\n  justify-items: center;\n  align-content: center;\n  gap: 30px;\n  width: 100vw;\n  height: 250px;\n  border: none;\n}\n\ndialog * {\n  color: var(--bg-light);\n}\n\ndialog h1 {\n  color: var(--hit);\n}\n\n#close {\n  background-color: var(--cell);\n  padding: 12px 70px;\n  border: none;\n  border: 1px solid var(--border);\n  border-radius: 25px;\n  color: var(--darkblue);\n  font-weight: bold;\n}\n\n#close:hover {\n  background-color: var(--hover);\n  color: var(--darkblue);\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 50px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player1: () => (/* binding */ player1),
/* harmony export */   player2: () => (/* binding */ player2),
/* harmony export */   turn: () => (/* binding */ turn)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _scripts_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/ship */ "./src/scripts/ship.js");
/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/player */ "./src/scripts/player.js");
/* harmony import */ var _scripts_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/dom */ "./src/scripts/dom.js");





const game = () => {
  player1 = (0,_scripts_player__WEBPACK_IMPORTED_MODULE_2__["default"])('player');
  player2 = (0,_scripts_player__WEBPACK_IMPORTED_MODULE_2__["default"])('computer');
  turn = player1;

  const carrier1 = (0,_scripts_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('carrier', 5);
  const battleship1 = (0,_scripts_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('battleship', 4);
  const cruiser1 = (0,_scripts_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('cruiser', 3);
  const submarine1 = (0,_scripts_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('submarine', 3);
  const destroyer1 = (0,_scripts_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('destroyer', 2);

  let { orientation, x, y } = generateRandomPlacement(player1, carrier1);
  player1.gameboard.placeShip(carrier1, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player1, battleship1));
  player1.gameboard.placeShip(battleship1, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player1, cruiser1));
  player1.gameboard.placeShip(cruiser1, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player1, submarine1));
  player1.gameboard.placeShip(submarine1, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player1, destroyer1));
  player1.gameboard.placeShip(destroyer1, orientation, x, y);

  const carrier2 = (0,_scripts_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('carrier', 5);
  const battleship2 = (0,_scripts_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('battleship', 4);
  const cruiser2 = (0,_scripts_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('cruiser', 3);
  const submarine2 = (0,_scripts_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('submarine', 3);
  const destroyer2 = (0,_scripts_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('destroyer', 2);

  ({ orientation, x, y } = generateRandomPlacement(player2, carrier2));
  player2.gameboard.placeShip(carrier2, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player2, battleship2));
  player2.gameboard.placeShip(battleship2, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player2, cruiser2));
  player2.gameboard.placeShip(cruiser2, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player2, submarine2));
  player2.gameboard.placeShip(submarine2, orientation, x, y);
  ({ orientation, x, y } = generateRandomPlacement(player2, destroyer2));
  player2.gameboard.placeShip(destroyer2, orientation, x, y);

  (0,_scripts_dom__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(player2);
  (0,_scripts_dom__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(player1);

  play(player1, player2);

  function play(player1, player2) {
    const computerCells = document.querySelectorAll('.computer .cell');
    computerCells.forEach((cell) => {
      cell.addEventListener('click', (e) => {
        cell.disabled = true;
        const x = e.target.dataset.x;
        const y = e.target.dataset.y;
        player1.attack(x, y, player2);
        (0,_scripts_dom__WEBPACK_IMPORTED_MODULE_3__.renderAttack)(cell);
        if (!player2.gameboard.lost()) {
          turn = player2;
          computerTurn();
        } else {
          (0,_scripts_dom__WEBPACK_IMPORTED_MODULE_3__.gameOver)(player1);
        }
      });
    });
  }

  function computerTurn() {
    setTimeout(() => {
      let randomX;
      let randomY;
      do {
        randomX = generateRandomNumber(player2.gameboard.size);
        randomY = generateRandomNumber(player2.gameboard.size);
      } while (player2.attacks.has(`${randomX},${randomY}`));

      player2.attack(randomX, randomY, player1);
      const cell = document.querySelector(
        `.player .cell[data-x='${randomX}'][data-y='${randomY}']`
      );
      (0,_scripts_dom__WEBPACK_IMPORTED_MODULE_3__.renderAttack)(cell);

      if (!player1.gameboard.lost()) {
        turn = player1;
      } else {
        (0,_scripts_dom__WEBPACK_IMPORTED_MODULE_3__.gameOver)(player2);
      }
    }, 200);
  }

  function generateRandomNumber(range) {
    return Math.floor(Math.random() * range);
  }

  function generateRandomPlacement(player, ship) {
    let orientation, x, y;
    do {
      orientation = generateRandomNumber(2) === 0 ? 'x' : 'y';
      x = generateRandomNumber(player1.gameboard.size);
      y = generateRandomNumber(player1.gameboard.size);
    } while (!player.gameboard.placeShip(ship, orientation, x, y));
    return { orientation, x, y };
  }

  const newGameButton = document.getElementById('new-game');
  newGameButton.addEventListener('click', () => {
    player1.gameboard.clear();
    player2.gameboard.clear();
    (0,_scripts_dom__WEBPACK_IMPORTED_MODULE_3__.clearStats)();
    game();
  });

  return {
    player1,
    player2,
    turn,
  };
};

let player1;
let player2;
let turn;
game();




/***/ }),

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearStats: () => (/* binding */ clearStats),
/* harmony export */   gameOver: () => (/* binding */ gameOver),
/* harmony export */   renderAttack: () => (/* binding */ renderAttack),
/* harmony export */   renderBoard: () => (/* binding */ renderBoard),
/* harmony export */   updateStats: () => (/* binding */ updateStats)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");


function renderBoard(player) {
  const board = document.createElement('div');
  board.classList.add('board');

  for (let row = 0; row < player.gameboard.size; row++) {
    for (let col = 0; col < player.gameboard.size; col++) {
      const cell = document.createElement('button');
      cell.classList.add('cell');
      cell.dataset.x = col;
      cell.dataset.y = row;
      if (player.gameboard.board[col][row] !== null) {
        cell.classList.add('ship');
      } else {
        cell.classList.add('empty');
      }
      if (player.name === 'player') {
        cell.disabled = true;
      }
      board.appendChild(cell);
    }
  }
  const { xAxisDiv, yAxisDiv } = renderAxes();
  const boardContainer = document.querySelector(`.${player.name}.gameboard`);
  boardContainer.innerHTML = '';
  boardContainer.append(xAxisDiv, yAxisDiv, board);
}

function renderAttack(cell) {
  if (cell.classList.contains('ship')) {
    cell.classList.remove('ship');
    cell.classList.add('hit');
  } else {
    cell.classList.add('miss');
  }
}

function renderAxes() {
  const xAxisDiv = document.createElement('div');
  const xAxis = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  xAxis.forEach((num) => renderAxis(num, xAxisDiv));

  const yAxisDiv = document.createElement('div');
  const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  yAxis.forEach((letter) => renderAxis(letter, yAxisDiv));

  return { xAxisDiv, yAxisDiv };
}

function renderAxis(label, axisDiv) {
  const axis = document.createElement('div');
  axis.textContent = label;
  axisDiv.appendChild(axis);
  axisDiv.classList.add('axis');
}

function updateStats(shipId) {
  const opponent = _index_js__WEBPACK_IMPORTED_MODULE_0__.turn === _index_js__WEBPACK_IMPORTED_MODULE_0__.player1 ? _index_js__WEBPACK_IMPORTED_MODULE_0__.player2 : _index_js__WEBPACK_IMPORTED_MODULE_0__.player1;
  const shipName = document.querySelector(`.${opponent.name} .${shipId}`);
  shipName.classList.add('strikethrough');
}

function clearStats() {
  const stats = document.querySelectorAll('li');
  stats.forEach((stat) => {
    stat.classList.remove('strikethrough');
  });
}

function gameOver(winner) {
  const dialog = document.querySelector('dialog');
  dialog.style.display = 'grid';
  const winnerDiv = document.querySelector('.winner');
  winnerDiv.textContent = `${winner.name} wins!`;
  const closeButton = document.getElementById('close');
  closeButton.addEventListener('click', () => {
    dialog.style.display = 'none';
  });
}




/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/scripts/dom.js");


function Gameboard() {
  let size = 10;
  let board = Array(size)
    .fill(null)
    .map(() => Array(size).fill(null));
  let misses = [];
  let ships = [];

  function placeShip(ship, orientation, x, y) {
    if (!isValidPlacement(ship, orientation, x, y)) {
      return false;
      // throw new Error('ship cannot go off board');
    }

    for (let i = 0; i < ship.length; i++) {
      const [nextX, nextY] = orientation === 'x' ? [x + i, y] : [x, y + i];
      if (isCollision(nextX, nextY)) {
        return false;
        // throw new Error('ship cannot collide with other ships');
      }
      board[nextX][nextY] = ship.id;
    }
    ships.push(ship);
    return true;
  }

  function isValidPlacement(ship, orientation, x, y) {
    if (orientation === 'x' && x + ship.length > size) {
      return false;
    }
    if (orientation === 'y' && y + ship.length > size) {
      return false;
    }
    return true;
  }

  function isCollision(x, y) {
    if (board[x][y] !== null) {
      return true;
    }
    return false;
  }

  function receiveAttack(x, y) {
    if (board[x][y] === null) {
      misses.push([x, y]);
    } else {
      const hitShip = ships.find((ship) => ship.id === board[x][y]);
      hitShip.hit();
      if (hitShip.isSunk()) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateStats)(hitShip.id);
      }
    }
  }

  function lost() {
    for (let ship of ships) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }

  function clear() {
    board = Array(size)
      .fill(null)
      .map(() => Array(size).fill(null));
    misses = [];
    ships = [];
  }

  return {
    size,
    board,
    misses,
    placeShip,
    receiveAttack,
    lost,
    clear,
  };
}


/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");


function Player(name) {
  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let attacks = new Set();

  function attack(x, y, opponent) {
    if (attacks.has(`${x},${y}`)) {
      throw new Error('cannot attack same spot twice');
    }
    opponent.gameboard.receiveAttack(x, y);
    attacks.add(`${x},${y}`);
  }
  return {
    name,
    gameboard,
    attack,
    attacks,
  };
}


/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(id, length) {
  let hits = 0;

  function hit() {
    hits += 1;
  }

  function isSunk() {
    return hits === length;
  }

  return {
    id,
    length,
    hit,
    isSunk,
    get hits() {
      return hits;
    },
  };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWJnLWxpZ2h0OiByZ2IoMjE5LCAyMDUsIDE5MSk7XG4gIC0tYmctZGFyazogcmdiYSg5LCA0OSwgNzEsIDAuNyk7XG4gIC0tZGFya2JsdWU6IHJnYig5LCA0OSwgNzEpO1xuICAtLWNlbGw6IHJnYigxMDYsIDE1MSwgMTYwKTtcbiAgLS1ob3ZlcjogcmdiKDEzMSwgMTU0LCAxNjQpO1xuICAtLWJvcmRlcjogI2JjYmNiYztcbiAgLS1oaXQ6ICNjNDEwMDA7XG4gIC0tbWlzczogI2RhZGFkYTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIGNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saWdodCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogODBweCAwO1xufVxuXG5idXR0b246aG92ZXI6ZW5hYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAzNnB4IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyIGgxIHtcbiAgY29sb3I6IHZhcigtLWJnLWxpZ2h0KTtcbn1cblxuI25ldy1nYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xuICBib3JkZXI6IDJweCBvdXRzZXQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMTZweCAzMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jbmV3LWdhbWU6YWN0aXZlIHtcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbn1cblxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5nYW1lYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uYXhpczpmaXJzdC1vZi10eXBlIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYXhpcyAqIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5wbGF5ZXIuZ2FtZWJvYXJkIC5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcbn1cblxuLnN0YXRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMzBweCA0MHB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiA1MHB4IDA7XG59XG5cbmxpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc3RyaWtldGhyb3VnaCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG5kaWFsb2cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmRpYWxvZyAqIHtcbiAgY29sb3I6IHZhcigtLWJnLWxpZ2h0KTtcbn1cblxuZGlhbG9nIGgxIHtcbiAgY29sb3I6IHZhcigtLWhpdCk7XG59XG5cbiNjbG9zZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwpO1xuICBwYWRkaW5nOiAxMnB4IDcwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY29sb3I6IHZhcigtLWRhcmtibHVlKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNjbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLWRhcmtibHVlKTtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHFEQUFxRDtFQUNyRCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1iZy1saWdodDogcmdiKDIxOSwgMjA1LCAxOTEpO1xcbiAgLS1iZy1kYXJrOiByZ2JhKDksIDQ5LCA3MSwgMC43KTtcXG4gIC0tZGFya2JsdWU6IHJnYig5LCA0OSwgNzEpO1xcbiAgLS1jZWxsOiByZ2IoMTA2LCAxNTEsIDE2MCk7XFxuICAtLWhvdmVyOiByZ2IoMTMxLCAxNTQsIDE2NCk7XFxuICAtLWJvcmRlcjogI2JjYmNiYztcXG4gIC0taGl0OiAjYzQxMDAwO1xcbiAgLS1taXNzOiAjZGFkYWRhO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWxpZ2h0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDgwcHggMDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyOmVuYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogMzZweCAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgY29sb3I6IHZhcigtLWJnLWxpZ2h0KTtcXG59XFxuXFxuI25ldy1nYW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG4gIGJvcmRlcjogMnB4IG91dHNldCB2YXIoLS1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDE2cHggMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbmV3LWdhbWU6YWN0aXZlIHtcXG4gIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxZnI7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uYXhpczpmaXJzdC1vZi10eXBlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5heGlzICoge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG59XFxuXFxuLmNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbCk7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4ucGxheWVyLmdhbWVib2FyZCAuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbi5zdGF0cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMzBweCA0MHB4O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDUwcHggMDtcXG59XFxuXFxubGkge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnN0cmlrZXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbmRpYWxvZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMjUwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmRpYWxvZyAqIHtcXG4gIGNvbG9yOiB2YXIoLS1iZy1saWdodCk7XFxufVxcblxcbmRpYWxvZyBoMSB7XFxuICBjb2xvcjogdmFyKC0taGl0KTtcXG59XFxuXFxuI2Nsb3NlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwpO1xcbiAgcGFkZGluZzogMTJweCA3MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNjbG9zZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuICBjb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NjcmlwdHMvc2hpcCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vc2NyaXB0cy9wbGF5ZXInO1xuaW1wb3J0IHsgcmVuZGVyQm9hcmQsIHJlbmRlckF0dGFjaywgY2xlYXJTdGF0cywgZ2FtZU92ZXIgfSBmcm9tICcuL3NjcmlwdHMvZG9tJztcblxuY29uc3QgZ2FtZSA9ICgpID0+IHtcbiAgcGxheWVyMSA9IFBsYXllcigncGxheWVyJyk7XG4gIHBsYXllcjIgPSBQbGF5ZXIoJ2NvbXB1dGVyJyk7XG4gIHR1cm4gPSBwbGF5ZXIxO1xuXG4gIGNvbnN0IGNhcnJpZXIxID0gU2hpcCgnY2FycmllcicsIDUpO1xuICBjb25zdCBiYXR0bGVzaGlwMSA9IFNoaXAoJ2JhdHRsZXNoaXAnLCA0KTtcbiAgY29uc3QgY3J1aXNlcjEgPSBTaGlwKCdjcnVpc2VyJywgMyk7XG4gIGNvbnN0IHN1Ym1hcmluZTEgPSBTaGlwKCdzdWJtYXJpbmUnLCAzKTtcbiAgY29uc3QgZGVzdHJveWVyMSA9IFNoaXAoJ2Rlc3Ryb3llcicsIDIpO1xuXG4gIGxldCB7IG9yaWVudGF0aW9uLCB4LCB5IH0gPSBnZW5lcmF0ZVJhbmRvbVBsYWNlbWVudChwbGF5ZXIxLCBjYXJyaWVyMSk7XG4gIHBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcChjYXJyaWVyMSwgb3JpZW50YXRpb24sIHgsIHkpO1xuICAoeyBvcmllbnRhdGlvbiwgeCwgeSB9ID0gZ2VuZXJhdGVSYW5kb21QbGFjZW1lbnQocGxheWVyMSwgYmF0dGxlc2hpcDEpKTtcbiAgcGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKGJhdHRsZXNoaXAxLCBvcmllbnRhdGlvbiwgeCwgeSk7XG4gICh7IG9yaWVudGF0aW9uLCB4LCB5IH0gPSBnZW5lcmF0ZVJhbmRvbVBsYWNlbWVudChwbGF5ZXIxLCBjcnVpc2VyMSkpO1xuICBwbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoY3J1aXNlcjEsIG9yaWVudGF0aW9uLCB4LCB5KTtcbiAgKHsgb3JpZW50YXRpb24sIHgsIHkgfSA9IGdlbmVyYXRlUmFuZG9tUGxhY2VtZW50KHBsYXllcjEsIHN1Ym1hcmluZTEpKTtcbiAgcGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZTEsIG9yaWVudGF0aW9uLCB4LCB5KTtcbiAgKHsgb3JpZW50YXRpb24sIHgsIHkgfSA9IGdlbmVyYXRlUmFuZG9tUGxhY2VtZW50KHBsYXllcjEsIGRlc3Ryb3llcjEpKTtcbiAgcGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llcjEsIG9yaWVudGF0aW9uLCB4LCB5KTtcblxuICBjb25zdCBjYXJyaWVyMiA9IFNoaXAoJ2NhcnJpZXInLCA1KTtcbiAgY29uc3QgYmF0dGxlc2hpcDIgPSBTaGlwKCdiYXR0bGVzaGlwJywgNCk7XG4gIGNvbnN0IGNydWlzZXIyID0gU2hpcCgnY3J1aXNlcicsIDMpO1xuICBjb25zdCBzdWJtYXJpbmUyID0gU2hpcCgnc3VibWFyaW5lJywgMyk7XG4gIGNvbnN0IGRlc3Ryb3llcjIgPSBTaGlwKCdkZXN0cm95ZXInLCAyKTtcblxuICAoeyBvcmllbnRhdGlvbiwgeCwgeSB9ID0gZ2VuZXJhdGVSYW5kb21QbGFjZW1lbnQocGxheWVyMiwgY2FycmllcjIpKTtcbiAgcGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKGNhcnJpZXIyLCBvcmllbnRhdGlvbiwgeCwgeSk7XG4gICh7IG9yaWVudGF0aW9uLCB4LCB5IH0gPSBnZW5lcmF0ZVJhbmRvbVBsYWNlbWVudChwbGF5ZXIyLCBiYXR0bGVzaGlwMikpO1xuICBwbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoYmF0dGxlc2hpcDIsIG9yaWVudGF0aW9uLCB4LCB5KTtcbiAgKHsgb3JpZW50YXRpb24sIHgsIHkgfSA9IGdlbmVyYXRlUmFuZG9tUGxhY2VtZW50KHBsYXllcjIsIGNydWlzZXIyKSk7XG4gIHBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcChjcnVpc2VyMiwgb3JpZW50YXRpb24sIHgsIHkpO1xuICAoeyBvcmllbnRhdGlvbiwgeCwgeSB9ID0gZ2VuZXJhdGVSYW5kb21QbGFjZW1lbnQocGxheWVyMiwgc3VibWFyaW5lMikpO1xuICBwbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lMiwgb3JpZW50YXRpb24sIHgsIHkpO1xuICAoeyBvcmllbnRhdGlvbiwgeCwgeSB9ID0gZ2VuZXJhdGVSYW5kb21QbGFjZW1lbnQocGxheWVyMiwgZGVzdHJveWVyMikpO1xuICBwbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyMiwgb3JpZW50YXRpb24sIHgsIHkpO1xuXG4gIHJlbmRlckJvYXJkKHBsYXllcjIpO1xuICByZW5kZXJCb2FyZChwbGF5ZXIxKTtcblxuICBwbGF5KHBsYXllcjEsIHBsYXllcjIpO1xuXG4gIGZ1bmN0aW9uIHBsYXkocGxheWVyMSwgcGxheWVyMikge1xuICAgIGNvbnN0IGNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXIgLmNlbGwnKTtcbiAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjZWxsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQueDtcbiAgICAgICAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQueTtcbiAgICAgICAgcGxheWVyMS5hdHRhY2soeCwgeSwgcGxheWVyMik7XG4gICAgICAgIHJlbmRlckF0dGFjayhjZWxsKTtcbiAgICAgICAgaWYgKCFwbGF5ZXIyLmdhbWVib2FyZC5sb3N0KCkpIHtcbiAgICAgICAgICB0dXJuID0gcGxheWVyMjtcbiAgICAgICAgICBjb21wdXRlclR1cm4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lT3ZlcihwbGF5ZXIxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlclR1cm4oKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgcmFuZG9tWDtcbiAgICAgIGxldCByYW5kb21ZO1xuICAgICAgZG8ge1xuICAgICAgICByYW5kb21YID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIocGxheWVyMi5nYW1lYm9hcmQuc2l6ZSk7XG4gICAgICAgIHJhbmRvbVkgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcihwbGF5ZXIyLmdhbWVib2FyZC5zaXplKTtcbiAgICAgIH0gd2hpbGUgKHBsYXllcjIuYXR0YWNrcy5oYXMoYCR7cmFuZG9tWH0sJHtyYW5kb21ZfWApKTtcblxuICAgICAgcGxheWVyMi5hdHRhY2socmFuZG9tWCwgcmFuZG9tWSwgcGxheWVyMSk7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5wbGF5ZXIgLmNlbGxbZGF0YS14PScke3JhbmRvbVh9J11bZGF0YS15PScke3JhbmRvbVl9J11gXG4gICAgICApO1xuICAgICAgcmVuZGVyQXR0YWNrKGNlbGwpO1xuXG4gICAgICBpZiAoIXBsYXllcjEuZ2FtZWJvYXJkLmxvc3QoKSkge1xuICAgICAgICB0dXJuID0gcGxheWVyMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVPdmVyKHBsYXllcjIpO1xuICAgICAgfVxuICAgIH0sIDIwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU51bWJlcihyYW5nZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVBsYWNlbWVudChwbGF5ZXIsIHNoaXApIHtcbiAgICBsZXQgb3JpZW50YXRpb24sIHgsIHk7XG4gICAgZG8ge1xuICAgICAgb3JpZW50YXRpb24gPSBnZW5lcmF0ZVJhbmRvbU51bWJlcigyKSA9PT0gMCA/ICd4JyA6ICd5JztcbiAgICAgIHggPSBnZW5lcmF0ZVJhbmRvbU51bWJlcihwbGF5ZXIxLmdhbWVib2FyZC5zaXplKTtcbiAgICAgIHkgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcihwbGF5ZXIxLmdhbWVib2FyZC5zaXplKTtcbiAgICB9IHdoaWxlICghcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgb3JpZW50YXRpb24sIHgsIHkpKTtcbiAgICByZXR1cm4geyBvcmllbnRhdGlvbiwgeCwgeSB9O1xuICB9XG5cbiAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZ2FtZScpO1xuICBuZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBsYXllcjEuZ2FtZWJvYXJkLmNsZWFyKCk7XG4gICAgcGxheWVyMi5nYW1lYm9hcmQuY2xlYXIoKTtcbiAgICBjbGVhclN0YXRzKCk7XG4gICAgZ2FtZSgpO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBsYXllcjEsXG4gICAgcGxheWVyMixcbiAgICB0dXJuLFxuICB9O1xufTtcblxubGV0IHBsYXllcjE7XG5sZXQgcGxheWVyMjtcbmxldCB0dXJuO1xuZ2FtZSgpO1xuXG5leHBvcnQgeyBwbGF5ZXIxLCBwbGF5ZXIyLCB0dXJuIH07XG4iLCJpbXBvcnQgeyBwbGF5ZXIxLCBwbGF5ZXIyLCB0dXJuIH0gZnJvbSAnLi4vaW5kZXguanMnO1xuXG5mdW5jdGlvbiByZW5kZXJCb2FyZChwbGF5ZXIpIHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBwbGF5ZXIuZ2FtZWJvYXJkLnNpemU7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgcGxheWVyLmdhbWVib2FyZC5zaXplOyBjb2wrKykge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICBjZWxsLmRhdGFzZXQueCA9IGNvbDtcbiAgICAgIGNlbGwuZGF0YXNldC55ID0gcm93O1xuICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuYm9hcmRbY29sXVtyb3ddICE9PSBudWxsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllci5uYW1lID09PSAncGxheWVyJykge1xuICAgICAgICBjZWxsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxuICBjb25zdCB7IHhBeGlzRGl2LCB5QXhpc0RpdiB9ID0gcmVuZGVyQXhlcygpO1xuICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BsYXllci5uYW1lfS5nYW1lYm9hcmRgKTtcbiAgYm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZCh4QXhpc0RpdiwgeUF4aXNEaXYsIGJvYXJkKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQXR0YWNrKGNlbGwpIHtcbiAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICB9IGVsc2Uge1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckF4ZXMoKSB7XG4gIGNvbnN0IHhBeGlzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHhBeGlzID0gWycnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnXTtcbiAgeEF4aXMuZm9yRWFjaCgobnVtKSA9PiByZW5kZXJBeGlzKG51bSwgeEF4aXNEaXYpKTtcblxuICBjb25zdCB5QXhpc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB5QXhpcyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICB5QXhpcy5mb3JFYWNoKChsZXR0ZXIpID0+IHJlbmRlckF4aXMobGV0dGVyLCB5QXhpc0RpdikpO1xuXG4gIHJldHVybiB7IHhBeGlzRGl2LCB5QXhpc0RpdiB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJBeGlzKGxhYmVsLCBheGlzRGl2KSB7XG4gIGNvbnN0IGF4aXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYXhpcy50ZXh0Q29udGVudCA9IGxhYmVsO1xuICBheGlzRGl2LmFwcGVuZENoaWxkKGF4aXMpO1xuICBheGlzRGl2LmNsYXNzTGlzdC5hZGQoJ2F4aXMnKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU3RhdHMoc2hpcElkKSB7XG4gIGNvbnN0IG9wcG9uZW50ID0gdHVybiA9PT0gcGxheWVyMSA/IHBsYXllcjIgOiBwbGF5ZXIxO1xuICBjb25zdCBzaGlwTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke29wcG9uZW50Lm5hbWV9IC4ke3NoaXBJZH1gKTtcbiAgc2hpcE5hbWUuY2xhc3NMaXN0LmFkZCgnc3RyaWtldGhyb3VnaCcpO1xufVxuXG5mdW5jdGlvbiBjbGVhclN0YXRzKCkge1xuICBjb25zdCBzdGF0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gIHN0YXRzLmZvckVhY2goKHN0YXQpID0+IHtcbiAgICBzdGF0LmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmlrZXRocm91Z2gnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdhbWVPdmVyKHdpbm5lcikge1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcbiAgZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIGNvbnN0IHdpbm5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKTtcbiAgd2lubmVyRGl2LnRleHRDb250ZW50ID0gYCR7d2lubmVyLm5hbWV9IHdpbnMhYDtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UnKTtcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xufVxuXG5leHBvcnQgeyByZW5kZXJCb2FyZCwgcmVuZGVyQXR0YWNrLCB1cGRhdGVTdGF0cywgY2xlYXJTdGF0cywgZ2FtZU92ZXIgfTtcbiIsImltcG9ydCB7IHVwZGF0ZVN0YXRzIH0gZnJvbSAnLi9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGxldCBzaXplID0gMTA7XG4gIGxldCBib2FyZCA9IEFycmF5KHNpemUpXG4gICAgLmZpbGwobnVsbClcbiAgICAubWFwKCgpID0+IEFycmF5KHNpemUpLmZpbGwobnVsbCkpO1xuICBsZXQgbWlzc2VzID0gW107XG4gIGxldCBzaGlwcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCBvcmllbnRhdGlvbiwgeCwgeSkge1xuICAgIGlmICghaXNWYWxpZFBsYWNlbWVudChzaGlwLCBvcmllbnRhdGlvbiwgeCwgeSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcignc2hpcCBjYW5ub3QgZ28gb2ZmIGJvYXJkJyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBbbmV4dFgsIG5leHRZXSA9IG9yaWVudGF0aW9uID09PSAneCcgPyBbeCArIGksIHldIDogW3gsIHkgKyBpXTtcbiAgICAgIGlmIChpc0NvbGxpc2lvbihuZXh0WCwgbmV4dFkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdzaGlwIGNhbm5vdCBjb2xsaWRlIHdpdGggb3RoZXIgc2hpcHMnKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkW25leHRYXVtuZXh0WV0gPSBzaGlwLmlkO1xuICAgIH1cbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZFBsYWNlbWVudChzaGlwLCBvcmllbnRhdGlvbiwgeCwgeSkge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3gnICYmIHggKyBzaGlwLmxlbmd0aCA+IHNpemUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAneScgJiYgeSArIHNoaXAubGVuZ3RoID4gc2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ29sbGlzaW9uKHgsIHkpIHtcbiAgICBpZiAoYm9hcmRbeF1beV0gIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBpZiAoYm9hcmRbeF1beV0gPT09IG51bGwpIHtcbiAgICAgIG1pc3Nlcy5wdXNoKFt4LCB5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGhpdFNoaXAgPSBzaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLmlkID09PSBib2FyZFt4XVt5XSk7XG4gICAgICBoaXRTaGlwLmhpdCgpO1xuICAgICAgaWYgKGhpdFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgdXBkYXRlU3RhdHMoaGl0U2hpcC5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9zdCgpIHtcbiAgICBmb3IgKGxldCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBib2FyZCA9IEFycmF5KHNpemUpXG4gICAgICAuZmlsbChudWxsKVxuICAgICAgLm1hcCgoKSA9PiBBcnJheShzaXplKS5maWxsKG51bGwpKTtcbiAgICBtaXNzZXMgPSBbXTtcbiAgICBzaGlwcyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzaXplLFxuICAgIGJvYXJkLFxuICAgIG1pc3NlcyxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBsb3N0LFxuICAgIGNsZWFyLFxuICB9O1xufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICBsZXQgYXR0YWNrcyA9IG5ldyBTZXQoKTtcblxuICBmdW5jdGlvbiBhdHRhY2soeCwgeSwgb3Bwb25lbnQpIHtcbiAgICBpZiAoYXR0YWNrcy5oYXMoYCR7eH0sJHt5fWApKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBhdHRhY2sgc2FtZSBzcG90IHR3aWNlJyk7XG4gICAgfVxuICAgIG9wcG9uZW50LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGF0dGFja3MuYWRkKGAke3h9LCR7eX1gKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgZ2FtZWJvYXJkLFxuICAgIGF0dGFjayxcbiAgICBhdHRhY2tzLFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChpZCwgbGVuZ3RoKSB7XG4gIGxldCBoaXRzID0gMDtcblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgaGl0cyArPSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIHJldHVybiBoaXRzID09PSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGxlbmd0aCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIGdldCBoaXRzKCkge1xuICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfSxcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9