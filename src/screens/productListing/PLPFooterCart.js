import { Link } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Cart from '../shipping/Cart';
const PLPFooterCart = ({totalAmount,itemsInCart,cartItems, addItemToCart,removeItemFromCart,totalCount}) => {
    return (
        <>
                    <View style={styles.itemsListCartContainer}>
                        <View style={styles.itemsListCartContent}>
                            <View>
                                <FontAwesome5
                                    name="shopping-bag"
                                    size={30}
                                    color="#fff"
                                />
                                <View style={styles.countContainer}>
                                    <Text style={styles.countText}>
                                        {totalCount}
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.totalPrice}>
                                Rs--{totalAmount}.00
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Link
                                to={{
                                    screen:'cart',
                                    params: { cartItems: cartItems, totalAmount : totalAmount,addItemToCart: addItemToCart,
                                    removeItemFromCart : removeItemFromCart
                                 }
                                }}
                                style={styles.cartLink}
                            >View Cart</Link>
                            <FontAwesome5
                                name="arrow-right"
                                size={15}
                                color='#fff'
                            />
                        </View>
                    </View>
                    </>
    );
};
const styles = StyleSheet.create({
    itemsListCartContainer: {
        backgroundColor: '#CD427D',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemsListCartContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    countContainer: {
        position: 'absolute',
        left: 15,
        backgroundColor: 'red',
        width: 25,
        height: 25,
        borderRadius: 50
    },
    countText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    totalPrice: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    cartLink: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
    }
})
export default PLPFooterCart
