import React from 'react';
import FoodDeliveryMap from './Practice/mapsByFoodDelivery/FoodDeliveryMap';
import CurrentLocationContainer from './src/screens/maps/CurrentLocationContainer';
import MapsMoving from './src/screens/maps/GoogleMaps';
import NavigationContainers from './src/screens/NavigationContainers';
import SearchFilter from './src/screens/productListing/SearchFilter';
import VegOnly from './src/screens/productListing/VegOnly';
import LoginPopUp from './src/components/LoginPopUp';
import PlpOffers from './src/components/PlpOffers';
import GetStarted from './src/components/GetStarted';
import {ItemsList} from './src/screens/productListing';
import StoreSelection from './src/components/deliveryComponents/StoreSelection';
import BannerCarousel from './Practice/banners/BannerCarosel';
import TabContainer from './Practice/navigation/DrawerContainer';
import Banner from './Practice/banners/Banner';
import {BannerPaginationTwo} from './src/screens/NavbarScreens/HomeScreeen/BannerPaginationTwo';
import Resturant from './src/screens/NavbarScreens/HomeScreeen/BannerPaginationOne';
import GetLayout from './Practice/layout/GetLayout';
import ScrollToIndex from './Practice/layout/ScrollToIndex';
import ScrollTo from './Practice/layout/ScrollTo';
import ScrollPractice from './Practice/layout/ScrollPractice';
import {Provider} from 'react-redux';
import Carousel from './Practice/banners/Carousel';
import Test from './src/utils/Test';
import DeliverySelection from './src/components/deliveryComponents/DeliverySelection';
import Responsive from './src/utils/Test';
import Login from './src/utils/Test';
import CurrentLocationPlp from './src/components/deliveryComponents/CurrentLocationPlp';
import store from './src/redux/store';
import RazorpayTest from './src/components/RazorpayPayment/RazorpayTest';
import MoreOptions from './src/screens/More/MoreOptions';
import GeoFencingTest from './src/components/GeoFencingTest';
import Maps from './src/screens/NavbarScreens/Maps';
import Map from './src/screens/NavbarScreens/Maps';
import MovingMap from './src/utils/MovingMap';
import ApolloClientProvider from './Practice/apolloClient/ApolloClientProvider';
import Razorpay from './src/screens/shipping/Razorpay';
import InitialPage from './src/haldirams/InitialPage';
import IntroScreen from './src/haldirams/IntroScreen';
import LoginScreen from './src/haldirams/LoginScreen';
import ApolloClientContainer from './Practice/apolloClient/apolloclientContainer/ApolloClientContainer';
import Navigation from './src/haldirams/Navigation';
import IntroScreenContainer from './src/haldirams/IntroScreenContainer';
import CarouselOne from './src/haldirams/CarouselOne';
import DrawerNavigatorContainer from './Practice/drawerNavigator/DrawerNavigatorContainer';
function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainers/>
        {/* <GeoFencingTest></GeoFencingTest> */}
        {/* <MovingMap></MovingMap> */}
        {/* <Maps></Maps> */}
        {/* <Map></Map> */}
        {/* <MapsMoving/> */}
        {/* <FoodDeliveryMap/> */}
        {/* <SearchFilter/> */}
        {/* <VegOnly/> */}
        {/* <CurrentLocationContainer/> */}
        {/* <PlpOffers></PlpOffers> */}
        {/* <LoginPopUp></LoginPopUp> */}
        {/* <GetStarted></GetStarted> */}
        {/* <ItemsList/> */}
        {/* <StoreSelection/> */}
        {/* <BannerCarousel/> */}
        {/* <TabContainer/> */}
        {/* <Banner/> */}
        {/* <BannerPaginationTwo/> */}
        {/* <Resturant/> */}
        {/* <GetLayout/> */}
        {/* <ScrollToIndex/> */}
        {/* <ScrollTo/> */}
        {/* <ScrollPractice/> */}
        {/* <Carousel/> */}
        {/* <Test></Test> */}
        {/* <DeliverySelection></DeliverySelection> */}
        {/* <Responsive></Responsive> */}
        {/* <Login/> */}
        {/* <CurrentLocationPlp/> */}
        {/* <RazorpayTest></RazorpayTest> */}
        {/* <NumberLogin /> */}
        {/* <MoreOptions/> */}
        {/* <Razorpay/> */}
        {/* <ApolloClientProvider/> */}
        {/* <InitialPage/> */}
        {/* <IntroScreen/> */}
        {/* <LoginScreen/> */}
        {/* <ApolloClientContainer/> */}
        {/* <Navigation/> */}
        {/* <IntroScreenContainer/> */}
        {/* <CarouselOne/> */}
        {/* <DrawerNavigatorContainer/> */}
      </Provider>
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
