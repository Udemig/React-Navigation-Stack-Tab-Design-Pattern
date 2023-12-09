import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FAVORITES, HOME, NOTTIFICATION, PROFILE} from '../utils/routes';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Favorites from '../screens/favorites';
import Notiffication from '../screens/nottification';
import TabIcon from '../components/router/tabIcon';
import {AppColors} from '../theme/appColors';
import { Text } from 'react-native';
import HeaderRight from '../components/router/headerRight';

const Tab = createBottomTabNavigator();

export default function TabNavigatior({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerRight:()=>(<HeaderRight navigation={navigation}/>),
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        tabBarActiveTintColor: AppColors.BLACK,
        tabBarInactiveTintColor: AppColors.SECONDARY,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
      <Tab.Screen name={NOTTIFICATION} component={Notiffication} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
