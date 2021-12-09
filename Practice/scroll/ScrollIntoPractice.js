import {
    ScrollIntoView, // enhanced View container
    wrapScrollView, // simple wrapper, no config
    wrapScrollViewConfigured, // complex wrapper, takes a config
    useScrollIntoView, // access hook for imperative usage
  } from 'react-native-scroll-into-view';
  
  // Available options with their default value
  const options = {
    // auto: ensure element appears fully inside the view (if not already inside). It may align to top or bottom.
    // top: align element to top
    // bottom: align element to bottom
    // center: align element at the center of the view
    align: 'auto',
  
    // Animate the scrollIntoView() operation
    animated: true,
  
    // By default, scrollIntoView() calls are throttled a bit because it does not make much sense
    // to scrollIntoView() 2 elements at the same time (and sometimes even impossible)
    immediate: false,
  
    // Permit to add top/bottom insets so that element scrolled into view
    // is not touching directly the borders of the scrollview (like a padding)
    insets: {
      top: 0,
      bottom: 0,
    },
  
    // Advanced: use these options as escape hatches if the lib default functions do not satisfy your needs
    computeScrollY: (scrollViewLayout, viewLayout, scrollY, insets, align) => {},
    measureElement: viewRef => {},
  };
  
  // Wrap the original ScrollView
  const CustomScrollView = wrapScrollView(ScrollView);
  
  // Use the wrapped CustomScrollView as a replacement of ScrollView
 export function MyScreen() {
    return (
      <CustomScrollView
        // Can provide default options (overrideable)
        scrollIntoViewOptions={scrollIntoViewOptions}
      >
        <ScreenContent />
      </CustomScrollView>
    );
  }
  
  // Implement ScreenContent (inner of the ScrollView) with the useScrollIntoView and refs
  function ScreenContent() {
    const scrollIntoView = useScrollIntoView();
    const viewRef = useRef();
  
    return (
      <>
        <Button
          onPress={() => {
            scrollIntoView(viewRef.current, options);
          }}
        >
          Scroll a view ref into view
        </Button>
  
        <View style={{ height: 100000 }}>
          <Text>Some long ScrollView content</Text>
        </View>
  
        <View ref={viewRef}>
          <Text>Will be scrolled into view on button press</Text>
        </View>
      </>
    );
  }
  
  // Or implement ScreenContent (inner of the ScrollView) with class + declarative ScrollIntoView component
//   class ScreenContent extends React.Component {
//     render() {
//       return (
//         <>
//           <ScrollIntoView>
//             <Text>This will scroll into view on mount</Text>
//           </ScrollIntoView>
  
//           <ScrollIntoView align="center">
//             <Text>This will scroll into view on mount and will be centered</Text>
//           </ScrollIntoView>
  
//           <ScrollIntoView animated={false}>
//             <Text>This will scroll into view on mount without any animation</Text>
//           </ScrollIntoView>
  
//           <ScrollIntoView immediate={true}>
//             <Text>
//               This will not throttle scrollIntoView calls, as by default it does
//               not make much sense to scroll into view multiple elements at the
//               same time...
//             </Text>
//           </ScrollIntoView>
  
//           <ScrollIntoView enabled={false}>
//             <Text>This will scroll into view whenever enabled becomes true</Text>
//           </ScrollIntoView>
  
//           <ScrollIntoView scrollIntoViewKey="some string">
//             <Text>
//               This will scroll into view whenever scrollIntoViewKey changes
//             </Text>
//           </ScrollIntoView>
  
//           <ScrollIntoView
//             onMount={false}
//             onUpdate={true}
//             scrollIntoViewKey="some string"
//           >
//             <Text>
//               This will scroll into on update (if it becomes enabled, or key
//               changes)
//             </Text>
//           </ScrollIntoView>
  
//           <ScrollIntoView scrollIntoViewOptions={options}>
//             <Text>
//               This will scroll into view on mount with custom option props
//             </Text>
//           </ScrollIntoView>
  
//           <View>
//             <ScrollIntoView
//               enabled={false}
//               ref={ref => (this.scrollIntoViewRef = ref)}
//             >
//               <Text>This will scroll into view when the button is pressed</Text>
//             </ScrollIntoView>
//             <Button
//               title="Make above text scroll into view with custom options"
//               onPress={() =>
//                 this.scrollIntoViewRef.scrollIntoView(scrollIntoViewOptions)
//               }
//             />
//           </View>
//         </>
//       );
//     }
//   }