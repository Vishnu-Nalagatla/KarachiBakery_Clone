import React from 'react'
import { View, Text, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
const latitudeDelta = 0.0122
const longitudeDelta = 0.0122
function MovingMap() {
    const [region, setRegion] = React.useState({
        latitudeDelta,
        longitudeDelta,
        latitude: 17.4366894,
        longitude: 78.3668212
    });
    const onRegionChangeValue = regionValue => {
        console.log(JSON.stringify(regionValue.longitude))
        console.log(JSON.stringify(regionValue.latitude))
        setRegion(regionValue)
    }
    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={region}
                onRegionChangeComplete={onRegionChangeValue}
                // loadingEnabled={true}
            >
                <Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude
                    }}
                    title='Test Title'>
                        <Image style={{width:50,height:50}} source={require('../assets/Location/Location.png')}/>
                </Marker>


            </MapView>
            {/* <View style = {{top:'50%',left:'50%',marginLeft:-24,marginTop:-48,position:'absolute'}}>
        <Image source ={require('../assets/Location/Location.png')} style = {{height:48,width:48}}/>
         </View> */}
        </View>
    )
};

export default MovingMap;