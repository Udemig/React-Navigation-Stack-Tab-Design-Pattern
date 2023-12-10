//import liraries
import React, {useEffect} from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories, getProductList} from '../../store/actions/homeActions';
import Spinner from '../../components/uı/spinner';
import ProductItem from '../../components/home/productItem';
import { homeScreenStyles } from '../../styles/home/homeStyles';
import CategoryItem from '../../components/home/categoryItem';

// create a component
const Home = () => {
  const {pending, categories} = useSelector(state => state?.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View style={homeScreenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={categories}
          keyExtractor={item => item}
          renderItem={({item}) => <CategoryItem item={item} />}
        />
      )}
    </View>
  );
};
export default Home;
