/* eslint-disable no-underscore-dangle */
import Immutable from 'seamless-immutable';
import {
  ORDERS_PAGE_ORDERS_DATA_FETCH_REQUEST,
 ORDERS_PAGE_ORDERS_DATA_FETCH_SUCCESS,
 ORDERS_PAGE_ORDERS_DATA_FETCH_FAIL
} from '../../../actions';

const defaultState = Immutable.flatMap({
  ordersData: {},
  loading: false
});


export default (state = defaultState, action) => {
  switch (action.type) {
    case ORDERS_PAGE_ORDERS_DATA_FETCH_REQUEST:
      return Immutable.merge(state, { ordersData: {}, loading: true });

    case ORDERS_PAGE_ORDERS_DATA_FETCH_SUCCESS:
      return Immutable.merge(state, { ordersData: action.data[0], loading: false });

    case ORDERS_PAGE_ORDERS_DATA_FETCH_FAIL:
      return Immutable.merge(state, { ordersData: {}, loading: false });

    default:
      return state;
  }
};
