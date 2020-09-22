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
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.description");

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.iterator");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.from");

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptor");

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors");

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice");

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.array.concat"
var es_array_concat_ = __webpack_require__(13);

// EXTERNAL MODULE: external "core-js/modules/es.array.map"
var es_array_map_ = __webpack_require__(12);

// EXTERNAL MODULE: external "core-js/modules/es.symbol"
var es_symbol_ = __webpack_require__(26);

// EXTERNAL MODULE: external "core-js/modules/es.array.filter"
var es_array_filter_ = __webpack_require__(19);

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__(0);

// EXTERNAL MODULE: external "core-js/modules/es.object.get-own-property-descriptor"
var es_object_get_own_property_descriptor_ = __webpack_require__(93);

// EXTERNAL MODULE: external "core-js/modules/es.object.get-own-property-descriptors"
var es_object_get_own_property_descriptors_ = __webpack_require__(94);

// EXTERNAL MODULE: external "core-js/modules/es.object.keys"
var es_object_keys_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// EXTERNAL MODULE: external "core-js/modules/es.symbol.description"
var es_symbol_description_ = __webpack_require__(28);

// EXTERNAL MODULE: external "core-js/modules/es.symbol.iterator"
var es_symbol_iterator_ = __webpack_require__(29);

// EXTERNAL MODULE: external "core-js/modules/es.array.from"
var es_array_from_ = __webpack_require__(54);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string"
var es_object_to_string_ = __webpack_require__(3);

// EXTERNAL MODULE: external "core-js/modules/es.string.iterator"
var es_string_iterator_ = __webpack_require__(27);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.iterator"
var web_dom_collections_iterator_ = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/esm/iterableToArray.js







function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: external "core-js/modules/es.array.slice"
var es_array_slice_ = __webpack_require__(95);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__(11);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.to-string"
var es_regexp_to_string_ = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/esm/unsupportedIterableToArray.js







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.11.2@@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(31);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/components/asp-smart-dialog.js






 // width 单位px
// 最小宽度360，最大宽度1200，计算公式：16*2 + 160*N + (N-1)*8
// 2: 360, 3: 528, 4: 696, 5: 864, 6: 1032, 7: 1200

var aspSmartDialog = external_vue_default.a.component('asp-smart-dialog', {
  functional: true,
  render: function render(h, self) {
    self.props.width = self.props.width || '360px';

    if (typeof self.props.width === 'number') {
      if (self.props.width > 1) {
        var width = self.props.width * 212 + (self.props.width - 1) * 8 + 48;
        self.props.width = "".concat(width > 1200 ? 1200 : width, "px");
      } else {
        self.props.width = '360px';
      }
    } // self.props.hasOwnProperty('view')


    if (Object.prototype.hasOwnProperty.call(self.props, 'view')) {
      self.props.customClass = 'asp-smart-dialog-dynamic';
    } // !self.props.hasOwnProperty('close-on-click-modal')


    if (!Object.prototype.hasOwnProperty.call(self.props, 'close-on-click-modal')) {
      self.props.closeOnClickModal = false;
    } // !self.props.hasOwnProperty('close-on-press-escape')


    if (!Object.prototype.hasOwnProperty.call(self.props, 'close-on-press-escape')) {
      self.props.closeOnPressEscape = false;
    }

    var directives = self.data.directives || [];
    self.data.directives = [].concat(_toConsumableArray(directives), [{
      name: 'drag'
    }, {
      name: 'next'
    }]);
    self.props.appendToBody = true;
    var onClose = self.listeners.close;
    var $on = {
      close: function close() {
        // 关闭时发送事件：解绑动态组件，解决再次打开时数据缓存的问题
        if (self.listeners['update:view']) {
          self.listeners['update:view'](null);
        }

        if (onClose) {
          onClose();
        }
      }
    };
    self.data.on = _objectSpread2(_objectSpread2(_objectSpread2({}, self.data.on), self.listeners), $on);
    self.data.attrs = _objectSpread2(_objectSpread2({}, self.data.attrs), self.props);
    return h('el-dialog', self.data, self.children && self.children.map(function (t) {
      if (t.data && t.data.attrs) {
        t.data.attrs = _objectSpread2(_objectSpread2({}, t.data.attrs), t.componentOptions && t.componentOptions.propsData);
      }

      if (t.data && t.data.on === undefined) {
        t.data.on = t.data.on || t.componentOptions && t.componentOptions.listeners;
      }

      return h(t.componentOptions && t.componentOptions.tag || t.tag, t.data, t.children || t.componentOptions && t.componentOptions.children);
    }));
  }
});
/* harmony default export */ var asp_smart_dialog = __webpack_exports__["default"] = (aspSmartDialog);

/***/ })

/******/ });