import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ImageBackground, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import NewArrivals from '../../screens/NavbarScreens/NewArrivals'
import GlobalStyles from '../../utils/GlobalStyles'


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

                    style={{ padding: 20, marginTop: -4 }}
                >
                    <Image
                        source={require('../../assets/NavbarImages/user-profile.jpg')}
                        // source={{uri : 'http://static.hugedomains.com/images/logo_huge_domains.gif'}}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
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


                    <TouchableOpacity
                    onPress={() => props.navigation.navigate('Home')}
                    style={[styles.testingScreen, GlobalStyles.flexDirection ,{marginTop: 0}]}>
                    <View style={GlobalStyles.flexDirection}>
                    <Ionicons 
                    name="home-outline" 
                    style={styles.accountIcon}
                    size={28}
                     />
                        <Text style={[styles.testingText]}>Home</Text>
                        </View>
                        <View style={[styles.rightArrow]}>
                            <FontAwesome5
                                style={styles.rightArrowIcon}
                                size={20}
                                name='angle-right'
                            />
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                    onPress={() => props.navigation.navigate('NewArrivals')}
                    style={[styles.testingScreen, GlobalStyles.flexDirection]}>
                    <View style={GlobalStyles.flexDirection}>
                        <Feather
                            style={styles.accountIcon}
                            size={25}
                            name='settings'
                        />
                        <Text style={[styles.testingText]}>Account Settings</Text>
                        </View>
                        <View style={[styles.rightArrow]}>
                            <FontAwesome5
                                style={styles.rightArrowIcon}
                                size={20}
                                name='angle-right'
                            />
                        </View>
                    </TouchableOpacity>




                    
                    <TouchableOpacity
                    style={[styles.testingScreen, GlobalStyles.flexDirection]}>
                    <View style={GlobalStyles.flexDirection}>
                        <Octicons
                            style={styles.accountIcon}
                            size={25}
                            name='checklist'
                        />
                        <Text style={[styles.testingText]}>Order History</Text>
                        </View>
                        <View style={[styles.rightArrow]}>
                            <FontAwesome5
                                style={styles.rightArrowIcon}
                                size={20}
                                name='angle-right'
                            />
                        </View>
                    </TouchableOpacity>




                    
                    <TouchableOpacity
                    style={[styles.testingScreen, GlobalStyles.flexDirection]}>
                    <View style={GlobalStyles.flexDirection}>
                        <FontAwesome5
                            style={styles.accountIcon}
                            size={25}
                            name='credit-card'
                        />
                        <Text style={[styles.testingText]}>Payment Method</Text>
                        </View>
                        <View style={[styles.rightArrow]}>
                            <FontAwesome5
                                style={styles.rightArrowIcon}
                                size={20}
                                name='angle-right'
                            />
                        </View>
                    </TouchableOpacity>




                    
                    <TouchableOpacity
                    style={[styles.testingScreen, GlobalStyles.flexDirection]}>
                    <View style={GlobalStyles.flexDirection}>
                        <FontAwesome5
                            style={styles.accountIcon}
                            size={25}
                            name='shipping-fast'
                        />
                        <Text style={[styles.testingText]}>Shipping Address</Text>
                        </View>
                        <View style={[styles.rightArrow]}>
                            <FontAwesome5
                                style={styles.rightArrowIcon}
                                size={20}
                                name='angle-right'
                            />
                        </View>
                    </TouchableOpacity>




                    
                    <TouchableOpacity
                    style={[styles.testingScreen, GlobalStyles.flexDirection]}>
                    <View style={GlobalStyles.flexDirection}>
                        <FontAwesome5
                            style={styles.accountIcon}
                            size={25}
                            name='address-card'
                        />
                        <Text style={[styles.testingText]}>Billing Address</Text>
                        </View>
                        <View style={[styles.rightArrow]}>
                            <FontAwesome5
                                style={styles.rightArrowIcon}
                                size={20}
                                name='angle-right'
                            />
                        </View>
                    </TouchableOpacity>




                    
                    <TouchableOpacity
                    style={[styles.testingScreen, GlobalStyles.flexDirection]}>
                    <View style={GlobalStyles.flexDirection}>
                        <AntDesign
                            style={styles.accountIcon}
                            size={25}
                            name='infocirlce'
                        />
                        <Text style={[styles.testingText]}>Terms & Conditions</Text>
                        </View>
                        <View style={[styles.rightArrow]}>
                            <FontAwesome5
                                style={styles.rightArrowIcon}
                                size={20}
                                name='angle-right'
                            />
                        </View>
                    </TouchableOpacity>



                </View>
            </DrawerContentScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    usernameText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Roboto-Medium',
    },
    usermailText: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'Roboto-Medium',
        opacity: 0.5,
    },
    drawerList: {
    },
    mailIcon: {
        color: 'white',
    },
    emailView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    testingScreen: {
        // paddingLeft: 15,
        borderWidth: 2,
        borderColor: "#f2f2f2",
        backgroundColor: 'white',
        borderRadius: 12,
        elevation: 10,
        shadowOpacity: 0.8,
        shadowColor: 'black',
        height: 60,
        margin: 10,
        paddingHorizontal:18
    },
    testingText: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'Roboto-Medium',
        paddingLeft: 15,
    },
    accountIcon: {
        color: '#aa18ea',
    },
    rightArrow: {
        width: 30,
        height: 30,
        backgroundColor: 'lightgray',
        borderRadius: 50,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 15,
    },
    rightArrowIcon : {
        color: 'gray',
        
    }
});

export default CustomDrawer
