import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { ImageBackground, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const CustomDrawer = (props) => {
    return (
        <>
            <DrawerContentScrollView 
            {...props}
            // contentContainerStyle={{backgroundColor:'#8600d6'}}
            >
                <ImageBackground
                 source={require('../../assets/NavbarImages/drawerBackground.jpeg')}
                // source={{uri : 'http://www.dev.hprac.com/media/catalog/product/k/a/kaju-katli-500g-front_1.jpg'}}

                style={{padding: 20 , marginTop: -4}}
                 >
                <Image
                 source={require('../../assets/NavbarImages/user-profile.jpg')}
                // source={{uri : 'http://static.hugedomains.com/images/logo_huge_domains.gif'}}
                style={{height: 80, width: 80 , borderRadius: 40 , marginBottom: 10}}
                />
                <Text style={styles.usernameText}>Vishnu Nalagatla</Text>
                <View style={styles.emailView}>
                <FontAwesome5
                style={styles.mailIcon}
                size={25}
                  name='envelope'
                />
                <Text style={[styles.usermailText]}>vishnunalagatla@gmail.com</Text>
                </View>
                </ImageBackground>
                <View style={styles.drawerList}>
                <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    usernameText : {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Roboto-Medium',
    },
    usermailText : {
        fontSize: 15,
        color: 'white',
        fontFamily: 'Roboto-Medium',
        opacity:0.5,
    },
    drawerList: {
        marginTop: 10,
    },
    mailIcon : {
        color: 'white',
    },
    emailView : {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default CustomDrawer
