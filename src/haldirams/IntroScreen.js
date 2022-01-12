import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
const IntroScreen = ({navigation}) => {
  return (
    <Animatable.View animation='fadeInUp'>
    <View style={styles.introPageContainer}>
      <Text style={styles.skipText} onPress={()=>navigation.navigate('login')}>skip</Text>
      <View style={styles.contentContainer}>
        <View style={styles.circle}></View>
        <View style={styles.descpContainer}>
          <Text style={styles.headerText}>Help with you orders</Text>
          <Text style={styles.descpText}>
            We have haldiram's assistance available
            <Text> 24X7</Text>
          </Text>
        </View>
       
      </View>
      <View
        style={{
          position:'absolute',
          bottom:0,
          flexDirection:'row',
          justifyContent:'space-between'
        }}
        >
          <TouchableOpacity
          style={{
            width:20,
            height:5,
            backgroundColor:'gray',
            marginLeft:10
          }}
          >
          </TouchableOpacity>
          <TouchableOpacity
          style={{
            width:20,
            height:5,
            backgroundColor:'gray',
            marginRight:19
          }}
          >
          </TouchableOpacity>
          <View>
            <View>
              <Ionicons 
              name='caret-forward-circle'
              size={25}
              />
            </View>
          </View>
        </View>
    </View>
    </Animatable.View>
  );
};
const styles = StyleSheet.create({
  introPageContainer: {
    // flex: 1,
    backgroundColor: '#f6f6f6',
    padding: 10,
    width:'100%'
  },
  skipText: {
    textAlign: 'right',
    textTransform: 'uppercase',
    color: '#707070',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descpContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:Dimensions.get('window').width*0.7,
    marginTop:40
  },
  circle: {
    width: 280,
    height: 280,
    borderRadius: 280,
    backgroundColor: '#e1e1e1',
    marginTop:100
  },
  headerText: {
    color: '#404040',
    fontSize: 19,
    fontWeight: 'bold',
  },
  descpText:{
    fontSize:16,
    width:Dimensions.get('window').width*0.6,
    textAlign:"center",
    color:'#484848',
    fontWeight:'bold'
  }
});
export default IntroScreen;
