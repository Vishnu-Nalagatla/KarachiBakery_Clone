import React from 'react';
import { Dimensions, ImageBackground, ScrollView, View } from 'react-native';
import { secondBannerData } from '../../src/assets/AppData/AppData';
const DEVICE_WIDTH = Dimensions.get('window').width;
const Carousel =() =>{
    const flatList = React.createRef();
    const [selectedIndex,setSelectedIndex] = React.useState(0);
    const [ref,setRef] = React.useState(flatList);

    // React.useEffect(()=>{
    //    setInterval(()=>{
    //        const index = selectedIndex === secondBannerData.length-1?0:selectedIndex+1;
    //        setSelectedIndex(index),
    //        console.warn(selectedIndex),
    //        ref.current.scrollTo({
    //            animated:true,
    //            x:DEVICE_WIDTH * selectedIndex,
    //            y:0
    //        })
    //    },2000)
    // },[]);
    const scrollHandler = event =>{
        const contentOffset = event.nativeEvent.contentOffset
        const viewSize = event.nativeEvent.layoutMeasurement;
        const selectedIndex = Math.floor(contentOffset.x/viewSize.width);
        setSelectedIndex(selectedIndex);
    };
    return(
        <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={scrollHandler}
        ref={ref}
        >
            {
                secondBannerData?.map(image =>(
                    <View  key={image}>
                    <ImageBackground
                      style={{
                         height:'59%',
                         width:Dimensions.get("window").width
                      }}
                      source={image}
                    >
                      </ImageBackground>
                    </View> 
                ))
            }
        </ScrollView>
    );
};

export default Carousel