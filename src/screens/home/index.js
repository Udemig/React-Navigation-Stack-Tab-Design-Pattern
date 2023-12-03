//import liraries
import { Home2 } from 'iconsax-react-native';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '../../theme/appColors';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={{color:AppColors.PRIMARY}}>Home</Text>
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
export default Home;
