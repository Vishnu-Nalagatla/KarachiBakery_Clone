import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FooterOrderNav from '../../../common/FooterOrderNav';

const Footer = () => {
    return (
        <>
        <View
        style = {{
            paddingHorizontal:15
        }}
        >
            <View
            style = {{
                backgroundColor : '#45227a',
                padding : 15,
            }}
            >
               <Text style={{
                color:'#EC286F',
                fontSize:24,
                marginBottom:10,
                fontWeight:'bold'
               }}>ABOUT US</Text>
                    <Text
                    style={{
                        color:'#ffffff',
                        fontSize:17,
                        lineHeight:25,
                        fontStyle:'italic',
                        textAlign:'justify',
                        fontWeight:'600'
                    }}
                    >A staggering chronicle of six decades and still going strong, Karachi Bakery has emerged as a    
                    <Text style={{fontSize:18,fontWeight:'bold'}}>"True Icon of Hyderabad Baking"</Text> with a reputation that is unmatched to the core. Always a step
                    ahead of competition, we focus on innovation, developing new products while improving our existing
                    products to evolving consumer needs.
                    </Text>
                    <Text 
                    style={{
                        marginTop:20,
                        color:'#fff',
                        fontSize:17,
                        lineHeight:25
                        }}>
                    A subtle combination of traditions and trends, our extensive collection of greatly
                    appetizing baked goods and 
                    <Text
                    style = {{
                        color:'#EC286F',
                        fontSize:18,
                        letterSpacing:1.3
                    }}
                    >   Read more{`${'  >>'}`} </Text></Text>
            </View>
        </View>
        <View
        style = {{
            marginTop:25
        }}
        >
            <FooterOrderNav/>
            </View>
        </>
    );
};

export default Footer
