import React from 'react'
import { View, Text } from 'react-native'
import HaldiramsQuery from './HaldiramsQuery'

const HaldiramsDisplay = () => {
    const {data,loading,error} = HaldiramsQuery();
    if(data){
        console.log(data)
    }
    if(error){
        console.log(error)
    }
    return (
        <View>
            <Text>fsdgfesd</Text>
        </View>
    )
}

export default HaldiramsDisplay
