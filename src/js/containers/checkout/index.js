import { connect } from 'react-redux';

import { VIEW_PAGE_ADD_TO_FAVOURITE,
  VIEW_PAGE_REMOVE_ITEM,
  VIEW_PAGE_CHANGE_ITEM_QTY,
  VIEW_PAGE_CLEAR_CART,
  VIEW_PAGE_ADD_TO_CART,
  CHECKOUTPAGE_CLEAR_ORDER_DATA,
  VIEW_PAGE_REMOVE_ITEM_FAVOURITE } from '../../actions';
import placeOrder from './store/api';
import Checkout from './checkout';
// import submitMessage from './saga';

const mapStateToProps = ({ details, checkout }) => ({
  cart: details.cart,
  favourite: details.favourite,
  orderId: checkout.orderId
});

const mapDispatchToProps = (dispatch) => ({
  placeOrder,
  clearOrder: () => {
    dispatch({ type: CHECKOUTPAGE_CLEAR_ORDER_DATA });
  },
  addToFavourite: (item) => {
    dispatch({ type: VIEW_PAGE_ADD_TO_FAVOURITE, item });
  },
  changeQty: (id, qty) => {
    dispatch({ type: VIEW_PAGE_CHANGE_ITEM_QTY, id, qty });
  },
  removeItem: (id) => {
    dispatch({ type: VIEW_PAGE_REMOVE_ITEM, id });
  },
  removeFromFav: (id) => {
    dispatch({ type: VIEW_PAGE_REMOVE_ITEM_FAVOURITE, id });
  },
  addToCart: (item) => {
    dispatch({ type: VIEW_PAGE_ADD_TO_CART, item });
  },
  clearCart: () => {
    dispatch({ type: VIEW_PAGE_CLEAR_CART });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
