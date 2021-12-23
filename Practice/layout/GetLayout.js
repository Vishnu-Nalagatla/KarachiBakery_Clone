import React from 'react'
import { View, Text } from 'react-native'

const GetLayout = () => {
    const handleLayout = ({nativeEvent}) =>{
        console.warn(nativeEvent.layout.height)
    }
    return (
        <View
        style = {{
            position:'absolute',
            top:100
        }}
        >
            <Text >something</Text>
            <Text 
         
            onLayout={handleLayout}
            >position 100</Text>
            <View>
                <Text onLayout={({nativeEvent})=>console.warn(nativeEvent.layout.height)}>jvuii</Text>
            </View>
        </View>
    )
}

export default GetLayout
