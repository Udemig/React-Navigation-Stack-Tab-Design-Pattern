const {
  FETCH_USER_LOGIN,
  USER_LOGIN_PENDING,
  USER_LOGIN_REJECT,
  FETCH_USER_LOGOUT,
  USER_LOGOUT_PENDING,
  USER_LOGOUT_REJECT,
} = require('../types/authTypes');

const initialState = {
  isLogin: false,
  loginPending: false,
  loginError: false,
  token:null
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
        token: action.payload,
        loginPending: false,
      };
    case USER_LOGIN_PENDING:
      return {
        ...state,
        loginPending: true,
      };
    case USER_LOGIN_REJECT:
      return {
        ...state,
        loginPending: false,
        loginError: true,
      };
      case FETCH_USER_LOGOUT:
        return {
          ...state,
          isLogin: action.isLogin,
          token: action.payload,
        };
      case USER_LOGOUT_PENDING:
        return {
          ...state,
          loginPending: true,
        };
      case USER_LOGOUT_REJECT:
        return {
          ...state,
          loginError: true,
        };
    default:
      return state;
  }
};
export default authReducer;
