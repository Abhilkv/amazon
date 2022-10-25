/* eslint-disable no-underscore-dangle */
import Immutable from 'seamless-immutable';
import {
  HOMEPAGE_PRODUCT_DATA_FETCH_REQUEST,
  HOMEPAGE_PRODUCT_DATA_FETCH_SUCCESS,
  HOMEPAGE_PRODUCT_DATA_FETCH_FAIL,
  VIEW_PAGE_ADD_TO_CART,
  VIEW_PAGE_ADD_TO_FAVOURITE,
  VIEW_PAGE_CHANGE_ITEM_QTY,
  VIEW_PAGE_REMOVE_ITEM,
  VIEW_PAGE_CLEAR_CART,
  VIEW_PAGE_REMOVE_ITEM_FAVOURITE
} from '../../../actions';

const defaultState = Immutable.flatMap({
  productData: {},
  loading: false,
  cart: {},
  favourite: {}
});

const addToCart = (cart, item) => {
  let data = {};
  if (cart[item._id]) {
    data = { ...cart, [item._id]: { data: cart[item._id].data, count: cart[item._id].count + 1 } };
  } else {
    data = { ...cart, [item._id]: { data: { ...item }, count: 1 } };
  }
  return data;
};

const addToFavourite = (favourite, item) => {
  let data = {};
  if (favourite[item._id]) {
    data = { ...favourite, [item._id]: { data: favourite[item._id].data, count: favourite[item._id].count + 1 } };
  } else {
    data = { ...favourite, [item._id]: { data: { ...item }, count: 1 } };
  }
  return data;
};

const changeQty = (details, id, qty) => {
  const data = { data: details[id].data, count: qty };
  const updatedData = { ...details, [id]: data };
  return updatedData;
};

const removeItem = (details, id) => {
  const dummy = { ...details };
  delete dummy[id];
  return dummy;
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case HOMEPAGE_PRODUCT_DATA_FETCH_REQUEST:
      return Immutable.merge(state, { productData: {}, loading: true });

    case HOMEPAGE_PRODUCT_DATA_FETCH_SUCCESS:
      return Immutable.merge(state, { productData: action.data[0], loading: false });

    case HOMEPAGE_PRODUCT_DATA_FETCH_FAIL:
      return Immutable.merge(state, { productData: {}, loading: false });

    case VIEW_PAGE_ADD_TO_CART:
      return Immutable.merge(state, { cart: addToCart(state.cart, action.item) });

    case VIEW_PAGE_ADD_TO_FAVOURITE:
      return Immutable.merge(state, { favourite: addToFavourite(state.favourite, action.item) });


    case VIEW_PAGE_CHANGE_ITEM_QTY:
      return Immutable.merge(state, { cart: changeQty(state.cart, action.id, action.qty) });


    case VIEW_PAGE_REMOVE_ITEM:
      return Immutable.merge(state, { cart: removeItem(state.cart, action.id) });

    case VIEW_PAGE_REMOVE_ITEM_FAVOURITE:
      return Immutable.merge(state, { favourite: removeItem(state.favourite, action.id) });

    case VIEW_PAGE_CLEAR_CART:
      return Immutable.merge(state, { cart: [] });
    default:
      return state;
  }
};
