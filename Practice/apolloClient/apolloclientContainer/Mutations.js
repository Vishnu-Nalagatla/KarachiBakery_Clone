import React from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import {gql, useMutation} from '@apollo/client';
const CREATE_USER_MUTATION =  gql`
mutation createUser($input:CreateUserInput!){
    CreateUser(input:$input){
        name
    }
}
`
const Mutations = () => {
    const [name,setName] = React.useState('');
    const [createUserFunction] = useMutation(CREATE_USER_MUTATION)
    return (
        <View>
            <TextInput 
            style={{borderWidth:1}} 
            value={name} 
            onChangeText={value =>setName(value)}/>
            <Button title='click' 
            onPress={() =>{
                createUserFunction({
                    variables:{input:{name:name}}
                })
            }}
            />
        </View>
    )
}

export default Mutations
