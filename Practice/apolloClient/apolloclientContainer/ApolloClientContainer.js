import React from 'react';
import {View, Text} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import GraphqlDataGetting from './GraphqlDataGetting';
import Mutations from './Mutations';

const ApolloClientContainer = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://192.168.0.165:4000',
  });
  return (
  <ApolloProvider client={client}>
      <GraphqlDataGetting/>
      {/* <Mutations/> */}
  </ApolloProvider>
  )
  ;
};

export default ApolloClientContainer;
