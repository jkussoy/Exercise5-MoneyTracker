import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, PageHeader, TextInput} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Image} from 'react-native-svg';

const SignUp = () => {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState('');
  const ImagePicker = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User Cancelled image Picker');
        return;
      } else if (response.error) {
        console.log(response.error);
        return;
      }

      console.log('Images', response.assets[0]);
      setProfileImage(response.assets[0]);
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeader
          label="Sign UP"
          backButton={true}
          navigation={navigation}
          nav="SignIn"
        />
        <Gap height={24} />
        <View style={styles.contentWrapper}>
          <View style={styles.avatarWrapper}>
            <View style={styles.border}>
              <TouchableOpacity onPress={ImagePicker} style={styles.addPhoto}>
                <Text style={styles.addPhotoText}>Add Photo</Text>
              </TouchableOpacity>
              <Image
                style={{width: 200, height: 200}}
                source={{
                  uri: `data:${profileImage.type};base64,${profileImage.base64}`,
                }}
              />
            </View>
          </View>
          <TextInput label="Full Name" placeholder="Type Your Full Name" />
          <Gap height={16} />
          <TextInput label="Email Address" placeholder="Type Your Email" />
          <Gap height={16} />
          <TextInput label="Password" placeholder="Type Your Password" />
          <Gap height={24} />
          <Button
            label="Continue"
            onPress={() => navigation.navigate('SignUpPhoto')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 24,
  },
  addPhoto: {
    height: 90,
    width: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  addPhotoText: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    maxWidth: 40,
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 110,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
