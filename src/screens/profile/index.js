//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {Login, Logout} from 'iconsax-react-native';
import {AppColors} from '../../theme/appColors';
import {LOGIN} from '../../utils/routes';
import { userLogOut } from '../../store/actions/authAction';

// create a component
const Profile = ({navigation}) => {
  const {isLogin, token} = useSelector(state => state.auth);
  const dispatch=useDispatch()
  return (
    <View style={styles.container}>
      {isLogin ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Logout size="80" color={AppColors.BLUE} />
          <Text
            style={{marginVertical: 15, fontSize: 14, color: AppColors.BLACK}}>
            Çıkış Yapmak için Aşağıdaki butonu kulanın
          </Text>
          <Button
            status="danger"
            onPress={() => dispatch(userLogOut())}
            style={styles.button}
            appearance="filled">
            Çıkış Yap
          </Button>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Login size="80" color={AppColors.BLUE} />
          <Text
            style={{marginVertical: 15, fontSize: 14, color: AppColors.BLACK}}>
            Lütfen Giriş Yaparak Alışveriş Yapmaya Devem Edin.
          </Text>
          <Button
            onPress={() => navigation.navigate(LOGIN)}
            style={styles.button}
            appearance="filled">
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
export default Profile;
