import React from 'react'
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import { set } from 'react-native-reanimated';

const ScrollIntoView = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [currentIndex, setCurrentIndex] = React.useState();
    const [refFlatList, setRefFlatList] = React.useState();
    const [layout, setLayout] = React.useState();
    // console.log(layout,'layout')
    React.useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(data => {
                setData(data)
            })
            .catch(error => console.log(error, 'error'))
            .finally(() => setIsLoading(false))
    };
    const onClickItem = (item, index) => {
        setCurrentIndex(index);
        const newAr = data.map((data, index) => {
            if (item.id === data.id) {
                return {
                    ...data,
                    selected: true
                }
            }
            return {
                ...data,
                selected: false
            }
        })
        setData(newAr)
    }
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={{
                    height: 160
                }}
                onPress={() => onClickItem(item, index)}
            // onLayout = {event => setLayout(event.nativeEvent.layout)}
            >
                <Text
                >{item.name}</Text>
            </TouchableOpacity>
        )
    };
    const onScrollToItem = () => {
        refFlatList.scrollToIndex({ animated: true, index: currentIndex })
    }
    const getItemLayout = (data, index) => {
        return { length: 160, offset: 160 * index, index }
    }
    return (
        <View
            style={{
                flex: 1
                // most important
            }}
        >
            {
                isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        getItemLayout={getItemLayout}
                        ref={ref => setRefFlatList(ref)}
                        // onLayout={event => setLayout(event.nativeEvent.layout)}
                    />
                )
            }
            <TouchableOpacity
                onPress={onScrollToItem}
            >
                <Text>Scroll to Index</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScrollIntoView
