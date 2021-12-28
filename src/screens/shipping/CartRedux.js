import React from 'react'
import { View, Text } from 'react-native'
import {connect} from 'react-redux';
const CartRedux = ({cartData}) => {
    return (
        <View>
            <Text>dbgdf</Text>
            {
                
                cartData != undefined ?
                cartData.cartItems.map(data =>{
                    return(
                        <View>
                            <Text>{data.name}</Text>
                        </View>
                    )
                }):null
            }
        </View>
    )
}
const mapStateToProps = state =>{
    return{
        cartData:state.cartReducerPractice
    }
}
export default connect(mapStateToProps)(CartRedux)
