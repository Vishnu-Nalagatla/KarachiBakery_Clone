import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useQuery,gql } from '@apollo/client';
import CustomQuery from '../quries/CustomQuery';



// rather than writing all these inside a particular component
// we can creat a custom hook
// const GET_API_DATA = gql`
// query getUsersData {
//     users {
//       id
//       name
//       userName
//       age
//       nationality
//       friends {
//         age
//         name
//       }
//     }
//   }
// `;
const ApiDataDisplay = () => {
    // if you want data only when fetching is successful 
    // and data is a inbuild keyword
    // const {data} = useQuery(GET_API_DATA)

    // actually the output of a usequery is a object

    // const dataFetched = useQuery(GET_API_DATA);
    // dataFetched.error; // when there is an error
    // dataFetched.loading; // when it is loading
    // dataFetched.data; // when data is fetched successfully

// or you can destructure the object
//   const {error,loading,data} = useQuery(GET_API_DATA);
 
// dont forgot to call the component
const {error,loading,data} = CustomQuery();
console.log({error,loading,data})
  // it displays when the data is in loading state
  if(loading) return <Text>Loading.......</Text>

  // when there is an error
  // for suppose if you have any mistake while writing  query
  //  or there is no properties what we want in the schema
  if(error) return <Text>something went wrong</Text>
    return (
        <View>
            <FlatList
            data= {data.users}
            renderItem = {({item}) => {
                return(
                    <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between'
                    }}
                    >
                        <Text>{item.name}</Text>
                        <Text>{item.userName}</Text>
                        <Text>{item.age}</Text>
                        <Text>{item.nationality}</Text>
                    </View>
                )
            }}
            />
        </View>
    )
}

export default ApiDataDisplay
