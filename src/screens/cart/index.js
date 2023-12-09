//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';
import {useSelector} from 'react-redux';
import {Login} from 'iconsax-react-native';
import {AppColors} from '../../theme/appColors';
import { LOGIN } from '../../utils/routes';

// create a component
const Cart = ({navigation}) => {
  const {isLogin,token} = useSelector(state => state.auth);
  return (
    <View style={styles.container}>
      {isLogin ? (
        <View>
          <Text>{token}</Text>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Login size="80" color={AppColors.BLUE} />
          <Text
            style={{marginVertical: 15, fontSize: 14, color: AppColors.BLACK}}>
            Lütfen Giriş Yaparak Alışveriş Yapmaya Devem Edin.
          </Text>
          <Button 
          onPress={()=>navigation.navigate(LOGIN)}
          style={styles.button} appearance="filled">
            Giriş Yap
          </Button>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  button: {
    marginVertical: 15,
  },
});

//make this component available to the app
export default Cart;
