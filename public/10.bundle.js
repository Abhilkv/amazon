(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/favourite/styles.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-1!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/favourite/styles.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".productContainer-1NVTZ{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:20px;width:100%;overflow:hidden !important}.productContainer-1NVTZ .boxContainer-2B6tU{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%;padding:0 30px}.productContainer-1NVTZ .boxContainer-2B6tU .searchBar-fjDJD{display:flex;align-items:center;justify-content:center;text-align:center;height:40px;padding:0 30px;border:none;background-color:rgba(255,255,255,0.957);border-radius:5px;box-shadow:0 0 5px 2px silver;color:rgba(30,30,30,0.47451);outline:none;box-shadow:0 0 5px 2px silver;width:30%;white-space:nowrap;overflow:hidden !important;text-overflow:ellipsis;text-align:left}.productContainer-1NVTZ .boxContainer-2B6tU .category-c9cvC{display:flex;align-items:center;justify-content:center;text-align:center;height:40px;padding:0 30px;border:none;background-color:rgba(255,255,255,0.957);border-radius:5px;box-shadow:0 0 5px 2px silver;color:rgba(30,30,30,0.47451);outline:none;width:25%;cursor:pointer;text-align:left}.productContainer-1NVTZ .boxContainer-2B6tU .optionText-3-7X5{background-color:rgba(255,255,255,0.957);border:none;color:rgba(30,30,30,0.47451)}.productContainer-1NVTZ .Accordion-1o1Tx{min-width:700px}.productContainer-1NVTZ .cartAccordian-26If4{font-weight:600;font-size:20px}.productContainer-1NVTZ .productBlock-3tuWa{display:flex;align-items:center;justify-content:center;flex-direction:column;width:70%;flex-wrap:wrap}.productContainer-1NVTZ .buttonBlock-8oAmv{border-top:1px solid #f0f0f0;background:#fff;padding:16px 22px;box-shadow:0 -2px 10px 0 rgba(0,0,0,0.1);box-sizing:border-box;margin:0;display:flex;align-items:center;justify-content:center;justify-content:flex-end}.productContainer-1NVTZ .buttonBlock-8oAmv .address-1Ygrm{background:#fb641b;box-shadow:0 1px 2px 0 rgba(0,0,0,0.2);border:none;color:#fff;padding:14px 15px;border-radius:2px;font-size:16px;display:flex;align-items:center;justify-content:center;font-weight:bold;min-width:200px;margin-left:20px;height:50px}.activeBlock-3TSP2{color:#fff !important;background-color:#2874f0 !important}.inactive-MhIsF{color:#878787 !important;background:white}.box-3xrr0{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.box-3xrr0 .inputField-biOy2{margin:10px;width:47%}.contentWrap-2vOYh{justify-content:flex-start}.contentWrap-2vOYh .inputField-biOy2{margin:10px;width:100%}.divider-3NgFT{margin:15px 0px;border:none;height:0px;width:100%}@media only screen and (max-width: 1500px){.productBlock-3tuWa{width:100% !important}}\n", ""]);
// Exports
exports.locals = {
	"productContainer": "productContainer-1NVTZ",
	"boxContainer": "boxContainer-2B6tU",
	"searchBar": "searchBar-fjDJD",
	"category": "category-c9cvC",
	"optionText": "optionText-3-7X5",
	"Accordion": "Accordion-1o1Tx",
	"cartAccordian": "cartAccordian-26If4",
	"productBlock": "productBlock-3tuWa",
	"buttonBlock": "buttonBlock-8oAmv",
	"address": "address-1Ygrm",
	"activeBlock": "activeBlock-3TSP2",
	"inactive": "inactive-MhIsF",
	"box": "box-3xrr0",
	"inputField": "inputField-biOy2",
	"contentWrap": "contentWrap-2vOYh",
	"divider": "divider-3NgFT"
};

/***/ }),

/***/ "./src/js/containers/favourite/favourite.jsx":
/*!***************************************************!*\
  !*** ./src/js/containers/favourite/favourite.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components */ "./src/js/components/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./src/js/containers/favourite/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);
/* eslint-disable react/button-has-type */

/* eslint-disable react/prop-types */







var Checkout = function Checkout(props) {
  var favourite = props.favourite,
      addToCart = props.addToCart,
      removeFromFav = props.removeFromFav;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (Object.keys(favourite).length === 0) {
      history.push('/checkout');
    }
  }, [favourite]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.productContainer
  }, Object.keys(favourite).length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
    defaultExpanded: true,
    expanded: true,
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Accordion
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionSummary"], {
    "aria-controls": "panel1a-content",
    id: "panel1a-header",
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.activeBlock
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.cartAccordian
  }, "WISH LIST")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionDetails"], null, Object.keys(favourite).length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.productBlock
  }, Object.keys(favourite).map(function (keys) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_components__WEBPACK_IMPORTED_MODULE_4__["CheckoutCard"], {
      openCart: function openCart() {},
      removeFromFav: removeFromFav,
      addToCart: addToCart,
      favourite: true,
      data: favourite[keys].data,
      id: keys,
      qty: favourite[keys].count,
      changeQty: props.changeQty,
      remove: props.removeItem,
      save: props.addToFavourite
    });
  })))));
};

Checkout.propTypes = {
  favourite: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape().isRequired
};
Checkout.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Checkout);

/***/ }),

/***/ "./src/js/containers/favourite/index.js":
/*!**********************************************!*\
  !*** ./src/js/containers/favourite/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions */ "./src/js/actions/index.js");
/* harmony import */ var _favourite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favourite */ "./src/js/containers/favourite/favourite.jsx");


 // import submitMessage from './saga';

var mapStateToProps = function mapStateToProps(_ref) {
  var details = _ref.details;
  return {
    favourite: details.favourite
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    removeFromFav: function removeFromFav(id) {
      dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["VIEW_PAGE_REMOVE_ITEM_FAVOURITE"],
        id: id
      });
    },
    addToCart: function addToCart(item) {
      dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["VIEW_PAGE_ADD_TO_CART"],
        item: item
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_favourite__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/js/containers/favourite/styles.scss":
/*!*************************************************!*\
  !*** ./src/js/containers/favourite/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/favourite/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/favourite/styles.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/favourite/styles.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/js/pages/wishList.jsx":
/*!***********************************!*\
  !*** ./src/js/pages/wishList.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_favourite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/favourite */ "./src/js/containers/favourite/index.js");
/* harmony import */ var _layout_mainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/mainLayout */ "./src/js/layout/mainLayout.jsx");




var WishList = function WishList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_mainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hideFilters: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_favourite__WEBPACK_IMPORTED_MODULE_1__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (WishList);

/***/ })

}]);
//# sourceMappingURL=10.bundle.js.map