//import liraries
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Button, Input, Text} from '@ui-kitten/components';
import {Formik} from 'formik';
import {AppColors} from '../../theme/appColors';
import {loginSchema, registerSchema} from '../../utils/validations';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin, userRegister} from '../../store/actions/authAction';
import {REGISTER} from '../../utils/routes';

// create a component
const Register = ({navigation}) => {
  const {registerPending, isLogin} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) navigation.goBack();
  }, [isLogin]);

  return (
    <View style={styles.container}>
    <ScrollView>
    <Formik
        initialValues={{
          email: 'serhat@test.com',
          username: 'serhat',
          password: '1234',
          firstname: 'Serhat',
          lastname: 'Üstek',
          city: 'İstanbul',
          phone: '0111111111111',
        }}
        onSubmit={values => dispatch(userRegister(values))}
        validationSchema={registerSchema}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={{padding: 10,paddingBottom:100}}>
            <Input
              status={errors.email ? 'danger' : 'basic'}
              size="large"
              style={styles.input}
              placeholder="Email giriniz"
              label="Email"
              value={values.email}
              caption={errors.email}
              onChangeText={handleChange('email')}
            />

            <Input
              status={errors.firstname ? 'danger' : 'basic'}
              size="large"
              style={styles.input}
              placeholder="Adınızı giriniz"
              label="Adı"
              value={values.firstname}
              caption={errors.firstname}
              onChangeText={handleChange('firstname')}
            />
            <Input
              status={errors.lastname ? 'danger' : 'basic'}
              size="large"
              style={styles.input}
              placeholder="Soyadı giriniz"
              label="Soyadı"
              value={values.lastname}
              caption={errors.lastname}
              onChangeText={handleChange('lastname')}
            />
            <Input
              status={errors.username ? 'danger' : 'basic'}
              size="large"
              style={styles.input}
              placeholder="Kullanıcı Adı giriniz"
              label="Kullanıcı Adı"
              value={values.username}
              caption={errors.username}
              onChangeText={handleChange('username')}
            />
            <Input
              status={errors.password ? 'danger' : 'basic'}
              size="large"
              secureTextEntry
              caption={errors.password}
              style={styles.input}
              placeholder="Şifre alanını doldurunuz"
              label="Şifre"
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Input
              status={errors.phone ? 'danger' : 'basic'}
              size="large"
              keyboardType="phone-pad"
              caption={errors.phone}
              style={styles.input}
              placeholder="Telefon alanını doldurunuz"
              label="Telefon"
              value={values.phone}
              onChangeText={handleChange('phone')}
            />
            <Input
              status={errors.city ? 'danger' : 'basic'}
              size="large"
              caption={errors.city}
              style={styles.input}
              placeholder="Şehir alanını doldurunuz"
              label="Şehir"
              value={values.city}
              onChangeText={handleChange('city')}
            />
            <Button
              onPress={handleSubmit}
              style={registerPending ? styles.pasiveButton : styles.activeButton}
              appearance="filled">
              {registerPending ? (
                <ActivityIndicator size={'small'} />
              ) : (
                <Text>Kayıt Ol</Text>
              )}
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
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
    marginVertical: 10,
  },
});

//make this component available to the app
export default Register;
