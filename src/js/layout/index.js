/* eslint-disable linebreak-style */
import { connect } from 'react-redux';

import { getCategories, getProductsInfo, filterProducts } from '../containers/home/store/api';
import { HOMEPAGE_PRODUCTS_DATA_SEARCH,
  HOMEPAGE_PRODUCTS_DATA_FILTER,
  HOMEPAGE_PRODUCTS_DATA_FILTER_PRICE,
  HOMEPAGE_PRODUCTS_DATA_FILTER_RATING,
  HOMEPAGE_PRODUCTS_DATA_FILTER_GENDER } from '../actions';

import Layout from './mainLayout';
// import submitMessage from './saga';

const mapStateToProps = ({ homePage }) => ({
  productsData: homePage.productsData,
  categories: homePage.categories,
  loading: homePage.loading,
  searchKey: homePage.searchKey,
  category: homePage.category,
  gender: homePage.gender
});

const mapDispatchToProps = (dispatch) => ({
  getCategories,
  getProductsInfo,
  filterProducts,
  getProductData: (key) => {
    dispatch({ type: HOMEPAGE_PRODUCTS_DATA_SEARCH, key });
  },
  filterCategory: (category) => {
    dispatch({ type: HOMEPAGE_PRODUCTS_DATA_FILTER, category });
  },
  filterByPricey: (priceRange) => {
    dispatch({ type: HOMEPAGE_PRODUCTS_DATA_FILTER_PRICE, priceRange });
  },
  filterByRating: (rating) => {
    dispatch({ type: HOMEPAGE_PRODUCTS_DATA_FILTER_RATING, rating });
  },
  filterGenderWise: (gender) => {
    dispatch({ type: HOMEPAGE_PRODUCTS_DATA_FILTER_GENDER, gender });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
