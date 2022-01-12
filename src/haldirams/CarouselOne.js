import React from 'react'
import { View, Text, StyleSheet,Dimensions } from 'react-native'

const CarouselOne = () => {
    return (
        <View style={{borderWidth:1,display:'flex',justifyContent:'space-between'}}>
        <View style={styles.circle}></View>
        <View>
          <Text>Help with you orders</Text>
          <Text>
            We have haldiram's assistance available
            <Text> 24X7</Text>
          </Text>
        </View>
       
      </View>
    )
}
const styles = StyleSheet.create({
    // contentContainer: {
    //     display:'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderWidth:2,
    //     width:'100%'
    //   },
    //   descpContainer: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width:Dimensions.get('window').width*0.7,
    //     marginTop:40
    //   },
      circle: {
        width: 280,
        height: 280,
        borderRadius: 280,
        backgroundColor: '#e1e1e1',
        marginTop:100
      },
    //   headerText: {
    //     color: '#404040',
    //     fontSize: 19,
    //     fontWeight: 'bold',
    //   },
    //   descpText:{
    //     fontSize:16,
    //     width:Dimensions.get('window').width*0.6,
    //     textAlign:"center",
    //     color:'#484848',
    //     fontWeight:'bold'
    //   }
})
export default CarouselOne
