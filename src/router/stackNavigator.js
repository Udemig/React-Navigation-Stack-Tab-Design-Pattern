// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PRODUCTLIST} from '../utils/routes';
import ProductList from '../screens/productList';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={PRODUCTLIST} component={ProductList} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
