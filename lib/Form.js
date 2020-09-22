module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 96);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

__webpack_require__(13);

__webpack_require__(10);

__webpack_require__(12);

__webpack_require__(3);

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.split");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.join");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);






function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.index-of");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.includes");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.some");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("element-china-area-data");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.trim");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.description");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.iterator");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.includes");

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.splice");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.is");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(56);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(58);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(61);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(63);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(65);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(67);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(69);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(71);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(73);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
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
/* 53 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.values");

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_select_tree_vue_vue_type_style_index_0_id_3d557cbf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_select_tree_vue_vue_type_style_index_0_id_3d557cbf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_select_tree_vue_vue_type_style_index_0_id_3d557cbf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_select_tree_vue_vue_type_style_index_0_id_3d557cbf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".selectBody[data-v-3d557cbf]{width:100%}.selectBody[data-v-3d557cbf] .el-tag.el-tag--info{background-color:#f4f4f5;border-color:#e9e9eb;max-width:100px;overflow:hidden;color:#909399}.el-scrollbar .el-scrollbar__view .el-select-dropdown__item[data-v-3d557cbf]{height:auto;padding:0}[data-v-3d557cbf] .el-tree .el-tree-node__label{font-size:12px}.el-select-dropdown__item.selected[data-v-3d557cbf]{font-weight:normal}.top[data-v-3d557cbf]{display:none;position:absolute;color:#c0c4cc;cursor:pointer;opacity:0;font-size:14px;z-index:999;right:5px}.show[data-v-3d557cbf]{display:none}[data-v-3d557cbf] .el-select .el-tag__close.el-icon-close{display:none}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_select_tree_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_select_tree_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_select_tree_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_select_tree_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".my-tree .el-tree-node .is-leaf+.el-checkbox .el-checkbox__inner{display:inline-block}.my-tree .el-tree-node .el-checkbox .el-checkbox__inner{display:none}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.last-index-of");

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_item_vue_vue_type_style_index_0_id_c454d518_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_item_vue_vue_type_style_index_0_id_c454d518_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_item_vue_vue_type_style_index_0_id_c454d518_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_item_vue_vue_type_style_index_0_id_c454d518_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".customArea[data-v-c454d518]{height:50px;color:#999;background:#eee;line-height:50px;text-align:center}.no-star[data-v-c454d518] .el-form-item__label:before{display:none}.html[data-v-c454d518] .el-form-item__label,.html .html[data-v-c454d518]{line-height:18px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_tool_list_vue_vue_type_style_index_0_id_84baf5bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_tool_list_vue_vue_type_style_index_0_id_84baf5bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_tool_list_vue_vue_type_style_index_0_id_84baf5bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_tool_list_vue_vue_type_style_index_0_id_84baf5bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".is_left[data-v-84baf5bc]{text-align:left}.is_center[data-v-84baf5bc]{text-align:center}.is_right[data-v-84baf5bc]{text-align:right}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_att_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_att_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_att_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_att_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".aspFildDetail{margin:2px 0}.aspFildDetail .fileWarp{height:22px;line-height:22px}.aspFildDetail .file{color:#2681ff;cursor:pointer}.aspFildDetail .fileNormal{position:relative}.aspFildDetail .fileNormal:hover::after{content:\"\";position:absolute;left:0;right:0;height:0;bottom:0;border-bottom:1px solid #2681ff}.aspFildDetail .fileAdd{color:#f64444}.aspFildDetail .fileDelete{text-decoration:line-through}.aspFildDetail .fileDesc{color:#999999}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_item_text_vue_vue_type_style_index_0_id_3bcca316_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_item_text_vue_vue_type_style_index_0_id_3bcca316_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_item_text_vue_vue_type_style_index_0_id_3bcca316_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_item_text_vue_vue_type_style_index_0_id_3bcca316_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".no-star[data-v-3bcca316] .el-form-item__label:before{display:none}.html[data-v-3bcca316] .el-form-item__label,.html .html[data-v-3bcca316]{line-height:16px}.labelWarp .labelStyle[data-v-3bcca316]{word-wrap:break-word;white-space:pre-wrap;margin:3px 0;line-height:1.2;padding-bottom:0px;word-break:break-all}.labelWarp .normalLabel[data-v-3bcca316]{line-height:32px;margin:0 0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_nav_tabs_vue_vue_type_style_index_0_id_0028e8b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_nav_tabs_vue_vue_type_style_index_0_id_0028e8b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_nav_tabs_vue_vue_type_style_index_0_id_0028e8b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_asp_nav_tabs_vue_vue_type_style_index_0_id_0028e8b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".progressBar[data-v-0028e8b0]{margin-bottom:8px;height:38px}.progressBar ul[data-v-0028e8b0]{padding:0}.progressBar ul li[data-v-0028e8b0]{position:relative;display:inline-block;font-size:13.5px;list-style:none;margin:0;padding:8px 15px;background:#F9FBFF;text-align:center;font-weight:bold;color:#000;border:1px solid #E1E7F3;border-right:none;cursor:pointer}.progressBar ul li .bgleft_arrow[data-v-0028e8b0]{width:33px;height:30px;position:absolute;left:-16px;top:0;background-size:contain}.progressBar ul li[data-v-0028e8b0]:last-child{border-right:1px solid #E1E7F3}.progressBar ul li.active[data-v-0028e8b0]{background:#ffffff;color:#007aff}.progressBar ul li[data-v-0028e8b0] :hover{color:#007aff}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_item_box_vue_vue_type_style_index_0_id_526d4af2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_item_box_vue_vue_type_style_index_0_id_526d4af2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_item_box_vue_vue_type_style_index_0_id_526d4af2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_form_item_box_vue_vue_type_style_index_0_id_526d4af2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".label-hidden[data-v-526d4af2]{border-right:none !important;border-left:none !important}[data-v-526d4af2] .el-collapse-item__header{position:relative}[data-v-526d4af2] .el-collapse-item__header .collapse-title{width:100%;height:100%;position:absolute;left:0}[data-v-526d4af2] .modify-add{background:#f2dede}[data-v-526d4af2] .modify-delete{text-decoration:line-through}[data-v-526d4af2] .modify-none{display:none}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".asp-smart-form .form-item-box-AspNavTabs .progressBar .btnGroup{z-index:901;height:38px;position:fixed;right:32px;background:#ffffff;width:50%;padding:10px 0px}.asp-smart-form .form-item-box-AspNavTabs .progressBar .btnGroup .form-tool-list{text-align:right}.asp-smart-form .form-item-box-AspNavTabs .progressBar .clearFix:after{display:block;clear:both;content:'';visibility:hidden;height:0}.asp-smart-form .form-item-box-AspNavTabs .progressBar .navGroup{height:38px;position:fixed;z-index:900;width:50%;padding:10px 0px;background:#ffffff}.asp-smart-form .empty_inline-block{position:relative;overflow:hidden}.asp-smart-form .empty_inline-block .form-item-box{display:inline-block;border:none !important;vertical-align:top}.asp-smart-form .empty_inline-block .form-item-box .label-style{display:none}.asp-smart-form .empty_inline-block .form-item-box .el-form-item__content>*{width:100% !important}.asp-smart-form .el-table .empty_fontWeightNormal .form-item-box .el-form-item .el-form-item__label{font-weight:100}.asp-smart-form .el-table .empty_inline .form-item-box .el-form-item .el-form-item__label,.asp-smart-form .el-table .empty_block .form-item-box .el-form-item .el-form-item__label,.asp-smart-form .el-table .empty_inline-block .form-item-box .el-form-item .el-form-item__label{top:0;font-size:12px}.asp-smart-form .el-table .empty_inline .form-item-box .el-form-item .el-form-item__content .normalLabel,.asp-smart-form .el-table .empty_block .form-item-box .el-form-item .el-form-item__content .normalLabel,.asp-smart-form .el-table .empty_inline-block .form-item-box .el-form-item .el-form-item__content .normalLabel{line-height:32px;margin:0 0}.asp-smart-form .el-table .empty_inline{display:flex}.asp-smart-form .el-table .empty_inline .form-item-box{border:none}.asp-smart-form .el-table .empty_inline .form-item-box .label-style{background:#ffffff;border-right:none;border-left:none}.asp-smart-form .el-table .empty_block{display:block}.asp-smart-form .el-table .empty_block .form-item-box{border:none}.asp-smart-form .el-table .empty_block .form-item-box .label-style{background:#ffffff;border-right:none;border-left:none}.asp-smart-form .el-table--enable-row-hover .el-table__body tr:hover>td{transition:background-color 0s ease}.asp-smart-form .el-table--enable-row-hover .el-table__body tr:hover>td .form-item-box .label-style{background:#F5F7FA}.asp-smart-form .el-collapse .el-collapse-item{width:100%}.asp-smart-form .el-collapse .el-collapse-item .el-collapse-item__header{position:relative;display:flex}.asp-smart-form .el-collapse .el-collapse-item .el-collapse-item__header>.title{z-index:2;flex:none}.asp-smart-form .el-collapse .el-collapse-item .el-collapse-item__header>.form-tool-list{z-index:2;padding:0 20px;display:inline-block;flex:1}.asp-smart-form .el-collapse .el-collapse-item .el-collapse-item__header>i{z-index:2;flex:none}.asp-smart-form /deep/ .el-input__count{line-height:14px}.asp-smart-form .form-item-box{position:relative}.asp-smart-form .form-item-box+.form-item-box-collapse{margin-top:15px}.asp-smart-form .form-item-box-layout+.form-item-box-row{margin-top:15px}.asp-smart-form .form-item-box-row+.form-item-box-row{margin-top:0 !important}.asp-smart-form .form-item-box-layout.form-item-box-collapse{margin-bottom:15px}.asp-smart-form .form-item-box-basic+.form-item-box-buttonGroup{margin-top:15px}.asp-smart-form .form-item-box-row+.form-item-box-buttonGroup{margin-top:15px}.asp-smart-form .form-item-box-checkbox .el-form-item .el-checkbox-group{overflow:hidden}.asp-smart-form .form-item-box-checkbox .el-form-item .el-checkbox-group .el-checkbox{float:left;margin-right:8px}.asp-smart-form .form-item-box-checkbox .el-form-item .el-checkbox-group .el-checkbox .el-checkbox__label{min-width:48px;padding-left:4px}.asp-smart-form .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.asp-smart-form .text__textarea{height:auto !important;word-break:break-all !important;word-wrap:break-word !important;overflow:unset;text-overflow:unset;white-space:unset}.asp-smart-form.asp-smart-form__large .text{height:40px}.asp-smart-form.asp-smart-form__large .asp-table thead th{padding-top:0 !important;padding-bottom:0 !important}.asp-smart-form.asp-smart-form__large .asp-table thead th .cell{height:45px;line-height:45px}.asp-smart-form.asp-smart-form__large .asp-table td .text{height:39px}.asp-smart-form.asp-smart-form__medium .text{height:36px}.asp-smart-form.asp-smart-form__medium .asp-table thead th{padding-top:0 !important;padding-bottom:0 !important}.asp-smart-form.asp-smart-form__medium .asp-table thead th .cell{height:41px;line-height:41px}.asp-smart-form.asp-smart-form__medium .asp-table td .text{height:35px}.asp-smart-form.asp-smart-form__small .text{height:32px}.asp-smart-form.asp-smart-form__small .asp-table thead th{padding-top:0 !important;padding-bottom:0 !important}.asp-smart-form.asp-smart-form__small .asp-table thead th .cell{height:37px;line-height:37px}.asp-smart-form.asp-smart-form__small .asp-table td .text{height:31px}.asp-smart-form.asp-smart-form__mini .text{height:28px}.asp-smart-form.asp-smart-form__mini .asp-table thead th{padding-top:0 !important;padding-bottom:0 !important}.asp-smart-form.asp-smart-form__mini .asp-table thead th .cell{height:33px;line-height:33px}.asp-smart-form.asp-smart-form__mini .asp-table td .text{height:27px}.asp-smart-form .form-item-box .fixClearIcon1 .el-input__inner{padding-right:60px}.asp-smart-form .form-item-box .fixClearIcon2 .el-input__inner{padding-right:70px}.asp-smart-form .form-item-box .fixClearIcon3 .el-input__inner{padding-right:80px}.asp-smart-form .form-item-box .fixClearIcon4 .el-input__inner{padding-right:100px}.asp-smart-form__webbas .form-item-box-table-title{border:1px solid #E1E7F3;padding:5px}.asp-smart-form__webbas .form-item-box-table-title .table-title{font-size:14px;padding:4px 0;font-weight:bold;position:relative;color:#333}.asp-smart-form__webbas .asp-table .cell{padding:0}.asp-smart-form__webbas .asp-table .cell>.form-item-box{border-top:none;border-bottom:none;border-right:none}.asp-smart-form__webbas .asp-table .cell>.form-item-box>.label-style{display:none}.asp-smart-form__webbas .asp-table .cell .el-form-item{margin-bottom:unset !important}.asp-smart-form__webbas .asp-table .cell .el-form-item .el-form-item__content{padding:0 !important}.asp-smart-form__webbas .asp-table .cell .el-form-item .el-form-item__content>div{width:100% !important}.asp-smart-form__webbas .asp-table .el-table__expanded-cell{padding:2px}.asp-smart-form__webbas .asp-table tr{height:34px}.asp-smart-form__webbas .asp-table td{padding:3px;box-sizing:border-box}.asp-smart-form__webbas .asp-table td .cell .form-item-box .row-box{border-top:none;border-bottom:none;border-right:none}.asp-smart-form__webbas .asp-table .cell.el-tooltip{min-width:30px}.asp-smart-form__webbas .asp-table th{border-right:1px solid rgba(195,213,255,0.5);color:#53607e;background-color:#F9FBFF;font-size:14px;padding:0px 3px 0px 3px}.asp-smart-form__webbas .asp-table th .cell{display:flex;align-items:center}.asp-smart-form__webbas .el-table__body-wrapper::-webkit-scrollbar{width:5px;height:5px}.asp-smart-form__webbas ::-webkit-scrollbar-thumb{background-color:rgba(53,113,230,0.3);border-radius:10px}.asp-smart-form__webbas .el-table--border{border:1px solid #EBEEF5}.asp-smart-form__webbas .el-table--border td:first-child .cell,.asp-smart-form__webbas .el-table--border th:first-child .cell{padding-left:0}.asp-smart-form__webbas .asp-table .caret-wrapper{height:auto}.asp-smart-form__webbas .asp-table .sort-caret.ascending{top:-12px}.asp-smart-form__webbas .asp-table .sort-caret.descending{bottom:auto}.asp-smart-form__webbas .asp-table::before{height:auto}.asp-smart-form__webbas .el-collapse{border:1px solid #DEE8F8}.asp-smart-form__webbas .el-collapse .el-collapse-item{width:100%}.asp-smart-form__webbas .el-collapse .el-collapse-item .el-collapse-item__header{position:relative;height:unset;line-height:unset;padding:0 15px;font-weight:600;border-bottom:1px solid #DEE8F8;display:flex}.asp-smart-form__webbas .el-collapse .el-collapse-item .el-collapse-item__header>.title{z-index:2;font-size:15px;flex:none}.asp-smart-form__webbas .el-collapse .el-collapse-item .el-collapse-item__header>.form-tool-list{z-index:2;padding:0 20px;display:inline-block;height:29px;line-height:29px;flex:1}.asp-smart-form__webbas .el-collapse .el-collapse-item .el-collapse-item__header>i{z-index:2;flex:none}.asp-smart-form__webbas .el-collapse .el-collapse-item .el-collapse-item__wrap .el-collapse-item__content{padding:5px}.asp-smart-form__webbas .solid-with-icon-btn{font-size:14px !important;border-radius:4px !important;background:linear-gradient(1turn, #4576e4, #6f9ef0) !important;color:#fff !important;padding:7px 15px}.asp-smart-form__webbas .hollow-with-icon-btn{font-size:14px !important;color:#4676e5 !important;background:#fff !important;border-color:#419fff !important;padding:7px 15px}.asp-smart-form__webbas .empty_inline-block{position:relative;overflow:hidden}.asp-smart-form__webbas .empty_inline-block .form-item-box{display:inline-block;border:none !important;vertical-align:top}.asp-smart-form__webbas .empty_inline-block .form-item-box .label-style{display:none}.asp-smart-form__webbas .empty_inline-block .form-item-box .el-form-item__content>*{width:100% !important}.asp-smart-form__webbas .form-item-box-row .form-item-box-row>.row-box{border:none}.asp-smart-form__webbas .el-form-item{margin:0 !important}.asp-smart-form__webbas .el-form-item .el-rate{height:32px;line-height:32px}.asp-smart-form__webbas .el-form-item .el-rate .el-rate__item{font-size:unset}.asp-smart-form__webbas .el-form-item .el-form-item__label{font-size:14px;padding:0 12px;top:4px;font-weight:bold;position:relative;color:#333}.asp-smart-form__webbas .el-form-item .el-form-item__content{padding:5px}.asp-smart-form__webbas .el-form-item .el-form-item__error{position:relative}.asp-smart-form__webbas .required-star__right .el-form-item__label:before{float:right;margin-left:4px;margin-right:0}.asp-smart-form__webbas .el-input__inner,.asp-smart-form__webbas .el-textarea__inner{padding-left:5px}.asp-smart-form__webbas .el-input--prefix .el-input__inner{padding-left:30px}.asp-smart-form__webbas .label-style{position:absolute;height:100%;background:#F9FBFF;border-right:1px solid #E1E7F3;border-left:1px solid #E1E7F3}.asp-smart-form__webbas .form-item-box-basic{border-top:1px solid #E1E7F3;border-bottom:1px solid #E1E7F3;border-right:1px solid #E1E7F3}.asp-smart-form__webbas .form-item-box-basic+.form-item-box-basic{border-top:none}.asp-smart-form__webbas .form-item-box-layout+.form-item-box-basic{border-top:1px solid #E1E7F3}.asp-smart-form__webbas .form-item-box-layout>div>div>.form-item-box-basic{border-top:none;border-bottom:none;border-right:none}.asp-smart-form__webbas .form-item-box-row>.row-box{border-top:1px solid #E1E7F3;border-bottom:1px solid #E1E7F3;border-right:1px solid #E1E7F3;display:flex}.asp-smart-form__webbas .form-item-box-row>.row-box>.el-col>.form-item-box{height:100%}.asp-smart-form__webbas .form-item-box-row>.row-box>.el-col>.form-item-box>.form-tool-list{height:100%;display:inline-flex;align-items:center}.asp-smart-form__webbas .form-item-box-row+.form-item-box-row>.row-box{border-top:none}.asp-smart-form__webbas .form-item-box-row+.form-item-box-basic{border-top:none}.asp-smart-form__webbas .form-item-box-row+.form-item-box-normalChildList{margin-top:5px}.asp-smart-form__webbas .form-item-box-basic+.form-item-box-row>.row-box{border-top:none}.asp-smart-form__webbas .form-item-box-normalChildList+.form-item-box-basic{border-top:none}.asp-smart-form__webbas .form-item-box-normalChildList+.form-item-box-normalChildList{margin-top:5px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/index.vue?vue&type=template&id=152ee8ca&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.formList.length > 0
    ? _c(
        "el-form",
        {
          ref: "validateForm",
          staticClass: "asp-smart-form",
          class: [
            "asp-smart-form__" + _vm.formConfig.size,
            "asp-smart-form__" +
              (_vm.formConfig.defaultClass
                ? _vm.formConfig.defaultClass
                : "webbas")
          ],
          attrs: {
            model: _vm.value,
            size: _vm.formConfig.size,
            "label-width": _vm.formConfig.labelWidth + "px",
            "label-position": _vm.formConfig.labelPosition
          }
        },
        [
          _vm._l(_vm.formList, function(item, key) {
            return [
              _c("form-item-box", {
                key: key,
                attrs: {
                  item: item,
                  formList: _vm.formList,
                  status: _vm.status,
                  formConfig: _vm.formConfig,
                  dynamic: _vm.dynamic,
                  "virtual-model": _vm.virtualModel,
                  model: _vm.value,
                  oldModel: _vm.oldModel,
                  newModel: _vm.newModel,
                  isCompare: _vm.isCompare
                },
                on: { on: _vm.bindEvents },
                scopedSlots: _vm._u(
                  [
                    _vm._l(_vm.getAllSlotName, function(cell) {
                      return {
                        key: cell,
                        fn: function(ref) {
                          var data = ref.data
                          return [_vm._t(cell, null, { data: data })]
                        }
                      }
                    })
                  ],
                  null,
                  true
                )
              })
            ]
          })
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/asp-smart-form/index.vue?vue&type=template&id=152ee8ca&

// EXTERNAL MODULE: external "core-js/modules/es.array.concat"
var es_array_concat_ = __webpack_require__(13);

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__(0);

// EXTERNAL MODULE: external "core-js/modules/es.array.join"
var es_array_join_ = __webpack_require__(10);

// EXTERNAL MODULE: external "core-js/modules/es.array.map"
var es_array_map_ = __webpack_require__(12);

// EXTERNAL MODULE: external "core-js/modules/es.array.splice"
var es_array_splice_ = __webpack_require__(32);

// EXTERNAL MODULE: external "core-js/modules/es.object.keys"
var es_object_keys_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/form-item-box.vue?vue&type=template&id=526d4af2&scoped=true&
var form_item_boxvue_type_template_id_526d4af2_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.isNeedShowComp
    ? _c(
        "div",
        {
          staticClass: "form-item-box",
          class: [
            "form-item-box-" + _vm.item.name,
            "form-item-box-" + _vm.item.type,
            { "form-item-box-table-title": _vm.item.isTitle },
            _vm.item.columnName
          ],
          style: [_vm.item.style, { width: _vm.item.width }]
        },
        [
          _vm.item.type == "collapse"
            ? [
                _c(
                  "el-collapse",
                  {
                    on: {
                      click: function(e) {
                        return _vm.getBox(_vm.item, e)
                      }
                    },
                    model: {
                      value: _vm.activeNames,
                      callback: function($$v) {
                        _vm.activeNames = $$v
                      },
                      expression: "activeNames"
                    }
                  },
                  [
                    _c(
                      "el-collapse-item",
                      { attrs: { name: _vm.item.open ? "1" : "2" } },
                      [
                        _c(
                          "template",
                          { slot: "title" },
                          [
                            _c("span", {
                              staticClass: "collapse-title",
                              style: {
                                background: _vm.item["title-background-color"]
                              }
                            }),
                            _c(
                              "span",
                              {
                                staticClass: "title",
                                style: {
                                  color: _vm.item["title-color"],
                                  "font-size":
                                    _vm.item["title-font-size"] + "px"
                                }
                              },
                              [
                                _c("i", {
                                  class: _vm.item.icon,
                                  staticStyle: { "margin-right": "5px" }
                                }),
                                _vm._v(
                                  "\n            " +
                                    _vm._s(_vm.item.label) +
                                    "\n          "
                                )
                              ]
                            ),
                            _c("formToolList", {
                              attrs: {
                                "button-list": _vm.hideButtonGroupComponent,
                                parent: _vm.item
                              },
                              on: { on: _vm.bindEvents }
                            })
                          ],
                          1
                        ),
                        _vm._l(_vm.item.formFields, function(
                          fieldItem,
                          fieldKey
                        ) {
                          return [
                            _c("form-item-box", {
                              key: fieldKey,
                              attrs: {
                                item: fieldItem,
                                span: 24,
                                formConfig: _vm.formConfig,
                                dynamic: _vm.dynamic,
                                formList: _vm.formList,
                                status: _vm.status,
                                model: _vm.model,
                                oldModel: _vm.oldModel,
                                newModel: _vm.newModel,
                                isCompare: _vm.isCompare,
                                index: _vm.index,
                                parent: _vm.parent,
                                isTableFormItem: _vm.isTableFormItem,
                                isNoLabel: _vm.isNoLabel
                              },
                              on: { on: _vm.bindEvents },
                              scopedSlots: _vm._u(
                                [
                                  _vm._l(_vm.getAllSlotName, function(cell) {
                                    return {
                                      key: cell,
                                      fn: function(ref) {
                                        var data = ref.data
                                        return [
                                          _vm._t(cell, null, { data: data })
                                        ]
                                      }
                                    }
                                  })
                                ],
                                null,
                                true
                              )
                            })
                          ]
                        })
                      ],
                      2
                    )
                  ],
                  1
                )
              ]
            : _vm.item.type == "normalChildList"
            ? [
                _vm.item.isTitle
                  ? _c("div", { staticClass: "table-title" }, [
                      _vm._v(_vm._s(_vm.item.label))
                    ])
                  : _vm._e(),
                _c(
                  "el-table",
                  _vm._b(
                    {
                      ref: "aspTables",
                      staticClass: "asp-table",
                      staticStyle: { width: "100%" },
                      attrs: {
                        data: _vm.subFormSourceData,
                        "row-class-name": _vm.tableRowClass,
                        "header-align": "left",
                        "highlight-current-row": "",
                        "tooltip-effect": "dark",
                        fit: "",
                        border: "",
                        "max-height": _vm.subFormMaxHeight
                      },
                      on: {
                        "cell-dblclick": _vm.tableDbClick,
                        "row-contextmenu": _vm.tableRowRightClick,
                        "selection-change": _vm.handleSelectionChange
                      }
                    },
                    "el-table",
                    _vm.item.props,
                    false
                  ),
                  [
                    _vm.item.expand
                      ? _c("el-table-column", {
                          attrs: { type: "expand" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(scope) {
                                  return [
                                    _vm._l(_vm.item.childList, function(
                                      childItem,
                                      childKey
                                    ) {
                                      return [
                                        _c("form-item-box", {
                                          key: childKey,
                                          attrs: {
                                            item: childItem,
                                            span: 24,
                                            formConfig: _vm.formConfig,
                                            dynamic: _vm.dynamic,
                                            formList: _vm.formList,
                                            status: _vm.status,
                                            model: _vm.model,
                                            oldModel: _vm.oldModel,
                                            newModel: _vm.newModel,
                                            isCompare: _vm.isCompare,
                                            index: scope.$index,
                                            parent: _vm.item,
                                            isTableFormItem: true,
                                            isNoLabel: false
                                          },
                                          on: { on: _vm.bindEvents }
                                        })
                                      ]
                                    })
                                  ]
                                }
                              }
                            ],
                            null,
                            false,
                            1164994482
                          )
                        })
                      : _vm._e(),
                    _vm.isNeedShowSelectionColumn(_vm.item)
                      ? _c("el-table-column", {
                          attrs: {
                            type: "selection",
                            "header-align": "left",
                            width: "40"
                          }
                        })
                      : _vm._e(),
                    _vm.isNeedShowSingleSelection(_vm.item)
                      ? _c("el-table-column", {
                          attrs: {
                            fixed: _vm.item.singleSelectionFixed
                              ? "left"
                              : false,
                            width: "36"
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(scope) {
                                  return [
                                    _c("el-radio", {
                                      staticClass: "table-single-selection",
                                      attrs: { label: scope.$index },
                                      on: { change: _vm.handleSingleSelection },
                                      model: {
                                        value: _vm.tableSingleSelection,
                                        callback: function($$v) {
                                          _vm.tableSingleSelection = $$v
                                        },
                                        expression: "tableSingleSelection"
                                      }
                                    })
                                  ]
                                }
                              }
                            ],
                            null,
                            false,
                            554340853
                          )
                        })
                      : _vm._e(),
                    _vm.isNeedShowIndexColumn(_vm.item)
                      ? _c("el-table-column", {
                          attrs: {
                            type: "index",
                            align: "left",
                            "header-align": "left",
                            label: "序号",
                            width: "50"
                          }
                        })
                      : _vm._e(),
                    _vm._l(_vm.subFormColumnSourceData(_vm.item), function(
                      fieldItem,
                      fieldKey
                    ) {
                      return _c("el-table-column", {
                        key: fieldKey,
                        attrs: {
                          "render-header": _vm.renderHeader,
                          label: fieldItem.label,
                          width: fieldItem.width,
                          "min-width": fieldItem["min-width"]
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(scope) {
                                return [
                                  fieldItem.slotName
                                    ? _vm._t(fieldItem.slotName, null, {
                                        data: {
                                          index: scope.$index,
                                          row: scope.row
                                        },
                                        index: scope.$index
                                      })
                                    : _c("form-item-box", {
                                        key: fieldKey,
                                        attrs: {
                                          item: fieldItem,
                                          span: 24,
                                          formConfig: _vm.formConfig,
                                          formList: _vm.formList,
                                          dynamic: _vm.dynamic,
                                          status: _vm.status,
                                          model: _vm.model,
                                          oldModel: _vm.oldModel,
                                          newModel: _vm.newModel,
                                          isCompare: _vm.isCompare,
                                          index: scope.$index,
                                          parent: _vm.item,
                                          isTableFormItem: true,
                                          isNoLabel: true
                                        },
                                        on: { on: _vm.bindEvents }
                                      })
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    }),
                    _vm.isCompare && _vm.item.isCompare
                      ? _c("el-table-column", {
                          attrs: {
                            prop: "modifyTypeDesc",
                            label: "变更说明",
                            width: "90"
                          }
                        })
                      : _vm._e(),
                    _vm.isNeedShowOperationColumn
                      ? _c("el-table-column", {
                          attrs: {
                            label: "操作",
                            width: _vm.item["operation-width"] || 100
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "header",
                                fn: function(scope) {
                                  return [
                                    _vm._v("操作\n          "),
                                    _vm.isNeedShowAddComp(_vm.item)
                                      ? _c(
                                          "el-button",
                                          {
                                            key: scope.$index,
                                            staticStyle: {
                                              "font-size": "30px",
                                              "font-weight": "bold",
                                              "margin-left": "10px"
                                            },
                                            attrs: { type: "text" },
                                            on: { click: _vm.handleAddTable }
                                          },
                                          [_vm._v("+\n          ")]
                                        )
                                      : _vm._e()
                                  ]
                                }
                              },
                              {
                                key: "default",
                                fn: function(scope) {
                                  return [
                                    _c("formToolList", {
                                      attrs: {
                                        "button-list":
                                          _vm.hideButtonGroupComponent,
                                        parent: _vm.item,
                                        rowData: scope.row,
                                        index: scope.$index,
                                        isTableFormItem: true,
                                        position: "center"
                                      },
                                      on: { on: _vm.bindEvents }
                                    })
                                  ]
                                }
                              }
                            ],
                            null,
                            false,
                            1024336657
                          )
                        })
                      : _vm._e()
                  ],
                  2
                )
              ]
            : _vm.item.type == "buttonGroup"
            ? [
                _c("formToolList", {
                  attrs: {
                    "button-list": _vm.hideButtonGroupComponent,
                    position: _vm.item.position || "center",
                    parent: _vm.parent,
                    index: _vm.index,
                    isTableFormItem: _vm.isTableFormItem
                  },
                  on: { on: _vm.bindEvents }
                })
              ]
            : _vm.item.type === "row"
            ? [
                _c(
                  "el-row",
                  { staticClass: "row-box" },
                  [
                    _vm._l(_vm.item.formFields, function(
                      fieldItem,
                      fieldIndex
                    ) {
                      return [
                        fieldItem[_vm.status] === undefined ||
                        fieldItem[_vm.status]
                          ? _c(
                              "el-col",
                              {
                                key: fieldIndex,
                                attrs: { span: fieldItem.span }
                              },
                              [
                                _vm._l(fieldItem.childList, function(
                                  childItem,
                                  childKey
                                ) {
                                  return [
                                    _c("form-item-box", {
                                      key: childKey,
                                      attrs: {
                                        item: childItem,
                                        span: 24,
                                        status: _vm.status,
                                        formConfig: _vm.formConfig,
                                        dynamic: _vm.dynamic,
                                        formList: _vm.formList,
                                        model: _vm.model,
                                        oldModel: _vm.oldModel,
                                        newModel: _vm.newModel,
                                        isCompare: _vm.isCompare,
                                        index: _vm.index,
                                        parent: _vm.parent,
                                        isTableFormItem: _vm.isTableFormItem,
                                        isNoLabel: _vm.isNoLabel
                                      },
                                      on: { on: _vm.bindEvents },
                                      scopedSlots: _vm._u(
                                        [
                                          _vm._l(_vm.getAllSlotName, function(
                                            cell
                                          ) {
                                            return {
                                              key: cell,
                                              fn: function(ref) {
                                                var data = ref.data
                                                return [
                                                  _vm._t(cell, null, {
                                                    data: data
                                                  })
                                                ]
                                              }
                                            }
                                          })
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ]
                                })
                              ],
                              2
                            )
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                )
              ]
            : _vm.item.type === "tabs"
            ? [
                _c(
                  "el-tabs",
                  _vm._b(
                    {
                      model: {
                        value: _vm.tabsValue,
                        callback: function($$v) {
                          _vm.tabsValue = $$v
                        },
                        expression: "tabsValue"
                      }
                    },
                    "el-tabs",
                    _vm.item.props,
                    false
                  ),
                  [
                    _vm._l(_vm.item.formFields, function(
                      fieldItem1,
                      fieldKey1
                    ) {
                      return [
                        _c(
                          "el-tab-pane",
                          {
                            key: fieldKey1,
                            attrs: {
                              label: fieldItem1.label,
                              name: fieldItem1.name
                            }
                          },
                          [
                            _vm._l(fieldItem1.formFields, function(
                              fieldItem2,
                              fieldKey2
                            ) {
                              return [
                                _c("form-item-box", {
                                  key: fieldKey2,
                                  attrs: {
                                    item: fieldItem2,
                                    span: 24,
                                    formConfig: _vm.formConfig,
                                    dynamic: _vm.dynamic,
                                    formList: _vm.formList,
                                    status: _vm.status,
                                    model: _vm.model,
                                    oldModel: _vm.oldModel,
                                    newModel: _vm.newModel,
                                    isCompare: _vm.isCompare,
                                    index: _vm.index,
                                    parent: _vm.parent,
                                    isTableFormItem: _vm.isTableFormItem,
                                    isNoLabel: _vm.isNoLabel
                                  },
                                  on: { on: _vm.bindEvents },
                                  scopedSlots: _vm._u(
                                    [
                                      _vm._l(_vm.getAllSlotName, function(
                                        cell
                                      ) {
                                        return {
                                          key: cell,
                                          fn: function(ref) {
                                            var data = ref.data
                                            return [
                                              _vm._t(cell, null, { data: data })
                                            ]
                                          }
                                        }
                                      })
                                    ],
                                    null,
                                    true
                                  )
                                })
                              ]
                            })
                          ],
                          2
                        )
                      ]
                    })
                  ],
                  2
                )
              ]
            : _vm.item.type === "AspNavTabs"
            ? [
                _c("asp-nav-tabs", {
                  attrs: {
                    navTabList: _vm.item.navTabList,
                    formList: _vm.formList,
                    buttonList: _vm.hideButtonGroupComponent
                  },
                  on: { on: _vm.bindEvents }
                })
              ]
            : _vm.item.type == "empty"
            ? _c(
                "div",
                {
                  class: [
                    "empty_" + _vm.item["child-type"],
                    { empty_fontWeightNormal: !_vm.item["isFontWeightBold"] }
                  ]
                },
                [
                  _vm._l(_vm.item.formFields, function(fieldItem, fieldKey) {
                    return [
                      _c("form-item-box", {
                        key: fieldKey,
                        style: {
                          marginTop: _vm.item["marginTop"] + "px",
                          marginBottom: _vm.item["marginBottom"] + "px",
                          paddingLeft: _vm.item["marginLeft"] + "px",
                          paddingRight: _vm.item["marginRight"] + "px"
                        },
                        attrs: {
                          item: fieldItem,
                          span: 24,
                          formConfig: _vm.formConfig,
                          dynamic: _vm.dynamic,
                          formList: _vm.formList,
                          status: _vm.status,
                          model: _vm.model,
                          oldModel: _vm.oldModel,
                          newModel: _vm.newModel,
                          isCompare: _vm.isCompare,
                          index: _vm.index,
                          parent: _vm.parent,
                          isTableFormItem: _vm.isTableFormItem,
                          isNoLabel: false
                        },
                        on: { on: _vm.bindEvents },
                        scopedSlots: _vm._u(
                          [
                            _vm._l(_vm.getAllSlotName, function(cell) {
                              return {
                                key: cell,
                                fn: function(ref) {
                                  var data = ref.data
                                  return [_vm._t(cell, null, { data: data })]
                                }
                              }
                            })
                          ],
                          null,
                          true
                        )
                      })
                    ]
                  })
                ],
                2
              )
            : [
                _c("div", {
                  staticClass: "label-style",
                  class: {
                    "label-hidden": _vm.item.labelWidth === 0 || _vm.isNoLabel
                  },
                  style: { width: _vm.item.labelWidth + "px" }
                }),
                _vm.needConvertLabel
                  ? _c(
                      "div",
                      [
                        _c(
                          "form-item-text",
                          {
                            class: [{ block: _vm.item.block }],
                            attrs: {
                              item: _vm.item,
                              status: _vm.status,
                              isTableFormItem: _vm.isTableFormItem,
                              isNoLabel: _vm.isNoLabel,
                              index: _vm.index,
                              parent: _vm.parent,
                              model: _vm.model,
                              newModel: _vm.newModel,
                              oldModel: _vm.oldModel,
                              isCompare: _vm.isCompare,
                              formConfig: _vm.formConfig,
                              dynamic: _vm.dynamic,
                              formList: _vm.formList,
                              value: _vm.cellNewSourceData(_vm.item),
                              oldValue: _vm.cellOldSourceData(_vm.item)
                            }
                          },
                          [
                            _vm.item.slotName
                              ? [
                                  _vm._t(_vm.item.slotName, null, {
                                    slot: _vm.item.slotName
                                  })
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ],
                      1
                    )
                  : _c(
                      "div",
                      [
                        _c(
                          "form-item",
                          {
                            class: [{ block: _vm.item.block }],
                            attrs: {
                              item: _vm.item,
                              status: _vm.status,
                              isTableFormItem: _vm.isTableFormItem,
                              isNoLabel: _vm.isNoLabel,
                              index: _vm.index,
                              parent: _vm.parent,
                              model: _vm.model,
                              type: "build",
                              formConfig: _vm.formConfig,
                              dynamic: _vm.dynamic,
                              formList: _vm.formList,
                              value: _vm.cellSourceData(_vm.item)
                            },
                            on: { on: _vm.bindEvents }
                          },
                          [
                            _vm.item.slotName
                              ? [
                                  _vm._t(_vm.item.slotName, null, {
                                    slot: _vm.item.slotName
                                  })
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ],
                      1
                    )
              ]
        ],
        2
      )
    : _vm._e()
}
var form_item_boxvue_type_template_id_526d4af2_scoped_true_staticRenderFns = []
form_item_boxvue_type_template_id_526d4af2_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/components/asp-smart-form/form-item-box.vue?vue&type=template&id=526d4af2&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor"
var es_number_constructor_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/form-item.vue?vue&type=template&id=c454d518&scoped=true&
var form_itemvue_type_template_id_c454d518_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      attrs: { slot: "reference" },
      on: {
        contextmenu: function($event) {
          $event.preventDefault()
          return _vm.contextMenu()
        }
      },
      slot: "reference"
    },
    [
      _c(
        "el-form-item",
        {
          class: [
            "required-star__" + _vm.formConfig.starPostion,
            { html: _vm.item.type === "html" }
          ],
          attrs: {
            label: _vm.formItemLabel,
            prop: _vm.formItemProp,
            rules: _vm.formItemRules,
            "label-width": _vm.formItemLabelWidth
          }
        },
        [
          _vm.item.type === "html"
            ? _c("div", {
                staticClass: "html",
                style: [_vm.item.style, { width: _vm.item.width }],
                attrs: { title: _vm.value },
                domProps: { innerHTML: _vm._s(_vm.value) }
              })
            : _vm._e(),
          _vm.item.type === "text"
            ? _c("div", {
                staticClass: "text",
                class: [_vm.item.class, "text__textarea"],
                style: [_vm.item.style, { width: _vm.item.width }],
                attrs: { title: _vm.value },
                domProps: { innerHTML: _vm._s(_vm.value) }
              })
            : _vm._e(),
          _vm.item.type === "customArea"
            ? [
                _vm.type !== "build"
                  ? _c("div", { staticClass: "customArea" }, [
                      _vm._v("\n        " + _vm._s(_vm.value) + "\n      ")
                    ])
                  : [_vm._t(_vm.item.slotName)]
              ]
            : _vm._e(),
          _vm.item.type === "input" || _vm.item.type === "number"
            ? _c(
                "el-input",
                _vm._b(
                  {
                    class: [_vm.item.class, _vm.classObject],
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      type: "text",
                      value: _vm.value,
                      "show-password": _vm.item["password-type"],
                      maxlength: _vm.computeMaxLength,
                      "show-word-limit": _vm.computeShowLimit,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly
                    },
                    on: {
                      blur: _vm.bindBlur,
                      input: _vm.bindInput,
                      change: _vm.bindChange
                    }
                  },
                  "el-input",
                  _vm.item.props,
                  false
                ),
                [
                  _vm.item.slot && _vm.item.icon && !_vm.item.button
                    ? _c("i", {
                        staticClass: "el-input__icon",
                        class: _vm.item.icon,
                        attrs: { slot: _vm.item.slot || "suffix" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.bindClick($event)
                          }
                        },
                        slot: _vm.item.slot || "suffix"
                      })
                    : _vm._e(),
                  _vm.item.button && _vm.item["button-name"]
                    ? _c(
                        "el-button",
                        {
                          attrs: {
                            slot: _vm.item.slot || "prefix",
                            icon: _vm.item.icon
                          },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.bindClick($event)
                            }
                          },
                          slot: _vm.item.slot || "prefix"
                        },
                        [_vm._v("\n        " + _vm._s(_vm.item["button-name"]))]
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm.item.type === "textarea"
            ? _c(
                "el-input",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly,
                      type: "textarea"
                    },
                    on: { input: _vm.bindInput, change: _vm.bindChange }
                  },
                  "el-input",
                  _vm.item.props,
                  false
                )
              )
            : _vm._e(),
          _vm.item.type === "inputNumber"
            ? _c(
                "el-input-number",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly
                    },
                    on: { input: _vm.bindInput, change: _vm.bindChange }
                  },
                  "el-input-number",
                  _vm.item.props,
                  false
                )
              )
            : _vm.item.type === "select" && _vm.item.props.remote === false
            ? _c(
                "el-select",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly
                    },
                    on: {
                      blur: _vm.bindBlur,
                      clear: _vm.bindClear,
                      input: _vm.bindInput,
                      change: _vm.bindChange
                    }
                  },
                  "el-select",
                  _vm.item.props,
                  false
                ),
                _vm._l(_vm.computeOptionList, function(cell, index) {
                  return _c("el-option", {
                    key: index,
                    attrs: {
                      label: cell[_vm.item["option-label"]],
                      value: cell[_vm.item["option-value"]],
                      disabled:
                        cell[
                          _vm.item["option-disabled"] === undefined
                            ? "disabled"
                            : _vm.item["option-disabled"]
                        ]
                    }
                  })
                }),
                1
              )
            : _vm.item.type === "select" && _vm.item.props.remote === true
            ? _c(
                "el-select",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly,
                      "remote-method": _vm.remoteMethodSearch
                    },
                    on: {
                      clear: _vm.remoteMethodClear,
                      blur: _vm.remoteMethodBlur,
                      focus: _vm.remoteMethodFocus,
                      change: _vm.remoteMethodChange
                    }
                  },
                  "el-select",
                  _vm.item.props,
                  false
                ),
                _vm._l(_vm.computeOptionList, function(cell, index) {
                  return _c(
                    "el-option",
                    {
                      key: index,
                      attrs: {
                        label: cell[_vm.item["option-label"]],
                        value: cell[_vm.item["option-value"]],
                        disabled:
                          cell[
                            _vm.item["option-disabled"] === undefined
                              ? "disabled"
                              : _vm.item["option-disabled"]
                          ]
                      }
                    },
                    [
                      _vm.needAliasName
                        ? _c("span", [
                            _vm._v(_vm._s(cell[_vm.item["option-alias"]]))
                          ])
                        : _vm._e()
                    ]
                  )
                }),
                1
              )
            : _vm.item.type === "cascader"
            ? _c(
                "el-cascader",
                _vm._b(
                  {
                    ref: "aspCascader",
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      options: _vm.item.options,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly,
                      "show-all-levels": ""
                    },
                    on: { input: _vm.bindInput, change: _vm.bindChange }
                  },
                  "el-cascader",
                  _vm.item.props,
                  false
                )
              )
            : _vm.item.type === "region"
            ? _c(
                "el-cascader",
                _vm._b(
                  {
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      options: _vm.regionOptionList,
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly
                    },
                    on: { input: _vm.bindInput, change: _vm.bindChange }
                  },
                  "el-cascader",
                  _vm.item.props,
                  false
                )
              )
            : _vm.item.type === "timeSelect"
            ? _c(
                "el-time-select",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly
                    },
                    on: { input: _vm.bindInput, change: _vm.bindChange }
                  },
                  "el-time-select",
                  _vm.item.props,
                  false
                )
              )
            : _vm.item.type === "timePicker"
            ? _c(
                "el-time-picker",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly
                    },
                    on: {
                      blur: _vm.bindBlur,
                      input: _vm.bindInput,
                      change: _vm.bindChange
                    }
                  },
                  "el-time-picker",
                  _vm.item.props,
                  false
                )
              )
            : _vm.item.type === "datePicker"
            ? _c(
                "el-date-picker",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly,
                      "picker-options": _vm.pickerOptions
                    },
                    on: { input: _vm.bindInput, change: _vm.bindChange }
                  },
                  "el-date-picker",
                  _vm.item.props,
                  false
                )
              )
            : _vm.item.type === "dateTimePicker"
            ? _c(
                "el-date-picker",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly
                    },
                    on: { input: _vm.bindInput, change: _vm.bindChange }
                  },
                  "el-date-picker",
                  _vm.item.props,
                  false
                )
              )
            : _vm.item.type === "colorPicker"
            ? _c(
                "el-color-picker",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style],
                    attrs: { value: _vm.value },
                    on: { input: _vm.bindInput, change: _vm.bindChange }
                  },
                  "el-color-picker",
                  _vm.item.props,
                  false
                )
              )
            : _vm.item.type === "transfer"
            ? _c(
                "el-transfer",
                _vm._b(
                  {
                    key: _vm.item.props.value,
                    class: _vm.item.class,
                    style: [_vm.item.style],
                    attrs: { value: _vm.value, data: _vm.computeOptionList },
                    on: { input: _vm.bindInput, change: _vm.bindChange }
                  },
                  "el-transfer",
                  _vm.item.props,
                  false
                )
              )
            : _vm.item.type === "checkbox"
            ? [
                _vm.item.checkAll
                  ? _c(
                      "div",
                      [
                        _c(
                          "el-checkbox",
                          {
                            attrs: {
                              indeterminate: _vm.isIndeterminate,
                              disabled: _vm.tableRowCellDisabled,
                              readonly: _vm.tableRowCellReadonly
                            },
                            on: { change: _vm.handleCheckAllChange },
                            model: {
                              value: _vm.checkAll,
                              callback: function($$v) {
                                _vm.checkAll = $$v
                              },
                              expression: "checkAll"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(this.item.optionProps.allLabel || "全选") +
                                "\n        "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _c(
                  "el-checkbox-group",
                  _vm._b(
                    {
                      class: _vm.item.class,
                      style: [_vm.item.style, { width: _vm.item.width }],
                      attrs: {
                        value: _vm.computeCheckboxSelectKeys,
                        disabled: _vm.tableRowCellDisabled,
                        readonly: _vm.tableRowCellReadonly
                      },
                      on: {
                        input: _vm.bindInput,
                        change: _vm.handleCheckedChange
                      }
                    },
                    "el-checkbox-group",
                    _vm.item.props,
                    false
                  ),
                  _vm._l(_vm.computeOptionList, function(cell, index) {
                    return _c(
                      "el-checkbox",
                      {
                        key: index,
                        attrs: {
                          value: cell[_vm.item["option-value"]],
                          label: cell[_vm.item["option-value"]],
                          disabled: cell.disabled
                        }
                      },
                      [_vm._v(_vm._s(cell[_vm.item["option-label"]]))]
                    )
                  }),
                  1
                )
              ]
            : _vm.item.type === "radio"
            ? _c(
                "el-radio-group",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly
                    },
                    on: { input: _vm.bindInput, change: _vm.radioBindChange }
                  },
                  "el-radio-group",
                  _vm.item.props,
                  false
                ),
                _vm._l(_vm.computeOptionList, function(cell, index) {
                  return _c(
                    "el-radio",
                    {
                      key: index,
                      attrs: {
                        label: cell[_vm.item["option-value"]],
                        value: cell[_vm.item["option-value"]],
                        disabled: cell.disabled
                      }
                    },
                    [_vm._v(_vm._s(cell[_vm.item["option-label"]]))]
                  )
                }),
                1
              )
            : _vm.item.type === "switch"
            ? _c(
                "el-switch",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly
                    },
                    on: { input: _vm.bindInput, change: _vm.bindChange }
                  },
                  "el-switch",
                  _vm.item.props,
                  false
                )
              )
            : _vm.item.type === "slider"
            ? _c(
                "el-slider",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly
                    },
                    on: { input: _vm.bindInput, change: _vm.bindChange }
                  },
                  "el-slider",
                  _vm.item.props,
                  false
                )
              )
            : _vm.item.type === "rate"
            ? _c(
                "el-rate",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      value: _vm.value,
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly
                    },
                    on: { input: _vm.bindInput, change: _vm.bindChange }
                  },
                  "el-rate",
                  _vm.item.props,
                  false
                )
              )
            : _vm.item.type === "upload"
            ? _c(
                "el-upload",
                _vm._b(
                  {
                    class: _vm.item.class,
                    attrs: {
                      "file-list": _vm.value,
                      multiple: "",
                      "on-preview": _vm.handleUploadPreview,
                      "http-request": _vm.handleUpload,
                      "on-exceed": _vm.changeUplaodExceed,
                      "on-remove": _vm.handleRemove
                    }
                  },
                  "el-upload",
                  _vm.item.props,
                  false
                ),
                [
                  _c(
                    "el-button",
                    { attrs: { icon: "el-icon-upload2", type: "primary" } },
                    [_vm._v("点击上传")]
                  ),
                  _vm.item.props.tip.length > 0
                    ? _c(
                        "span",
                        {
                          staticClass: "el-upload__tip",
                          staticStyle: { "margin-left": "10px" },
                          attrs: { slot: "tip" },
                          slot: "tip"
                        },
                        [_vm._v(_vm._s(_vm.item.props.tip))]
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm.item.type === "link"
            ? _c(
                "el-link",
                _vm._b(
                  {
                    class: _vm.item.class,
                    style: [_vm.item.style, { width: _vm.item.width }],
                    attrs: {
                      disabled: _vm.tableRowCellDisabled,
                      readonly: _vm.tableRowCellReadonly
                    },
                    on: { click: _vm.bindClick }
                  },
                  "el-link",
                  _vm.item.props,
                  false
                ),
                [_vm._v("\n      " + _vm._s(_vm.value) + "\n    ")]
              )
            : _vm.item.type === "editor"
            ? _c("div", { attrs: { id: "editor" + _vm.item.columnName } })
            : _vm.item.type === "selectTree"
            ? _c("asp-select-tree", {
                class: _vm.item.class,
                style: [_vm.item.style, { width: _vm.item.width }],
                attrs: { item: _vm.item }
              })
            : _vm.item.type === "avatar"
            ? _c(
                "el-avatar",
                _vm._b(
                  { class: _vm.item.class, style: [_vm.item.style] },
                  "el-avatar",
                  _vm.item.props,
                  false
                ),
                [_vm._v("\n      " + _vm._s(_vm.item.props.text) + "\n    ")]
              )
            : _vm.item.type === "webbase-upload"
            ? _c("asp-att-adm", {
                attrs: {
                  "group-id": _vm.value,
                  unitType: _vm.item.wbProps.unitType,
                  multiple: _vm.item.wbProps.multiple,
                  "attach-type": _vm.item.wbProps.attachType,
                  prefix: _vm.item.wbProps.prefix,
                  isEffect: _vm.item.wbProps.isEffect,
                  localDelete: _vm.item.localDelete,
                  icon: _vm.item.icon,
                  text: _vm.item.text,
                  nodeEnv: _vm.serverProps.nodeEnv,
                  localProxy: _vm.serverProps.localProxy,
                  nigxProxy: _vm.serverProps.nigxProxy
                },
                on: {
                  changeWebbasUpload: _vm.changeWebbasUpload,
                  changeWebbasDelete: _vm.changeWebbasDelete,
                  queryWebbaseNullFile: _vm.queryWebbaseNullFile
                }
              })
            : _vm.item.type === "AspDateRange"
            ? _c("asp-date-range", {
                attrs: {
                  startDate: _vm.value,
                  endDate: _vm.getRangeSuffixLabel,
                  dateRange: _vm.item.aspProps.dateRange,
                  "start-placeholder": _vm.item.aspProps.startPlaceholder,
                  "end-placeholder": _vm.item.aspProps.endPlaceholder,
                  "range-separator": _vm.item.aspProps.rangeSeparator,
                  operations: _vm.item.operations,
                  startProps: _vm.item.startProps,
                  endProps: _vm.item.endProps,
                  props: _vm.item.props,
                  status: _vm.status
                },
                on: {
                  changeAspEndDate: _vm.changeAspEndDate,
                  changeAspStartDate: _vm.changeAspStartDate
                }
              })
            : _vm.item.type === "AspInputRange"
            ? _c("asp-input-range", {
                attrs: {
                  startInput: _vm.value,
                  endInput: _vm.getRangeSuffixLabel,
                  "start-placeholder": _vm.item.aspProps.startPlaceholder,
                  "end-placeholder": _vm.item.aspProps.endPlaceholder,
                  "range-separator": _vm.item.aspProps.rangeSeparator,
                  operations: _vm.item.operations,
                  startProps: _vm.item.startProps,
                  endProps: _vm.item.endProps,
                  props: _vm.item.props,
                  status: _vm.status
                },
                on: {
                  changeAspStartInput: _vm.changeAspStartInput,
                  changeAspEndInput: _vm.changeAspEndInput
                }
              })
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var form_itemvue_type_template_id_c454d518_scoped_true_staticRenderFns = []
form_itemvue_type_template_id_c454d518_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/components/asp-smart-form/form-item.vue?vue&type=template&id=c454d518&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string"
var es_object_to_string_ = __webpack_require__(3);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.to-string"
var es_regexp_to_string_ = __webpack_require__(17);

// EXTERNAL MODULE: external "core-js/modules/es.string.trim"
var es_string_trim_ = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/components/asp-select-tree.vue?vue&type=template&id=3d557cbf&scoped=true&
var asp_select_treevue_type_template_id_3d557cbf_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-select",
    _vm._b(
      {
        staticClass: "selectBody",
        attrs: { placeholder: "请选择" },
        model: {
          value: _vm.value1,
          callback: function($$v) {
            _vm.value1 = $$v
          },
          expression: "value1"
        }
      },
      "el-select",
      _vm.item.props,
      false
    ),
    [
      _c(
        "el-option",
        { attrs: { value: _vm.data[0] } },
        [
          _c(
            "el-tree",
            _vm._b(
              {
                attrs: { data: _vm.data },
                on: { "node-click": _vm.handleNodeClick }
              },
              "el-tree",
              _vm.item.props,
              false
            )
          )
        ],
        1
      )
    ],
    1
  )
}
var asp_select_treevue_type_template_id_3d557cbf_scoped_true_staticRenderFns = []
asp_select_treevue_type_template_id_3d557cbf_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-select-tree.vue?vue&type=template&id=3d557cbf&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/components/asp-select-tree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var asp_select_treevue_type_script_lang_js_ = ({
  name: 'asp-tree-select',
  props: {
    // 是否显示多选
    item: {
      type: Object,
      default: function _default() {}
    },
    // 数据源
    sourceData: []
  },
  data: function data() {
    return {
      value1: '123456',
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }, {
        label: '一级 4',
        children: [{
          label: '二级 4-1',
          children: [{
            label: '三级 4-1-1'
          }]
        }, {
          label: '二级 4-2',
          children: [{
            label: '三级 4-2-1'
          }]
        }]
      }, {
        label: '一级 5',
        children: [{
          label: '二级 5-1',
          children: [{
            label: '三级 5-1-1'
          }]
        }, {
          label: '二级 5-2',
          children: [{
            label: '三级 5-2-1'
          }]
        }]
      }, {
        label: '一级 6',
        children: [{
          label: '二级 6-1',
          children: [{
            label: '三级 6-1-1'
          }]
        }, {
          label: '二级 6-2',
          children: [{
            label: '三级 6-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label',
        value: 'label'
      }
    };
  },
  watch: {},
  methods: {
    handleNodeClick: function handleNodeClick(data) {
      // console.log(data)
      this.value1 = data.label; // console.log(this.value1)
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-select-tree.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_asp_select_treevue_type_script_lang_js_ = (asp_select_treevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/asp-smart-form/components/asp-select-tree.vue?vue&type=style&index=0&id=3d557cbf&lang=scss&scoped=true&
var asp_select_treevue_type_style_index_0_id_3d557cbf_lang_scss_scoped_true_ = __webpack_require__(55);

// EXTERNAL MODULE: ./src/components/asp-smart-form/components/asp-select-tree.vue?vue&type=style&index=1&lang=scss&
var asp_select_treevue_type_style_index_1_lang_scss_ = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-select-tree.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_asp_select_treevue_type_script_lang_js_,
  asp_select_treevue_type_template_id_3d557cbf_scoped_true_render,
  asp_select_treevue_type_template_id_3d557cbf_scoped_true_staticRenderFns,
  false,
  null,
  "3d557cbf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/asp-smart-form/components/asp-select-tree.vue"
/* harmony default export */ var asp_select_tree = (component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/components/asp-att-adm.vue?vue&type=template&id=1676caee&
var asp_att_admvue_type_template_id_1676caee_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-upload",
        {
          attrs: {
            "auto-upload": false,
            "file-list": _vm.dataList,
            "on-preview": _vm.handlePreview,
            "before-remove": _vm.handleBeforeRemove,
            "on-exceed": _vm.handleExceed,
            "on-change": _vm.handleChange,
            multiple: _vm.multiple,
            "show-file-list": _vm.showFlag,
            limit: 1,
            action: ""
          }
        },
        [
          _c(
            "div",
            [
              _c(
                "el-button",
                {
                  staticClass: "solid-with-icon-btn attachBtn",
                  attrs: { icon: _vm.icon }
                },
                [_vm._v(_vm._s(_vm.text))]
              ),
              _vm._t("right")
            ],
            2
          ),
          _c(
            "div",
            {
              staticClass: "el-upload__tip",
              attrs: { slot: "tip" },
              slot: "tip"
            },
            [_vm._v(_vm._s(_vm.attachTip))]
          )
        ]
      )
    ],
    1
  )
}
var asp_att_admvue_type_template_id_1676caee_staticRenderFns = []
asp_att_admvue_type_template_id_1676caee_render._withStripped = true


// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-att-adm.vue?vue&type=template&id=1676caee&

// EXTERNAL MODULE: external "core-js/modules/es.array.filter"
var es_array_filter_ = __webpack_require__(19);

// EXTERNAL MODULE: external "core-js/modules/es.array.last-index-of"
var es_array_last_index_of_ = __webpack_require__(59);

// EXTERNAL MODULE: external "core-js/modules/es.array.some"
var es_array_some_ = __webpack_require__(21);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec"
var es_regexp_exec_ = __webpack_require__(4);

// EXTERNAL MODULE: external "core-js/modules/es.string.replace"
var es_string_replace_ = __webpack_require__(24);

// EXTERNAL MODULE: external "core-js/modules/es.string.split"
var es_string_split_ = __webpack_require__(7);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.iterator"
var web_dom_collections_iterator_ = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/components/asp-att-adm.vue?vue&type=script&lang=js&















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var asp_att_admvue_type_script_lang_js_ = ({
  name: 'AspAttAdm',
  props: {
    localDelete: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'el-icon-upload2'
    },
    text: {
      type: String,
      default: '选择文件'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    attachType: {
      type: String,
      default: ''
    },
    groupId: {
      type: String,
      default: ''
    },
    isRequest: {
      type: Boolean,
      default: true
    },
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    prefix: {
      type: String,
      default: '/web/support/v1'
    },
    unitType: {
      type: String,
      default: 'M'
    },
    isEffect: {
      type: Boolean,
      default: false
    },
    nodeEnv: {
      type: String,
      default: ''
    },
    localProxy: {
      type: String,
      default: ''
    },
    nigxProxy: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      delList: [],
      // 删除的附件id列表
      fileData: new FormData(),
      dataList: [],
      // 附件信息
      keys: [],
      // 新增附件的附件ID
      attachTip: '',
      // 附件提示语
      fileType: '',
      // 可上传附件类型
      sizeLimit: 0,
      // 单个附件限制大小
      countLimit: 1,
      // 可上传附件数量
      hasDelete: false,
      // 附件是否做过删除操作的判断
      requestFlag: true,
      // 辨别能否发送请求的标志
      showFlag: true
    };
  },
  computed: {},
  watch: {
    groupId: function groupId(val) {
      if (this.requestFlag) {
        this.initFile();
      }
    },
    fileList: function fileList(val) {
      this.dataList = val;
    },
    dataList: function dataList(val) {
      for (var i = 0; i < val.length; i++) {
        var item = val[i];
        item.name = item.fileName; // item.attachFileId = item.attachFileId
      }
    }
  },
  created: function created() {
    this.init();
    this.getFileTypeConfig();
  },
  methods: {
    init: function init() {
      if (this.isRequest === false) {
        this.requestFlag = false;
      } else {
        this.initFile();
      }
    },
    // 查询附件类型
    getFileTypeConfig: function getFileTypeConfig() {
      var _this = this;

      var param = {
        attachTypeId: this.attachType
      };
      var urlStr = this.localProxy + this.prefix + '/attachment/viewType';

      if (this.$aspHttps === undefined || this.$aspHttps.asp_Post === undefined) {
        return;
      }

      this.$aspHttps.asp_Post(urlStr, param).then(function (response) {
        if (parseInt(response.status) === 200) {
          var fileType = response.data;
          _this.fileType = fileType.fileSuffixLimit ? fileType.fileSuffixLimit.replace(/,/g, '、') : '无限制';
          _this.sizeLimit = fileType.singleSizeLimit;
          _this.countLimit = fileType.attachCountLimit;

          if (_this.unitType === 'M') {
            _this.attachTip = "\u60A8\u53EF\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF1A".concat(_this.fileType, ",\u5355\u4E2A\u9644\u4EF6\u5927\u5C0F\u9650").concat(_this.sizeLimit / 1024 / 1024, "M,\u9650\u4E0A\u4F20").concat(_this.countLimit, "\u4E2A\u6587\u4EF6");
          } else if (_this.unitType === 'K') {
            _this.attachTip = "\u60A8\u53EF\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF1A".concat(_this.fileType, ",\u5355\u4E2A\u9644\u4EF6\u5927\u5C0F\u9650").concat(_this.sizeLimit / 1024, "K,\u9650\u4E0A\u4F20").concat(_this.countLimit, "\u4E2A\u6587\u4EF6");
          } else if (_this.unitType === 'G') {
            _this.attachTip = "\u60A8\u53EF\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF1A".concat(_this.fileType, ",\u5355\u4E2A\u9644\u4EF6\u5927\u5C0F\u9650").concat(_this.sizeLimit / 1024 / 1024 / 1024, "K,\u9650\u4E0A\u4F20").concat(_this.countLimit, "\u4E2A\u6587\u4EF6");
          }
        }
      });
    },
    // 下载单个附件
    handlePreview: function handlePreview(file) {
      var urlStr = this.prefix + '/attachment/downloadFile?attachFileId=' + file.attachFileId;

      if (this.nodeEnv === 'production') {
        urlStr = this.nigxProxy + urlStr;
      } else {
        urlStr = this.localProxy + urlStr;
      } // console.log("附件下载URL:" + urlStr)


      window.location.href = urlStr;
    },
    // 根据ID删除单个附件
    handleBeforeRemove: function handleBeforeRemove(file, fileList) {
      this.confirm(this, "\u662F\u5426\u5220\u9664\u9644\u4EF6\uFF1A".concat(file.name, "\uFF1F"), function () {
        var _this2 = this;

        var attachFileId = file.attachFileId;

        if (this.localDelete) {
          // 本地删除附件
          this.deleteOperateSuccess(attachFileId);
          return;
        }

        var urlStr = this.localProxy + this.prefix + '/attachment/deleteByAttachFileId?attachFileId=' + attachFileId;

        if (this.$aspHttps === undefined || this.$aspHttps.asp_Post === undefined) {
          return false;
        }

        this.$aspHttps.asp_Post(urlStr, {}).then(function (response) {
          if (parseInt(response.status) === 200) {
            _this2.deleteOperateSuccess(attachFileId); // for (let i = 0; i < this.keys.length; i++) {
            //   if (this.keys[i] === attachFileId) {
            //     this.keys.splice(i, 1)
            //     break
            //   }
            // }
            // for (let i = 0; i < this.dataList.length; i++) {
            //   if (this.dataList[i].attachFileId === attachFileId) {
            //     this.dataList.splice(i, 1)
            //     break
            //   }
            // }
            // const hasKeys = []
            // this.dataList.forEach(item => {
            //   hasKeys.push(item.attachFileId)
            // })
            // this.hasDelete = true
            // this.$emit('changeWebbasDelete', hasKeys.join(','))
            // this.$message.success('删除附件成功')

          }
        });
      });
      return false;
    },
    deleteOperateSuccess: function deleteOperateSuccess(attachFileId) {
      this.delList.push(attachFileId);

      for (var i = 0; i < this.keys.length; i++) {
        if (this.keys[i] === attachFileId) {
          this.keys.splice(i, 1);
          break;
        }
      }

      for (var _i = 0; _i < this.dataList.length; _i++) {
        if (this.dataList[_i].attachFileId === attachFileId) {
          this.dataList.splice(_i, 1);
          break;
        }
      }

      var hasKeys = [];
      this.dataList.forEach(function (item) {
        hasKeys.push(item.attachFileId);
      });
      this.hasDelete = true;
      this.$emit('changeWebbasDelete', {
        fileId: hasKeys.join(','),
        delFileList: this.delList
      }); // this.$emit('changeWebbasDelete', hasKeys.join(','))

      this.$message.success('删除附件成功');
    },
    handleChange: function handleChange(file, fileList) {
      this.showFlag = false;
      this.handleExceed([file.raw], []);
    },
    handleExceed: function handleExceed(files, fileList) {
      var _this3 = this;

      if (!files || !files.length) {
        return;
      }

      var realFileList = fileList.filter(function (item) {
        if (item.status === 'success') return item;
      });

      if (realFileList.length + files.length > this.countLimit) {
        this.$message.error("\u6700\u591A\u53EF\u4EE5\u4E0A\u4F20".concat(this.countLimit, "\u4E2A\u9644\u4EF6\uFF01"));
        return;
      }

      var fileDatas = new FormData();

      var _loop = function _loop(i) {
        var file = files[i]; // 先校验附件格式

        var type = file.name.substring(file.name.lastIndexOf('.') + 1);

        var fileTypeFlag = _this3.fileType.split('、').some(function (item) {
          return item === type;
        });

        if (!fileTypeFlag) {
          fileTypeFlag = _this3.fileType.split(';').some(function (item) {
            return item === type;
          });
        }

        if (!fileTypeFlag) {
          _this3.$message.error("\u4E0D\u53EF\u4E0A\u4F20\u7C7B\u578B\u4E3A".concat(type, "\u7684\u9644\u4EF6\uFF01"));

          return {
            v: false
          };
        } // 再校验附件大小


        if (file.size === 0) {
          _this3.$message.error('上传附件内容不能为空！');

          return {
            v: false
          };
        }

        if (file.size > _this3.sizeLimit) {
          if (_this3.unitType === 'M') {
            _this3.$message.error("\u4E0A\u4F20\u6587\u4EF6\u7684\u5927\u5C0F\u4E0D\u53EF\u8D85\u8FC7".concat(_this3.sizeLimit / 1024 / 1024, "M\uFF01"));
          } else if (_this3.unitType === 'K') {
            _this3.$message.error("\u4E0A\u4F20\u6587\u4EF6\u7684\u5927\u5C0F\u4E0D\u53EF\u8D85\u8FC7".concat(_this3.sizeLimit / 1024, "K\uFF01"));
          } else if (_this3.unitType === 'G') {
            _this3.$message.error("\u4E0A\u4F20\u6587\u4EF6\u7684\u5927\u5C0F\u4E0D\u53EF\u8D85\u8FC7".concat(_this3.sizeLimit / 1024 / 1024 / 1024, "G\uFF01"));
          }

          return {
            v: false
          };
        }

        fileDatas.append('file', files[i]);
      };

      for (var i = 0; i < files.length; i++) {
        var _ret = _loop(i);

        if (Object(esm_typeof["a" /* default */])(_ret) === "object") return _ret.v;
      }

      fileDatas.append('attachTypeId', this.attachType);
      fileDatas.append('attachGroupId', this.groupId);
      var urlStr = '';

      if (this.nodeEnv === 'production') {
        urlStr = this.nigxProxy + this.prefix + '/attachment/add';
      } else {
        urlStr = this.localProxy + this.prefix + '/attachment/add';
      }

      var _t = this;

      this.$aspHttps.asp_FileUpload(urlStr, fileDatas).then(function (response) {
        if (parseInt(response.status) === 200) {
          var data = response.data;

          if (data) {
            var _files = [];

            _files.push(data);

            for (var _i2 = 0; _i2 < _files.length; _i2++) {
              _this3.keys.push(_files[_i2].attachFileId);

              _this3.dataList.push(_files[_i2]);
            }

            _this3.$message.success('上传附件成功');

            _this3.showFlag = true;
            var hasKeys = [];

            _this3.dataList.forEach(function (item) {
              hasKeys.push(item.attachFileId);
            });

            var fileId = hasKeys.join(',');

            _this3.$emit('changeWebbasUpload', {
              groupId: _files[0].attachGroupId,
              fileId: fileId
            });

            if (_this3.isEffect) {
              var attachGroupIdParam = {
                attachGroupId: _files[0].attachGroupId
              }; // 附件生效接口

              var _urlStr = _this3.localProxy + _this3.prefix + '/attachment/formalGroup';

              if (_this3.$aspHttps === undefined || _this3.$aspHttps.asp_Post === undefined) {
                return;
              }

              _this3.$aspHttps.asp_Post(_urlStr, attachGroupIdParam).then(function (response) {
                if (parseInt(response.status) !== 200) {
                  _this3.$message.error(response.message);
                }
              });
            }
          }
        } else {
          _t.$message.warning(response.message);
        }
      });
    },
    // 查询正式文件列表
    initFile: function initFile() {
      var _this4 = this;

      if (!this.groupId) {
        this.dataList = [];
        return;
      }

      var param = {
        attachGroupId: this.groupId
      };
      var urlStr = this.localProxy + this.prefix + '/attachment/list';

      if (this.$aspHttps === undefined || this.$aspHttps.asp_Post === undefined) {
        return;
      }

      this.$aspHttps.asp_Post(urlStr, param).then(function (response) {
        if (parseInt(response.status) === 200) {
          _this4.dataList = response.data;

          if (response.data === undefined || response.data.length <= 0) {
            _this4.$emit('queryWebbaseNullFile', {});
          }
        }
      }); // [{
      //     "attachFileId":"111ef65d9c244e30a1b7d9730bd46556",
      //     "attachFileStatus":"formal",
      //     "attachGroupId":"ea0c21dd99cc493ab9c216f852083368",
      //     "createDate":"2020-03-27T00:00:00",
      //     "fileName":"工作簿1的副本.xlsx",
      //     "fileSaveName":"group1/M00/00/01/CgHLM158EXmAXyn_AAAiETmyoRk69.xlsx",
      //     "fileSize":8721,
      //     "fileType":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      // }]
    },
    // 附件是否为空的判断
    asp_Att_IsEmpty: function asp_Att_IsEmpty() {
      return this.dataList.length === 0;
    },

    /**
     * 2次确认框封装
     * @param arg       必传 this
     * @param message   确认框提示语
     * @param callback  确认后执行函数
     */
    confirm: function confirm(arg, message, callback) {
      arg.$confirm(message, '确认', {
        closeOnClickModal: false,
        // closeOnPressEscape: false,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: function beforeClose(action, instance, done) {
          done();

          if (action === 'confirm') {
            callback.call(arg);
          }
        }
      }).then(function (action) {}).catch(function () {});
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-att-adm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_asp_att_admvue_type_script_lang_js_ = (asp_att_admvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-att-adm.vue





/* normalize component */

var asp_att_adm_component = Object(componentNormalizer["a" /* default */])(
  components_asp_att_admvue_type_script_lang_js_,
  asp_att_admvue_type_template_id_1676caee_render,
  asp_att_admvue_type_template_id_1676caee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var asp_att_adm_api; }
asp_att_adm_component.options.__file = "src/components/asp-smart-form/components/asp-att-adm.vue"
/* harmony default export */ var asp_att_adm = (asp_att_adm_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/components/asp-date-range.vue?vue&type=template&id=6b328f1e&
var asp_date_rangevue_type_template_id_6b328f1e_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-date-picker",
        _vm._b(
          {
            staticStyle: { width: "45%" },
            attrs: {
              placeholder: _vm.startPlaceholder,
              "picker-options": _vm.startPickerOptions
            },
            model: {
              value: _vm.start,
              callback: function($$v) {
                _vm.start = $$v
              },
              expression: "start"
            }
          },
          "el-date-picker",
          _vm.computeStartProps,
          false
        )
      ),
      _c(
        "div",
        {
          staticStyle: {
            display: "inline-table",
            "text-align": "center",
            width: "calc(10% - 8px)"
          }
        },
        [_vm._v(_vm._s(_vm.rangeSeparator))]
      ),
      _c(
        "el-date-picker",
        _vm._b(
          {
            staticStyle: { width: "45%" },
            attrs: {
              placeholder: _vm.endPlaceholder,
              "picker-options": _vm.endPickerOptions
            },
            model: {
              value: _vm.end,
              callback: function($$v) {
                _vm.end = $$v
              },
              expression: "end"
            }
          },
          "el-date-picker",
          _vm.computeEndProps,
          false
        )
      )
    ],
    1
  )
}
var asp_date_rangevue_type_template_id_6b328f1e_staticRenderFns = []
asp_date_rangevue_type_template_id_6b328f1e_render._withStripped = true


// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-date-range.vue?vue&type=template&id=6b328f1e&

// EXTERNAL MODULE: external "core-js/modules/es.array.includes"
var es_array_includes_ = __webpack_require__(18);

// EXTERNAL MODULE: external "core-js/modules/es.array.index-of"
var es_array_index_of_ = __webpack_require__(15);

// CONCATENATED MODULE: ./src/components/asp-smart-form/utils/toolApi.js




















 // * @Author: 卓望深圳团队
// * @Date: 2020年3月5日09:34:16
// * @LastEditTime : 2020年3月5日09:34:23
// * @LastEditors  : 卓望深圳团队
// * @Description: 智能表单模块
// import { delete } from "vue/types/umd"

var toolApi = {};
var componentTypeList = ['input', 'textarea', 'inputNumber', 'select', 'radio', 'checkbox', 'timePicker', 'datePicker', 'colorPicker', 'avatar', 'rate', 'slider', 'switch', 'link', 'text', 'html', 'customArea', 'upload', 'cascader', 'region', 'selectTree', 'transfer', 'webbase-upload', 'AspDateRange'];
/**
 * 二次确认框封装
 * @param arg       必传 this
 * @param message   确认框提示语
 * @param callback  确认后执行函数
 */

toolApi.confirm = function (arg, message, callback) {
  arg.$confirm(message, '确认', {
    closeOnClickModal: false,
    // closeOnPressEscape: false,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    beforeClose: function beforeClose(action, instance, done) {
      done();

      if (action === 'confirm') {
        callback.call(arg);
      }
    }
  }).then(function (action) {}).catch(function () {});
};

toolApi.subFormRowHeight = function (formConfig) {
  var height = 34;

  switch (formConfig.size) {
    case 'large':
      height = 46;
      break;

    case 'medium':
      height = 42;
      break;

    case 'small':
      height = 38;
      break;

    case 'mini':
      height = 34;
      break;
  }

  return height;
}; // 表格表单组件：每行(基础/高级)原子组件集(包括扩展行)


toolApi.subTableProps = function (active) {
  var itemList = [];
  set(active.formFields, itemList);
  set(active.childList, itemList);

  function set(sourceList, targetList) {
    sourceList.forEach(function (firstItem) {
      if (firstItem.type === 'row') {
        firstItem.formFields.forEach(function (secondItem) {
          secondItem.childList.forEach(function (thirdItem) {
            if (componentTypeList.includes(thirdItem.type)) {
              targetList.push(thirdItem);
            }
          });
        });
      } else if (firstItem.type === 'empty') {
        firstItem.formFields.forEach(function (secondItem) {
          if (componentTypeList.includes(secondItem.type)) {
            targetList.push(secondItem);
          }
        });
      } else {
        if (componentTypeList.includes(firstItem.type)) {
          targetList.push(firstItem);
        }
      }
    });
  }

  return itemList;
}; // 补充Array includes()不支持ie11


toolApi.aspIncluds = function (array, item) {
  var retValue = false;

  if (array && item !== undefined) {
    array.forEach(function (rec) {
      if (rec === item) {
        retValue = true;
      }
    });
  }

  return retValue;
};
/**
 * 时间对比
 * @param data1     时间参数1 Date类型 时间戳 时间字符串(2019-01-01)
 * @param operator  对比符号('===','>','<','>=','<=')
 * @param data2     时间参数1 Date类型 时间戳 时间字符串(2019-01-01)
 * @returns {boolean}
 */


toolApi.compareTime = function (data1, operator, data2) {
  if (data1 === undefined || data2 === undefined || !data1 || !data2) {
    return false;
  }

  if (typeof data1 === 'string') {
    if (Number(data1)) {
      data1 = Number(data1);
    } else {
      data1 = new Date(data1.replace(/-/g, '/')).getTime();
    }
  } else if (data1 instanceof Date) {
    data1 = data1.getTime();
  }

  if (typeof data2 === 'string') {
    if (Number(data2)) {
      data2 = Number(data2);
    } else {
      data2 = new Date(data2.replace(/-/g, '/')).getTime();
    }
  } else if (data2 instanceof Date) {
    data2 = data2.getTime();
  }

  if (operator === '===') {
    return data1 === data2;
  }

  if (operator === '>') {
    return data1 > data2;
  }

  if (operator === '<') {
    return data1 < data2;
  }

  if (operator === '>=') {
    return data1 >= data2;
  }

  if (operator === '<=') {
    return data1 <= data2;
  }

  return false;
}; // // 表格表单组件：列属性是否显示*号
// toolApi.tableHeaderStar = function (hd, index) {
//   let state = false
//   const operation = hd.item.formFields[index].operation
//   operation.forEach(item => {
//     if (item.status === hd.status) {
//       if (['disabled', 'readonly', 'label'].includes(item.attr)) {
//         state = true
//       }
//     }
//   })
//   const subRequiredName = hd.item.formFields[index].columnName + '_required'
//   const required = hd.item.formFields[index].required || hd.item.formFields[index][subRequiredName]
//   if (required &&
//       hd.item.formFields[index].type !== 'text' &&
//       !hd.item.formFields[index].props.disabled &&
//       !hd.item.formFields[index].props.readonly &&
//       !state) {
//     return true
//   }
//   return false
// }
// 表格表单组件：列属性是否显示*号


toolApi.tableHeaderStar = function (hd, index) {
  var state = false;
  var operation = hd.item.formFields[index].operation;
  operation.forEach(function (item) {
    if (item.status === hd.status) {
      if (['label'].includes(item.attr)) {
        state = true;
      }
    }
  });
  var subRequiredName = hd.item.formFields[index].columnName + '_required';
  var required = hd.item.formFields[index].required || hd.item.formFields[index][subRequiredName];

  if (required && hd.item.formFields[index].type !== 'text' && !state) {
    return true;
  }

  return false;
}; // 智能表单: 查询自定义属性的值


toolApi.sf_searchCustomPropValue = function (item, status, value) {
  var isGetLabelName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (item === undefined || value === undefined || status === undefined) {
    if (item.name === 'layout' && value === 'operation-show') {
      return true;
    }

    if (isGetLabelName) {
      return {
        retValue: false
      };
    } else {
      return false;
    }
  } // 最新配置处理


  if (item.operations !== undefined) {
    for (var i = 0; i < item.operations.length; i++) {
      var cell = item.operations[i];

      if (toolApi.aspIncluds(cell.status, status)) {
        if (item.name === 'layout') {
          // 容器组件
          if (value === 'hidden') {
            return cell.show === undefined ? false : !cell.show;
          } else if (value === 'operation-show') {
            return cell['operation-show'] === undefined ? true : cell['operation-show'];
          }
        } else {
          if (isGetLabelName) {
            return {
              retValue: cell.attr === value,
              columnName: cell.formatter
            };
          } else {
            return cell.attr === value;
          }
        }
      }
    }
  } // 老配置处理 (兼容老版本，后继不再使用)


  if (item.operation !== undefined) {
    for (var _i = 0; _i < item.operation.length; _i++) {
      var _cell = item.operation[_i];

      if (_cell.status === status) {
        if (item.name === 'layout') {
          // 容器组件
          if (value === 'hidden') {
            return _cell.show === undefined ? false : !_cell.show;
          } else if (value === 'operation-show') {
            return _cell['operation-show'] === undefined ? true : _cell['operation-show'];
          }
        } else {
          if (isGetLabelName) {
            return {
              retValue: _cell.attr === value,
              columnName: _cell.formatter
            };
          } else {
            return _cell.attr === value;
          }
        }
      }
    }
  } // 没有配置自定义属性时


  if (item.name === 'layout' && value === 'operation-show') {
    return true;
  }

  if (isGetLabelName) {
    return {
      retValue: false
    };
  } else {
    return false;
  }
};
/**
 * 时间格式化，返回格式 yyyy-MM-dd
 * @param time 要格式的时间
 * @returns {*}
 */


toolApi.formatTimeDd = function (time) {
  if (!time) {
    return '';
  }

  var format = '{y}-{m}-{d}';
  var date;

  if (Object(esm_typeof["a" /* default */])(time) === 'object') {
    date = time;
  } else if (typeof time === 'string') {
    if (/^[0-9]+$/.test(time)) {
      date = new Date(parseInt(time));
    } else if (time.indexOf('T') !== -1) {
      date = new Date(time.split('T')[0].replace(/-/g, '/'));
    } else {
      date = new Date(time.replace(/-/g, '/'));
    }
  } else {
    date = new Date(time);
  }

  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  var timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
    var value = formatObj[key];

    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }

    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }

    return value || 0;
  });
  return timeStr;
};
/**
 * 时间格式化，返回格式 yyyy-MM-dd hh:mm:ss
 * @param time
 * @returns {*}
 */


toolApi.formatTimeSs = function (time) {
  if (!time) {
    return null;
  }

  var format = '{y}-{m}-{d} {h}:{i}:{s}';
  var date;

  if (Object(esm_typeof["a" /* default */])(time) === 'object') {
    date = time;
  } else if (typeof time === 'string') {
    if (/^[0-9]+$/.test(time)) {
      date = new Date(parseInt(time));
    } else if (time.indexOf('T') !== -1) {
      date = new Date(time.split('T')[0].replace(/-/g, '/'));
    } else {
      date = new Date(time.replace(/-/g, '/'));
    }
  } else {
    date = new Date(time);
  }

  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  var timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
    var value = formatObj[key];

    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }

    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }

    return value || 0;
  });
  return timeStr;
};

toolApi.tool_isString = function (value) {
  return value instanceof String || typeof value === 'string';
};

toolApi.tool_isArray = function (value) {
  return value instanceof Array;
};

toolApi.tool_isJson = function (value) {
  return value.constructor === Object;
}; // 智能消息器：替换成目标提示语


toolApi.tool_formatData = function (_t, value, model, item, index, isSubForm) {
  var modelList = value.split('$') || []; // 表示此变量需要去数据模型中替换

  var routerList = value.split('#') || []; // 表示此变量需要去路由中替换

  if (modelList.length === 3) {
    var propName = modelList[1];

    if (isSubForm) {
      modelList[1] = model[item.parentName][index][propName] === undefined ? '' : model[item.parentName][index][propName];
    } else {
      modelList[1] = model[item.columnName] === undefined ? '' : model[item.columnName];
    }

    return modelList.join('');
  }

  if (routerList.length === 3) {
    var _propName = routerList[1];
    routerList[1] = _t.$route.query[_propName] ? _t.$route.query[_propName] : '';
    return routerList.join('');
  }

  return value;
};

/* harmony default export */ var utils_toolApi = (toolApi);
// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-status-machine/index.js
// * @Author: 卓望深圳团队
// * @Date: 2020年3月5日09:34:16
// * @LastEditTime : 2020年3月5日09:34:23
// * @LastEditors  : 卓望深圳团队
// * @Description: 智能状态器

var smartStatusMachine = {}; // 状态是否符合目前状态: true符合，false不符合

smartStatusMachine.ssm_compareStatusResult = function (statusList, status) {
  if (status === undefined || status.length <= 0) {
    return true;
  }

  if (statusList === undefined || statusList.length <= 0 || utils_toolApi.aspIncluds(statusList, '全部')) {
    return true;
  }

  if (utils_toolApi.aspIncluds(statusList, status)) {
    return true;
  }

  return false;
};

/* harmony default export */ var smart_status_machine = (smartStatusMachine);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/components/asp-date-range.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var asp_date_rangevue_type_script_lang_js_ = ({
  name: 'AspDateRange',
  props: {
    startDate: {
      type: [Number, String],
      default: undefined
    },
    endDate: {
      type: [Number, String],
      default: undefined
    },
    startPlaceholder: {
      type: String,
      default: '开始时间'
    },
    endPlaceholder: {
      type: String,
      default: '结束时间'
    },
    rangeSeparator: {
      type: String,
      default: '至'
    },
    startProps: {
      type: Object,
      default: function _default() {}
    },
    endProps: {
      type: Object,
      default: function _default() {}
    },
    props: {
      type: Object,
      default: function _default() {}
    },
    status: {
      type: String,
      default: undefined
    },
    dateRange: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    var _this = this;

    return {
      start: undefined,
      end: undefined,
      // 限制开始时间的选择区域
      startPickerOptions: {
        disabledDate: function disabledDate(time) {
          var compareValue = _this.end ? time.getTime() > new Date(_this.end).getTime() : true;
          var currentValue;

          switch (_this.dateRange) {
            case 0:
              // 全部可选
              if (_this.end) {
                return compareValue;
              }

              break;

            case 1:
              // 选择当天以前的日期(包括当天)
              currentValue = time.getTime() >= Date.now();
              return _this.end ? currentValue || compareValue : currentValue;

            case 2:
              // 选择当天之前的日期(不包括当天)
              currentValue = time.getTime() > Date.now() - 24 * 60 * 60 * 1000;
              return _this.end ? currentValue || compareValue : currentValue;

            case 3:
              // 选择当天之后的日期(包括当天)
              currentValue = time.getTime() <= Date.now() - 24 * 60 * 60 * 1000;
              return _this.end ? currentValue || compareValue : currentValue;

            case 4:
              // 选择当天之后的日期(不包括当天)
              currentValue = time.getTime() <= Date.now();
              return _this.end ? currentValue || compareValue : currentValue;
          }
        }
      },
      // 限制结束时间的选择区域
      endPickerOptions: {
        disabledDate: function disabledDate(time) {
          var compareValue = _this.start ? time.getTime() < new Date(_this.start).getTime() - 24 * 60 * 60 * 1000 : true;
          var currentValue;

          switch (_this.dateRange) {
            case 0:
              // 全部可选
              if (_this.start) {
                return compareValue;
              }

              break;

            case 1:
              // 选择当天以前的日期(包括当天)
              currentValue = time.getTime() >= Date.now();
              return _this.start ? currentValue || compareValue : currentValue;

            case 2:
              // 选择当天之前的日期(不包括当天)
              currentValue = time.getTime() > Date.now() - 24 * 60 * 60 * 1000;
              return _this.start ? currentValue || compareValue : currentValue;

            case 3:
              // 选择当天之后的日期(包括当天)
              currentValue = time.getTime() <= Date.now() - 24 * 60 * 60 * 1000;
              return _this.start ? currentValue || compareValue : currentValue;

            case 4:
              // 选择当天之后的日期(不包括当天)
              currentValue = time.getTime() <= Date.now();
              return _this.start ? currentValue || compareValue : currentValue;
          }
        }
      }
    };
  },
  computed: {
    computeStartProps: function computeStartProps() {
      return this.propsReComputed(JSON.parse(JSON.stringify(this.startProps)));
    },
    computeEndProps: function computeEndProps() {
      return this.propsReComputed(JSON.parse(JSON.stringify(this.endProps)));
    }
  },
  watch: {
    startDate: {
      handler: function handler(val, oldVal) {
        this.start = val;
      },
      immediate: true
    },
    endDate: {
      handler: function handler(val, oldVal) {
        this.end = val;
      },
      immediate: true
    },
    start: function start(val) {
      // this.$emit('update:startDate', val)
      this.$emit('changeAspStartDate', val);
    },
    end: function end(val) {
      // this.$emit('update:endDate', val)
      this.$emit('changeAspEndDate', val);
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    propsReComputed: function propsReComputed(tmpPorps) {
      if (tmpPorps.disabled && !smart_status_machine.ssm_compareStatusResult(tmpPorps.disabledStatus, this.status)) {
        tmpPorps.disabled = false;
      }

      if (tmpPorps.readonly && !smart_status_machine.ssm_compareStatusResult(tmpPorps.readonlyStatus, this.status)) {
        tmpPorps.readonly = false;
      }

      if (tmpPorps.clearable && !smart_status_machine.ssm_compareStatusResult(tmpPorps.clearableStatus, this.status)) {
        tmpPorps.clearable = false;
      }

      return Object.assign(tmpPorps, this.props);
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-date-range.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_asp_date_rangevue_type_script_lang_js_ = (asp_date_rangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-date-range.vue





/* normalize component */

var asp_date_range_component = Object(componentNormalizer["a" /* default */])(
  components_asp_date_rangevue_type_script_lang_js_,
  asp_date_rangevue_type_template_id_6b328f1e_render,
  asp_date_rangevue_type_template_id_6b328f1e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var asp_date_range_api; }
asp_date_range_component.options.__file = "src/components/asp-smart-form/components/asp-date-range.vue"
/* harmony default export */ var asp_date_range = (asp_date_range_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/components/asp-input-range.vue?vue&type=template&id=7413b6ea&
var asp_input_rangevue_type_template_id_7413b6ea_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-input",
        _vm._b(
          {
            staticStyle: { width: "45%" },
            attrs: { placeholder: _vm.startPlaceholder },
            model: {
              value: _vm.start,
              callback: function($$v) {
                _vm.start = $$v
              },
              expression: "start"
            }
          },
          "el-input",
          _vm.computeStartProps,
          false
        )
      ),
      _c(
        "div",
        {
          staticStyle: {
            display: "inline-table",
            "text-align": "center",
            width: "calc(10% - 8px)"
          }
        },
        [_vm._v(_vm._s(_vm.rangeSeparator))]
      ),
      _c(
        "el-input",
        _vm._b(
          {
            staticStyle: { width: "45%" },
            attrs: { placeholder: _vm.endPlaceholder },
            model: {
              value: _vm.end,
              callback: function($$v) {
                _vm.end = $$v
              },
              expression: "end"
            }
          },
          "el-input",
          _vm.computeEndProps,
          false
        )
      )
    ],
    1
  )
}
var asp_input_rangevue_type_template_id_7413b6ea_staticRenderFns = []
asp_input_rangevue_type_template_id_7413b6ea_render._withStripped = true


// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-input-range.vue?vue&type=template&id=7413b6ea&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/components/asp-input-range.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var asp_input_rangevue_type_script_lang_js_ = ({
  name: 'AspInputRange',
  props: {
    startInput: {
      type: String,
      default: undefined
    },
    endInput: {
      type: String,
      default: undefined
    },
    startPlaceholder: {
      type: String,
      default: '起始值'
    },
    endPlaceholder: {
      type: String,
      default: '结束值'
    },
    rangeSeparator: {
      type: String,
      default: '至'
    },
    startProps: {
      type: Object,
      default: function _default() {}
    },
    endProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    props: {
      type: Object,
      default: function _default() {}
    },
    status: {
      type: String,
      default: undefined
    }
  },
  data: function data() {
    return {
      start: undefined,
      end: undefined
    };
  },
  computed: {
    computeStartProps: function computeStartProps() {
      return this.propsReComputed(JSON.parse(JSON.stringify(this.startProps)));
    },
    computeEndProps: function computeEndProps() {
      return this.propsReComputed(JSON.parse(JSON.stringify(this.endProps)));
    }
  },
  watch: {
    startInput: {
      handler: function handler(val, oldVal) {
        this.start = val;
      },
      immediate: true
    },
    endInput: {
      handler: function handler(val, oldVal) {
        this.end = val;
      },
      immediate: true
    },
    start: function start(val) {
      this.$emit('changeAspStartInput', val);
    },
    end: function end(val) {
      this.$emit('changeAspEndInput', val);
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    propsReComputed: function propsReComputed(tmpPorps) {
      if (tmpPorps.disabled && !smart_status_machine.ssm_compareStatusResult(tmpPorps.disabledStatus, this.status)) {
        tmpPorps.disabled = false;
      }

      if (tmpPorps.readonly && !smart_status_machine.ssm_compareStatusResult(tmpPorps.readonlyStatus, this.status)) {
        tmpPorps.readonly = false;
      }

      if (tmpPorps.clearable && !smart_status_machine.ssm_compareStatusResult(tmpPorps.clearableStatus, this.status)) {
        tmpPorps.clearable = false;
      }

      return Object.assign(tmpPorps, this.props);
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-input-range.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_asp_input_rangevue_type_script_lang_js_ = (asp_input_rangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-input-range.vue





/* normalize component */

var asp_input_range_component = Object(componentNormalizer["a" /* default */])(
  components_asp_input_rangevue_type_script_lang_js_,
  asp_input_rangevue_type_template_id_7413b6ea_render,
  asp_input_rangevue_type_template_id_7413b6ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var asp_input_range_api; }
asp_input_range_component.options.__file = "src/components/asp-smart-form/components/asp-input-range.vue"
/* harmony default export */ var asp_input_range = (asp_input_range_component.exports);
// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-dynamic-machine/dy-single-datepicker.js
// * @Author: 卓望深圳团队
// * @Date: 2020年3月5日09:34:16
// * @LastEditTime : 2020年3月5日09:34:23
// * @LastEditors  : 卓望深圳团队
// * @Description: 组件联动
/* harmony default export */ var dy_single_datepicker = ({
  methods: {
    start_dy_single_datepicker: function start_dy_single_datepicker() {
      if (this.item.dynamic === undefined || this.item.dynamic.single_datepicker_list === undefined || this.item.dynamic.single_datepicker_list.length <= 0) {
        return false;
      }

      for (var i = 0; i < this.item.dynamic.single_datepicker_list.length; i++) {
        var dynamicItem = this.item.dynamic.single_datepicker_list[i];
        return this.dy_single_datepicker_EveryTargetItem(dynamicItem);
      }

      var retValue = false;
      return {
        retValue: retValue
      };
    },
    dy_single_datepicker_EveryTargetItem: function dy_single_datepicker_EveryTargetItem(dynamicItem) {
      var targetSign = dynamicItem.condition ? dynamicItem.condition : '';
      var compareName;

      if (dynamicItem.source.columnName === this.item.columnName) {
        compareName = dynamicItem.target.columnName;
      } else {
        compareName = dynamicItem.source.columnName;
      }

      var targetValue = '';

      if (this.isTableFormItem) {
        if (this.model && this.model[this.item.parentName] && this.model[this.item.parentName].length > this.index) {
          targetValue = this.model[this.item.parentName][this.index][compareName];
        }
      } else {
        if (this.model && this.model[compareName]) {
          targetValue = this.model[compareName];
        }
      }

      var retValue = true;
      return {
        retValue: retValue,
        targetSign: targetSign,
        targetValue: targetValue
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-dynamic-machine/dy-old.js











 // * @Author: 卓望深圳团队
// * @Date: 2020年3月5日09:34:16
// * @LastEditTime : 2020年3月5日09:34:23
// * @LastEditors  : 卓望深圳团队
// * @Description: 组件联动
// import CompressionPlugin from 'compression-webpack-plugin'


/* harmony default export */ var dy_old = ({
  methods: {
    // 第四类的联动操作
    startDateOpt: function startDateOpt() {
      if (!this.item.dynamicData) {
        return false;
      }

      for (var i = 0; i < this.item.dynamicData.length; i++) {
        var dynamicItem = this.item.dynamicData[i];

        if (dynamicItem.condition.length > 0 && utils_toolApi.aspIncluds([3], dynamicItem.index)) {
          return this.everyDateItem(dynamicItem);
        }
      }

      var retValue = false;
      return {
        retValue: retValue
      };
    },
    everyDateItem: function everyDateItem(dynamicItem) {
      var conData;

      if (dynamicItem.condition.length > 0) {
        conData = dynamicItem.condition[0];
      }

      var targetSign = conData.source.condition ? conData.source.condition : '';
      var compareName;

      if (dynamicItem.source.columnName === this.item.columnName) {
        compareName = dynamicItem.target.columnName;
      } else {
        compareName = dynamicItem.source.columnName;
      }

      var targetValue = '';

      if (this.isTableFormItem) {
        if (this.model && this.model[this.parentName] && this.model[this.parentName] > this.index) {
          targetValue = this.model[this.parentName][this.index][compareName];
        }
      } else {
        if (this.model && this.model[compareName]) {
          targetValue = this.model[compareName];
        }
      }

      var retValue = true;
      return {
        retValue: retValue,
        targetSign: targetSign,
        targetValue: targetValue
      };
    },
    // 第一类、第二类的联动操作
    startDynamicOpt: function startDynamicOpt() {
      var _this = this;

      this.item.dynamicData && this.item.dynamicData.forEach(function (dynamicItem) {
        if (dynamicItem.condition.length > 0 && utils_toolApi.aspIncluds([0, 1, 2], dynamicItem.index)) {
          _this.everyTargetItem(dynamicItem);
        }
      });
    },
    // 处理每一条联动数据
    everyTargetItem: function everyTargetItem(dynamicItem) {
      var i;

      for (i = 0; i < dynamicItem.condition.length; i++) {
        var conData = dynamicItem.condition[i]; // 目标值是否符合

        var conResult = this.getConditionResult(dynamicItem, conData);

        if (!conResult) {
          continue; // 结束本次处理
        } // 状态是否符合


        if (conData.dynamic.status && conData.dynamic.status.length > 0 && !utils_toolApi.aspIncluds(conData.dynamic.status, this.status)) {
          continue; // 结束本次处理
        } // 开始处理


        var sourceType = false; // 如果是表格表单的单元格组件，则返回true, 否则返回false

        if (dynamicItem.source.parentName && dynamicItem.source.parentName.length > 0) {
          sourceType = true;
        }

        var targetType = false; // 如果是表格表单的单元格组件，则返回true, 否则返回false

        if (dynamicItem.target.parentName && dynamicItem.target.parentName.length > 0) {
          targetType = true;
        }

        if (!sourceType && !targetType || sourceType && !targetType) {
          this.setGeneralItem(dynamicItem, conData);
        } else if (!sourceType && targetType) {
          this.setTableCol(dynamicItem, conData);
        } else if (sourceType && targetType) {
          this.setTableRowCell(dynamicItem, conData);
        }
      }
    },
    // 获取条件的计算结果 true or false
    // Object.prototype.toString.call('') ;   // [object String]
    // Object.prototype.toString.call(1) ;    // [object Number]
    // Object.prototype.toString.call(true) ; // [object Boolean]
    // Object.prototype.toString.call(Symbol()); //[object Symbol]
    // Object.prototype.toString.call(undefined) ; // [object Undefined]
    // Object.prototype.toString.call(null) ; // [object Null]
    // Object.prototype.toString.call(new Function()) ; // [object Function]
    // Object.prototype.toString.call(new Date()) ; // [object Date]
    // Object.prototype.toString.call([]) ; // [object Array]
    // Object.prototype.toString.call(new RegExp()) ; // [object RegExp]
    // Object.prototype.toString.call(new Error()) ; // [object Error]
    // Object.prototype.toString.call(document) ; // [object HTMLDocument]
    // Object.prototype.toString.call(window) ; //[object global] window 是全局对象 global 的引用
    getConditionResult: function getConditionResult(dynamicItem, conData) {
      if (this.model === undefined) {
        return false;
      }

      var a;

      if (dynamicItem.source.parentName && dynamicItem.source.parentName.length > 0) {
        // 如果是表格表单单元格组件
        a = this.model[dynamicItem.source.parentName][this.index][dynamicItem.source.columnName];
      } else {
        a = this.model[dynamicItem.source.columnName];
      }

      var b = conData.source.columnValue;
      var typeValue = Object.prototype.toString.call(a);

      if (typeValue === '[object Array]') {
        for (var i = 0; i < a.length; i++) {
          var retValue = this.getOperatorComputed(a[i], b, conData.source.condition);

          if (retValue) {
            return retValue;
          }
        }

        if (a.length === 0 && b.length === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return this.getOperatorComputed(a, b, conData.source.condition);
      }
    },
    // 设置(基础/高级)原子组件
    setGeneralItem: function setGeneralItem(dynamicItem, conData) {
      var _this2 = this;

      conData.dynamic.type.forEach(function (item) {
        var params = {
          columnName: dynamicItem.target.columnName,
          value: conData.dynamic.result
        };

        switch (item) {
          case 'disabled':
            _this2.$root.Bus && _this2.$root.Bus.$emit('bus_id_sf_setDisabled', params);
            break;

          case 'hidden':
            _this2.$root.Bus && _this2.$root.Bus.$emit('bus_id_sf_setHidden', params);
            break;

          case 'clear_data':
            if (conData.dynamic.result) {
              _this2.$set(_this2.model, dynamicItem.target.columnName, '');
            }

            break;

          case 'set_data':
            _this2.$set(_this2.model, dynamicItem.target.columnName, conData.dynamic.value);

            break;

          case 'readonly':
            _this2.$root.Bus && _this2.$root.Bus.$emit('bus_id_sf_setReadonly', params);
            break;

          case 'required':
            _this2.$root.Bus && _this2.$root.Bus.$emit('bus_id_sf_switchRequired', params);
            break;

          case 'label':
            _this2.$root.Bus && _this2.$root.Bus.$emit('bus_id_sf_setLabel', params);
            break;
        }
      });
    },
    // 设置表格表单组件的列组件
    setTableCol: function setTableCol(dynamicItem, conData) {
      var _this3 = this;

      conData.dynamic.type.forEach(function (item) {
        var params = {
          parentName: dynamicItem.target.parentName,
          columnName: dynamicItem.target.columnName,
          value: conData.dynamic.result
        };

        switch (item) {
          case 'disabled':
            _this3.$root.Bus && _this3.$root.Bus.$emit('bus_id_sf_setTableColumnCompDisabled', params);
            break;

          case 'hidden':
            _this3.$root.Bus && _this3.$root.Bus.$emit('bus_id_sf_setTableColumnCompHidden', params);
            break;

          case 'clear_data':
            if (conData.dynamic.result) {
              _this3.model[dynamicItem.target.parentName].forEach(function (item) {
                _this3.$set(item, dynamicItem.target.columnName, '');
              });
            }

            break;

          case 'set_data':
            _this3.model[dynamicItem.target.parentName].forEach(function (item) {
              _this3.$set(item, dynamicItem.target.columnName, conData.dynamic.value);
            });

            break;

          case 'readonly':
            _this3.$root.Bus && _this3.$root.Bus.$emit('bus_id_sf_setTableColumnCompReadonly', params);
            break;

          case 'required':
            _this3.$root.Bus && _this3.$root.Bus.$emit('bus_id_sf_setTableColumnRequired', params);
            break;

          case 'label':
            _this3.$root.Bus && _this3.$root.Bus.$emit('bus_id_sf_setTableColumnCompLabel', params);
            break;
        }
      });
    },
    // 设置表格表单组件的单元格组件
    setTableRowCell: function setTableRowCell(dynamicItem, conData) {
      var _this4 = this;

      conData.dynamic.type.forEach(function (item) {
        var params = {
          parentName: dynamicItem.target.parentName,
          index: _this4.index,
          columnName: dynamicItem.target.columnName,
          value: conData.dynamic.result
        };

        switch (item) {
          case 'disabled':
            _this4.$root.Bus && _this4.$root.Bus.$emit('bus_id_sf_setTableCellDisabled', params);
            break;

          case 'hidden':
            _this4.$root.Bus && _this4.$root.Bus.$emit('bus_id_sf_setTableCellHidden', params);
            break;

          case 'clear_data':
            if (conData.dynamic.result) {
              _this4.$set(_this4.model[dynamicItem.target.parentName][_this4.index], dynamicItem.target.columnName, '');
            }

            break;

          case 'set_data':
            _this4.$set(_this4.model[dynamicItem.target.parentName][_this4.index], dynamicItem.target.columnName, conData.dynamic.value);

            break;

          case 'readonly':
            _this4.$root.Bus && _this4.$root.Bus.$emit('bus_id_sf_setTableCellReadonly', params);
            break;

          case 'required':
            _this4.$root.Bus && _this4.$root.Bus.$emit('bus_id_sf_setTableCellRequired', params);
            break;

          case 'label':
            _this4.$root.Bus && _this4.$root.Bus.$emit('bus_id_sf_setTableCellLabel', params);
            break;
        }
      });
    },
    // 公式计算
    getOperatorComputed: function getOperatorComputed(a, bStr, operator) {
      var result = false;
      var bList = bStr.split(',');

      for (var i = 0; i < bList.length; i++) {
        var b = bList[i];

        switch (operator) {
          case '=':
            result = a === b;
            break;

          case '>':
            result = a > b;
            break;

          case '>=':
            result = a >= b;
            break;

          case '<':
            result = a < b;
            break;

          case '<=':
            result = a <= b;
            break;

          case '!=':
            result = a !== b;
            break;
        }

        if (result) {
          return result;
        }
      }

      return result;
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-model-machine/index.js







 // * @Author: TurboC
// * @Date: 2020年6月29日09:34:16
// * @LastEditTime : 2020年6月29日09:34:23
// * @LastEditors  : TurobC
// * @Description: 智能模型器



var smartModelMachine = {};
/* ********************************************************************************* */

/*                              子表单：新增、删除、复制行、更新整个子表格                  */

/* ********************************************************************************* */
// 智能模型器：子表单模型赋值，并更新相应组件

smartModelMachine.smm_setTableValue = function (_t, model, tableName, value) {
  _t.$set(model, tableName, value);

  _t.$forceUpdate();
}; // 智能模型器：子表单模型删除行数据，并更新控件


smartModelMachine.smm_setTableDelRow = function (_t, model, tableName, index) {
  if (model && model[tableName] !== undefined && model[tableName].length > index) {
    model[tableName].splice(index, 1);

    _t.$forceUpdate();
  } else {
    smartModelMachine.inside_showTips(_t, '参数传入有误!!!');
  }
}; // 智能模型器: 子表单删除行数据；tableName: 子表单组件的字段标识；index：子表单组件的行号


smartModelMachine.smm_deleteSubFormRowData = function (_t, model, formList, tableName, index, status) {
  if (!(model && tableName && model[tableName] !== undefined && model[tableName].length > 0)) {
    return;
  }

  set(formList);

  function set(formList) {
    formList.forEach(function (item) {
      if (item.columnName === tableName && item.type === 'normalChildList') {
        // const defaultData = (item['default-data'] && smartStatusMachine.ssm_compareStatusResult(item.defaultDataStatus, status))
        var defaultData = item['default-data'];

        if (index === undefined || index < 0) {
          // 全部删除
          if (!defaultData) {
            model[tableName] = [];

            _t.$forceUpdate();
          } else {
            smartModelMachine.inside_showTips(_t, '表格请最少保留一条数据');
          }
        } else {
          // 删除指定行
          if (model[tableName].length === 1 && defaultData) {
            smartModelMachine.inside_showTips(_t, '表格请最少保留一条数据');
          } else {
            model[tableName].splice(index, 1);

            _t.$forceUpdate();
          }
        }
      }

      if (item.formFields && item.formFields.length > 0) {
        set(item.formFields);
      }

      if (item.childList && item.childList.length > 0) {
        set(item.childList);
      }
    });
  }
}; // 智能模型器：子表单模型增加行数据，并更新相应组件


smartModelMachine.smm_setTableAddRow = function (_t, model, tableName, value) {
  if (model[tableName] === undefined) {
    _t.$set(model, tableName, []);
  }

  model[tableName].push(value);

  _t.$forceUpdate();
}; // 智能模型器：子表单新增行；tableName：子表单组件的字段标识


smartModelMachine.smm_addSubFormRowData = function (_t, model, formList, tableName, interactive) {
  set(formList);

  function set(formList) {
    formList.forEach(function (item) {
      if (item.columnName === tableName && item.type === 'normalChildList') {
        if (smartModelMachine.inside_isOverstepMaxRow(item, model)) {
          smartModelMachine.inside_showTips(_t, item['row-number-message'] || '子表单组件最大行数为10条');
        } else {
          smartModelMachine.inside_addSubFormRowData(_t, model, item, interactive);
        }
      }

      if (item.formFields && item.formFields.length > 0) {
        set(item.formFields);
      }

      if (item.childList && item.childList.length > 0) {
        set(item.childList);
      }
    });
  }
}; // 智能模型器：子表单复制行；tableName： 子表单组件的字段标识；index：子表单组件的行号


smartModelMachine.smm_copySubFormRowData = function (_t, model, formList, tableName, index) {
  if (!(model && tableName && model[tableName] !== undefined && model[tableName].length > 0)) {
    return;
  }

  set(formList);

  function set(formList) {
    formList.forEach(function (item) {
      if (item.columnName === tableName && item.type === 'normalChildList') {
        if (item['show-row-number'] && model[item.columnName] && model[item.columnName].length === item['row-number']) {
          smartModelMachine.inside_showTips(_t, item['row-number-message'] || '表格最大行数为10条');
        } else {
          smartModelMachine.inside_copySubFormRowData(_t, model, tableName, index);
        }
      }

      if (item.formFields && item.formFields.length > 0) {
        set(item.formFields);
      }

      if (item.childList && item.childList.length > 0) {
        set(item.childList);
      }
    });
  }
};
/* ********************************************************************************* */

/*                              组件数据源相关API                                      */

/* ********************************************************************************* */
// 智能模型器：子表单数据源


smartModelMachine.smm_subFormSourceData = function (isCompare, newModel, model, item) {
  if (isCompare) {
    return newModel && newModel[item.columnName] ? newModel[item.columnName] : [];
  }

  return model && model[item.columnName] ? model[item.columnName] : [];
}; // 智能模型器：组件数据源


smartModelMachine.smm_compSourceData = function (model, item, parent, index, isSubForm) {
  if (isSubForm) {
    var retValue = smartModelMachine.smm_getSubFormModelCellValue(model, item.columnName, parent.columnName, index);
    retValue = smartModelMachine.smm_getCompDefaultValue(item, retValue); // 设置当前默认值

    if (utils_toolApi.sf_searchCustomPropValue(item, status, 'clearData')) {
      // 组件自定义配置时，配置了要清除数据
      if (retValue !== undefined) {
        model[parent.columnName][index][item.columnName] = '';
        retValue = '';
      }
    }

    return retValue;
  } else {
    var _retValue = smartModelMachine.smm_getMainFormModelValue(model, item.columnName);

    _retValue = smartModelMachine.smm_getCompDefaultValue(item, _retValue); // 设置当前默认值

    if (utils_toolApi.sf_searchCustomPropValue(item, status, 'clearData')) {
      // 组件自定义配置时，配置了要清除数据
      if (_retValue !== undefined) {
        model[item.columnName] = '';
        _retValue = '';
      }
    }

    return _retValue;
  }
}; // 智能模型器：子表单列数据源


smartModelMachine.smm_subFormColumnSourceData = function (tableItem, status) {
  var newList = tableItem.formFields.filter(function (item) {
    return item.forceHiddenColumn === undefined || !item.forceHiddenColumn;
  });
  var hideList = [];
  tableItem.operations && tableItem.operations.forEach(function (cell) {
    if (smart_status_machine.ssm_compareStatusResult(cell.status, status) && cell['data-hide']) {
      cell['data-hide'] && cell['data-hide'].forEach(function (cloummnName) {
        hideList.push(cloummnName);
      });
    }
  });
  var retList = [];
  newList.forEach(function (item) {
    var hasValue = false;
    hideList.forEach(function (columnName) {
      hasValue = item.columnName === columnName ? true : hasValue;
    });

    if (!hasValue) {
      retList.push(item);
    }
  });
  return retList;
};
/* ********************************************************************************* */

/*                              子表单：单元格组件的数据值                               */

/* ********************************************************************************* */
// 智能模型器：设置模型中的子模型属性赋值，并异步更新控件


smartModelMachine.smm_setTableCellValue = function (_t, model, tableName, index, columnName, value) {
  if (model[tableName] === undefined) {
    _t.$set(model, tableName, [{}]);
  }

  if (model[tableName].length > 0 && model[tableName].length > index) {
    _t.$set(model[tableName][index], columnName, value);

    _t.$forceUpdate();
  }
}; // 智能模型器：获取子表单单元格组件的数据模型值(包括自定义属性)，例如：组件值/隐藏/禁用/只读/label/正则表达式


smartModelMachine.smm_getSubFormModelCellValue = function (model, columnName, parentName, index) {
  var suffix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

  if (model && columnName && parentName && index !== undefined && index >= 0 && model[parentName] !== undefined && model[parentName].length > index && model[parentName][index][columnName + suffix] !== undefined) {
    return model[parentName][index][columnName + suffix];
  }

  return undefined;
}; // 智能模型器：获取子表单列的组件数据模型值，例如：组件值


smartModelMachine.smm_getSubFormModelColumnValue = function (model, columnName, parentName) {
  if (model && columnName && parentName && model[parentName] !== undefined && model[parentName].length > 0) {
    var columnList = [];
    model[parentName].forEach(function (item) {
      columnList.push(item[columnName]);
    });
    return columnList;
  }

  return undefined;
}; // 智能模型器：设置子表单单元格组件的数据模型值，例如：组件值/隐藏/禁用/只读/label/正则表达式


smartModelMachine.smm_setSubFormModelCellValue = function (_t, model, tableName, columnName, index, suffix, value) {
  if (tableName && columnName && model && suffix !== undefined && index !== undefined && value !== undefined && model[tableName] !== undefined && model[tableName].length > index) {
    _t.$set(model[tableName][index], columnName + suffix, value);

    _t.$forceUpdate();
  }
}; // 智能模型器：设置子表单单元格组件的必填开关值 (不包括：序号列、操作列)


smartModelMachine.smm_setSubFormCellRequired = function (_t, model, tableName, index, columnName, onOff, message) {
  if (tableName && columnName && model && index !== undefined && model[tableName] !== undefined && model[tableName].length > index) {
    var columnNameRequired = columnName + '_required';
    var columnNameReqMsg = columnName + '_requiredMessage';

    _t.$set(model[tableName][index], columnNameRequired, onOff);

    _t.$set(model[tableName][index], columnNameReqMsg, message);

    _t.$set(model[tableName][index], 'trigger', 'blur');

    _t.$forceUpdate();
  }
};
/* ********************************************************************************* */

/*                              主表单：组件的数据值                                    */

/* ********************************************************************************* */
// 智能模型器：设置属性赋值(不包括子表单的模型值，子表单的模型值建设使用asp_setTableValue)，并更新相应组件


smartModelMachine.smm_setValue = function (_t, model, columnName, value) {
  _t.$set(model, columnName, value);

  _t.$forceUpdate();
}; // 智能模型器：删除组件的值(不包括子表单组件)
// 如果是删除子表单中单元格组件的值，当index<0时，删除所有列中的值，当index>=0时，仅删除当前单元格组件的值


smartModelMachine.smm_deleteBaseCompValue = function (model, item) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

  if (model && item) {
    if (item.parentName !== undefined) {
      if (model[item.parentName] !== undefined) {
        model[item.parentName].forEach(function (recData, recIndex) {
          if (model[item.parentName][recIndex][item.columnName] !== undefined && (index < 0 || index === recIndex)) {
            delete model[item.parentName][recIndex][item.columnName];
          }
        });
      }
    } else if (item.columnName !== undefined) {
      if (model[item.columnName] !== undefined) {
        delete model[item.columnName];
      }
    }
  }
}; // 智能模型器：获取主表单组件的数据模型值，例如：组件值/隐藏/禁用/只读/label/正则表达式


smartModelMachine.smm_getMainFormModelValue = function (model, columnName) {
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (model && columnName && model[columnName + suffix]) {
    return model[columnName + suffix];
  }

  return undefined;
}; // 智能模型器：获取组件默认值


smartModelMachine.smm_getCompDefaultValue = function (item, value) {
  if (utils_toolApi.aspIncluds(['datePicker', 'text'], item.type) && item.defCurValue && (value === undefined || utils_toolApi.tool_isString(value) && value.length === 0)) {
    return utils_toolApi.formatTimeDd(new Date());
  }

  return value;
}; // 智能表单: 过滤不映射到数据模型中的数据


smartModelMachine.smm_getModelData = function (formList, model) {
  set(formList, model);

  function set(formList, model) {
    formList.forEach(function (item) {
      // 过滤不映射到数据模型中的数据
      if (item.columnName && item.isModel !== undefined && !item.isModel) {
        smartModelMachine.smm_deleteBaseCompValue(model, item);
      } // 删除由用户手动增加记录的标记(目的：有可能后端返回的数据也带new-operate属性)


      if (item.type === 'normalChildList') {
        model[item.columnName] && model[item.columnName].forEach(function (row) {
          if (row['new-operate'] !== undefined) {
            delete row['new-operate'];
          }

          if (row[item.columnName + '_forceHidden'] !== undefined) {
            delete row[item.columnName + '_forceHidden'];
          }

          if (row[item.columnName + '_forceDisabled'] !== undefined) {
            delete row[item.columnName + '_forceDisabled'];
          }

          if (row[item.columnName + '_forceReadonly'] !== undefined) {
            delete row[item.columnName + '_forceReadonly'];
          }

          if (row[item.columnName + '_forceLabel'] !== undefined) {
            delete row[item.columnName + '_forceLabel'];
          }
        });
      }

      if (item.formFields && item.formFields.length > 0) {
        set(item.formFields, model);
      }

      if (item.childList && item.childList.length > 0) {
        set(item.childList, model);
      }

      if (item.toolList && item.toolList.length > 0) {
        set(item.toolList, model);
      }
    });
  }

  return model;
};
/* ********************************************************************************* */

/*                              组件值                                                */

/* ********************************************************************************* */
// 智能模型器：获取主表单组件的数据模型值，例如：组件值/隐藏/禁用/只读/label/正则表达式


smartModelMachine.smm_getCompModelValue = function (model, columnName) {
  var isSubForm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var parentName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  if (isSubForm) {
    return smartModelMachine.smm_getSubFormModelCellValue(model, columnName, parentName, index);
  }

  return smartModelMachine.smm_getMainFormModelValue(model, columnName);
};
/* ********************************************************************************* */

/*                              内部API, 文件外部不要调用                               */

/* ********************************************************************************* */


smartModelMachine.inside_showTips = function (_t, message) {
  _t.$message({
    showClose: true,
    message: message,
    type: 'warning'
  });
}; // 数据模型的数据是否大于等于最大行设置


smartModelMachine.inside_isOverstepMaxRow = function (item, model) {
  if (item && model && item['show-row-number'] && item['row-number'] && model[item.columnName] && model[item.columnName].length >= item['row-number']) {
    return true;
  }

  return false;
}; // 智能模型器: 子表单组件->新增-行数据


smartModelMachine.inside_addSubFormRowData = function (_t, model, item, interactive) {
  if (interactive === 'child_form_add_header' && item.isNoAddNullData) {
    return;
  }

  var obj = {}; // 表格表单组件的行中的列单元格

  var tableItems = utils_toolApi.subTableProps(item);
  tableItems.forEach(function (cell) {
    cell.columnName && (obj[cell.columnName] = cell.defaultValue);
    cell.targetName && (obj[cell.targetName] = cell.defaultContent);
  }); // 每行数据增加一个主键，用于内容对比

  Object.assign(obj, {
    id: new Date().valueOf()
  }); // 表示由界面新增生成的数据

  Object.assign(obj, {
    'new-operate': true
  }); // 子表单属性赋初始值

  if (!Object.prototype.hasOwnProperty.call(model, item.columnName)) {
    _t.$set(model, item.columnName, []);
  } // 新增行显示的位置


  if (item['show-top-add']) {
    model[item.columnName].unshift(obj);
  } else {
    model[item.columnName].push(obj);
  }

  _t.$forceUpdate();
}; // 智能模型器: 子表单组件->复制一行数据


smartModelMachine.inside_copySubFormRowData = function (_t, model, tableName, index) {
  // 避免复制的表单同源响应，使用深拷贝
  var item = JSON.parse(JSON.stringify(model[tableName][index])); // 每行数据增加一个主键，用于内容对比

  Object.assign(item, {
    id: new Date().valueOf()
  }); // 表示由界面新增生成的数据

  Object.assign(item, {
    'new-operate': true
  }); // 开始插入数据

  model[tableName].splice(index, 0, item);

  _t.$forceUpdate();
};

/* harmony default export */ var smart_model_machine = (smartModelMachine);
// EXTERNAL MODULE: external "element-china-area-data"
var external_element_china_area_data_ = __webpack_require__(22);

// CONCATENATED MODULE: ./src/components/asp-smart-form/utils/utils.js




var utils_getAllSlotName = function getAllSlotName(formList) {
  var arr = [];
  set(formList);

  function set(formList) {
    formList.forEach(function (item) {
      if (item.slotName && item.slotName.length > 0) {
        arr.push(item.slotName);
      }

      if (item.formFields && item.formFields.length > 0) {
        set(item.formFields);
      }

      if (item.childList && item.childList.length > 0) {
        set(item.childList);
      }
    });
  }

  return arr;
};
var evil = function evil(fn) {
  var Fn = Function; // 一个变量指向Function，防止有些前端编译工具报错

  return new Fn('return ' + fn)();
};
// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-property-machine/index.js

















 // * @Author: TurboC
// * @Date: 2020年6月29日09:34:16
// * @LastEditTime : 2020年6月29日09:34:23
// * @LastEditors  : TurobC
// * @Description: 智能属性器





var smartPropertyMachine = {}; // 智能属性器: 组件是否是option类型，显示的内容需要从columnName转换成targetName

smartPropertyMachine.spm_isOptionComp = function (item) {
  var listData = ['select', 'radio', 'checkbox', 'region', 'cascader', 'selectTree', 'transfer'];

  if (utils_toolApi.aspIncluds(listData, item.type)) {
    return true; // return !(item.type === 'select' && item.props.remote) // 远程搜索,不能通过optins转换数据，因为没有optins
  }

  return false;
}; // 智能表单: label映射到其它组件的值(非组件自己的targetName值)


smartPropertyMachine.spm_getLabelMappingValue = function (model, parent, item, index, isTableFormItem, status) {
  var _toolApi$sf_searchCus = utils_toolApi.sf_searchCustomPropValue(item, status, 'label', true),
      retValue = _toolApi$sf_searchCus.retValue,
      columnName = _toolApi$sf_searchCus.columnName;

  if (retValue && columnName) {
    if (isTableFormItem) {
      var parentName = parent === undefined ? undefined : parent.columnName;
      return smart_model_machine.smm_getSubFormModelCellValue(model, columnName, parentName, index);
    } else {
      return smart_model_machine.smm_getMainFormModelValue(model, columnName);
    }
  }

  return undefined;
}; // 智能属性器: 获取option类型组件的显示值


smartPropertyMachine.spm_getOptionCompShowValue = function (columnValue, targetValue, item) {
  var showValue = targetValue !== undefined ? targetValue : columnValue;
  var newValue = smartPropertyMachine.spm_getOptionLabel(item, item.options, columnValue);
  showValue = newValue !== undefined ? newValue : showValue;
  return showValue === undefined || utils_toolApi.tool_isArray(showValue) && showValue.length === 0 ? '' : showValue;
}; // 智能属性器: 获取范围类型组件的显示值，例如：AspDateRange


smartPropertyMachine.spm_getRangeCompShowValue = function (columnValue, targetValue, item) {
  var showValue1 = columnValue === undefined ? '' : columnValue;
  var showValue2 = targetValue === undefined ? '' : targetValue;

  if (columnValue || targetValue) {
    return showValue1 + ' ' + item.aspProps.rangeSeparator + ' ' + showValue2;
  }

  return '';
};
/* ********************************************************************************* */

/*                              通用组件API                                           */

/* ********************************************************************************* */
// 智能属性器: 表单item label的宽度


smartPropertyMachine.spm_formItemLabelWidth = function (item, formConfig, isNoLabel) {
  var widith = item.isLabelWidth ? item.labelWidth + 'px' : formConfig.labelWidth + 'px';
  return isNoLabel ? '0px' : widith;
}; // 智能属性器: 表单item label的显示内容


smartPropertyMachine.spm_formItemLabel = function (item, isNoLabel) {
  return isNoLabel ? '' : item.label;
};

smartPropertyMachine.spm_formItemProp = function (isSubForm, item, parent, index) {
  return isSubForm ? parent.columnName + '.' + index + '.' + item.columnName : item.columnName;
};
/* ********************************************************************************* */

/*                              初始化组件属性值                                        */

/* ********************************************************************************* */
// 智能属性器: 初始化组件的optins列表
// select、radio、checkbox、region、cascader、selectTree、transfer组件初始化optins值


smartPropertyMachine.spm_initOptionList = function (_t, item, serverProps) {
  if (!smartPropertyMachine.spm_isOptionComp(item)) {
    return;
  }

  if (item.optionProps !== undefined && item.optionProps.optionType !== undefined && item.optionProps.optionType === '1') {
    // session数据
    var codeDatas = sessionStorage.getItem(item.optionProps.sessionKey);

    if (codeDatas === undefined || codeDatas === null) {
      return;
    }

    var optionList = JSON.parse(codeDatas)[item.optionProps.dicKey];

    if (optionList === undefined || optionList === null) {
      return;
    }

    _t.$set(item, 'options', optionList);

    _t.$forceUpdate();
  } else if (item.optionProps !== undefined && item.optionProps.optionType !== undefined && item.optionProps.optionType === '2') {
    // 接口类型
    if (_t.$aspHttps === undefined) {
      return;
    }

    var apiType = item.optionProps.apiType === undefined || item.optionProps.apiType.length === 0 ? 'post+json' : item.optionProps.apiType;
    var httpHander;

    switch (apiType) {
      case 'post+json':
        httpHander = _t.$aspHttps.asp_Post;
        break;

      case 'post+form':
        httpHander = _t.$aspHttps.asp_PostForm;
        break;

      case 'get':
        httpHander = _t.$aspHttps.asp_Get;
        break;
    }

    if (httpHander === undefined) {
      return;
    }

    var url = serverProps.localProxy + item.optionProps.apiName;
    var param = item.optionProps.apiParam ? evil(item.optionProps.apiParam) : {};
    Object.keys(param).forEach(function (item) {
      // 格式化参数
      param[item] = utils_toolApi.tool_formatData(_t, param[item]);
    });
    httpHander(url, param).then(function (response) {
      if (parseInt(response[serverProps.statusKey]) === parseInt(serverProps.statusValue)) {
        _t.$set(item, 'options', response[serverProps.dataKey]);

        _t.$forceUpdate();
      }
    });
  }
};
/* ********************************************************************************* */

/*                              设置组件属性值(非子表单内的组件)                          */

/* ********************************************************************************* */
// 智能属性器: 设置组件属性设值(非子表单内的组件)


smartPropertyMachine.inside_setValue = function (_t, type, item, key, value, message) {
  switch (type) {
    case 'custom':
      {
        _t.$set(item, key, value);

        _t.$forceUpdate();

        break;
      }

    case 'element':
      {
        if (item.props === undefined) {
          _t.$set(item, 'props', {});
        }

        _t.$set(item.props, key, value);

        _t.$forceUpdate();

        break;
      }

    case 'required':
      {
        if (item.rules !== undefined && item.required !== undefined) {
          if (item.required) {
            item.rules.shift();
          }

          if (value) {
            item.rules.unshift({
              required: value,
              message: item.label + message,
              trigger: 'blur'
            });
          }

          _t.$set(item, 'required', value);
        } else {
          _t.$set(item, 'required', false);

          _t.$set(item, 'rules', []);
        }

        _t.$forceUpdate();

        break;
      }

    case 'rules':
      {
        if (item.rules !== undefined && item.required !== undefined) {
          var index = item.required ? 1 : 0;

          if (item.rules.length > index) {
            value.unshift(item.rules[0]);
          }

          _t.$set(item, 'rules', value);
        } else {
          _t.$set(item, 'required', false);

          _t.$set(item, 'rules', []);
        }

        _t.$forceUpdate();

        break;
      }
  }
}; // 智能属性器: 设置组件属性设值(非子表单内的组件)


smartPropertyMachine.inside_setCommonPropValue = function (_t, type, formList, columnName, key, value, message) {
  set(formList);

  function set(formList) {
    formList.forEach(function (item) {
      if (item.columnName === columnName) {
        smartPropertyMachine.inside_setValue(_t, type, item, key, value, message);
      }

      if (item.formFields && item.formFields.length > 0 && item.type !== 'normalChildList') {
        set(item.formFields);
      }

      if (item.childList && item.childList.length > 0 && item.type !== 'normalChildList') {
        set(item.childList);
      }

      if (item.toolList && item.toolList.length > 0 && item.type !== 'normalChildList') {
        set(item.toolList);
      }
    });
  }
}; // 智能属性器: 设置组件elementUI自带属性(非子表单内的组件)


smartPropertyMachine.spm_setCompElementPropValue = function (_t, formList, columnName, key, value) {
  smartPropertyMachine.inside_setCommonPropValue(_t, 'element', formList, columnName, key, value);
}; // 智能属性器: 设置组件必填属性(非子表单内的组件)


smartPropertyMachine.spm_setCompRequiredPropValue = function (_t, formList, columnName, onOff, message) {
  smartPropertyMachine.inside_setCommonPropValue(_t, 'required', formList, columnName, 'required', onOff, message);
}; // 智能属性器: 设置组件正则表达式属性(非子表单内的组件)


smartPropertyMachine.spm_setCompRulesPropValue = function (_t, formList, columnName, value) {
  smartPropertyMachine.inside_setCommonPropValue(_t, 'rules', formList, columnName, 'rules', value);
}; // 智能属性器: 设置组件一级自定义属性(非子表单内的组件)


smartPropertyMachine.spm_setMainFormCompCustomFirstPropValue = function (_t, formList, columnName, key, value) {
  smartPropertyMachine.inside_setCommonPropValue(_t, 'custom', formList, columnName, key, value);
}; // 智能属性器: 设置组件二级自定义属性(非子表单内的组件)


smartPropertyMachine.spm_setCompSecondeCustomPropValue = function (_t, formList, columnName, key, param, value) {
  set(formList);

  function set(formList) {
    formList.forEach(function (item) {
      if (item.columnName === columnName) {
        if (item[key] === undefined) {
          _t.$set(item, key, {});
        }

        _t.$set(item[key], param, value);

        _t.$forceUpdate();
      }

      if (item.formFields && item.formFields.length > 0 && item.type !== 'normalChildList') {
        set(item.formFields);
      }

      if (item.childList && item.childList.length > 0 && item.type !== 'normalChildList') {
        set(item.childList);
      }

      if (item.toolList && item.toolList.length > 0 && item.type !== 'normalChildList') {
        set(item.toolList);
      }
    });
  }
};
/* ********************************************************************************* */

/*                              设置组件属性值(子表单内的组件)                            */

/* ********************************************************************************* */
// 智能属性器: 设置组件一级属性(子表单内的组件)
// 1、设置子表单嵌套组件属性值(组件在所有行都生效)
// 2、设置子表单组件整列隐藏开关(不包括：折叠列、序号列、操作列)


smartPropertyMachine.spm_setSubFormColummCompFirstPropValue = function (_t, formList, tableName, columnName, key, value) {
  set(formList);

  function set(formList) {
    formList.forEach(function (item) {
      if (item.parentName === tableName && item.columnName === columnName) {
        _t.$set(item, key, value);

        _t.$forceUpdate();
      }

      if (item.formFields && item.formFields.length > 0) {
        set(item.formFields);
      }

      if (item.childList && item.childList.length > 0) {
        set(item.childList);
      }

      if (item.toolList && item.toolList.length > 0) {
        set(item.toolList);
      }
    });
  }
}; // 智能属性器: 设置组件二级属性(子表单内的组件)


smartPropertyMachine.spm_setSubFormColummSecondCompValue = function (_t, formList, tableName, columnName, key, param, value) {
  set(formList);

  function set(formList) {
    formList.forEach(function (item) {
      if (item.parentName === tableName && item.columnName === columnName) {
        if (item[key] === undefined) {
          _t.$set(item, key, {});
        }

        _t.$set(item[key], param, value);

        _t.$forceUpdate();
      }

      if (item.formFields && item.formFields.length > 0) {
        set(item.formFields);
      }

      if (item.childList && item.childList.length > 0) {
        set(item.childList);
      }

      if (item.toolList && item.toolList.length > 0) {
        set(item.toolList);
      }
    });
  }
}; // 智能属性器: 设置子表单嵌套组件必填开关(所有行都生效) (不包括：序号列、操作列)


smartPropertyMachine.spm_setSubFormColumnCompRequired = function (_t, formList, tableName, columnName, key, value, message) {
  set(formList);

  function set(formList) {
    formList.forEach(function (item) {
      if (item.parentName === tableName && item.columnName === columnName) {
        if (Object.prototype.hasOwnProperty.call(item, 'rules') && Object.prototype.hasOwnProperty.call(item, 'required')) {
          if (item.required) {
            item.rules.shift();
          }

          if (value) {
            item.rules.unshift({
              required: value,
              message: item.label + message,
              trigger: 'blur'
            });
          }

          _t.$set(item, key, value);
        } else {
          _t.$set(item, key, false);

          _t.$set(item, 'rules', []);
        }

        _t.$forceUpdate();
      }

      if (item.formFields && item.formFields.length > 0) {
        set(item.formFields);
      }

      if (item.childList && item.childList.length > 0) {
        set(item.childList);
      }

      if (item.toolList && item.toolList.length > 0) {
        set(item.toolList);
      }
    });
  }
};
/* ********************************************************************************* */

/*                              获取组件属性值                                         */

/* ********************************************************************************* */
// 智能属性器: 获取组件option list值(除省市区组件外)


smartPropertyMachine.spm_getCompShowOptionList = function (_this, item, model, parent, index, isSubForm, status) {
  var parentName = parent !== undefined ? parent.columnName : undefined; // 计算所有需要过滤option项

  var filterList = [];
  var tmpList = smart_model_machine.smm_getSubFormModelCellValue(model, item.columnName, parentName, index, '_forceFilterOption');
  tmpList && tmpList.split(',').forEach(function (item) {
    filterList.push(item);
  });
  item.forceFilterOption && item.forceFilterOption.split(',').forEach(function (item) {
    filterList.push(item);
  });
  item.filterOption && item.filterOption.split(',').forEach(function (item) {
    filterList.push(item);
  }); // 过滤出最新的option list数据

  var tmpOptionList = [];
  item.options && item.options.forEach(function (cell) {
    if (!utils_toolApi.aspIncluds(filterList, cell[item['option-value']])) {
      tmpOptionList.push(cell);
    }
  });

  _this.$set(item, 'showOptions', tmpOptionList); // 计算所有需要disabled option项


  var disabledList = [];
  tmpList = smart_model_machine.smm_getSubFormModelCellValue(model, item.columnName, parentName, index, '_forceDisabledOption');
  tmpList && tmpList.split(',').forEach(function (item) {
    disabledList.push(JSON.parse(JSON.stringify(item)));
  });
  item.forceDisabledOption && item.forceDisabledOption.split(',').forEach(function (item) {
    disabledList.push(JSON.parse(JSON.stringify(item)));
  });
  item.disabledOption && item.disabledOption.split(',').forEach(function (item) {
    disabledList.push(JSON.parse(JSON.stringify(item)));
  }); // 设置最新的option disabled数据

  tmpOptionList.forEach(function (cell) {
    var disabledName = item['option-disabled'] === undefined ? 'disabled' : item['option-disabled'];

    if (disabledList.length > 0 && utils_toolApi.aspIncluds(disabledList, cell[item['option-value']])) {
      _this.$set(cell, disabledName, true);
    } else {
      _this.$set(cell, disabledName, false);
    }
  }); // 处理当前组件显示的内容是否在option list中，如果不在，则清空

  if (item.options && item.options.length > 0) {
    var jsonParam = {
      value: true,
      columnName: item && item.columnName ? item.columnName : '',
      targetName: item.targetName ? item.targetName : '',
      parentName: parent && parent.columnName ? parent.columnName : '',
      type: item.type,
      index: index
    };

    if (isSubForm) {
      var val = smart_model_machine.smm_getSubFormModelCellValue(model, item.columnName, parent.columnName, index);
      var ret = smartPropertyMachine.spm_getOptionLabel(item, tmpOptionList, val);

      if (ret === undefined && val !== undefined) {
        if (!(item.type === 'select' && item.searchProps.isShowInput)) {
          _this.$root.Bus && _this.$root.Bus.$emit('bus_id_sf_clearSubFormCompData', jsonParam);
        }
      }
    } else {
      var _val = smart_model_machine.smm_getMainFormModelValue(model, item.columnName);

      var _ret = smartPropertyMachine.spm_getOptionLabel(item, tmpOptionList, _val);

      if (_ret === undefined && _val !== undefined) {
        if (!(item.type === 'select' && item.searchProps.isShowInput)) {
          _this.$root.Bus && _this.$root.Bus.$emit('bus_id_sf_clearMianFromCompData', jsonParam);
        }
      }
    }
  }

  return tmpOptionList;
}; // 智能属性器: 获取组件省市区的option list值


smartPropertyMachine.spm_getRegionShowOptionList = function (item) {
  if (item.isNoBuiltIn) {
    return item.options;
  }

  return external_element_china_area_data_["regionData"];
}; // 智能属性器: 取子表单组件最大高度


smartPropertyMachine.subFormMaxHeight = function (item, formConfig) {
  if (item.type === 'normalChildList') {
    var rowHeight = utils_toolApi.subFormRowHeight(formConfig);
    return Number(rowHeight + 1) * Number(item['row-number'] + 1) + 'px';
  }

  return '100%';
}; // 智能属性器:
// 按钮组组件：[显示/隐藏/禁用]
// 作用范围：数据联动、组件联动、分状态控件组件的[显示/隐藏/禁用]
// 组件范围：折叠面板(标题栏按钮组)、表格表单(操作列按钮组)、按钮组


smartPropertyMachine.spm_hideButtonGroupComponent = function (_this, item, status) {
  if (item.toolList && item.toolList.length > 0) {
    item.toolList.forEach(function (rowitem, index) {
      if (rowitem.default !== undefined) {
        if (rowitem.default === 'hidden') {
          _this.$set(_this.item.toolList[index], 'hidden', true);
        } else if (rowitem.default === 'disabled') {
          _this.$set(_this.item.toolList[index], 'disabled', true);
        } else {
          _this.$set(_this.item.toolList[index], 'hidden', false);

          _this.$set(_this.item.toolList[index], 'disabled', false);
        }
      }

      Object.keys(rowitem).forEach(function (cell) {
        if (status === cell) {
          if (rowitem[cell] === 'hidden') {
            _this.$set(_this.item.toolList[index], 'hidden', true);
          } else if (rowitem[cell] === 'disabled') {
            _this.$set(_this.item.toolList[index], 'disabled', true);
          } else {
            _this.$set(_this.item.toolList[index], 'hidden', false);

            _this.$set(_this.item.toolList[index], 'disabled', false);
          }
        }
      });
    });
    return item.toolList;
  }

  return [];
}; // 智能表单: 获取组件中对应label值


smartPropertyMachine.spm_getOptionLabel = function (item, options, val) {
  if (val === undefined || val === null) {
    return undefined;
  } // 排除checkbox组件，全选操作时，只返回全选key的值


  if (val.length > 0 && item.type === 'checkbox' && item.optionProps && item.optionProps.isUserAllValue && item.optionProps.allValue === val[0]) {
    return item.optionProps.allLabel;
  } // select、radio、checkbox组件


  if (utils_toolApi.aspIncluds(['select', 'radio', 'checkbox'], item.type)) {
    if (item.type === 'select' && !item.props.multiple || item.type === 'radio') {
      for (var i = 0; i < options.length; i++) {
        var cell = options[i];

        if (cell[item['option-value']] === val) {
          return cell[item['option-label']];
        }
      }
    } else {
      var tmpList = [];
      options.forEach(function (cell) {
        if (val instanceof Array) {
          if (utils_toolApi.aspIncluds(val, cell[item['option-value']])) {
            tmpList.push(cell[item['option-label']]);
          }
        } else {
          // 本行代码修复只有一个复选框时，后端不传数据的问题
          if (cell[item['option-value']] === val) {
            tmpList.push(cell[item['option-label']]);
          }
        }
      });

      if (tmpList.length > 0) {
        var separator = item.optionProps.separator ? item.optionProps.separator : ';';
        return tmpList.join(separator);
      }
    }
  } // 省市区组件


  if (item.type === 'region') {
    var _tmpList = [];
    val.forEach(function (row) {
      if (item.isNoBuiltIn) {
        _tmpList.push(smartPropertyMachine.spm_getCascaderMapValue(item, options, row));
      } else {
        _tmpList.push(external_element_china_area_data_["CodeToText"][row]);
      }
    });

    if (_tmpList.length > 0) {
      var _separator = item.props.separator ? item.props.separator : ';';

      return _tmpList.join(_separator);
    }
  } // 级联组件


  if (item.type === 'cascader') {
    var _tmpList2 = [];
    val.forEach(function (row) {
      _tmpList2.push(smartPropertyMachine.spm_getCascaderMapValue(item, options, row));
    });

    if (_tmpList2.length > 0) {
      var _separator2 = item.optionProps.separator ? item.optionProps.separator : ';';

      return _tmpList2.join(_separator2);
    }
  }

  return undefined;
}; // 智能属性器: 通过key获取级联组件value, 或者通过value获取级联组件key
// item是级联组件对象，target是key或者value


smartPropertyMachine.spm_getCascaderMapValue = function (item, options, target) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'getLabel';
  var targetValue = '';

  var loop = function loop(dataList) {
    if (targetValue === '' && dataList) {
      dataList.forEach(function (row) {
        var result = row[item.props.props.label]; // 默认返回的是label（如：北京）

        var mapName = row[item.props.props.value]; // 默认拿 code（如：1000）跟目标参数target比较

        if (type === 'getCode') {
          // type不传的时候默认获取label
          result = row[item.props.props.value];
          mapName = row[item.props.props.label];
        }

        if (mapName === target) {
          targetValue = result;
        } else if (row[item.props.props.children]) {
          loop(row[item.props.props.children]);
        }
      });
    }
  };

  loop(options);
  return targetValue;
}; // 智能属性器: 取需要部分校验的属性值


smartPropertyMachine.spm_getPartValidateData = function (model, item) {
  var validateArr = [];
  item.validateProp.forEach(function (i) {
    if (i.indexOf('.') !== -1) {
      var a = i.split('.');

      for (var j = 0; j < model[a[0]].length; j++) {
        var _item = "".concat(a[0], ".").concat(j, ".").concat(a[1]);

        validateArr.push(_item);
      }
    } else {
      validateArr.push(i);
    }
  });
  return validateArr;
};

/* harmony default export */ var smart_property_machine = (smartPropertyMachine);
// EXTERNAL MODULE: external "core-js/modules/es.object.is"
var es_object_is_ = __webpack_require__(33);

// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-convert-machine/index.js








 // * @Author: TurboC
// * @Date: 2020年6月29日09:34:16
// * @LastEditTime : 2020年6月29日09:34:23
// * @LastEditors  : TurobC
// * @Description: 智能转换器




var smartConvertMachine = {};
/* ********************************************************************************* */

/*                          智能转换器：组件转换成Label组件                              */

/* ********************************************************************************* */
// 智能表单：子表单组件,是否整个子表单组件转换为Label

smartConvertMachine.sf_isSubFormAllCompCovertLabelComp = function (isSubForm, parent, status) {
  if (isSubForm && parent && parent.isNoEdit) {
    return smart_status_machine.ssm_compareStatusResult(parent.editStatus, status);
  }

  return false;
}; // 智能表单：是否由用户点击新增按钮生产数据对应的组件


smartConvertMachine.sf_isUserNewDataComp = function (model, isSubForm, item, parent, index) {
  if (isSubForm && parent && item && parent.columnName && item.columnName && model[parent.columnName] && model[parent.columnName].length > index && model[parent.columnName][index]['new-operate']) {
    return true;
  }

  return false;
}; // 智能转换器：除容器组件外，其它组件是否需要转换成label组件


smartConvertMachine.scm_isNeedConvertLabelComp = function (model, item, parent, index, isSubForm, status) {
  if (item.type === 'text') {
    return true;
  } // 第一级控制：整个子表单组件不可编辑


  if (!smartConvertMachine.sf_isUserNewDataComp(model, isSubForm, item, parent, index) && smartConvertMachine.sf_isSubFormAllCompCovertLabelComp(isSubForm, parent, status)) {
    return true;
  } // 第二级控制：外部API调用及组件联动(默认无此属性, 只有存在些属性，说明被外部API或组件联动调用)


  if (isSubForm) {
    var retVal = smart_model_machine.smm_getSubFormModelCellValue(model, item.columnName, parent.columnName, index, '_forceLabel');

    if (retVal !== undefined) {
      return retVal;
    }
  }

  if (item.forceLabel !== undefined) {
    return item.forceLabel;
  } // 第三级控制：组件分状态控制


  if (utils_toolApi.sf_searchCustomPropValue(item, status, 'label') && item.type !== 'customArea') {
    return true;
  } // 以上三级都没有则设置label显示


  return false;
}; // 智能转换器：组件显示/隐藏控制：显示/false, 隐藏/true


smartConvertMachine.scm_isNeedShowComp = function (model, item, parent, index, isSubForm, status) {
  // 第一级控制：外部API调用及组件联动(默认无此属性, 只有存在些属性，说明被外部API或组件联动调用)
  if (isSubForm) {
    var retVal = smart_model_machine.smm_getSubFormModelCellValue(model, item.columnName, parent.columnName, index, '_forceHidden');

    if (retVal !== undefined) {
      return retVal;
    }
  }

  if (item.forceHidden !== undefined) {
    return item.forceHidden;
  } // 第二级控制：组件默认设置(如果属性为true, 流程结束，其它还需要处理第四级控制)


  if (item.hidden) {
    return true;
  } // 第三级控制：组件分状态控制


  if (utils_toolApi.sf_searchCustomPropValue(item, status, 'hidden')) {
    return true;
  } // 以上三级都没有则设置显示


  return false;
}; // 智能转换器：组件是否是禁用状态


smartConvertMachine.scm_isNeedDisabledComp = function (model, item, parent, index, isSubForm, status) {
  // 第一级控制：外部API调用及组件联动(默认无此属性, 只有存在些属性，说明被外部API或组件联动调用)
  if (isSubForm) {
    var retVal = smart_model_machine.smm_getSubFormModelCellValue(model, item.columnName, parent.columnName, index, '_forceDisabled');

    if (retVal !== undefined) {
      return retVal;
    }
  }

  if (item.forceDisabled !== undefined) {
    return item.forceDisabled;
  } // 第二级控制：组件默认设置(如果属性为true, 流程结束，其它还需要处理第四级控制)


  if (item.props.disabled) {
    return true;
  } // 第三级控制：组件分状态控制


  if (utils_toolApi.sf_searchCustomPropValue(item, status, 'disabled')) {
    return true;
  } // 以上三级都没有则设置不禁用


  return false;
}; // 智能转换器：组件是否是只读状态


smartConvertMachine.scm_isNeedReadonlyComp = function (model, item, parent, index, isSubForm, status) {
  // 第一级控制：外部API调用及组件联动(默认无此属性, 只有存在些属性，说明被外部API或组件联动调用)
  if (isSubForm) {
    var retVal = smart_model_machine.smm_getSubFormModelCellValue(model, item.columnName, parent.columnName, index, '_forceReadonly');

    if (retVal !== undefined) {
      return retVal;
    }
  }

  if (item.forceReadonly !== undefined) {
    return item.forceReadonly;
  } // 第二级控制：组件默认设置(如果属性为true, 流程结束，其它还需要处理第四级控制)


  if (item.props.readonly) {
    return true;
  } // 第三级控制：组件分状态控制


  if (utils_toolApi.sf_searchCustomPropValue(item, status, 'readonly')) {
    return true;
  } // 以上三级都没有则设置不只读


  return false;
}; // 智能转换器：子表单组件，操作列隐藏显示开关


smartConvertMachine.scm_isNeedShowOperationColumn = function (tableItem, status) {
  if (!tableItem['show-operation']) {
    return false;
  } // const isStatus = smartStatusMachine.ssm_compareStatusResult(tableItem.showOperationStatus, status)


  return utils_toolApi.sf_searchCustomPropValue(tableItem, status, 'operation-show');
}; // 智能转换器：组件权限处理


smartConvertMachine.scm_compIsHaveAuth = function (authSwitch, authId) {
  if (!authSwitch || !authId) {
    return true;
  }

  var authIds = authId.split(',') || [];
  var authInfo = sessionStorage.authInfo && JSON.parse(sessionStorage.authInfo);

  if (authIds.length === 1) {
    for (var key in authInfo) {
      if (authInfo[key] && authInfo[key].some(function (tmpAuthId) {
        return Object.is(tmpAuthId, authId);
      })) {
        return true;
      }
    }
  } else if (authIds.length > 1) {
    var _loop = function _loop(i) {
      for (var _key in authInfo) {
        if (authInfo[_key] && authInfo[_key].some(function (targetAuthId) {
          return Object.is(targetAuthId, authIds[i]);
        })) {
          return {
            v: true
          };
        }
      } // authIds.map((sourceAuthId) => {
      // })

    };

    for (var i = 0; i < authIds.length; i++) {
      var _ret = _loop(i);

      if (Object(esm_typeof["a" /* default */])(_ret) === "object") return _ret.v;
    }
  }

  return false;
};

/* harmony default export */ var smart_convert_machine = (smartConvertMachine);
// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-dynamic-machine/common.js















 // * @Author: 卓望深圳团队
// * @Date: 2020年3月5日09:34:16
// * @LastEditTime : 2020年3月5日09:34:23
// * @LastEditors  : 卓望深圳团队
// * @Description: 组件联动


var commonDYApi = {}; // 智能联动器：1对N联动处理API

commonDYApi.common_single_dataValid = function (dynamicItem) {
  if (dynamicItem.source === undefined || dynamicItem.target === undefined || dynamicItem.target.length <= 0) {
    return false;
  }

  return true;
}; // 组件联动：通过条件组件转换为源组件对象


commonDYApi.common_convert_conditonToSource = function (source, conditionItem) {
  for (var i = 0; i < source.length; i++) {
    if (conditionItem.columnName === source[i].columnName) {
      return source[i];
    }
  }

  return conditionItem; // 找不到，返回自己
}; // 组件联动：源组件与目标组件的关系判断


commonDYApi.common_single_dy_relation = function (compareItem, targetItem) {
  if (compareItem.parentName === undefined && targetItem.parentName === undefined) {
    // 主->主
    return 1;
  } else if (compareItem.parentName === undefined && targetItem.parentName !== undefined) {
    // 主->子
    return 2;
  } else if (compareItem.parentName !== undefined && targetItem.parentName === undefined) {
    // 子->主
    return 3;
  } else if (compareItem.parentName !== undefined && targetItem.parentName !== undefined && compareItem.parentName === targetItem.parentName) {
    // 子->子(相同的子表单内)
    return 4;
  } else {
    // 子->子(不同的子表单内)
    return 5;
  }
}; // 组件联动：N对N组件联动，处理源组件与目标组件的关系


commonDYApi.common_mul_dy_relation = function (source, target) {
  var targetItem = target[0];
  var sourceSubFormList = [];
  var sameSubForm = false;
  source.forEach(function (item) {
    if (item.parentName !== undefined) {
      sourceSubFormList.push(item);

      if (targetItem.parentName !== undefined && item.parentName === targetItem.parentName) {
        sameSubForm = true;
      }
    }
  });

  if (sourceSubFormList.length <= 0 && targetItem.parentName === undefined) {
    // 全部主->主
    return 1;
  } else if (sourceSubFormList.length <= 0 && targetItem.parentName !== undefined) {
    // 全部主->子
    return 2;
  } else if (sourceSubFormList.length > 0 && targetItem.parentName === undefined) {
    // 部分子->主
    return 3;
  } else {
    if (sameSubForm) {
      // 部分子->子(源组件至少有一个子表单与目标组件在同一个子表单内)
      return 4;
    } else {
      // 部分子->子(源组件没有一个子表单与目标组件在同一个子表单内)
      return 5;
    }
  }
}; // 取条件对象


commonDYApi.common_getConditionItem = function (conditions, columnName) {
  for (var i = 0; i < conditions.length; i++) {
    if (columnName === conditions[i].columnName) {
      return conditions[i];
    }
  }
}; // 源组件与联动组件的类型，true是子表单组件，false是普通组件


commonDYApi.isCompType = function (dynamicItem) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // 开始处理

  var sourceType = false; // 如果是子表单的单元格组件，则返回true, 否则返回false

  if (dynamicItem.source && dynamicItem.source.parentName && dynamicItem.source.parentName.length > 0) {
    sourceType = true;
  }

  var targetType = false; // 如果是子表单的单元格组件，则返回true, 否则返回false

  if (dynamicItem.target && dynamicItem.target.length > 0) {
    var tmpTarget = dynamicItem.target[index];

    if (tmpTarget.parentName && tmpTarget.parentName.length > 0) {
      targetType = true;
    }
  }

  return {
    sourceType: sourceType,
    targetType: targetType
  };
}; // 多条件组合结果计算


commonDYApi.common_compareMulResult = function (resultOR, resultAnd) {
  for (var i = 0; i < resultAnd.length; i++) {
    if (!resultAnd[i]) {
      return false;
    }
  }

  if (resultAnd.length > 0) {
    return true;
  }

  for (var _i = 0; _i < resultOR.length; _i++) {
    if (resultOR[_i]) {
      return true;
    }
  }

  return false;
}; // 比较两个值的结果（按长度比较）


commonDYApi.common_compareLengthResult = function (a, b, operator) {
  if (b === undefined || b === null || b.length <= 0 || isNaN(b)) {
    return false;
  }

  var lenB = parseInt(b);
  var lebA = 0;

  if (!(a === undefined || a === null)) {
    lebA = a.constructor === Number ? a : a.length;
  }

  var result = commonDYApi.common_Compare(lebA, lenB, operator);
  return result;
}; // 比较两个值的结果（按值比较）


commonDYApi.common_compareValueResult = function (a, bStr, operator) {
  // 组件值为空时，如果比较符是!=，则认为比较成功，其它比较符，都认为失败
  if (a === undefined || a === null) {
    return operator === '!=';
  }

  var aStr = JSON.parse(JSON.stringify(a));
  var result = false; // 检查组件值的类型, 数组类型为true, 其它类型为false

  var sourceType = false;

  if (aStr.constructor === Array && aStr.length > 0) {
    sourceType = true;
  } // 检查比较值的类型，数组类型为true, 其它类型为false


  var targetType = false;
  var targetArray = utils_toolApi.tool_isString(bStr) ? bStr.trim().split('[') : undefined;

  if (targetArray.length === 2) {
    targetArray = targetArray[1].split(']');
    targetArray = targetArray.length === 2 ? targetArray[0].split(',') : [];

    if (targetArray && targetArray.length > 0) {
      targetType = true;
    }
  } // 1、组件数据与对比数据都是数组，按数组数据的方式对比，要全量对比数组


  if (sourceType && targetType) {
    var targetValue = targetArray.sort().toString();
    var sourceValue = aStr.sort().toString();
    result = commonDYApi.common_Compare(sourceValue, targetValue, operator);
    return result;
  } // 2、组件数据是字符串，对比数据是数组，则只要对比数据中有一个满足，就返回true


  if (!sourceType && targetType) {
    for (var i = 0; i < targetArray.length; i++) {
      result = commonDYApi.common_Compare(aStr, targetArray[i], operator);

      if (result) {
        return result;
      }
    }

    return false;
  } // 3、组件数据是数组，对比数据是字符串，则只要对比数据中有一个满足，就返回true


  if (sourceType && !targetType) {
    var bList = bStr.trim().split(','); // 对比值有多个值

    if (bList.length > 1) {
      if (operator === '!=') {
        // 只要组件中的数据包含对比值的任何一个值,就返回false, 否则返回true
        for (var _i2 = 0; _i2 < bList.length; _i2++) {
          if (utils_toolApi.aspIncluds(aStr, bList[_i2])) {
            return false;
          }
        }

        return true;
      }

      if (operator === '=') {
        // 只要组件中的数据包含对比值的任何一个值，就返回true, 否则返回false
        for (var _i3 = 0; _i3 < bList.length; _i3++) {
          if (utils_toolApi.aspIncluds(aStr, bList[_i3])) {
            return true;
          }
        }

        return false;
      }

      console.log('组件联动：当对比值输入多个值时，不允许使用>、<、>=、<=');
      return false;
    } // 对比值只有一个值
    // 只要组件中的数据有一个满足，就返回true, 否则返回false


    if (operator === '!=') {
      if (utils_toolApi.aspIncluds(aStr, bStr)) {
        return false;
      }

      return true;
    }

    if (operator === '=') {
      if (utils_toolApi.aspIncluds(aStr, bStr)) {
        return true;
      }

      return false;
    }

    console.log('组件联动：当组件值是数组，对比值是一个值时，不允许使用>、<、>=、<=');
    return false;
  } // 4、组件数据与对比数据都是字符串，按字符串数据的方式对比，但是对比数据可以填写多种情况，则包括关系对比


  if (!sourceType && !targetType) {
    var _bList = bStr.trim().split(','); // 对比值有多个值


    if (_bList.length > 1) {
      if (operator === '=') {
        // 只要组件中的数据包含对比值的任何一个值，就返回true, 否则返回false
        for (var _i4 = 0; _i4 < _bList.length; _i4++) {
          if (utils_toolApi.aspIncluds(_bList, aStr)) {
            return true;
          }
        }

        return false;
      }

      if (operator === '!=') {
        // 只要组件中的数据包含对比值的任何一个值,就返回false, 否则返回true
        for (var _i5 = 0; _i5 < _bList.length; _i5++) {
          if (utils_toolApi.aspIncluds(_bList, aStr)) {
            return false;
          }
        }

        return true;
      }

      console.log('组件联动：当对比值输入多个值时，不允许使用>、<、>=、<=');
      return false;
    } // 对比值只有一个值


    result = commonDYApi.common_Compare(aStr, bStr, operator);

    if (result) {
      return result;
    }

    return result;
  }

  return result;
}; // 比较号


commonDYApi.common_Compare = function (a, b, operator) {
  var result = false;

  switch (operator) {
    case '=':
      result = a === b;
      break;

    case '>':
      result = a > b;
      break;

    case '>=':
      result = a >= b;
      break;

    case '<':
      result = a < b;
      break;

    case '<=':
      result = a <= b;
      break;

    case '!=':
      result = a !== b;
      break;
  }

  return result;
}; // 1.联动主表单中的组件
// targets: 联动对象，types: 联动类型，result: 联动结果，value: 联动值


commonDYApi.mainFormCompTomainFormComp = function (_t, targets, types, result, value) {
  targets.forEach(function (target) {
    types.forEach(function (type) {
      var params = {
        columnName: target.columnName,
        targetName: target.targetName,
        value: result,
        type: target.type,
        setData: value
      };

      switch (type) {
        case 'disabled':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setDisabled', params);
          break;

        case 'hidden':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setHidden', params);
          break;

        case 'readonly':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setReadonly', params);
          break;

        case 'required':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_switchRequired', params);
          break;

        case 'label':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setLabel', params);
          break;

        case 'clear_data':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_clearMianFromCompData', params);
          break;

        case 'set_data':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setMianFromCompData', params);
          break;
      }
    });
  });
}; // 2.联动子表单列中的组件
// targets: 联动对象，types: 联动类型，result: 联动结果，value: 联动值


commonDYApi.mainFormCompTosubFormColumnComp = function (_t, targets, types, result, value) {
  targets.forEach(function (target) {
    types.forEach(function (type) {
      var params = {
        parentName: target.parentName,
        columnName: target.columnName,
        targetName: target.targetName,
        type: target.type,
        value: result,
        setData: value
      };

      switch (type) {
        case 'disabled':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setTableColumnCompDisabled', params);
          break;

        case 'hidden':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setTableColumnCompHidden', params);
          break;

        case 'readonly':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setTableColumnCompReadonly', params);
          break;

        case 'required':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setTableColumnRequired', params);
          break;

        case 'label':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setTableColumnCompLabel', params);
          break;

        case 'clear_data':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_clearSubFormColumnCompData', params);
          break;

        case 'set_data':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setSubFormColumnCompData', params);
          break;
      }
    });
  });
}; // 3.联动子表单中的组件
// targets: 联动对象，types: 联动类型，result: 联动结果，value: 联动值


commonDYApi.subFormCompTosubFormComp = function (_t, targets, types, result, value, index) {
  targets.forEach(function (target) {
    types.forEach(function (type) {
      var params = {
        parentName: target.parentName,
        targetName: target.targetName,
        type: target.type,
        index: index,
        columnName: target.columnName,
        value: result,
        setData: value
      };

      switch (type) {
        case 'disabled':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setTableCellDisabled', params);
          break;

        case 'hidden':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setTableCellHidden', params);
          break;

        case 'readonly':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setTableCellReadonly', params);
          break;

        case 'required':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setTableCellRequired', params);
          break;

        case 'label':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setTableCellLabel', params);
          break;

        case 'clear_data':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_clearSubFormCompData', params);
          break;

        case 'set_data':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setSubFormCompData', params);
          break;
      }
    });
  });
}; // 4.联动子表单列
// targets: 联动对象，types: 联动类型，result: 联动结果


commonDYApi.mainFormCompTosubFormColumn = function (_t, tableName, targets, types, result) {
  targets.forEach(function (target) {
    types.forEach(function (item) {
      var params = {
        parentName: tableName,
        columnName: target.columnName,
        value: result
      };

      switch (item) {
        case 'hidden':
          _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_setTableColumnHidden', params);
          break;
      }
    });
  });
};

/* harmony default export */ var common = (commonDYApi);
// EXTERNAL MODULE: external "core-js/modules/es.object.values"
var es_object_values_ = __webpack_require__(53);

// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-dynamic-machine/comp_common.js











 // * @Author: 卓望深圳团队
// * @Date: 2020年3月5日09:34:16
// * @LastEditTime : 2020年3月5日09:34:23
// * @LastEditors  : 卓望深圳团队
// * @Description: 组件联动





var compDYApi = {};

compDYApi.common_single_compareValue = function (_this, model, dynamicItem, conditionItem, status) {
  var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : -1; // 状态是否符合/权限是否符合

  if (!smart_status_machine.ssm_compareStatusResult(conditionItem.status, status) || !smart_convert_machine.scm_compIsHaveAuth(conditionItem.authSwitch, conditionItem.authId)) {
    return {
      retValue: false,
      rowNumber: [],
      relation: 0
    };
  }

  var relation = common.common_single_dy_relation(dynamicItem.source, dynamicItem.target[0]);

  var _compDYApi$comp_1ToN_ = compDYApi.comp_1ToN_compareResult(_this, conditionItem, dynamicItem.source, relation, model, index),
      retValue = _compDYApi$comp_1ToN_.retValue,
      rowNumber = _compDYApi$comp_1ToN_.rowNumber;

  return {
    retValue: retValue,
    rowNumber: rowNumber,
    relation: relation
  };
}; // 组件联动：当对比条件是子表单单元格组件时，需要进行满足条件比较


compDYApi.comp_compareResult_RowNumber = function (_t, conditionItem, sourceItem, model) {
  var retCount = 0;
  model && model[sourceItem.parentName] && model[sourceItem.parentName].forEach(function (row, rowIndex) {
    var retCode = compDYApi.comp_getConditionResult(_t, conditionItem, model, true, sourceItem.parentName, rowIndex);
    retCount += retCode ? 1 : 0;
  });
  var compareValue = conditionItem.numberValue !== undefined ? parseInt(conditionItem.numberValue) : 1;
  var compareSing = conditionItem.numberSign !== undefined ? conditionItem.numberSign : '>=';
  return common.common_Compare(retCount, compareValue, compareSing);
}; // 组件联动：1对N联动->对比条件结果


compDYApi.comp_1ToN_compareResult = function (_t, conditionItem, sourceItem, relation, model, index) {
  switch (relation) {
    case 1: // 主->主

    case 2:
      // 主->子
      return {
        retValue: compDYApi.comp_getConditionResult(_t, conditionItem, model),
        rowNumber: []
      };

    case 3: // 子->主

    case 5:
      // 子->子(不同的子表单内)
      return {
        retValue: compDYApi.comp_compareResult_RowNumber(_t, conditionItem, sourceItem, model),
        rowNumber: []
      };

    case 4:
      {
        // 子->子(相同的子表单内)
        var rowNumber = [];

        if (index === -1) {
          model && model[sourceItem.parentName] && model[sourceItem.parentName].forEach(function (row, rowIndex) {
            var retCode = compDYApi.comp_getConditionResult(_t, conditionItem, model, true, sourceItem.parentName, rowIndex);

            if (retCode) {
              rowNumber.push(rowIndex);
            }
          });
        } else {
          var retCode = compDYApi.comp_getConditionResult(_t, conditionItem, model, true, sourceItem.parentName, index);

          if (retCode) {
            rowNumber.push(index);
          }
        }

        return {
          retValue: rowNumber.length > 0,
          rowNumber: rowNumber
        };
      }
  }
}; // 组件联动：N对N联动->拆分不同类型，进行分组判断


compDYApi.comp_NToN_groupData = function (dynamicItem) {
  var sources = [];
  var targets = dynamicItem.target;
  dynamicItem.condition.forEach(function (conditionItem) {
    sources.push(common.common_convert_conditonToSource(dynamicItem.source, conditionItem));
  });
  var tmpArray = [];
  var mainComps = [];
  var sameSubFormComps = [];
  sources.forEach(function (item, index) {
    if (item.parentName) {
      if (item.parentName === targets[0].parentName) {
        sameSubFormComps.push({
          sourceItem: item,
          conditionItem: dynamicItem.condition[index]
        });
      } else {
        tmpArray.push({
          sourceItem: item,
          conditionItem: dynamicItem.condition[index]
        });
      }
    } else {
      mainComps.push({
        sourceItem: item,
        conditionItem: dynamicItem.condition[index]
      });
    }
  });
  var tempObj = {};
  tmpArray.forEach(function (item) {
    if (!tempObj[item.sourceItem.parentName]) {
      tempObj[item.sourceItem.parentName] = [item];
    } else {
      tempObj[item.sourceItem.parentName].push(item);
    }
  });
  var otherSubFormComps = Object.values(tempObj);
  return {
    mainComps: mainComps,
    otherSubFormComps: otherSubFormComps,
    sameSubFormComps: sameSubFormComps
  };
}; // 组件联动：N对N联动->结果值的处理


compDYApi.comp_resultValue_compareResult = function (resultList, compareSign) {
  if (compareSign === '||') {
    for (var i = 0; i < resultList.length; i++) {
      if (resultList[i]) {
        return true;
      }
    }

    return false;
  }

  if (compareSign === '&&') {
    for (var _i = 0; _i < resultList.length; _i++) {
      if (!resultList[_i]) {
        return false;
      }
    }

    return true;
  }

  return false;
}; // 组件联动：N对N联动->源组件是主表单组件, 输出结果值


compDYApi.com_NToN_mainForm_compareResult = function (_t, compList, model) {
  var compareSign = compList[0].conditionItem.if;
  var resultList = [];

  for (var i = 0; i < compList.length; i++) {
    var conResult = compDYApi.comp_getConditionResult(_t, compList[i].conditionItem, model);

    if (compareSign === '||' && conResult) {
      return true;
    } else if (compareSign === '&&' && !conResult) {
      return false;
    }

    resultList.push(conResult);
  }

  return compDYApi.comp_resultValue_compareResult(resultList, compareSign);
}; // 组件联动：N对N联动->源组件是子表单组件，并且与目标(联动)组件不在同一个子表单里, 输出结果值


compDYApi.com_NToN_otherSubForm_compareResult = function (_t, subFormList, model, compareSign) {
  var resultList = []; // 结果值

  for (var subFormIndex = 0; subFormIndex < subFormList.length; subFormIndex++) {
    var subFormObj = subFormList[subFormIndex];
    var parentName = subFormObj[0].sourceItem.parentName;

    if (model[parentName] === undefined) {
      if (compareSign === '&&') {
        return false;
      }

      resultList.push(false);
      continue;
    }

    var count = 0; // 子表单满足条件的条数

    for (var dataIndex = 0; dataIndex < model[parentName].length; dataIndex++) {
      var orResult = false;
      var andResult = true;
      var _compareSign = subFormObj[0].conditionItem.if;

      for (var compIndex = 0; compIndex < subFormObj.length; compIndex++) {
        var conditionItem = subFormObj[compIndex].conditionItem;
        var conResult = compDYApi.comp_getConditionResult(_t, conditionItem, model, true, parentName, dataIndex);

        if (_compareSign === '&&') {
          if (!conResult) {
            andResult = false;
            break;
          }
        } else {
          if (conResult) {
            orResult = true;
            break;
          }
        }
      }

      if (_compareSign === '&&') {
        count = andResult ? count + 1 : count;
      } else {
        count = orResult ? count + 1 : count;
      }
    }

    var compareValue = subFormObj[0].conditionItem.numberValue;
    var compareSing = subFormObj[0].conditionItem.numberSign;
    compareValue = compareValue !== undefined ? parseInt(compareValue) : 1;
    compareSing = compareSing !== undefined ? compareSing : '>=';
    var tmpResult = common.common_Compare(count, compareValue, compareSing);

    if (compareSign === '||' && tmpResult) {
      return true;
    } else if (compareSign === '&&' && !tmpResult) {
      return false;
    } else {
      resultList.push(tmpResult);
    }
  }

  return compDYApi.comp_resultValue_compareResult(resultList, compareSign);
}; // 组件联动：N对N联动->源组件是子表单组件，并且与目标(联动)组件在一个子表单里, 输出满足条件的序号


compDYApi.com_NToN_sameSubForm_RowNumber = function (_t, compList, model, compareSign) {
  var resultList = []; // 结果值

  var parentName = compList[0].sourceItem.parentName;

  for (var dataIndex = 0; dataIndex < model[parentName].length; dataIndex++) {
    var resultOtherComps = [];

    for (var compIndex = 0; compIndex < compList.length; compIndex++) {
      var conditionItem = compList[compIndex].conditionItem;
      var conResult = compDYApi.comp_getConditionResult(_t, conditionItem, model, true, parentName, dataIndex);

      if (compareSign === '&&' && !conResult) {
        continue;
      }

      resultOtherComps.push(conResult);
    }

    if (resultOtherComps.length > 0 && compDYApi.comp_resultValue_compareResult(resultOtherComps, compareSign)) {
      resultList.push(dataIndex);
    }
  }

  return resultList;
}; // 组件联动：N对N联动->对比条件结果


compDYApi.comp_NToN_compareResult = function (_t, dynamicItem, model) {
  if (dynamicItem.condition === undefined || dynamicItem.condition.length <= 0) {
    return {
      retValue: false,
      trueList: []
    };
  } // // 主表单组件，比较集是&&
  // let filterList = []
  // let andCount = 0 // 表示主表单组件比较集是&&，结果为true的数量
  // let dataList = dynamicItem.condition
  // for (let i = 0; i < dataList.length; i++) {
  //   const conditionItem = dataList[i]
  //   const sourceItem = commDYApi.common_convert_conditonToSource(dynamicItem.source, conditionItem)
  //   if (conditionItem.if === '&&' && sourceItem.parentName === undefined) {
  //     const result = compDYApi.comp_getConditionResult(_t, conditionItem, model)
  //     if (!result) { return false }
  //     andCount = andCount + 1
  //   } else {
  //     filterList.push(conditionItem)
  //   }
  // }
  // if (filterList.length <= 0) { return true } // 都是主表单组件，且条件集都是&&, 且比较结果都是true
  // // 主表单组件，比较集是||
  // dataList = JSON.parse(JSON.stringify(filterList))
  // filterList = []
  // let orCount = 0 // 表示主表单组件比较集是||，结果为false的数量
  // for (let i = 0; i < dataList.length; i++) {
  //   const conditionItem = dataList[i]
  //   const sourceItem = commDYApi.common_convert_conditonToSource(dynamicItem.source, conditionItem)
  //   if (conditionItem.if === '||' && sourceItem.parentName === undefined) {
  //     const result = compDYApi.comp_getConditionResult(_t, conditionItem, model)
  //     if (result) { return true }
  //     orCount = orCount + 1
  //   } else {
  //     filterList.push(conditionItem)
  //   }
  // }
  // if (filterList.length <= 0) { return false } // 都是主表单组件，且条件集都是||, 且比较结果都是false
  // filterList2.forEach((item, index) => {
  //   if (item.parentName === targets[0].parentName) {
  //     sameSubFormComps.push({ sourceItem: item, conditionItem: dynamicItem.condition[index] })
  //   } else {
  //     tmpArray.push({ sourceItem: item, conditionItem: dynamicItem.condition[index] })
  //   }
  // })


  var _compDYApi$comp_NToN_ = compDYApi.comp_NToN_groupData(dynamicItem),
      mainComps = _compDYApi$comp_NToN_.mainComps,
      otherSubFormComps = _compDYApi$comp_NToN_.otherSubFormComps,
      sameSubFormComps = _compDYApi$comp_NToN_.sameSubFormComps;

  var compareSign = dynamicItem.condition[0].if;
  var resultList = [];

  if (mainComps && mainComps.length > 0) {
    var result = compDYApi.com_NToN_mainForm_compareResult(_t, mainComps, model);

    if (compareSign === '&&') {
      if (!result) {
        return {
          retValue: false,
          trueList: []
        };
      }
    } else {
      if (result) {
        return {
          retValue: true,
          trueList: []
        };
      }

      resultList.push(result);
    }
  }

  if (otherSubFormComps && otherSubFormComps.length > 0) {
    var _result = compDYApi.com_NToN_otherSubForm_compareResult(_t, otherSubFormComps, model, compareSign);

    if (compareSign === '&&') {
      if (!_result) {
        return {
          retValue: false,
          trueList: []
        };
      }
    } else {
      if (_result) {
        return {
          retValue: true,
          trueList: []
        };
      }

      resultList.push(_result);
    }
  }

  if (sameSubFormComps && sameSubFormComps.length > 0) {
    var numberList = compDYApi.com_NToN_sameSubForm_RowNumber(_t, sameSubFormComps, model, compareSign);
    return {
      retValue: numberList.length > 0,
      trueList: numberList
    };
  }

  return {
    retValue: compareSign === '&&',
    trueList: []
  };
}; // // 组件联动：N对N联动->对比条件结果
// compDYApi.comp_NToN_compareResult = function (_t, dynamicItem, model) {
//   const trueList = []
//   const resultOR = []
//   // 代码待添加，对condition进行排序，&&排在前面
//   for (let i = 0; i < dynamicItem.condition.length; i++) {
//     const conditionItem = dynamicItem.condition[i]
//     let conResult = false
//     const sourceItem = commDYApi.common_convert_conditonToSource(dynamicItem.source, conditionItem)
//     const relation = commDYApi.common_single_dy_relation(sourceItem, dynamicItem.target[0])
//     switch (relation) {
//       case 1: // 主->主
//       case 2: // 主->子
//         conResult = compDYApi.comp_getConditionResult(_t, conditionItem, model)
//         break
//       case 3: // 子->主
//       case 5: // 子->子(不同的子表单内)
//         conResult = compDYApi.comp_compareResult_RowNumber(_t, conditionItem, sourceItem, model)
//         break
//       case 4: // 子->子(相同的子表单内)
//         model && model[sourceItem.parentName] && model[sourceItem.parentName].forEach((row, rowIndex) => {
//           if (compDYApi.comp_getConditionResult(_t, conditionItem, model, true, sourceItem.parentName, rowIndex)) {
//             conResult = true
//             trueList.push(rowIndex)
//           }
//         })
//         break
//     }
//     // 注意：&&比较符一定要放到||前页面
//     if (conditionItem.if === '&&') {
//       if (!conResult) return { retValue: false, trueList: trueList }
//     } else if (conditionItem.if === '||') {
//       resultOR.push(conResult)
//     }
//   }
//   if (resultOR.length === 0) {
//     return { retValue: true, trueList: trueList }
//   }
//   let result = false
//   resultOR.forEach(item => {
//     if (item) {
//       result = true
//     }
//   })
//   return { retValue: result, trueList: trueList }
// }
// 单条件联动关系结果


compDYApi.comp_single_GetCompareResult = function (_t, cconditionItem, model) {
  var isTable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var parentName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : -1;
  return compDYApi.comp_getConditionResult(_t, cconditionItem, model, isTable, parentName, index);
}; // 多条件联动关系结果


compDYApi.comp_mul_GetCompareResult = function (dynamicItem, model) {
  var isTable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var parentName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
  var resultOR = [];
  var resultAnd = [];
  dynamicItem.condition.forEach(function (conditionItem) {
    var conResult = compDYApi.comp_getConditionResult(conditionItem, model, isTable, parentName, index);

    if (conditionItem.if === '||') {
      resultOR.push(conResult);
    } else if (conditionItem.if === '&&') {
      resultAnd.push(conResult);
    }
  });

  for (var i = 0; i < resultAnd.length; i++) {
    if (!resultAnd[i]) {
      return false;
    }
  }

  if (resultAnd.length > 0) {
    return true;
  }

  for (var _i2 = 0; _i2 < resultOR.length; _i2++) {
    if (resultOR[_i2]) {
      return true;
    }
  }

  return false;
}; // 组件联动管理器：条件关系结果比较


compDYApi.comp_getConditionResult = function (_t, conditionItem, model) {
  var isSubForm = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var parentName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
  var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  console.log(JSON.stringify(model)); // 取出组件数据模型中的值

  var columnName = conditionItem.columnName;
  console.log(JSON.stringify(columnName));
  var componentValue = smart_model_machine.smm_getCompModelValue(model, columnName, isSubForm, parentName, index); // if (componentValue === undefined) { return false }
  // 取出比较的值

  var ifCompValue = conditionItem.columnValue;
  var compareValue = compDYApi.comp_getCompareValue(_t, ifCompValue, model, isSubForm, parentName, index);

  if (compareValue === undefined) {
    return false;
  } // 比较


  var condition = conditionItem.condition;

  if (conditionItem.valueType === 'length') {
    return common.common_compareLengthResult(componentValue, compareValue, condition);
  } else if (conditionItem.valueType === 'value') {
    return common.common_compareValueResult(componentValue, compareValue, condition);
  }
}; // 组件联动管理器：获取比较数据的值


compDYApi.comp_getCompareValue = function (_t, ifCompValue, model, isSubForm, parentName, index) {
  // $: 表示此动态变量需要去数据模型中取值
  var tmpArray = ifCompValue.split('$') || [];

  if (tmpArray.length === 3) {
    return compDYApi.comp_getModelCompareValue(tmpArray[1], model, isSubForm, parentName, index);
  } // #: 表示此动态变量需要去路由中取值


  tmpArray = ifCompValue.split('#') || [];

  if (tmpArray.length === 3) {
    var propName = tmpArray[1];
    return _t.$route.query[propName];
  } // &: 表示些动态变理需要去sesion中取值


  tmpArray = ifCompValue.split('&') || [];

  if (tmpArray.length === 3) {
    var propNameList = tmpArray[1].split('.') || [];

    if (propNameList.length !== 2) {
      return undefined;
    }

    var sessionObject = sessionStorage.getItem(propNameList[0]);

    if (sessionObject === undefined) {
      return undefined;
    }

    return sessionObject[propNameList[1]];
  } // 其它情况直接返回设计器输入的值


  return ifCompValue;
}; // 组件联动管理器：比较值是变量时，并当比较值在数据模型中，获取比较数据的方式


compDYApi.comp_getModelCompareValue = function (comparePropStr, model, isSubForm, parentName, index) {
  var compareType = 0;
  var propNameList = comparePropStr.split('.') || [];
  var isCompareSubForm = propNameList.length === 2;

  if (isSubForm && isCompareSubForm) {
    compareType = parentName === propNameList[0] ? 1 : 2;
  } else if (!isSubForm && isCompareSubForm) {
    compareType = 3;
  } else if (isSubForm && !isCompareSubForm) {
    compareType = 4;
  } else {
    compareType = 5;
  }

  switch (compareType) {
    case 1:
      // 1: 比较组件是子表单、比较值是子表单，并且是同一个子表单
      return smart_model_machine.smm_getSubFormModelCellValue(model, propNameList[0], parentName, index);

    case 2: // 2: 比较组件是子表单、比较值是子表单，并且不是同一个子表单(比较值子表单中只要有一条记录满足，就算满足)

    case 3:
      {
        // 3: 比较组件是主表单，比较值是子表单(比较值子表单中只要有一条记录满足，就算满足)
        var tmpList = smart_model_machine.smm_getSubFormModelColumnValue(model, propNameList[0], parentName);
        return tmpList !== undefined ? tmpList.join(',') : undefined;
      }

    case 4: // 4: 比较组件是子表单，比较值是主表单

    case 5:
      // 5: 比较组件是主表单，比较值是主表单
      return smart_model_machine.smm_getMainFormModelValue(model, propNameList[0]);

    default:
      return undefined;
  }
};

/* harmony default export */ var comp_common = (compDYApi);
// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-dynamic-machine/data_common.js









 // * @Author: 卓望深圳团队
// * @Date: 2020年3月5日09:34:16
// * @LastEditTime : 2020年3月5日09:34:23
// * @LastEditors  : 卓望深圳团队
// * @Description: 组件联动


var dataDYApi = {}; // 按条件结果比较值

dataDYApi.data_conditionResultCompare = function (conditionItem, model, index) {
  // 取出模型中的值
  var tmpValue;

  if (conditionItem.firstFieldName.length > 0 && conditionItem.secondFieldName.length > 0) {
    tmpValue = model[conditionItem.firstFieldName][index][conditionItem.secondFieldName];
  } else {
    if (model && conditionItem.firstFieldName) {
      tmpValue = model[conditionItem.firstFieldName];
    }
  } // 比较


  if (conditionItem.valueType === 'length') {
    return common.common_compareLengthResult(tmpValue, conditionItem.columnValue, conditionItem.condition);
  } else if (conditionItem.valueType === 'value') {
    return common.common_compareValueResult(tmpValue, conditionItem.columnValue, conditionItem.condition);
  }
}; // 条件关系结果


dataDYApi.data_condition_restult = function (condition, model) {
  var itemIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var resultOR = [];
  var resultAnd = [];
  condition.forEach(function (conditionItem) {
    var conResult = dataDYApi.data_conditionResultCompare(conditionItem, model, itemIndex);

    if (conditionItem.if === '||') {
      resultOR.push(conResult);
    } else if (conditionItem.if === '&&') {
      resultAnd.push(conResult);
    }
  });
  return common.common_compareMulResult(resultOR, resultAnd); // 条件表达式的结果
}; // 多条件联动关系结果


dataDYApi.data_mul_GetCompareResult = function (dynamicItem, model) {
  if (dynamicItem.quantity.length < 3) {
    return false;
  }

  var total = 0; // 条件表达式满足的条数

  dynamicItem.condition.forEach(function (condition) {
    // 一个条件表达式中只允许出现一个子表单数据
    var tableName = '';
    condition.forEach(function (conditionItem) {
      if (conditionItem.firstFieldName.trim().length > 0 && conditionItem.secondFieldName.trim().length > 0) {
        tableName = conditionItem.firstFieldName;
      }
    });

    if (tableName.length > 0) {
      model && model[tableName].forEach(function (item, index) {
        if (dataDYApi.data_condition_restult(condition, model, index)) {
          total += 1;
        }
      });
    } else {
      if (dataDYApi.data_condition_restult(condition, model)) {
        total += 1;
      }
    }
  });
  var operator = dynamicItem.quantity.trim().substring(0, 2) === '==' ? '=' : dynamicItem.quantity.trim().substring(0, 2);
  var compareValue = dynamicItem.quantity.trim().substring(2);
  return common.common_compareValueResult(total.toString(), compareValue, operator);
};

/* harmony default export */ var data_common = (dataDYApi);
// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-dynamic-machine/index.js



 // * @Author: TurboC
// * @Date: 2020年6月29日09:34:16
// * @LastEditTime : 2020年6月29日09:34:23
// * @LastEditors  : TurobC
// * @Description: 智能联动器









var smartDynamicMachine = {};

smartDynamicMachine.start_smart_comp_dynamic = function (_ref) {
  var _t = _ref._t,
      dynamic = _ref.dynamic,
      formList = _ref.formList,
      model = _ref.model,
      item = _ref.item,
      parent = _ref.parent,
      index = _ref.index,
      status = _ref.status,
      isSubForm = _ref.isSubForm;
  smartDynamicMachine.start_dy_comp_single(_t, model, item, index, status);
  smartDynamicMachine.start_dy_subformColumn_single(_t, model, item, parent, index, status, isSubForm);
  smartDynamicMachine.start_dy_optionPicker_single(_t, formList, model, item, index, status);
  smartDynamicMachine.start_dy_optionReset_single(_t, formList, model, item, parent, index, status, isSubForm);
  smartDynamicMachine.start_dy_mul_mainform(_t, dynamic, model, item, status);
  smartDynamicMachine.start_dy_mul_subform_column(_t, dynamic, model, item, parent, index, status, isSubForm);
};

smartDynamicMachine.start_smart_data_dynamic = function (_t, formList, dataConfig, model, status) {
  smartDynamicMachine.start_dy_data_single(_t, dataConfig, model, status);
  smartDynamicMachine.start_data_dy_optionPicker_single(_t, formList, dataConfig, model, status);
};
/* ********************************************************************************* */

/*                       智能联动器：组件联动组件/数据联动组件->1对N联动关系                 */

/* ********************************************************************************* */
// 智能联动器：组件联动组件->1对N联动关系


smartDynamicMachine.start_dy_comp_single = function (_this, model, item, index, status) {
  if (item && item.dynamic && item.dynamic.single_mainform_list) {
    item.dynamic.single_mainform_list.forEach(function (dynamicItem) {
      smartDynamicMachine.dy_single_EveryItem(_this, model, dynamicItem, status, index);
    });
  }
}; // 智能联动器：数据联动组件->1对N联动关系


smartDynamicMachine.start_dy_data_single = function (_this, dataConfig, model, status) {
  if (dataConfig && dataConfig.data_dy_single_list) {
    dataConfig.data_dy_single_list.forEach(function (dynamicItem) {
      smartDynamicMachine.dy_single_EveryItem(_this, model, dynamicItem, status);
    });
  }
};

smartDynamicMachine.dy_single_EveryItem = function (_this, model, dynamicItem, status) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;

  if (!common.common_single_dataValid(dynamicItem)) {
    return;
  }

  for (var i = 0; i < dynamicItem.condition.length; i++) {
    var conditionItem = dynamicItem.condition[i];

    var _compDYApi$common_sin = comp_common.common_single_compareValue(_this, model, dynamicItem, conditionItem, status, index),
        retValue = _compDYApi$common_sin.retValue,
        rowNumber = _compDYApi$common_sin.rowNumber,
        relation = _compDYApi$common_sin.relation;

    if (!retValue) {
      continue;
    }

    smartDynamicMachine.dy_single_comp_call(_this, dynamicItem, conditionItem, rowNumber, relation);
  }
};

smartDynamicMachine.dy_single_comp_call = function (_this, dynamicItem, conditionItem, rowNumber, relation) {
  var types = conditionItem.type;
  var result = conditionItem.result;
  var value = conditionItem.value;

  switch (relation) {
    case 1: // 主->主

    case 3:
      // 子->主
      common.mainFormCompTomainFormComp(_this, dynamicItem.target, types, result, value);
      break;

    case 2: // 主->子

    case 5:
      // 子->子(不同的子表单内)
      common.mainFormCompTosubFormColumnComp(_this, dynamicItem.target, types, result, value);
      break;

    case 4:
      // 子->子(相同的子表单内)
      rowNumber.forEach(function (rowIndex) {
        common.subFormCompTosubFormComp(_this, dynamicItem.target, types, result, value, rowIndex);
      });
      break;
  }
};
/* ********************************************************************************* */

/*             智能联动器：组件联动Option/数据联动Option(过滤、禁用)->1对N联动关系           */

/* ********************************************************************************* */
// 智能联动器：数据联动Option->1对NOption联动入口API


smartDynamicMachine.start_dy_optionPicker_single = function (_this, formList, model, item, index, status) {
  if (item && item.dynamic && item.dynamic.single_option_picker) {
    item.dynamic.single_option_picker.forEach(function (dynamicItem) {
      smartDynamicMachine.dy_single_optionPicker_EveryItem(_this, formList, model, dynamicItem, status, index);
    });
  }
}; // 智能联动器：数据联动Option->1对NOption联动入口API


smartDynamicMachine.start_data_dy_optionPicker_single = function (_this, formList, dataConfig, model, status) {
  if (dataConfig && dataConfig.single_option_picker) {
    dataConfig.single_option_picker.forEach(function (dynamicItem) {
      smartDynamicMachine.dy_single_optionPicker_EveryItem(_this, formList, model, dynamicItem, status);
    });
  }
};

smartDynamicMachine.dy_single_optionPicker_EveryItem = function (_this, formList, model, dynamicItem, status) {
  var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : -1;

  if (!common.common_single_dataValid(dynamicItem)) {
    return;
  }

  for (var i = 0; i < dynamicItem.condition.length; i++) {
    var conditionItem = dynamicItem.condition[i];

    var _compDYApi$common_sin2 = comp_common.common_single_compareValue(_this, model, dynamicItem, conditionItem, status, index),
        retValue = _compDYApi$common_sin2.retValue,
        rowNumber = _compDYApi$common_sin2.rowNumber,
        relation = _compDYApi$common_sin2.relation;

    if (!retValue) {
      continue;
    }

    smartDynamicMachine.dy_single_optionPicker_call(_this, formList, model, conditionItem, dynamicItem, rowNumber, relation);
  }
};

smartDynamicMachine.dy_single_optionPicker_call = function (_this, formList, model, conditionItem, dynamicItem, rowNumber, relation) {
  var filterType = conditionItem.filterType;
  var filterValue = utils_toolApi.aspIncluds(['set_disabled', 'set_filter'], filterType) ? conditionItem.filterValue : '';
  var tmpName = utils_toolApi.aspIncluds(['set_disabled', 'clear_disabled'], filterType) ? 'forceDisabledOption' : 'forceFilterOption';
  dynamicItem.target.forEach(function (item) {
    switch (relation) {
      case 1: // 主->主

      case 3:
        // 子->主
        smart_property_machine.spm_setMainFormCompCustomFirstPropValue(_this, formList, item.columnName, tmpName, filterValue);
        break;

      case 2: // 主->子

      case 5:
        // 子->子(不同的子表单内)
        smart_property_machine.spm_setSubFormColummCompFirstPropValue(_this, formList, item.parentName, item.columnName, tmpName, filterValue);
        break;

      case 4:
        // 子->子(相同的子表单内)
        rowNumber.forEach(function (rowIndex) {
          smart_model_machine.smm_setSubFormModelCellValue(_this, model, item.parentName, item.columnName, rowIndex, '_' + tmpName, filterValue);
        });
        break;
    }
  });
};
/* ********************************************************************************* */

/*            智能联动器：组件联动Option(重置)->1对N联动关系                               */

/* ********************************************************************************* */
// 智能联动器：组件联动Option(重置)->1对N联动关系入口API


smartDynamicMachine.start_dy_optionReset_single = function (_this, formList, model, item, parent, index, status, isSubForm) {
  if (item && item.dynamic && item.dynamic.single_option_select) {
    item.dynamic.single_option_select.forEach(function (dynamicItem) {
      smartDynamicMachine.dy_single_optionReset_EveryItem(_this, formList, model, parent, index, dynamicItem, status, isSubForm);
    });
  }
};

smartDynamicMachine.dy_single_optionReset_EveryItem = function (_this, formList, model, parent, index, dynamicItem, status, isSubForm) {
  if (!common.common_single_dataValid(dynamicItem)) {
    return;
  }

  for (var i = 0; i < dynamicItem.condition.length; i++) {
    var conditionItem = dynamicItem.condition[i];

    var _compDYApi$common_sin3 = comp_common.common_single_compareValue(_this, model, dynamicItem, conditionItem, status, index = -1),
        retValue = _compDYApi$common_sin3.retValue,
        rowNumber = _compDYApi$common_sin3.rowNumber,
        relation = _compDYApi$common_sin3.relation;

    if (!retValue) {
      continue;
    }

    smartDynamicMachine.dy_single_optionReset_call(_this, formList, model, conditionItem, dynamicItem, rowNumber, relation);
  }
};

smartDynamicMachine.dy_single_optionReset_call = function (_this, formList, model, conditionItem, dynamicItem, rowNumber, relation) {
  var getDataType = conditionItem.getDataType;
  var param = getDataType === 'session' ? 'dicKey' : 'apiName';
  var key = 'optionProps';
  var paramValue = conditionItem.paramValue;
  dynamicItem.target.forEach(function (item) {
    switch (relation) {
      case 1: // 主->主

      case 3:
        // 子->主
        smart_property_machine.spm_setCompSecondeCustomPropValue(_this, formList, item.columnName, key, param, paramValue);
        break;

      case 2: // 主->子

      case 5:
        // 子->子(不同的子表单内)
        smart_property_machine.spm_setSubFormColummSecondCompValue(_this, formList, item.parentName, item.columnName, key, param, paramValue);
        break;

      case 4:
        // 子->子(相同的子表单内)
        rowNumber.forEach(function (rowIndex) {// 暂不支持
        });
        break;
    }
  });
};
/* ********************************************************************************* */

/*                    智能联动器：组件联动子表单列-》1对N联动关系                           */

/* ********************************************************************************* */
// 智能联动器：组件联动子表单列-》1对N联动关系入口API


smartDynamicMachine.start_dy_subformColumn_single = function (_this, model, item, parent, index, status, isSubForm) {
  if (item && item.dynamic && item.dynamic.single_subform_columm_list) {
    item.dynamic.single_subform_columm_list.forEach(function (dynamicItem) {
      smartDynamicMachine.dy_single_subform_column_EveryItem(_this, model, parent, index, dynamicItem, status, isSubForm);
    });
  }
};

smartDynamicMachine.dy_single_subform_column_EveryItem = function (_this, model, parent, index, dynamicItem, status, isSubForm) {
  for (var i = 0; i < dynamicItem.condition.length; i++) {
    var conditionItem = dynamicItem.condition[i]; // 状态是否符合, 条件比较是否符合

    var columnName = isSubForm ? parent.columnName : undefined;

    if (!smart_status_machine.ssm_compareStatusResult(conditionItem.status, status) || !comp_common.comp_getConditionResult(_this, conditionItem, model, isSubForm, columnName, index)) {
      continue; // 结束本次处理
    } // 开始处理


    var tableName = dynamicItem.subForm.columnName;
    var targets = dynamicItem.target;
    var types = conditionItem.type;
    var result = conditionItem.result;
    common.mainFormCompTosubFormColumn(_this, tableName, targets, types, result);
  }
};
/* ********************************************************************************* */

/*                       智能联动器：组件联动-》多条件(N对N)组件联动                        */

/* ********************************************************************************* */


smartDynamicMachine.start_dy_mul_mainform = function (_this, dynamic, model, item, status) {
  if (dynamic && dynamic.mul_mainform_list) {
    dynamic.mul_mainform_list.forEach(function (dynamicItem) {
      for (var i = 0; i < dynamicItem.condition.length; i++) {
        var conditionItem = dynamicItem.condition[i];

        if (conditionItem.columnName === item.columnName) {
          smartDynamicMachine.dy_mul_mainform_EveryTargetItem(_this, model, dynamicItem, status);
          break;
        }
      }
    });
  }
}; // 处理每一条联动数据


smartDynamicMachine.dy_mul_mainform_EveryTargetItem = function (_this, model, dynamicItem, status) {
  // 状态是否符合
  if (!smart_status_machine.ssm_compareStatusResult(dynamicItem.dynamic.status, status) || !smart_convert_machine.scm_compIsHaveAuth(dynamicItem.authSwitch, dynamicItem.authId)) {
    return;
  } // dyRelation是联动关系，组件关系需要在内部确定


  var _compDYApi$comp_NToN_ = comp_common.comp_NToN_compareResult(_this, dynamicItem, model),
      retValue = _compDYApi$comp_NToN_.retValue,
      trueList = _compDYApi$comp_NToN_.trueList;

  if (!retValue) {
    return;
  }

  var types = dynamicItem.dynamic.type;
  var result = dynamicItem.dynamic.result;
  var value = dynamicItem.dynamic.value;
  var relation = common.common_mul_dy_relation(dynamicItem.source, dynamicItem.target);

  switch (relation) {
    case 1: // 全部主->主

    case 3:
      // 部分子->主
      common.mainFormCompTomainFormComp(_this, dynamicItem.target, types, result, value);
      break;

    case 2: // 全部主->子

    case 5:
      // 部分子->子(源组件没有一个子表单与目标组件在同一个子表单内)
      common.mainFormCompTosubFormColumnComp(_this, dynamicItem.target, types, result, value);
      break;

    case 4:
      // 部分子->子(源组件至少有一个子表单与目标组件在同一个子表单内)
      // 不是因为目标组件对应的源组件导致的条件表达式成立时，要联动整个目标子表单单元格组件
      if (trueList.length === 0) {
        var targetItem = dynamicItem.target[0];
        model && model[targetItem.parentName] && model[targetItem.parentName].forEach(function (row, rowIndex) {
          trueList.push(rowIndex);
        });
      } // 开始联动


      trueList.forEach(function (index) {
        common.subFormCompTosubFormComp(_this, dynamicItem.target, types, result, value, index);
      });
      break;
  }
};
/* ********************************************************************************* */

/*                    智能联动器：子表单列联动-》多条件(N对N)联动子表单列                    */

/* ********************************************************************************* */


smartDynamicMachine.start_dy_mul_subform_column = function (_this, dynamic, model, item, parent, index, status, isSubForm) {
  if (dynamic && dynamic.mul_subform_columm_list) {
    dynamic.mul_subform_columm_list.forEach(function (dynamicItem) {
      dynamicItem.condition.forEach(function (conditionItem) {
        if (conditionItem.columnName === item.columnName) {
          smartDynamicMachine.dy_mul_subform_column_EveryTargetItem(_this, model, parent, index, dynamicItem, status, isSubForm);
        }
      });
    });
  }
}; // 处理每一条联动数据


smartDynamicMachine.dy_mul_subform_column_EveryTargetItem = function (_this, model, parent, index, dynamicItem, status, isSubForm) {
  // 状态是否符合, 条件比较是否符合
  var columnName = isSubForm ? parent.columnName : undefined;

  if (!smart_status_machine.ssm_compareStatusResult(dynamicItem.dynamic.status, status) || !comp_common.comp_mul_GetCompareResult(dynamicItem, model, isSubForm, columnName, index)) {
    return;
  } // 开始处理


  var tableName = dynamicItem.subForm.columnName;
  var targets = dynamicItem.target;
  var types = dynamicItem.dynamic.type;
  var result = dynamicItem.dynamic.result;
  common.mainFormCompTosubFormColumn(_this, tableName, targets, types, result);
};
/* ********************************************************************************* */

/*                       智能联动器：数据联动-》条件表达式联动                             */

/* ********************************************************************************* */
// 智能联动器：入口API


smartDynamicMachine.start_dy_data_config = function (_this, dataLingking, model, status) {
  if (dataLingking && dataLingking.data_dy_setting_list) {
    dataLingking.data_dy_setting_list.forEach(function (dynamicItem) {
      smartDynamicMachine.start_dy_data_config_EveryTargetItem(_this, model, dynamicItem, status);
    });
  }
}; // 智能联动器：处理每一条联动数据


smartDynamicMachine.start_dy_data_config_EveryTargetItem = function (_this, model, dynamicItem, status) {
  // 状态是否符合
  if (!smart_status_machine.ssm_compareStatusResult(dynamicItem.status, status) || !data_common.data_mul_GetCompareResult(dynamicItem, model)) {
    return;
  }

  for (var i = 0; i < dynamicItem.target.length; i++) {
    // 组件类型
    var _commonDYApi$isCompTy = common.isCompType(dynamicItem, i),
        targetType = _commonDYApi$isCompTy.targetType; // 开始处理


    var targets = dynamicItem.target;
    var types = dynamicItem.dynamicType;
    var result = dynamicItem.dynamicResult;
    var value = '';

    if (!targetType) {
      common.mainFormCompTomainFormComp(_this, targets, types, result, value);
    } else if (targetType) {
      common.mainFormCompTosubFormColumnComp(_this, targets, types, result, value);
    }
  }
};

/* harmony default export */ var smart_dynamic_machine = (smartDynamicMachine);
// EXTERNAL MODULE: external "regenerator-runtime/runtime"
var runtime_ = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(8);

// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-validate-machine/validate-mainForm.js



 // * @Author: TurboC
// * @Date: 2020年6月29日09:34:16
// * @LastEditTime : 2020年6月29日09:34:23
// * @LastEditors  : TurobC
// * @Description: 智能校验器



var validateMainForm = {}; // 智能校验器：重新组装校验数据

validateMainForm.svm_validateRuleData = function (item) {
  var obj = {};
  var isRequered = item.message !== undefined && item.required !== undefined;

  if (isRequered) {
    obj.required = item.required;
    obj.message = item.message;
    obj.trigger = item.trigger === undefined ? 'blur' : item.trigger;
  }

  var isCustome = item.validator !== undefined && item.id !== undefined;

  if (isCustome) {
    obj.validator = item.validator;
    obj.id = item.id;
    obj.trigger = obj.trigger = item.trigger === undefined ? 'blur' : item.trigger;
  }

  var isRule = item.pattern !== undefined && (item.requiredMessage !== undefined || item.message !== undefined) && item.trigger !== undefined;

  if (isRule) {
    obj.pattern = item.pattern;

    if (item.requiredMessage) {
      obj.requiredMessage = item.requiredMessage;
    } else {
      obj.message = item.message;
    }

    obj.trigger = obj.trigger = item.trigger === undefined ? 'blur' : item.trigger;
  }

  return obj;
}; // 智能校验器：需要开启校验的组件, true为开启，false为不开启


validateMainForm.svm_noNeedValidateComps = function (item) {
  if (utils_toolApi.aspIncluds(['text', 'customArea'], item.type)) {
    return false;
  }

  return true;
}; // 智能校验器：组件为禁用状态且不需要开启校验, true为开启，false为不开启


validateMainForm.svm_noNeedValidateDisabledComp = function (item, status) {
  if (item.props && item.props.disabled && item.isDisabledRequired !== undefined && item.isDisabledRequired) {
    return true;
  }

  if (utils_toolApi.sf_searchCustomPropValue(item, status, 'disabled') && item.isDisabledRequired !== undefined && item.isDisabledRequired) {
    return true;
  }

  return false;
}; // 智能校验器：组件为只读状态且不需要开启校验, true为开启，false为不开启


validateMainForm.svm_noNeedValidateReadonlyComp = function (item, status) {
  if (item.props && item.props.readonly && item.isReadonlyRequired !== undefined && item.isReadonlyRequired) {
    return true;
  }

  if (utils_toolApi.sf_searchCustomPropValue(item, status, 'readonly') && item.isReadonlyRequired !== undefined && item.isReadonlyRequired) {
    return true;
  }

  return false;
}; // 智能校验器：组件是否设置了必填开关，true为是，false为否


validateMainForm.svm_isSetRquiredBaseComp = function (item) {
  if (!(item && item.required && item.rules && item.rules.length && item.rules[0].required)) {
    return false;
  }

  return true;
}; // 智能校验器：组件是否设置了必填开关, 并且满足状态设置，true为是，false为否


validateMainForm.svm_isSetRquiredAndStatusBaseComp = function (item, status) {
  if (!validateMainForm.svm_isSetRquiredBaseComp(item)) {
    return false;
  }

  if (status === undefined || status.length <= 0) {
    return true;
  }

  if (!(item.rules[0].selectStatusList && item.rules[0].selectStatusList.length > 0)) {
    return true;
  }

  if (utils_toolApi.aspIncluds(item.rules[0].selectStatusList, status)) {
    return true;
  }

  return false;
}; // 智能校验器：主表单单元格组件校验功能


validateMainForm.svm_mainFormCellCompValiddate = function (item, status) {
  // 直接使用const tmpRules = item.rules,会导致 You may have an infinite update loop in a component render function.
  var tmpRules = [];
  item.rules && item.rules.forEach(function (cell) {
    tmpRules.push(cell);
  });

  if (validateMainForm.svm_isSetRquiredBaseComp(item) && !validateMainForm.svm_isSetRquiredAndStatusBaseComp(item, status)) {
    tmpRules.shift();
  }

  var retRules = [];
  tmpRules.forEach(function (row) {
    retRules.push(validateMainForm.svm_validateRuleData(row));
  });
  return retRules;
}; // 智能校验器：子表单单元格组件校验功能


validateMainForm.svm_subFormCellCompValidate = function (model, item, parent, index, status) {
  var requiredValue = smart_model_machine.smm_getSubFormModelCellValue(model, item.columnName, parent.columnName, index, '_required');
  var messageValue = smart_model_machine.smm_getSubFormModelCellValue(model, item.columnName, parent.columnName, index, '_requiredMessage');
  var rulesValue = smart_model_machine.smm_getSubFormModelCellValue(model, item.columnName, parent.columnName, index, '_rules'); // 直接使用const tmpRules = item.rules,会导致 You may have an infinite update loop in a component render function.

  var tmpRules = [];

  if (requiredValue !== undefined && rulesValue !== undefined) {
    rulesValue.forEach(function (cell) {
      tmpRules.push(validateMainForm.svm_validateRuleData(cell));
    });
    tmpRules.unshift({
      required: requiredValue,
      message: item.label + messageValue,
      trigger: ['blur', 'change']
    });
  } else if (requiredValue !== undefined && rulesValue === undefined) {
    item.rules && item.rules.forEach(function (cell) {
      tmpRules.push(validateMainForm.svm_validateRuleData(cell));
    });

    if (validateMainForm.svm_isSetRquiredBaseComp(item)) {
      tmpRules.shift();
    }

    tmpRules.unshift({
      required: requiredValue,
      message: item.label + messageValue,
      trigger: ['blur', 'change']
    });
  } else if (requiredValue === undefined && rulesValue !== undefined) {
    rulesValue.forEach(function (cell) {
      tmpRules.push(cell);
    });

    if (validateMainForm.svm_isSetRquiredAndStatusBaseComp(item, status)) {
      tmpRules.push(item.rules[0]);
    }
  } else {
    tmpRules = validateMainForm.svm_mainFormCellCompValiddate(item, status);
  }

  return tmpRules;
}; // 智能校验器：子表单组件校验功能(除子表单行列校验)


validateMainForm.svm_validateAllCompsApi = function (model, item, parent, index, isSubForm, status) {
  // 过滤校验开关，总共三种：1、不需要校验的组件设置；2、禁用状态不需要校验；3、只读状态不需要校验
  if (!validateMainForm.svm_noNeedValidateComps(item) || validateMainForm.svm_noNeedValidateDisabledComp(item, status) || validateMainForm.svm_noNeedValidateReadonlyComp(item, status)) {
    return [];
  } // 状态校验处理


  if (isSubForm) {
    return validateMainForm.svm_subFormCellCompValidate(model, item, parent, index, status);
  }

  return validateMainForm.svm_mainFormCellCompValiddate(item, status);
};

/* harmony default export */ var validate_mainForm = (validateMainForm);
// EXTERNAL MODULE: external "core-js/modules/es.string.includes"
var es_string_includes_ = __webpack_require__(30);

// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-validate-machine/validate-subForm.js












 // * @Author: TurboC
// * @Date: 2020年6月29日09:34:16
// * @LastEditTime : 2020年6月29日09:34:23
// * @LastEditors  : TurobC
// * @Description: 智能校验器


var validateSubForm = {}; // 智能校验器：子表单组件,获取发性校验的子表单行号

validateSubForm.sf_getSubFormValidateRowNo = function (rule) {
  var firstIndex = rule.field.indexOf('.') + 1;
  var secondIndex = rule.field.indexOf('.', firstIndex);
  var rowIndex = parseInt(rule.field.substring(firstIndex, secondIndex));
  return rowIndex;
}; // 智能校验器：子表单组件,设置子表单单元格组件的校验函数


validateSubForm.sf_setSubFormValidateFunction = function (validatePass, filterKey, propItem) {
  propItem.rules = propItem.rules.filter(function (k) {
    return k.id !== filterKey;
  });
  propItem.rules.push({
    validator: validatePass,
    trigger: 'blur',
    id: filterKey
  });
};
/* ********************************************************************************* */

/*                     智能校验器：子表单组件<-->空行校验器                               */

/* ********************************************************************************* */
// 智能校验器：子表单组件->空行校验器,校验空行数据api


validateSubForm.svm_subFormNullRowValidateData = function (model, tableItem, tablePropList, index, callback) {
  var rowItem = model[tableItem.columnName][index];
  var rowValue = '';
  tablePropList.forEach(function (propItem) {
    rowValue += rowItem[propItem.columnName] + '';
  });

  if (rowValue === '') {
    callback(new Error(tableItem.nullRowValidateTip || '请输入校验提示语!'));
  } else {
    callback();
  }
}; // 智能校验器：子表单组件->空行校验器,清除空行校验提示语


validateSubForm.svm_subFormNullRowClearValidate = function (model, tableItem, tablePropList, index, _this) {
  if (model[tableItem.columnName].length <= index) {
    return;
  }

  var rowItem = model[tableItem.columnName][index];
  var rowValue = '';
  var props = [];
  tablePropList.forEach(function (tmpItem) {
    if (tmpItem.columnName !== undefined) {
      rowValue += rowItem[tmpItem.columnName] || '';

      if (rowItem[tmpItem.columnName] === undefined || rowItem[tmpItem.columnName].length <= 0) {
        props.push(tableItem.columnName + '.' + index + '.' + tmpItem.columnName);
      }
    }
  });

  if (rowValue !== '' && props.length > 0) {// // 先整行清楚
    // _this.$root.Bus && _this.$root.Bus.$emit('bus_id_sf_clearValidate', props)
    // // 再重新校验，恢复单元格组件中自己的校验信息
    // _this.$root.Bus && _this.$root.Bus.$emit('bus_id_sf_validateField', props)
  }
}; // 智能校验器：子表单组件->空行校验器


validateSubForm.svm_subFormNullRowValidateApi = function (_this, model, tableItem, tablePropList, propItem) {
  var validatePass = function validatePass(rule, value, callback) {
    model = _this.model; // 临时处理

    var index = validateSubForm.sf_getSubFormValidateRowNo(rule);

    if (value === '') {
      validateSubForm.svm_subFormNullRowValidateData(model, tableItem, tablePropList, index, callback);
    } else {
      callback();
      validateSubForm.svm_subFormNullRowClearValidate(model, tableItem, tablePropList, index, _this);
    }
  };

  validateSubForm.sf_setSubFormValidateFunction(validatePass, 'nullchildform', propItem);
};
/* ********************************************************************************* */

/*                     智能校验器：子表单组件<-->单列唯一性校验器                          */

/* ********************************************************************************* */
// 智能校验器：子表单组件->单列唯一性校验器,校验单列唯一数据api


validateSubForm.svm_subFormSingleColumnValidateData = function (model, tableItem, propItem, value, callback) {
  var flag = 0;

  for (var i = 0; i < model[tableItem.columnName].length; i++) {
    var rowItem = model[tableItem.columnName][i];

    if (rowItem[propItem.columnName] === value) {
      flag++;
    }

    if (flag >= 2) {
      for (var j = 0; j < tableItem['validate-config'].object.length; j++) {
        var showItem = tableItem['validate-config'].object[j];

        if (showItem.columnName === propItem.columnName) {
          callback(new Error(showItem.showTip || '请在配置校验信息提示!'));
          return true;
        }
      }
    }
  }

  callback();
  return false;
}; // 智能校验器：子表单组件->单列唯一性校验器,清除空行校验提示语


validateSubForm.svm_subFormSingleColumnClearValidate = function (_this, model, tableItem, propItem) {
  var props = [];
  var count = 0; // 相同值的计数器

  for (var i = 0; i < model[tableItem.columnName].length; i++) {
    var tmpValue1 = model[tableItem.columnName][i][propItem.columnName];

    if (tmpValue1 !== undefined && tmpValue1.length > 0) {
      props.push(tableItem.columnName + '.' + i + '.' + propItem.columnName);
    }

    for (var j = i + 1; j < model[tableItem.columnName].length; j++) {
      var tmpValue2 = model[tableItem.columnName][j][propItem.columnName];

      if (tmpValue1 === tmpValue2) {
        count = count + 1;
      }
    }
  }

  if (count < 1) {
    // 先整列清楚
    if (props.length > 0 && props.length > 0) {
      // 如果props为空数组时，会清楚所有
      _this.$root.Bus && _this.$root.Bus.$emit('bus_id_sf_clearValidate', props);
    } // // 再重新校验，恢复单元格组件中自己的校验信息
    // // _this.$root.Bus && _this.$root.Bus.$emit('bus_id_sf_validateField', props)
    // const props1 = []
    // for (let j = 0; j < model[tableItem.columnName].length; j++) {
    //   const tmpValue1 = model[tableItem.columnName][j][propItem.columnName]
    //   if (tmpValue1 === undefined || tmpValue1.length <= 0) {
    //     props1.push(tableItem.columnName + '.' + j + '.' + propItem.columnName)
    //   }
    // }
    // _this.$root.Bus && _this.$root.Bus.$emit('bus_id_sf_validateField', props1)

  }
}; // 智能校验器：子表单组件->单列唯一性校验器


validateSubForm.svm_subFormSingleColumnValidateApi = function (_this, model, tableItem, propItem) {
  var hasProp = false;
  tableItem['validate-config'].object && tableItem['validate-config'].object.forEach(function (objItem) {
    if (objItem.columnName === propItem.columnName) {
      hasProp = true;
    }
  });

  if (hasProp) {
    var validatePass = function validatePass(rule, value, callback) {
      if (value !== '') {
        model = _this.model; // 临时处理

        validateSubForm.svm_subFormSingleColumnValidateData(model, tableItem, propItem, value, callback);
        validateSubForm.svm_subFormSingleColumnClearValidate(_this, model, tableItem, propItem);
      } else {
        callback();
      }
    };

    validateSubForm.sf_setSubFormValidateFunction(validatePass, 'singlechildform', propItem);
  }
};
/* ********************************************************************************* */

/*                     智能校验器：子表单组件<-->多列组合校验器                            */

/* ********************************************************************************* */
// 智能校验器：子表单组件->多列组合校验器,校验多组组合数据api


validateSubForm.svm_subFormMultiColumnValidateData = function (model, tableItem, callback) {
  var add = [];

  var _loop = function _loop(i) {
    var rowItem = model[tableItem.columnName][i];
    var str = '';
    tableItem['validate-config'].value.forEach(function (v, index) {
      if (rowItem[v] !== '') {
        str = str + index + rowItem[v];
      }
    });

    if (str !== '' && utils_toolApi.aspIncluds(add, str)) {
      callback(new Error(tableItem['validate-config'].defaultText));
      return {
        v: true
      };
    } else {
      add.push(str);
    }
  };

  for (var i = 0; i < model[tableItem.columnName].length; i++) {
    var _ret = _loop(i);

    if (Object(esm_typeof["a" /* default */])(_ret) === "object") return _ret.v;
  }

  callback();
  return false;
}; // 智能校验器：子表单组件->多列组合校验器,清除空行校验提示语


validateSubForm.svm_subFormMultiColumnClearValidate = function (_this, model, tableItem) {
  model[tableItem.columnName].forEach(function (rowItem1, rowIndex) {
    var flag = 0;
    var tmpValue1 = '';
    tableItem['validate-config'].value.forEach(function (v1, index1) {
      if (rowItem1[v1] !== '') {
        tmpValue1 = tmpValue1 + ',' + index1 + ',' + rowItem1[v1];
      }
    });
    model[tableItem.columnName].forEach(function (rowItem2) {
      var tmpValue2 = '';
      tableItem['validate-config'].value.forEach(function (v2, index2) {
        if (rowItem2[v2] !== '') {
          tmpValue2 = tmpValue2 + ',' + index2 + ',' + rowItem2[v2];
        }
      });

      if (tmpValue1 === tmpValue2) {
        flag = flag + 1;
      }
    });

    if (flag <= 1) {
      var props = [];
      tableItem['validate-config'].value.forEach(function (v, index) {
        props.push(tableItem.columnName + '.' + rowIndex + '.' + v);
      });
      _this.$root.Bus && _this.$root.Bus.$emit('bus_id_sf_clearValidate', props);
    }
  });
}; // 智能校验器：多列组合校验


validateSubForm.svm_subFormMultiColumnValidateApi = function (_this, model, tableItem, propItem) {
  if (tableItem['validate-config'].value.includes(propItem.columnName)) {
    var validatePass = function validatePass(rule, value, callback) {
      if (value !== '') {
        model = _this.model; // 临时处理

        validateSubForm.svm_subFormMultiColumnValidateData(model, tableItem, callback);
        validateSubForm.svm_subFormMultiColumnClearValidate(_this, model, tableItem);
      } else {
        callback();
      }
    };

    validateSubForm.sf_setSubFormValidateFunction(validatePass, 'multichildform', propItem);
  }
};
/* ********************************************************************************* */

/*                     智能校验器：子表单组件启动校验                                     */

/* ********************************************************************************* */
// 智能校验器：子表单组件行列校验功能


validateSubForm.svm_validateSubFormApi = function (_this, model, item) {
  var itemList = utils_toolApi.subTableProps(item);
  var isColumnValidate = Object.prototype.hasOwnProperty.call(item, 'validate-config') && Object.prototype.hasOwnProperty.call(item['validate-config'], 'validate') && item['validate-config'].validate; // 遍历其子组件

  itemList.forEach(function (propItem) {
    if (isColumnValidate) {
      if (!item['validate-config'].type) {
        // 单列单一校验
        validateSubForm.svm_subFormSingleColumnValidateApi(_this, model, item, propItem);
      } else {
        // 多列组合校验
        validateSubForm.svm_subFormMultiColumnValidateApi(_this, model, item, propItem);
      }
    } // 空行校验


    if (item.isNullRowValidate) {
      validateSubForm.svm_subFormNullRowValidateApi(_this, model, item, itemList, propItem);
    }
  });
};

/* harmony default export */ var validate_subForm = (validateSubForm);
// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-validate-machine/index.js







 // * @Author: TurboC
// * @Date: 2020年6月29日09:34:16
// * @LastEditTime : 2020年6月29日09:34:23
// * @LastEditors  : TurobC
// * @Description: 智能校验器




var smartValidateMachine = {}; // 智能校验器：子表单组件,列属性是否显示*号

smartValidateMachine.sf_isShowSubFormHeaderRequerd = function (_this, item, status, index) {
  var tmpItem = item.formFields[index];
  var isLabel = utils_toolApi.sf_searchCustomPropValue(tmpItem, status, 'label');
  var required = validate_mainForm.svm_isSetRquiredAndStatusBaseComp(tmpItem, status);
  var isNeed = validate_mainForm.svm_noNeedValidateComps(tmpItem); // console.log(tmpItem.columnName + ' : isLable ' + isLabel + ' : required ' + required + ' : isNeed ' + isNeed + ' : index ' + index)

  if (required && isNeed && !isLabel) {
    return true;
  }

  return false;
}; // 智能校验器：主表单所有组件校验功能


smartValidateMachine.svm_startValidateAllComps = function (model, item, parent, index, isSubForm, status) {
  return validate_mainForm.svm_validateAllCompsApi(model, item, parent, index, isSubForm, status);
}; // 智能校验器：子表单组件行列校验功能


smartValidateMachine.svm_subFormValidateMachine = function (_this, model, item) {
  return validate_subForm.svm_validateSubFormApi(_this, model, item);
}; // 校验全量表单(对整个表单进行校验的方法)


smartValidateMachine.svm_validateForm = /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_this) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              _this.$refs.validateForm.validate(function (valid) {
                if (valid) {
                  resolve(true);
                } else {
                  _this.$nextTick(function () {
                    var a = document.querySelector('.el-form-item.is-error ');

                    if (a) {
                      a.scrollIntoView();
                    }
                  });

                  resolve(false);
                  return false;
                }
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(); // 校验部分表单(对部分表单字段进行校验的方法)


smartValidateMachine.svm_validateField = /*#__PURE__*/function () {
  var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_this, array, isScroll) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              _this.$refs.validateForm.validateField(array, function (error) {
                if (!error) {
                  resolve(true);
                } else {
                  if (isScroll) {
                    _this.$nextTick(function () {
                      var a = document.querySelector('.el-form-item.is-error ');

                      if (a) {
                        a.scrollIntoView();
                      }
                    });
                  }

                  resolve(false);
                  return false;
                }
              });
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // 校验子表单部分属性校验(对输入的组件进行校验的方法)，同时自动定位到校验失败的组件位置


smartValidateMachine.svm_validateSubFormField = /*#__PURE__*/function () {
  var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_this, tableName, index, columnNames, isScroll) {
    var array;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            array = [];
            columnNames && columnNames.forEach(function (item) {
              array.push(tableName + '.' + index + '.' + item);
            });
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              _this.$refs.validateForm.validateField(array, function (error) {
                if (!error) {
                  resolve(true);
                } else {
                  if (isScroll) {
                    _this.$nextTick(function () {
                      var a = document.querySelector('.el-form-item.is-error ');

                      if (a) {
                        a.scrollIntoView();
                      }
                    });
                  }

                  resolve(false);
                  return false;
                }
              });
            }));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6, _x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}(); // 清除页面的校验结果(传入待移除的组件的prop属性或者prop组成的数组，如不传则移除整个页面的校验结果)


smartValidateMachine.svm_clearValidate = function (_this, tmpVal) {
  if (tmpVal === null) {
    _this.$refs.validateForm && _this.$refs.validateForm.clearValidate();
  } else {
    _this.$refs.validateForm && _this.$refs.validateForm.clearValidate(tmpVal);
  }
};

/* harmony default export */ var smart_validate_machine = (smartValidateMachine);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/form-item.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import aspAttAdm from './components/pcc3040/asp-att-adm'











 // import { VueEditor } from 'vue2-editor'

/* harmony default export */ var form_itemvue_type_script_lang_js_ = ({
  name: 'FormItem',
  mixins: [dy_old, dy_single_datepicker],
  props: ['dynamic', 'formList', 'item', 'value', 'status', 'formConfig', 'isTableFormItem', 'isNoLabel', 'parent', 'index', 'model', 'type'],
  components: {
    // VueEditor,
    aspSelectTree: asp_select_tree,
    aspAttAdm: asp_att_adm,
    aspDateRange: asp_date_range,
    aspInputRange: asp_input_range
  },
  data: function data() {
    var _this = this;

    return {
      isIndeterminate: false,
      // checkbox 全选
      checkAll: false,
      // 是否全选
      serverProps: this.formConfig.serverProps,
      pickerOptions: {
        disabledDate: function disabledDate(time) {
          var _this$start_dy_single = _this.start_dy_single_datepicker(),
              retValue = _this$start_dy_single.retValue,
              targetSign = _this$start_dy_single.targetSign,
              targetValue = _this$start_dy_single.targetValue;

          var compareValue = true;

          if (retValue && targetValue && targetValue.length > 0) {
            if (targetSign && targetSign === '>=') {
              compareValue = time.getTime() < new Date(targetValue).getTime() - 24 * 60 * 60 * 1000;
            } else if (targetSign && targetSign === '<=') {
              compareValue = time.getTime() > new Date(targetValue).getTime();
            } else if (targetSign && targetSign === '>') {
              compareValue = time.getTime() < new Date(targetValue).getTime();
            } else if (targetSign && targetSign === '<') {
              compareValue = time.getTime() > new Date(targetValue).getTime() - 24 * 60 * 60 * 1000;
            }
          }

          var currentValue;

          switch (_this.item.aspProps.dateRange) {
            case 0:
              // 全部可选
              if (targetValue && targetValue.length > 0) {
                return compareValue;
              }

              break;

            case 1:
              // 选择当天以前的日期(包括当天)
              currentValue = time.getTime() >= Date.now();
              return targetValue && targetValue.length > 0 ? currentValue || compareValue : currentValue;

            case 2:
              // 选择当天之前的日期(不包括当天)
              currentValue = time.getTime() > Date.now() - 24 * 60 * 60 * 1000;
              return targetValue && targetValue.length > 0 ? currentValue || compareValue : currentValue;

            case 3:
              // 选择当天之后的日期(包括当天)
              currentValue = time.getTime() <= Date.now() - 24 * 60 * 60 * 1000;
              return targetValue && targetValue.length > 0 ? currentValue || compareValue : currentValue;

            case 4:
              // 选择当天之后的日期(不包括当天)
              currentValue = time.getTime() <= Date.now();
              return targetValue && targetValue.length > 0 ? currentValue || compareValue : currentValue;
          }
        }
      }
    };
  },
  created: function created() {
    smart_property_machine.spm_initOptionList(this, this.item, this.serverProps);
  },
  mounted: function mounted() {
    var _this2 = this;

    this.isCheckboxAll();
    this.loadDataRangeValidate();

    if (this.item.type === 'editor') {
      var E = window.wangEditor;
      var editor = new E('#editor' + this.item.columnName);

      editor.customConfig.onchange = function (html) {
        _this2.setColumnNameValue(html);
      };

      editor.create();
      editor.txt.html(this.value);
    }
  },
  computed: {
    classObject: function classObject() {
      // 修复输入框可清空并且限制长度时 清空icon遮挡问题
      var className = '';
      var props = this.item.props;

      if (props.clearable && props['show-word-limit']) {
        var maxlength = props.maxlength.toString();
        var len = maxlength.length;

        if (len === 0) {
          className = '';
        } else if (len === 1) {
          className = 'fixClearIcon1';
        } else if (len === 2) {
          className = 'fixClearIcon2';
        } else if (len === 3) {
          className = 'fixClearIcon3';
        } else if (len === 4) {
          className = 'fixClearIcon4';
        }
      }

      return className;
    },
    computeMaxLength: function computeMaxLength() {
      if (this.item.type === 'textarea' || this.item.type === 'input') {
        var parentName = this.parent !== undefined ? this.parent.columnName : undefined;
        var maxLen = smart_model_machine.smm_getSubFormModelCellValue(this.model, this.item.columnName, parentName, this.index, '_maxlength');

        if (this.isTableFormItem && maxLen !== undefined) {
          return maxLen;
        } else if (this.item.props.maxlength && this.item.props.maxlength > 0) {
          return this.item.props.maxlength;
        }
      }

      return undefined;
    },
    computeShowLimit: function computeShowLimit() {
      if (this.item.type === 'textarea' || this.item.type === 'input') {
        var parentName = this.parent !== undefined ? this.parent.columnName : undefined;
        var maxLen = smart_model_machine.smm_getSubFormModelCellValue(this.model, this.item.columnName, parentName, this.index, '_maxlength');

        if (this.isTableFormItem && maxLen !== undefined) {
          return true;
        } else if (this.item.props['show-word-limit']) {
          return this.item.props['show-word-limit'];
        }
      }

      return undefined;
    },
    formItemRules: function formItemRules() {
      return smart_validate_machine.svm_startValidateAllComps(this.model, this.item, this.parent, this.index, this.isTableFormItem, this.status);
    },
    formItemLabelWidth: function formItemLabelWidth() {
      return smart_property_machine.spm_formItemLabelWidth(this.item, this.formConfig, this.isNoLabel);
    },
    formItemLabel: function formItemLabel() {
      return smart_property_machine.spm_formItemLabel(this.item, this.isNoLabel);
    },
    formItemProp: function formItemProp() {
      return smart_property_machine.spm_formItemProp(this.isTableFormItem, this.item, this.parent, this.index);
    },
    // checkbox组件选中key值
    computeCheckboxSelectKeys: function computeCheckboxSelectKeys() {
      return this.handleCheckboxSelectKeys();
    },
    // 计算范围组件后面一个组件的值
    getRangeSuffixLabel: function getRangeSuffixLabel() {
      return this.getTargetNameValue() === undefined ? '' : this.getTargetNameValue();
    },
    // 远程搜索组件，是否显示别名
    needAliasName: function needAliasName() {
      return this.item['option-alias'] && this.item['option-alias'].length > 0;
    },
    // 表格内表单禁用计算
    tableRowCellDisabled: function tableRowCellDisabled() {
      return smart_convert_machine.scm_isNeedDisabledComp(this.model, this.item, this.parent, this.index, this.isTableFormItem, this.status);
    },
    // 表格内表单只读计算
    tableRowCellReadonly: function tableRowCellReadonly() {
      return smart_convert_machine.scm_isNeedReadonlyComp(this.model, this.item, this.parent, this.index, this.isTableFormItem, this.status);
    },
    // 获取组件省市区的option list值
    regionOptionList: function regionOptionList() {
      return smart_property_machine.spm_getRegionShowOptionList(this.item);
    },
    // 获取组件option list值(除省市区组件外)
    computeOptionList: function computeOptionList() {
      return smart_property_machine.spm_getCompShowOptionList(this, this.item, this.model, this.parent, this.index, this.isTableFormItem, this.status);
    }
  },
  watch: {
    value: {
      handler: function handler(val, oldVal) {
        if (this.item.type === 'avatar') {
          this.item.props[this.item.bindType] = val;
        } // 远程搜索组件，options列表只能在数据模型赋值后，才能触发搜索生成optins列表


        this.watchValueChange(val, oldVal); // label值重新映射

        this.setCompModelLabelValue(val); // 判断默认是否已被全选

        this.isCheckboxAll(); // 组件联动操作

        this.startDynamicOpt();
        smart_dynamic_machine.start_smart_comp_dynamic(this.getParam());
      },
      immediate: true
    },
    // 监听每次渲染的时间，若val 和 oldVal 同时存在，则表明在数据更改了，但是未重新渲染DOM。检查到render_time变化时，需要重新加载获取options
    'item.render_time': function itemRender_time(val, oldVal) {
      if (val && oldVal) {
        smart_property_machine.spm_initOptionList(this, this.item, this.serverProps);
      }
    },
    // label值重新映射
    'item.options': function itemOptions(val) {
      if (val) {
        this.setCompModelLabelValue(this.value);
      }
    },
    'item.optionProps.apiParam': function itemOptionPropsApiParam(val) {
      if (val) {
        smart_property_machine.spm_initOptionList(this, this.item, this.serverProps);
      }
    },
    'item.optionProps.dicKey': function itemOptionPropsDicKey(val) {
      if (val) {
        smart_property_machine.spm_initOptionList(this, this.item, this.serverProps);
      }
    },
    'item.optionProps.apiName': function itemOptionPropsApiName(val) {
      if (val) {
        smart_property_machine.spm_initOptionList(this, this.item, this.serverProps);
      }
    }
  },
  methods: {
    // 参数
    getParam: function getParam() {
      return {
        _t: this,
        dynamic: this.dynamic,
        formList: this.formList,
        model: this.model,
        item: this.item,
        parent: this.parent,
        index: this.index,
        status: this.status,
        isSubForm: this.isTableFormItem,
        serverProps: this.serverProps
      };
    },
    // 右键菜单
    contextMenu: function contextMenu() {},
    // label值重新映射
    setCompModelLabelValue: function setCompModelLabelValue(val) {
      var label = smart_property_machine.spm_getOptionLabel(this.item, this.item.options, val);

      if (label) {
        this.setTargetNameValue(label);
      }
    },

    /* ****************************************************************** */

    /*                       组件消息事件                                   */

    /* ****************************************************************** */
    radioBindChange: function radioBindChange(e) {
      this.sendMessage('change');
    },
    bindInput: function bindInput(e) {
      this.setColumnNameValue(e);
      this.setCompModelLabelValue(e);
    },
    bindChange: function bindChange(e) {
      this.sendMessage('change');
    },
    bindBlur: function bindBlur() {
      if (utils_toolApi.aspIncluds(['input', 'number'], this.item.type) && this.value !== undefined && this.item.isTrim) {
        this.setColumnNameValue(this.value.trim());
      }

      this.sendMessage('blur');
    },
    bindClear: function bindClear() {
      this.sendMessage('clear');
    },
    bindClick: function bindClick() {
      this.sendMessage('click');
    },
    // 组件给外部转发消息
    sendMessage: function sendMessage(type, fileData) {
      this.$emit('on', {
        item: this.item,
        parent: this.parent,
        type: type,
        index: this.isTableFormItem ? this.index : '-1',
        row: this.isTableFormItem ? this.model[this.parent.columnName][this.index] : undefined,
        fileData: fileData
      });
    },

    /* ****************************************************************** */

    /*                       upload组件                                    */

    /* ****************************************************************** */
    handleUpload: function handleUpload(params) {
      this.sendMessage('upload', params);
    },
    handleRemove: function handleRemove(file, fileList) {
      this.sendMessage('remove', fileList);
    },
    // 预览
    handleUploadPreview: function handleUploadPreview(file) {
      this.sendMessage('preview', file);
    },
    // 文件超出个数限制时的钩子
    changeUplaodExceed: function changeUplaodExceed(files, fileList) {
      this.$message({
        showClose: true,
        message: '上传文件超出个数限制',
        type: 'warning'
      });
    },

    /* ****************************************************************** */

    /*                       checkbox全选组件                              */

    /* ****************************************************************** */
    handleCheckboxSelectKeys: function handleCheckboxSelectKeys() {
      var _this3 = this;

      if (this.value && this.item.optionProps.allValue && this.item.showOptions && this.item.showOptions.length > 0 && utils_toolApi.aspIncluds(this.value, this.item.optionProps.allValue)) {
        var allId = [];
        this.item.showOptions.forEach(function (i) {
          allId.push(i[_this3.item['option-value']]);
        });
        return allId;
      } else {
        return this.value || [];
      }
    },
    handleCheckAllChange: function handleCheckAllChange(val) {
      var _this4 = this;

      var allId = [];
      var label = [];

      if (val) {
        this.item.showOptions && this.item.showOptions.forEach(function (i) {
          allId.push(i[_this4.item['option-value']]);
          label.push(i[_this4.item['option-label']]);
        });
      }

      if (this.item.optionProps.isUserAllValue && this.item.optionProps.allLabel.length > 0 && this.item.optionProps.allValue.length > 0) {
        this.setColumnNameValue(val ? [this.item.optionProps.allValue] : []);
        this.setTargetNameValue(val ? this.item.optionProps.allLabel : '');
      } else {
        this.setColumnNameValue(val ? allId : []);
        var separator = this.item.optionProps.separator ? this.item.optionProps.separator : ';';
        this.setTargetNameValue(label.join(separator));
      }

      this.bindChange();
      this.isIndeterminate = false;
    },
    // checkbox change
    handleCheckedChange: function handleCheckedChange(value) {
      var checkedCount = value.length;
      var showOptionsLen = this.item.showOptions === undefined ? 0 : this.item.showOptions.length;
      this.checkAll = checkedCount === showOptionsLen;
      this.isIndeterminate = checkedCount > 0 && checkedCount < showOptionsLen;

      if (this.item.optionProps.isUserAllValue && this.item.optionProps.allLabel.length > 0 && this.item.optionProps.allValue.length > 0) {
        if (utils_toolApi.aspIncluds(this.value, this.item.optionProps.allValue) && !this.checkAll) {
          this.setColumnNameValue(value.length > 0 ? value : []);
        } else if (!utils_toolApi.aspIncluds(this.value, this.item.optionProps.allValue) && this.checkAll) {
          this.setColumnNameValue([this.item.optionProps.allValue]);
          this.setTargetNameValue(this.item.optionProps.allLabel);
        }
      }

      this.bindChange();
    },
    // checkbox 判断默认是否已被全选
    isCheckboxAll: function isCheckboxAll() {
      var _this5 = this;

      if (this.item.type === 'checkbox' && this.item.checkAll && this.item.showOptions && this.item.showOptions.length && this.value && this.value.length > 0) {
        if (this.item.optionProps.isUserAllValue && this.item.optionProps.allValue.length > 0 && utils_toolApi.aspIncluds(this.value, this.item.optionProps.allValue)) {
          this.checkAll = true;
        } else {
          var allCheckboxValue = this.item.showOptions.map(function (item) {
            return item[_this5.item['option-value']];
          });

          if (JSON.stringify(allCheckboxValue) === JSON.stringify(this.value) && allCheckboxValue.length) {
            this.checkAll = true;
          } else {
            this.checkAll = false;
          }
        }
      }
    },

    /* ****************************************************************** */

    /*                       业务--输入组组件                               */

    /* ****************************************************************** */
    changeAspStartInput: function changeAspStartInput(startInput) {
      // 更新起始值
      this.setColumnNameValue(startInput);
      this.sendMessage('aspInputRangeStart');
    },
    changeAspEndInput: function changeAspEndInput(endInput) {
      // 更新结束值
      this.setTargetNameValue(endInput);
      this.sendMessage('aspInputRangeEnd');
    },
    // 绑定选择渠道按钮点击事件
    handleClickChannelBtn: function handleClickChannelBtn() {
      // 发消息给外部
      this.sendMessage('setChannelList');
    },
    // 更新渠道list
    updateChannelList: function updateChannelList(list) {
      // 更新model中的值
      this.setColumnNameValue(list); // 发消息给外部

      this.sendMessage('updateChannelList');
    },

    /* ****************************************************************** */

    /*                       业务--日期组组件                               */

    /* ****************************************************************** */
    changeAspStartDate: function changeAspStartDate(startDate) {
      // 更新开始日期
      this.setColumnNameValue(startDate); // 发消息给外部

      this.sendMessage('aspDateRangeStart');
    },
    changeAspEndDate: function changeAspEndDate(endDate) {
      // 更新结束日期
      this.setTargetNameValue(endDate); // 发消息给外部

      this.sendMessage('aspDateRangeStart');
    },
    checkAspDateRange: function checkAspDateRange(rule, value, callback) {
      if (value === '' && this.item.required) {
        var message = this.item.label + '不可为空';
        callback(new Error(message));
      } else if (this.item.aspProps.compareSign.length > 0 && !utils_toolApi.compareTime(value, this.item.aspProps.compareSign, this.getTargetNameValue())) {
        if (this.item.aspProps.compareMessage.length > 0) {
          callback(new Error(this.item.aspProps.compareMessage));
        } else {
          callback(new Error('请配置校验失败的提示语!'));
        }
      } else {
        callback();
      }
    },
    loadDataRangeValidate: function loadDataRangeValidate() {
      if (this.item.type === 'AspDateRange') {
        this.item.rules.push({
          validator: this.checkAspDateRange,
          trigger: ['change', 'blur']
        });
      }
    },

    /* ****************************************************************** */

    /*                       业务--文件管理组件                              */

    /* ****************************************************************** */
    // webbas 专属组件 文件上传
    changeWebbasUpload: function changeWebbasUpload(_ref) {
      var groupId = _ref.groupId,
          fileId = _ref.fileId;
      // 更新groupId
      this.setColumnNameValue(groupId); // 设置模型中对应用label值

      this.setTargetNameValue(fileId); // 发消息给外部

      this.sendMessage('upload');
    },
    changeWebbasDelete: function changeWebbasDelete(_ref2) {
      var fileId = _ref2.fileId,
          delFileList = _ref2.delFileList;

      if (fileId === undefined || fileId.length === 0) {
        this.setColumnNameValue('');
      } // 本地删除的附件id


      if (this.model) {
        if (this.model.delFileList === undefined) {
          this.$set(this.model, 'delFileList', []);
        }

        this.model.delFileList.push(delFileList);
      } // 设置模型中对应用label值


      this.setTargetNameValue(fileId); // 发消息给外部

      this.sendMessage('delete');
    },
    queryWebbaseNullFile: function queryWebbaseNullFile() {
      this.setColumnNameValue('');
    },

    /* ****************************************************************** */

    /*                        业务--select远程搜索组件                       */

    /* ****************************************************************** */
    // 值发生变化时，包括第一次初始化值
    watchValueChange: function watchValueChange(val, oldVal) {
      // 远程搜索组件，options列表只能在数据模型赋值后，才能触发搜索生成optins列表
      if (this.item.type === 'select' && this.item.props.remote) {
        var targetValue = this.getTargetNameValue();
        targetValue = targetValue !== undefined ? targetValue : ''; // 兼容组件加载时就去取全量option

        if (targetValue && targetValue.length >= 0) {
          this.remoteSearchAPI(targetValue);
        } // 远程搜索组件，允许输入内容（进入页面，第一次被赋值，才需要此功能）


        if (this.item.searchProps.isShowInput && val !== undefined && oldVal === undefined) {
          var _targetValue = this.getTargetNameValue();

          if (val !== _targetValue) {
            // 防止value监听死循环
            this.setColumnNameValue(_targetValue);
          }
        }
      }
    },
    // 当失去焦点时触发
    remoteMethodBlur: function remoteMethodBlur() {
      this.sendMessage('blur');
    },
    // 当获得焦点时触发
    remoteMethodFocus: function remoteMethodFocus() {
      this.sendMessage('focus');
    },
    // 选中值发生变化时触发
    remoteMethodChange: function remoteMethodChange(e) {
      var _t = this;

      this.item.options.forEach(function (item) {
        if (!_t.item.props.multiple && item[_t.item['option-value']] === e) {
          _t.setColumnNameValue(item[_t.item['option-value']]);

          _t.setTargetNameValue(item[_t.item['option-label']]);
        }
      });
      this.sendMessage('change');
    },
    // 可清空的单选模式下用户点击清空按钮时触发
    remoteMethodClear: function remoteMethodClear() {
      // 清除数据模型的值
      this.clearColumnNameValue(this);
      this.clearTargetNameValue(this); // 触发搜索

      this.remoteMethodSearch(''); // 发消息给外部

      this.sendMessage('clear');
    },
    // 远程搜索方法
    remoteMethodSearch: function remoteMethodSearch(val) {
      // 是否支持输入的内容直接显示
      if (this.item.searchProps.isShowInput) {
        this.setTargetNameValue(val);
        this.setColumnNameValue(val);
      } // 触发搜索


      this.remoteSearchAPI(val);
    },
    // 搜索接口
    remoteSearchAPI: function remoteSearchAPI(val) {
      var _this6 = this;

      var param = {};
      var remotePropName = this.item.searchProps.remotePropName ? this.item.searchProps.remotePropName : 'condition';
      param[remotePropName] = val;
      this.item[remotePropName] = val;

      if (!(this.item.searchProps.apiName && this.item.searchProps.apiName.length > 0)) {
        return;
      }

      var urlStr = this.serverProps.localProxy + this.item.searchProps.apiName;

      if (this.$aspHttps === undefined || this.$aspHttps.asp_Post === undefined) {
        return;
      }

      var _t = this;

      this.$aspHttps.asp_Post(urlStr, param).then(function (response) {
        if (parseInt(response[_this6.serverProps.statusKey]) === parseInt(_this6.serverProps.statusValue)) {
          var optionList = response[_this6.serverProps.dataKey];

          if (optionList && optionList.length > 0) {
            _this6.$nextTick(function () {
              _t.item.options = response[_t.serverProps.dataKey];
            });
          } else {
            _this6.$nextTick(function () {
              _t.item.options = [];
            });
          }
        } else {
          _this6.$nextTick(function () {
            _t.item.options = [];
          });
        }
      });
    },

    /* ****************************************************************** */

    /*                        数据模型API                                  */

    /* ****************************************************************** */
    // 取TargetName值
    getTargetNameValue: function getTargetNameValue() {
      if (this.isTableFormItem) {
        if (this.model && this.parent && this.item.targetName && this.parent.columnName && this.model[this.parent.columnName] && this.model[this.parent.columnName].length > this.index) {
          return this.model[this.parent.columnName][this.index][this.item.targetName];
        }
      } else {
        if (this.model && this.item.targetName && this.model[this.item.targetName]) {
          return this.model[this.item.targetName];
        }
      }

      return undefined;
    },
    // 设置ColumnName值
    setColumnNameValue: function setColumnNameValue(value) {
      if (this.isTableFormItem) {
        if (this.model && this.parent && this.parent.columnName && this.model[this.parent.columnName] && this.model[this.parent.columnName].length > this.index) {
          this.$set(this.model[this.parent.columnName][this.index], this.item.columnName, value);
        }
      } else {
        if (this.item.columnName && this.model) {
          this.$set(this.model, this.item.columnName, value);
        }
      }
    },
    // 设置TargetName值
    setTargetNameValue: function setTargetNameValue(value) {
      var propValue = value === undefined ? '' : value;

      if (this.isTableFormItem) {
        if (this.model && this.parent && this.parent.columnName && this.model[this.parent.columnName] && this.model[this.parent.columnName].length > this.index) {
          this.$set(this.model[this.parent.columnName][this.index], this.item.targetName, propValue);
        }
      } else {
        if (this.item.targetName && this.model) {
          this.$set(this.model, this.item.targetName, propValue);
        }
      }
    },
    // 清除ColumnName值
    clearColumnNameValue: function clearColumnNameValue(_t) {
      this.setColumnNameValue('');
    },
    // 清除TargetName值
    clearTargetNameValue: function clearTargetNameValue(_t, value) {
      this.setTargetNameValue('');
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/form-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var asp_smart_form_form_itemvue_type_script_lang_js_ = (form_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/asp-smart-form/form-item.vue?vue&type=style&index=0&id=c454d518&scoped=true&lang=scss&
var form_itemvue_type_style_index_0_id_c454d518_scoped_true_lang_scss_ = __webpack_require__(60);

// CONCATENATED MODULE: ./src/components/asp-smart-form/form-item.vue






/* normalize component */

var form_item_component = Object(componentNormalizer["a" /* default */])(
  asp_smart_form_form_itemvue_type_script_lang_js_,
  form_itemvue_type_template_id_c454d518_scoped_true_render,
  form_itemvue_type_template_id_c454d518_scoped_true_staticRenderFns,
  false,
  null,
  "c454d518",
  null
  
)

/* hot reload */
if (false) { var form_item_api; }
form_item_component.options.__file = "src/components/asp-smart-form/form-item.vue"
/* harmony default export */ var form_item = (form_item_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/form-tool-list.vue?vue&type=template&id=84baf5bc&scoped=true&
var form_tool_listvue_type_template_id_84baf5bc_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "form-tool-list", class: "is_" + _vm.position },
    [
      _vm._l(_vm.buttonList, function(item, key) {
        return [
          !_vm.getHidden(item)
            ? _c(
                "el-button",
                {
                  key: key,
                  class: item.class,
                  style: { float: item.align, margin: "0 4px" },
                  attrs: {
                    loading: _vm.loading(item),
                    type: item.type || "",
                    icon: item.icon,
                    disabled: _vm.getDisabled(item)
                  },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.handleCommand(item)
                    }
                  }
                },
                [_vm._v(_vm._s(item.label))]
              )
            : _vm._e()
        ]
      })
    ],
    2
  )
}
var form_tool_listvue_type_template_id_84baf5bc_scoped_true_staticRenderFns = []
form_tool_listvue_type_template_id_84baf5bc_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/components/asp-smart-form/form-tool-list.vue?vue&type=template&id=84baf5bc&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/form-tool-list.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var form_tool_listvue_type_script_lang_js_ = ({
  name: 'FormToolList',
  computed: {
    loading: function loading(item) {
      return function (item) {
        if (item.loading) {
          return true;
        }

        return false;
      };
    }
  },
  props: {
    buttonList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 表格中按钮
    rowData: {
      type: Object,
      default: function _default() {}
    },
    position: {
      type: String,
      default: function _default() {
        return 'left';
      }
    },
    parent: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    index: {
      type: Number,
      default: -1
    },
    isTableFormItem: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 点击事件
    handleCommand: function handleCommand(item) {
      if (this.isTableFormItem) {
        item.parentName = this.parent.columnName;
      }

      this.$emit('on', {
        item: item,
        parent: this.parent,
        type: 'click',
        index: this.index,
        row: this.rowData
      });
    },
    // 隐藏
    getHidden: function getHidden(item) {
      if (this.rowData && this.rowData[item.columnName + '_forceHidden'] !== undefined) {
        return this.rowData[item.columnName + '_forceHidden'];
      }

      if (item.forceHidden !== undefined) {
        return item.forceHidden;
      }

      var isAuth = smart_convert_machine.scm_compIsHaveAuth(item.authSwitch, item.authId);
      return isAuth ? item.hidden : !isAuth;
    },
    // 禁用
    getDisabled: function getDisabled(item) {
      if (this.rowData && this.rowData[item.columnName + '_forceDisabled'] !== undefined) {
        return this.rowData[item.columnName + '_forceDisabled'];
      }

      if (item.forceDisabled !== undefined) {
        return item.forceDisabled;
      }

      return item.disabled;
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/form-tool-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var asp_smart_form_form_tool_listvue_type_script_lang_js_ = (form_tool_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/asp-smart-form/form-tool-list.vue?vue&type=style&index=0&id=84baf5bc&lang=scss&scoped=true&
var form_tool_listvue_type_style_index_0_id_84baf5bc_lang_scss_scoped_true_ = __webpack_require__(62);

// CONCATENATED MODULE: ./src/components/asp-smart-form/form-tool-list.vue






/* normalize component */

var form_tool_list_component = Object(componentNormalizer["a" /* default */])(
  asp_smart_form_form_tool_listvue_type_script_lang_js_,
  form_tool_listvue_type_template_id_84baf5bc_scoped_true_render,
  form_tool_listvue_type_template_id_84baf5bc_scoped_true_staticRenderFns,
  false,
  null,
  "84baf5bc",
  null
  
)

/* hot reload */
if (false) { var form_tool_list_api; }
form_tool_list_component.options.__file = "src/components/asp-smart-form/form-tool-list.vue"
/* harmony default export */ var form_tool_list = (form_tool_list_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/form-item-text.vue?vue&type=template&id=3bcca316&scoped=true&
var form_item_textvue_type_template_id_3bcca316_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form-item",
    {
      class: [
        "required-star__" + _vm.formConfig.starPostion,
        { html: _vm.item.type === "html" }
      ],
      staticStyle: { "line-height": "1" },
      attrs: { label: _vm.formItemLabel, "label-width": _vm.formItemLabelWidth }
    },
    [
      _vm.item.type === "webbase-upload"
        ? _c(
            "div",
            [
              _c("asp-att-detail", {
                attrs: {
                  "group-id": _vm.value,
                  "group-old-id": _vm.oldValue,
                  isCompare: _vm.isCompare && _vm.item.isCompare,
                  prefix: _vm.item.wbProps.prefix,
                  nodeEnv: _vm.serverProps.nodeEnv,
                  localProxy: _vm.serverProps.localProxy,
                  nigxProxy: _vm.serverProps.nigxProxy
                }
              })
            ],
            1
          )
        : _c("div", [
            _c("div", { staticClass: "labelWarp" }, [
              _c("p", { staticClass: "normalLabel labelStyle" }, [
                _vm._v("\n        " + _vm._s(this.showValue) + "\n      ")
              ]),
              _vm.needCompareShow
                ? _c("span", { staticStyle: { color: "#e25856" } }, [
                    _c("p", { staticClass: "compareLabel labelStyle" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s("变更前：" + this.showOldValue) +
                          "\n        "
                      )
                    ])
                  ])
                : _vm._e()
            ])
          ])
    ]
  )
}
var form_item_textvue_type_template_id_3bcca316_scoped_true_staticRenderFns = []
form_item_textvue_type_template_id_3bcca316_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/components/asp-smart-form/form-item-text.vue?vue&type=template&id=3bcca316&scoped=true&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/components/asp-att-detail.vue?vue&type=template&id=352a3386&
var asp_att_detailvue_type_template_id_352a3386_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "aspFildDetail" },
    [
      _vm._l(_vm.dataList, function(item) {
        return [
          _c("div", { key: item.attachFileId, staticClass: "fileWarp" }, [
            _c(
              "span",
              {
                class: [
                  item.type === "add"
                    ? "fileAdd"
                    : item.type === "delete"
                    ? "fileDelete"
                    : "fileNormal",
                  "file"
                ],
                attrs: { type: "primary" },
                on: {
                  click: function($event) {
                    return _vm.handleUpload(item.attachFileId)
                  }
                }
              },
              [_vm._v("\n        " + _vm._s(item.fileName) + "\n      ")]
            )
          ])
        ]
      }),
      _vm.showfileCompareTip
        ? _c("div", { staticClass: "fileDesc" }, [
            _vm._v("(红色表示新增，蓝色表示不变，带删除线表示删除)")
          ])
        : _vm._e()
    ],
    2
  )
}
var asp_att_detailvue_type_template_id_352a3386_staticRenderFns = []
asp_att_detailvue_type_template_id_352a3386_render._withStripped = true


// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-att-detail.vue?vue&type=template&id=352a3386&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/components/asp-att-detail.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var asp_att_detailvue_type_script_lang_js_ = ({
  name: 'AspAttDetail',
  props: {
    groupId: {
      type: String,
      default: ''
    },
    groupOldId: {
      type: String,
      default: ''
    },
    isCompare: {
      type: Boolean,
      default: false
    },
    nodeEnv: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: '/web/support/v1'
    },
    localProxy: {
      type: String,
      default: ''
    },
    nigxProxy: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      dataList: [],
      newData: null,
      oldData: [],
      isNeedCompare: false,
      showfileCompareTip: false
    };
  },
  computed: {},
  watch: {
    groupId: {
      handler: function handler(val, oldVal) {
        if (this.isCompare) {
          this.isNeedCompare = true;
        }

        this.initNewFile(val);
      },
      immediate: true
    },
    groupOldId: {
      handler: function handler(val, oldVal) {
        if (this.isCompare && val) {
          this.isNeedCompare = true;
        }

        this.initOldFile(val);
      },
      immediate: true
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    // 查询最新文件列表
    initNewFile: function initNewFile(val) {
      if (!val) {
        this.dataList = [];
        return;
      }

      var urlStr = this.localProxy + this.prefix + '/attachment/list';

      if (this.$aspHttps === undefined || this.$aspHttps.asp_Post === undefined) {
        return;
      }

      var param = {
        attachGroupId: val
      };

      var _t = this;

      this.$aspHttps.asp_Post(urlStr, param).then(function (response) {
        if (parseInt(response.status) === 200) {
          if (_t.isNeedCompare) {
            _t.newData = response.data;

            _t.fileCompare();
          } else {
            _t.dataList = response.data;
          }
        }
      });
    },
    // 查询老文件列表
    initOldFile: function initOldFile(val) {
      if (!val) {
        return;
      }

      var urlStr = this.localProxy + '/web/business/v1/common/commonAttachmentData';

      if (this.$aspHttps === undefined || this.$aspHttps.asp_Post === undefined) {
        return;
      }

      var oldParam = {
        attachGroupId: val
      };

      var _t = this;

      this.$aspHttps.asp_Post(urlStr, oldParam).then(function (response) {
        if (parseInt(response.status) === 200) {
          if (_t.isNeedCompare) {
            _t.oldData = response.data;

            if (_t.newData !== null) {
              _t.fileCompare();
            }
          }
        }
      });
    },
    // 对比文件列表
    fileCompare: function fileCompare() {
      var _this = this;

      var newFileIdList = []; // 将新的附件集标注为新增

      this.newData.map(function (item) {
        item.type = 'add';
        newFileIdList.push(item.attachFileId);
      });
      this.oldData.map(function (oldItem) {
        // 如果旧的文件id在新的中存在 则去掉新增标识
        if (newFileIdList.includes(oldItem.attachFileId)) {
          _this.newData.map(function (newItem) {
            if (newItem.attachFileId === oldItem.attachFileId) {
              newItem.type = '';
            }
          });
        } else {
          // 不存在则标注为删除
          oldItem.type = 'delete';

          _this.newData.push(oldItem);
        }
      }, this);
      this.dataList = this.newData;
      this.isShowfileCompareTip(this.dataList);
    },
    // 是否展示文件对比提示信息
    isShowfileCompareTip: function isShowfileCompareTip(list) {
      var _this2 = this;

      this.showfileCompareTip = false;
      if (!list) return;
      list.map(function (item) {
        if (!_this2.showfileCompareTip && ['add', 'delete'].includes(item.type)) {
          _this2.showfileCompareTip = true;
        }
      });
    },
    // 下载附件
    handleUpload: function handleUpload(fileId) {
      var urlStr = this.prefix + '/attachment/downloadFile?attachFileId=' + fileId;

      if (this.nodeEnv === 'production') {
        urlStr = this.nigxProxy + urlStr;
      } else {
        urlStr = this.localProxy + urlStr;
      } // console.log("附件下载URL:" + urlStr)


      window.location.href = urlStr;
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-att-detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_asp_att_detailvue_type_script_lang_js_ = (asp_att_detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/asp-smart-form/components/asp-att-detail.vue?vue&type=style&index=0&lang=scss&
var asp_att_detailvue_type_style_index_0_lang_scss_ = __webpack_require__(64);

// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-att-detail.vue






/* normalize component */

var asp_att_detail_component = Object(componentNormalizer["a" /* default */])(
  components_asp_att_detailvue_type_script_lang_js_,
  asp_att_detailvue_type_template_id_352a3386_render,
  asp_att_detailvue_type_template_id_352a3386_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var asp_att_detail_api; }
asp_att_detail_component.options.__file = "src/components/asp-smart-form/components/asp-att-detail.vue"
/* harmony default export */ var asp_att_detail = (asp_att_detail_component.exports);
// CONCATENATED MODULE: ./src/components/asp-smart-form/form-item-text-mixins/textMixins.js
/**
* Create by TurboC on 2019/02/17.
*/
/* harmony default export */ var textMixins = ({
  data: function data() {
    return {};
  },
  methods: {
    /* ****************************************************************** */

    /*                        数据模型API                                  */

    /* ****************************************************************** */
    // 取TargetName值
    getTargetNameValue: function getTargetNameValue() {
      var tmpModel = this.isCompare ? this.newModel : this.model;
      return this.getNewValue(tmpModel, this.item.targetName);
    },
    // 取new model的值
    getNewValue: function getNewValue(tmpModel, name) {
      if (this.isTableFormItem) {
        if (tmpModel && this.parent && name && this.parent.columnName && tmpModel[this.parent.columnName] && tmpModel[this.parent.columnName].length > this.index) {
          return tmpModel[this.parent.columnName][this.index][name];
        }
      } else {
        if (tmpModel && name && tmpModel[name]) {
          return tmpModel[name];
        }
      }

      return undefined;
    },
    // 取old TargetName值
    getTargetNameOldValue: function getTargetNameOldValue() {
      var tmpModel = this.isCompare ? this.newModel : this.model;
      return this.getOldValue(tmpModel, this.item.targetName);
    },
    // 取old model的值
    getOldValue: function getOldValue(tmpModel, name) {
      if (this.isTableFormItem) {
        var oldIndex = -1;

        if (tmpModel && this.parent && this.parent.columnName && tmpModel[this.parent.columnName] && tmpModel[this.parent.columnName].length > this.index) {
          oldIndex = tmpModel[this.parent.columnName][this.index]['old-index'];
        }

        if (this.oldModel && this.oldModel[this.parent.columnName] && oldIndex >= 0 && name && this.oldModel[this.parent.columnName].length > oldIndex) {
          return this.oldModel[this.parent.columnName][oldIndex][name];
        }
      } else {
        if (this.oldModel && name && this.oldModel[name]) {
          return this.oldModel[name];
        }
      }

      return undefined;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/form-item-text.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import aspAttDetail from './components/pcc3040/asp-att-detail'






/* harmony default export */ var form_item_textvue_type_script_lang_js_ = ({
  name: 'FormItem',
  mixins: [dy_old, textMixins],
  props: ['dynamic', 'item', 'value', 'oldValue', 'status', 'formConfig', 'isTableFormItem', 'isNoLabel', 'parent', 'index', 'model', 'newModel', 'oldModel', 'isCompare'],
  components: {
    aspAttDetail: asp_att_detail
  },
  created: function created() {
    smart_property_machine.spm_initOptionList(this, this.item, this.serverProps);
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      serverProps: this.formConfig.serverProps,
      showValue: '',
      showOldValue: ''
    };
  },
  computed: {
    formItemLabelWidth: function formItemLabelWidth() {
      return smart_property_machine.spm_formItemLabelWidth(this.item, this.formConfig, this.isNoLabel);
    },
    formItemLabel: function formItemLabel() {
      return smart_property_machine.spm_formItemLabel(this.item, this.isNoLabel);
    },
    formItemProp: function formItemProp() {
      return smart_property_machine.spm_formItemProp(this.isTableFormItem, this.item, this.parent, this.index);
    },
    // 是否需要对比展示
    needCompareShow: function needCompareShow() {
      if (this.isCompare && this.item.isCompare && this.showValue !== this.showOldValue) {
        if (this.isTableFormItem) {
          // 表格表单组件
          if (this.parent.compareProps && this.parent.compareProps.length > 0) {
            return this.newModel[this.parent.columnName][this.index].modifyTypeDesc === '变更';
          }
        } else {
          // 非表格表单组件
          return true;
        }
      }

      return false;
    }
  },
  watch: {
    value: {
      handler: function handler(val, oldVal) {
        var tmpModel = this.isCompare ? this.newModel : this.model; // 自定义映射的值

        var tmpValue = smart_property_machine.spm_getLabelMappingValue(tmpModel, this.parent, this.item, this.index, this.isTableFormItem, this.status);

        if (tmpValue !== undefined) {
          this.showValue = tmpValue;
        } else {
          var targetValue = this.getTargetNameValue();

          if (this.item.type === 'AspDateRange') {
            this.showValue = smart_property_machine.spm_getRangeCompShowValue(val, targetValue, this.item);
          } else if (smart_property_machine.spm_isOptionComp(this.item)) {
            if (this.item.isNoConvertLabel === undefined || !this.item.isNoConvertLabel) {
              this.showValue = smart_property_machine.spm_getOptionCompShowValue(val, targetValue, this.item);
            } else {
              this.showValue = targetValue;
            }
          } else {
            this.showValue = val === undefined ? '' : val;
          }
        }

        if (this.item.type === 'switch') {
          this.showValue = val ? '是' : '否';
        } else if (this.item.type === 'text' && val && val.length > 0) {
          if (this.item.arrayDetaSwitch && this.item.arrayFormatSeparator) {
            this.showValue = val.join(this.item.arrayFormatSeparator.trim());
          } else if (this.item.dateDetaSwitch && this.item.dateDateFormat && this.item.dateDateFormat.length > 0) {
            if (this.item.dateDateFormat === 'yyyy-MM-dd') {
              // 时间格式化，返回格式
              this.showValue = utils_toolApi.formatTimeDd(val);
            } else if (this.item.dateDateFormat === 'yyyy-MM-dd hh:mm:ss') {
              // 时间格式化，返回格式
              this.showValue = utils_toolApi.formatTimeSs(val);
            }
          }
        } // 组件联动操作


        this.compDynamicOpt();
      },
      immediate: true
    },
    oldValue: {
      handler: function handler(val, oldVal) {
        // 组件显示的值
        var tmpValue = smart_property_machine.spm_getLabelMappingValue(this.oldModel, this.parent, this.item, this.index, this.isTableFormItem, this.status);

        if (tmpValue !== undefined) {
          this.showOldValue = tmpValue;
        } else {
          var targetValue = this.getTargetNameOldValue();

          if (this.item.type === 'AspDateRange') {
            this.showOldValue = smart_property_machine.spm_getRangeCompShowValue(val, targetValue, this.item);
          } else if (smart_property_machine.spm_isOptionComp(this.item)) {
            if (this.item.isNoConvertLabel === undefined || !this.item.isNoConvertLabel) {
              this.showOldValue = smart_property_machine.spm_getOptionCompShowValue(val, targetValue, this.item);
            } else {
              this.showOldValue = targetValue;
            }
          } else {
            this.showOldValue = val === undefined ? '' : val;
          }
        }

        if (this.item.type === 'switch') {
          this.showValue = val ? '是' : '否';
        } else if (this.item.type === 'text' && val && val.length > 0) {
          if (this.item.arrayDetaSwitch && this.item.arrayFormatSeparator) {
            this.showValue = val.join(this.item.arrayFormatSeparator.trim());
          } else if (this.item.dateDetaSwitch && this.item.dateDateFormat && this.item.dateDateFormat.length > 0) {
            if (this.item.dateDateFormat === 'yyyy-MM-dd') {
              // 时间格式化，返回格式
              this.showValue = utils_toolApi.formatTimeDd(val);
            } else if (this.item.dateDateFormat === 'yyyy-MM-dd hh:mm:ss') {
              // 时间格式化，返回格式
              this.showValue = utils_toolApi.formatTimeSs(val);
            }
          }
        } // 组件联动操作


        this.compDynamicOpt();
      },
      immediate: true
    },
    // 解决内部不发起取option, 由外部发起取option, 然后更新label
    'item.options': {
      handler: function handler(val, oldVal) {
        if (val !== undefined) {
          // 原始值
          var oldTarget = this.oldValue !== undefined ? smart_property_machine.spm_getOptionLabel(this.item, this.item.options, this.oldValue) : undefined;
          this.showOldValue = oldTarget !== undefined ? oldTarget : this.showOldValue; // 最新值

          var newTarget = this.value !== undefined ? smart_property_machine.spm_getOptionLabel(this.item, this.item.options, this.value) : undefined;
          this.showValue = newTarget !== undefined ? newTarget : this.showValue;
        }
      },
      immediate: true
    },
    'item.optionProps.apiParam': function itemOptionPropsApiParam(val) {
      if (val) {
        smart_property_machine.spm_initOptionList(this, this.item, this.serverProps);
      }
    },
    // 监听每次渲染的时间，若val 和 oldVal 同时存在，则表明在数据更改了，但是未重新渲染DOM。检查到render_time变化时，需要重新加载获取options
    'item.render_time': {
      handler: function handler(val, oldVal) {
        if (val && oldVal) {
          smart_property_machine.spm_initOptionList(this, this.item, this.serverProps);
        }
      }
    }
  },
  methods: {
    // 组件联动操作
    compDynamicOpt: function compDynamicOpt() {
      this.startDynamicOpt();
      var pararm = {
        _t: this,
        dynamic: this.dynamic,
        formList: this.formList,
        model: this.model,
        item: this.item,
        parent: this.parent,
        index: this.index,
        status: this.status,
        isSubForm: this.isTableFormItem,
        serverProps: this.serverProps
      };
      smart_dynamic_machine.start_smart_comp_dynamic(pararm);
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/form-item-text.vue?vue&type=script&lang=js&
 /* harmony default export */ var asp_smart_form_form_item_textvue_type_script_lang_js_ = (form_item_textvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/asp-smart-form/form-item-text.vue?vue&type=style&index=0&id=3bcca316&scoped=true&lang=scss&
var form_item_textvue_type_style_index_0_id_3bcca316_scoped_true_lang_scss_ = __webpack_require__(66);

// CONCATENATED MODULE: ./src/components/asp-smart-form/form-item-text.vue






/* normalize component */

var form_item_text_component = Object(componentNormalizer["a" /* default */])(
  asp_smart_form_form_item_textvue_type_script_lang_js_,
  form_item_textvue_type_template_id_3bcca316_scoped_true_render,
  form_item_textvue_type_template_id_3bcca316_scoped_true_staticRenderFns,
  false,
  null,
  "3bcca316",
  null
  
)

/* hot reload */
if (false) { var form_item_text_api; }
form_item_text_component.options.__file = "src/components/asp-smart-form/form-item-text.vue"
/* harmony default export */ var form_item_text = (form_item_text_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/components/asp-nav-tabs.vue?vue&type=template&id=0028e8b0&scoped=true&
var asp_nav_tabsvue_type_template_id_0028e8b0_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "progressBar" }, [
    _c(
      "div",
      { staticClass: "btnGroup", style: _vm.setbutTop() },
      [
        _c("formToolList", {
          attrs: { buttonList: _vm.buttonList },
          on: { on: _vm.bindEvents }
        })
      ],
      1
    ),
    _c("div", { staticClass: "navGroup", style: _vm.setTop() }, [
      _c(
        "ul",
        _vm._l(_vm.tabList, function(item, i) {
          return _c(
            "li",
            {
              key: item.value,
              class: { active: i === _vm.n },
              on: {
                click: function($event) {
                  return _vm.tabNav(i, item.value)
                }
              }
            },
            [_c("span", [_vm._v(_vm._s(item.label))])]
          )
        }),
        0
      )
    ])
  ])
}
var asp_nav_tabsvue_type_template_id_0028e8b0_scoped_true_staticRenderFns = []
asp_nav_tabsvue_type_template_id_0028e8b0_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-nav-tabs.vue?vue&type=template&id=0028e8b0&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/components/asp-nav-tabs.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var asp_nav_tabsvue_type_script_lang_js_ = ({
  name: 'AspNevTabs',
  props: {
    navTabList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    formList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    buttonList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  components: {
    formToolList: form_tool_list
  },
  data: function data() {
    return {
      tabList: [],
      n: 0,
      // tab激活位
      barTop: '95px'
    };
  },
  computed: {},
  watch: {},
  mounted: function mounted() {
    document.addEventListener('scroll', this.handleScroll, true);
  },
  created: function created() {
    this.setNavTabOptions();
  },
  methods: {
    setNavTabOptions: function setNavTabOptions() {
      var _this = this;

      var options = [];
      var formList = this.formList || [];
      formList.map(function (item) {
        if (_this.navTabList.includes(item.columnName)) {
          options.push({
            label: item.label,
            value: item.columnName
          });
        }
      });
      this.tabList = options;
    },
    tabNav: function tabNav(i, el) {
      this.n = i;
      var setHeight = document.querySelector(".".concat(el));
      var topHeight = i === 0 ? 0 : setHeight.offsetTop - 98;
      this.$nextTick(function () {
        // console.log(topHeight, 'topHeight')
        var mainEle = document.querySelector('.frame-main-content');

        if (mainEle && mainEle.scrollTop !== undefined) {
          mainEle.scrollTop = topHeight;
        }
      });
    },
    handleScroll: function handleScroll() {
      var mainEle = document.querySelector('.frame-main-content');

      if (mainEle && mainEle.scrollTop > 1) {
        this.barTop = '86px';
      } else {
        this.barTop = '95px';
      }
    },
    setbutTop: function setbutTop() {
      return {
        top: this.barTop
      };
    },
    setTop: function setTop() {
      return {
        top: this.barTop
      };
    },
    bindEvents: function bindEvents(_ref) {
      var item = _ref.item,
          parent = _ref.parent,
          type = _ref.type,
          index = _ref.index,
          row = _ref.row;
      this.$emit('on', {
        item: item,
        parent: parent,
        type: type,
        index: index,
        row: row
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-nav-tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_asp_nav_tabsvue_type_script_lang_js_ = (asp_nav_tabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/asp-smart-form/components/asp-nav-tabs.vue?vue&type=style&index=0&id=0028e8b0&lang=scss&scoped=true&
var asp_nav_tabsvue_type_style_index_0_id_0028e8b0_lang_scss_scoped_true_ = __webpack_require__(68);

// CONCATENATED MODULE: ./src/components/asp-smart-form/components/asp-nav-tabs.vue






/* normalize component */

var asp_nav_tabs_component = Object(componentNormalizer["a" /* default */])(
  components_asp_nav_tabsvue_type_script_lang_js_,
  asp_nav_tabsvue_type_template_id_0028e8b0_scoped_true_render,
  asp_nav_tabsvue_type_template_id_0028e8b0_scoped_true_staticRenderFns,
  false,
  null,
  "0028e8b0",
  null
  
)

/* hot reload */
if (false) { var asp_nav_tabs_api; }
asp_nav_tabs_component.options.__file = "src/components/asp-smart-form/components/asp-nav-tabs.vue"
/* harmony default export */ var asp_nav_tabs = (asp_nav_tabs_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/form-item-box.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // import toolApi from './utils/toolApi.js'




 // import smartDynamicMachine from './smart-machine/smart-dynamic-machine/index'



/* harmony default export */ var form_item_boxvue_type_script_lang_js_ = ({
  name: 'FormItemBox',
  mixins: [],
  props: {
    formList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    item: {
      type: Object,
      default: function _default() {}
    },
    formConfig: {
      type: Object,
      default: function _default() {}
    },
    dynamic: {
      type: Object,
      default: function _default() {}
    },
    model: {
      type: Object,
      default: function _default() {}
    },
    newModel: {
      type: Object,
      default: function _default() {}
    },
    oldModel: {
      type: Object,
      default: function _default() {}
    },
    virtualModel: {
      type: Object,
      default: function _default() {}
    },
    isCompare: {
      type: Boolean,
      default: false
    },
    status: {
      type: String
    },
    parent: {
      type: Object,
      default: function _default() {
        return undefined;
      }
    },
    index: {
      type: Number,
      default: -1
    },
    isTableFormItem: {
      type: Boolean,
      default: false
    },
    isNoLabel: {
      type: Boolean,
      default: false
    }
  },
  inject: ['getAllSlotNamePro'],
  computed: {
    // 获取所有的slotName
    getAllSlotName: function getAllSlotName() {
      return utils_getAllSlotName(this.formList);
    },
    // 组件是否需要转换成label状态
    needConvertLabel: function needConvertLabel() {
      var tmpModel = this.isCompare ? this.newModel : this.model;
      return smart_convert_machine.scm_isNeedConvertLabelComp(tmpModel, this.item, this.parent, this.index, this.isTableFormItem, this.status);
    },
    // 子表单的操作列表头，是否需要显示新增图标
    isNeedShowAddComp: function isNeedShowAddComp() {
      return function (tableItem) {
        return tableItem['show-add'] && smart_status_machine.ssm_compareStatusResult(tableItem.showAddStatus, this.status);
      };
    },
    // 子表单操作列隐藏显示开关
    isNeedShowOperationColumn: function isNeedShowOperationColumn() {
      return smart_convert_machine.scm_isNeedShowOperationColumn(this.item, this.status);
    },
    // 子表单多选列隐藏显示开关
    isNeedShowSelectionColumn: function isNeedShowSelectionColumn() {
      return function (tableItem) {
        return tableItem.selection && smart_status_machine.ssm_compareStatusResult(tableItem.selectionStatus, this.status);
      };
    },
    // 子表单单选列隐藏显示开关
    isNeedShowSingleSelection: function isNeedShowSingleSelection() {
      return function (tableItem) {
        return tableItem['show-single-selection'] && smart_status_machine.ssm_compareStatusResult(tableItem.singleSelectionStatus, this.status);
      };
    },
    // 子表单序号列隐藏显示开关
    isNeedShowIndexColumn: function isNeedShowIndexColumn() {
      return function (tableItem) {
        return tableItem['show-index'] && smart_status_machine.ssm_compareStatusResult(tableItem.showIndexStatus, this.status);
      };
    },
    // 组件显示/隐藏控制：显示/false, 隐藏/true
    isNeedShowComp: function isNeedShowComp() {
      var tmpModel = this.isCompare ? this.newModel : this.model;
      var hidden = smart_convert_machine.scm_isNeedShowComp(tmpModel, this.item, this.parent, this.index, this.isTableFormItem, this.status);
      var isAuth = smart_convert_machine.scm_compIsHaveAuth(this.item.authSwitch, this.item.authId);
      return isAuth ? hidden : !isAuth;
    },
    // 子表单组件最大高度
    subFormMaxHeight: function subFormMaxHeight() {
      return smart_property_machine.subFormMaxHeight(this.item, this.formConfig);
    },
    // 子表单数据源
    subFormSourceData: function subFormSourceData() {
      return smart_model_machine.smm_subFormSourceData(this.isCompare, this.newModel, this.model, this.item);
    },
    // 子表单列数据源
    subFormColumnSourceData: function subFormColumnSourceData() {
      return function (tableItem) {
        return smart_model_machine.smm_subFormColumnSourceData(tableItem, this.status);
      };
    },
    // 组件数据源
    cellSourceData: function cellSourceData() {
      return function (item) {
        return smart_model_machine.smm_compSourceData(this.model, this.item, this.parent, this.index, this.isTableFormItem);
      };
    },
    // 组件数据源(修改后)
    cellNewSourceData: function cellNewSourceData() {
      return function (item) {
        var tmpModel = this.isCompare ? this.newModel : this.model;
        return smart_model_machine.smm_compSourceData(tmpModel, this.item, this.parent, this.index, this.isTableFormItem);
      };
    },
    // 组件数据源(修改前)
    cellOldSourceData: function cellOldSourceData() {
      return function (item) {
        if (!this.isCompare) {
          return undefined;
        }

        var parentName = this.parent === undefined ? undefined : this.parent.columnName;
        var oldIndex = smart_model_machine.smm_getSubFormModelCellValue(this.newModel, 'old-index', parentName, this.index);
        return smart_model_machine.smm_compSourceData(this.oldModel, this.item, this.parent, oldIndex, this.isTableFormItem);
      };
    },
    // 按钮组组件：[显示/隐藏/禁用]
    hideButtonGroupComponent: function hideButtonGroupComponent() {
      return smart_property_machine.spm_hideButtonGroupComponent(this, this.item, this.status);
    }
  },
  watch: {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    if (this.item.type === 'normalChildList') {
      // 表格表单组件：智能校验器
      smart_validate_machine.svm_subFormValidateMachine(this, this.model, this.item);
    }
  },
  components: {
    formItem: form_item,
    formToolList: form_tool_list,
    formItemText: form_item_text,
    aspNavTabs: asp_nav_tabs
  },
  data: function data() {
    return {
      tableSingleSelection: '',
      activeNames: ['1'],
      tabsValue: 'tab_1'
    };
  },
  methods: {
    // 当某个单元格被双击击时会触发该事件
    tableDbClick: function tableDbClick(row, column, cell, event) {},
    tableRowRightClick: function tableRowRightClick(row, column, event) {},
    // 子表单组件：内容对比数据重新生成
    tableRowClass: function tableRowClass(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      if (row.modifyTypeDesc === '新增') {
        return 'modify-add';
      } else if (row.modifyTypeDesc === '删除') {
        return 'modify-delete';
      } else {
        return '';
      }
    },
    // 子表单组件：自定义表头，校验表头是否带星号
    renderHeader: function renderHeader(h, _ref2) {
      var column = _ref2.column,
          $index = _ref2.$index;
      var index = 0; // 展开行

      if (this.item.expand) {
        index += 1;
      } // 显示索引


      if (this.isNeedShowIndexColumn(this.item)) {
        index += 1;
      } // 显示多选列


      if (this.isNeedShowSelectionColumn(this.item)) {
        index += 1;
      } // 显示单选列


      if (this.isNeedShowSingleSelection(this.item)) {
        index += 1;
      }

      var required = smart_validate_machine.sf_isShowSubFormHeaderRequerd(this, this.item, this.status, $index - index);
      var label = this.subFormColumnSourceData(this.item)[$index - index].label || '';

      if (required) {
        var titleContent = '';

        if (this.formConfig.starPostion === 'left') {
          titleContent = [h('i', {
            style: {
              color: '#ff5555',
              paddingRight: '3px'
            }
          }, '*'), label];
        } else {
          titleContent = [label, h('i', {
            style: {
              color: '#ff5555',
              paddingLeft: '3px'
            }
          }, '*')];
        }

        return h('span', {}, titleContent);
      } else {
        return h('span', label);
      }
    },
    // 子表单组件--多选操作
    handleSelectionChange: function handleSelectionChange(selectList) {
      this.item.interactive = 'child_form_select_data';
      this.sendMessage(this.item, this.parent, 'click', 0, undefined, undefined, selectList);
    },
    // 表格单选
    handleSingleSelection: function handleSingleSelection() {// this.bindEvents({ item: this.item, type: 'singleSelection', subFormSelectData: this.tableData[this.tableSingleSelection] })
    },
    // 子表单组件--增加表格行数
    handleAddTable: function handleAddTable() {
      this.item.interactive = 'child_form_add_header';
      this.sendMessage(this.item, this.parent, 'click');
    },
    // 事件绑定:
    bindEvents: function bindEvents(_ref3) {
      var item = _ref3.item,
          parent = _ref3.parent,
          type = _ref3.type,
          index = _ref3.index,
          row = _ref3.row,
          fileData = _ref3.fileData,
          subFormSelectData = _ref3.subFormSelectData;
      this.sendMessage(item, parent, type, index, row, fileData, subFormSelectData);
    },
    // 组件给外部转发消息
    sendMessage: function sendMessage(item, parent, type, index, row, fileData, subFormSelectData) {
      this.$emit('on', {
        item: item,
        parent: parent,
        type: type,
        index: index,
        row: row,
        fileData: fileData,
        subFormSelectData: subFormSelectData
      });
    },
    // 参数
    getParam: function getParam() {
      return {
        _t: this,
        dynamic: this.dynamic,
        formList: this.formList,
        model: this.model,
        item: this.item,
        parent: this.parent,
        index: this.index,
        status: this.status,
        isSubForm: this.isTableFormItem
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/form-item-box.vue?vue&type=script&lang=js&
 /* harmony default export */ var asp_smart_form_form_item_boxvue_type_script_lang_js_ = (form_item_boxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/asp-smart-form/form-item-box.vue?vue&type=style&index=0&id=526d4af2&scoped=true&lang=scss&
var form_item_boxvue_type_style_index_0_id_526d4af2_scoped_true_lang_scss_ = __webpack_require__(70);

// CONCATENATED MODULE: ./src/components/asp-smart-form/form-item-box.vue






/* normalize component */

var form_item_box_component = Object(componentNormalizer["a" /* default */])(
  asp_smart_form_form_item_boxvue_type_script_lang_js_,
  form_item_boxvue_type_template_id_526d4af2_scoped_true_render,
  form_item_boxvue_type_template_id_526d4af2_scoped_true_staticRenderFns,
  false,
  null,
  "526d4af2",
  null
  
)

/* hot reload */
if (false) { var form_item_box_api; }
form_item_box_component.options.__file = "src/components/asp-smart-form/form-item-box.vue"
/* harmony default export */ var form_item_box = (form_item_box_component.exports);
// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-news-machine/index.js







 // * @Author: TurboC
// * @Date: 2020年6月29日09:34:16
// * @LastEditTime : 2020年6月29日09:34:23
// * @LastEditors  : TurobC
// * @Description: 智能消息器



var smartNewsMachine = {}; // 智能消息器：子表单组件--操作列--删除按钮
// param参数格式：{ item, parent, type, index, row, fileData, subFormSelectData }

smartNewsMachine.snm_deleteSubFormRowData = function (_t, model, formList, param, status) {
  var tableName = param.item.type === 'normalChildList' ? param.item.columnName : param.parent.columnName;

  if (param.item && param.item.confirmationSwitch) {
    var message = smartNewsMachine.snm_showDialogMessage(param.item.confirmationMessage, model, param.item, param.index);
    utils_toolApi.confirm(_t, message, function () {
      smart_model_machine.smm_deleteSubFormRowData(_t, model, formList, tableName, param.index, status);
      _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_sendMessageExt', param);
    });
  } else {
    smart_model_machine.smm_deleteSubFormRowData(_t, model, formList, tableName, param.index, status);
    _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_sendMessageExt', param);
  }
}; // 智能消息器：子表单组件--操作列--复制按钮
// param参数格式：{ item, parent, type, index, row, fileData, subFormSelectData }


smartNewsMachine.snm_copySubFormRowData = function (_t, model, formList, param) {
  var tableName = param.item.type === 'normalChildList' ? param.item.columnName : param.parent.columnName;

  if (param.item && param.item.confirmationSwitch) {
    var message = smartNewsMachine.snm_showDialogMessage(param.item.confirmationMessage, model, param.item, param.index);
    utils_toolApi.confirm(_t, message, function () {
      smart_model_machine.smm_copySubFormRowData(_t, model, formList, tableName, param.index);
      _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_sendMessageExt', param);
    });
  } else {
    smart_model_machine.smm_copySubFormRowData(_t, model, formList, tableName, param.index);
    _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_sendMessageExt', param);
  }
}; // 智能消息器：子表单组件--操作列--新增按钮
// param参数格式：{ item, parent, type, index, row, fileData, subFormSelectData }


smartNewsMachine.snm_addSubFormRowData = function (_t, model, formList, param) {
  var tableName = param.item.type === 'normalChildList' ? param.item.columnName : param.parent.columnName;

  if (param.item && param.item.confirmationSwitch) {
    var message = smartNewsMachine.snm_showDialogMessage(param.item.confirmationMessage, model, param.item, param.index);
    utils_toolApi.confirm(_t, message, function () {
      smart_model_machine.smm_addSubFormRowData(_t, model, formList, tableName, param.item.interactive);
      _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_sendMessageExt', param);
    });
  } else {
    smart_model_machine.smm_addSubFormRowData(_t, model, formList, tableName, param.item.interactive);
    _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_sendMessageExt', param);
  }
}; // 智能消息器：子表单组件--操作列--其它按钮
// param参数格式：{ item, parent, type, index, row, fileData, subFormSelectData }


smartNewsMachine.snm_otherSubFormRowData = function (_t, model, param) {
  if (param.item && param.item.confirmationSwitch) {
    var message = smartNewsMachine.snm_showDialogMessage(param.item.confirmationMessage, model, param.item, param.index);
    utils_toolApi.confirm(_t, message, function () {
      _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_sendMessageExt', param);
    });
  } else {
    _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_sendMessageExt', param);
  }
}; // 智能消息器：替换成目标提示语


smartNewsMachine.snm_showDialogMessage = function (confirmationMessage, model, item, index) {
  var strArr = confirmationMessage.split('$##$');

  if (strArr && strArr.length === 3) {
    var propName = strArr[1];
    strArr[1] = model[item.parentName][index][propName];
    var retValue = '';
    strArr.forEach(function (item) {
      retValue += item;
    });
    return retValue;
  }

  return confirmationMessage;
};

/* harmony default export */ var smart_news_machine = (smartNewsMachine);
// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-interface-machine/index.js
// * @Author: TurboC
// * @Date: 2020年6月29日09:34:16
// * @LastEditTime : 2020年6月29日09:34:23
// * @LastEditors  : TurobC
// * @Description: 智能转换器
// import toolApi from '../../utils/toolApi'

var smartInterfaceMachine = {}; // 智能接口器：提交数据模型数据给后端

smartInterfaceMachine.sif_submitModelData = function (_t, msgData, model, beforeSubmitModelData, formList, serverProps) {
  var tmpModel = JSON.parse(JSON.stringify(model));

  if (beforeSubmitModelData && typeof beforeSubmitModelData === 'function') {
    beforeSubmitModelData(Object.assign(msgData, {
      model: tmpModel
    }), function (postData) {
      smartInterfaceMachine.sif_sendModelDataApi(_t, msgData, postData, formList, serverProps);
    });
  } else {
    smartInterfaceMachine.sif_sendModelDataApi(_t, msgData, tmpModel, formList, serverProps);
  }
}; // 智能接口器：提交个性化数据数据


smartInterfaceMachine.sif_submitCustomData = function (_t, msgData, model, beforeSubmitCustomData, serverProps) {
  var tmpModel = JSON.parse(JSON.stringify(model));

  if (beforeSubmitCustomData && typeof beforeSubmitCustomData === 'function') {
    beforeSubmitCustomData(Object.assign(msgData, {
      model: tmpModel
    }), function (postData) {
      smartInterfaceMachine.sif_sendCustomDataApi(_t, msgData, postData, serverProps);
    });
  }
}; // 智能接口器：提交数据模型数据给后端


smartInterfaceMachine.sif_sendModelDataApi = function (_t, msgData, postData, formList, serverProps) {
  if (msgData.item.apiName !== undefined && msgData.item.apiName.length > 0) {
    if (_t.$aspHttps === undefined || _t.$aspHttps.asp_Post === undefined) {
      _t.$set(msgData.item, 'network$$$tag', false);

      _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_sendMessageExt', msgData);
      return;
    }

    var urlStr = serverProps.localProxy + msgData.item.apiName;
    var requestDataKey = serverProps.requestDataKey;
    var hasDataKey = Object.prototype.hasOwnProperty.call(serverProps, 'requestDataKey');
    postData = smart_model_machine.smm_getModelData(formList, postData);
    postData = hasDataKey && requestDataKey.length > 0 ? {
      requestDataKey: postData
    } : postData;

    _t.$set(msgData.item, 'loading', true);

    _t.$aspHttps.asp_Post(urlStr, postData).then(function (response) {
      if (parseInt(response[serverProps.statusKey]) !== parseInt(serverProps.statusValue)) {
        _t.$message.error(response.message);
      }

      _t.$set(msgData.item, 'network$$$response', response);

      _t.$set(msgData.item, 'loading', false);

      _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_sendMessageExt', msgData);
    });
  }
}; // 智能接口器：提交个性化数据数据


smartInterfaceMachine.sif_sendCustomDataApi = function (_t, msgData, postData, serverProps) {
  if (msgData.item.apiName !== undefined && msgData.item.apiName.length > 0) {
    if (_t.$aspHttps === undefined || _t.$aspHttps.asp_Post === undefined) {
      _t.$set(msgData.item, 'network$$$tag', false);

      _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_sendMessageExt', msgData);
      return;
    }

    var urlStr = serverProps.localProxy + msgData.item.apiName;

    _t.$set(msgData.item, 'loading', true);

    _t.$aspHttps.asp_Post(urlStr, postData).then(function (response) {
      if (parseInt(response[serverProps.statusKey]) !== parseInt(serverProps.statusValue)) {
        _t.$message.error(response.message);
      }

      _t.$set(msgData.item, 'network$$$response', response);

      _t.$set(msgData.item, 'loading', false);

      _t.$root.Bus && _t.$root.Bus.$emit('bus_id_sf_sendMessageExt', msgData);
    });
  }
};

/* harmony default export */ var smart_interface_machine = (smartInterfaceMachine);
// CONCATENATED MODULE: ./src/components/asp-smart-form/index-mixins/messageApi.js

 // * @Author: 卓望深圳团队
// * @Date: 2020年3月5日09:34:16
// * @LastEditTime : 2020年3月5日09:34:23
// * @LastEditors  : 卓望深圳团队
// * @Description: 组件联动




/* harmony default export */ var messageApi = ({
  methods: {
    // 消息往外部发送
    msg_sendMessageExt: function msg_sendMessageExt(_ref) {
      var item = _ref.item,
          parent = _ref.parent,
          type = _ref.type,
          index = _ref.index,
          row = _ref.row,
          fileData = _ref.fileData,
          subFormSelectData = _ref.subFormSelectData; // 外部使用'child_form_add'作为关键字，确定是子表单表头点了新增按钮

      if (item.type === 'normalChildList' && item.interactive === 'child_form_add_header') {
        item.interactive = 'child_form_add';
      }

      var param = {
        model: this.value,
        item: item,
        parent: parent,
        type: type,
        index: index,
        row: row,
        fileData: fileData,
        subFormSelectData: subFormSelectData
      };
      this.$emit('on', param);
    },
    // 接收内部组件的消息
    bindEvents: function bindEvents(_ref2) {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var item, parent, type, index, row, fileData, subFormSelectData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                item = _ref2.item, parent = _ref2.parent, type = _ref2.type, index = _ref2.index, row = _ref2.row, fileData = _ref2.fileData, subFormSelectData = _ref2.subFormSelectData;

                _this.msg_Events({
                  item: item,
                  parent: parent,
                  type: type,
                  index: index,
                  row: row,
                  fileData: fileData,
                  subFormSelectData: subFormSelectData
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 参数格式：{ item, parent, type, index, row, fileData, subFormSelectData }
    msg_Events: function msg_Events(msgData) {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var retValue, partValidateData, _retValue, _partValidateData, _retValue2, _retValue3, _partValidateData2, _retValue4;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = msgData.item.interactive;
                _context2.next = _context2.t0 === 'button_group_submit_all_validate' ? 3 : _context2.t0 === 'button_group_submit_part_validate' ? 9 : _context2.t0 === 'button_custom_submit_part_validate' ? 16 : _context2.t0 === 'button_custom_submit_only' ? 23 : _context2.t0 === 'button_group_submit_only' ? 25 : _context2.t0 === 'button_group_all_validate' ? 27 : _context2.t0 === 'button_group_part_validate' ? 33 : _context2.t0 === 'other' ? 40 : _context2.t0 === 'child_form_add' ? 42 : _context2.t0 === 'child_form_add_header' ? 42 : _context2.t0 === 'child_form_copy' ? 44 : _context2.t0 === 'child_form_delete' ? 46 : _context2.t0 === 'child_form_other' ? 48 : 50;
                break;

              case 3:
                _context2.next = 5;
                return _this2.asp_validate();

              case 5:
                retValue = _context2.sent;

                _this2.$set(msgData.item, 'validate$$$tag', retValue);

                if (retValue) {
                  smart_interface_machine.sif_submitModelData(_this2, msgData, _this2.value, _this2.beforeSubmitModelData, _this2.formList, _this2.serverProps);
                } else {
                  _this2.$root.Bus && _this2.$root.Bus.$emit('bus_id_sf_sendMessageExt', msgData);
                }

                return _context2.abrupt("break", 52);

              case 9:
                // 按钮组组件：提交数据模型+部分校验
                partValidateData = smart_property_machine.spm_getPartValidateData(_this2.value, msgData.item);
                _context2.next = 12;
                return _this2.asp_validateField(partValidateData);

              case 12:
                _retValue = _context2.sent;

                _this2.$set(msgData.item, 'validate$$$tag', _retValue);

                if (_retValue) {
                  smart_interface_machine.sif_submitModelData(_this2, msgData, _this2.value, _this2.beforeSubmitModelData, _this2.formList, _this2.serverProps);
                } else {
                  _this2.$root.Bus && _this2.$root.Bus.$emit('bus_id_sf_sendMessageExt', msgData);
                }

                return _context2.abrupt("break", 52);

              case 16:
                // 按钮组组件：提交个性数据+部分校验
                _partValidateData = smart_property_machine.spm_getPartValidateData(_this2.value, msgData.item);
                _context2.next = 19;
                return _this2.asp_validateField(_partValidateData);

              case 19:
                _retValue2 = _context2.sent;

                _this2.$set(msgData.item, 'validate$$$tag', _retValue2);

                if (_retValue2) {
                  smart_interface_machine.sif_submitCustomData(_this2, msgData, _this2.value, _this2.beforeSubmitCustomData, _this2.serverProps);
                } else {
                  _this2.$root.Bus && _this2.$root.Bus.$emit('bus_id_sf_sendMessageExt', msgData);
                }

                return _context2.abrupt("break", 52);

              case 23:
                // 按钮组组件：提交个性数据
                smart_interface_machine.sif_submitCustomData(_this2, msgData, _this2.value, _this2.beforeSubmitCustomData, _this2.serverProps);
                return _context2.abrupt("break", 52);

              case 25:
                // 按钮组组件：提交数据模型
                smart_interface_machine.sif_submitModelData(_this2, msgData, _this2.value, _this2.beforeSubmitModelData, _this2.formList, _this2.serverProps);
                return _context2.abrupt("break", 52);

              case 27:
                _context2.next = 29;
                return _this2.asp_validate();

              case 29:
                _retValue3 = _context2.sent;

                _this2.$set(msgData.item, 'validate$$$tag', _retValue3);

                _this2.$root.Bus && _this2.$root.Bus.$emit('bus_id_sf_sendMessageExt', msgData);
                return _context2.abrupt("break", 52);

              case 33:
                // 按钮组组件：部分校验
                _partValidateData2 = smart_property_machine.spm_getPartValidateData(_this2.value, msgData.item);
                _context2.next = 36;
                return _this2.asp_validateField(_partValidateData2);

              case 36:
                _retValue4 = _context2.sent;

                _this2.$set(msgData.item, 'validate$$$tag', _retValue4);

                _this2.$root.Bus && _this2.$root.Bus.$emit('bus_id_sf_sendMessageExt', msgData);
                return _context2.abrupt("break", 52);

              case 40:
                // 按钮组组件：其它交互
                _this2.$root.Bus && _this2.$root.Bus.$emit('bus_id_sf_sendMessageExt', msgData);
                return _context2.abrupt("break", 52);

              case 42:
                // 子表单组件：新增一行
                smart_news_machine.snm_addSubFormRowData(_this2, _this2.value, _this2.formList, msgData);
                return _context2.abrupt("break", 52);

              case 44:
                // 子表单组件：复制一行
                smart_news_machine.snm_copySubFormRowData(_this2, _this2.value, _this2.formList, msgData);
                return _context2.abrupt("break", 52);

              case 46:
                // 子表单组件：删除一行
                smart_news_machine.snm_deleteSubFormRowData(_this2, _this2.value, _this2.formList, msgData, _this2.status);
                return _context2.abrupt("break", 52);

              case 48:
                smart_news_machine.snm_otherSubFormRowData(_this2, _this2.value, msgData);
                return _context2.abrupt("break", 52);

              case 50:
                _this2.msg_compValidateOpt(msgData);

                return _context2.abrupt("break", 52);

              case 52:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    msg_compValidateOpt: function msg_compValidateOpt(msgData) {
      var validateData = '';

      if (msgData.parent && msgData.parent.columnName) {
        validateData = msgData.parent.columnName + '.' + msgData.index + '.' + msgData.item.columnName;
      } else {
        validateData = msgData.item.columnName;
      }

      this.asp_validateField(validateData, false);
      this.$root.Bus && this.$root.Bus.$emit('bus_id_sf_sendMessageExt', msgData);
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/smart-machine/smart-order-machine/index.js










/**
 * Created by TurboC on 2020/7/27.
 * 智能自定义指令器
 */


var smartOrderMachine = {}; // 非鉴权按钮删除

smartOrderMachine.aspAuth = function (vm) {
  vm.directive('aspAuth', function (el, option) {
    // 获取按钮权限
    var btnRight = sessionStorage.domain && JSON.parse(sessionStorage.domain).authInfo;
    var authStatus = false;

    if (option.value === undefined) {
      authStatus = true;
    } else {
      var _loop = function _loop(key) {
        if (btnRight[key] !== undefined) {
          if (utils_toolApi.tool_isString(option.value)) {
            if (btnRight[key].some(function (item) {
              return Object.is(item, option.value);
            })) {
              authStatus = !authStatus;
            }
          }

          if (utils_toolApi.tool_isArray(option.value)) {
            option.value.map(function (item) {
              if (btnRight[key].some(function (iitem) {
                return Object.is(iitem, item);
              })) {
                authStatus = true;
              }
            });
          }
        }
      };

      for (var key in btnRight) {
        _loop(key);
      }
    }

    function removeElement(_x) {
      return _removeElement.apply(this, arguments);
    }

    function _removeElement() {
      _removeElement = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(el) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", el);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _removeElement.apply(this, arguments);
    }

    if (!authStatus) {
      if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        removeElement(el).then(function () {
          el.parentNode.removeChild(el);
        });
      } else {
        removeElement(el).then(function () {
          el.remove();
        });
      }
    }
  });
};

smartOrderMachine.init = function (vm) {
  var eventGather = ['aspAuth'];
  eventGather.forEach(function (item) {
    smartOrderMachine[item](vm);
  });
};

/* harmony default export */ var smart_order_machine = (smartOrderMachine);
// CONCATENATED MODULE: ./src/components/asp-smart-form/index-mixins/openApi.js





 // * @Author: 卓望深圳团队
// * @Date: 2020年3月5日09:34:16
// * @LastEditTime : 2020年3月5日09:34:23
// * @LastEditors  : 卓望深圳团队
// * @Description: 组件联动





/* harmony default export */ var openApi = ({
  methods: {
    /* ********************************************************************************* */

    /*                              数据权限API                                           */

    /* ********************************************************************************* */
    // 初始化权限功能
    asp_authorityInit: function asp_authorityInit(vue) {
      smart_order_machine.init(vue);
    },

    /* ********************************************************************************* */

    /*                              数据模型API                                           */

    /* ********************************************************************************* */
    // 数据模型：通用组件模型数据赋值，并异步更新控件
    asp_setValue: function asp_setValue(columnName, value) {
      var _this = this;

      this.$nextTick(function () {
        smart_model_machine.smm_setValue(_this, _this.value, columnName, value);
      }, this);
    },
    // 数据模型：子表单组件模型数据赋值，并异步更新控件
    asp_setTableValue: function asp_setTableValue(tableName, value) {
      var _this2 = this;

      this.$nextTick(function () {
        smart_model_machine.smm_setTableValue(_this2, _this2.value, tableName, value);
      }, this);
    },
    // 数据模型：子表单组件模型数据增加行数据，并异步更新控件
    asp_setTableAddRow: function asp_setTableAddRow(tableName, value) {
      var _this3 = this;

      this.$nextTick(function () {
        smart_model_machine.smm_setTableAddRow(_this3, _this3.value, tableName, value);
      }, this);
    },
    // 数据模型：子表单组件模型数据删除行数据，并异步更新控件
    asp_setTableDelRow: function asp_setTableDelRow(tableName, index) {
      var _this4 = this;

      this.$nextTick(function () {
        smart_model_machine.smm_setTableDelRow(_this4, _this4.value, tableName, index);
      }, this);
    },
    // 数据模型：子表单组件中单元格组件模型数据赋值，并异步更新控件
    asp_setTableCellValue: function asp_setTableCellValue(tableName, index, columnName, value) {
      var _this5 = this;

      this.$nextTick(function () {
        smart_model_machine.smm_setTableCellValue(_this5, _this5.value, tableName, index, columnName, value);
      }, this);
    },
    // 数据模型：获取数据模型中的某一行数据
    asp_getTableRowData: function asp_getTableRowData(tableName, index) {
      var tmpMode = this.asp_getModel();

      if (tmpMode && tmpMode[tableName] && tmpMode[tableName] > index) {
        return tmpMode[tableName][index];
      }

      return undefined;
    },
    // 获取数据模型(提交给后端的数据模型)
    asp_getModel: function asp_getModel() {
      var model = JSON.parse(JSON.stringify(this.value));
      model = smart_model_machine.smm_getModelData(this.formList, model);
      return model;
    },
    // 获取数据模型(前端的数据模型，全量的数据模型)
    asp_getFrontModel: function asp_getFrontModel() {
      return this.value;
    },
    // 获取html数据
    asp_getformJson: function asp_getformJson() {
      return this.formJson;
    },

    /* ********************************************************************************* */

    /*                              通用组件API                                           */

    /* ********************************************************************************* */
    // 通用组件：设置组件的标题
    asp_setTitle: function asp_setTitle(columnName, value) {
      this.inside_setCompCustomPropValue(columnName, 'label', value);
    },
    // 已弃用，以后不再支持
    asp_setCollapseTitle: function asp_setCollapseTitle(columnName, value) {
      this.inside_setCompCustomPropValue(columnName, 'label', value);
    },
    // 通用组件：设置组件的最大长度
    asp_setMaxLength: function asp_setMaxLength(columnName, value) {
      this.inside_setCompElementPropsValue(columnName, ['show-word-limit', 'maxlength'], [true, value]);
    },
    // 通用组件：设置组件隐藏开关
    asp_setHidden: function asp_setHidden(columnName, value) {
      this.inside_setCompCustomPropValue(columnName, 'forceHidden', value);
    },
    // 通用组件：设置组件禁用开关 (不包括：容器组件)
    asp_setDisabled: function asp_setDisabled(columnName, value) {
      this.inside_setCompCustomPropValue(columnName, 'forceDisabled', value);
    },
    // 通用组件：设置组件只读开关 (不包括：容器组件、按钮组组件)
    asp_setReadonly: function asp_setReadonly(columnName, value) {
      this.inside_setCompCustomPropValue(columnName, 'forceReadonly', value);
    },
    // 通用组件：设置组件label状态 (不包括：容器组件、按钮组组件)
    asp_setLabel: function asp_setLabel(columnName, value) {
      this.inside_setCompCustomPropValue(columnName, 'forceLabel', value);
    },
    // 通用组件：设置组件options值 (仅包括：下拉组件、单选框组件、多选框组件)
    asp_setOptions: function asp_setOptions(columnName, value) {
      this.inside_setCompCustomPropValue(columnName, 'options', value);
    },
    // // 通用组件：设置获取组件options值的接口参数包 (仅包括：下拉组件、单选框组件、多选框组件)
    // asp_setOptionUrlParam (columnName, value) {
    //   this.inside_setCompCustomPropValue(columnName, 'option_param', value)
    // },
    // 通用组件：设置组件必填开关 (不包括：容器组件、按钮组组件)
    asp_switchRequired: function asp_switchRequired(columnName, onOff) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '不能为空!';
      this.inside_setCompRequiredPropsValue([columnName], onOff, message);
    },
    // 通用组件：设置组件(多个组件)必填开关 (不包括：容器组件、按钮组组件)
    asp_switchRequireds: function asp_switchRequireds(columnNames, onOff) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '不能为空!';
      this.inside_setCompRequiredPropsValue(columnNames, onOff, message);
    },
    // 通用组件：设置组件正则表达式校验项 (不包括：容器组件、按钮组组件)
    asp_switchRules: function asp_switchRules(columnName) {
      var _this6 = this;

      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.$nextTick(function () {
        smart_property_machine.spm_setCompRulesPropValue(_this6, _this6.formList, columnName, value);
      }, this);
    },
    // 通用组件：设置组件打开/关闭属性 (仅包括：折叠框)
    asp_setCollapseOpen: function asp_setCollapseOpen(columnName, value) {
      this.inside_setCompCustomPropValue(columnName, 'open', value);
    },

    /* ********************************************************************************* */

    /*                              子表单组件API                                          */

    /* ********************************************************************************* */
    // 子表单组件：子表单中嵌套组件设置options值(组件在所有行都生效)
    asp_setTableColumnOption: function asp_setTableColumnOption(tableName, columnName, value) {
      this.inside_setSubFormColumnPropValue(tableName, columnName, 'options', value);
    },
    // // 通用组件：设置子表单中嵌套组件options值的接口参数包 (组件在所有行都生效)
    // asp_setTableColumnOptionUrlParam (tableName, columnName, value) {
    //   this.inside_setSubFormColumnPropValue(tableName, columnName, 'option_param', value)
    // },
    // 子表单组件：子表单整列隐藏开关(不包括：折叠列、序号列、操作列)
    asp_setTableColumnHidden: function asp_setTableColumnHidden(tableName, columnName, onOff) {
      this.inside_setSubFormColumnPropValue(tableName, columnName, 'forceHiddenColumn', onOff);
    },
    // 子表单组件：子表单中嵌套组件隐藏开关(组件在所有行都生效)
    asp_setTableColumnCompHidden: function asp_setTableColumnCompHidden(tableName, columnName, onOff) {
      this.inside_setSubFormColumnPropValue(tableName, columnName, 'forceHidden', onOff);
    },
    // 已弃用，以后不再支持
    asp_setTableColHidden: function asp_setTableColHidden(tableName, columnName, onOff) {
      this.inside_setSubFormColumnPropValue(tableName, columnName, 'forceHidden', onOff);
    },
    // 子表单组件：子表单中嵌套组件禁用开关(组件在所有行都生效)
    asp_setTableColumnCompDisabled: function asp_setTableColumnCompDisabled(tableName, columnName, onOff) {
      this.inside_setSubFormColumnPropValue(tableName, columnName, 'forceDisabled', onOff);
    },
    // 已弃用，以后不再支持
    asp_setTableColDisabled: function asp_setTableColDisabled(tableName, columnName, onOff) {
      this.inside_setSubFormColumnPropValue(tableName, columnName, 'forceDisabled', onOff);
    },
    // 子表单组件：子表单中嵌套组件只读开关(组件在所有行都生效)
    asp_setTableColumnCompReadonly: function asp_setTableColumnCompReadonly(tableName, columnName, onOff) {
      this.inside_setSubFormColumnPropValue(tableName, columnName, 'forceReadonly', onOff);
    },
    // 已弃用，以后不再支持
    asp_setTableColReadonly: function asp_setTableColReadonly(tableName, columnName, onOff) {
      this.inside_setSubFormColumnPropValue(tableName, columnName, 'forceReadonly', onOff);
    },
    // 子表单组件：子表单中嵌套组件label状态开关(组件在所有行都生效) (不包括：序号列、操作列)
    asp_setTableColumnCompLabel: function asp_setTableColumnCompLabel(tableName, columnName, onOff) {
      this.inside_setSubFormColumnPropValue(tableName, columnName, 'forceLabel', onOff);
    },
    // 已弃用，以后不再支持
    asp_setTableColLabel: function asp_setTableColLabel(tableName, columnName, onOff) {
      this.inside_setSubFormColumnPropValue(tableName, columnName, 'forceLabel', onOff);
    },
    // 子表单组件：设置嵌套组件必填开关(所有行都生效) (不包括：序号列、操作列)
    asp_setTableColumnRequired: function asp_setTableColumnRequired(tableName, columnName, onOff) {
      var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '不能为空!';
      this.inside_setTableColumnRequired(tableName, columnName, onOff, message);
    },
    // 已弃用，以后不再支持
    asp_switchTableColRequired: function asp_switchTableColRequired(tableName, columnName, onOff) {
      var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '不能为空!';
      this.inside_setTableColumnRequired(tableName, columnName, onOff, message);
    },
    // 子表单组件：必填子表单列(多列)中的组件开关 (不包括：序号列、操作列)
    asp_setTableColumnRequireds: function asp_setTableColumnRequireds(tableName, columnNames, onOff) {
      var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '不能为空!';
      this.inside_setTableColumnRequireds(tableName, columnNames, onOff, message);
    },
    // 已弃用，以后不再支持
    asp_switchTableColRequireds: function asp_switchTableColRequireds(tableName, columnNames, onOff) {
      var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '不能为空!';
      this.inside_setTableColumnRequireds(tableName, columnNames, onOff, message);
    },

    /* ********************************************************************************* */

    /*                              子表单中单元格组件API                                   */

    /* ********************************************************************************* */
    // 通用组件：设置组件的最大长度
    asp_setTableCellMaxLength: function asp_setTableCellMaxLength(tableName, index, columnName, value) {
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_maxlength', value);
    },
    // 子表单组件：单元格组件隐藏开关 (不包括：序号列)
    asp_setTableCellHidden: function asp_setTableCellHidden(tableName, index, columnName, value) {
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_forceHidden', value);
    },
    // 已弃用，以后不再支持
    asp_setTableRowCellHidden: function asp_setTableRowCellHidden(tableName, index, columnName, value) {
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_forceHidden', value);
    },
    // 已弃用，以后不再支持
    asp_setTableOperationCellRowHidden: function asp_setTableOperationCellRowHidden(tableName, index, columnName, value) {
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_forceHidden', value);
    },
    // 子表单组件：单元格组件禁用开关 (不包括：序号列)
    asp_setTableCellDisabled: function asp_setTableCellDisabled(tableName, index, columnName, value) {
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_forceDisabled', value);
    },
    // 已弃用，以后不再支持
    asp_setTableRowCellDisabled: function asp_setTableRowCellDisabled(tableName, index, columnName, value) {
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_forceDisabled', value);
    },
    // 已弃用，以后不再支持
    asp_setTableOperationCellRowDisabled: function asp_setTableOperationCellRowDisabled(tableName, index, columnName, value) {
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_forceDisabled', value);
    },
    // 子表单组件：单元格组件只读开关 (不包括：序号列、操作列)
    asp_setTableCellReadonly: function asp_setTableCellReadonly(tableName, index, columnName, value) {
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_forceReadonly', value);
    },
    // 已弃用，以后不再支持
    asp_setTableRowCellReadonly: function asp_setTableRowCellReadonly(tableName, index, columnName, value) {
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_forceReadonly', value);
    },
    // 子表单组件：单元格组件label状态开关 (不包括：序号列、操作列)
    asp_setTableCellLabel: function asp_setTableCellLabel(tableName, index, columnName, value) {
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_forceLabel', value);
    },
    // 已弃用，以后不再支持
    asp_setTableRowCellLabel: function asp_setTableRowCellLabel(tableName, index, columnName, value) {
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_forceLabel', value);
    },
    // 子表单组件：单元格组件必填开关(不包括：序号列、操作列)
    asp_setTableCellRequired: function asp_setTableCellRequired(tableName, index, columnName, onOff) {
      var message = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '不能为空!';
      this.inside_setTableCellRequired(tableName, index, columnName, onOff, message);
    },
    // 已弃用，以后不再支持
    asp_switchTableRequired: function asp_switchTableRequired(tableName, index, columnName, onOff) {
      var message = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '不能为空!';
      this.inside_setTableCellRequired(tableName, index, columnName, onOff, message);
    },
    // 子表单组件：单元格组件(一行中多个单元格组件)必填开关(不包括：序号列、操作列)
    asp_setTableCellRequireds: function asp_setTableCellRequireds(tableName, index, columnNames, onOff) {
      var message = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '不能为空!';
      this.inside_setTableCellRequireds(tableName, index, columnNames, onOff, message);
    },
    // 已弃用，以后不再支持
    asp_switchTableRequireds: function asp_switchTableRequireds(tableName, index, columnNames, onOff) {
      var message = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '不能为空!';
      this.inside_setTableCellRequireds(tableName, index, columnNames, onOff, message);
    },
    // 子表单组件：单元格组件正则表达式校验开关(不包括：序号列、操作列)
    asp_setTableCellRules: function asp_setTableCellRules(tableName, index, columnName, onOff) {
      var value = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_rules', value);
    },
    // 已弃用，以后不再支持
    asp_switchTableRules: function asp_switchTableRules(tableName, index, columnName, onOff) {
      var value = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
      this.inside_setSubFormCellItemValue(tableName, columnName, index, '_rules', value);
    },

    /* ********************************************************************************* */

    /*                                       页面校验API                                  */

    /* ********************************************************************************* */
    // 校验页面所有必填组件(对整个页面进行校验的方法)，同时自动定位到校验失败的组件位置
    asp_validate: function asp_validate() {
      var _this7 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return smart_validate_machine.svm_validateForm(_this7);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 校验页面部分必填组件(对输入的组件进行校验的方法)，同时自动定位到校验失败的组件位置
    asp_validateField: function asp_validateField(columnNames) {
      var _arguments = arguments,
          _this8 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var isScroll;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                isScroll = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : true;
                _context2.next = 3;
                return smart_validate_machine.svm_validateField(_this8, columnNames, isScroll);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // 校验子表单部分属性校验(对输入的组件进行校验的方法)，同时自动定位到校验失败的组件位置
    asp_validateSubFormField: function asp_validateSubFormField(tableName, index, columnNames) {
      var _arguments2 = arguments,
          _this9 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var isScroll;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                isScroll = _arguments2.length > 3 && _arguments2[3] !== undefined ? _arguments2[3] : true;
                _context3.next = 3;
                return smart_validate_machine.svm_validateSubFormField(_this9, tableName, index, columnNames, isScroll);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    // 重置页面(对整个页面进行重置，将所有字段值重置为初始值并移除校验结果)
    asp_resetFields: function asp_resetFields() {
      this.$refs.validateForm.resetFields();
    },
    // 清除页面的校验结果(传入待移除的组件的prop属性或者prop组成的数组，如不传则移除整个页面的校验结果)
    asp_clearValidate: function asp_clearValidate() {
      var tmpVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      smart_validate_machine.svm_clearValidate(this, tmpVal);
    },

    /* *********************************************************************************** */

    /*                 以下API，是提供给以上API调用的，其它地方不允许使用                          */

    /* ************************************************************************************ */
    // 子表单组件：设置嵌套组件必填开关(所有行都生效) (不包括：序号列、操作列)
    inside_setTableColumnRequired: function inside_setTableColumnRequired(tableName, columnName, onOff) {
      var _this10 = this;

      var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '不能为空!';
      this.$nextTick(function () {
        smart_property_machine.spm_setSubFormColumnCompRequired(_this10, _this10.formList, tableName, columnName, 'required', onOff, message);

        if (!onOff && Object.prototype.hasOwnProperty.call(_this10.value, tableName)) {
          var requiredList = [];

          for (var i = 0; i < _this10.value[tableName].length; i++) {
            requiredList.push(tableName + '.' + i + '.' + columnName);
          }

          if (requiredList.length > 0) {
            _this10.asp_clearValidate(requiredList);
          }
        }
      }, this);
    },
    // 表格表单组件：表格表单组件的数据列必填校验[启用/关闭]
    inside_setTableColumnRequireds: function inside_setTableColumnRequireds(tableName, columnNames, onOff) {
      var _this11 = this;

      var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '不能为空!';

      var _t = this;

      this.$nextTick(function () {
        columnNames.forEach(function (item) {
          smart_property_machine.spm_setSubFormColumnCompRequired(_t, _t.formList, tableName, item, 'required', onOff, message);

          if (!onOff && Object.prototype.hasOwnProperty.call(_this11.value, tableName)) {
            var requiredList = [];
            var i = 0;

            for (; i < _t.value[tableName].length; i++) {
              requiredList.push(tableName + '.' + i + '.' + item);
            }

            _t.asp_clearValidate(requiredList);
          }
        });
      });
    },
    // 子表单组件：单元格组件必填开关(不包括：序号列、操作列)
    inside_setTableCellRequired: function inside_setTableCellRequired(tableName, index, columnName, onOff) {
      var message = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '不能为空!';

      var _t = this;

      this.$nextTick(function () {
        smart_model_machine.smm_setSubFormCellRequired(_t, _t.value, tableName, index, columnName, onOff, message);

        if (!onOff) {
          _t.asp_clearValidate(tableName + '.' + index + '.' + columnName);
        }
      });
    },
    // 子表单组件：单元格组件(多个单元格组件)必填开关(不包括：序号列、操作列)
    inside_setTableCellRequireds: function inside_setTableCellRequireds(tableName, index, columnNames, onOff) {
      var message = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '不能为空!';

      var _t = this;

      this.$nextTick(function () {
        var requiredList = [];
        columnNames.forEach(function (item) {
          smart_model_machine.smm_setSubFormCellRequired(_t, _t.value, tableName, index, item, onOff, message);
          requiredList.push(tableName + '.' + index + '.' + item);
        });

        if (!onOff) {
          _t.asp_clearValidate(requiredList);
        }
      });
    },
    // 通用组件：设置通用组件自定义属性赋值
    inside_setCompElementPropValue: function inside_setCompElementPropValue(columnName, key, value) {
      var _this12 = this;

      this.$nextTick(function () {
        smart_property_machine.spm_setCompElementPropValue(_this12, _this12.formList, columnName, key, true);
      }, this);
    },
    inside_setCompElementPropsValue: function inside_setCompElementPropsValue(columnName, keys, values) {
      var _this13 = this;

      this.$nextTick(function () {
        keys.forEach(function (key, index) {
          smart_property_machine.spm_setCompElementPropValue(_this13, _this13.formList, columnName, key, values[index]);
        });
      }, this);
    },
    // 通用组件：设置通用组件自定义属性赋值
    inside_setCompCustomPropValue: function inside_setCompCustomPropValue(columnName, key, value) {
      var _this14 = this;

      this.$nextTick(function () {
        smart_property_machine.spm_setMainFormCompCustomFirstPropValue(_this14, _this14.formList, columnName, key, value);
      }, this);
    },
    // 通用组件：设置通用组件必填开关赋值
    inside_setCompRequiredPropsValue: function inside_setCompRequiredPropsValue(columnNames, onOff, message) {
      var _this15 = this;

      this.$nextTick(function () {
        columnNames.forEach(function (columnName) {
          smart_property_machine.spm_setCompRequiredPropValue(_this15, _this15.formList, columnName, onOff, message);
        });

        if (!onOff) {
          _this15.asp_clearValidate(columnNames);
        }
      }, this);
    },
    // 子表单组件：设置子表单中嵌套单元格组件对象值
    inside_setSubFormCellItemValue: function inside_setSubFormCellItemValue(tableName, columnName, index, suffix, value) {
      var _this16 = this;

      this.$nextTick(function () {
        smart_model_machine.smm_setSubFormModelCellValue(_this16, _this16.value, tableName, columnName, index, suffix, value);
      }, this);
    },
    // 子表单组件：设置子表单嵌套组件属性值(组件在所有行都生效)
    inside_setSubFormColumnPropValue: function inside_setSubFormColumnPropValue(tableName, columnName, name, value) {
      var _this17 = this;

      this.$nextTick(function () {
        smart_property_machine.spm_setSubFormColummCompFirstPropValue(_this17, _this17.formList, tableName, columnName, name, value);
      }, this);
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/index-mixins/busApi.js



 // * @Author: 卓望深圳团队
// * @Date: 2020年3月5日09:34:16
// * @LastEditTime : 2020年3月5日09:34:23
// * @LastEditors  : 卓望深圳团队
// * @Description: 组件联动


/* harmony default export */ var busApi = ({
  methods: {
    clearMainFormCompData: function clearMainFormCompData(e) {
      if (e.value) {
        if (e.type === 'normalChildList') {
          this.$set(this.value, e.columnName, []);
        } else {
          this.$set(this.value, e.columnName, '');

          if (utils_toolApi.aspIncluds(['AspInputRange', 'AspDateRange'], e.type)) {
            this.$set(this.value, e.targetName, '');
          }
        }
      }
    },
    clearSubFormCompData: function clearSubFormCompData(e) {
      if (e.value) {
        if (e.type === 'normalChildList') {
          this.$set(this.value, e.columnName, []);
        } else if (this.value && e.parentName && this.value[e.parentName] && e.index >= 0 && this.value[e.parentName][e.index]) {
          this.$set(this.value[e.parentName][e.index], e.columnName, '');

          if (utils_toolApi.aspIncluds(['AspInputRange', 'AspDateRange'], e.type)) {
            this.$set(this.value[e.parentName][e.index], e.targetName, '');
          }
        }
      }
    },
    clearSubFormColumnCompData: function clearSubFormColumnCompData(e) {
      var _this = this;

      if (e.value && this.value && e.parentName && this.value[e.parentName]) {
        this.value[e.parentName].forEach(function (item) {
          if (e.type === 'normalChildList') {
            _this.$set(_this.value, e.columnName, []);
          } else {
            _this.$set(item, e.columnName, '');

            if (utils_toolApi.aspIncluds(['AspInputRange', 'AspDateRange'], e.type)) {
              _this.$set(item, e.targetName, '');
            }
          }
        });
      }
    },
    // 接收消息
    mixins_registerMessage: function mixins_registerMessage() {
      var _t = this; // 清除数据


      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_clearMianFromCompData', function (e) {
        _t.clearMainFormCompData(e);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_clearSubFormCompData', function (e) {
        _t.clearSubFormCompData(e);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_clearSubFormColumnCompData', function (e) {
        _t.clearSubFormColumnCompData(e);
      }); // 设置数据

      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setMianFromCompData', function (e) {
        if (e.value && _t.value && e.columnName) {
          _t.$set(_t.value, e.columnName, e.setData);
        }
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setSubFormCompData', function (e) {
        if (e.value && e.parentName && _t.value && _t.value[e.parentName] && _t.value[e.parentName][e.index] && e.index >= 0) {
          _t.$set(_t.value[e.parentName][e.index], e.columnName, e.setData);
        }
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setSubFormColumnCompData', function (e) {
        if (e.value && _t.value && e.parentName && _t.value[e.parentName]) {
          _t.value[e.parentName].forEach(function (item) {
            _t.$set(item, e.columnName, e.setData);
          });
        }
      }); // 子表单组件：子表单组件的数据列隐藏开关

      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableColumnHidden', function (e) {
        _t.asp_setTableColumnHidden(e.parentName, e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setDisabled', function (e) {
        _t.asp_setDisabled(e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setHidden', function (e) {
        _t.asp_setHidden(e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setReadonly', function (e) {
        _t.asp_setReadonly(e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setLabel', function (e) {
        _t.asp_setLabel(e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_switchRequired', function (e) {
        _t.asp_switchRequired(e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableColumnCompDisabled', function (e) {
        _t.asp_setTableColumnCompDisabled(e.parentName, e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableColumnCompHidden', function (e) {
        _t.asp_setTableColumnCompHidden(e.parentName, e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableColumnCompReadonly', function (e) {
        _t.asp_setTableColumnCompReadonly(e.parentName, e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableColumnCompLabel', function (e) {
        _t.asp_setTableColumnCompLabel(e.parentName, e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableColumnRequired', function (e) {
        _t.asp_setTableColumnRequired(e.parentName, e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableCellDisabled', function (e) {
        _t.asp_setTableCellDisabled(e.parentName, e.index, e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableCellHidden', function (e) {
        _t.asp_setTableCellHidden(e.parentName, e.index, e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableCellReadonly', function (e) {
        _t.asp_setTableCellReadonly(e.parentName, e.index, e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableCellLabel', function (e) {
        _t.asp_setTableCellLabel(e.parentName, e.index, e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableCellRequired', function (e) {
        _t.asp_setTableCellRequired(e.parentName, e.index, e.columnName, e.value);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_clearValidate', function (e) {
        _t.asp_clearValidate(e);
      });
      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_validateField', function (e) {
        _t.asp_validateField(e, false);
      }); // 消息往外部发送

      this.$root.Bus && this.$root.Bus.$on('bus_id_sf_sendMessageExt', function (e) {
        _t.msg_sendMessageExt(e);
      });
    },
    // 注销消息
    mixins_cancelMessage: function mixins_cancelMessage() {// // 清除数据
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_clearMianFromCompData')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_clearSubFormCompData')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_clearSubFormColumnCompData')
      // // 设置数据
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setMianFromCompData')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setSubFormCompData')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setSubFormColumnCompData')
      // // 子表单组件：子表单组件的数据列隐藏开关
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableColumnHidden')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setDisabled')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setHidden')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setReadonly')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setLabel')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_switchRequired')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableColumnCompDisabled')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableColumnCompHidden')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableColumnCompReadonly')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableColumnCompLabel')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableColumnRequired')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableCellDisabled')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableCellHidden')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableCellReadonly')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableCellLabel')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_setTableCellRequired')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_clearValidate')
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_validateField')
      // // 消息往外部发送
      // this.$root.Bus && this.$root.Bus.$on('bus_id_sf_sendMessageExt')
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/components/asp-smart-form/index.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import toolApi from './utils/toolApi'








/* harmony default export */ var asp_smart_formvue_type_script_lang_js_ = ({
  name: 'asp-smart-form',
  mixins: [busApi, messageApi, openApi],
  data: function data() {
    return {
      isCompare: false,
      newModel: {},
      formList: [],
      dynamic: {},
      formConfig: {},
      dataConfig: {},
      serverProps: {},
      virtualModel: {}
    };
  },
  provide: function provide() {
    return {
      getAllSlotNamePro: this.getAllSlotName
    };
  },
  components: {
    formItemBox: form_item_box
  },
  props: {
    formJson: {
      type: Object,
      default: function _default() {
        return {
          formList: [],
          dynamic: {},
          formConfig: {},
          dataConfig: {},
          model: {}
        };
      }
    },
    value: {
      type: Object,
      default: function _default() {}
    },
    oldModel: {
      type: Object,
      default: function _default() {}
    },
    status: {
      type: String,
      default: undefined
    },
    beforeSubmitCustomData: {
      type: Function
    },
    beforeSubmitModelData: {
      type: Function
    }
  },
  watch: {
    formJson: function formJson(val) {
      if (val) {
        this.init();
        this.value = smart_model_machine.smm_getModelData(this.formList, this.value);
      }
    },
    oldModel: {
      handler: function handler(val, oldVal) {
        this.needCompareDate(val, this.value, this.status);

        if (this.isCompare) {
          this.newTableDataSource();
        }
      },
      immediate: true,
      deep: true
    },
    value: {
      handler: function handler(val, oldVal) {
        this.needCompareDate(this.oldModel, val, this.status);

        if (this.isCompare) {
          this.newTableDataSource();
        }

        smart_dynamic_machine.start_smart_data_dynamic(this, this.formList, this.dataConfig, this.value, this.status);
      },
      immediate: true,
      deep: true
    },
    status: {
      handler: function handler(val, oldVal) {
        if (val && val !== oldVal) {
          this.asp_clearValidate();
        }

        this.needCompareDate(this.oldModel, this.value, val);

        if (this.isCompare) {
          this.newTableDataSource();
        }
      },
      immediate: true
    }
  },
  computed: {
    // 获取所有的slotName
    getAllSlotName: function getAllSlotName() {
      return utils_getAllSlotName(this.formList);
    }
  },
  mounted: function mounted() {
    if (this.formJson) {
      this.init();
    }

    this.mixins_registerMessage(); // this.$nextTick(() => {
    //   this.preloadingRequest()
    // }, this)
  },
  destroyed: function destroyed() {
    this.mixins_cancelMessage();
  },
  methods: {
    // 初始化model
    init: function init() {
      this.formList = this.formJson.formList || [];
      this.dynamic = this.formJson.dynamic || {};
      this.formConfig = this.formJson.formConfig || {};
      this.dataConfig = this.formJson.dataConfig || {};
      this.virtualModel = this.formJson.virtual_model || {};
      this.serverProps = this.formJson.formConfig.serverProps || {};
      this.render_time();
    },
    // 每次更新json数据都会给每一个item赋予全新的render_time
    render_time: function render_time() {
      var _t = this;

      set(this.formList); // 使用递归 查找与参数columnName相同的值，并赋予key属性value值

      function set(list) {
        list.forEach(function (item) {
          _t.$set(item, 'render_time', new Date().valueOf());

          if (item.formFields && item.formFields.length > 0) {
            set(item.formFields);
          }

          if (item.childList && item.childList.length > 0) {
            set(item.childList);
          }

          if (item.toolList && item.toolList.length > 0) {
            set(item.toolList);
          }
        });
      }
    },
    // 检查是否需要数据对比
    needCompareDate: function needCompareDate(oldModel, model, status) {
      if (model && oldModel && Object.keys(oldModel).length > 0 && status && this.formConfig.compareStatusList && this.formConfig.compareStatusList.length > 0 && utils_toolApi.aspIncluds(this.formConfig.compareStatusList, status)) {
        this.isCompare = true;
      } else {
        this.isCompare = false;
      }
    },
    // 增加对比列数据，及变更前的数据
    newTableDataSource: function newTableDataSource() {
      this.newModel = Object.assign({}, this.value);

      var _t = this;

      set(_t.formList);

      function set(list) {
        list.forEach(function (item) {
          if (item.type === 'normalChildList' && item.compareProps && item.compareProps.length > 0) {
            // 增加对比列数据，及变更前的数据
            _t.newModel[item.columnName] = _t.getCompareModel(item);
          }

          if (item.formFields && item.formFields.length > 0) {
            set(item.formFields);
          }

          if (item.childList && item.childList.length > 0) {
            set(item.childList);
          }

          if (item.toolList && item.toolList.length > 0) {
            set(item.toolList);
          }
        });
      }
    },
    // 取内容对比数据
    getCompareModel: function getCompareModel(item) {
      var keys = item.compareProps || [];
      var beforeData = this.oldModel[item.columnName] || [];
      var afterData = this.value[item.columnName] || [];
      var before = Object.assign([], beforeData);
      var after = Object.assign([], afterData);
      var tableItem = utils_toolApi.subTableProps(item);

      var _loop = function _loop(i) {
        var newKey = keys.map(function (key) {
          return after[i][key];
        }).join(',');
        var isHave = false;

        var _loop2 = function _loop2(_j) {
          var oldKey = keys.map(function (key) {
            j = _j;
            return before[_j][key];
          }).join(',');

          if (newKey === oldKey) {
            isHave = true;
            after[i].modifyTypeDesc = '无变更';
            tableItem.forEach(function (cell) {
              if (!(after[i][cell.columnName] === before[_j][cell.columnName] || cell.targetName !== undefined && cell.targetName.length > 0 && after[i][cell.targetName] === before[_j][cell.targetName])) {
                after[i].modifyTypeDesc = '变更'; // 把老数据下标保存到数据中

                var _loop3 = function _loop3(k) {
                  var tmpKey = keys.map(function (key) {
                    j = _j;
                    return beforeData[k][key];
                  }).join(',');

                  if (oldKey === tmpKey) {
                    after[i]['old-index'] = k;
                  }
                };

                for (var k = 0; k < beforeData.length; k++) {
                  _loop3(k);
                }
              }
            });
            before.splice(_j, 1);
            _j = before.length;
          }

          j = _j;
        };

        for (var j = 0; j < before.length; j++) {
          _loop2(j);
        }

        if (!isHave) {
          after[i].modifyTypeDesc = '新增';
        }
      };

      for (var i = 0; i < after.length; i++) {
        _loop(i);
      }

      for (var _i = 0; _i < before.length; _i++) {
        before[_i].modifyTypeDesc = '删除';
      }

      return after.concat(before);
    },
    // 预加载智能表单接口
    preloadingRequest: function preloadingRequest() {
      var requestList = this.formJson.pre_loading_request_list || [];
      requestList.forEach(function (item) {//
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/asp-smart-form/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_asp_smart_formvue_type_script_lang_js_ = (asp_smart_formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/asp-smart-form/index.vue?vue&type=style&index=0&lang=scss&
var asp_smart_formvue_type_style_index_0_lang_scss_ = __webpack_require__(72);

// CONCATENATED MODULE: ./src/components/asp-smart-form/index.vue






/* normalize component */

var asp_smart_form_component = Object(componentNormalizer["a" /* default */])(
  components_asp_smart_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var asp_smart_form_api; }
asp_smart_form_component.options.__file = "src/components/asp-smart-form/index.vue"
/* harmony default export */ var asp_smart_form = (asp_smart_form_component.exports);
// CONCATENATED MODULE: ./src/components/asp-smart-form/index.js



/* istanbul ignore next */

asp_smart_form.install = function (Vue) {
  Vue.component(asp_smart_form.name, asp_smart_form);
};

/* harmony default export */ var components_asp_smart_form = __webpack_exports__["default"] = (asp_smart_form);

/***/ })
/******/ ]);