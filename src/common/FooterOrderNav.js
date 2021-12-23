import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native';
const FooterOrderNav = ({ navigation }) => {
    return (
        <>
            <View
                style={{
                    width:'100%',
                    backgroundColor: '#EC286F',
                    // alignItems: 'center',
                    paddingVertical:25,
                    paddingHorizontal:15
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 23,
                        // textAlign:'center',
                        lineHeight: 30,
                        scaleY:1.4,
                    }}
                >Karachi Bakery, It's Refreshing, It's Ravishing & It's Rollicking...
                </Text>
                <Link 
                to={{screen:'stackNav'}}
                style = {{
                    color: '#333',
                    fontSize: 15,
                    fontWeight:'400',
                    scaleY:1.3,
                    backgroundColor: '#fff',
                    borderRadius:6,
                    paddingVertical:7,
                    paddingHorizontal:16,
                    position:'absolute',
                    bottom:10,
                    right:14,
                    borderWidth: 1,
                    borderColor: '#e7eced',
                    shadowColor: '#000',
                    shadowOpacity: 0.25,
                    // shadowRadius: 3.84,
                    elevation: 0.8,
                }}
                >Shop Online</Link>
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
