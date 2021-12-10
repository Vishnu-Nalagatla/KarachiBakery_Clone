import React from 'react';
import { Button, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../common/custom/CustomButton';

const ProductListingHeader = ({ modalOpen, setModalOpen }) => {
    const [delivery, setDelivery] = React.useState(true);
    const onModalOpenHandler = () => {
        setModalOpen(!modalOpen)
    }
    return (
        <View style={styles.plpHeaderContainer}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/karachi-bakery-logo.png')}
                    resizeMode="contain"
                    style={styles.karachiLogo} />
            </View>
            <Text style={styles.productListingHeading}>Karachi Bakery</Text>
            <Button
                title={delivery ? 'Delivery' : 'Pickup'}
                onPress={()=>onModalOpenHandler()}
            />
            <Modal
                visible={modalOpen}
                transparent
                onRequestClose={() => setModalOpen(!modalOpen)}
                // if you use on request close then whenever you click on
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
                            onPress={() => setDelivery(true), setModalOpen(false)}
                            // delivery = {delivery}
                            style={{ backgroundColor: delivery ? '#Cd427D' : 'transparent' }}
                            color={delivery ? '#fff' : '#000'}
                            radius={delivery ? 7 : 0}
                        />
                        <CustomButton
                            textName="Pickup"
                            onPress={() => { setDelivery(false), setModalOpen(false) }}
                            style={{ backgroundColor: !delivery ? '#Cd427D' : 'transparent', }}
                            color={!delivery ? '#fff' : '#000'}
                            radius={!delivery ? 7 : 0}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};
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
    karachiLogo: {
        width: 45,
        height: 40,
    },
    orderOption: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    }
})
export default ProductListingHeader