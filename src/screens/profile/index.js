//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Button} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {Login, Logout, ProfileCircle} from 'iconsax-react-native';
import {AppColors} from '../../theme/appColors';
import {LOGIN} from '../../utils/routes';
import {userLogOut} from '../../store/actions/authAction';
import {getUserProfile} from '../../store/actions/profileAction';

// create a component
const Profile = ({navigation}) => {
  const {isLogin} = useSelector(state => state.auth);
  const {profileInfo, pending} = useSelector(state => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile({id: 1}));
  }, []);

  return (
    <View style={styles.container}>
      {isLogin ? (
        pending ? (
          <View style={{flex: 1, justifyContent: 'center', alignItems:"center"}}>
            <ActivityIndicator size={'large'} color={AppColors.BLUE} />
          </View>
        ) : (
          <View style={{flex: 1, paddingVertical: 20, alignItems: 'center'}}>
            <ProfileCircle size="80" color={AppColors.GRAY} />
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              {profileInfo?.username}
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500'}}>
              {profileInfo?.email}
            </Text>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              {profileInfo?.name?.firstname + ' ' + profileInfo?.name?.lastname}
            </Text>
            <Button
              status="danger"
              onPress={() => dispatch(userLogOut())}
              style={styles.button}
              appearance="filled">
              Çıkış Yap
            </Button>
          </View>
        )
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
