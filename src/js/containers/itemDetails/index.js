import { connect } from 'react-redux';

import { VIEW_PAGE_ADD_TO_CART,
  VIEW_PAGE_ADD_TO_FAVOURITE } from '../../actions';
import { getProductsInfo } from './store/api';
import DetailsPage from './detailsPage';
// import submitMessage from './saga';

const mapStateToProps = ({ details }) => ({
  productData: details.productData,
  loading: details.loading
});

const mapDispatchToProps = (dispatch) => ({
  getProductsInfo,
  addToCart: (item) => {
    dispatch({ type: VIEW_PAGE_ADD_TO_CART, item });
  },
  addToFavourite: (item) => {
    dispatch({ type: VIEW_PAGE_ADD_TO_FAVOURITE, item });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
