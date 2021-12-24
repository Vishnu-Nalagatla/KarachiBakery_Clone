import React, { useState } from 'react';
import { Button, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import CustomButton from '../../common/custom/CustomButton';
import StoreSelection from '../../components/deliveryComponents/StoreSelection';
import GlobalStyles from '../../utils/GlobalStyles';
import Entypo from 'react-native-vector-icons/Entypo';

const ProductListingHeader = ({ headerModal, setHeaderModal,storeTitle }) => {
    const [delivery, setDelivery] = useState(true);
    const [storeSelectionPlp, setStoreSelectionPlp] = useState(false);
    console.log(storeTitle.storeTitle, 'storeTitle.title')
    const onModalOpenHandler = () => {
        setHeaderModal(!headerModal);
    }
    console.log(storeTitle)
    return (
        <View style={styles.plpHeaderContainer}>
            <View style={GlobalStyles.flexDirection}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.karachiLogo}
                        resizeMode="contain"
                        source={require('../../assets/karachi-bakery-logo.png')}
                    />
                </View>
                <TouchableOpacity style={styles.plpHeaderTitle}
                    onPress={() => setStoreSelectionPlp(true)}>
                    <Text style={styles.productListingHeading}>Karachi Bakery</Text>
                    <Text style={styles.selectedStore}>{storeTitle.storeTitle}
                    <Entypo name='chevron-small-down' />
                     </Text>
                </TouchableOpacity>
            </View>
            <Button
                title={delivery ? 'Delivery' : 'Pickup'}
                onPress={() => onModalOpenHandler()}
            />
            <Modal
                visible={headerModal}
                transparent
                // if you use on request close then whenever you click on
                onRequestClose={() => setHeaderModal(!headerModal)}
                //back icon in android it closes
                animationType="fade"
            >
                <View style={styles.orderOption}>
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: '#f5f6fa',
                            // padding:12
                        }}
                    >
                        <CustomButton
                            textName="Delivery"
                            onPress={() => setDelivery(true), setHeaderModal(false)}
                            // delivery = {delivery}
                            style={{ backgroundColor: delivery ? '#Cd427D' : 'transparent' }}
                            color={delivery ? '#fff' : '#000'}
                            radius={delivery ? 7 : 0}
                        />
                        <CustomButton
                            textName="Pickup"
                            onPress={() => { setDelivery(false), setHeaderModal(false) }}
                            style={{ backgroundColor: !delivery ? '#Cd427D' : 'transparent', }}
                            color={!delivery ? '#fff' : '#000'}
                            radius={!delivery ? 7 : 0}
                        />
                    </View>
                </View>
            </Modal>
            <StoreSelection
                storeSelectionModal={storeSelectionPlp}
                setStoreSelectionModal={setStoreSelectionPlp}
            />
        </View>
    );
};

const mapStateToProps = state => ({
    storeTitle: state.deliveryReducer
});

const styles = StyleSheet.create({
    plpHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 18,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e7eced',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        elevation: .8,
        marginBottom: 10
    },
    logoContainer: {
        borderWidth: 1,
        borderColor: '#999',
        padding: 4,
        borderRadius: 4
    },
    plpHeaderTitle: {
        marginLeft: 15,
    },
    karachiLogo: {
        width: 45,
        height: 40,
    },
    orderOption: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    productListingHeading: {
        fontWeight: '700',
        color: '#33373d',
        fontSize: 14


    },
    selectedStore: {
        fontSize: 10,
    }
});
export default connect(mapStateToProps)(ProductListingHeader);