// import React from 'react';
// import { Dimensions, Image, ScrollView, View } from 'react-native';
// import { secondBannerData } from '../../../assets/AppData/AppData';

// const BannerPaginationTwo = () => {
//   const scrollRef = React.createRef();
//   const [selectedIndex, setSelectedIndex] = React.useState(0);
//   function fun() {
//     scrollRef.current.scrollTo({
//       animated: true,
//       x: (Dimensions.get('window').width) * selectedIndex,
//       y: 0
//     })
//   }
//   // React.useEffect(() => {
//   //   setInterval(() => {
//   //     setSelectedIndex(
//   //       selectedIndex === secondBannerData.length - 1 ?
//   //         0 : selectedIndex + 1),
//   //         fun();
//   //   }, 1000);
//   // }, []);
//   const selectedIndexFun = event => {
//     const contentOffset = event.nativeEvent.contentOffset;
//     const viewSize = event.nativeEvent.layoutMeasurement;
//     const selectedIndex2 = Math.floor(contentOffset.x / viewSize.width);
//     setSelectedIndex(selectedIndex2)
//   }
//   return (
//     <View
//       style={{ width: '100%', height: '100%' }}
//     >
//       <ScrollView
//         horizontal
//         pagingEnabled
//         onMomentumScrollEnd={selectedIndexFun}
//         ref={scrollRef}
//       >
//         {
//           secondBannerData?.map((data, index) => (
//             <View
//               key={`pic-${index}`}
//             >
//               <Image
//                 source={data}
//                 resizeMode="cover"
//                 style={{
//                   width: Dimensions.get('window').width,
//                   height: '100%'
//                 }}
//               />
//             </View>
//           ))
//         }
//       </ScrollView>
//       {/* <View>
//         {
//           secondBannerData?.map((data, index) => (
//             <View
//               style={[
//                 {
//                   width: 6,
//                   height: 6,
//                   borderRadius: 3,
//                   margin: 5,
//                   backgroundColor: "#fff"
//                 },
//                 { opacity: index === selectedIndex ? 0.5 : 1 }
//               ]}
//               key={data}
//               active={index === selectedIndex}
//             >

//             </View>
//           ))
//         }
//       </View> */}
//     </View>
//   );
// };

// export default BannerPaginationTwo


import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image,Text, ImageBackground, TouchableOpacity } from "react-native";
import { secondBannerData } from "../../../assets/AppData/AppData";
import { withNavigation } from 'react-navigation';
import { Link } from "@react-navigation/native";
const DEVICE_WIDTH = Dimensions.get("window").width;

class BannerPaginationTwo extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.scrollRef = React.createRef();
  }
  
  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === secondBannerData.length - 1
              ? 0
              : prev.selectedIndex + 1
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: DEVICE_WIDTH * this.state.selectedIndex,
            y: 0
          });
        }
      );
    }, 3000);
  };

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ selectedIndex });
  };

  render() {
    const { images } = this.props;
    const { selectedIndex } = this.state;
    return (
       <View
      style={{
        height:500,
        width: "100%",
        borderWidth:1,
        backgroundColor:'#1a1a1a'
        }}
        >
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
        >
          {secondBannerData?.map(image => (
            <View  key={image}>
            <ImageBackground
              style={styles.backgroundImage}
              source={image}
            >
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
         <Link
            style = {{
              position:'absolute',
              top:'50%',
              backgroundColor:'#EC286F',
              paddingVertical:8,
              paddingHorizontal : 12,
              color:'#ffffff',
              fontSize:17,
              borderTopRightRadius:40,
              borderBottomRightRadius:40
            }}
            to={{screen:'NewArrivals'}}
            > NEW ARRIVALS</Link>
        <View style={styles.circleDiv}>
          {secondBannerData?.map((image, i) => (
            <View
              style={[
                styles.whiteCircle,
                // { opacity: i === selectedIndex ? 0.5 : 1 },
                {backgroundColor : i===selectedIndex?'#EC286F':'#fff'}
              ]}
              key={image}
              active={i === selectedIndex}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: Dimensions.get("window").width
  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    paddingRight:50,
    height: 10
  },
  whiteCircle: {
    width: 10,
    height: 10,
    borderRadius:50,
    margin: 5,
    // backgroundColor: "#fff"
  }
});

export { BannerPaginationTwo };