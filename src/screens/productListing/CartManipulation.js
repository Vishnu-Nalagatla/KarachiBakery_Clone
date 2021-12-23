import React from 'react'
import { View, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const CartManipulation = () => {
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
                        () => addItemToCart(item)
                    }
                />
            </View>
    )
}

export default CartManipulation
