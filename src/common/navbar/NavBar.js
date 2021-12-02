import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import HomeScreenContainer from '../../screens/HomeScreeen/HomeScreenContainer';
import NewArrivals from '../../screens/NewArrivals';
import AA from './AA';
import BB from './BB';
import { ItemsList } from '../../screens/productListing';
import ShippingPage from '../../screens/shipping/ShippingPage';
const Drawer = createDrawerNavigator();
const NavBar = () => {
  const dimensions = useWindowDimensions();
  const [a, setA] = React.useState(false);
  return (
    // <View>
    //     <View>
    //         <Image 
    //         source = {require('../../assets/images/karachi-bakery-logo.png')}
    //         />
    //         <TouchableOpacity>
    //             <Text>Shop Online</Text>
    //         </TouchableOpacity>
    //     </View>
    // </View>
    <>
      {/* <Text onPress = {() => setA(true)}> a</Text> */}
      {/* {console.warn(a)} */}
      <NavigationContainer
      >
        <Drawer.Navigator
          initialRouteName="home"
          defaultStatus="closed"
          //   drawerHideStatusBarOnOpen = 'true'
          screenOptions={{
            //   header : () => {
            //       return(
            //           <Text>dvbdfjhnbjkd</Text>
            //       )
            //   },
            //   headerShown : false,
            drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
            // drawerActiveBackgroundColor:'red',
            // drawerInactiveBackgroundColor:'#45227a',
            drawerLabelStyle: {
              color: '#fff',
              fontSize: 18
            },
            drawerStyle: {
              backgroundColor: '#45227a',
              //   padding:0,
              //   margin:0
            },
            drawerActiveTintColor: '#EC286F',
            // drawerContentContainerStyle :{backgroundColor:'#45227a'}
          }}
        >
          <Drawer.Screen name="home" component={HomeScreenContainer} />
          <Drawer.Screen name="ABOUT US" component={BB} />
          <Drawer.Screen name="SERVICES" component={BB} />
          <Drawer.Screen name="SPECIALITIES" component={BB} />
          <Drawer.Screen name="CAREERS" component={BB} />
          <Drawer.Screen name="ENQUIRY" component={BB} />
          <Drawer.Screen name="CONTACT US" component={BB} />
          <Drawer.Screen name="SITEMAP" component={BB} />
          <Drawer.Screen name="BISCUITS" component={BB} />
          <Drawer.Screen name="GLUTEN & SUGAR FREE" component={BB} />
          <Drawer.Screen name="VEGAN BISCUITS" component={BB} />
          <Drawer.Screen name="CAKES" component={BB} />
          <Drawer.Screen name="PASTRIES" component={BB} />
          <Drawer.Screen name="CHOCOLATES" component={BB} />
          <Drawer.Screen name="CUP CAKES" component={BB} />
          <Drawer.Screen name="MACARON" component={BB} />
          <Drawer.Screen name="SNACKS" component={BB} />
          <Drawer.Screen name="NEW ARRIVALS" component={NewArrivals} />
          <Drawer.Screen name="plp" component = {ItemsList} options = {{headerShown:false}}/>
          <Drawer.Screen name="shipment" component = {ShippingPage} options = {{headerShown:false}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};
export default NavBar
