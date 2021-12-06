import React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { contentData } from '../../assets/AppData/AppData';

const ContentDisplay = () => {
    return (
        <View
            style={{
                marginBottom: 20,
                paddingHorizontal: 15,
                width: '100%'
            }}
        >
            {
                contentData?.map(data => (
                    <View
                        style={{
                            marginTop: 20
                        }}
                        key={data.image}
                    >
                        <Image
                            source={data.image}
                            resizeMode="cover"
                            style={{
                                //    width:Dimensions.get('window').width,
                                //    height:300
                                width: '100%'
                            }}
                        >
                        </Image>
                        <View
                            style={styles.ribbonTitle}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 22,
                                }}
                            >{data.title}</Text>
                        </View>
                    </View>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    ribbonTitle: {
        position: 'absolute',
        top: '50%',
        backgroundColor: '#EC286F',
        paddingVertical: 8,
        paddingHorizontal: 10,
        paddingRight:35,
        borderRightColor: 'transparent',
    }
});

export default ContentDisplay