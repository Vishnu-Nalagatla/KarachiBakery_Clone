import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import HomePageBannerOne from './BannerPaginationOne'
import { BannerPaginationTwo } from './BannerPaginationTwo'
import ContentDisplay from './ContentDisplay'
import Footer from './Footer'

const HomeScreenContainer = () => {
    return (
       <ScrollView>
           <View
           style = {{
            //    paddingHorizontal:20,
               backgroundColor:'#FEF6E8'
           }}
           >
              <HomePageBannerOne/>
              <View style={{paddingHorizontal:16.5}}>
              <BannerPaginationTwo/>
              </View>
              <ContentDisplay/>
              <Footer/>
           </View>
       </ScrollView>
    )
}

export default HomeScreenContainer
