import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import {useQuery, gql, useLazyQuery,useMutation} from '@apollo/client';
const GET_GRAPHQL_DATA = gql`
  query usersData {
    users {
      # id
      name
      # userName
      # age
      # nationality
      # friends {
        # name
        # age
      # }
    }
  }
`;

const GET_MOVIES_DATA = gql`
  query usersData {
    movies {
      id
      name
      year
      ott
    }
  }
`;
const GET_MOVIE_BY_NAME = gql`
  query GetMovieByName($name: String!) {
    movie(name: $name) {
      name
      year
    }
  }
`;






const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input:CreateUserInput!){
      CreateUser(input:$input){
        name
      }
    }
`




const GraphqlDataGetting = () => {
  const [searchedValue, setSearchedValue] = React.useState('');
  const [name,setName] = React.useState('');
  const {data, loading, error,refetch} = useQuery(GET_GRAPHQL_DATA);
  const {data: movieData, error: movieError} = useQuery(GET_MOVIES_DATA);
  const [fetchData, {data: searchedData, error: searchedError}] =
    useLazyQuery(GET_MOVIE_BY_NAME);
    const [createUserFun] = useMutation(CREATE_USER_MUTATION)
  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };
  const renderMovieData = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.year}</Text>
        <Text>{item.ott}</Text>
      </View>
    );
  };
  return (
    <View>
      <View>
        <TextInput style={{
          borderWidth:1
        }} value={name} onChangeText={value =>setName(value)} />
        <Button title='create' onPress={()=>{
          createUserFun({
            variables:{input:{name:name}}
          });
          // refetch()
        }}></Button>
      </View>
      <FlatList
        data={data.users}
        // keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      {/* {
        movieData&&
      <FlatList
        data={movieData.movies}
        keyExtractor={item => item.id}
        renderItem={renderMovieData}
      />
} */}
      <View>
        <TextInput
          value={searchedValue}
          onChangeText={value => setSearchedValue(value)}
          placeholder="enter the name"
        />
        <Button
          title="get data"
          onPress={() => {
            fetchData({
              variables: {
                name: searchedValue,
              },
            });
          }}
        />
      </View>
        <View>
          {console.log(searchedData)}
        {
          searchedData && (
            <View>
              <Text>{searchedData.movie.name}</Text>
              <Text>{searchedData.movie.year}</Text>
            </View>
          )
        }
        </View>
    </View>
  );
};
export default GraphqlDataGetting;
