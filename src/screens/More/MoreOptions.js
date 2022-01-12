import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moreScreenData} from '../../assets/AppData/AppData';
const MoreOptions = () => {
  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#e7eced',
        shadowColor: 'gray',
        shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        elevation: 1,
        marginBottom: 8,
      }}>
      <MaterialCommunityIcons name={item.iconName} color="#0073cf" size={20} />
      <Text
        style={{
          flex: 2,
          marginLeft: 15,
          color:'#000',
          fontWeight:'bold',
          opacity:.5,
          fontSize:13.7
        }}>
        {item.textName}
      </Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgray',
          opacity: 0.2,
          width: 20,
          height: 20,
          borderRadius: 50,
        }}>
        <MaterialCommunityIcons name="greater-than" color="#000" size={10} />
      </View>
    </View>
  );
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: '100%',
      }}>
      <View
        style={{
          height: 230,
          backgroundColor: '#0073cf',
        }}>
        <Text
        style={{
            color:'#fff',
            fontSize:16,
            fontWeight:'bold',
            // marginLeft:15,
            // marginTop:10
            position:'absolute',
            top:15,
            left:15
        }}
        >More</Text>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Image
            source={require('../../assets/images/user.jpg')}
            style={{
              width: 100,
              height: 100,
              borderRadius:7
            }}
          />
          <View
            style={{
              position: 'relative',
              top:-16,
              left:45,
              width: 25,
              height: 25,
              borderRadius: 50,
              backgroundColor: 'lightgreen',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}>
            <AntDesign 
            name="edit" 
            color = '#fff'
            size={15}
            />
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            color:'#fff',
            fontSize:16,
            fontWeight:'400'
          }}>
          Anil Kumar
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          marginTop: 15,
        }}>
        <FlatList
          key={item => item.iconName}
          data={moreScreenData}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};
export default MoreOptions;
