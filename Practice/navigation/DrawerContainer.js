import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import NewArrivals from '../../src/screens/NewArrivals';
import NavBar from '../../src/common/navbar/NavBar';
const Tab = createBottomTabNavigator();
const TabContainer = () => {
    return (
      <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown:false}}>
              <Tab.Screen name='home' component = {NavBar}/>
              <Tab.Screen name="second" component = {NewArrivals}/>
          </Tab.Navigator>
      </NavigationContainer>
    );
};
export default TabContainer;
