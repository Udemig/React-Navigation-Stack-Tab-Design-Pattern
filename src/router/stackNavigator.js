// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CART, PRODUCTLIST, TAB} from '../utils/routes';
import ProductList from '../screens/productList';
import TabNavigatior from './tabNavigators';
import Cart from '../screens/cart';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitle:"Geri"
      }}>
      <Stack.Screen name={TAB} component={TabNavigatior} />
      <Stack.Screen
        options={{headerShown: true}}
        name={CART}
        component={Cart}
      />
      <Stack.Screen name={PRODUCTLIST} component={ProductList} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
