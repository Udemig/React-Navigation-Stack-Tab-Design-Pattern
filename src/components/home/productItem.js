//import liraries
import React, {Component} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import CustomButton from '../uı/button';
import {productItemStyles} from '../../styles/home/homeStyles';
import {useDispatch} from 'react-redux';
import {addToChart} from '../../store/actions/homeActions';

// create a component
const ProductItem = ({item}) => {
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
        <CustomButton
          title="Sepete Ekle"
          onPress={() =>
            dispatch(
              addToChart({
                userId: 3,
                date: 2019 - 12 - 10,
                products: [{productId: 1, quantity: 3}],
              }),
            )
          }
        />
      </View>
    </Pressable>
  );
};

export default ProductItem;
