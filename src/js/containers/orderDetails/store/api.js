/* eslint-disable import/prefer-default-export */
import apiCall from '../../../store/api';
import {
  ORDERS_PAGE_ORDERS_DATA_FETCH_REQUEST,
 ORDERS_PAGE_ORDERS_DATA_FETCH_SUCCESS,
 ORDERS_PAGE_ORDERS_DATA_FETCH_FAIL
} from '../../../actions';

export const getOrderInfo = async(id) => {
  const url = `/orders/${id}`;
  const apiArgs = {
    API_CALL: {
      method: 'GET'
    },
    url,
    TYPES: {
      requestType: ORDERS_PAGE_ORDERS_DATA_FETCH_REQUEST,
      successType: ORDERS_PAGE_ORDERS_DATA_FETCH_SUCCESS,
      failureType: ORDERS_PAGE_ORDERS_DATA_FETCH_FAIL
    },
    isAuthRequired: false
  };
  apiCall(apiArgs);
};
