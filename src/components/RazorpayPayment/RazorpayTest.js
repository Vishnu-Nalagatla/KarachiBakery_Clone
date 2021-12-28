import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../utils/GlobalStyles';
import RazorpayCheckout from 'react-native-razorpay';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const RazorpayTest = ({ totalAmount }) => {

    const makePayment = () => {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_5WTghUyg1jZ9Ql', // Your api key
            amount: '100',
            name: 'Vishnu',
            prefill: {
                email: 'void@razorpay.com',
                contact: '9553733536',
                name: 'Razorpay Software'
            },
            theme: { color: '#2682FF' }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        });
    }
    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                bottom: 0,
                padding: 15,
                backgroundColor: '#fff',
                width: '100%'
            }}
            onPress={makePayment}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: '#CD427D',
                    padding: 15,
                    borderRadius: 8
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        color: '#fff',
                        fontWeight: 'bold',
                        letterSpacing: 1
                    }}
                >
                    <FontAwesome5
                        name="rupee-sign"
                        // color = "#fff"
                        size={16}
                        style={{
                            marginRight: 2
                        }}
                    />
                    {totalAmount}
                </Text>
                <Text
                    style={{
                        fontSize: 19,
                        color: '#fff',
                        fontWeight: 'bold',
                        // letterSpacing:1,
                        textTransform: 'uppercase'
                    }}
                >make payment</Text>
            </View>
        </TouchableOpacity>
    );
}

export default RazorpayTest;
