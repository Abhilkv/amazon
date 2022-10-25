import { connect } from 'react-redux';

import { VIEW_PAGE_ADD_TO_CART,
  VIEW_PAGE_ADD_TO_FAVOURITE,
  VIEW_PAGE_REMOVE_ITEM_FAVOURITE } from '../../actions';
import { getProductsInfo } from './store/api';
import DetailsPage from './detailsPage';
// import submitMessage from './saga';

const mapStateToProps = ({ details }) => ({
  productData: details.productData,
  loading: details.loading,
  favourite: details.favourite
});

const mapDispatchToProps = (dispatch) => ({
  getProductsInfo,
  addToCart: (item) => {
    dispatch({ type: VIEW_PAGE_ADD_TO_CART, item });
  },
  addToFavourite: (item) => {
    dispatch({ type: VIEW_PAGE_ADD_TO_FAVOURITE, item });
  },
  removeFromFav: (id) => {
    dispatch({ type: VIEW_PAGE_REMOVE_ITEM_FAVOURITE, id });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
