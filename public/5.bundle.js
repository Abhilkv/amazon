(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/createItem/styles.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-1!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/createItem/styles.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".container-1QCql{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:50px;margin:30px;overflow:hidden !important;width:30%}.container-1QCql .headline-AspT3{font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;margin-bottom:20px;font-weight:500}.category-2F7Vb{width:100%;box-sizing:content-box;height:34px;padding:5px 10px;border:none;background-color:rgba(255,255,255,0.957);border-radius:10px;box-shadow:0 0 5px 2px silver;color:rgba(30,30,30,0.47451);min-height:30px;font-size:16px;margin-bottom:25px;cursor:pointer}@media only screen and (max-width: 1500px){.container-1QCql{width:100% !important}.container-1QCql .headline-AspT3{font-size:30px}.container-1QCql .category-2F7Vb{width:100% !important;padding:20px;font-size:25px !important}}\n", ""]);
// Exports
exports.locals = {
	"container": "container-1QCql",
	"headline": "headline-AspT3",
	"category": "category-2F7Vb"
};

/***/ }),

/***/ "./src/js/containers/createItem/createPage.jsx":
/*!*****************************************************!*\
  !*** ./src/js/containers/createItem/createPage.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/components */ "./src/js/components/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../env */ "./src/js/env.js");
/* harmony import */ var _store_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/api */ "./src/js/containers/createItem/store/api.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ "./src/js/containers/createItem/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var CreatePage = function CreatePage(props) {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var query = new URLSearchParams(props.location.search);
  var productId = query.get('id');
  var categories = props.categories,
      getCategories = props.getCategories,
      addProduct = props.addProduct,
      submitResponse = props.submitResponse,
      loading = props.loading,
      getProductsInfo = props.getProductsInfo,
      productDataInfo = props.productDataInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: '',
    description: '',
    avatar: '',
    category: '',
    price: '',
    features: '',
    searchKeys: '',
    brand: '',
    gender: '',
    promoLine: '',
    rating: '',
    offerText: '',
    discount: '',
    tags: '',
    seller: '',
    sellerRating: '',
    services: '',
    warranty: ''
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      inputDetaisls = _useState2[0],
      setDetails = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getCategories();
    getProductsInfo(productId); // addData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (productDataInfo && productDataInfo.name) {
      var updatingData = {};
      Object.keys(inputDetaisls).forEach(function (item) {
        updatingData[item] = Array.isArray(productDataInfo[item]) ? productDataInfo[item].join(',') : productDataInfo[item];
      });
      setDetails(updatingData);
    }
  }, [productDataInfo]);

  var addData = function addData() {
    var feature = function feature(ca) {
      switch (ca) {
        case 'Electronics':
          return ['4 GB RAM | 64 GB ROM ', 'Expandable Upto 1 TB', '50MP + 5MP + 2MP | 8MP Front Camera', '16.76 cm (6.6 inch) Full HD+ Display', 'Exynos 850 Processor'];

        case 'Clothing':
          return ['1 Year Warranty', 'Cotton Fabric', 'All Season wear', 'Light color shade', 'Free size'];

        case 'Accessories':
          return ['Age Group 8 Yrs', 'Best in segment', 'Exporting quality', 'Made for heavy duty', 'Durable and long lasting'];

        case 'Furniture':
          return ['W x H x D: 16.1 inches x 18.5 inches x 23 inches', 'DIY - Basic assembly to be done with simple tools', 'Material: Particle Board', 'Storage Included', 'Configuration: Straight'];

        default:
          return ['Easy to use', 'Material: Plastic', 'Long lasting', 'Grade: Grade 1', 'Weight Range 400 g'];
      }
    };

    var brand = function brand(index) {
      var brands = ['Samsung', 'Lenovo', 'LG', 'Apple', 'Micormax', 'Nokia', 'Camal', 'Nexus', 'Nokia', 'Karbon'];
      return brands[index];
    };

    var offer = function offer(index) {
      var brands = ['Saver Deal', 'Bank Offer on ICICI', 'Top Festival Offers', 'Buy 2 get extra 5% off', 'Up to 50% off', 'Top discount on Sale', 'Value For Money', 'Limited offers'];
      return brands[index];
    };

    var promoLine = function promoLine(index) {
      var brands = ['Free Delivery', 'Fast Delivery', 'No coast EMI plans', 'Special Price', 'Partner Offers', 'Bank Offers applied'];
      return brands[index];
    };

    var seller = function seller(index) {
      var brands = ['HydtelRETAILSsales', 'Pollardwatersolution', 'TOPSKY', 'AmericanEnterprises', 'OmniTechRetail', 'BNUStudio', 'TrueComRetail'];
      return brands[index];
    };

    var setData = function setData(i) {
      var item = _store_api__WEBPACK_IMPORTED_MODULE_7__["productData"][i];
      var real = {
        name: item.name,
        description: item.description,
        avatar: item.avatar,
        category: item.category,
        price: item.price,
        features: feature(item.category),
        searchKeys: [item.name, item.category, 'phone'],
        brand: brand(Math.floor(Math.random() * 10)),
        gender: ['Male', 'Female', 'Others', 'Kids'][Math.floor(Math.random() * 10)],
        promoLine: promoLine(Math.floor(Math.random() * 10) % 6),
        rating: Math.floor(Math.random() * 10) % 6,
        offerText: offer(Math.floor(Math.random() * 10) % 8),
        discount: Math.floor(Math.random() * 100),
        tags: ['Bank Offer10% off on SBI Credit Card, up to ₹1,750, on orders of ₹5000 and aboveT&C', 'Bank Offer10% off on SBI Credit Card EMI Transactions, up to ₹2,250, on orders of ₹5000 and aboveT&C', 'Bank OfferAdditional ₹750 discount on SBI Credit Card and EMI txns on net cart value of INR 2999 and aboveT&C', 'Special PriceGet extra 13% off (price inclusive of cashback/coupon)T&C'],
        seller: seller(Math.floor(Math.random() * 10) % 8),
        sellerRating: Math.floor(Math.random() * 10) % 6,
        services: ['1 Year Warranty', 'No Returns Applicable', 'Cash on Delivery available'],
        general: {
          Modal: 'MLWK3HN/A',
          Capacity: '4000',
          Remote: 'No',
          Conectivity: 'Bluetooth',
          Brand: 'Realme',
          Shade: 'White,Black'
        },
        warranty: ['1 Year Warranty Provided by the Manufacturer from Date of Purchase', 'Manufacturing Defects', '1 Year'],
        productDetails: {
          Width: '77 mm',
          Height: '165.5 mm',
          Depth: '8.4 mm',
          Weight: '198g'
        }
      };
      console.log("".concat(i, " data added"));
      addProduct(real, 'POST', '');
    };

    var _loop = function _loop(i) {
      setTimeout(function () {
        setData(i);
      }, i * 500);
    };

    for (var i = 2; i < _store_api__WEBPACK_IMPORTED_MODULE_7__["productData"].length; i++) {
      _loop(i);
    } // productData.length

  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (submitResponse === 'Success') {
      history.push('/home');
    } else if (submitResponse === 'Failed') {
      console.log('Failed to add product');
    }
  }, [submitResponse]);

  var setInput = function setInput(value, name, dataType) {
    setDetails(function (prev) {
      return _objectSpread({}, prev, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, dataType === 'array' ? value.split(',') : value));
    });
  };

  var sumbitDetails = function sumbitDetails() {
    addProduct(_objectSpread({}, inputDetaisls, {
      developerEmail: _env__WEBPACK_IMPORTED_MODULE_6__["email"]
    }), productDataInfo && productDataInfo.name ? 'PUT' : 'POST', productId);
  };

  var fields = [{
    name: 'name',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Product name'
  }, {
    name: 'description',
    type: 'address',
    handlerFunction: setInput,
    placeHolder: 'Description'
  }, {
    name: 'avatar',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Image URL'
  }, {
    name: 'features',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Features',
    dataType: 'array'
  }, {
    name: 'searchKeys',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'search keys comma separated',
    dataType: 'array'
  }, {
    name: 'brand',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Brand'
  }, {
    name: 'gender',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Genders comma separated',
    dataType: 'array'
  }, {
    name: 'promoLine',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Promo Text'
  }, {
    name: 'rating',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Rating'
  }, {
    name: 'offerText',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Offer Text'
  }, {
    name: 'discount',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Discount'
  }, {
    name: 'tags',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Tags: Comma separated',
    dataType: 'array'
  }, {
    name: 'sellerRating',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Seller Rating: number < 5'
  }, {
    name: 'services',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Services: Comma separated',
    dataType: 'array'
  }, {
    name: 'warranty',
    type: 'text',
    handlerFunction: setInput,
    placeHolder: 'Warranty: Comma separated',
    dataType: 'array'
  }];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(app_components__WEBPACK_IMPORTED_MODULE_5__["Loader"], null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_8___default.a.headline
  }, "Create Product"), fields.map(function (field) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(app_components__WEBPACK_IMPORTED_MODULE_5__["InputBox"], {
      fieldName: field.name,
      type: field.type,
      inputHandler: field.handlerFunction,
      placeHolder: field.placeHolder,
      value: inputDetaisls[field.name]
    });
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    value: inputDetaisls.category,
    onChange: function onChange(e) {
      setInput(e.target.value, 'category');
    },
    name: "category",
    id: "category",
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_8___default.a.category
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_8___default.a.optionText
  }, "Category"), categories.length > 0 && categories.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: item.name,
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_8___default.a.optionText,
      key: item.name
    }, item.name);
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(app_components__WEBPACK_IMPORTED_MODULE_5__["InputBox"], {
    fieldName: "price",
    type: "text",
    inputHandler: setInput,
    placeHolder: "Price",
    value: inputDetaisls.price
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(app_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    label: "SUBMIT",
    onClick: sumbitDetails
  })));
};

CreatePage.propTypes = {
  categories: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string),
  getCategories: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  addProduct: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  submitResponse: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  getProductsInfo: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  productDataInfo: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape()
};
CreatePage.defaultProps = {
  categories: [],
  submitResponse: '',
  loading: false,
  productDataInfo: {}
};
/* harmony default export */ __webpack_exports__["default"] = (CreatePage);

/***/ }),

/***/ "./src/js/containers/createItem/index.js":
/*!***********************************************!*\
  !*** ./src/js/containers/createItem/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _home_store_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/store/api */ "./src/js/containers/home/store/api.js");
/* harmony import */ var _store_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/api */ "./src/js/containers/createItem/store/api.js");
/* harmony import */ var _createPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPage */ "./src/js/containers/createItem/createPage.jsx");





var mapStateToProps = function mapStateToProps(_ref) {
  var homePage = _ref.homePage,
      create = _ref.create,
      details = _ref.details;
  return {
    categories: homePage.categories,
    loading: create.loading || details.loading,
    submitResponse: create.submitResponse,
    productDataInfo: details.productData
  };
};

var mapDispatchToProps = function mapDispatchToProps() {
  return {
    getCategories: _home_store_api__WEBPACK_IMPORTED_MODULE_1__["getCategories"],
    addProduct: _store_api__WEBPACK_IMPORTED_MODULE_2__["default"],
    getProductsInfo: _store_api__WEBPACK_IMPORTED_MODULE_2__["getProductsInfo"]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_createPage__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/js/containers/createItem/store/api.js":
/*!***************************************************!*\
  !*** ./src/js/containers/createItem/store/api.js ***!
  \***************************************************/
/*! exports provided: default, getProductsInfo, productData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsInfo", function() { return getProductsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productData", function() { return productData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/api */ "./src/js/store/api.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions */ "./src/js/actions/index.js");




function addProduct(_x, _x2, _x3) {
  return _addProduct.apply(this, arguments);
}

function _addProduct() {
  _addProduct = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data, method, productId) {
    var url, apiArgs;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = method === 'POST' ? '/products' : "/products/".concat(productId);
            apiArgs = {
              API_CALL: {
                method: method
              },
              data: data,
              url: url,
              TYPES: {
                requestType: _actions__WEBPACK_IMPORTED_MODULE_3__["CREATEPAGE_PRODUCTS_DATA_SUBMIT_REQUEST"],
                successType: _actions__WEBPACK_IMPORTED_MODULE_3__["CREATEPAGE_PRODUCTS_DATA_SUBMIT_SUCCESS"],
                failureType: _actions__WEBPACK_IMPORTED_MODULE_3__["CREATEPAGE_PRODUCTS_DATA_SUBMIT_FAIL"]
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
  return _addProduct.apply(this, arguments);
}

var getProductsInfo =
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
            url = "/products/".concat(id);
            apiArgs = {
              API_CALL: {
                method: 'GET'
              },
              url: url,
              TYPES: {
                requestType: _actions__WEBPACK_IMPORTED_MODULE_3__["HOMEPAGE_PRODUCT_DATA_FETCH_REQUEST"],
                successType: _actions__WEBPACK_IMPORTED_MODULE_3__["HOMEPAGE_PRODUCT_DATA_FETCH_SUCCESS"],
                failureType: _actions__WEBPACK_IMPORTED_MODULE_3__["HOMEPAGE_PRODUCT_DATA_FETCH_FAIL"]
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

  return function getProductsInfo(_x4) {
    return _ref.apply(this, arguments);
  };
}();
var productData = [{
  _id: '634345b970ddee7ede525312',
  name: 'Iphone 14',
  avatar: 'https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-14-Pro-Max-Deep-Purple-rightimage',
  description: 'New',
  price: 1200,
  category: 'Electronics',
  developerEmail: 'alperceltr@gmail.com',
  createdAt: '2022-10-09T22:05:45.709Z',
  updatedAt: '2022-10-09T22:05:45.709Z',
  __v: 0
}, {
  _id: '6343c32ebe902eae7b10fe28',
  name: 'Xbox Series S',
  avatar: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/microsoft/thumb/109337-anagorsel_large.jpg',
  description: 'Microsoft Türkiye Garantilidir.Garanti sürecine başlamadan önce, lütfen support.microsoft.com adresinde yer alan sorun giderme ipuçlarını kullanın.Sorun giderme ipuçları sorununuzu çözmezse, support.microsoft.com/devices adresindeki çevrimiçi süreci izleyin. Internet erişiminiz yoksa, 0850 390 27 77’i arayın.',
  price: 500,
  category: 'Electronics',
  developerEmail: 'muratcan.ysfgl@gmail.com',
  createdAt: '2022-10-10T07:01:02.979Z',
  updatedAt: '2022-10-10T07:01:02.979Z',
  __v: 0
}, {
  _id: '63441983be902eae7b114a34',
  name: 'HEALGEN Gaming Chair',
  avatar: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71GFKzCMyCL._AC_SL1500_.jpg',
  description: 'HEALGEN Gaming Chair with Footrest Gamer Chair with Massage Lumbar Support PU Leather Computer Chair Ergonomic Chair Video Game Chairs Gaming Chair for Adults',
  price: 145,
  category: 'Electronics',
  developerEmail: 'mustafayavas40@gmail.com',
  createdAt: '2022-10-10T13:09:23.140Z',
  updatedAt: '2022-10-10T13:09:23.140Z',
  __v: 0
}, {
  _id: '63441aadbe902eae7b114ace',
  name: 'Wolverine Men\'s Boot',
  avatar: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/517hD2Bz47L._AC_UY625_.jpg',
  description: 'Wolverine Men\'s Floorhand Waterproof 6" Steel Toe Work Boot',
  price: 61,
  category: 'Clothing',
  developerEmail: 'mustafayavas40@gmail.com',
  createdAt: '2022-10-10T13:14:21.520Z',
  updatedAt: '2022-10-10T13:14:21.520Z',
  __v: 0
}, {
  _id: '63453cf5660580d601730233',
  name: 'Iphone 14',
  avatar: 'https://www.donanimhaber.com/images/images/haber/146437/src/iphone-14-pro-nun-yuksek-kaliteli-render-goruntuleri-yayinlandi146437_11.jpg',
  description: 'Iphone 14',
  price: 1130,
  category: 'Electronics',
  developerEmail: 'me.alperen@gmail.com',
  createdAt: '2022-10-11T09:52:53.629Z',
  updatedAt: '2022-10-11T09:52:53.629Z',
  __v: 0
}, {
  _id: '63456778660580d601730e59',
  name: 'Sunglasses',
  avatar: 'https://hips.hearstapps.com/hmg-prod/images/24-1640208679.jpg?crop=0.553xw:1.00xh;0.224xw,0&resize=180:*',
  description: 'Mens Accessories Sunglasses ',
  price: 1000,
  category: 'Accessories',
  developerEmail: 'cumhurcangs97@gmail.com',
  createdAt: '2022-10-11T12:54:16.926Z',
  updatedAt: '2022-10-11T12:54:16.926Z',
  __v: 0
}, {
  _id: '6346a611b2b43f7e034dfc50',
  name: 'Notebook',
  avatar: 'https://productimages.hepsiburada.net/s/257/222-222/110000240404389.jpg/format:webp',
  description: 'This is the best laptop',
  price: 7500,
  category: 'Electronics',
  developerEmail: 'mucahittasan0@gmail.com',
  createdAt: '2022-10-12T11:33:37.229Z',
  updatedAt: '2022-10-12T11:33:37.229Z',
  __v: 0
}, {
  _id: '6346b2fbb2b43f7e034e033a',
  name: 'Instant Vortex Pro Air Fryer',
  avatar: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81oSbQ6TqkL._AC_SY450_.jpg',
  description: 'EvenCrisp TECHNOLOGY: Advanced technology that drives air flow top down for a perfect golden finish and crispy, tender results every time!',
  price: 109,
  category: 'Electronics',
  developerEmail: 'b.serkankara@gmail.com',
  createdAt: '2022-10-12T12:28:43.223Z',
  updatedAt: '2022-10-12T12:28:43.223Z',
  __v: 0
}, {
  _id: '6346b435b2b43f7e034e03b3',
  name: 'Corsair CV Series, CV650, 650 Watt, Dual EPS, 80 PLUS Bronze Certified, Non Modular Power Supply (Low Noise, Compact Casing, Black Sleeving and Casing) NA Version - Black',
  avatar: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71wEPb+eKOL._AC_SY355_.jpg',
  description: '80 PLUS Bronze certified efficiency provides up to 88% operational efficiency, generating less heat and lowering your energy costs.',
  price: 39,
  category: 'Electronics',
  developerEmail: 'b.serkankara@gmail.com',
  createdAt: '2022-10-12T12:33:57.190Z',
  updatedAt: '2022-10-12T12:33:57.190Z',
  __v: 0
}, {
  _id: '634711eab2b43f7e034e2247',
  name: 'Air Pods',
  avatar: 'https://productimages.hepsiburada.net/s/89/550/110000031510507.jpg/format:webp',
  description: 'Air Pods Pro',
  price: 500,
  category: 'Electronics',
  developerEmail: 'me.alperen@gmail.com',
  createdAt: '2022-10-12T19:13:46.607Z',
  updatedAt: '2022-10-12T19:13:46.607Z',
  __v: 0
}, {
  _id: '63471325b2b43f7e034e22ad',
  name: 'Macbook Pro M1',
  avatar: 'https://productimages.hepsiburada.net/s/131/550/110000081537709.jpg/format:webp',
  description: 'Macbook Pro M1 16GB 512GB SSD macOS 14"',
  price: 1500,
  category: 'Electronics',
  developerEmail: 'me.alperen@gmail.com',
  createdAt: '2022-10-12T19:19:01.438Z',
  updatedAt: '2022-10-12T19:19:01.438Z',
  __v: 0
}, {
  _id: '634732b5b2b43f7e034e755b',
  name: 'Duracell Basic Kalem Pil 10\'lu Aa',
  avatar: 'https://productimages.hepsiburada.net/s/40/550/10659781869618.jpg/format:webp',
  description: ' Duracell Alkalin AA Kalem Piller, 10’lu paket',
  price: 99.9,
  category: 'Electronics',
  developerEmail: 'ayseguler.92@gmail.com',
  createdAt: '2022-10-12T21:33:41.266Z',
  updatedAt: '2022-10-12T21:33:41.266Z',
  __v: 0
}, {
  _id: '634745b2b2b43f7e034ecc20',
  name: 'HUAWEI Mate Xs 2',
  avatar: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/phones/mate-xs2/white-list.png',
  description: 'Mobile Phone',
  price: 5000,
  category: 'Electronics',
  developerEmail: 'ozbey97ahmet@gmail.com',
  createdAt: '2022-10-12T22:54:42.649Z',
  updatedAt: '2022-10-12T22:54:42.649Z',
  __v: 0
}, {
  _id: '634749b3b2b43f7e034ee514',
  name: 'Beats Studio3 ',
  avatar: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXJA2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420177108',
  description: 'Wireless ',
  price: 259,
  category: 'Electronics',
  developerEmail: 'ozbey97ahmet@gmail.com',
  createdAt: '2022-10-12T23:11:47.766Z',
  updatedAt: '2022-10-12T23:11:47.766Z',
  __v: 0
}, {
  _id: '63474b65b2b43f7e034eeaef',
  name: 'Beats Red',
  avatar: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX412?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420170758',
  description: 'Wireless',
  price: 599,
  category: 'Electronics',
  developerEmail: 'ozbey97ahmet@gmail.com',
  createdAt: '2022-10-12T23:19:01.088Z',
  updatedAt: '2022-10-12T23:19:01.088Z',
  __v: 0
}, {
  _id: '63474cbbb2b43f7e034ef3aa',
  name: 'Beats Blue',
  avatar: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX402?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420165023',
  description: 'Wireless ',
  price: 699,
  category: 'Electronics',
  developerEmail: 'ozbey97ahmet@gmail.com',
  createdAt: '2022-10-12T23:24:43.684Z',
  updatedAt: '2022-10-12T23:24:43.684Z',
  __v: 0
}, {
  _id: '6347e39a258e2b0b3d5c9518',
  name: 'Wireless Gamepad ',
  avatar: 'https://m.media-amazon.com/images/I/51Prg4Smx-L._SX522_.jpg',
  description: 'The EvoFox Elite Ops Wireless Gamepad with Type C Charging is the ideal Android TV Gamepad. With all Android TVs supporting at least basic Gaming, a Gamepad at home is a must. Use the provided USB Extender Cable on your TV to ensure optimal wireless performance.\nThis Wireless Controller also supports Windows with X input and D input modes, and PS3s. It automatically detects and changes the gamepad mode based on your system. Simply Plug and Play!\nThe Elite Ops features Digital Triggers (not Analog), Accurate 360 degree concave thumbsticks, a Precise 8 way floating D-Pad. The gamepad also features dual rumble Vibration motors (for PC and PS3 only) and an easy to use Turbo Mode.\nThe gamepad comes with a Type C charging port and the 400mAh Rechargeable battery ensures 8 hours of non stop gameplay. The ergonomic and robust design with anti-sweat matte finish makes it easy on your hands, but tough on your enemies.\nHassle Free 1 Year Manufacturing Warranty | Please Call or Email our customer support for any assistance.',
  price: 300,
  category: 'Electronics',
  developerEmail: 'abhilRam@gmail.com',
  createdAt: '2022-10-13T10:08:26.574Z',
  updatedAt: '2022-10-13T10:08:26.574Z',
  __v: 0
}, {
  _id: '6347e3e0258e2b0b3d5c9532',
  name: 'Men\'s Unhemmed Taclite Pro Pant',
  avatar: 'https://m.media-amazon.com/images/I/71Svvls74cL._SX522_.jpg',
  description: 'Good quality and Suitable to use.\nThis Product comes in a proper Packaging.\nIn case of any query or issue. Feel free to reach out to us.\nContains: Pack of 1.',
  price: 5000,
  category: 'Clothing',
  developerEmail: 'abhilRam@gmail.com',
  createdAt: '2022-10-13T10:09:36.601Z',
  updatedAt: '2022-10-13T10:09:36.601Z',
  __v: 0
}, {
  _id: '634805fd258e2b0b3d5cb8f5',
  name: 'Smart Watch',
  avatar: 'https://productimages.hepsiburada.net/s/140/550/110000093110650.jpg/format:webp',
  description: 'Apple Smart Watch SE',
  price: 500,
  category: 'Electronics',
  developerEmail: 'me.alperen@gmail.com',
  createdAt: '2022-10-13T12:35:09.449Z',
  updatedAt: '2022-10-13T12:35:09.449Z',
  __v: 0
}, {
  _id: '634807e1258e2b0b3d5cb92b',
  name: 'Tshirt',
  avatar: 'https://productimages.hepsiburada.net/s/232/600-800/110000214813657.jpg',
  description: 'Pink Tshirt',
  price: 150,
  category: 'Clothing',
  developerEmail: 'me.alperen@gmail.com',
  createdAt: '2022-10-13T12:43:13.960Z',
  updatedAt: '2022-10-13T12:43:13.960Z',
  __v: 0
}, {
  _id: '63481e8bf560b83dfb4b14c6',
  name: 'Xiaomi Redmi Note 11 Pro',
  avatar: 'https://productimages.hepsiburada.net/s/212/550/110000189356238.jpg/format:webp',
  description: 'A new generation smart phone!',
  price: 8999,
  category: 'Electronics',
  developerEmail: 'berkegoktuna17@gmail.com',
  createdAt: '2022-10-13T14:19:55.594Z',
  updatedAt: '2022-10-13T14:19:55.594Z',
  __v: 0
}, {
  _id: '63481ee9f560b83dfb4b14d4',
  name: 'MSI KATANA GF76',
  avatar: 'https://productimages.hepsiburada.net/s/237/550/110000220008737.jpg/format:webp',
  description: 'A nice laptop.',
  price: 29.279,
  category: 'Electronics',
  developerEmail: 'berkegoktuna17@gmail.com',
  createdAt: '2022-10-13T14:21:29.525Z',
  updatedAt: '2022-10-13T14:21:29.525Z',
  __v: 0
}, {
  _id: '634821b6f560b83dfb4b14e4',
  name: 'Samsung MS23F300EEK',
  avatar: 'https://productimages.hepsiburada.net/s/31/550/10337753661490.jpg/format:webp',
  description: 'IzgaraYokDerinlik (cm)37.4Yükseklik (cm)27.5Fırın Hacmi23Güç (W)800',
  price: 1.499,
  category: 'Electronics',
  developerEmail: 'berkegoktuna17@gmail.com',
  createdAt: '2022-10-13T14:33:26.012Z',
  updatedAt: '2022-10-13T14:33:26.012Z',
  __v: 0
}, {
  _id: '63482217f560b83dfb4b14f2',
  name: 'Avva Erkek Siyah Oxford Düğmeli Yaka Regular Fit Gömlek',
  avatar: 'https://productimages.hepsiburada.net/s/207/1000/110000183582435.jpg',
  description: 'A great shirt.',
  price: 249,
  category: 'Clothing',
  developerEmail: 'berkegoktuna17@gmail.com',
  createdAt: '2022-10-13T14:35:03.983Z',
  updatedAt: '2022-10-13T14:35:03.983Z',
  __v: 0
}, {
  _id: '634822b1f560b83dfb4b1502',
  name: 'Pafu Sando Tekli Katlanır Yataklı Koltuk - Gri',
  avatar: 'https://productimages.hepsiburada.net/s/136/550/110000087853868.jpg/format:webp',
  description: 'A highly comfortable sofa.',
  price: 2.599,
  category: 'Furniture',
  developerEmail: 'berkegoktuna17@gmail.com',
  createdAt: '2022-10-13T14:37:37.203Z',
  updatedAt: '2022-10-13T14:37:37.203Z',
  __v: 0
}, {
  _id: '63482334f560b83dfb4b150c',
  name: 'Altus Alk 471 x 514 Lt No Frost Buzdolabı',
  avatar: 'https://productimages.hepsiburada.net/s/205/550/110000180897507.jpg/format:webp',
  description: 'A cool fridge.',
  price: 10.499,
  category: 'Electronics',
  developerEmail: 'berkegoktuna17@gmail.com',
  createdAt: '2022-10-13T14:39:48.282Z',
  updatedAt: '2022-10-13T14:39:48.282Z',
  __v: 0
}, {
  _id: '6348240ef560b83dfb4b151a',
  name: 'Xiaomi Mi Vacuum Cleaner Mini',
  avatar: 'https://productimages.hepsiburada.net/s/212/550/110000190106973.jpg/format:webp',
  description: 'A cleaner.',
  price: 1400,
  category: 'Electronics',
  developerEmail: 'berkegoktuna17@gmail.com',
  createdAt: '2022-10-13T14:43:26.636Z',
  updatedAt: '2022-10-13T14:43:26.636Z',
  __v: 0
}, {
  _id: '63484c13f560b83dfb4b402e',
  name: 'MI 11 Lite',
  avatar: 'https://www.gizmochina.com/wp-content/uploads/2021/01/mi11-lite-550x550.jpg',
  description: 'The smartphone is powered by the Qualcomm SM7150 Snapdragon 732G Octa-core processor. The smartphone comes with a 6.55 inches and 1080 x 2400 pixels resolution. It is protected by Corning Gorilla Glass 5.',
  price: 230,
  category: 'Electronics',
  developerEmail: 'ali.cftci@gmail.com',
  createdAt: '2022-10-13T17:34:11.957Z',
  updatedAt: '2022-10-13T17:34:11.957Z',
  __v: 0
}, {
  _id: '63484d3bf560b83dfb4b4252',
  name: 'MI 11',
  avatar: 'https://www.gizmochina.com/wp-content/uploads/2020/12/Xiaomi-Mi-11-All-colors-c-e1612792179662-600x600.jpg',
  description: 'The smartphone is powered by Qualcomm SM8350 Snapdragon 888 along with LPPDR5 RAM and UFS 3.1 storage. The smartphone is equipped with an AMOLED panel and provides 1B colors, 120Hz, HDR10+, and 1500 nits (peak).',
  price: 330,
  category: 'Electronics',
  developerEmail: 'ali.cftci@gmail.com',
  createdAt: '2022-10-13T17:39:07.611Z',
  updatedAt: '2022-10-13T17:39:07.611Z',
  __v: 0
}, {
  _id: '63484da9f560b83dfb4b42a3',
  name: 'MI 11 Lite',
  avatar: 'https://www.tradeinn.com/f/13843/138436997/xiaomi-mi-11-lite-5g-8gb-128gb-6.55-smartphone.jpg',
  description: 'The front camera of Xiaomi Mi 11 features 20 MP (wide) while on the rear side there is a triple camera consists of 108 MP (wide) + 13 MP (ultrawide) + 5 MP (macro).',
  price: 233,
  category: 'Electronics',
  developerEmail: 'ali.cftci@gmail.com',
  createdAt: '2022-10-13T17:40:57.041Z',
  updatedAt: '2022-10-13T17:40:57.041Z',
  __v: 0
}, {
  _id: '63484f40f560b83dfb4b44fa',
  name: 'IPhone 13',
  avatar: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572315655',
  description: 'Iphone',
  price: 2045,
  category: 'Electronics',
  developerEmail: 'ali.cftci@gmail.com',
  createdAt: '2022-10-13T17:47:44.922Z',
  updatedAt: '2022-10-13T17:47:44.922Z',
  __v: 0
}, {
  _id: '6348587af560b83dfb4b48a9',
  name: 'Akıllı Robor Süpürge',
  avatar: 'https://images.hepsiburada.net/assets/EE/ProductDesc/HBCV00002TSQ7I.jpg',
  description: 'Ağırlık (kg)\t3\nAşılabilir Engel\t20 mm\nBoy\t325 mm\nÇalışma Modu Sayısı\t6\nÇalışma Süresi\t120 dk\nDerinlik\t149,9 mm\nEmiş Türü\tKuru\nEn\t325 mm\nEPA/HEPA Filtre\tVar',
  price: 4521,
  category: 'Electronics',
  developerEmail: 'mstfrs68@gmail.com',
  createdAt: '2022-10-13T18:27:06.119Z',
  updatedAt: '2022-10-13T18:27:06.119Z',
  __v: 0
}, {
  _id: '63486266f560b83dfb4b547c',
  name: 'Gray Sofa',
  avatar: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg?sfrm=jpg',
  description: 'It is so comfortable sofa',
  price: 987,
  category: 'Furniture',
  developerEmail: 'ali.cftci@gmail.com',
  createdAt: '2022-10-13T19:09:26.729Z',
  updatedAt: '2022-10-13T19:09:26.729Z',
  __v: 0
}, {
  _id: '634864aff560b83dfb4b5501',
  name: 'Iphone 14',
  avatar: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/135109-1-2_large.jpg',
  description: 'New',
  price: 1299,
  category: 'Electronics',
  developerEmail: 'burkay.sevilmis@gmail.com',
  createdAt: '2022-10-13T19:19:11.642Z',
  updatedAt: '2022-10-13T19:19:11.642Z',
  __v: 0
}, {
  _id: '63488723f560b83dfb4b626b',
  name: 'Duracell Basic Kalem Pil 10\'lu Aa',
  avatar: 'https://productimages.hepsiburada.net/s/40/550/10659781869618.jpg/format:webp',
  description: 'Duracell Basic Kalem Pil 10\'lu Aa',
  price: 99,
  category: 'Electronics',
  developerEmail: 'ayseguler.92@gmail.com',
  createdAt: '2022-10-13T21:46:11.436Z',
  updatedAt: '2022-10-13T21:46:11.436Z',
  __v: 0
}, {
  _id: '634945d5c0f6e956d4e63bdc',
  name: 'Xiaomi Redmi Note 11 Pro',
  avatar: 'https://productimages.hepsiburada.net/s/212/550/110000189356238.jpg/format:webp',
  description: 'A new phone.',
  price: 8999,
  category: 'Electronics',
  developerEmail: 'berkegoktuna17@gmail.com',
  createdAt: '2022-10-14T11:19:49.065Z',
  updatedAt: '2022-10-14T11:19:49.065Z',
  __v: 0
}, {
  _id: '634949cfc0f6e956d4e63fdc',
  name: 'Çok Amaçlı Saklama Kabı',
  avatar: 'https://productimages.hepsiburada.net/s/160/550/110000118729803.jpg/format:webp',
  description: 'A great storage for picnics.',
  price: 59,
  category: 'Hobby',
  developerEmail: 'berkegoktuna17@gmail.com',
  createdAt: '2022-10-14T11:36:47.921Z',
  updatedAt: '2022-10-14T11:36:47.921Z',
  __v: 0
}, {
  _id: '63494a17c0f6e956d4e640fc',
  name: 'Daphnela LED Sıcaklık Göstergeli Akıllı Vakumlu Yalıtımlı Termos',
  avatar: 'https://productimages.hepsiburada.net/s/97/550/110000039707052.jpg/format:webp',
  description: 'Great water source.',
  price: 200,
  category: 'Hobby',
  developerEmail: 'berkegoktuna17@gmail.com',
  createdAt: '2022-10-14T11:37:59.037Z',
  updatedAt: '2022-10-14T11:37:59.037Z',
  __v: 0
}, {
  _id: '634bf35495e919c56ed6dbd1',
  name: 'Guitar',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:04:36.968Z',
  updatedAt: '2022-10-16T12:04:36.968Z',
  __v: 0
}, {
  _id: '634bf4dc95e919c56ed6dc0c',
  name: 'Guitar',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:11:08.946Z',
  updatedAt: '2022-10-16T12:11:08.946Z',
  __v: 0
}, {
  _id: '634bf58d95e919c56ed6dc14',
  name: 'Guitar',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:14:05.592Z',
  updatedAt: '2022-10-16T12:14:05.592Z',
  __v: 0
}, {
  _id: '634bf5b295e919c56ed6dc18',
  name: 'Guitar',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:14:42.617Z',
  updatedAt: '2022-10-16T12:14:42.617Z',
  __v: 0
}, {
  _id: '634bf6f595e919c56ed6dc26',
  name: 'Guitar',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:20:05.505Z',
  updatedAt: '2022-10-16T12:20:05.505Z',
  __v: 0
}, {
  _id: '634bf74c95e919c56ed6dc2a',
  name: 'Guitar',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:21:32.833Z',
  updatedAt: '2022-10-16T12:21:32.833Z',
  __v: 0
}, {
  _id: '634bf7c995e919c56ed6dc3a',
  name: 'My Guitar',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:23:37.927Z',
  updatedAt: '2022-10-16T12:23:37.927Z',
  __v: 0
}, {
  _id: '634bf91f95e919c56ed6dc4e',
  name: 'My Guitar 2',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:29:19.095Z',
  updatedAt: '2022-10-16T12:29:19.095Z',
  __v: 0
}, {
  _id: '634bf9a495e919c56ed6dc60',
  name: 'My Guitar 2',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:31:32.986Z',
  updatedAt: '2022-10-16T12:31:32.986Z',
  __v: 0
}, {
  _id: '634bf9fe95e919c56ed6dc7c',
  name: 'My Electric Guitar ',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:33:02.007Z',
  updatedAt: '2022-10-16T12:33:02.007Z',
  __v: 0
}, {
  _id: '634bfb7e95e919c56ed6dc8a',
  name: 'My Electric Guitar ',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:39:26.970Z',
  updatedAt: '2022-10-16T12:39:26.970Z',
  __v: 0
}, {
  _id: '634bfbc795e919c56ed6dc92',
  name: 'My Electric Guitar ',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:40:39.276Z',
  updatedAt: '2022-10-16T12:40:39.276Z',
  __v: 0
}, {
  _id: '634bfbe795e919c56ed6dc9e',
  name: 'My Electric Guitar ',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:41:11.934Z',
  updatedAt: '2022-10-16T12:41:11.934Z',
  __v: 0
}, {
  _id: '634bfc2a95e919c56ed6dcae',
  name: 'My Electric Guitar ',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:42:18.289Z',
  updatedAt: '2022-10-16T12:42:18.289Z',
  __v: 0
}, {
  _id: '634bfc4795e919c56ed6dcb8',
  name: 'My Electric Guitar ',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:42:47.775Z',
  updatedAt: '2022-10-16T12:42:47.775Z',
  __v: 0
}, {
  _id: '634bfc5195e919c56ed6dcbe',
  name: 'My Electric Guitar ',
  avatar: 'https://cdn.shopify.com/s/files/1/0432/6024/8218/products/hollow1_1800x1800.jpg?v=1663168844',
  description: 'Description',
  price: 1200,
  category: 'Hobby',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T12:42:57.408Z',
  updatedAt: '2022-10-16T12:42:57.408Z',
  __v: 0
}, {
  _id: '634c4e2d87c594c8e04c85aa',
  name: 'Hoodie',
  avatar: 'https://cdn.shopify.com/s/files/1/1610/4725/products/DW2HoodieBlackBack_900x.jpg?v=1624629333',
  description: 'REGULAR FIT 100% ORGANIC COTTON WORLDWIDE SHIPPING: DELIVERY & HANDLING AUTHENTIC SUSPICIOUS GOODS ARE ONLY AVAILABLE THROUGH',
  price: 99,
  category: 'Clothing',
  developerEmail: 'bdemirer70@gmail.com',
  createdAt: '2022-10-16T18:32:13.225Z',
  updatedAt: '2022-10-16T18:32:13.225Z',
  __v: 0
}];

/***/ }),

/***/ "./src/js/containers/createItem/styles.scss":
/*!**************************************************!*\
  !*** ./src/js/containers/createItem/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/createItem/styles.scss");

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
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/createItem/styles.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/js/containers/createItem/styles.scss");

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

/***/ "./src/js/pages/createItem.jsx":
/*!*************************************!*\
  !*** ./src/js/pages/createItem.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_createItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/createItem */ "./src/js/containers/createItem/index.js");
/* harmony import */ var _layout_mainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/mainLayout */ "./src/js/layout/mainLayout.jsx");




var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_mainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hideFilters: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_createItem__WEBPACK_IMPORTED_MODULE_1__["default"], props));
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
//# sourceMappingURL=5.bundle.js.map