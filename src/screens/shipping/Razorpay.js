import React from 'react';
import {View, Text} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import {connect} from 'react-redux';
import { setCartEmpty } from '../../redux/actions';
const Razorpay = ({cartData,setCartEmpty}) => {
  const paymentGateway = () => {
    const totalAmount = cartData.reduce((a, v) => a + v.quantity * v.price, 0);
    console.log(totalAmount);
    var options = {
      // description: 'Credits towards consultation',
      image: 'https://www.karachibakery.com/images/karachi-bakery-logo.png',
      currency: 'INR',
      key: 'rzp_test_nXLe9rZKPxjc3F',
      amount: totalAmount * 100,
      name: 'Karachi Bakery',
      timeout: '480',
      remember_customer: true,
      send_sms_hash: true,
      // order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
      prefill: {
        email: 'anil.kumar@example.com',
        contact: '9191919191',
        name: 'Anil Kumar',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
        setCartEmpty([])
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  return (
    <View>
      <Text onPress={paymentGateway}>click</Text>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    cartData: state.cartReducerPractice.cartItems,
  };
};
const mapDispatchToProps = dispatch =>{
    return{
        setCartEmpty : item =>dispatch(setCartEmpty(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Razorpay);
