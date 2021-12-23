import React from 'react'
import { View, Text, Animated, FlatList } from 'react-native'
import { paginationOneDataObj } from '../../src/assets/AppData/AppData';
import CarouselClick from './CarouselClick';

const BannerCarousel = () => {
    const scrollX = new Animated.Value(0);
    const scrollRef = React.createRef();
    return (
        <View>
            {
                paginationOneDataObj && paginationOneDataObj.length && 
                <FlatList 
                  data={paginationOneDataObj}
                  keyExtractor={(item,index) => `key-${index}`}
                  horizontal
                  pagingEnabled
                  scrollEventThrottle={16}
                  snapToAlignment='center'
                  showsHorizontalScrollIndicator = {false}
                  renderItem={({item}) => (
                      <CarouselClick item = {item}/>
                  )}
                />
            }
        </View>
    )
}

export default BannerCarousel
