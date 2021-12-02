import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../../utils/CustomButton';
import GlobalStyles from '../../utils/GlobalStyles';
import Test from '../../utils/Test';

const HomePage = () => {
  const shopOnlineHandler = () => {};
  return (
    <>
      {/* <View style={[styles.buttonOnline, GlobalStyles.flex]}>
        <CustomButton
          title="ShopOnline"
          color="#1eb900"
          onPress={() => shopOnlineHandler()}></CustomButton>
      </View> */}
      <Image style={[styles.pickUpPageImage]} resizeMode='contain' source={require('../../assets/PickUP/DeliveryPromotion.jpg')}></Image>
    <View style={[styles.DeliveryOptionsView]}>
      <Text style={[styles.delivery]}>Delivery</Text>
      <Text style={[styles.pickUp]}>PickUP</Text>
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
  buttonOnline: {

  },
  pickUpPageImage : {
    width: Dimensions.get('window').width,
    height: 250,
  },
  DeliveryOptionsView : {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  delivery , pickUp : {
    fontWeight: '600',
    color: '#000',
    fontSize: 18,
    fontFamily: 'Roboto,sans-serif'

  }
});

export default HomePage;
