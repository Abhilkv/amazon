import apiCall from '../../../store/api';
import {
  CHECKOUTPAGE_ORDER_DATA_SUBMIT_REQUEST,
  CHECKOUTPAGE_ORDER_DATA_SUBMIT_SUCCESS,
  CHECKOUTPAGE_ORDER_DATA_SUBMIT_FAIL
} from '../../../actions';

export default async function placeOrder(data) {
  const url = '/orders';
  const apiArgs = {
    API_CALL: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    },
    data,
    url,
    TYPES: {
      requestType: CHECKOUTPAGE_ORDER_DATA_SUBMIT_REQUEST,
      successType: CHECKOUTPAGE_ORDER_DATA_SUBMIT_SUCCESS,
      failureType: CHECKOUTPAGE_ORDER_DATA_SUBMIT_FAIL
    },
    isAuthRequired: false
  };
  apiCall(apiArgs);
}

