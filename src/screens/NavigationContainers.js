import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import NavBar from '../common/navbar/NavBar';
import StackNavigatorContainer from '../common/navbar/StackNavigatorConatiner';
import GetStarted from '../components/GetStarted';
const Stack = createStackNavigator();
const NavigationContainers = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{headerShown:false}}>
            <Stack.Screen name="GetStared" component={GetStarted} />
                <Stack.Screen  name="drawerNav" component = {NavBar}/>
                <Stack.Screen name = "stackNav" component = {StackNavigatorContainer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationContainers
