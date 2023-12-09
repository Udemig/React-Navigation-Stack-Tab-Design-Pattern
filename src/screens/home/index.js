//import liraries
import React, {useEffect} from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductList} from '../../store/actions/homeActions';
import Spinner from '../../components/uı/spinner';
import ProductItem from '../../components/home/productItem';
import { homeScreenStyles } from '../../styles/home/homeStyles';

// create a component
const Home = () => {
  const {pending, productList} = useSelector(state => state?.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <View style={homeScreenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={productList}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ProductItem item={item} />}
        />
      )}
    </View>
  );
};
export default Home;
