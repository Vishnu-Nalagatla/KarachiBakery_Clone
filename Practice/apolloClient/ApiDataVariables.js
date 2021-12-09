import React from 'react'
import { View, Text } from 'react-native'
import { QueryVariable } from '../../src/quries/QueryVariables'

const ApiDataVariables = () => {
    const {data,error,loading} = QueryVariable(2);
    
        console.log({data,error,loading})
    
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default ApiDataVariables
