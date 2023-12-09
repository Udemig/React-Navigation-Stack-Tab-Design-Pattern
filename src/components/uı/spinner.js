//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator } from 'react-native';
import { AppColors } from '../../theme/appColors';

// create a component
const Spinner = () => {
    return (
        <View style={styles.container}>
        <ActivityIndicator size={"small"} color={AppColors.BLACK} />
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
export default Spinner;
