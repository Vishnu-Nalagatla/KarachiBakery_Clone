import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.loginScreenContainer}>
      <Text style={styles.skipText}>skip</Text>
      <Text style={styles.loginText}>Login</Text>
      <Text style={styles.verificationText}>
        We will send a text with a verification code on your mobile number
      </Text>
      <TextInput
        placeholder="Enter your mobile number"
        style={styles.input}
        keyboardType="number-pad"
        placeholderTextColor="#898989"
      />
      <TouchableOpacity style={styles.sendOtpBtn} onPress={()=>navigation.navigate('otp')}>
        <Text style={styles.sendOtpText}>send otp</Text>
      </TouchableOpacity>
      <View style={styles.orDivisionContainer}>
        <View style={styles.hrLine}></View>
        <Text style={styles.orText}>or</Text>
        <View style={styles.hrLine}></View>
      </View>
      <View style={styles.socialMediaIconsContainer}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="apple" size={25} color="#f6f6f6" />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="google" size={25} color="#f6f6f6" />
        </View>
        <View style={styles.icon}>
          <EvilIcons name="sc-facebook" size={35} color="#f6f6f6" />
        </View>
      </View>
      <Text style={styles.termsAndConditionsText}>
        By continuing you agree to our Terms of servicing and Privacy Policy
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  loginScreenContainer: {
    paddingHorizontal: 10,
    height: '100%',
  },
  skipText: {
    textAlign: 'right',
    textTransform: 'uppercase',
    color: '#000',
    fontWeight: '600',
    marginTop:20
  },
  loginText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  verificationText: {
    width: Dimensions.get('window').width * 0.6,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop:14
  },
  input: {
    borderWidth: 2,
    marginTop: 20,
    borderColor: '#ededed',
    borderRadius: 9,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop:100,
    padding:7
  },
  sendOtpBtn: {
    backgroundColor: '#c4c4c4',
    paddingVertical: 13,
    borderRadius: 9,
    marginTop: 20,
  },
  sendOtpText: {
    textAlign: 'center',
    color: '#e9e9e9',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
  },
  orDivisionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160,
  },
  hrLine: {
    width: 100,
    height: 2,
    backgroundColor: '#d6d6d6',
  },
  orText: {
    paddingHorizontal: 6,
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '700',
    color: '#d6d6d6',
  },
  socialMediaIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    marginTop:20
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 18,
  },
  termsAndConditionsText: {
    position: 'absolute',
    bottom: 0,
    left: '20%',
    width: Dimensions.get('window').width * 0.65,
    textAlign: 'center',
    margin: 'auto',
    color: '#c4c4c4',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom:15
  },
});
export default LoginScreen;



