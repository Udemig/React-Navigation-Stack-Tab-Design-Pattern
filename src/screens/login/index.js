//import liraries
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Button, Input, Text} from '@ui-kitten/components';
import {Formik} from 'formik';
import {AppColors} from '../../theme/appColors';
import {loginSchema} from '../../utils/validations';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../store/actions/authAction';
import { REGISTER } from '../../utils/routes';

// create a component
const Login = ({navigation}) => {
  const {loginPending, isLogin} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) navigation.goBack();
  }, [isLogin]);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{username: 'johnd', password: 'm38rmF$'}}
        onSubmit={values => dispatch(userLogin(values))}
        validationSchema={loginSchema}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={{padding: 10}}>
            <View
              style={{
                minHeight: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 250, height: 250, resizeMode: 'contain'}}
                source={require('../../assets/images/appIcon.png')}
              />
            </View>
            <Input
              status={errors.username ? 'danger' : 'basic'}
              size="large"
              style={styles.input}
              placeholder="Kullanıcı adınızı giriniz"
              label="Kullanıcı Adı"
              value={values.username}
              caption={errors.username}
              onChangeText={handleChange('username')}
            />
            <Input
              status={errors.password ? 'danger' : 'basic'}
              size="large"
              caption={errors.password}
              style={styles.input}
              placeholder="Şifre alanını doldurunuz"
              label="Şifre"
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button
              onPress={handleSubmit}
              style={loginPending ? styles.pasiveButton : styles.activeButton}
              appearance="filled">
              {loginPending ? (
                <ActivityIndicator size={'small'} />
              ) : (
                <Text>Giriş Yap</Text>
              )}
            </Button>
            <Button
              status="primary"
              onPress={()=>navigation.navigate(REGISTER,{username:values.username,password:values.password})}
              style={styles.activeButton}
              appearance="outline">
              <Text>Kayıt Ol</Text>
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
  activeButton: {
    marginVertical: 15,
  },
  pasiveButton: {
    marginVertical: 15,
    backgroundColor: AppColors.GRAY,
  },
  input: {
    marginVertical: 15,
  },
});

//make this component available to the app
export default Login;
