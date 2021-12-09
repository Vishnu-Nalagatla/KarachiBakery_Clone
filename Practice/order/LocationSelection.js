import React from 'react';
import { Button, Image, TextInput } from 'react-native';

const LocationSelection = () => {
    return(
        <View>
            <View>
                <Image
                source = {require('../../assets/images/karachi-bakery-logo.png')}
                />
                <Text>Karachi Bakery</Text>
            </View>
            <View>
                <Image
                source = {require('../../assets/images/KB_Website_-_Pop_up.jpg')}
                />
            </View>
            <View>
                <Button title = "Delivery"/>
                <Button title = "Pickup"/>
            </View>
            <View>
                <Text>Your Location</Text>
                <View>
                    <Image
                    source = {require('../../assets/images/location-icon-grey.svg')}
                    />
                    <TextInput/>
                </View>
            </View>
        </View>
    )
}
export default LocationSelection