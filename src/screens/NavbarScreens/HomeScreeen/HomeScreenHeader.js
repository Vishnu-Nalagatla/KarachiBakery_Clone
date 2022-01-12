import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const HomeScreenHeader = ({navigation,openDrawer}) => {
    return (
        <View
        style = {styles.headerContainer}
        >
            <Image
                source={require('../../../assets/karachi-bakery-logo.png')} 
                style = {styles.headerLogo}
                resizeMode='contain'
                />
            <View
            style = {styles.optionContainer}
            >
                <Entypo
                    name='shopping-cart'
                    size={14.5}
                    color={'#fff'}
                    />
                <Text
                style = {styles.optionText}
                >Shop  Online</Text>
                <FontAwesome5Icon 
                name='caret-down'
                 color={'#fff'}
                 style = {{marginTop:5,marginLeft:3}}
                />
            </View>
            <View hitSlop={{bottom:7,top:7,left:7,right:7}} style = {styles.barIcon} onStartShouldSetResponder={()=>alert('something')}>
            <FontAwesome5Icon 
            name='bars' 
            color={'#b79760'}
            size={20}
            onPress={() =>openDrawer()}
            />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    headerContainer : {
      flexDirection:'row',
      justifyContent:'space-between',
    },
    headerLogo:{
        width:80,
        height:70,
    },
    optionContainer : {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:160,
        height:35,
        backgroundColor:'#Ec286F',
        borderWidth:.5,
        borderColor:'#000',
        marginTop:12
    },
    optionText:{
        color:'#fff',
        fontSize:15,
        fontWeight:'400',
        marginLeft:10
    },
    barIcon:{
        height:54,
        width:54,
        backgroundColor:'#eadcc4',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default HomeScreenHeader
