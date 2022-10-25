(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/orderDetails/styles.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-1!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/orderDetails/styles.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".container-2APdx{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;padding:50px 0px}.container-2APdx .contentbox-1cT0G{width:70%;display:flex;align-items:center;justify-content:center;flex-direction:column}.container-2APdx .contentbox-1cT0G .divider-pPD_j{margin:20px;width:91%;border:0.1px solid rgba(61,60,60,0.15);box-shadow:0 4px 8px 0 rgba(0,0,0,0.2)}.container-2APdx .contentbox-1cT0G .inputWrapper-3YjP0{width:90%;min-width:200px;background-color:#fff;margin-left:15px;display:flex;align-items:center;justify-content:center;border:1px solid #dbdbdb}.container-2APdx .contentbox-1cT0G .inputWrapper-3YjP0 .searchBarHeader-25KKH{height:40px;width:90%;border:none;outline:none;padding:0 10px;transition:all 0.3s ease-in-out}.container-2APdx .contentbox-1cT0G .inputWrapper-3YjP0 .searchBarHeader-25KKH:hover{box-shadow:0 1px 12px 2px #dbdbdb}.container-2APdx .contentbox-1cT0G .inputWrapper-3YjP0 .imageWrapper-ilx36{display:flex;align-items:center;justify-content:center;width:20%;min-width:88px;height:42px;outline:none;border:none;background:#2874f0;transition:all 0.3s ease-in-out;color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2)}.container-2APdx .contentbox-1cT0G .inputWrapper-3YjP0 .imageWrapper-ilx36:hover{cursor:pointer;box-shadow:0 1px 12px 2px #2874f0}.container-2APdx .contentbox-1cT0G .inputWrapper-3YjP0 .imageWrapper-ilx36 span{padding-left:10px}.container-2APdx .contentbox-1cT0G .productdetails-1QQVn{width:100%;display:flex;justify-content:space-between;align-items:center}.container-2APdx .contentbox-1cT0G .addressWrapper-UFiAI{width:90%;transition:all 0.3s ease-in-out;padding:15px 40px;display:flex;justify-content:space-between;margin:10px;border:1px solid #dbdbdb}.container-2APdx .contentbox-1cT0G .addressWrapper-UFiAI:hover{box-shadow:0 1px 12px 2px #dbdbdb}.container-2APdx .contentbox-1cT0G .addressWrapper-UFiAI .details-2yjFt{display:flex;flex-direction:column}.container-2APdx .contentbox-1cT0G .addressWrapper-UFiAI .addressBlock-1C8d1{display:flex;flex-direction:column;min-width:40%}.container-2APdx .contentbox-1cT0G .addressWrapper-UFiAI .addressBlock-1C8d1 h3{transition:all 0.3s ease-in-out}.container-2APdx .contentbox-1cT0G .addressWrapper-UFiAI .addressBlock-1C8d1:hover h3{color:#2874f0}.container-2APdx .contentbox-1cT0G .addressWrapper-UFiAI .detailsWrapper-2HLP6{display:flex;justify-content:space-between;width:100%}.container-2APdx .contentbox-1cT0G .addressWrapper-UFiAI .productDetailsContainer-3vrIT{display:flex;justify-content:space-between;height:100%;flex-direction:column;padding-left:30px}.container-2APdx .contentbox-1cT0G .addressWrapper-UFiAI .productDetailsContainer-3vrIT h4,.container-2APdx .contentbox-1cT0G .addressWrapper-UFiAI .productDetailsContainer-3vrIT span{padding:5 5px}.container-2APdx .productCard-36HdG{display:flex;flex-wrap:wrap;width:100%;justify-content:center;padding:10px 0}@media only screen and (max-width: 600px){.contentbox-1cT0G{width:90% !important}.contentbox-1cT0G .imageWrapper-ilx36 span{display:none}.addressWrapper-UFiAI{width:85% !important;flex-direction:column}.container-2APdx{padding:25px 0px}}\n", ""]);
// Exports
exports.locals = {
	"container": "container-2APdx",
	"contentbox": "contentbox-1cT0G",
	"divider": "divider-pPD_j",
	"inputWrapper": "inputWrapper-3YjP0",
	"searchBarHeader": "searchBarHeader-25KKH",
	"imageWrapper": "imageWrapper-ilx36",
	"productdetails": "productdetails-1QQVn",
	"addressWrapper": "addressWrapper-UFiAI",
	"details": "details-2yjFt",
	"addressBlock": "addressBlock-1C8d1",
	"detailsWrapper": "detailsWrapper-2HLP6",
	"productDetailsContainer": "productDetailsContainer-3vrIT",
	"productCard": "productCard-36HdG"
};

/***/ }),

/***/ "./src/js/containers/orderDetails/index.js":
/*!*************************************************!*\
  !*** ./src/js/containers/orderDetails/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions */ "./src/js/actions/index.js");
/* harmony import */ var _store_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/api */ "./src/js/containers/orderDetails/store/api.js");
/* harmony import */ var _ordersPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordersPage */ "./src/js/containers/orderDetails/ordersPage.jsx");



 // import submitMessage from './saga';

var mapStateToProps = function mapStateToProps(_ref) {
  var orders = _ref.orders;
  return {
    ordersData: orders.ordersData,
    loading: orders.loading
  };
};

var mapDispatchToProps = function mapDispatchToProps() {
  return {
    getOrderInfo: _store_api__WEBPACK_IMPORTED_MODULE_2__["getOrderInfo"]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_ordersPage__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/js/containers/orderDetails/ordersPage.jsx":
/*!*******************************************************!*\
  !*** ./src/js/containers/orderDetails/ordersPage.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var app_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components */ "./src/js/components/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./src/js/containers/orderDetails/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);


/* eslint-disable no-underscore-dangle */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable no-unused-expressions */

/* eslint-disable jsx-a11y/click-events-have-key-events */






var OrdersPage = function OrdersPage(props) {
  var ordersData = props.ordersData,
      loading = props.loading,
      getOrderInfo = props.getOrderInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      orderId = _useState2[0],
      setSearch = _useState2[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var query = new URLSearchParams(props.location.search);
    var id = query.get('id');
    getOrderInfo(id);
  }, []);

  var searchProducts = function searchProducts() {
    if (orderId !== '') {
      // dispatch({ type: HOMEPAGE_PRODUCTS_DATA_SEARCH, key: searchKeyWord });
      getOrderInfo(orderId);
    }
  };

  var redirect = function redirect(path) {
    history.push("/details?id=".concat(path));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container
  }, loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(app_components__WEBPACK_IMPORTED_MODULE_4__["Loader"], null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.contentbox
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inputWrapper
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    value: orderId,
    onChange: function onChange(event) {
      setSearch(event.target.value);
    },
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.searchBarHeader,
    placeholder: "Search for products brands and more",
    onKeyDown: function onKeyDown(event) {
      event.key === 'Enter' && searchProducts();
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.imageWrapper,
    onClick: searchProducts,
    type: "button"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../../../../assets/searchWhite.svg",
    alt: "search",
    width: 20,
    height: 20
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Search Orders"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.divider
  }), ordersData && ordersData.userData && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.addressWrapper
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.addressBlock
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.details
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, ordersData.userData.address), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, ' ', ordersData.userData.city), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, ' ', ordersData.userData.state), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, ' ', ordersData.userData.landMark))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.addressBlock
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Personal Data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.details
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, ' ', ordersData.userData.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, ' ', ordersData.userData.phone), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, ' ', ordersData.userData.email)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.productCard
  }, ordersData && ordersData.items && Object.values(ordersData.items).map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.addressWrapper,
      style: {
        cursor: 'pointer',
        width: 'auto'
      },
      onClick: function onClick() {
        return redirect(item.data._id);
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.addressBlock
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, item.data.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.detailsWrapper
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.data.avatar,
      width: 80,
      height: 80,
      alt: "product"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_5___default.a.productDetailsContainer
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Price: \u20B9", (item.data.price * ((100 - Number(item.data.discount)) / 100)).toFixed(2)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Brand:", ' ', item.data.brand), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Payment status:", ' ', ordersData.payment), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Quantity:", ' ', item.count)))));
  }))));
};

OrdersPage.propTypes = {
  ordersData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape()),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
OrdersPage.defaultProps = {
  ordersData: {},
  loading: false
};
/* harmony default export */ __webpack_exports__["default"] = (OrdersPage);

/***/ }),

/***/ "./src/js/containers/orderDetails/store/api.js":
/*!*****************************************************!*\
  !*** ./src/js/containers/orderDetails/store/api.js ***!
  \*****************************************************/
/*! exports provided: getOrderInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderInfo", function() { return getOrderInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/api */ "./src/js/store/api.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions */ "./src/js/actions/index.js");


/* eslint-disable import/prefer-default-export */



var getOrderInfo =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
    var url, apiArgs;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "/orders/".concat(id);
            apiArgs = {
              API_CALL: {
                method: 'GET'
              },
              url: url,
              TYPES: {
                requestType: _actions__WEBPACK_IMPORTED_MODULE_3__["ORDERS_PAGE_ORDERS_DATA_FETCH_REQUEST"],
                successType: _actions__WEBPACK_IMPORTED_MODULE_3__["ORDERS_PAGE_ORDERS_DATA_FETCH_SUCCESS"],
                failureType: _actions__WEBPACK_IMPORTED_MODULE_3__["ORDERS_PAGE_ORDERS_DATA_FETCH_FAIL"]
              },
              isAuthRequired: false
            };
            Object(_store_api__WEBPACK_IMPORTED_MODULE_2__["default"])(apiArgs);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getOrderInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/js/containers/orderDetails/styles.scss":
/*!****************************************************!*\
  !*** ./src/js/containers/orderDetails/styles.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/orderDetails/styles.scss");

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
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/orderDetails/styles.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/orderDetails/styles.scss");

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

/***/ "./src/js/env.js":
/*!***********************!*\
  !*** ./src/js/env.js ***!
  \***********************/
/*! exports provided: token, email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "token", function() { return token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGlsa25pQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9BYmhpbGt2IiwiaWF0IjoxNjY1ODkyMDQyLCJleHAiOjE2NjYzMjQwNDJ9.7ZuXZUOd56wFzvZgWqcRHkadFhlRYTam7aaD1s6iOnU';
var email = 'abhilkni@gmail.com';

/***/ }),

/***/ "./src/js/pages/orderDetails.jsx":
/*!***************************************!*\
  !*** ./src/js/pages/orderDetails.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_orderDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/orderDetails */ "./src/js/containers/orderDetails/index.js");
/* harmony import */ var _layout_mainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/mainLayout */ "./src/js/layout/mainLayout.jsx");




var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_mainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hideFilters: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_orderDetails__WEBPACK_IMPORTED_MODULE_1__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/js/store/api.js":
/*!*****************************!*\
  !*** ./src/js/store/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return apiCall; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/lib/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app-registry */ "./node_modules/app-registry/src/index.js");
/* harmony import */ var app_registry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(app_registry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./src/js/store.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../env */ "./src/js/env.js");




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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}







var isAuthTokenValid = function isAuthTokenValid(authToken) {
  return authToken !== null && authToken !== '';
};

function apiCall(_x) {
  return _apiCall.apply(this, arguments);
}

function _apiCall() {
  _apiCall = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(payload) {
    var API_CALL, TYPES, url, data, _payload$isAuthRequir, isAuthRequired, apiEndpoint, API_URL, apiParams, apiResponse, errMessage;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            API_CALL = payload.API_CALL, TYPES = payload.TYPES, url = payload.url, data = payload.data, _payload$isAuthRequir = payload.isAuthRequired, isAuthRequired = _payload$isAuthRequir === void 0 ? true : _payload$isAuthRequir; // const apiEndpoint = 'https://upayments-studycase-api.herokuapp.com/api';
            // const apiEndpoint = 'http://localhost:8081';

            apiEndpoint = 'https://amazon-clone-abhil.herokuapp.com';
            API_URL = "".concat(apiEndpoint).concat(url); // Re-routing to login if not authorized

            if (isAuthRequired && !isAuthTokenValid(_env__WEBPACK_IMPORTED_MODULE_7__["token"])) {
              alert('Token missing');
            } // Setting API parameters


            apiParams = _objectSpread({}, API_CALL, {
              data: data,
              url: API_URL
            }, isAuthRequired && {
              headers: {
                Authorization: "Bearer ".concat(_env__WEBPACK_IMPORTED_MODULE_7__["token"])
              }
            });
            _context.prev = 5; //  Setting initial state

            if (TYPES.requestType) {
              _store__WEBPACK_IMPORTED_MODULE_6__["store"].dispatch({
                type: TYPES.requestType
              });
            } // Make API call


            _context.next = 9;
            return axios__WEBPACK_IMPORTED_MODULE_3___default()(apiParams);

          case 9:
            apiResponse = _context.sent;

            if (!apiResponse.data) {
              _context.next = 13;
              break;
            } // API call success


            _store__WEBPACK_IMPORTED_MODULE_6__["store"].dispatch({
              type: TYPES.successType,
              data: apiResponse.data
            });
            return _context.abrupt("return", apiResponse.data);

          case 13:
            _context.next = 21;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](5); // API call failure

            errMessage = _context.t0.message;

            if (_context.t0.response) {
              errMessage = _context.t0.response.data.message || _context.t0.response.data.error.message;
            } // Logging the error


            app_registry__WEBPACK_IMPORTED_MODULE_5___default.a.get('logger').info("The API ".concat(API_URL, " returned this error:"), JSON.stringify(errMessage));
            _store__WEBPACK_IMPORTED_MODULE_6__["store"].dispatch({
              type: TYPES.failureType
            });

          case 21:
            return _context.abrupt("return", null);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 15]]);
  }));
  return _apiCall.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=9.bundle.js.map