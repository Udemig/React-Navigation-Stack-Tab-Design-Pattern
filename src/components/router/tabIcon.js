//import liraries
import React from 'react';
import {FAVORITES, HOME, NOTTIFICATION, PROFILE} from '../../utils/routes';

import {Heart, Home2, Notification, Profile} from 'iconsax-react-native';
// create a component
const TabIcon = ({name, focused, color, size}) => {
  if (name === HOME) {
    return (
      <Home2 color={color} variant={focused ? (variant = 'Bold') : 'Outline'} />
    );
  } else if (name === PROFILE) {
    return (
      <Profile
        color={color}
        variant={focused ? (variant = 'Bold') : 'Outline'}
      />
    );
  } else if (name === NOTTIFICATION) {
    return (
      <Notification
        color={color}
        variant={focused ? (variant = 'Bold') : 'Outline'}
      />
    );
  } else if (name === FAVORITES) {
    return (
      <Heart color={color} variant={focused ? (variant = 'Bold') : 'Outline'} />
    );
  }
};

export default TabIcon;
