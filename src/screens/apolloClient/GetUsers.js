import React from 'react'
import { View, Text } from 'react-native'
import {
    useQuery,
    gql
} from '@apollo/client';

const GetUsers = () => {
    const {error,loading,data} = useQuery();
    React.useEffect(() =>{
        console.log(data) 
    },[data])
    return (
        <View>
            <Text></Text>
        </View>
    );
};
export default GetUsers
