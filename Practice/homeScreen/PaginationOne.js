import React from 'react';
import { Animated, Dimensions, Image, ScrollView, View } from 'react-native';
import { paginationOne } from '../../assets/AppData/AppData';
const PaginationOne = () => {
    const scrollX = new Animated.Value(0);
    const pagination = () => {
    const deviceWidth = Dimensions.get('window');
    const dotPosition = Animated.divide(scrollX, deviceWidth);
    return (
        <View>
            <View>
                {
                    paginationOne?.map((data, index) => {
                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        });
                        const dotSize = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [5, 10, 5],
                            extrapolate: 'clamp'
                        });
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: ['gray', 'red','blue'],
                            extrapolate: 'clamp'
                        });
                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                opacity={opacity}
                            >
                            </Animated.View>
                        )
                    })
                }
            </View>
        </View>
    );
}
    return (
        <>
   <Animated.ScrollView
   horizontal
   pagingEnabled
   scrollEventThrottle = {16}
   snapToAlignment = "center"
   onScroll = {
       Animated.event([
           {nativeEvent:{contentOffset:{x:scrollX}}}
       ],{useNativeDriver:false})
   }
   >
  {
      paginationOne?.map(data=>(
          <View key={`${data}`}>
              <Image source = {data}/>
          </View>
      ))
  }
   </Animated.ScrollView>
   {pagination()}
   </>
  )
};

export default PaginationOne