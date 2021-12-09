import React from 'react'
import { View, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const CartManipulation = ({cartItems,setCartItems}) => {
    const [cartData,setCartData] = React.useState([cartItems]);
    console.warn(cartItems)
    const addItemToCart = (product) => {
        let itemsInCart = cartItems.slice();
        let isExist = false;
        itemsInCart.forEach(item => {
            if (item.id === product.id) {
                item.quantity++;
                isExist = true;
            }
        });
        if (!isExist) {
            itemsInCart.push({ ...product, quantity: 1 })
        }
        setCartItems(itemsInCart)
    };
    const removeItemFromCart = product => {
        const isExist = cartItems.find(item => item.id === product.id);
        if (isExist.quantity === 1) {
            let filteredCart = cartItems.filter(data => data.id !== product.id);
            setCartItems(filteredCart);
        } else {
            setCartItems(cartItems.map(data =>
                data.id === product.id ?
                    { ...data, quantity: data.quantity - 1 } : data
            ))
        }
    };
    return (
 <View>
        {
            cartData && cartData.map(item => {
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
                        fontWeight: 'bold'
                    }}
                    onPress={() => removeItemFromCart(item)}
                />
                <Text
                    style={{
                        color: '#CD427D',
                        fontWeight: 'bold'
                    }}
                >
                    {item.quantity}
                    </Text>
                <FontAwesome5
                    name="plus"
                    color="#CD427D"
                    style={{
                        fontWeight: 'bold'
                    }}
                    onPress={
                        () => addItemInCart(item)
                    }
                />
            </View>
            })
        }
    </View>
    )
}

export default CartManipulation
