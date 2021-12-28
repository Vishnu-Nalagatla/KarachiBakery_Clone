import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PlpOffers from '../../components/PlpOffers';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RazorpayTest from '../../components/RazorpayPayment/RazorpayTest';
const Cart = ({ route }) => {
    const [cartItems, setCartItems] = React.useState(route.params.cartItems);
    // useEffect(() => {
    // }, [cartItems])
    // const removeItemFromCart = product => {
    //     const isExist = cartItems.find(item => item.id === product.id);
    //     if (isExist.quantity === 1) {
    //         let filteredCart = cartItems.filter(data => data.id !== product.id);
    //         setCartItems(filteredCart);
    //     } else {
    //         setCartItems(cartItems.map(data =>
    //             data.id === product.id ?
    //                 { ...data, quantity: data.quantity - 1 } : data
    //         ))
    //     }
    // };
    // const addItemInCart = (product) => {
    //     let itemsInCart = cartItems.slice();
    //     let isExist = false;
    //     itemsInCart.forEach(item => {
    //         if (item.id === product.id) {
    //             item.quantity++;
    //             isExist = true;
    //         }
    //     });
    //     if (!isExist) {
    //         itemsInCart.push({ ...product, quantity: 1 })
    //     }
    //     setCartItems(itemsInCart)
    // };
    return (
        <>
            {/* <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    padding: 15,
                    borderBottomColor: '#999',
                    borderBottomWidth: .5
                }}
            >
                <FontAwesome5
                    name="arrow-left"
                    size={25}
                    color='black'
                    onPress={() => navigation.goBack()}
                />
                <Text
                    style={{
                        marginLeft: 10,
                        fontSize: 20,
                        color: '#000',
                        fontWeight: 'bold'
                    }}
                >Your Order</Text>
            </View> */}
            <ScrollView
                style={{
                    backgroundColor: '#fff',
                    padding: 15,
                    marginTop: 16
                }}
            >
                <Text
                    style={{
                        color: '#000',
                        fontSize: 17,
                        fontWeight: '800'
                    }}
                >Items In Cart</Text>
                {cartItems.length < 1 ?
                    <Text
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: 20
                        }}
                    >No Items In The Cart</Text> :
                    <View>
                        {
                            cartItems &&
                            cartItems.map(item => (
                                <View
                                    key={item.id}
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: 20
                                    }}
                                >
                                    <View>
                                        <Text
                                            style={{
                                                color: '#000',
                                                fontSize: 15,
                                                letterSpacing: .8,
                                                opacity: .8,
                                                fontWeight: '500',
                                                marginBottom: 10
                                            }}
                                        >{item.name}</Text>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <FontAwesome5
                                                name="rupee-sign"
                                                color="#000"
                                                size={12}
                                            />
                                            <Text
                                                style={{
                                                    marginLeft: 6,
                                                    color: '#000',
                                                    fontWeight: '600',
                                                }}
                                            >{item.price}</Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginTop: 20
                                            }}
                                        >
                                            <FontAwesome5
                                                name="newspaper"
                                                size={16}
                                                style={{
                                                    marginRight: 8
                                                }}
                                            />
                                            <Text>Preparation Instructions +</Text>
                                        </View>
                                    </View>
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
                                            onPress={() => route.params.removeItemFromCart(item)}
                                        />
                                        <Text
                                            style={{
                                                color: '#CD427D',
                                                fontWeight: 'bold'
                                            }}
                                        >{item.quantity}</Text>
                                        <FontAwesome5
                                            name="plus"
                                            color="#CD427D"
                                            style={{
                                                fontWeight: 'bold'
                                            }}
                                            onPress={
                                                () => route.params.addItemToCart(item)
                                            }
                                        />
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                }
                <View
                    style={{
                        marginTop: 40
                    }}
                >
                    <View
                    style = {{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        marginLeft:7
                    }}
                    >
                        <View
                          style = {{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center'
                        }}
                        >
                            <MaterialCommunityIcons
                                name='brightness-percent'
                                color='green'
                                size={26}
                                style = {{
                                    opacity:.8
                                }}
                            />
                            <Text
                            style = {{
                                color:'green',
                                fontSize:14.8,
                                fontWeight:'bold',
                                marginLeft:8,
                                opacity:.7
                            }}
                            >
                                Apply Bank/Wallet offer
                            </Text>
                        </View>
                        <View>
                            <MaterialCommunityIcons
                            name='greater-than'
                            color='green'
                            size={22}
                            />
                        </View>
                    </View>
                     <View style = {{
                         marginTop:20
                     }}>
                    <PlpOffers />
                    </View>
                </View>
            </ScrollView>
            <RazorpayTest totalAmount = {route.params.totalAmount}  />
        </>
    );
};
export default Cart
