import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import HomeScreenContainer from '../../src/screens/NavbarScreens/HomeScreeen/HomeScreenContainer';
import DrawerContent from './DrawerContent';
const Drawer = createDrawerNavigator();
const DrawerNavigatorContainer = () => {
  return (
<NavigationContainer>
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
    <Drawer.Screen name="Home" component={HomeScreenContainer}/>
    </Drawer.Navigator>
</NavigationContainer>
  );
};

export default DrawerNavigatorContainer;
