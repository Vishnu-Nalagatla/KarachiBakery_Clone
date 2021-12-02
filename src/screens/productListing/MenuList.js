import React from 'react'
import { View, Text, Modal, ScrollView, Image, TouchableOpacity } from 'react-native'
import { productListPageData } from '../../assets/AppData/AppData';

const MenuList = ({modalOpen,setModalOpen}) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => setModalOpen(!modalOpen)}
                style={{
                    position: "absolute",
                    bottom: 40,
                    right: 10,
                    height: 60,
                    width: 60,
                    borderRadius: 50,
                    borderWidth: 5,
                    borderColor: '#fff',
                    backgroundColor: '#CD427D',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontWeight: 'bold'
                    }}
                >Menu</Text>
            </TouchableOpacity>
            <Modal
                visible={modalOpen}
                transparent
                onRequestClose={
                    () => {
                        setModalOpen(!modalOpen)
                    }
                }
                animationType="slide"
                hardwareAccelerated
            // statusBarTranslucent
            >
                <View
                    style={{
                        width: '100%',
                        height: 300,
                        backgroundColor: '#fff',
                        borderTopRightRadius: 40,
                        borderTopLeftRadius: 40,
                        position: 'absolute',
                        bottom: 0,
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            bottom: 20,
                            right: 30,
                            zIndex: -1
                        }}
                        onPress={() => setModalOpen(!modalOpen)}
                    >
                        <Image
                            source={require('../../assets/images/close-img.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25
                            }}
                            onpre
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            width: '70%',
                            paddingTop: 15,
                            paddingBottom: 25
                        }}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            {
                                productListPageData?.map(data => (
                                    <Text
                                        key={data.menuName}
                                        style={{
                                            paddingVertical: 14,
                                            borderBottomWidth: .8,
                                            borderBottomColor: '#efefef',
                                            fontSize: 16,
                                            letterSpacing: .5,
                                            fontWeight: '500',
                                            color: '#000',
                                            opacity: .7
                                        }}
                                    >{data.menuName}</Text>
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </>
    );
};
export default MenuList
