import React from 'react';
import { Alert, Animated, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { paginationOneDataObj } from '../../assets/AppData/AppData';
import { COLORS, SIZES } from '../../constants/colors';
const Resturant = () => {
    const scrollX = new Animated.Value(0);
    const scrollRef = React.createRef();
    const [selectedIndex,setSelectedIndex] = React.useState(0);
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
//   },[])
    const setSelectedIndexFun = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex1 = Math.floor(contentOffset/viewSize);
        setSelectedIndex(selectedIndex1)
    }
    const resturantMenu = () => {
        return (
            <Animated.ScrollView
            ref = {scrollRef}
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
                style={{ marginTop: 20 }}
            >
                {
                    paginationOneDataObj?.map((item, index) => {
                        return (
                            <View
                                key={`menu-${index}`}
                                style={{ alignItems: 'center' }}
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
            </Animated.ScrollView>
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