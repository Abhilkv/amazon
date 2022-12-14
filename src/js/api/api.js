import axios from 'axios';
import { replace as replaceRouter } from 'react-router-redux';
import registry from 'app-registry';
import { store } from '../store';

const isAuthTokenValid = (authToken) => (authToken !== null && authToken !== '');

export default async function apiCall(payload) {
  const {
    API_CALL,
    TYPES,
    url,
    isAuthRequired = true
  } = payload;

  // Reading API configs from config/env
  // const apiEndpoint = 'http://localhost:8081';
  const apiEndpoint = 'https://amazon-clone-abhil.herokuapp.com';
  const API_URL = `${apiEndpoint}${url}`;

  // Reading auth-token from cookie
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGlsa25pQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9BYmhpbGt2IiwiaWF0IjoxNjY1ODkyMDQyLCJleHAiOjE2NjYzMjQwNDJ9.7ZuXZUOd56wFzvZgWqcRHkadFhlRYTam7aaD1s6iOnU';

  // Re-routing to login if not authorized
  if (isAuthRequired && !isAuthTokenValid(authToken)) {
    store.dispatch(replaceRouter('/login'));
    return null;
  }

  // Setting API parameters
  const apiParams = {
    ...API_CALL,
    url: API_URL,
    ...(isAuthRequired && {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
  };

  try {
    //  Setting initial state
    if (TYPES.requestType) {
      store.dispatch({ type: TYPES.requestType });
    }
    // Make API call
    const apiResponse = await axios(apiParams);
    if (apiResponse.data) {
      // API call success
      store.dispatch({ type: TYPES.successType, data: apiResponse.data });
      return apiResponse.data;
    }
  } catch (err) {
    // API call failure
    let errMessage = err.message;
    if (err.response) {
      errMessage = err.response.data.message || err.response.data.error.message;
    }
    // Logging the error
    registry.get('logger').info(`The API ${API_URL} returned this error:`, JSON.stringify(errMessage));
    store.dispatch({ type: TYPES.failureType });
  }
  return null;
}
