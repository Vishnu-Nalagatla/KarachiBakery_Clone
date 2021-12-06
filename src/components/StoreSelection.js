import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';

const StoreSelection = ({ storeSelectionModal, setStoreSelectionModal, navigation }) => {

    return (
        <>
            <Text>njfbnjfd</Text>
            <Modal
                visible={storeSelectionModal}
                transparent
                // onRequestClose={() => { setModalOpen(!modalOpen) }}
                animationType="slide"
                hardwareAccelerated
            // statusBarTranslucent
            >
                <View
                    style={styles.modalPopUp}>
                    <View style={styles.selectHeader}>
                        <Text style={styles.selectStoreText}> Select Store</Text>
                        <TouchableOpacity
                            onPress={() => setStoreSelectionModal(false)}
                        >
                            <Image
                                source={require('../assets/StoreSelection/into-cross-black.png')}
                                style={styles.closeMarkerImage}
                            >
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.linkStyles}
                        onPress={() => setStoreSelectionModal(false)}

                    >
                        <Link to={{ screen: 'plp' }}>
                            <View style={styles.storesList}>
                                <Text style={styles.storeName}>Karachi Bakery - Mindspace</Text>
                                <Text style={styles.storeAddress}>1-140/2 & 3, Hitech City Main Rd, above Karachi Bakery, Oppo</Text>
                                <View style={styles.storeOptions}>
                                    <View style={styles.distance}>
                                        <Text style={styles.storeDistance}>1.1</Text>
                                        <Text style={styles.storeDistance}>Kms</Text>
                                    </View>
                                    <Text style={[styles.orderNow, { color: '#2b8b14' }]}>ORDER NOW</Text>
                                </View>
                            </View>
                        </Link>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    )
};

const styles = StyleSheet.create({
    selectStoreText: {
        margin: 20,
        fontWeight: '700',
        color: 'black',
        fontSize: 22,
    },
    selectHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 20,

    },
    modalPopUp: {
        width: '100%',
        height: 500,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: 'absolute',
        bottom: 0,
    },
    storesList: {
        padding: 15,
        borderWidth: 2,
        borderColor: "#f2f2f2",
        backgroundColor: 'white',
        borderRadius: 12,
        elevation: 3,
        shadowOpacity: 0.8,
        shadowColor: 'black',
    },
    linkStyles: {
        margin: 20,
    },
    storeName: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 10,
        marginBottom: 10,
    },
    storeAddress: {
        // fontWeight: 'bold',
        fontSize: 12,
    },
    distance: {
        flexDirection: 'row',
    },
    storeOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
    },
    orderNow: {
        fontWeight: '700',
    },
});

export default StoreSelection;
