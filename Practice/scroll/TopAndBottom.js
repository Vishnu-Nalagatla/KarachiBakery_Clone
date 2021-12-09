import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

const TopAndBottom = () => {
    let listViewRef;
    const [itemData, setItemData] = React.useState([
        { id: 1, item: 'item1st' },
        { id: 2, item: 'item1' },
        { id: 3, item: 'item1' },
        { id: 4, item: 'item1' },
        { id: 5, item: 'item1' },
        { id: 6, item: 'item1' },
        { id: 7, item: 'item1' },
        { id: 8, item: 'item1' },
        { id: 9, item: 'item1' },
        { id: 10, item: 'item1' },
        { id: 11, item: 'item1' },
        { id: 12, item: 'item1' },
        { id: 13, item: 'item1' },
        { id: 14, item: 'item1' },
        { id: 15, item: 'item1' },
        { id: 16, item: 'item1' },
        { id: 17, item: 'item1' },
        { id: 18, item: 'item1ast' },
    ]);
    const ItemSeparatorView = () => {
        return (
            <View style={styles.seperator} />
        );
    };
    const ItemView = ({ item }) => {
        return (
            <Text style={styles.itemStyle}>
                {item.id} {'. '}{item.item.toUpperCase()}
            </Text>
        )
    };
    const TopButtonHandler = () => {
        listViewRef.scrollToOffset({offset:0,animated:true})
    }
    const EndButtonHandler = () => {
        listViewRef.scrollToEnd({animated:true});
    }
    return (
        <View>
          
            <FlatList
                data={itemData}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                ref = {(ref) =>{
                    listViewRef = ref;
                }}
            />
            <TouchableOpacity
                style={
                    [styles.buttonStyle,{right:30,top:70}]
                }
                onPress = {EndButtonHandler}
            >
                <Text style={styles.text}>go to end</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={
                    [styles.buttonStyle,{right:30,bottom:70}]
                }
                onPress = {TopButtonHandler}
            >
                <Text style={styles.text}>go to top</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    seperator: {
        height: 5,
        width: '100%',
        backgroundColor: '#c8c8c8'
    },
    itemStyle: {
        padding: 50,
        fontSize: 20
    },
    buttonStyle: {
        position: 'absolute',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    text: {
        fontSize:20
    }
})
export default TopAndBottom
