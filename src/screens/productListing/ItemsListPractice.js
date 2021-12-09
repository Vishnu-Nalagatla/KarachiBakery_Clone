import React from 'react'
import { View, Text } from 'react-native'
import { productListPageData } from '../../assets/AppData/AppData'

const ItemsListPractice = () => {
    return (
        <View>
   {
       productListPageData ?.map(data => {
           return(
               <>
               <Text>{data.menuName}</Text>
               {
                   data.menuData.map(de => (
                       <>
                       <Text>{de.itemDescp}</Text>
                       {
                           de.itemData.map(da => (
                               <Text>{da.name}</Text>
                           ))
                       }
                       </>
                   ))
               }
               </>
           )
       })
   }
        </View>
    )
}

export default ItemsListPractice
