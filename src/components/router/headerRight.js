//import liraries
import {ShoppingBag} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {AppColors} from '../../theme/appColors';
import {useSelector} from 'react-redux';
import {CART} from '../../utils/routes';

// create a component
const HeaderRight = ({navigation}) => {
  const {count} = useSelector(state => state.home);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate(CART)}>
        <ShoppingBag size="25" color={AppColors.BLACK} />
        {count > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -5,
              backgroundColor: AppColors.PRIMARY,
              padding: 3,
              borderRadius: 100,
              width: 18,
              height: 18,
              justifyContent: 'center',
              alignItems: 'center',
              top: -5,
            }}>
            <Text style={{color: AppColors.WHITE, fontSize: 12}}>{count}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.WHITE,
    paddingHorizontal: 10,
  },
});

//make this component available to the app
export default HeaderRight;
