import { Link } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Cart from '../shipping/Cart';
import { connect } from 'react-redux';
import LoginPopUp from '../../components/LoginPopUp';
const PLPFooterCart = ({ totalAmount, itemsInCart, cartItems, addItemToCart, removeItemFromCart, totalCount, cartData }) => {
    const cartCount = cartData.cartItems.reduce((a, v) => a + v.quantity, 0);
    const cartTotalAmount = cartData.cartItems.reduce((a, v) => a + v.price * v.quantity, 0);
    const [userLogin, setUserLogin] = useState(false);
    console.log(cartData.userName);

    const viewCartHandler = () => {
    console.log("cartData.userName");
        setUserLogin(cartData.userName ? false : true)
    }

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
                                {cartCount}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.totalPrice}>
                        Rs--{cartTotalAmount}.00
                    </Text>
                </View>


                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={() => viewCartHandler}
                >
                    <Link
                        to={{
                            screen: 'cart',
                            params: {
                                cartItems: cartItems, totalAmount: totalAmount, addItemToCart: addItemToCart,
                                removeItemFromCart: removeItemFromCart
                            }
                        }}
                        style={styles.cartLink}
                    >View Cart</Link>
                    <FontAwesome5
                        name="arrow-right"
                        size={15}
                        color='#fff'
                    />
            {userLogin && <LoginPopUp />}
                </TouchableOpacity>
            </View>
        </>
    );
};
const mapStateToProps = state => {
    return {
        cartData: state.cartReducerPractice
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//     }
// }
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
export default connect(mapStateToProps)(PLPFooterCart)
