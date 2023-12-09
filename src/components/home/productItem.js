//import liraries
import React, {Component} from 'react';
import {View, Text, Image, Pressable, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../uı/button';
import {productItemStyles} from '../../styles/home/homeStyles';
import {useDispatch, useSelector} from 'react-redux';
import {addToChart} from '../../store/actions/homeActions';
import {LOGIN} from '../../utils/routes';

// create a component
const ProductItem = ({item}) => {
  const navigation = useNavigation();
  const {isLogin} = useSelector(state => state.auth);
  const addChart = () => {
    if (isLogin) {
      dispatch(
        addToChart({
          userId: 3,
          date: 2019 - 12 - 10,
          products: [{productId: 1, quantity: 3}],
        }),
      );
    } else {
      Alert.alert(
        'Giriş Yap',
        'Giriş yaptıktan sonra ürünü satın alabilirsiniz',
        [
          {
            text: 'Giriş Yap',
            onPress: () => navigation.navigate(LOGIN),
            style: 'cancel',
          },
          {text: 'Vazgeç', onPress: () => console.log('OK Pressed')},
        ],
      );
    }
  };

  const dispatch = useDispatch();
  return (
    <Pressable
      onPress={() => console.log(JSON.stringify(item, 0, 2))}
      style={productItemStyles.container}>
      <View style={productItemStyles.imageContainer}>
        <Image
          style={{
            width: 90,
            height: 90,
            resizeMode: 'contain',
          }}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={productItemStyles.infoContainer}>
        <Text style={productItemStyles.title}>{item.title}</Text>
        <Text numberOfLines={3} style={productItemStyles.description}>
          {item.description}
        </Text>
        <CustomButton title="Sepete Ekle" onPress={addChart} />
      </View>
    </Pressable>
  );
};

export default ProductItem;
