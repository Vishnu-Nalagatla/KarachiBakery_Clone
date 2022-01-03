import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moreScreenData } from '../../assets/AppData/AppData';
const MoreOptions = () => {
    const renderItem = ({ item }) => (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 6,
                marginBottom: 5,
                borderRadius: 6,
                shadowOpacity:0.5,
                shadowRadius: 20,
                shadowColor: 'red',
                shadowOffset: { width: 1, height:1},
                elevation:1
            }}
        >
            <MaterialCommunityIcons
                name={item.iconName}
            />
            <Text
                style={{
                    flex: 2,
                    marginLeft: 15
                }}
            >{item.textName}</Text>
            <MaterialCommunityIcons
                name='greater-than'
            />
        </View>
    );
    return (
        <View>
            <View
                style={{
                    height: 230,
                    backgroundColor: '#0073cf'
                }}
            >
                <Text>More</Text>
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={require('../../assets/images/user.jpg')}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
                    <AntDesign name='edit' />
                </View>
                <View>

                </View>
                <Text>Anil Kumar</Text>
            </View>
            <View
                style={{
                    padding: 10,
                    marginTop: 15
                }}
            >
                <FlatList
                    key={item => item.iconName}
                    data={moreScreenData}
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
};
export default MoreOptions
