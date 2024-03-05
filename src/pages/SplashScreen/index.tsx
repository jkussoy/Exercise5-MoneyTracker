import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Logo from '../../assets/icons/Frame (1).svg';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#02cf8e',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 32,
        fontFamily: 'Poppins-Medium',
    },
});