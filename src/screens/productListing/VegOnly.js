import React from 'react'
import { View, Text,TouchableOpacity, Alert, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const VegOnly = ({vegOnly,setVegOnly, navigation}) => {
    return (
        <View style= {styles.actionContainer}>
            <View style={{flexDirection:'row'}}>
                <Text style = {{color:'#000',fontWeight:'bold',fontSize:15,marginRight:6}}>Veg only</Text>
        <View style = {[styles.categoryTypeContainer,
            {backgroundColor:vegOnly?'rgba(50,186,50,.26)':'#cfd4d5',}]}>
            <View style = {styles.btnsContainer}>
            <TouchableOpacity
            onPress = {() =>setVegOnly(!vegOnly)}
            style  = {[styles.btn,{ backgroundColor:!vegOnly?'#33373d':'transparent'}]}>
            </TouchableOpacity>
            </View>
            <View style = {styles.btnsContainer}>
            <TouchableOpacity
            onPress = {() =>setVegOnly(!vegOnly)}
            style = {[styles.btn,{backgroundColor:vegOnly ? '#099e44':'transparent'}]}>
            </TouchableOpacity>
            </View>
            </View>
        </View>
        <FontAwesome5
        name= "search"
        color = "#CD427D"
        size = {20}
        onPress = {() => navigation.navigate('SearchFilter',vegOnly = {vegOnly}) }
        />
        </View>
    );
};
const styles = StyleSheet.create({
    actionContainer : {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:15,
      backgroundColor:'#fff',
      paddingVertical:25,
      borderWidth:1,
      borderColor: '#e7eced',
        shadowColor: 'gray',
        shadowOpacity: 0.25,
        elevation: 2,
        // shadowRadius:50
    },
    categoryTypeContainer : {
        width: 28,
        height: 15,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:25,
        marginTop:6
    },
    btnsContainer : {
        width:'50%',
        height:'100%',
    },
    btn : {
        borderRadius:50,
        width:'100%',
        height:'100%',
    }
})
export default VegOnly;
