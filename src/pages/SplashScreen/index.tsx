import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Photos from '../../assets/icons/Frame (1).svg';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Photos />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02cf8e',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
