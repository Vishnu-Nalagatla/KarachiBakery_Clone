import React from 'react'
import { View, Text } from 'react-native'

const Modals = () => {
    return (
        <Modal
        visible={true}
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
                {
                    function imagePreview(data) {
                      console.warn(data,'inside')
                    }
                }
                <Image
                    resizeMode="cover"
                    // source={item.image}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>
        </View>
    </Modal>
    )
}

export default Modals
