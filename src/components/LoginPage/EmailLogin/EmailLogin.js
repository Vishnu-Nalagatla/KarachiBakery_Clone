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

const EmailLogin = ({navigation}) => {
  return (
    <>
      <Text style={styles.loginEmailHeading}>UserName</Text>
      <View style={[styles.loginEmailContainer]}>
        <TextInput placeholder="Enter the UserName" style={styles.loginText} />
      </View>
      <Text style={[styles.loginEmailHeading, {paddingTop: 15}]}>Password</Text>
      <View style={[styles.loginEmailContainer]}>
        <TextInput placeholder="Enter the password" style={styles.loginText} />
      </View>
      <TouchableOpacity
        style={styles.emailSubmitContainer}
        onPress={() => navigation.navigate('tabNav')}
        ><Text style={styles.emailLoginButton}>Login</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  loginEmailHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    paddingLeft: 15,
  },
  loginEmailContainer: {
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  loginText: {
    width: '80%',
    paddingLeft: 25,
  },
  emailSubmitContainer: {
    marginTop: 20,
    backgroundColor: '#aa18ea',
    marginHorizontal: 50,
    paddingVertical: 10,
    borderColor: '#e7eced',
    borderRadius: 50,
  },
  emailLoginButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
    fontSize: 20,
  },
});

export default EmailLogin;
