import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const Cart = ({route}) => {
    // console.log(route.params.cartItems)
    const [cartData ,setCartData ] = React.useState(route.params.cartItems);
    console.log(cartData.cartItems,'cartData')
    return(
        <View>
            <Text>
                Your Order
            </Text>
            <ScrollView>
                {
                    cartData && cartData.cartItems.map(item => {
                        return(
                            <View key={item.id}>
                             <Text>{item.name}</Text>
                             <Text>{item.quantity} * {item.price}</Text>
                            </View>
                        )
                    })
                }
                <Text>
                {
                    cartData && cartData.cartItems.reduce((a,v)=>a+v.quantity * v.price,0)
                }
                </Text>
            </ScrollView>
        </View>
    );
};

export default Cart