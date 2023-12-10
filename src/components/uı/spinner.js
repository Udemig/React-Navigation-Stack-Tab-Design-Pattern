//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Spinner} from '@ui-kitten/components';

// create a component
const CustomSpinner = () => {
  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default CustomSpinner;
