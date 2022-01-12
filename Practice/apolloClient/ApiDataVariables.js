import React from 'react'
import { View, Text } from 'react-native'
import { QueryVariable } from '../quries/CustomQuery';
import { useQuery,gql } from "@apollo/client";

const GET_API_DATA = gql`
query usersData {
  users {
    id
    name
    userName
  }
}
`;
const ApiDataVariables = () => {
    const {error,loading,data} = useQuery(GET_API_DATA);

    // const {data,error,loading} = QueryVariable(2);
    
        console.log({data,error,loading})
    
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default ApiDataVariables
