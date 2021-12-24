import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
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
import { StoreData } from '../../assets/AppData/AppData';
import GlobalStyles from '../../utils/GlobalStyles';
import { storeTitle } from '../../redux/actions';
const StoreSelection = ({ storeSelectionModal, setStoreSelectionModal, navigation ,storeTitle}) => {
    // const [storeData, setStoreData] = useState([]);
    const storeHandler = (itemTitle) => {
        setStoreSelectionModal(false);
        // storeSelectedTitle(itemTitle);
        storeTitle(itemTitle);
    }
    console.log('storeSelectionModal', storeSelectionModal);
    return (
        <>
            <Modal
                visible={storeSelectionModal}
                transparent
                onBackdropPress={() => console.log('Close')}
                onRequestClose={() => { setStoreSelectionModal(!storeSelectionModal) }}
                animationType="slide"
                hardwareAccelerated
            // statusBarTranslucent
            >
                <View
                    style={styles.modalPopUp}>
                    <View style={styles.selectHeader}>
                        <Text style={styles.selectStoreText}>Select Store</Text>
                        <TouchableOpacity
                            onPress={() => setStoreSelectionModal(false)}
                        >
                            <Image
                                source={require('../../assets/StoreSelection/into-cross-black.png')}
                                style={styles.closeMarkerImage}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={StoreData}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(item, index) => {
                            // console.log(item.item);
                            return (
                                <View style={styles.storeData} >
                                    <Link to={{ screen: 'plp' }}
                                        onPress={() => storeHandler(item.item.streetName)}
                                    >
                                        <View style={styles.storesList}>
                                            <Text style={styles.storeName}>{item.item.streetName}</Text>
                                            <View style={{ paddingLeft: 20 }}>
                                                <Text style={styles.storeAddress}>{item.item.storeAddress}</Text>
                                            </View>
                                            <View style={styles.storeOptions}>
                                                <View style={styles.distance}>
                                                    <Text style={styles.storeDistance}> {item.item.storeDistance.distance}</Text>
                                                    <Text style={styles.storeDistance}> {item.item.storeDistance.distanceType}</Text>
                                                </View>
                                                <Text style={[styles.orderNow, { color: '#2b8b14' }]}>ORDER NOW</Text>
                                            </View>
                                        </View>
                                    </Link>
                                </View>
                            );
                        }}
                    />
                </View>
            </Modal>
        </>
    )
};
const mapDispatchToProps = (dispatch) =>{
    return{
        storeTitle : (value) => dispatch(storeTitle(value))
    }
}
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
        width: Dimensions.get('window').width,
        height: 500,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: 'absolute',
        bottom: 0,
    },
    storeData: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    storesList: {
        padding: 10,
        borderWidth: 2,
        borderColor: "#f2f2f2",
        backgroundColor: 'white',
        borderRadius: 12,
        elevation: 3,
        shadowOpacity: 0.8,
        shadowColor: 'black',
        width: Dimensions.get('window').width - 50,
    },
    linkStyles: {
        padding: 20,
    },
    storeName: {
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 10,
    },
    storeAddress: {
        fontSize: 12,
    },
    distance: {
        flexDirection: 'row',
    },
    storeOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
    orderNow: {
        fontWeight: '700',
    },
});

export default connect(null, mapDispatchToProps)(StoreSelection);