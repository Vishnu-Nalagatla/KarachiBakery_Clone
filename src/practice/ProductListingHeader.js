import React from 'react';
import { Text ,View,TouchableOpacity, Button} from 'react-native';

const TabMovement = () => {
    const [initial,setInitial] = React.useState(true);
    return(
        <View>
                <TouchableOpacity
                onPress = {() => setInitial(true)}
                >
                    <Text>Delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {() => setInitial(false)}
                >
                    <Text>
                        Pickup
                    </Text>
                </TouchableOpacity>
                <Button title={initial?'Delivery':'Pickup'}/>
        </View>
    );
};

export default TabMovement