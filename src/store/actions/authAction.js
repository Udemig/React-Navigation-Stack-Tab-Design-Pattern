import {Alert} from 'react-native';
import {LOGIN_URL} from '../../service/urls';
import {postRequest} from '../../service/verb';
import {
  FETCH_USER_LOGIN,
  FETCH_USER_LOGOUT,
  USER_LOGIN_PENDING,
  USER_LOGIN_REJECT,
  USER_LOGOUT_PENDING,
  USER_LOGOUT_REJECT,
} from '../types/authTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userLogin = payload => {
  return async dispatch => {
    dispatch({type: USER_LOGIN_PENDING});
    try {
      const response = await postRequest(LOGIN_URL, payload);
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: FETCH_USER_LOGIN,
        payload: response.data.token,
        isLogin: true,
      });
    } catch (error) {
      dispatch({type: USER_LOGIN_REJECT});
      Alert.alert('Uyarı', error.response.data, [
        {text: 'Tamam', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };
};
export const checkUserLogin = () => {
  return async dispatch => {
    dispatch({type: USER_LOGIN_PENDING});
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(JSON.stringify(token));
      if (token)
        dispatch({
          type: FETCH_USER_LOGIN,
          payload: token,
          isLogin: true,
        });
    } catch (error) {
      dispatch({type: USER_LOGIN_REJECT});
    }
  };
};
export const userLogOut = () => {
  return async dispatch => {
    try {
      const token = await AsyncStorage.removeItem('token');
      dispatch({
        type: FETCH_USER_LOGOUT,
        payload: null,
        isLogin: false,
      });
    } catch (error) {
      dispatch({type: USER_LOGOUT_REJECT});
    }
  };
};
