import { connect } from 'react-redux';

import { getCategories, getProductsInfo } from '../home/store/api';
import addProduct from './store/api';

import WelcomePage from './welcome';

const mapStateToProps = ({ homePage, create }) => ({
  categories: homePage.categories,
  loading: create.loading,
  submitResponse: create.submitResponse
});

const mapDispatchToProps = () => ({
  getProductsInfo,
  getCategories,
  addProduct
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
