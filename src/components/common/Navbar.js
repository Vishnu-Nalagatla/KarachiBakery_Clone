import { createDrawerNavigator } from '@react-navigation/drawer';
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
import ScreenA from './ScreenA';

const Navbar = () => {
const Drawer = createDrawerNavigator();

  return (
    <>
      <View style={styles.navbarContainer}>
        <Image
          style={styles.navbarImage}
          source={require('../assets/images/karachi-bakery-logo.png')}
        />
        <TouchableOpacity style={styles.navHeader}>
          <View style={styles.navTitleView}>
          <Text style={styles.navTitle}>Shop Online</Text>
          </View>
        </TouchableOpacity>
          </View>
        <NavigationContainer>
            <Drawer.Navigator
             drawerPosition= "right"
             overlayColor = '#000000'
            screenOptions={{
              // swipeEnabled : true,       // This attribute is to give swipe to drawer
              headerTitleAlign : 'center',
              headerStyle:{
                backgroundColor : 'aqua'
              },
              headerTintColor : '#000000',
              headerTitleStyle: {
                fontSize : 30,
              }
            }}
            >
                <Drawer.Screen 
                name="Screen_A"
                component={ScreenA}
                options={{ title:'Screen A Title'
                 
            }}
            
                />
            </Drawer.Navigator>
        </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
  navTitle : {
color: 'white',
fontSize: 15,
  },
  navTitleView : {
flex:1,
justifyContent: 'center',
alignItems: 'center',
  }
});

export default Navbar;
