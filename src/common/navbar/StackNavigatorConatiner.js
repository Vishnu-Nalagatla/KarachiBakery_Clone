import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ItemsList } from '../../screens/productListing';
import DeliveryAddressSearch from '../../components/deliveryComponents/DeliveryAddressSearch';
import CurrentLocationMap from '../../screens/maps/GoogleMaps';
import SearchFilter from '../../screens/productListing/SearchFilter';
import DeliverySelection from '../../components/deliveryComponents/DeliverySelection';
import Cart from '../../screens/shipping/Cart';
import LoginPopUp from '../../components/LoginPopUp';
const Stack = createStackNavigator();
const StackNavigatorContainer = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="delivery"
                component={DeliverySelection}
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