import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import GlobalStyles from '../../../utils/GlobalStyles';

const NumberLogin = ({navigation}) => {
  return (
    <>
      <View style={styles.loginBodyContainer}>
        <Text style={styles.loginMobileNumber}>Enter Your Mobile Number</Text>
        <Text>You will receive a 4 digit code to verify your account</Text>
        <View style={[styles.loginNumberContainer, GlobalStyles.flexDirection]}>
          <Text style={styles.countryCode}>+ 91</Text>
          <TextInput style={styles.loginNumber} />
        </View>
        <TouchableOpacity
          style={styles.loginRequestOTP}
          onPress={() => navigation.navigate('NumberOTP')}>
          <Text style={styles.loginRequest}>Request OTP</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  loginNumberContainer: {
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 30,
  },
  loginMobileNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },

  countryCode: {
    borderRightWidth: 2,
    borderColor: 'lightgray',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  loginNumber: {
    width: '50%',
    paddingLeft: 10,
  },
  loginRequestOTP: {
    backgroundColor: '#aa18ea',
    marginHorizontal: 100,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginRequest: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default NumberLogin;
