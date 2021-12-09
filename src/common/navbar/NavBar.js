import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import AboutUs from '../../screens/NavbarScreens/AboutUs';
import ArtisanBreads from '../../screens/NavbarScreens/ArtisanBreads';
import Biscuits from '../../screens/NavbarScreens/Biscuits';
import Cakes from '../../screens/NavbarScreens/Cakes';
import Careers from '../../screens/NavbarScreens/Careers';
import Chocolates from '../../screens/NavbarScreens/Chocolates';
import ContactUs from '../../screens/NavbarScreens/ContactUs';
import CupCakes from '../../screens/NavbarScreens/CupCakes';
import Enquiry from '../../screens/NavbarScreens/Enquiry';
import GiftPacks from '../../screens/NavbarScreens/GiftPacks';
import Macaron from '../../screens/NavbarScreens/Macaron';
import Mithai from '../../screens/NavbarScreens/Mithai';
import Pastries from '../../screens/NavbarScreens/Pastries';
import Rusks from '../../screens/NavbarScreens/Rusks';
import Services from '../../screens/NavbarScreens/Services';
import SiteMap from '../../screens/NavbarScreens/SiteMap';
import Snacks from '../../screens/NavbarScreens/Snacks';
import Specialities from '../../screens/NavbarScreens/Specialities';
import SugarFree from '../../screens/NavbarScreens/SugarFree';
import VeganBiscuits from '../../screens/NavbarScreens/VeganBiscuits';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import NewArrivals from '../../screens/NewArrivals';
import HomeScreenContainer from '../../screens/NavbarScreens/HomeScreeen/HomeScreenContainer';
import DeliveryStackNavigation from '../../components/deliveryComponents/DeliveryStackNavigation';

const NavBar = () => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      {/* <View style={styles.navbarContainer}>
        <Image
          style={styles.navbarImage}
          source={require('../../assets/karachi-bakery-logo.png')}
        />
        <TouchableOpacity style={styles.navHeader}>
          <View style={styles.navTitleView}>
          <Text style={styles.navTitle}>Shop Online</Text>
          </View>
        </TouchableOpacity>
          </View> */}
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <CustomDrawer {...props} />}
          drawerPosition="right"
          overlayColor="#000000"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'white',
              shadowColor: 'black',
              shadowOpacity: 0.8,
              elevation: 10
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontSize: 30,
            },
            drawerLabelStyle: {
              fontSize: 15,
              fontFamily: 'Roboto-Medium',
            },
            drawerActiveBackgroundColor: '#aa18ea', // This attribute is to add the background color to Screen Name
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',

          }}>
          <Drawer.Screen
            name="Home"
            // component={HomePage}
            component={HomeScreenContainer}

            options={{
              headerTitle: 'Karachi Bakery',
              headerTitleStyle: {
                fontSize: 28,
              },
              drawerIcon: ({ color }) => (
                <Ionicons name="home-outline" size={25} color={color} />
              ),
            }}
          />
          <Drawer.Screen name="AboutUs" component={AboutUs} />
          <Drawer.Screen name="NewArrivals" component={NewArrivals} />
         
          <Drawer.Screen name="Delivery" component={DeliveryStackNavigation} options={{
            headerTitle: 'Karachi Bakery' , swipeEnabled: false, headerShown: false
          }}
           />
          <Drawer.Screen name="Services" component={Services} />
          <Drawer.Screen name="Specialities" component={Specialities} />
          <Drawer.Screen name="Careers" component={Careers} />
          <Drawer.Screen name="Enquiry" component={Enquiry} />
          <Drawer.Screen name="ContactUs" component={ContactUs} />
          <Drawer.Screen name="SiteMap" component={SiteMap} />
          <Drawer.Screen name="Biscuits" component={Biscuits} />
          <Drawer.Screen name="SugarFree" component={SugarFree} />
          <Drawer.Screen name="VeganBiscuits" component={VeganBiscuits} />
          <Drawer.Screen name="Cakes" component={Cakes} />
          <Drawer.Screen name="Pastries" component={Pastries} />
          <Drawer.Screen name="Chocolates" component={Chocolates} />
          <Drawer.Screen name="CupCakes" component={CupCakes} />
          <Drawer.Screen name="Macaron" component={Macaron} />
          <Drawer.Screen name="Snacks" component={Snacks} />
          <Drawer.Screen name="ArtisanBreads" component={ArtisanBreads} />
          <Drawer.Screen name="Rusks" component={Rusks} />
          <Drawer.Screen name="Mithai" component={Mithai} />
          <Drawer.Screen name="GiftPacks" component={GiftPacks} />
        </Drawer.Navigator>
    </>
  );
};
const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarImage: {
    width: 90,
    height: 80,
    marginTop: 10,
    marginLeft: 10,
  },
  navHeader: {
    width: 150,
    height: 50,
    backgroundColor: '#FF2B79',
    borderColor: '#CC2361',
  },
  navTitle: {
    color: 'white',
    fontSize: 15,
  },
  navTitleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavBar;
