import React from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import HomePageBannerOne from './BannerPaginationOne'
import { BannerPaginationTwo } from './BannerPaginationTwo'
import ContentDisplay from './ContentDisplay'
import Footer from './Footer'
import HomeScreenHeader from './HomeScreenHeader'

const HomeScreenContainer = ({navigation}) => {
    const openDrawer = () =>{
        navigation.openDrawer();
    }
    return (
        <ScrollView
            style={{
                backgroundColor: '#FEF6E8'
            }}
        >
            <HomeScreenHeader openDrawer = {openDrawer}/>
            <View
                style={{
                    paddingHorizontal: 15,
                }}
            >
                <HomePageBannerOne />
                <BannerPaginationTwo />
            </View>
            <ContentDisplay />
            <Footer />
        </ScrollView>
    )
}

export default HomeScreenContainer
