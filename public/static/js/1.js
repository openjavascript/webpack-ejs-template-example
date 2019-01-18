webpackJsonp([1],{

/***/ "./node_modules/bootstrap-vue/es/components/layout/col.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export computeBkPtClass */
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__("./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_memoize__ = __webpack_require__("./node_modules/bootstrap-vue/es/utils/memoize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_suffix_prop_name__ = __webpack_require__("./node_modules/bootstrap-vue/es/utils/suffix-prop-name.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_object__ = __webpack_require__("./node_modules/bootstrap-vue/es/utils/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_array__ = __webpack_require__("./node_modules/bootstrap-vue/es/utils/array.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * Generates a prop object with a type of
 * [Boolean, String, Number]
 */
function boolStrNum() {
  return {
    type: [Boolean, String, Number],
    default: false
  };
}

/**
 * Generates a prop object with a type of
 * [String, Number]
 */
function strNum() {
  return {
    type: [String, Number],
    default: null
  };
}

var computeBkPtClass = Object(__WEBPACK_IMPORTED_MODULE_1__utils_memoize__["a" /* default */])(function computeBkPt(type, breakpoint, val) {
  var className = type;
  if (val === false || val === null || val === undefined) {
    return undefined;
  }
  if (breakpoint) {
    className += '-' + breakpoint;
  }
  // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <b-col sm /> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.
  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  }
  // .order-md-6
  className += '-' + val;
  return className.toLowerCase();
});

var BREAKPOINTS = ['sm', 'md', 'lg', 'xl'];
// Supports classes like: .col-sm, .col-md-6, .col-lg-auto
var breakpointCol = BREAKPOINTS.reduce(
// eslint-disable-next-line no-sequences
function (propMap, breakpoint) {
  return propMap[breakpoint] = boolStrNum(), propMap;
}, Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["b" /* create */])(null));
// Supports classes like: .offset-md-1, .offset-lg-12
var breakpointOffset = BREAKPOINTS.reduce(
// eslint-disable-next-line no-sequences
function (propMap, breakpoint) {
  return propMap[Object(__WEBPACK_IMPORTED_MODULE_2__utils_suffix_prop_name__["a" /* default */])(breakpoint, 'offset')] = strNum(), propMap;
}, Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["b" /* create */])(null));
// Supports classes like: .order-md-1, .order-lg-12
var breakpointOrder = BREAKPOINTS.reduce(
// eslint-disable-next-line no-sequences
function (propMap, breakpoint) {
  return propMap[Object(__WEBPACK_IMPORTED_MODULE_2__utils_suffix_prop_name__["a" /* default */])(breakpoint, 'order')] = strNum(), propMap;
}, Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["b" /* create */])(null));

// For loop doesn't need to check hasOwnProperty
// when using an object created from null
var breakpointPropMap = Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["a" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["b" /* create */])(null), {
  col: Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["c" /* keys */])(breakpointCol),
  offset: Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["c" /* keys */])(breakpointOffset),
  order: Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["c" /* keys */])(breakpointOrder)
});

var props = Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["a" /* assign */])({}, breakpointCol, breakpointOffset, breakpointOrder, {
  tag: {
    type: String,
    default: 'div'
  },
  // Generic flexbox .col
  col: {
    type: Boolean,
    default: false
  },
  // .col-[1-12]|auto
  cols: strNum(),
  // .offset-[1-12]
  offset: strNum(),
  // Flex ordering utility .order-[1-12]
  order: strNum(),
  alignSelf: {
    type: String,
    default: null,
    validator: function validator(str) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__utils_array__["a" /* arrayIncludes */])(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], str);
    }
  }
});

/**
 * We need ".col" to default in when no other props are passed,
 * but always render when col=true.
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _classList$push;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    var classList = [];
    // Loop through `col`, `offset`, `order` breakpoint props
    for (var type in breakpointPropMap) {
      // Returns colSm, offset, offsetSm, orderMd, etc.
      var _keys = breakpointPropMap[type];
      for (var i = 0; i < _keys.length; i++) {
        // computeBkPt(col, colSm => Sm, value=[String, Number, Boolean])
        var c = computeBkPtClass(type, _keys[i].replace(type, ''), props[_keys[i]]);
        // If a class is returned, push it onto the array.
        if (c) {
          classList.push(c);
        }
      }
    }

    classList.push((_classList$push = {
      // Default to .col if no other classes generated nor `cols` specified.
      col: props.col || classList.length === 0 && !props.cols
    }, _defineProperty(_classList$push, 'col-' + props.cols, props.cols), _defineProperty(_classList$push, 'offset-' + props.offset, props.offset), _defineProperty(_classList$push, 'order-' + props.order, props.order), _defineProperty(_classList$push, 'align-self-' + props.alignSelf, props.alignSelf), _classList$push));

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, { class: classList }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/layout/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__("./node_modules/vue-functional-data-merge/dist/lib.esm.js");


var props = {
  tag: {
    type: String,
    default: 'div'
  },
  fluid: {
    type: Boolean,
    default: false
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      class: {
        'container': !props.fluid,
        'container-fluid': props.fluid
      }
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/layout/row.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__("./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_array__ = __webpack_require__("./node_modules/bootstrap-vue/es/utils/array.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var COMMON_ALIGNMENT = ['start', 'end', 'center'];

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  noGutters: {
    type: Boolean,
    default: false
  },
  alignV: {
    type: String,
    default: null,
    validator: function validator(str) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["a" /* arrayIncludes */])(COMMON_ALIGNMENT.concat(['baseline', 'stretch']), str);
    }
  },
  alignH: {
    type: String,
    default: null,
    validator: function validator(str) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["a" /* arrayIncludes */])(COMMON_ALIGNMENT.concat(['between', 'around']), str);
    }
  },
  alignContent: {
    type: String,
    default: null,
    validator: function validator(str) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["a" /* arrayIncludes */])(COMMON_ALIGNMENT.concat(['between', 'around', 'stretch']), str);
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'row',
      class: (_class = {
        'no-gutters': props.noGutters
      }, _defineProperty(_class, 'align-items-' + props.alignV, props.alignV), _defineProperty(_class, 'justify-content-' + props.alignH, props.alignH), _defineProperty(_class, 'align-content-' + props.alignContent, props.alignContent), _class)
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export from */
/* unused harmony export isArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrayIncludes; });
/* unused harmony export arrayFind */
/* unused harmony export concat */
// Production steps of ECMA-262, Edition 6, 22.1.2.1
// es6-ified by @alexsasharegan
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;
    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function toLength(value) {
      return Math.min(Math.max(toInteger(value), 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T = void 0;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue = void 0;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }();
}

// https://tc39.github.io/ecma262/#sec-array.prototype.find
// Needed for IE support
if (!Array.prototype.find) {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

// Static
var from = Array.from;
var isArray = Array.isArray;

// Instance
var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};
var arrayFind = function arrayFind(array, fn, thisArg) {
  return array.find(fn, thisArg);
};
function concat() {
  return Array.prototype.concat.apply([], arguments);
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/memoize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = memoize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__("./node_modules/bootstrap-vue/es/utils/object.js");


function memoize(fn) {
  var cache = Object(__WEBPACK_IMPORTED_MODULE_0__object__["b" /* create */])(null);

  return function memoizedFn() {
    var args = JSON.stringify(arguments);
    return cache[args] = cache[args] || fn.apply(null, arguments);
  };
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/object.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* unused harmony export getOwnPropertyNames */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return keys; });
/* unused harmony export defineProperties */
/* unused harmony export defineProperty */
/* unused harmony export freeze */
/* unused harmony export getOwnPropertyDescriptor */
/* unused harmony export getOwnPropertySymbols */
/* unused harmony export getPrototypeOf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return create; });
/* unused harmony export isFrozen */
/* unused harmony export is */
/* unused harmony export readonlyDescriptor */
/**
 * Aliasing Object[method] allows the minifier to shorten methods to a single character variable,
 * as well as giving BV a chance to inject polyfills.
 * As long as we avoid
 * - import * as Object from "utils/object"
 * all unused exports should be removed by tree-shaking.
 */

// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
if (typeof Object.assign !== 'function') {
  Object.assign = function (target, varArgs) {
    // .length of function is 2

    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Polyfill
if (!Object.is) {
  Object.is = function (x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      // eslint-disable-next-line no-self-compare
      return x !== x && y !== y;
    }
  };
}

var assign = Object.assign;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var keys = Object.keys;
var defineProperties = Object.defineProperties;
var defineProperty = Object.defineProperty;
var freeze = Object.freeze;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getPrototypeOf = Object.getPrototypeOf;
var create = Object.create;
var isFrozen = Object.isFrozen;
var is = Object.is;

function readonlyDescriptor() {
  return { enumerable: true, configurable: false, writable: false };
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/suffix-prop-name.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = suffixPropName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upper_first__ = __webpack_require__("./node_modules/bootstrap-vue/es/utils/upper-first.js");


/**
 * Suffix can be a falsey value so nothing is appended to string.
 * (helps when looping over props & some shouldn't change)
 * Use data last parameters to allow for currying.
 * @param {string} suffix
 * @param {string} str
 */
function suffixPropName(suffix, str) {
  return str + (suffix ? Object(__WEBPACK_IMPORTED_MODULE_0__upper_first__["a" /* default */])(suffix) : '');
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/upper-first.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = upperFirst;
/**
 * @param {string} str
 */
function upperFirst(str) {
  if (typeof str !== 'string') {
    str = String(str);
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),

/***/ "./node_modules/vue-functional-data-merge/dist/lib.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeData; });
var __assign=function(){return(__assign=Object.assign||function(e){for(var a,s=1,t=arguments.length;s<t;s++)for(var r in a=arguments[s])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)};function mergeData(){for(var e,a,s={},t=arguments.length;t--;)for(var r=0,c=Object.keys(arguments[t]);r<c.length;r++)switch(e=c[r]){case"class":case"style":case"directives":Array.isArray(s[e])||(s[e]=[]),s[e]=s[e].concat(arguments[t][e]);break;case"staticClass":if(!arguments[t][e])break;void 0===s[e]&&(s[e]=""),s[e]&&(s[e]+=" "),s[e]+=arguments[t][e].trim();break;case"on":case"nativeOn":s[e]||(s[e]={});for(var n=0,o=Object.keys(arguments[t][e]||{});n<o.length;n++)a=o[n],s[e][a]?s[e][a]=[].concat(s[e][a],arguments[t][e][a]):s[e][a]=arguments[t][e][a];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":s[e]||(s[e]={}),s[e]=__assign({},arguments[t][e],s[e]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:s[e]||(s[e]=arguments[t][e])}return s}
//# sourceMappingURL=lib.esm.js.map


/***/ }),

/***/ "./static/less/common.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./static/pages/index/subpages/about/index.html":
/***/ (function(module, exports) {

module.exports = "<b-container class=\"content\">\n  <b-row>\n    <b-col class=\"content\">\n      <h1>\n        <strong>This is the about page</strong>\n      </h1>\n      <p>Make sure to follow the project on\n        <a class=\"repo-link\" :href=\"repo\">GitHub</a> to stay up to date with the latest releases, or contribute to the broject by opening an issue or making\n        a pull-request!</p>\n    </b-col>\n  </b-row>\n</b-container>\n"

/***/ }),

/***/ "./static/pages/index/subpages/about/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./static/pages/index/subpages/about/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__ = __webpack_require__("./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_vue_es_components_layout_container__ = __webpack_require__("./node_modules/bootstrap-vue/es/components/layout/container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_vue_es_components_layout_col__ = __webpack_require__("./node_modules/bootstrap-vue/es/components/layout/col.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_vue_es_components_layout_row__ = __webpack_require__("./node_modules/bootstrap-vue/es/components/layout/row.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_utils_log__ = __webpack_require__("./static/utils/log.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_less_common_less__ = __webpack_require__("./static/less/common.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_less_common_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_less_common_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_less__ = __webpack_require__("./static/pages/index/subpages/about/index.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__index_less__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AboutComponent = /** @class */ (function (_super) {
    __extends(AboutComponent, _super);
    function AboutComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.repo = 'https://github.com/openjavascript/typescript-vue-webpack-example';
        return _this;
    }
    AboutComponent.prototype.mounted = function () {
        var _this = this;
        if (!this.logger)
            this.logger = new __WEBPACK_IMPORTED_MODULE_4__static_utils_log__["a" /* Logger */]();
        this.$nextTick(function () { return _this.logger.info('about is ready!'); });
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Component"])({
            template: __webpack_require__("./static/pages/index/subpages/about/index.html"),
            components: {
                'b-container': __WEBPACK_IMPORTED_MODULE_1_bootstrap_vue_es_components_layout_container__["a" /* default */],
                'b-col': __WEBPACK_IMPORTED_MODULE_2_bootstrap_vue_es_components_layout_col__["a" /* default */],
                'b-row': __WEBPACK_IMPORTED_MODULE_3_bootstrap_vue_es_components_layout_row__["a" /* default */]
            }
        })
    ], AboutComponent);
    return AboutComponent;
}(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Vue"]));

console.log('vue from about');


/***/ }),

/***/ "./static/utils/log.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.info = function (msg) {
        console.info(msg);
    };
    Logger.prototype.warn = function (msg) {
        console.warn(msg);
    };
    Logger.prototype.error = function (msg) {
        console.error(msg);
    };
    return Logger;
}());



/***/ })

});