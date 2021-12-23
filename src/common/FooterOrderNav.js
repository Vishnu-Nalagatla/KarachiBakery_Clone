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
                        fontSize: 23,
                        // textAlign:'center',
                        lineHeight: 30,
                        // scaleY:1.4
                    }}
                >Karachi Bakery, It's Refreshing, It's Ravishing & It's Rollicking...
                </Text>
                    <TouchableOpacity
                style = {{
                    backgroundColor:'#fff',
                    borderRadius:6,
                    position: 'absolute',
                    right: 0,
                    top:60,
                    marginRight:5,
                }}
                >

                <Link 
                to={{screen:'stackNav'}}
                style = {{
                    color: '#333',
                    fontSize: 14,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    borderColor: '#ccc',
                    
                }}
                >Shop Online</Link>
                    </TouchableOpacity>
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
