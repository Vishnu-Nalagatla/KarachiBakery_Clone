import React from 'react';
import { Text } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ApiDataDisplay from './ApiDataDisplay';
import ApiDataVariables from './ApiDataVariables';
const ApolloClientProvider = () => {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "http://192.168.0.166:4000"
    });
    return (
        <ApolloProvider client={client}>
            <ApiDataDisplay/>
            {/* <ApiDataVariables /> */}
        </ApolloProvider>
    );
};

export default ApolloClientProvider