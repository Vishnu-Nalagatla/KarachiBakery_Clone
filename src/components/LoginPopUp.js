import React, { useState } from 'react';
import { TextInput } from 'react-native';
import {
    Dimensions,
    FlatList,
    Image,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { connect } from 'react-redux';
// import { loginUserName } from '../redux/action';
import CustomButton from '../utils/CustomButton';

import GlobalStyles from '../utils/GlobalStyles';
const LoginPopUp = ({ loginUserName, userName }) => {
    console.log(userName)
    const [modalLoginPopUp, setModalLoginPopUp] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    })

    const db = 'Vishnu';
    const db1 = 'vishnu';


    const emailInputChange = (value) => {
        if (value == db) {
            setUserData({
                ...userData,
                email: value,
                check_textInputChange: true,
            })
        } else {
            setUserData({
                ...userData,
                email: value,
                check_textInputChange: false,
            })
        }
    }

    const handlePasswordChange = (value) => {
        setUserData({
            ...userData,
            password: value
        })
    }

    const handleValidUser = (value) => {
        if (value == db) {
            setUserData({
                ...userData,
                isValidUser: true,
            })
        } else {
            setUserData({
                ...userData,
                isValidUser: false,
            })
        }
    }

    const LoginValidate = () => {
        if (userData.email == db) {
            setUserData({
                ...userData,
                isValidUser: true,

            })
        } else {
            setUserData({
                ...userData,
                isValidUser: false,
            })
        }
    }
    return (
        <>

            <Modal
                visible={true}
                transparent
                // onRequestClose={() => { setModalOpen(!modalOpen) }}
                animationType="slide"
                hardwareAccelerated>
                <View style={styles.modalPopUp}>
                    <View style={styles.modalLoginHeading}>
                        <View style={[GlobalStyles.flexDirection, { justifyContent: 'space-between' }]}>
                            <Text style={styles.modalLoginTitle}>Confirm Your Login</Text>
                            <TouchableOpacity style={styles.modalLoginCloseTouchable}
                                onPress={() => setModalLoginPopUp(true)}>
                                <Image style={styles.modalLoginClose} source={require('../assets/ModalLogin/ic-close.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLoginSubTitle}>to place your order</Text>
                    </View>
                    <View style={styles.modalLoginView}>
                        <Text style={styles.modalLoginId}>Email</Text>
                        <TextInput
                            placeholder='Enter your Email'
                            onChangeText={(value) => loginUserName(value)}
                            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                            style={styles.modalLoginInput}></TextInput>
                        {
                            userData.isValidUser ? null :
                                <Text style={styles.modalLoginValidate}>*Please enter valid Username</Text>
                        }
                    </View>
                    <View style={styles.modalLoginView}>
                        <Text style={styles.modalLoginPassword}>Password</Text>
                        <TextInput
                            placeholder='Enter your Password'
                            onChangeText={(value) => handlePasswordChange(value)}
                            secureTextEntry={true}
                            style={styles.modalLoginInput}></TextInput>
                        {
                            userData.isValidPassword ? null :
                                <Text style={styles.modalLoginValidate}>*Please enter valid Password</Text>
                        }
                    </View>
                    <View style={[styles.modalButtons, GlobalStyles.flexDirection]}>
                        <CustomButton
                            title="SignUp"
                            color="#cd427d">
                        </CustomButton>
                        <CustomButton
                            title="Login"
                            color="green"
                            onPress={() => LoginValidate()}
                        >
                        </CustomButton>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
            >
                <View style={styles.modalPopUpContainer}>
                </View>
            </TouchableOpacity>
        </>
    )
};



const mapStateToProps = (state) => {
    return {
        userName: state
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        // loginUserName: (value) => dispatch(loginUserName(value))
    }
}


const styles = StyleSheet.create({
    modalPopUpContainer: {
        backgroundColor: '#000',
        opacity: 0.5,
        height: '100%',
    },
    modalPopUp: {
        width: '100%',
        height: 380,
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
    },
    modalLoginHeading: {
        marginTop: 20,
    },
    modalLoginTitle: {
        fontSize: 22,
        color: 'black',
        fontWeight: '600',
    },
    modalLoginSubTitle: {
        fontWeight: '400',
        fontSize: 14,
        marginTop: 5,
    },
    modalLoginView: {
        marginTop: 15,
    },
    modalLoginInput: {
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#d3d3d3',
        backgroundColor: '#f6f6f6',
        color: 'black'

    },
    modalButtons: {
        margin: 20,
    },
    modalLoginValidate: {
        color: 'red'
    }

});

export default connect(mapStateToProps, mapDispatchtoProps)(LoginPopUp)