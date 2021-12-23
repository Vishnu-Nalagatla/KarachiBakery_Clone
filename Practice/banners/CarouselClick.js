import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CarouselClick = ({item}) => {
    return (
        <View style = {styles.cardView}>
        <Image 
        style = {styles.img} 
        source={item.image}
        resizeMode='cover'
        />
    </View>
);
};
const styles = StyleSheet.create({
cardView: {
    flex: 1,
    width: width - 20,
    height: height/3,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10
},
textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5
},
img: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10
},
itemTitle: {
    color: '#fff',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5
},
itemDescription: {
    color: '#fff',
    fontSize:12,
    shadowColor:'#000',
    shadowOffset:{width:0.8,height:0.8},
    shadowOpacity:1,
    shadowRadius:3,
    elevation:5
}
})

export default CarouselClick
