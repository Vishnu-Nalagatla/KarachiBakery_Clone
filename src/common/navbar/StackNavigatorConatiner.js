import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../../screens/NavbarScreens/HomePage';
import { ItemsList } from '../../screens/productListing';
import Cart from '../../screens/shipping/Cart';
import DeliveryAddressSearch from '../../components/deliveryComponents/DeliveryAddressSearch';
import CurrentLocationMap from '../../screens/maps/GoogleMaps';
import SearchFilter from '../../screens/productListing/SearchFilter';
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
            <Stack.Screen name='DeliveryAddressStack' component={DeliveryAddressSearch}
                options={{ title: 'Delivery To' ,headerShown: true }}
            />
            <Stack.Screen name = "map" component={CurrentLocationMap} />
            <Stack.Screen name="SearchFilter" component={SearchFilter} />
        </Stack.Navigator>
    );
};

export default StackNavigatorContainer