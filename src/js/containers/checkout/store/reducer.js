import Immutable from 'seamless-immutable';
import {
  CHECKOUTPAGE_ORDER_DATA_SUBMIT_REQUEST,
  CHECKOUTPAGE_ORDER_DATA_SUBMIT_SUCCESS,
  CHECKOUTPAGE_ORDER_DATA_SUBMIT_FAIL,
  CHECKOUTPAGE_CLEAR_ORDER_DATA
} from '../../../actions';

const defaultState = Immutable.flatMap({
  orderId: '',
  loading: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHECKOUTPAGE_ORDER_DATA_SUBMIT_REQUEST:
      return Immutable.merge(state, { orderId: '', loading: true });

    case CHECKOUTPAGE_ORDER_DATA_SUBMIT_SUCCESS:
      return Immutable.merge(state, { orderId: action.data && action.data.orderId, loading: false });

    case CHECKOUTPAGE_ORDER_DATA_SUBMIT_FAIL:
      return Immutable.merge(state, { orderId: '', loading: false });

    case CHECKOUTPAGE_CLEAR_ORDER_DATA:
      return Immutable.merge(state, { orderId: '', loading: false });

    default:
      return state;
  }
};
