import React from 'react'
import { View, Text, FlatList,Animated,Dimensions, StyleSheet } from 'react-native'
import BannerCarousel from './banners/BannerCarosel';
const {width,height} = Dimensions.get('window');
const bannerData = [
    {
        title:'something',
        description:'nothing',
        urlLink:'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg'
    },
    {
        title:'something',
        description:'nothing',
        urlLink:'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
    },  {
        title:'something',
        description:'nothing',
        urlLink:'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg'
    },  {
        title:'something',
        description:'nothing',
        urlLink:'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
    },  {
        title:'something',
        description:'nothing',
        urlLink:'https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg'
    },
];
let flatLis;
let scrollValue = 0
let scrolled = 0;
const infiniteScroll =(dataList) =>{
   const numOfData = dataList.length;
   setInterval(function(){
      scrolled ++
      if(scrolled<numOfData)
      scrollValue = scrollValue+width
      else{
          scrollValue = 0;
          scrolled = 0;
      }
      flatLis.scrollToOffset({animated:true,offset:scrollValue})
   },2000)
}
const BannerCarouselContainer = () => {
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX,width);
    const [dataList,setDataList] = React.useState([bannerData]);
    React.useEffect(()=>{
        setDataList(bannerData)
        infiniteScroll(dataList)
    })
    return (
        <View>
            <FlatList
            data={bannerData}
            ref={(flatList) => {flatLis = flatList}} 
            keyExtractor={(item,index) => 'key'+index}
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment='center'
            scrollEventThrottle={16}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator = {false}
            renderItem={({item}) => {
                return <BannerCarousel item = {item} />
            }}
            onScroll={Animated.event(
                [{nativeEvent:{contentOffset:{x:scrollX}}}],
                { useNativeDriver: false }
            )}
            />

            <View style = {styles.dotView}>
                {
                    bannerData.map((_,index) =>{
                      let opacity = position.interpolate({
                          inputRange : [index-1,index,index+1],
                          outputRange:[0.3,1,0.3],
                          extrapolate:'clamp'
                      })
                      return(
                          <Animated.View
                          key = {index}
                          style = {{
                              opacity,
                              height:10,
                              width:10,
                              backgroundColor:'red',
                              margin:8,
                              borderRadius:5
                          }}
                          >

                          </Animated.View>
                      )
                    })
                }
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    dotView:{
        flexDirection:'row',
        justifyContent:'center'
    }
})
export default BannerCarouselContainer
