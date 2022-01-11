import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import GlobalStyles from '../../../utils/GlobalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NumberOTP = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={styles.otpContainer}>
          <View style={(styles.otpMainHeader, GlobalStyles.flexDirection)}>
            <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Ionicons
              style={styles.mailIcon}
              size={30}
              name="arrow-back"
              color="black"
            />
            </TouchableOpacity>
            <Text style={styles.otpText}>OTP</Text>
          </View>
          <Image
            source={require('../../../assets/OTP/otp-authentication-verification.jpg')}
            style={styles.otpImage}
            resizeMode="contain"></Image>
          <Text style={styles.otpVCodeHeading}>Verification Code</Text>
          <Text style={styles.otpSubHeading}>
            We have sent the Verification Code to your Mobile Number
          </Text>
          <Text style={styles.otpNumber}>+91 - 9848012345</Text>
          <View
            style={[
              styles.otpConfirmationContainer,
              GlobalStyles.flexDirection,
            ]}>
            <TextInput
              keyboardType="number-pad"
              style={styles.otpNum}></TextInput>
            <TextInput
              keyboardType="number-pad"
              style={styles.otpNum}></TextInput>
            <TextInput
              keyboardType="number-pad"
              style={styles.otpNum}></TextInput>
            <TextInput
              keyboardType="number-pad"
              style={styles.otpNum}></TextInput>
          </View>
          <TouchableOpacity style={styles.otpSubmitContainer}
          onPress={() => navigation.navigate('tabNav')}>
            <Text style={styles.otpButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    padding: 20,
    backgroundColor: 'white',
  },
  otpMainHeader: {},
  otpText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    paddingLeft: 120,
  },
  otpImage: {
    height: 220,
    width: 220,
    marginVertical: 15,
    marginHorizontal: 65,
  },
  otpVCodeHeading: {
    textAlign: 'center',
    color: '#4B4B4B',
    fontWeight: '700',
    fontSize: 28,
    paddingBottom: 20,
    paddingTop: 10,
  },
  otpSubHeading: {
    fontSize: 15,
    fontWeight: '500',
  },
  otpNumber: {
    fontSize: 15,
    fontWeight: '500',
    color: '#657287',
    textAlign: 'center',
    paddingVertical: 20,
  },
  otpConfirmationContainer: {
    paddingVertical: 15,
    justifyContent: 'space-around',
  },
  otpNum: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    elevation: 10,
    shadowOpacity: 0.8,
    shadowColor: 'lightgray',
    textAlign: 'center',
  },
  otpSubmitContainer: {
    backgroundColor: '#87A5A6',
    marginTop:20,
    marginHorizontal: 40,
    paddingVertical: 15,
    borderColor: '#e7eced',
    borderRadius: 50,
  },
  otpButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
    fontSize: 20,
  },
});
export default NumberOTP;
