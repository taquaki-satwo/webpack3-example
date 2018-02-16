webpackJsonp([1],{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _add = __webpack_require__(1);

var _add2 = _interopRequireDefault(_add);

var _tax = __webpack_require__(2);

var _tax2 = _interopRequireDefault(_tax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var price1 = 400;
var price2 = 600;
var total = (0, _add2.default)(price1, price2);

var taxRate = 1.08;
var includeTax = (0, _tax2.default)(total, taxRate);

$('body').html(includeTax);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[3]);