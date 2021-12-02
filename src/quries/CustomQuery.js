import { useQuery,gql } from "@apollo/client";

const GET_API_DATA = gql`
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
`;
const CustomQuery = () => {
    const {error,loading,data} = useQuery(GET_API_DATA);
    return {
          error,
          loading,
          data
    }
};

export default CustomQuery