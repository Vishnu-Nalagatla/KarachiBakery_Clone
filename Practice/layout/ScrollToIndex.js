import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
const data = [
    {
        id: 1,
        name: 'item 1'
    },
    {
        id: 2,
        name: 'item 2'
    },
    {
        id: 3,
        name: 'item 3'
    },
    {
        id: 4,
        name: 'item 4'
    },
    {
        id: 5,
        name: 'item 5'
    },
    {
        id: 6,
        name: 'item 6'
    },
    {
        id: 7,
        name: 'item 7'
    },
    {
        id: 8,
        name: 'item 8'
    }, {
        id: 9,
        name: 'item 9'
    }, {
        id: 10,
        name: 'item 10'
    },
];

// const ScrollToIndex = () => {
//     const [flatList,setFlatList] = React.useState(2);
// // React.useEffect(()=>{
// //    setTimeout(()=>flatList.ScrollToIndex({index:3}),2000)
// // },[])
// // const renderItem = ({ item }) => {
// //     return (
// //         <View style={styles.item}>
// //             <Text>{item.name}</Text>
// //         </View>
// //     );
// // };
// // const getItemLayout = () => {
// //     return {
// //         length: styles.item.height,
// //         offset: styles.item.height * 2,
// //     };
// // }
//     return (
//         <View style={styles.itemContainer}>
//             <FlatList
//                 data={data}
//                 ref={(ref) =>setFlatList(ref)}
//                 keyExtractor={(item) => `${item.id}`}
//                 renderItem={renderItem}
//                 // getItemLayout={getItemLayout}
//             />
//         </View>
//     );
// };
// const styles = StyleSheet.create({
//     itemContainer: {
//         flex: 1,
//         backgroundColor: '#fff',
//         marginTop: 10
//     },
//     item: {
//         flex: 1,
//         height: 90,
//         backgroundColor: 'yellow',
//         justifyContent: 'center',
//         paddingLeft: 10
//     }
// })
// export default ScrollToIndex
const ScrollToIndex = () => {
    return(
        <View>
            <Text></Text>
        </View>
    );
};
export default ScrollToIndex
