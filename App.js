
import React from 'react';
import {Text, View} from 'react-native';
import NavBar from './src/common/navbar/NavBar';
import Maps from './src/screens/NavbarScreens/Maps';
import MapsMoving from './src/screens/NavbarScreens/Maps2';
import Test from './src/utils/Test';
function App() {
  return (
    <>

      <NavBar></NavBar>
      {/* <Test/> */}
      {/* <Maps/> */}
      {/* <MapsMoving/> */}
    </>
  );
} 
export default App;

// import React, {Component} from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Alert,
//   ActivityIndicator,
//   Image,
// } from 'react-native';

// import GetLocation from 'react-native-get-location';
// import MapView, { Marker } from 'react-native-maps';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   location: {
//     color: '#333333',
//     marginBottom: 5,
//   },
//   button: {
//     marginBottom: 8,
//   },
// });

// export default class App extends Component {
//   state = {
//     location: null,
//     loading: false,
//   };

//   requestLocation = () => {
//     this.setState({loading: true, location: null});

//     GetLocation.getCurrentPosition({
//       enableHighAccuracy: true,
//       timeout: 150000,
//     }).then(location => {
//       this.setState({
//         location,
//         loading: false,
//       });
//     });
//   };

//   render() {
//     const {location, loading} = this.state;
//     console.warn(location)
//     return (
//       <>
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>
//           To get location, press the button:
//         </Text>
//         <View style={styles.button}>
//           <Button
//             disabled={loading}
//             title="Get Location"
//             onPress={this.requestLocation}
//           />
//         </View>
//         {loading ? <ActivityIndicator /> : null}
//         {location ? (

//           // <Text style={styles.location}>{JSON.stringify(location, 0, 2)}</Text> 
//           <MapView
//           style={{flex:1}}
//           initialRegion = {{
//             latitude:location.latitude,
//             longitude:location.longitude,
//             latitudeDelta:0.015,
//             longitudeDelta:0.015
//           }}
//           >
//               <Marker
//                  coordinate = {{
//                     latitude: 17.4366894,
//                     longitude:78.3668212
//                  }}
//                  title = "just checking"
//                  description = "just checking i sya"
//                  >
//                      <Image 
//                      source = {require('./src/assets/NavbarImages/user-profile.jpg')} 
//                      style = {{
//                          width:45,
//                          height:45
//                      }}
//                      />
//                      </Marker>
//           </MapView>
//           ) : null}
//       </View>
//       </>
//     )
//   }
// }
