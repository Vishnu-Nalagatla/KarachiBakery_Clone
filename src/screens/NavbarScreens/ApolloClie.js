import React from 'react'
import { View, Text } from 'react-native'
import {HttpLink} from 'apollo-link-http';
 import {ApolloClient} from 'apollo-client';
 import {InMemoryCache} from 'apollo-cache-inmemory';
 const makeApolloClient = () => {
     const link = new HttpLink({
         uri : "https://learn.hasura.io/graphql",
         headers : {
             Authorization : 'Bearer ' 
         }
     });
     const cache = new InMemoryCache();
     const client = new ApolloClient({
         link,cache
     })
     return client
 }
const ApolloClie = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default ApolloClie;
