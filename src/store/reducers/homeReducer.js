const {

  CATEGORIES_PENDING,
  FETCH_CATEGORIES,
  CATEGORIES_REJECT,
} = require('../types/homeTypes');

const initialState = {
  categories: [],
  pending: false,
  isError: false,
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        pending: false,
      };
    case CATEGORIES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case CATEGORIES_REJECT:
      return {
        ...state,
        pending: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default homeReducer;
