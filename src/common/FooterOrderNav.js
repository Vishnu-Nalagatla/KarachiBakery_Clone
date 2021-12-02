import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native';
const FooterOrderNav = ({ navigation }) => {
    return (
        <>
            <View
                style={{
                    backgroundColor: '#EC286F',
                    paddingVertical: 30,
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 26,
                        // textAlign:'center',
                        lineHeight: 30,
                        // scaleY:1.4
                    }}
                >Karachi Bakery, It's Refreshing, It's Ravishing & It's Rollicking...
                    {/* <TouchableOpacity
                style = {{
                    backgroundColor:'#fff',
                    borderRadius:6,
                    // paddingHorizontal:16,
                    // paddingVertical:10,
                }}
                > */}
                <Link 
                to={{screen:'plp'}}
                style = {{
                    color: 'gray',
                    fontSize: 14,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    backgroundColor: '#fff',
                }}
                >Shop Online</Link>
                    {/* </TouchableOpacity> */}
                </Text>
            </View>
            <View
                style={{
                    padding: 10
                }}
            >
                <Text
                    style={{
                        color: '#333',
                        fontSize: 16,
                        textAlign: 'center',
                        lineHeight: 22
                    }}
                >Copyright © 2015--2021 Karachi Bakery. All Rights Reserved.</Text>
            </View>
        </>
    );
};
export default FooterOrderNav
