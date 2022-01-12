// import React from 'react';
// import {View, Text, Animated, Dimensions, StyleSheet} from 'react-native';
// import CarouselOne from './CarouselOne';
// import IntroScreen from './IntroScreen';
// import LoginScreen from './LoginScreen';

// const IntroScreenContainer = () => {
//   const scrollX = new Animated.Value(0);

//   return (
//     <View>
//       <Text style={styles.skipText}>skip</Text>
//     {/* <Animated.ScrollView
//       horizontal
//       pagingEnabled
//       scrollEventThrottle={1600}
//       // snapToAlignment="center"
//       showsHorizontalScrollIndicator={false}
//       onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
//         useNativeDriver: false,
//       })}
//       style={{
//         width:'100%'
//       }}> */}
//       {/* <IntroScreen /> */}
//       {/* <LoginScreen /> */}
//       <View>
//       <CarouselOne/>
//       </View>
//     {/* </Animated.ScrollView> */}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   skipText: {
//     textAlign: 'right',
//     textTransform: 'uppercase',
//     color: '#707070',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// })
// export default IntroScreenContainer;

import React from 'react';
import {View, Text, Animated, Dimensions} from 'react-native';
import IntroScreen from './IntroScreen';

const IntroScreenContainer = () => {
  const scrollX = new Animated.Value(0);
  return (
    <View>
      <Text>skip</Text>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={1600}
        // snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width:Dimensions.get('screen').width,
            borderWidth:1
          }}>
          <View
            style={{
              width: 280,
              height: 280,
              borderRadius: 280,
              backgroundColor: '#e1e1e1',
              marginTop: 100,
            }}></View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Help with you orders</Text>
            <Text>
              We have haldiram's assistance available
              <Text> 24X7</Text>
            </Text>
          </View>
        </View>
        <IntroScreen />
      </Animated.ScrollView>
    </View>
  );
};

export default IntroScreenContainer;
