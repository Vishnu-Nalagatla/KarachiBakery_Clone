// import React from 'react'
// import { View, Text, ScrollView } from 'react-native'

// const ScrollPractice = () => {
//     const [data,setData] = React.useState([]);
//     const [flatList,setFlatList] = React.useState(null);
//     React.useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(resp =>resp.json())
//         .then(data =>setData(data))
//     },[]);
//     return (
//         <ScrollView
//         ref={ref =>setFlatList(ref)}
//         >
//           {
//               data.map(data =>{
//                   return(
//                       <View
//                       onLayout={event =>console.log(event.nativeEvent.layout)}
//                       >
//                       <Text>{data.id}</Text>
//                       </View>
//                   )
//               })
//           }  
//         </ScrollView>
//     );
// };
// export default ScrollPractice


import React from 'react';
import { FlatList, View,Text, ScrollView } from 'react-native';
import { productListPageData } from '../../src/assets/AppData/AppData';

const ScrollPractice = () =>{
    const[scrollToIndex,setScrollToIndex] = React.useState(0);
    const [flatList,setFlatList] = React.useState(null);
    const [dataCords,setDataCords] = React.useState([]);
    const renderItem = ({item}) =>{
        return(
            <View>
                <Text>{item.menuName}</Text>
            </View>
        );
    };
    const scrollHandler = () =>{
        if(dataCords.length>scrollToIndex){
            flatList.scrollTo({
                x:0,
                y:dataCords[scrollToIndex-1],
                animated:true
            })
        } else{
            console.log('something happened')
        }
    };
    const onPressHandler = (index) =>{
        setScrollToIndex(index);
        console.log(index);
        scrollHandler();
    }
    return(
        <ScrollView
        ref={ref =>setFlatList(ref)}
        >
            <View>
          {
              productListPageData.map((data,index) =>(
                  <View>
                      <Text
                      onPress={()=>onPressHandler(index)}
                      >{data.menuName}</Text>
                  </View>
              ))
          }
          </View>
          <View>
              {
                  productListPageData.map((data,index) =>{
                      return(
                          <View
                          onLayout={event =>{
                              const layout = event.nativeEvent.layout;
                              console.log(layout.y)
                              dataCords[index] = layout.y;
                              setDataCords(dataCords);
                          }}
                          >
                              <Text>{data.menuName}</Text>
                              {
                                  data.menuData.map(items =>{
                                      return(
                                          <View>
                                              <Text>{items.itemDescp}</Text>
                                              {
                                                  items.itemData.map(item =>{
                                                      return(
                                                          <View>
                                                              <Text>{item.name}</Text>
                                                              <Text>{item.price}</Text>
                                                          </View>
                                                      )
                                                  })
                                              }
                                          </View>
                                      )
                                  })
                              }
                          </View>
                      )
                  })
              }
          </View>
        </ScrollView>
    );
};
export default ScrollPractice
