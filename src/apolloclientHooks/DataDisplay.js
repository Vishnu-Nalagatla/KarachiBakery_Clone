import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useQuery, gql } from '@apollo/client';

const QUERY_ALL_USERS = gql`
query getUsersData {
    users {
      id
      name
      userName
      age
      nationality
      friends {
        age
        name
      }
    }
  }
`
const DataDisplay = () => {
    const {data} = useQuery(QUERY_ALL_USERS)
    return (
        <View>
            {
                data &&
            <FlatList 
            data = {data.users}
            renderItem = {({item}) => {
                return(
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.userName}</Text>
                        <Text>{item.nationality}</Text>
                    </View>
                )
            }}
            />
        }
        </View>
    )
}

export default DataDisplay
