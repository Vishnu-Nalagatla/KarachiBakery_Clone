import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';


const NumberLogin = () => {

    const [loginElevation, setLoginElevation] = useState(true);

    const EmailLoginElevationHandler = () => {
        setLoginElevation(true);
    }
    const PhoneLoginElevationHandler = () => {
        setLoginElevation(false);
    }
    return (
        <>
            <View style={styles.loginContainer}>
                <View style={styles.loginHeaderContainer}>
                    <Text style={styles.loginHeading}>Login Account</Text>
                    <Text style={styles.loginSubHeading}>Hello, Welcome back to your account</Text>
                </View>
                <View style={[styles.loginTypeContainer, GlobalStyles.flexDirection]}>
                    <TouchableOpacity
                        style={[styles.loginEmail, loginElevation && styles.loginTypeElevation]}
                        onPress={() => EmailLoginElevationHandler}>
                        <Text style={styles.loginEmailText} >Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.loginPhoneNumber, !loginElevation && styles.loginTypeElevation]}
                        onPress={() => PhoneLoginElevationHandler}>
                        <Text style={styles.loginPhoneNumberText}>PhoneNumber</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.loginBodyContainer}>
                    <Text style={styles.loginMobileNumber}>Enter Your Mobile Number</Text>
                    <Text>You will receive a 4 digit code to verify your account</Text>
                    <View style={[styles.loginNumberContainer, GlobalStyles.flexDirection]}>
                        <Text style={styles.countryCode}>+ 91</Text>
                        <TextInput style={styles.loginNumber} />
                    </View>
                    <TouchableOpacity style={styles.loginRequestOTP}>
                        <Text style={styles.loginRequest}>Request OTP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        padding: 30
    },
    loginHeading: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    loginSubHeading: {
        fontSize: 13,
        fontWeight: '500',
        color: 'gray',
        marginTop: 10,
    },
    loginTypeContainer: {
        marginVertical: 40,
        borderColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: '#F6F5FA'
    },
    loginTypeElevation: {
        backgroundColor: 'white',
        borderRadius: 50,
        elevation: 20,
        shadowOpacity: 0.8,
        shadowColor: 'black',
    },
    loginEmail: {
        paddingVertical: 13,
        width: '50%',
    },
    loginPhoneNumber: {
        paddingVertical: 13,
        width: '50%',
    },
    loginEmailText: {
        textAlign: 'center',
    },
    loginPhoneNumberText: {
        textAlign: 'center',
    },
    loginNumberContainer: {
        borderColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 50,
        marginHorizontal: 30,
        marginVertical: 30,
    },
    loginMobileNumber: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'

    },

    countryCode: {
        borderRightWidth: 2,
        borderColor: 'lightgray',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    loginNumber: {
        width: '50%',
        paddingLeft: 10,
    },
    loginRequestOTP: {
        backgroundColor: '#aa18ea',
        marginHorizontal: 100,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginRequest: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18
    },
});

export default NumberLogin;
