import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../utils/GlobalStyles';
import Entypo from 'react-native-vector-icons/Entypo';


const CurrentLocationPlp = ({ navigation }) => {
    return (
        <>
            <TouchableOpacity
                style={[styles.currentLocationPlpContainer, GlobalStyles.flexDirection]}
                onPress={() => navigation.navigate('map')}
            >
                <Image source={require('../../assets/PlpCurrentLocation/ic-location-black.png')} />
                <Text style={styles.currentLocationText}>Delivery To - Hitech City Main Road, Gachibowli, Hyderabad </Text>
                <Entypo name='chevron-small-down' size={20} color='#CD427D' />
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    currentLocationPlpContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        backgroundColor: '#fafcff'
    },
    currentLocationText: {
        marginLeft: 10,
        color: 'black',
        fontWeight: '500',
        fontSize: 12,
        paddingHorizontal:7,
    }
});

export default CurrentLocationPlp;
