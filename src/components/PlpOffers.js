import React, { useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { OffersData } from '../assets/AppData/AppData';
import GlobalStyles from '../utils/GlobalStyles';

const PlpOffers = () => {
    return (
        <>
            <View style={styles.offersContainer}>
                <View style={[styles.offersHeadingContainer, GlobalStyles.flexDirection]}>
                    <Image
                        style={styles.offersHeadImg}
                        source={require('../assets/Offers/discount-icon.png')} />
                    <Text style={styles.offersHeading}>Offers</Text>
                </View>
                <FlatList
                    data={OffersData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item, index) => {
                        console.log(item.item);
                        return (
                            <TouchableOpacity style={styles.offersContentContainer}>
                                <View style={[styles.offersContent, GlobalStyles.flexDirection]}>
                                    <Image style={styles.CompanyIcon} source={item.item.companyImage} />
                                    <Text style={styles.offersText}>{item.item.companyOffered}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }} />
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    offersContainer: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 10,
    },
    offersHeadingContainer: {

    },
    offersHeadImg: {
        backgroundColor: '#CD427D',
        width: 23,
        height: 23,
    },
    offersHeading: {
        marginLeft: 5,
        color: 'black',
        fontWeight: '600',
        fontSize: 18
    },
    offersContentContainer: {
        width: 160,
        height: 70,
        borderRadius: 7,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e7eced',
        marginVertical: 20,
        marginHorizontal: 3,
    },
    offersContent: {
    },
    CompanyIcon: {
        width: 30,
        height: 30,
        marginLeft: 5,
    },
    offersText: {
        fontSize: 13,
        color: 'black',
        fontWeight: '600',
        paddingHorizontal: 10,
    }
});

export default PlpOffers
