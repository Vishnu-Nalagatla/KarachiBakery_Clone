import React from 'react'
import { View, Text } from 'react-native'
const data = [
    {
        name:'csmops'
    },
    {
        name:'csmops'
    }
]
const Banner = () => {
    const [initial,setInitial] = React.useState(0);
    React.useEffect(()=>{
          setInitial(
              initial === data.length? 0:initial+1
          )
    },[]);
    console.warn(initial)
    return (
        <View>
            <Text onPress={()=>setInitial(initial+1)}>click</Text>
        </View>
    );
};
export default Banner



// import { useNavigation } from "@react-navigation/core";
// import * as React from "react";
// import { StyleSheet, View, ScrollView, Dimensions, Image,Text, ImageBackground, TouchableOpacity } from "react-native";
// import { secondBannerData } from "../../../assets/AppData/AppData";
// import { withNavigation } from 'react-navigation';
// import { Link } from "@react-navigation/native";
// const DEVICE_WIDTH = Dimensions.get("window").width;

// class BannerPaginationTwo extends React.Component {
//   scrollRef = React.createRef();
//   constructor(props) {
//     super(props);

//     this.state = {
//       selectedIndex: 0
//     };
//     this.scrollRef = React.createRef();
//   }

//   componentDidMount = () => {
//     setInterval(() => {
//       this.setState(
//         prev => ({
//           selectedIndex:
//             prev.selectedIndex === secondBannerData.length - 1
//               ? 0
//               : prev.selectedIndex + 1
//         }),
//         () => {
//           this.scrollRef.current.scrollTo({
//             animated: true,
//             x: DEVICE_WIDTH * this.state.selectedIndex,
//             y: 0
//           });
//         }
//       );
//     }, 3000);
//   };

//   setSelectedIndex = event => {
//     const contentOffset = event.nativeEvent.contentOffset;
//     const viewSize = event.nativeEvent.layoutMeasurement;

//     // Divide the horizontal offset by the width of the view to see which page is visible
//     const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
//     this.setState({ selectedIndex });
//   };

//   render() {
//     const { images } = this.props;
//     const { selectedIndex } = this.state;
//     return (
//       <TouchableOpacity 
//       style={{ 
//         height:500, 
//         width: "100%",
//         borderWidth:1,
//         backgroundColor:'#1a1a1a'
//         }}
//         // onPress = {()=>this.props.navigation.navigate('NEW ARRIVALS')}
//         >
//         <ScrollView
//           horizontal
//           pagingEnabled
//           onMomentumScrollEnd={this.setSelectedIndex}
//           ref={this.scrollRef}
//         >
//           {secondBannerData?.map(image => (
//             <View  key={image}>
//             <ImageBackground
//               style={styles.backgroundImage}
//               source={image}
//             >
//               </ImageBackground>
//             </View>
//           ))}
//         </ScrollView>
//          <Text
//             style = {{
//               position:'absolute',
//               top:'50%',
//               backgroundColor:'#EC286F',
//               paddingVertical:8,
//               paddingHorizontal : 12,
//               color:'#ffffff',
//               fontSize:17,
//               borderTopRightRadius:40,
//               borderBottomRightRadius:40
//             }}
//             > NEW ARRIVALS</Text>
//         <View style={styles.circleDiv}>
//           {secondBannerData?.map((image, i) => (
//             <View
//               style={[
//                 styles.whiteCircle,
//                 // { opacity: i === selectedIndex ? 0.5 : 1 },
//                 {backgroundColor : i===selectedIndex?'#EC286F':'#fff'}
//               ]}
//               key={image}
//               active={i === selectedIndex}
//             />
//           ))}
//         </View>
//       </TouchableOpacity>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   backgroundImage: {
//     height: "100%",
//     width: Dimensions.get("window").width
//   },
//   circleDiv: {
//     position: "absolute",
//     bottom: 15,
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     width: "100%",
//     paddingRight:50,
//     height: 10
//   },
//   whiteCircle: {
//     width: 10,
//     height: 10,
//     borderRadius:50,
//     margin: 5,
//     // backgroundColor: "#fff"
//   }
// });

// export { BannerPaginationTwo };