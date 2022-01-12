// import React from 'react';
// import {View, Text, Image, StyleSheet} from 'react-native';

// const InitialPage = () => {
//   return (
//     <View style={styles.initialPageContainer}>
//       <View>
//         <Image
//         style={styles.logo}
//           source={require('../assets/haldirams/logo.png')}
//           resizeMode='cover'
//         />
//         <Text style={styles.text}>taste of tradition</Text>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//     initialPageContainer:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor:'#e1e1e1'
//     },
//     logo:{
//         width: 300,
//         height: 160,
//         tintColor: '#777',
//     },
//     text:{
//         color:'#000',
//         fontSize:18,
//         textAlign:'center',
//         textTransform:'uppercase',
//         fontWeight:'bold'
//     }
// })
// export default InitialPage;













import React from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import LoginScreen from './LoginScreen';
const InitialPage = ({navigation}) => {
  const fadeIn = {
    0:{
      opacity:0,
      scale:1
    },
    0.5:{
      opacity:1,
      scale:0.3
    },
    1:{
      opacity:0,
      scale:0
    }
  };
  const sectionList = Animatable.createAnimatableComponent(SectionList);
  return (
    <View style={styles.initialPageContainer}>
      {/* <Animatable.Text animation={fadeIn}>fade me in</Animatable.Text> */}
      <Animatable.View 
      animation="bounceOutUp"
      delay={2000}
      easing="linear"
      // iterationCount={2}
      // iterationDelay={2000}
      // direction='alternate'
      // transition='fontSize:100'
      onAnimationEnd={()=>navigation.navigate('intro')}
      >
        <Animatable.Image
          animation="bounceIn"
          // duration= "1500"
          source={require('../assets/haldirams/logo.png')}
          style={styles.hrLogo}
          resizeMode="stretch"
        />
        <Text style={styles.text}>taste of tradition</Text>
      </Animatable.View>
      {/* <sectionList
      animation
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  initialPageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
  },
  hrLogo: {
    width: 300,
    height: 160,
    tintColor: '#777',
  },
  text: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
export default InitialPage;
