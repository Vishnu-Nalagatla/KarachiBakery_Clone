import React from 'react'
import { View, Text } from 'react-native'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetUsers from './GetUsers';
const errorLink = onError(({graphqlErrors,networkError}) =>{
    if(graphqlErrors){
        graphqlErrors.map(({message,location,path})=>{
            alert(`Graphql error ${message}`);
        });
    }
})
const link = from([
    errorLink,
    new HttpLink({
        uri : ''
    }),
]);
const client = new ApolloClient({
  cache : new InMemoryCache(),
  link:link
})
const ApolloClientFetch = () => {
    return (
      <ApolloProvider client = {client}>
<GetUsers/>
      </ApolloProvider>
    );
};

export default ApolloClientFetch
