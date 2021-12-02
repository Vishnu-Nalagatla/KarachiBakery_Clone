import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image, Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
const Maps = () => {
  // const [coo, setCoords] = React.useState({
  //   lat: null,
  //   long: null,
  //   latDelta : null,
  //   longDelta:null
  // });
  const [region,setRegion] = React.useState({
    latitude: null,
    longitude: null,
    latitudeDelta: null,
    longitudeDelta: null,
  });
  // React.useEffect(() => {
  //   Geolocation.getCurrentPosition(position => {
  //     setCoords({
  //       lat: position.coords.latitude,
  //       long: position.coords.longitude,
  //       latDelta:0.0122,
  //       longDelta:0.0122
  //     });
  //   });
  // }, []);
  // console.warn(coo);
  const onRegionChange = regionValue => {
    console.log(JSON.stringify(regionValue.latitude),'region')
    console.log(JSON.stringify(regionValue.longitude),'long region')
    setRegion({
        latitude : regionValue.latitude,
        longitude : regionValue.longitude,
        latitudeDelta:0.0125,
        longitudeDelta:0.0125,
    })
}
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
      }}>
      {region ? (
        <MapView
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          initialRegion={region}
          onRegionChangeComplete = {onRegionChange}
          >
            {
              region?(
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title="vaishnavi cynosure"
            description="near ring road gachibowli">
            <Image
              source={require('../../assets/NavbarImages/user-profile.jpg')}
              resizeMode="cover"
              style={{
                width: 55,
                height: 55,
              }}
            />
          </Marker>):null
}
        </MapView>
      ) : null}
    </View>
  );
};

export default Maps;

// // latitude:17.4366894,
// longitude:78.3668212,
// latitudeDelta :0.0122 ,
// longitudeDelta :
// //  Dimensions.get('window').width / Dimensions.get('window').height * 2
// 0.0122














