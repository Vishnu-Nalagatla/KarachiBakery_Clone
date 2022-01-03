import { Link, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DeliveryAddressSearch from '../../src/components/deliveryComponents/DeliveryAddressSearch';
import HomePage from './HomePage';
const DeliveryStack = createStackNavigator();
const DeliveryStackNavigation = () => {
    return (
        <DeliveryStack.Navigator
            initialRouteName="DeliveryPageStack"
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'white',
                    shadowColor: 'black',
                    shadowOpacity: 0.8,
                    elevation: 10
                },
            }}>
            <DeliveryStack.Screen name='DeliveryPageStack' component={HomePage}
                options={{ swipeEnabled: false, headerShown: false }} />
           
        </DeliveryStack.Navigator>
    );
};

export default DeliveryStackNavigation;