import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Home from './Home';
import InitialPage from './InitialPage';
import IntroScreen from './IntroScreen';
import LoginScreen from './LoginScreen';
import OTPValidation from './OTPValidation';
const Stack =createStackNavigator();
const Navigation = () => {
    return (
 <NavigationContainer>
     <Stack.Navigator
     screenOptions={{
         headerShown:false
     }}
     >
         <Stack.Screen name="initial" component={InitialPage}/>
         <Stack.Screen name = "intro" component={IntroScreen}/>
         <Stack.Screen name = 'login' component={LoginScreen}/>
         <Stack.Screen name="otp" component={OTPValidation}/>
         <Stack.Screen name='home' component={Home}/>
     </Stack.Navigator>
 </NavigationContainer>
    )
}

export default Navigation
