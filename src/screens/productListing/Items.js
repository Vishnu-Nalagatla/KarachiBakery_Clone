import React from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity, ScrollView } from 'react-native'
import CartManipulation from './CartManipulation'
import PLPFooterCart from './PLPFooterCart';

const Items = ({items,data,addItemToCart}) => {
    return (
        <>
                <View
                    style={styles.itemContainer}
                >
                    <Image
                        source={data.category == 'veg' ?
                            require('../../assets/images/veg-icon.jpg') :
                            require('../../assets/images/non-veg.jpg')
                        }
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        resizeMode="contain"
                    />
                    <View
                    style = {{
                        flexDirection:'row',
                        justifyContent:'space-between',
                    }}
                    >
                        <View>
                            <Text style={styles.itemName}>
                                {items.name}
                            </Text>
                            <Text style={styles.itemPrice}>
                                {`Rs ${items.price}`}
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => addItemToCart(items)}
                            style={styles.addToCartBtn}
                        >
                            <Text
                                style={styles.addToCartBtnText}>
                                add
                            </Text> 

                        </TouchableOpacity>
                        {/* <View>
                        <CartManipulation/>
                        </View> */}
                    </View>
                </View>
              
                </>
    )
}
const styles = StyleSheet.create({
    itemContainer: {
        borderBottomWidth: 0.8,
        borderBottomColor: 'lightgray',
        marginBottom: 20,
    },
    itemContentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemName: {
        fontSize: 18,
        fontWeight: '500',
        color: '#020202',
        letterSpacing: 0.5,
        marginTop: 10,
    },
    itemPrice: {
        color: '#585858',
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 10,
    },
    addToCartBtn: {
        width: 90,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius:7,
        borderWidth: 1,
        borderColor: '#e7eced',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        elevation: 0.8,
    },
    addToCartBtnText: {
        textTransform: 'uppercase',
        color: '#CD427D',
        fontWeight: 'bold',
    },
})
export default Items
