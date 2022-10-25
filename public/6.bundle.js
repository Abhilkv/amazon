(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/home/styles.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-1!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/home/styles.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".productContainer-3vn86{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;overflow:hidden !important}.productContainer-3vn86 .boxContainer-2B8JX{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%;padding:0 30px}.productContainer-3vn86 .boxContainer-2B8JX .searchBar--lVkG{display:flex;align-items:center;justify-content:center;text-align:center;height:40px;padding:0 30px;border:none;background-color:rgba(255,255,255,0.957);border-radius:5px;box-shadow:0 0 5px 2px silver;color:rgba(30,30,30,0.47451);outline:none;box-shadow:0 0 5px 2px silver;width:30%;white-space:nowrap;overflow:hidden !important;text-overflow:ellipsis;text-align:left}.productContainer-3vn86 .boxContainer-2B8JX .category-RaH-2{display:flex;align-items:center;justify-content:center;text-align:center;height:40px;padding:0 30px;border:none;background-color:rgba(255,255,255,0.957);border-radius:5px;box-shadow:0 0 5px 2px silver;color:rgba(30,30,30,0.47451);outline:none;width:25%;cursor:pointer;text-align:left}.productContainer-3vn86 .boxContainer-2B8JX .optionText-2ivLw{background-color:rgba(255,255,255,0.957);border:none;color:rgba(30,30,30,0.47451)}.productContainer-3vn86 .productBlock-YKt2s{display:flex;width:100%;flex-wrap:wrap}.productContainer-3vn86 .fabButton-2xITQ{display:flex;align-items:center;justify-content:center;position:sticky;justify-content:flex-end;align-items:flex-end;background:transparent}.productContainer-3vn86 .fabButton-2xITQ .addButton-1T8F8{display:flex;align-items:center;justify-content:center;position:fixed;bottom:30px;right:50px;height:60px;width:60px;background-color:black;border-radius:60px;transition:all 0.4s ease-in-out}.productContainer-3vn86 .fabButton-2xITQ .addButton-1T8F8:hover{box-shadow:0px 5px 20px 5px #2f2f2f}.productContainer-3vn86 .fabButton-2xITQ .addButton-1T8F8 .addCircle-3pB2p{width:30px;height:5px;background-color:#fff;isolation:isolate;display:inline-block;position:relative}.productContainer-3vn86 .fabButton-2xITQ .addButton-1T8F8 .addCircle-3pB2p:after{display:block;position:absolute;top:0;width:30px;height:5px;content:\"\";background-color:#fff;transform:rotate(90deg)}@media only screen and (max-width: 600px){.productBlock-YKt2s{justify-content:center}.imageBlock-16lgH{padding:0}}\n", ""]);
// Exports
exports.locals = {
	"productContainer": "productContainer-3vn86",
	"boxContainer": "boxContainer-2B8JX",
	"searchBar": "searchBar--lVkG",
	"category": "category-RaH-2",
	"optionText": "optionText-2ivLw",
	"productBlock": "productBlock-YKt2s",
	"fabButton": "fabButton-2xITQ",
	"addButton": "addButton-1T8F8",
	"addCircle": "addCircle-3pB2p",
	"imageBlock": "imageBlock-16lgH"
};

/***/ }),

/***/ "./src/js/containers/home/homePage.jsx":
/*!*********************************************!*\
  !*** ./src/js/containers/home/homePage.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/components */ "./src/js/components/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./src/js/containers/home/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);






var HomePage = function HomePage(props) {
  var getProductsInfo = props.getProductsInfo,
      productsData = props.productsData,
      loading = props.loading,
      getCategories = props.getCategories,
      filterProducts = props.filterProducts,
      filterCategory = props.filterCategory;

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
      field = _useParams.field;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!field) {
      getProductsInfo();
    }

    getCategories();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (field) {
      if (field === 'mobile' || field === 'phone') {
        filterProducts("search=".concat(field));
      } else if (['Female', 'Male', 'Kids'].includes(field)) {
        filterProducts("gender=".concat(field));
      } else {
        filterProducts("category=".concat(field));
      }
    }
  }, [field]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_4___default.a.productContainer
  }, loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_components__WEBPACK_IMPORTED_MODULE_3__["Loader"], null), productsData.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_4___default.a.productBlock
  }, productsData.map(function (data) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_components__WEBPACK_IMPORTED_MODULE_3__["ProductCard"], {
      data: data
    });
  })));
};

HomePage.propTypes = {
  getProductsInfo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  productsData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape()),
  getCategories: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  categories: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape()),
  searchProduct: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  filterCategory: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  searchKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  category: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
HomePage.defaultProps = {
  productsData: [],
  categories: [],
  searchKey: '',
  category: ''
};
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/js/containers/home/index.js":
/*!*****************************************!*\
  !*** ./src/js/containers/home/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions */ "./src/js/actions/index.js");
/* harmony import */ var _store_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/api */ "./src/js/containers/home/store/api.js");
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homePage */ "./src/js/containers/home/homePage.jsx");



 // import submitMessage from './saga';

var mapStateToProps = function mapStateToProps(_ref) {
  var homePage = _ref.homePage;
  return {
    productsData: homePage.productsData,
    categories: homePage.categories,
    loading: homePage.loading,
    searchKey: homePage.searchKey,
    category: homePage.category
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getProductsInfo: _store_api__WEBPACK_IMPORTED_MODULE_2__["getProductsInfo"],
    getCategories: _store_api__WEBPACK_IMPORTED_MODULE_2__["getCategories"],
    filterProducts: _store_api__WEBPACK_IMPORTED_MODULE_2__["filterProducts"],
    searchProduct: function searchProduct(key) {
      dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["HOMEPAGE_PRODUCTS_DATA_SEARCH"],
        key: key
      });
    },
    filterCategory: function filterCategory(category) {
      dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["HOMEPAGE_PRODUCTS_DATA_FILTER"],
        category: category
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_homePage__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/js/containers/home/store/api.js":
/*!*********************************************!*\
  !*** ./src/js/containers/home/store/api.js ***!
  \*********************************************/
/*! exports provided: getProductsInfo, getCategories, filterProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsInfo", function() { return getProductsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterProducts", function() { return filterProducts; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/api */ "./src/js/store/api.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions */ "./src/js/actions/index.js");




var getProductsInfo =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var url, apiArgs;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = '/products';
            apiArgs = {
              API_CALL: {
                method: 'GET'
              },
              url: url,
              TYPES: {
                requestType: _actions__WEBPACK_IMPORTED_MODULE_3__["HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST"],
                successType: _actions__WEBPACK_IMPORTED_MODULE_3__["HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS"],
                failureType: _actions__WEBPACK_IMPORTED_MODULE_3__["HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL"]
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

  return function getProductsInfo() {
    return _ref.apply(this, arguments);
  };
}();
var getCategories =
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var url, apiArgs;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = '/categories';
            apiArgs = {
              API_CALL: {
                method: 'GET'
              },
              url: url,
              TYPES: {
                requestType: _actions__WEBPACK_IMPORTED_MODULE_3__["HOMEPAGE_CATEGORIES_DATA_FETCH_REQUEST"],
                successType: _actions__WEBPACK_IMPORTED_MODULE_3__["HOMEPAGE_CATEGORIES_DATA_FETCH_SUCCESS"],
                failureType: _actions__WEBPACK_IMPORTED_MODULE_3__["HOMEPAGE_CATEGORIES_DATA_FETCH_FAIL"]
              },
              isAuthRequired: false
            };
            Object(_store_api__WEBPACK_IMPORTED_MODULE_2__["default"])(apiArgs);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getCategories() {
    return _ref2.apply(this, arguments);
  };
}();
var filterProducts =
/*#__PURE__*/
function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(query) {
    var url, apiArgs;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = "/products?".concat(query);
            apiArgs = {
              API_CALL: {
                method: 'GET'
              },
              url: url,
              TYPES: {
                requestType: _actions__WEBPACK_IMPORTED_MODULE_3__["HOMEPAGE_PRODUCTS_DATA_FETCH_REQUEST"],
                successType: _actions__WEBPACK_IMPORTED_MODULE_3__["HOMEPAGE_PRODUCTS_DATA_FETCH_SUCCESS"],
                failureType: _actions__WEBPACK_IMPORTED_MODULE_3__["HOMEPAGE_PRODUCTS_DATA_FETCH_FAIL"]
              },
              isAuthRequired: false
            };
            Object(_store_api__WEBPACK_IMPORTED_MODULE_2__["default"])(apiArgs);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function filterProducts(_x) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/js/containers/home/styles.scss":
/*!********************************************!*\
  !*** ./src/js/containers/home/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/home/styles.scss");

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
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/home/styles.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/home/styles.scss");

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

/***/ "./src/js/layout/index.js":
/*!********************************!*\
  !*** ./src/js/layout/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_home_store_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/home/store/api */ "./src/js/containers/home/store/api.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/js/actions/index.js");
/* harmony import */ var _mainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainLayout */ "./src/js/layout/mainLayout.jsx");
/* eslint-disable linebreak-style */



 // import submitMessage from './saga';

var mapStateToProps = function mapStateToProps(_ref) {
  var homePage = _ref.homePage;
  return {
    productsData: homePage.productsData,
    categories: homePage.categories,
    loading: homePage.loading,
    searchKey: homePage.searchKey,
    category: homePage.category,
    gender: homePage.gender
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getCategories: _containers_home_store_api__WEBPACK_IMPORTED_MODULE_1__["getCategories"],
    getProductsInfo: _containers_home_store_api__WEBPACK_IMPORTED_MODULE_1__["getProductsInfo"],
    filterProducts: _containers_home_store_api__WEBPACK_IMPORTED_MODULE_1__["filterProducts"],
    getProductData: function getProductData(key) {
      dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["HOMEPAGE_PRODUCTS_DATA_SEARCH"],
        key: key
      });
    },
    filterCategory: function filterCategory(category) {
      dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["HOMEPAGE_PRODUCTS_DATA_FILTER"],
        category: category
      });
    },
    filterByPricey: function filterByPricey(priceRange) {
      dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["HOMEPAGE_PRODUCTS_DATA_FILTER_PRICE"],
        priceRange: priceRange
      });
    },
    filterByRating: function filterByRating(rating) {
      dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["HOMEPAGE_PRODUCTS_DATA_FILTER_RATING"],
        rating: rating
      });
    },
    filterGenderWise: function filterGenderWise(gender) {
      dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_2__["HOMEPAGE_PRODUCTS_DATA_FILTER_GENDER"],
        gender: gender
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_mainLayout__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/js/pages/homePage.jsx":
/*!***********************************!*\
  !*** ./src/js/pages/homePage.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/home */ "./src/js/containers/home/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout */ "./src/js/layout/index.js");




var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hideFilters: false
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_home__WEBPACK_IMPORTED_MODULE_1__["default"], props));
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
//# sourceMappingURL=6.bundle.js.map