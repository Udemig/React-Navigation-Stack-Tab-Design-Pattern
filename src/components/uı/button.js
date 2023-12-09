//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/appColors';

// create a component
const CustomButton = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 5,
    borderRadius: 5,
    margin:5
  },
  title: {
    color: AppColors.WHITE,
    fontWeight:"600"
  },
});

//make this component available to the app
export default CustomButton;
