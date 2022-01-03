import React from 'react';
import { Alert, ScrollView,Animated, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { paginationOneDataObj } from '../../../assets/AppData/AppData';
import { COLORS, SIZES } from '../../../constants/colors';
const Resturant = () => {
    const scrollX = new Animated.Value(0);
    const scrollRef = React.createRef();
    const [selectedIndex,setSelectedIndex] = React.useState(0);
    const [dataCords,setDataCords] = React.useState([]);
    const [flatList,setFlatList] = React.useState(null);
//   React.useEffect(() => {
//     setInterval(() => {
//        setSelectedIndex(
//            prev => prev.selectedIndex+1,
//            () => {
//             scrollRef.current.scrollTo({
//                 animated : true,
//                 y : 0,
//                 x : SIZES.width * selectedIndex
//             })
//            }
//        )
//     }, 3000);
//   },[]);
    const setSelectedIndexFun = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex1 = Math.floor(contentOffset/viewSize);
        setSelectedIndex(selectedIndex1)
    }
    const scrollHandler = (index) =>{
        if(dataCords.length>index){
            flatList.scrollTo({
                x:dataCords[index],
                y:0,
                animated:true
            })
        }
    }
    const resturantMenu = () => {
        return (
            <ScrollView
            ref={ref => setFlatList(ref)}
                horizontal
                pagingEnabled
                // scrollEventThrottle={1600000000000}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd = {setSelectedIndexFun}
                onScroll={
                    Animated.event([
                        { nativeEvent: { contentOffset: { x: scrollX } } }
                        
                    ], { useNativeDriver: false })
                }
            >
                {
                    paginationOneDataObj?.map((item, index) => {
                        return (
                            <View
                                key={`menu-${index}`}
                                style={{ alignItems: 'center' }}
                                onLayout={event =>{
                                    const layout = event.nativeEvent.layout;
                                   dataCords[index] = layout.x;
                                   setDataCords(dataCords)
                                }}
                            >
                                <View style={{
                                    height: SIZES.height * 0.35
                                }}>
                                    <Image
                                        source={item.image}
                                        resizeMode="cover"
                                        style={{
                                            width: SIZES.width,
                                            height: '100%'
                                        }}
                                    />
                                    </View>
                                </View>
                        )
                    })
                }
                {/* {console.warn(restaurant.menu)} */}
            </ScrollView>
        );
    };
    const dotsPagination = () => {
        const dotPosition = Animated.divide(scrollX, SIZES.width);
        return (
            <View style={{ height: 30 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 10
                }}>
                    {
                        paginationOneDataObj?.map((item, index) => {
                            const opacity = dotPosition.interpolate({
                                inputRange: [index - 1, index, index + 1],
                                outputRange: [0.3, 1, 0.3],
                                extrapolate: 'clamp'
                            });
                            const dotSize = dotPosition.interpolate({
                                inputRange: [index - 1, index, index + 1],
                                outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
                                extrapolate: 'clamp'
                            });
                            const dotColor = dotPosition.interpolate({
                                inputRange: [index - 1, index, index + 1],
                                outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                                extrapolate: 'clamp'
                            });
                            return (
                                <Animated.View
                                    key={`dot-${index}`}
                                    opacity={opacity}
                                    style={{
                                        borderRadius: SIZES.radius,
                                        marginHorizontal: 6,
                                        width: dotSize,
                                        height: dotSize,
                                        backgroundColor: dotColor
                                    }}
                                    onStartShouldSetResponder={()=>scrollHandler(index)}
                                />
                            )
                        })
                    }
                </View>
            </View>
        )
    }
    const renderOrder = () => {
        return (
            <View>
                {dotsPagination()}
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            {resturantMenu()}
            {renderOrder()}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    }
})
export default Resturant