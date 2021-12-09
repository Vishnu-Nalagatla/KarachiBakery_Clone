import React, { useState, } from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import GlobalStyles from '../../utils/GlobalStyles';

const DeliveryAddressSearch = ({navigation}) => {

    const [addressText, setAddressText] = useState('');
    return (
        <>
            <View style={styles.addressContainer}>
                <View style={styles.addressTextContainer}>
                    <TouchableOpacity style={styles.searchTouchable}>
                        <Image source={require('../../assets/PickUP/ic-search.png')} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.addressTextInput}
                        onChangeText={value => setAddressText(value)}
                        value={addressText}>
                    </TextInput>
                    {
                        addressText.length > 0 &&
                        <TouchableOpacity
                            style={styles.addressCrossButton}
                            onPress={() => setAddressText('')}>
                            <Image style={styles.addressCrossImage} source={require('../../assets/PickUP/ic-cross-circle-grey-16.png')} />
                        </TouchableOpacity>
                    }
                </View>
                {
                    addressText.length == 0 &&
                    <TouchableOpacity style={[styles.addressCurrentLocation, GlobalStyles.flexDirection]}
                    onPress={() => navigation.navigate('map')}
                    >
                        <View style={[styles.currentLocationImgView]} >
                            <Image style={styles.currentLocationImg} source={require('../../assets/PickUP/current-location.png')} />
                        </View>
                        <Text style={styles.currentLocationText}>Use Current location</Text>
                    </TouchableOpacity>
                }
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    addressContainer: {
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    addressTextContainer: {
        borderWidth: 2,
        backgroundColor: "#fff",
        marginTop: 20,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: 'center',
    },
    searchTouchable: {
        padding: 15,
    },
    addressCrossButton: {
        padding: 15,
    },
    addressTextInput: {
        width: '75%',
        paddingHorizontal: 5,
        color: '#cd427d',
        fontFamily: 'Roboto,sans-serif'
    },
    addressCurrentLocation: {
        marginVertical: 10,
        paddingVertical: 10,
    },
    currentLocationText: {
        color: '#cd427d',
        marginLeft: 10,

    },
    currentLocationImg: {
        backgroundColor: '#cd427d',
        width: 25,
        borderRadius: 100,
        height: 25,
    },
    currentLocationImgView: {
        borderWidth: 1.7,
        borderColor: '#cd427d',
        borderRadius: 100,

    }


});

export default DeliveryAddressSearch
