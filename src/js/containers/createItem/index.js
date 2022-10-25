import { connect } from 'react-redux';

import { getCategories } from '../home/store/api';
import addProduct, { getProductsInfo } from './store/api';

import CreatePage from './createPage';

const mapStateToProps = ({ homePage, create, details }) => ({
  categories: homePage.categories,
  loading: create.loading || details.loading,
  submitResponse: create.submitResponse,
  productDataInfo: details.productData
});

const mapDispatchToProps = () => ({
  getCategories,
  addProduct,
  getProductsInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
