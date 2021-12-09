import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Entypo from 'react-native-vector-icons/Entypo';
import MapViewDirections from 'react-native-maps-directions'; 
const FoodDeliveryMap = () => {
    const [region, setRegion] = React.useState(null);
    const GOOGLE_API_KEY = "AIzaSyDArP9JVKV0XGD3VFkYXD3D_qZBLwDgMRY";
    let currentLocation = {
        latitude: 17.4366894,
        longitude: 78.3668212
    };
    let storeLocation = {
        latitude: 17.43879468759861,
        longitude: 78.36396055296063
    };
    let mapRegion = {
        latitude: (currentLocation.latitude + storeLocation.latitude) / 2,
        longitude: (currentLocation.longitude + storeLocation.longitude) / 2,
        latitudeDelta: Math.abs(currentLocation.latitude - storeLocation.latitude) * 4,
        longitudeDelta: Math.abs(currentLocation.longitude - currentLocation.longitude) * 4
    };
    React.useEffect(() => {
        setRegion(mapRegion)
    }, []);
    const destinationMarker = () => (
        <Marker
            coordinate={storeLocation}
        >
            <Entypo name="location-pin" size={30} color="tomato" />
        </Marker>
    );
    const userLocationMarker = () => (
        <Marker
            coordinate={currentLocation}
            anchor={{ x: 0.5, y: 0.5 }}
            flat={true}
        >
            <Entypo name="location-pin" size={30} color="tomato" />
        </Marker>
    )
    return (
        <View style={{ flex: 1 }}
        >
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
            >
                <MapViewDirections
                origin = {currentLocation}
                destination = {storeLocation}
                apikey = {GOOGLE_API_KEY}
                strokeWidth = {5}
                strokeColor = "red"
                optimizeWaypoints = {true}
                />
                {destinationMarker()}
                {userLocationMarker()}
            </MapView>
        </View>
    );
};

export default FoodDeliveryMap