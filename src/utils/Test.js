import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Test = () => {
    return (
        <>
           <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyles}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </TouchableOpacity>
      </View>
        </>
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    buttonStyles: {
      backgroundColor: '#f2f2f2',
      paddingVertical: 10,
      width: '60%',
      borderRadius: 10,
      shadowColor: 'black',
      shadowOpacity: 0.9,
      elevation: 10,
    },
    welcome: {
      fontSize: 20,
      alignSelf: 'center',
    }
  
  });

export default Test
