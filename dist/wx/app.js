require("./common/manifest.js");
require("./common/vendor.js");
global.webpackJsonpMpvue([4],{

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(35);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(37);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(36)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4217bd4c", Component.options)
  } else {
    hotAPI.reload("data-v-4217bd4c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 36:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// import { wauthLogin } from '@api/index.js'
// import { lsSet } from '@utils/storage.js'
// import {wxTipText} from '@utils/toast'
/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // wx.login({
    //   timeout: 10000,
    //   success: (res) => {
    //     res.code && wx.request({
    //       url: wauthLogin,
    //       data: {
    //         code: res.code
    //       },
    //       header: {
    //         'content-type': 'application/x-www-form-urlencoded'
    //       },
    //       method: 'POST',
    //       success: function (res) {
    //         if (res.data.code === 2000) {
    //           lsSet('token', res.data.data)
    //         } else if (res.data.code === 4013) {
    //           lsSet('str', res.data.data)
    //           wx.redirectTo({
    //             url: '/pages/login/index'
    //           })
    //         }
    //       },
    //       fail: function (err) {
    //         wxTipText({
    //           title: err
    //         })
    //       }
    //     })
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // })
  }
});

/***/ })

},[33]);
//# sourceMappingURL=app.js.map