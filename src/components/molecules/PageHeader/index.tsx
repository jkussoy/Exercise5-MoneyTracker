import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {BackButton} from '../../../assets/icon';
import {Profile} from '../../../assets/images';

const PageHeader = ({label, backButton, navigation, nav, type}) => {
  if (type === true) {
    return (
      <View style={styles.containerWithPhoto}>
        <View>
          <Text style={styles.label}>Money Tracker</Text>
          <Text style={styles.subLabel}>Track Your Money</Text>
        </View>
        <Image style={styles.Foto} source={Profile} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => backButton && navigation.navigate(nav)}>
        {backButton && <BackButton style={styles.backButton} />}
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  containerWithPhoto: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 37,
    height: 108,
    width: 430,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Foto: {
    height: 50,
    width: 50,
    marginRight: 24,
    marginTop: 32,
    marginBottom: 26,
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  backButton: {
    marginRight: 26,
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  subLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
});
