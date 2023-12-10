import {ADD_CART_URL, PRODUCTS_URL, CATEGORIES_URL} from '../../service/urls';
import {getRequest, postRequest} from '../../service/verb';
import {
  ADD_CHART_PENDING,
  ADD_CHART_REJECT,
  FETCH_ADD_CHART,
  FETCH_PRODUCT_LIST,
  PRODUCT_PENDING,
  PRODUCT_REJECT,
} from '../types/productTypes';

export const getProductList = params => {
  return async dispatch => {
    dispatch({type: PRODUCT_PENDING});
    try {
      const response = await getRequest(PRODUCTS_URL+`${params.category}`);
      dispatch({
        type: FETCH_PRODUCT_LIST,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type: PRODUCT_REJECT});
    }
  };
};
export const addToChart = payload => {
  return async dispatch => {
    dispatch({type: ADD_CHART_PENDING});
    try {
      const response = await postRequest(ADD_CART_URL, payload);
      dispatch({
        type: FETCH_ADD_CHART,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type: ADD_CHART_REJECT});
    }
  };
};
