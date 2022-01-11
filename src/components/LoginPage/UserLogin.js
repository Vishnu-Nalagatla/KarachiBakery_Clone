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
import GlobalStyles from '../../utils/GlobalStyles';
import EmailLogin from './EmailLogin/EmailLogin';
import NumberLogin from './NumberLogin/NumberLogin';

const UserLogin = ({ navigation}) => {
  const [loginElevation, setLoginElevation] = useState(true);

  const EmailLoginElevationHandler = () => {
    setLoginElevation(true);
  };
  const PhoneLoginElevationHandler = () => {
    setLoginElevation(false);
  };
  return (
    <>
      <ScrollView>
        <View style={styles.loginContainer}>
          <View style={styles.loginHeaderContainer}>
            <Text style={styles.loginHeading}>Login Account</Text>
            <Text style={styles.loginSubHeading}>
              Hello, Welcome back to your account
            </Text>
          </View>
          <View style={[styles.loginTypeContainer, GlobalStyles.flexDirection]}>
            <TouchableOpacity
              style={[
                styles.loginEmail,
                loginElevation && styles.loginTypeElevation,
              ]}
              onPress={() => EmailLoginElevationHandler()}>
              <Text style={styles.loginEmailText}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.loginPhoneNumber,
                !loginElevation && styles.loginTypeElevation,
              ]}
              onPress={PhoneLoginElevationHandler}>
              <Text style={styles.loginPhoneNumberText}>PhoneNumber</Text>
            </TouchableOpacity>
          </View>

          {loginElevation && <EmailLogin navigation={navigation} />}

          {!loginElevation && <NumberLogin navigation={navigation} /> }

          <View style={styles.signInContainer}>
            <Text style={styles.signInWith}>or Sign in with Google</Text>
            <TouchableOpacity
              style={[styles.googleContainer, GlobalStyles.flexDirection]}>
              <Image
                source={require('../../assets/ModalLogin/Google-Icon.png')}
                style={styles.googleIcon}
              />
              <Text style={styles.GoogleSignIn}>Google</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.loginFooterContainer, GlobalStyles.flexDirection]}>
            <Text style={styles.notRegistered}>Not registered yet?</Text>
            <Text style={styles.createAccount}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    padding: 30,
  },
  loginHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  loginSubHeading: {
    fontSize: 13,
    fontWeight: '500',
    color: 'gray',
    marginTop: 10,
  },
  loginTypeContainer: {
    marginVertical: 30,
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: '#F6F5FA',
  },
  loginTypeElevation: {
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 20,
    shadowOpacity: 0.8,
    shadowColor: 'black',
  },
  loginEmail: {
    paddingVertical: 13,
    width: '50%',
  },
  loginPhoneNumber: {
    paddingVertical: 13,
    width: '50%',
  },
  loginEmailText: {
    textAlign: 'center',
  },
  loginPhoneNumberText: {
    textAlign: 'center',
  },
  signInContainer: {
    marginTop: 40,
  },
  signInWith: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
  GoogleSignIn: {
    fontSize: 20,
    color: 'black',
    paddingHorizontal: 10,
  },
  googleContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#F8F7FC',
    borderWidth: 1,
    borderRadius: 50,
    elevation: 10,
    shadowOpacity: 0.8,
    shadowColor: 'black',
    borderColor: 'lightgray',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 25,
    height: 25,
  },
  loginFooterContainer: {
    marginTop: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
  },
  notRegistered: {
    fontSize: 15,
  },
  createAccount: {
    color: '#BF7E6E',
    marginLeft: 5,
    fontSize: 15,
  },
});

export default UserLogin;
