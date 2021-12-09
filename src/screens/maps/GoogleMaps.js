import React from 'react'
import { View, Text, Image, StyleSheet, Modal, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function MapsMoving() {
    const [region, setRegion] = React.useState({
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        latitude: 17.43660599395029,
        longitude: 78.36690293624997,
    });
    const [modalShow,setModalShow] = React.useState(true);
    // const onRegionChangeValue = regionValue => {
    //     console.warn(JSON.stringify(regionValue))
    //     setRegion(regionValue)
    // }
    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={region}
                // onRegionChangeComplete={onRegionChangeValue}
                provider={PROVIDER_GOOGLE}
            >
                <Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude
                    }}
                >
                    <View
                        style={{
                            padding: 10,
                            backgroundColor: '#000',
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 15,
                                fontWeight: '500'
                            }}
                        >Place the pin accurately</Text>
                    </View>
                    <Entypo
                        name="location-pin"
                        size={50}
                        color="tomato" />
                </Marker>
            </MapView>
            <View style={[styles.leftArrowContainer, styles.shadowBorder]}>
                <FontAwesome5
                    name="arrow-left"
                    color="#000"
                    size={20}
                />
            </View>
            <View style={[styles.expandIconContainer, styles.shadowBorder]}>
                <FontAwesome5
                    name={modalShow?'expand':'chevron-down'}
                    color="#000"
                    size={25}
                    onPress = {()=>setModalShow(!modalShow)}
                />
            </View>
          {
              modalShow&&
                <View style = {[styles.modalContainer,styles.shadowBorder]}>
                    <Text style = {styles.deliveryLocationText}>Set delivery location</Text>
                    <View style = {styles.inputTextContainer}>
                        <TextInput
                        placeholder = "Gachibowli,Hyderabad"
                        />
                        <TouchableWithoutFeedback>
                            <Text style = {styles.locationChangeTxt}>Change</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <TouchableOpacity style={styles.btnContainer} onPress = {()=>alert('vusdbvyu')}>
                        <Text style = {styles.btnText}>Confirm Location & Proceed</Text>
                    </TouchableOpacity>
                </View>
}
        </View>
    );
};

const styles = StyleSheet.create({
    leftArrowContainer: {
        position: 'absolute',
        top: 25,
        left: 10,
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    expandIconContainer: {
        position: 'absolute',
        top: 0,
        right: 10,
        width: 50,
        height: 40,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    shadowBorder: {
        borderColor: '#e7eced',
        shadowColor: 'gray',
        shadowOpacity: 0.8,
        elevation: 10,
    },
    modalContainer : {
        position:'absolute',
        bottom:0,
        backgroundColor:'#fff',
        width:'100%',
        padding:20,
        borderTopEndRadius:20,
        borderTopLeftRadius:20,
    },
    deliveryLocationText : {
        color:'#000',
        opacity:.8,
        fontSize:21,
        fontWeight:'bold'
    },
    inputTextContainer : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:6,
        backgroundColor:'#f6f6f6',
        borderRadius:8,
        marginVertical:15
    },
    locationChangeTxt : {
        color:'#CD427D',
        textTransform:'uppercase',
        fontWeight:'bold'
    },
    btnContainer : {
        backgroundColor:'#Cd427D',
        paddingVertical:15,
        alignItems:'center',
        borderRadius:7.5
    },
    btnText : {
        color:'#fff',
        fontSize:18,
        fontWeight:'700'
    }
});
export default MapsMoving