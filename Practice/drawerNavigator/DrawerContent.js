import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      {/* <StatusBar translucent={true} backgroundColor='transparent'/> */}
      <DrawerContentScrollView {...props}>
        <View>
          <Text>Main content</Text>
          <TouchableOpacity>
              <Text>New Arrivals</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text>About</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      {/* <DrawerItem label="something" /> 
      <DrawerItem label="something" />
      <DrawerItem label="something" /> 
      <DrawerItem label="something" />
      <DrawerItem label="something" /> */}
    </View>
  );
};

export default DrawerContent;
