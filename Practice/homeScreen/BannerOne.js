import React from 'react';
import { Animated, Dimensions, Image, SafeAreaView, Text, View } from 'react-native';
import { paginationOne } from '../../src/assets/AppData/AppData';
const SIZES = {
    base : 8,
    primary: "#FC6D3F", 
    secondary: "#CDCDD2"
}
const BannerOne = () => {
    const scrollX = new Animated.Value(0);
    const bannerImages = () => {
        return(
            <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={
                Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } }
                ], { useNativeDriver: false })
            }
            style={{ marginTop: 20 }}
            >
            {
                paginationOne?.map((data,index) =>{
                    return(
                        <View
                        key = {`${index}`}
                        >
                        <Image
                        source = {data}
                        />
                        </View>
                    )
                })
            }
            </Animated.ScrollView>
        );
    };
    const dotsPagination = () => {
        const screenWidth = Dimensions.get('window');
        const dotPosition = Animated.divide(scrollX,screenWidth);
    
    return(
        <View style={{ height: 30 }}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 10
        }}>
            {
                paginationOne?.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    });
                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base*0.3, 10, SIZES.base*0.3],
                        extrapolate: 'clamp'
                    });
                    const dotColor = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.secondary,SIZES.primary,SIZES.secondary],
                        extrapolate: 'clamp'
                    });
                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            // style={{
                            //     borderRadius: SIZES.radius,
                            //     marginHorizontal: 6,
                            //     width: dotSize,
                            //     height: dotSize,
                            //     backgroundColor: dotColor
                            // }}
                        />
                    )
                })
            }
        </View>
    </View>
    );
        };
        return(
            <SafeAreaView style={{flex:1}}>
            {bannerImages()}
            {dotsPagination()}
            </SafeAreaView>
        )
};

export default BannerOne




// import React from "react";
// import { Animated, Dimensions, Image, SafeAreaView, Text, View } from "react-native";
// import { paginationOne, paginationOneDataObj } from "../../assets/AppData/AppData";

// const BannerOne = () => {
//     const bannerOneImages = () =>{
//         return(
//             <Animated.ScrollView
//             horizontal
//             pagingEnabled
//             scrollEventThrottle = {16}
//             snapToAlignment = "center"
//             showsHorizontalScrollIndicator = {false}
//             >
//                 {
//                     paginationOneDataObj?.map((images,index) => {
//                         console.warn(images.image)
//                         return(
//                         <View
//                         key = {`image-${index}`}
//                         style = {{
//                             alignItems:'center'
//                         }}
//                         >
//                         <View
//                         style = {{
//                             height:400,
//                         }}
//                         >
//                        <Image 
//                        source = {images.image}
//                        style = {{
//                            width:'100%',
//                            height:'100%'
//                        }}
//                        />
//                         </View>
//                         </View>
//                         )
//                     })
//                 }
//             </Animated.ScrollView>
//         )
//     }
//     return(
//         <SafeAreaView 
//         style = {{
//             // flex:1,
//         }}
//         >
//         {/* {bannerOneImages()} */}
//         <Animated.ScrollView horizontal>
//         {
//             paginationOne?.map(data =>(
//                 // <Text>{data}</Text>
//                 // <View style={{width:'100%'}}>
//                 <Image source = {data}/>
//                 // </View>
//             ))
//         }
//         </Animated.ScrollView>
//         </SafeAreaView>
//     )
// }

// export default BannerOne