import React, {useState} from 'react';
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
import CustomButton from '../../utils/CustomButton';
import GlobalStyles from '../../utils/GlobalStyles';
import Test from '../../utils/Test';

const HomePage = () => {
  const [deliveryOptions, setDeliveryOptions] = useState(true);
  const shopOnlineHandler = () => {};
  return (
    <>
      {/* <View style={[styles.buttonOnline, GlobalStyles.flex]}>
        <CustomButton
          title="ShopOnline"
          color="#1eb900"
          onPress={() => shopOnlineHandler()}></CustomButton>
      </View> */}
      <Image
        style={[styles.pickUpPageImage]}
        resizeMode="cover"
        source={require('../../assets/PickUP/DeliveryPromotion.jpg')}></Image>
      <View style={[styles.DeliveryOptionsView]}>
        <TouchableOpacity
        onPress={() => setDeliveryOptions(true)}
        style={[styles.deliveryView , {borderBottomColor:deliveryOptions?'#CD427D':'transparent'}]}>
          <Text style={[styles.delivery , {color:deliveryOptions?'#CD427D':'#000'}]}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => setDeliveryOptions(false)}
        style={[styles.pickUpView  , {borderBottomColor:!deliveryOptions?'#Cd427D':'transparent'}]}>
          <Text style={[styles.pickUp]}>PickUp</Text>
        </TouchableOpacity>
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
  delivery: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto,sans-serif',
  },
  pickUp: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Roboto,sans-serif',
    textAlign: 'center',
  },
  deliveryView: {
    borderBottomWidth: 3,
    padding: 30,
    width: '50%',
  },
  pickUpView: {
    width: '50%',
    padding: 30,
    borderBottomWidth: 3,
  },
  pickUp : {
    fontWeight: '600',
    color: '#000',
    fontSize: 18,
    fontFamily: 'Roboto,sans-serif'

  }
});

export default HomePage;
