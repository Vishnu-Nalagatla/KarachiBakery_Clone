import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Alert,
  Modal,
  ToastAndroid,
  Image,
} from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';




function ScreenA({navigation , route}) {
  debugger;
    const onPressHandler = () => {
      navigation.navigate('Screen_B');

        // navigation.navigate('Screen_B' , {itemName: 'Item from ScreenA' , itemId: 10});

        // navigation.replace('Screen_B');   // This Process will replace the current page...... there is no goback using replace
        // navigation.openDrawer();        // To open the drawer with button and there is "closeDrawer()"
      };
      return (
        <View style={styles.screen1View}>
          <Text style={[
            GlobalStyles.CustomFont,
            styles.screen1TextFont,
          ]}>Screen A</Text>
          <Pressable
            onPress={onPressHandler}
            style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
            <Text style={[styles.screen1TextFont , GlobalStyles.ButtonFont]}> Go to Screen B</Text>
          </Pressable>
            <Text style={styles.screen1Text}> {route.params?.Message}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    screen1View: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    screen1Text: {
      fontSize: 50,
      // fontWeight: 'bold',
      fontFamily: 'DancingScript-VariableFont_wght' ,
      margin: 20,
    },
    screen1TextFont : {
      fontSize: 50,
      margin: 20,
    }
  });

export default ScreenA
