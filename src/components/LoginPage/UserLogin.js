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
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../../utils/GlobalStyles';
import EmailLogin from './EmailLogin/EmailLogin';
import NumberLogin from './NumberLogin/NumberLogin';

const UserLogin = ({navigation}) => {
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
            <View
              style={[
                GlobalStyles.flexDirection,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={styles.loginHeading}>Login Account</Text>
              <TouchableOpacity style={[styles.loginSkipTouchable, GlobalStyles.flexDirection]}
              onPress={() => navigation.navigate('tabNav')}>
                <Text style={styles.loginSkipText}>Skip</Text>
                <Ionicons
                  name="chevron-forward"
                  style={styles.skipIcon}
                  size={20}
                  color = 'green'
                />
              </TouchableOpacity>
            </View>
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
          <View style={{height: 240}}>
            {loginElevation && <EmailLogin navigation={navigation} />}
            <View style={{paddingTop: 30}}>
              {!loginElevation && <NumberLogin navigation={navigation} />}
            </View>
          </View>
          <View style={[styles.signInContainer]}>
            <Text style={styles.signInWith}>or</Text>
          </View>
          <View
            style={[
              styles.googleSignInOptionsContainer,
              GlobalStyles.flexDirection,
            ]}>
            <TouchableOpacity
              style={[styles.googleContainer, GlobalStyles.flexDirection]}>
              <Image
                source={require('../../assets/LoginSignIn/AppleLogo.png')}
                style={styles.appleLogo}
              />
              {/* <Text style={styles.GoogleSignIn}>Google</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.googleContainer, GlobalStyles.flexDirection]}>
              <Image
                source={require('../../assets/LoginSignIn/Google-Icon.png')}
                style={styles.googleIcon}
              />
              {/* <Text style={styles.GoogleSignIn}>Google</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.googleContainer, GlobalStyles.flexDirection]}>
              <Image
                source={require('../../assets/LoginSignIn/FacebookLogo.png')}
                style={styles.facebookLogo}
              />
              {/* <Text style={styles.GoogleSignIn}>Google</Text> */}
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
    padding: 25,
  },
  loginHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  loginSkipTouchable: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  loginSkipText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
  },
  loginSubHeading: {
    fontSize: 13,
    fontWeight: '500',
    color: 'gray',
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
  googleSignInOptionsContainer: {
    justifyContent: 'center',
  },
  googleContainer: {
    width: 60,
    height: 60,
    marginVertical: 20,
    marginHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#F8F7FC',
    borderRadius: 50,
    elevation: 10,
    shadowOpacity: 0.8,
    shadowColor: 'black',
    borderColor: 'lightgray',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  facebookLogo: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  appleLogo: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  loginFooterContainer: {
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
