import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import StoreSelection from '../../components/StoreSelection';
// import StoreSelection from '../../components/StoreSelection';
import CustomButton from '../../utils/CustomButton';
import GlobalStyles from '../../utils/GlobalStyles';
import Test from '../../utils/Test';

const HomePage = ({ navigation }) => {
  const [deliveryOptions, setDeliveryOptions] = useState(true);
  const [storeSelectionModal, setStoreSelectionModal] = useState(false);
console.log(storeSelectionModal, 'setStoreSelectionModal');
  const shopOnlineHandler = () => { };
  return (
    <>
      {/* <View style={[styles.buttonOnline, GlobalStyles.flex]}>
        <CustomButton
          title="ShopOnline"
          color="#1eb900"
          onPress={() => shopOnlineHandler()}></CustomButton>
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 15,
          paddingLeft: 10,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#e7eced',
          shadowColor: '#000',
          shadowOpacity: 0.25,
          elevation: 8,
        }}
      >
        <Image
          source={require('../../assets/karachi-bakery-logo.png')}
          resizeMode="contain"
          style={{
            width: 70,
            height: 40
          }}
        />
        <Text style={{
          fontSize: 25,
          marginLeft: 15,
          color: 'black',
          fontWeight: '700',

        }}>Karachi Bakery</Text>
      </View>
      <Image
        style={[styles.pickUpPageImage]}
        resizeMode="cover"
        source={require('../../assets/PickUP/DeliveryPromotion.jpg')}></Image>
      <View style={[styles.DeliveryOptionsView]}>
        <TouchableOpacity
          onPress={() => setDeliveryOptions(true)}
          style={[styles.deliveryView, { borderBottomColor: deliveryOptions ? '#CD427D' : 'transparent' }]}>
          <Text style={[styles.deliveryOpt, { color: deliveryOptions ? '#CD427D' : '#000' }]}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDeliveryOptions(false)}
          style={[styles.pickUpView, { borderBottomColor: !deliveryOptions ? '#Cd427D' : 'transparent' }]}>
          <Text style={[styles.deliveryOpt, { color: !deliveryOptions ? '#CD427D' : '#000' }]}>PickUp</Text>
        </TouchableOpacity>
      </View>
      <View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
        }}
      >

        <View style={styles.selectLocation}>
          <TouchableOpacity>
            <Text style={styles.yourLocationText}>Your location</Text>
            <Image style={styles.locationImage} source={require('../../assets/Location/location-icon-grey.jpg')} />
            {/* <Text style={styles.mapLocationText}></Text> */}
            <Text style={styles.changeLocation}>Change Location ?</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.orderNowButton}>
          <TouchableOpacity
            onPress={() =>
             
              setStoreSelectionModal(true)
            }
            style={{
              backgroundColor: '#CD427D',
              borderRadius: 12,
              paddingVertical: 15
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 18.3,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >Order Now</Text>
          </TouchableOpacity>
        </View>
        <View>
          <StoreSelection
            setStoreSelectionModal={setStoreSelectionModal}
            storeSelectionModal={storeSelectionModal}>
          </StoreSelection>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  ViewShopOnline: {
    color: 'black',
    backgroundColor: 'aqua',
    // position: 'absolute',
    top: 20,
  },
  buttonOnline: {},
  pickUpPageImage: {
    width: Dimensions.get('window').width,
    height: 250,
  },
  DeliveryOptionsView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    elevation: 10,
  },
  // delivery: {
  //   fontWeight: 'bold',
  //   fontSize: 20,
  //   textAlign: 'center',
  //   fontFamily: 'Roboto,sans-serif',
  // },
  // pickUp: {
  //   fontWeight: 'bold',
  //   // color: '#000000',
  //   fontSize: 20,
  //   fontFamily: 'Roboto,sans-serif',
  //   textAlign: 'center',
  // },
  deliveryView: {
    borderBottomWidth: 3,
    // padding: 30,
    paddingVertical: 12.5,
    width: '50%',
  },
  pickUpView: {
    width: '50%',
    // padding: 30,
    paddingVertical: 12.5,
    borderBottomWidth: 3,
  },
  deliveryOpt: {
    fontWeight: '600',
    color: '#000',
    fontSize: 18,
    fontFamily: 'Roboto,sans-serif',
    textAlign: 'center'
  },
  selectLocation: {
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: "#f2f2f2",
    backgroundColor: 'white',
    borderRadius: 12,
  },
  yourLocationText: {
    color: '#7e7e7e',
    marginBottom: 8,
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Roboto,sans-serif',
  },
  changeLocation: {
    fontSize: 13,
    fontWeight: '500',
    color: '#cd427d',
    marginTop: 16
  },
  orderNowButton: {
    // marginTop: 65,
    padding: 10,
    elevation: 2,
    shadowOpacity: 0.2,
    paddingTop: 15,
  }
});

export default HomePage;
