import React from 'react'
import { View, Text, Image, ImageBackground, ScrollView, Modal, Alert, Button, Pressable,TouchableOpacity } from 'react-native'
import { newArrivalsData } from '../assets/AppData/AppData'
import FooterOrderNav from '../common/FooterOrderNav';
import images from '../constants/images'
const NewArrivals = ({navigation}) => {
    const [visible, setVisible] = React.useState(false);
    const [previewImage,setPreviewImage] = React.useState(null);
    const [updating,setUpdating] = React.useState('');
    const imagePreview = (item) => {
        setVisible(!visible)
        let imagePreview = [];
        imagePreview.push(item);
        imagePreview.map(data => {
            if(data.id === item.id) {
                setPreviewImage(data.image)
            }
        })
    };
    const onModalCloseButton = () => {
        setVisible(false)
    }
    let a;
    return (
        <ScrollView
            style={{
                backgroundColor: '#FEF6E8'
            }}
        >
            <View
                style={{
                    width: '100%',
                    height: 210,
                    borderWidth: 1
                }}
            >
                <ImageBackground
                    resizeMode="cover"
                    source={images.newArrivalsBanner}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 16,
                                fontWeight: '600'
                            }}
                        >Home  /  New Arrivals</Text>
                        <Text

                            style={{
                                color: '#fff',
                                fontSize: 42,
                                // scaleY: 1.4,
                                lineHeight: 62

                            }}
                        >NEW ARRIVALS</Text>
                        <Text
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                width: '33%',
                                height: 3.5
                            }}
                        ></Text>
                    </View>
                </ImageBackground>
            </View>
            <View
                style={{
                    marginTop: 35,
                    padding: 15
                }}
            >
                <Text
                    style={{
                        color: '#1A1A1A',
                        fontSize: 19.5,
                        fontWeight: 'bold',
                        // fontStyle:'italic',
                        paddingBottom: 5,
                        borderBottomWidth: 1,
                    }}
                >Diwali Collections!!! </Text>
                <View
                    style={{
                        marginTop: 10
                    }}
                >
                    {
                        newArrivalsData &&
                        newArrivalsData.map((data, index) => {
                            return (
                                <View
                                    key={`image-${index}`}
                                    style={{
                                        marginBottom: 35
                                    }}
                                >
                                    <TouchableOpacity
                                    onPress = {() => imagePreview(data)}
                                    // onPress = {()=>a = data}
                                    >
                                    <View
                                        // onStartShouldSetResponder={
                                        //     () => {
                                        //         setVisible(true)
                                        //     }
                                        // }
                                        style={{
                                            borderWidth: 4,
                                            borderColor: '#444',
                                            backgroundColor: '#fff',
                                            alignItems: 'center',
                                            height: 175
                                        }}
                                    >
                                        <Image
                                            source={data.image}
                                            resizeMode="contain"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        />
                                    </View>
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            marginTop: 5
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: '#EC286F',
                                                fontSize: 16,
                                                fontWeight: 'bold',
                                                opacity: .79,
                                                marginBottom: 4,
                                                // scaleY: 1.4,
                                            }}
                                        >{data.name}</Text>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontWeight: '400',
                                                color: '#151515'
                                            }}
                                        >Code: {data.code}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <View>
                <FooterOrderNav />
            </View>
            <Modal
        visible={visible}
        onRequestClose={() => setVisible(false)}
        transparent
        animationType="slide"
        hardwareAccelerated
        style={{

        }}
    >
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View
                style={{
                    backgroundColor: '#fff',
                    width: '90%',
                    height: 300,
                    padding: 10
                }}
            >
                    <Text
                    style = {{
                        position:'absolute',
                        right:0,
                        zIndex:1,
                        fontSize:25
                    }}
                    onPress = {onModalCloseButton}
                    >close</Text>
                <Image
                    resizeMode="cover"
                    source={previewImage}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>
        </View>
    </Modal>
    
    {console.log(a,'a')}
        </ScrollView>
    );
};
export default NewArrivals



            {/* <View

                onStartShouldSetResponder={() => {
                    // alert('you clicked')
                    setVisible(true)

                }}>
                <Text>click  here</Text>
                <Modal
                    visible={visible}
                    onRequestClose={() => setVisible(false)}
                    transparent
                    animationType="slide"
                    hardwareAccelerated
                >
                    <View
                    style = {{
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    >
                        <Text>Modal had opened</Text>
                    </View>
                </Modal>
            </View> */}