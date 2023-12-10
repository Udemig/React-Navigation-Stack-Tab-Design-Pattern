const {
  FETCH_PRODUCT_LIST,
  PRODUCT_PENDING,
  PRODUCT_REJECT,
  FETCH_ADD_CHART,
  ADD_CHART_PENDING,
  ADD_CHART_REJECT,
} = require('../types/productTypes');

const initialState = {
  productList: [],
  pending: false,
  isError: false,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
        pending: false,
        count: 0,
      };
    case PRODUCT_PENDING:
      return {
        ...state,
        pending: true,
      };
    case PRODUCT_REJECT:
      return {
        ...state,
        pending: false,
        isError: true,
      };
    case FETCH_ADD_CHART:
      return {
        ...state,
        count: state.count + 1,
      };
    case ADD_CHART_PENDING:
      return {
        ...state,
      };
    case ADD_CHART_REJECT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default productReducer;
