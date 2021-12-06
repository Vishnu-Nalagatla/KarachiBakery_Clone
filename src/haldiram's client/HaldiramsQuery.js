import React from 'react'
import { View, Text } from 'react-native'
import {useQuery,gql} from '@apollo/client';
const USERS_DATA = gql`
query{
  AllProducts{
    attribute_set_id
    created_at
    entity_id
    has_options
    required_options
    sku
    type_id
    updated_at
  }
}
`
const HaldiramsQuery = () => {
  const {data,error,loading} = useQuery(USERS_DATA);
    return {
        data,
        error,
        loading
    }
}

export default HaldiramsQuery
