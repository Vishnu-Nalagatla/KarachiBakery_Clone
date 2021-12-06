// import React from 'react';
// import { Pressable, ScrollView, Text, View } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// const CartPractice = ({route}) => {
//     // console.log(route.params.cartItems)
//     const [cartData ,setCartData ] = React.useState(route.params.cartItems.cartItems);
//     //  const {removeItemFromCart,addItemInCart} = route.params;
//     console.log(route.params.addItemInCart)
//     const removeItemFromCart = product => {
//         const isExist = cartData.find(item => item.id === product.id);
//         if(isExist.quantity === 1){
//             setCartData(cartData.filter(data => data.id !== product.id))
//         } else {
//             setCartData(cartData.map(item =>
//                 item.id === product.id ? {...item,quantity:item.quantity-1}:item
//                 ))
//         }
//     }
//     const addItemToCart = (product) => {
//         let itemsInCart = cartData.slice();
//         let isExist = false;
//         itemsInCart.forEach(item => {
//             if (item.id === product.id) {
//                 item.quantity++;
//                 isExist = true;
//             }
//         });
//         if (!isExist) {
//             itemsInCart.push({ ...product, quantity: 1 })
//         }
//         setCartData(itemsInCart)
//     };
//     return(
//         <View>
//             <Text>
//                 Your Order
//             </Text>
//             <FontAwesome5 
//             name = "arrow-right"
//             />
//             <ScrollView>
//             <View
//             >
//                 <Text>Items In Cart</Text>
//                 {
//                     cartData && cartData.map(item => {
//                         return(
//                             <View key={item.id}>
//                                 <View>
//                              <Text>{item.name}</Text>
//                              <Text>{item.price}</Text>
//                              </View>
//                              <View
//                              style = {{
//                                  flexDirection:'row'
//                              }}
//                              >
//                                 <Text
//                                 onPress = {() => removeItemFromCart(item)}
//                                 >remove</Text>
//                                 <Text>{item.quantity}</Text> 
//                                 <Text onPress= {()=>addItemToCart(item)}>add</Text>
//                                 {/* <Text onPress = {()=>route.params.addItemInCart(item)}>click</Text> */}

//                                 <Text onPress = {() =>setCartData(cartData.filter(data =>item.id !== data.id))}>Remove</Text>
//                              </View>
//                              <Pressable>
//                                  <Text>Preparation Instructions +</Text>
//                              </Pressable>
//                             </View>
//                         )
//                     })
//                 }
//             </View>
//             </ScrollView>
//         </View>
//     );
// };

// export default CartPractice
// {/* <Text>
// {
//     cartData && cartData.cartItems.reduce((a,v)=>a+v.quantity * v.price,0)
// }
// </Text> */}