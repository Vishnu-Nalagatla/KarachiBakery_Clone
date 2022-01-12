import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import NavBar from '../common/navbar/NavBar';
import StackNavigatorContainer from '../common/navbar/StackNavigatorConatiner';
import GetStarted from '../components/GetStarted';
import DrawerContainer from '../../Practice/navigation/DrawerContainer';
import UserLogin from '../components/LoginPage/UserLogin';
import LoginNavigationContainer from '../components/LoginPage/LoginNavigationContainer';
import NumberLogin from '../components/LoginPage/NumberLogin/NumberLogin';
import NumberOTP from '../components/LoginPage/NumberLogin/NumberOTP';
const Stack = createStackNavigator();
const NavigationContainers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStared" component={GetStarted} />
        {/* <Stack.Screen name="LoginContainer" component={LoginNavigationContainer} /> */}
        <Stack.Screen name="UserLogin" component={UserLogin} />
        {/* <Stack.Screen name="NumberLogin" component={NumberLogin} /> */}
        <Stack.Screen name="NumberOTP" component={NumberOTP} />
        <Stack.Screen name="tabNav" component={DrawerContainer} />
        <Stack.Screen name="stackNav" component={StackNavigatorContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainers;
