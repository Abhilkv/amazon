import { connect } from 'react-redux';

import {VIEW_PAGE_ADD_TO_CART,
  VIEW_PAGE_REMOVE_ITEM_FAVOURITE } from '../../actions';
import Favourite from './favourite';
// import submitMessage from './saga';

const mapStateToProps = ({ details }) => ({
  favourite: details.favourite
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (id) => {
    dispatch({ type: VIEW_PAGE_REMOVE_ITEM_FAVOURITE, id });
  },
  addToCart: (item) => {
    dispatch({ type: VIEW_PAGE_ADD_TO_CART, item });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
