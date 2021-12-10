import React from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, ScrollView } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { productListPageData } from '../../assets/AppData/AppData';
import Items from './Items';
const SearchFilter = ({navigation}) => {
    const [searchValue, setSearchValue] = React.useState('');
    const onInputChange = value => {
        if (value === " ") {
            setSearchValue(value)
        }
        setSearchValue(value)
    }
    return (
        <View style={styles.searchFilterContainer}>
            <View style={styles.searchBar}>
                <FontAwesome5
                    name="arrow-left"
                    color="#000"
                    size={20}
                    onPress = {() => navigation.goBack()}
                />
                <View style={styles.inputTextContainer}>
                    <TextInput
                        placeholder="Search items"
                        style={styles.inputText}
                        // keyboardType="numbers-and-punctuation"
                        keyboardAppearance="light"
                        value={searchValue}
                        onChangeText={onInputChange}
                    />
                    {
                        searchValue.length > 0 &&
                        <View style={{
                            width: 15,
                            height: 15,
                            backgroundColor: 'gray',
                            borderRadius: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <FontAwesome
                                name="close"
                                color="#fff"
                                size={13}
                                onPress={() => setSearchValue('')}
                            />
                        </View>
                    }
                </View>
            </View>
            <ScrollView
            >
                {
                    productListPageData?.map(data => {
                        return (
                            <View key={data.id}>
                                {
                                    data.menuData.map(item => {
                                        return (
                                            <View key={item.id}>
                                                {
                                                    item.itemData
                                                        .filter(product =>
                                                            (product.name.toLocaleLowerCase()
                                                                .includes(searchValue.toLocaleLowerCase()))
                                                            && searchValue.length > 0)
                                                        .map(items => (
                                                            <Items items={items} data={data} key={items.id} />
                                                        ))
                                                }
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }
                {/* <FlatList 
                data = {productListPageData}
                renderItem = {({item}) =>{
                    item?.map(data => {
                        return(
                            <>
                            {
                                data.menuData.map(item => {
                                    return(
                                        <>
                                        {
                                            item.itemData.map(items => (
                                              <Items items = {items} data = {data} key={items.id}/>
                                            ))
                                        }
                                        </>
                                    )
                                })
                            }
                            </>
                        )
                    })
                }}
                /> */}
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    searchFilterContainer: {
        backgroundColor: '#fff',
        padding: 10
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CD427D',
        shadowColor: '#e6e6e6',
        shadowOpacity: 0.1,
        // shadowRadius: 3.84,
        elevation: 2,
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 20
    },
    inputTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '92%'
    },
    inputText: {
        color: '#CD427D',
        fontSize: 16,
        marginLeft: 8,
        opacity: .7,

    }
})
export default SearchFilter
