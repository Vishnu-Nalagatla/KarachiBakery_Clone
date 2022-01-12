import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import NewArrivals from '../../src/screens/NewArrivals';
import NavBar from '../../src/common/navbar/NavBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../../src/screens/shipping/Cart';
import MoreOptions from '../../src/screens/More/MoreOptions';
import WishListContainer from '../../src/screens/wishlist/WishListContainer';
const Tab = createBottomTabNavigator();
const TabContainer = ({navigation}) => {
    // const openDrawer = () =>{
    //     alert('bfhudsfb')
    // }
    return (
        // <NavigationContainer>
            <Tab.Navigator
            backBehavior='history'
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#0073cf',
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        height: 60,
                    },
                    tabBarLabelStyle:{
                     fontSize:13,
                     textTransform:'capitalize'
                    },
                    // tabBarIconStyle:{
                    //     fontSize:200
                    // },
                    // tabBarShowLabel:false,
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName;
                        switch (route.name) {
                            case "home": {
                                iconName = 'home-minus-outline'
                                break;
                            }
                            case 'categories': {
                                iconName = 'table';
                                break;
                            }
                            case 'wishlist':
                                iconName = 'heart-outline';
                                break;
                            case 'my cart':
                                iconName = 'cart-minus';
                                break;
                            case 'more':
                                iconName = 'table-of-contents';
                                break;
                        }
                        return (
                            <MaterialCommunityIcons
                                name={iconName}
                                size={focused ? 30 : 25}
                                color={focused ? '#0073cf' : 'gray'}
                            />
                        )
                    }
                })
                }
            >
                <Tab.Screen name='home' component={NavBar} />
                <Tab.Screen name="categories" component={NewArrivals} />
                <Tab.Screen name="wishlist" component={WishListContainer} />
                <Tab.Screen name='my cart' component={Cart} />
                <Tab.Screen name='more' component={MoreOptions} />
            </Tab.Navigator>
        // </NavigationContainer>
    );
};
export default TabContainer;
