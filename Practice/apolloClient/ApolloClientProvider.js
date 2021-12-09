import React from 'react';
import { Text } from 'react-native';
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client';
import ApiDataDisplay from './ApiDataDisplay';
import ApiDataVariables from './ApiDataVariables';

const ApolloClientProvider  = () => {
    const client = new ApolloClient({
        cache : new InMemoryCache(),
        uri : "http://192.168.146.113:4000/graphql"
    });
    return(
        <ApolloProvider client = {client}>
{/* <ApiDataDisplay/> */}
<ApiDataVariables/>
        </ApolloProvider>
    );
};

export default ApolloClientProvider