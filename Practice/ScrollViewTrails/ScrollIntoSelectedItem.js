import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native'

const ScrollIntoSelectedItem = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentIndex,setCurrentIndex] = useState();
    const [refFlatList,setrefFlatList] = useState();
    useEffect(() =>{
        getListPhotos();
    },[])
  const getListPhotos = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1';
        fetch(apiURL)
            .then(response => response.json())
            .then(respData => setData(respData))
            .catch(error => console.warn(error))
            .finally(() => setIsLoading(false));
    };
   const onClickItem = (item,index) => {
        setCurrentIndex(index)
        const newArrData = data.map((e,index) => {
            if(item.id == e.id) {
                return{
                    ...e,
                    selected:true
                }
            }
            return{
                ...e,
                selected:false
            }
        })
        setData(newArrData)
    }
  const  renderData = ({item,index}) => {
    return(
        <TouchableOpacity
        onPress  = {() => onClickItem(item,index)}
        >
            <Image
            source = {{uri:item.url}}
            // resizeMode = ""
            style = {{
                width:'100%',
                height:'100%'
            }}
            />
        </TouchableOpacity>
    )
    }
  const  onScrollToItemSelected = () => {
       refFlatList.scrollToIndex( {
           animated : true,
           index : currentIndex
       })
    }
  const  getItemLayout = (data,index) => {
        return{length:161,offset:161*index,index}
    }
    return (
        <View>
            {
                isLoading? <ActivityIndicator/>:(
                    <FlatList
                    data = {data}
                    renderItem = {renderData}
                    keyExtractor = {item => `key-${item.id}`}
                    getItemLayout = {getItemLayout}
                    ref = {ref => setrefFlatList(ref)}
                    />
                )
            }
            <TouchableOpacity
            onPress = {onScrollToItemSelected}
            >
                <Text>scroll to item selected</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ScrollIntoSelectedItem
