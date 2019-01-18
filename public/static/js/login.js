webpackJsonp([5],{

/***/ "./static/less/common.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./static/pages/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_material__ = __webpack_require__("./node_modules/vue-material/dist/vue-material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_material___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_material__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iview__ = __webpack_require__("./node_modules/iview/dist/iview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_less_common_less__ = __webpack_require__("./static/less/common.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_less_common_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_less_common_less__);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_iview___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_material___default.a);
var LoginComponent = __webpack_require__("./static/pages/login/subpages/login/index.ts").LoginComponent;
// tslint:disable-next-line:no-unused-expression
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    el: '#app',
    computed: {
        viewComponent: function () {
            return LoginComponent;
        }
    },
    render: function (h) { return h(this.viewComponent); }
});


/***/ }),

/***/ "./static/pages/login/subpages/login/index.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\r\n    <div class=\"form-wrapper\">\r\n        <a href=\"./\">index.html</a>\r\n        <i-form ref=\"formLogin\" :model=\"formLogin\" :rules=\"loginRule\" :label-width=\"80\">\r\n            <tabs ref=\"tab\" v-model=\"formLogin.formtype\" :animated=\"false\">\r\n                <tab-pane label=\"普通登陆\" name=\"normal\">\r\n                </tab-pane>\r\n                <tab-pane label=\"LDAP登陆\" name=\"ldap\">\r\n                </tab-pane>\r\n            </tabs>\r\n            <form-item prop=\"formtype\" style=\"display:none;\">\r\n                <i-input type=\"text\" v-model=\"formLogin.formtype\"></i-input>\r\n            </form-item>\r\n            <form-item label=\"e-mail\" prop=\"username\">\r\n                <i-input type=\"text\" v-model=\"formLogin.username\"></i-input>\r\n            </form-item>\r\n            <form-item label=\"password\" prop=\"password\">\r\n                <i-input type=\"password\" v-model=\"formLogin.password\"></i-input>\r\n            </form-item>\r\n            <form-item>\r\n                <i-button type=\"primary\" @click=\"handleSubmit('formLogin')\">Submit</i-button>\r\n                <i-button @click=\"handleReset('formLogin')\" style=\"margin-left: 8px\">Reset</i-button>\r\n            </form-item>\r\n        </i-form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./static/pages/login/subpages/login/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./static/pages/login/subpages/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__ = __webpack_require__("./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__("./static/pages/login/subpages/login/index.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);
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


var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.package = 'typescript-vue-webpack-example';
        _this.repo = 'https://github.com/openjavascript/typescript-vue-webpack-example';
        _this.mode = "production";
        return _this;
    }
    LoginComponent.prototype.data = function () {
        var validatePass = function (rule, value, callback) {
            if (value === '') {
                callback(new Error('请填写密码'));
            }
            else {
                callback();
            }
        };
        return {
            formLogin: {
                formtype: 'normal',
                username: '',
                password: ''
            },
            loginRule: {
                username: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
                    { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
                ],
                password: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ]
            }
        };
    };
    LoginComponent.prototype.handleSubmit = function (name) {
        var _this = this;
        console.log('handleSubmit', name, Date.now());
        console.log(this.formLogin);
        var form = this.$refs[name];
        //console.log( 'form data', JSON.stringify( form.model ) );
        form.validate(function (valid) {
            if (valid) {
                _this.$Message.success('Success!');
            }
            else {
                _this.$Message.error('Fail!');
            }
        });
    };
    LoginComponent.prototype.handleReset = function (name) {
        console.log('handleReset', name, Date.now());
        /*this.$refs[name].resetFields();*/
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Component"])({
            template: __webpack_require__("./static/pages/login/subpages/login/index.html")
        })
    ], LoginComponent);
    return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Vue"]));



/***/ })

},["./static/pages/login/index.ts"]);