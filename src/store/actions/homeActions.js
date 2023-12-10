import { CATEGORIES_URL} from '../../service/urls';
import {getRequest, postRequest} from '../../service/verb';
import {
  FETCH_CATEGORIES,
  CATEGORIES_PENDING,
  CATEGORIES_REJECT,
} from '../types/homeTypes';

export const getCategories = params => {
  return async dispatch => {
    dispatch({type: CATEGORIES_PENDING});
    try {
      const response = await getRequest(CATEGORIES_URL, params);
      dispatch({
        type: FETCH_CATEGORIES,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type: CATEGORIES_REJECT});
    }
  };
};

