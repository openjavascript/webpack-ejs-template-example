webpackJsonp([2],{

/***/ "./static/less/common.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./static/pages/index/subpages/home/index.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n    to be continue\n    <div>1 2</div>\n\n    <a href=\"./login.html\">login.html</a>\n</div>\n"

/***/ }),

/***/ "./static/pages/index/subpages/home/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./static/pages/index/subpages/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__ = __webpack_require__("./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_less_common_less__ = __webpack_require__("./static/less/common.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_less_common_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_less_common_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_less__ = __webpack_require__("./static/pages/index/subpages/home/index.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_less__);
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



var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.package = 'typescript-vue-webpack-example';
        _this.repo = 'https://github.com/openjavascript/typescript-vue-webpack-example';
        _this.mode = "production";
        _this.test = 'ttt';
        return _this;
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Component"])({
            template: __webpack_require__("./static/pages/index/subpages/home/index.html"),
            components: {}
        })
    ], HomeComponent);
    return HomeComponent;
}(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Vue"]));



/***/ })

});