import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const ShippingPage = ({route}) => {
    console.log(route.params.cartItems)
    return(
        <View>
            <Text>
                Your Order
            </Text>
            <ScrollView>
              {
                  route.params.cartItems.map(product => {
                      return(
                          <View>
                              <Text>{product.name}</Text>
                          </View>
                      )
                  })
              }
            </ScrollView>
        </View>
    );
};

export default ShippingPage