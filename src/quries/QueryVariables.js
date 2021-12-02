import {gql,useQuery} from '@apollo/client';

const GET_USERS_DATA_BY_ID =  gql `
  query getUsersDataById($id:ID!){
    #   if you want to render a data using id then you have to pass an id into the query function by using $ symbol 
    # or like whatever you want and it must be present inside a api data
    # and you have to pass a data type  
    # before all this there is a function to wrote inside a resolver  
    user(id:$id) {
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
`;
export const QueryVariable = (id) => {
    const {data,error,loading} = useQuery(GET_USERS_DATA_BY_ID,{
        variables  :{
            id
        }
    });
    return {
        data,
        error,
        loading
    };
};