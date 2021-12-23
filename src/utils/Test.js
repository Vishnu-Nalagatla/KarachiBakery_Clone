// import React from 'react'
// import {
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions
// } from 'react-native';

// const { height, width } = Dimensions.get('window');

// const Test = () => {
//   return (
//     <>
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.buttonStyles}>
//           <Text style={styles.welcome}>Welcome to React Native!</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   )
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   buttonStyles: {
//     backgroundColor: '#f2f2f2',
//     paddingVertical: 10,
//     width: '60%',
//     borderRadius: 10,
//     shadowColor: 'black',
//     shadowOpacity: 0.9,
//     elevation: 10,
//   },
//   welcome: {
//     fontSize: 20,
//     alignSelf: 'center',
//   }

// });

// export default Test


// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Dimensions, View, Button, Text } from 'react-native';

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
//   listenOrientationChange as lor,
//   removeOrientationListener as rol
// } from 'react-native-responsive-screen';

// const Responsive = () => {
//   useEffect(() => {
//     lor();
//     return () => rol()
//   }, [])

//   const styles = StyleSheet.create({
//     container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
//     title: {
//       backgroundColor: 'gray',
//       height: hp('10%'),
//       width: wp('80%'),
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginVertical: wp('10%'),
//     },
//     myText: {
//       textAlign: 'center',
//       color: 'white',
//       fontSize: hp('5%') // End result looks like the provided UI mockup
//     },
//     buttonStyle:
//     {
//       height: hp('8%'), // 70% of height device screen
//       width: wp('30%'),
//       marginHorizontal: wp('10%'),
//     },
//     buttonContainer:
//     {
//       flexDirection: 'row',
//       marginBottom: wp('10%'),
//     },
//     paraContainer:
//     {
//       width: wp('80%'),
//     },
//     paraText:
//     {
//       textAlign: 'justify'
//     }
//   });

//   return (
//     <>
//       <View style={styles.container}>
//         <View style={styles.title}>
//           <Text style={styles.myText}>Screen title with 50% width</Text>
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button success style={styles.buttonStyle} title='Button 1'></Button>
//           <Button success style={styles.buttonStyle} title='Button 2'></Button>
//         </View>
//         <View style={styles.paraContainer}>
//           <Text style={styles.paraText}>
//             As mentioned in "How to Develop Responsive UIs with React Native" article, this solution is
//             already in production apps and is tested with a set of Android, iOS emulators of different
//             screen
//             specs, in order to verify that we always have the same end result.
//           </Text>
//         </View>
//       </View>
//     </>
//   );
// }



// export default Responsive;





import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StyleSheet, Dimensions, View, Button, Text, ScrollView } from 'react-native';

const Login = () => {
    return (
      <>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Login</Text>
        </View>
      </View>
      </ScrollView>
      </>
    );
  }


const styles = StyleSheet.create({
  // container: { flex: 1 },
  textWrapper: {
    // height: hp('70%'), // 70% of height device screen
    width: wp('100%')   // 80% of width device screen
  },
  myText: {
    fontSize: hp('5%'), // End result looks like the provided UI mockup
    marginTop: hp('90%')
  }
});

export default Login;