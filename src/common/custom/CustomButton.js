import React from 'react';
import { Pressable , Text} from 'react-native';

const CustomButton = (props) => {
    const {textName,onPress,delivery,style,color,radius} = props
    return(
        <>
        <Pressable
           style = {({pressed}) => [
            {
                // backgroundColor:pressed?'#Cd427D':'gray',
            width:'50%',
            paddingVertical:12,
            borderRadius : radius,
            // backgroundColor : (delivery ==='Delivery' )&& 'red'
        },
        {
        ...style
        }
           ]}
           onPress = {onPress}
        >
            <Text
            style = {{
                color : color ,
                textAlign:'center',
                fontSize:18
            }}
            >{textName}</Text>
        </Pressable>
        </>
    );
};

export default CustomButton