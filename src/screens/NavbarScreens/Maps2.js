
import React from 'react'
import { View, Text, Image } from 'react-native'
import MapView from 'react-native-maps';
import { icons } from '../../constants';
export default function MapsssTrial2() {
    const [region,setRegion] = React.useState({
        latitudeDelta:null,
        longitudeDelta:null,
        latitude : null,
        longitude : null
    });
    const onRegionChangeValue = regionValue => {
        console.warn(JSON.stringify(regionValue.latitude))
        console.warn(JSON.stringify(regionValue.longitude))
        setRegion({
            latitudeDelta:0.0125,
            longitudeDelta:0.0125,
            latitude : regionValue.latitude,
            longitude : regionValue.longitude
        })
    }
    return (
        <>
        <View style = {{flex:1}}>
            {
                region?(
         <MapView
         style = {{flex:1}}
         initialRegion = {region}
         onRegionChangeComplete = {onRegionChangeValue}
         />):null
            }
         <View style = {{top:'50%',left:'50%',marginLeft:-24,marginTop:-48,position:'absolute'}}>
        <Image source = {require('../../assets/Location/Location.png')} style = {{height:48,width:48}}/>
         </View>
        </View>
        </>
    )
}