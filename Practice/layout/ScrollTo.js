import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'

const ScrollTo = () => {
    const [scrollToIndex,setScrollToIndex] = React.useState(0); 
    const [dataSource,setDataSource] = React.useState([]);
    const [ref,setRef] = React.useState(null);
    const [dataSourceCords,setDataSourceCords] = React.useState([]);
    React.useEffect(() =>{
        callApi();
    },[])
    const callApi = () => {
        const URL = 'https://jsonplaceholder.typicode.com/comments';
        fetch(URL)
        .then(resp =>resp.json())
        .then(data =>setDataSource(data))
        .catch(error => console.log(error))
    };
    const scrollHandler = () => {
        if(dataSourceCords.length>scrollToIndex){
            ref.scrollTo({
                x:0,
                y:dataSourceCords[scrollToIndex-1],
                animated:true
            })
        }else{
            alert('out of max index')
        }
    }
    const itemView = (item,index) =>{
        return(
            <View 
            key={index}
            onLayout={(event) =>{
                const layout = event.nativeEvent.layout;
                dataSourceCords[index] = layout.y;
                setDataSourceCords(dataSourceCords);
                console.log(dataSourceCords);
                console.log('height',layout.height);
                console.log('width',layout.width);
                console.log('x',layout.x);
                console.log('y',layout.y);
            }}
            >
           <Text style = {styles.itemStyle}>{item.id}.{item.name}</Text>
           <ItemSeparatorView/>
            </View>
        );
    };
    const ItemSeparatorView = () => {
        return(
            <View style = {styles.itemSeparator}/>
        )
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <View style = {styles.container}>
             <View style = {styles.searchContainer}>
              <TextInput 
              value= {scrollToIndex?scrollToIndex:0}
              keyboardType='numeric'
              placeholder='enter the index to scroll'
              style = {styles.searchInput}
              onChangeText={(value) =>{
                  setScrollToIndex(
                  parseInt(value != ''?value:0)
                  )
              }}
              />
              <TouchableOpacity
              style = {styles.searchButton}
              onPress={scrollHandler}
              >
              <Text style = {styles.searchButtonText}>Go to Index</Text>
              </TouchableOpacity>
             </View>
             <ScrollView
             ref={(ref) =>{
                 setRef(ref);
             }}
             >
                 {
                     dataSource.map(itemView)
                 }
             </ScrollView>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    },
    searchContainer:{
        flexDirection:'row',
        backgroundColor:'#1e73be',
        padding:5
    },
    searchInput:{
        flex:1,
        backgroundColor:'#fff',
        padding:10
    },
    searchButton:{
        padding:15,
        backgroundColor:'#f4801e',
    },
    searchButtonText:{
        color:'#fff'
    },
    itemStyle:{
        padding:20
    },
    itemSeparator:{
        height:20,
        width:'100%',
        backgroundColor:'#cecece'
    }
})
export default ScrollTo
