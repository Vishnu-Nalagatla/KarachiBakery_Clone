import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../../screens/NavbarScreens/HomePage';
import { ItemsList } from '../../screens/productListing';
import Cart from '../../screens/shipping/Cart';
const Stack = createStackNavigator();
const StackNavigatorContainer = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="delivery"
                component={HomePage}
            />
            <Stack.Screen
                name="plp"
                component={ItemsList} />
            <Stack.Screen
                name="cart"
                component={Cart}
                options={{
                    headerShown: true,
                    headerTitle: 'Your Order'
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigatorContainer