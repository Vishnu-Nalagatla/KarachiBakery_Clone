import React from 'react'
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { addItemToCartPractice, removeEntireItem, removeItemFromCart } from '../../redux/actions';
import { transform } from '@babel/core';
const CartManipulation = ({ addItemToCart, removeItemFromCart, items, cartData,getIndividualItemQuantity}) => {
    // React.useEffect(()=>{
    //     getIndividualItemQuantity(items.quantity)
    // },[items])
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#eee',
                width: 90,
                height: 35,
                borderRadius: 8,
            }}
        >
            <FontAwesome5
                name="minus"
                color="#CD427D"
                style={{
                    fontWeight: 'bold',
                    // transform : transi
                }}
                onPress={() => removeItemFromCart(items)}
            />
            <Text
                style={{
                    color: 'black',
                    fontWeight: 'bold'
                }}
            >
                {items.quantity}
            </Text>
            <FontAwesome5
                name="plus"
                color="#CD427D"
                style={{
                    fontWeight: 'bold'
                }}
                onPress={
                    () => addItemToCart(items)
                }
            />
        </View>
    );
};
const mapStateToProps = state => ({
    cartData: state.cartReducerPractice.cartItems
});
const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (item) => dispatch(addItemToCartPractice(item)),
        removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
        completeRemove: (item) => dispatch(removeEntireItem(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartManipulation)
