import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import NumberLogin from './NumberLogin/NumberLogin';
import NumberOTP from './NumberLogin/NumberOTP';
import EmailLogin from './EmailLogin/EmailLogin';
import UserLogin from './UserLogin';

const Stack = createStackNavigator();

const LoginNavigationContainer = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="EmailLogin" component={EmailLogin} />
        <Stack.Screen name="NumberLogin" component={NumberLogin} />
        <Stack.Screen name="NumberOTP" component={NumberOTP} />
      </Stack.Navigator>
    </>
  );
};

export default LoginNavigationContainer;
