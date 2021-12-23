import React from 'react'
import { View, Text, Modal, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { productListPageData } from '../../assets/AppData/AppData';

const MenuList = ({ modalOpen, setModalOpen , scrollHandler }) => {

    return (
        <>
            <TouchableOpacity
                onPress={() => setModalOpen(!modalOpen)}
                style={styles.menuModalContainer}>
                <Text style={styles.menuText}>
                    Menu
                </Text>
            </TouchableOpacity>
            <Modal
                visible={modalOpen}
                transparent
                onRequestClose={() => setModalOpen(!modalOpen)}
                animationType="slide"
                hardwareAccelerated
            // statusBarTranslucent
            >
                <View style={styles.menuModalContentContainer}>
                    <TouchableOpacity
                        style={styles.closeBtnContainer}
                        onPress={() => setModalOpen(!modalOpen)}>
                        <Image
                            source={require('../../assets/images/close-img.png')}
                            resizeMode="contain"
                            style={styles.closeBtnImg} />
                    </TouchableOpacity>
                    <View style={styles.itemListContainer}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            {
                                productListPageData?.map((data,index) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalOpen(!modalOpen)
                                            scrollHandler(index)
                                        }}
                                    >
                                        <Text
                                            key={data.menuName}
                                            style={styles.listNameTxt}>
                                            {data.menuName}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </>
    );
};
const styles = StyleSheet.create({
    menuModalContainer: {
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
    },
    menuText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    menuModalContentContainer: {
        width: '100%',
        height: 300,
        backgroundColor: '#fff',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center'
    },
    closeBtnContainer: {
        position: 'absolute',
        bottom: 20,
        right: 30,
        zIndex: -1
    },
    closeBtnImg: {
        width: 25,
        height: 25
    },
    itemListContainer: {
        width: '70%',
        paddingTop: 15,
        paddingBottom: 25
    },
    listNameTxt: {
        paddingVertical: 14,
        borderBottomWidth: .8,
        borderBottomColor: '#efefef',
        fontSize: 16,
        letterSpacing: .5,
        fontWeight: '500',
        color: '#000',
        opacity: .7
    }
})
export default MenuList
