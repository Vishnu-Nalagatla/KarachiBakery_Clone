import React, { useState } from 'react';
import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { ProductListingHeader } from '.';
import { productListPageData } from '../../assets/AppData/AppData';
import MenuList from './MenuList';
import VegOnly from './VegOnly';
import MenuListContainer from './MenuListContainer';
import PlpOffers from '../../components/PlpOffers';
import PLPFooterCart from './PLPFooterCart';
import Cart from '../shipping/Cart';
const ItemsList = ({ navigation }) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [headerModal, setHeaderModal] = React.useState(false);
    const [vegOnly, setVegOnly] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([]);
    const [itemsInCart, setItemsInCart] = React.useState(0);
    const [flatList, setFlatList] = React.useState(null);
    const [dataCords, setDataCords] = useState([]);
    const [yValue, setYValue] = React.useState(null);




    const addItemToCart = (product) => {
        let itemsInCart = cartItems.slice();
        console.log(`cartItems`, cartItems)
        let isExist = false;
        itemsInCart.forEach(item => {
            if (item.id === product.id) {
                item.quantity++;
                isExist = true;
            }
        });
        if (!isExist) {
            itemsInCart.push({ ...product, quantity: 1 })
        }
        setCartItems(itemsInCart)
    };
    
    const removeItemFromCart = product => {
        const isExist = cartItems.find(item => item.id === product.id);
        if (isExist.quantity === 1) {
            let filteredCart = cartItems.filter(data => data.id !== product.id);
            setCartItems(filteredCart);
        } else {
            setCartItems(cartItems.map(data =>
                data.id === product.id ?
                    { ...data, quantity: data.quantity - 1 } : data
            ))
        }
    };






    const totalAmount = cartItems.reduce((a, v) => a + v.quantity * v.price, 0);
    const totalCount = cartItems.reduce((a, v) => a + v.quantity, 0)
    //   setItemsInCart(cartItems.reduce((a,v) => a+v.quantity,0))

    const scrollHandler = (index) => {
        console.log(index, 'handindex')
        if (dataCords.length > index) {
            flatList.scrollTo({
                x: 0,
                y: dataCords[index] + yValue,
                animated: true
            })
        }

    };
    return (
        <>
            <ScrollView
                ref={ref => setFlatList(ref)}
            >
                <ProductListingHeader
                    modalOpen={headerModal}
                    setModalOpen={setHeaderModal} />
                <View style={{
                    backgroundColor: (modalOpen || headerModal) ? '#000' : null,
                    opacity: (modalOpen || headerModal) ? .5 : null,
                }}>
                    <PlpOffers></PlpOffers>
                    <View>
                        <VegOnly
                            vegOnly={vegOnly}
                            setVegOnly={setVegOnly}
                            navigation={navigation}
                        />
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.exploreMenuTxt}>
                            Explore Menu
                        </Text>
                        <View style={styles.productsContainer}>
                            {productListPageData?.map((data, index) => (
                                <TouchableOpacity
                                    key={data.id}
                                    style={{
                                        width: '23%',
                                        height: 90,
                                        marginTop: 10,
                                    }}
                                    activeOpacity={0.3}
                                    onPress={() => scrollHandler(index)}
                                >
                                    <ImageBackground
                                        source={data.menuImage}
                                        resizeMode="cover"
                                        imageStyle={{
                                            borderRadius: 7,
                                        }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}>
                                        <Text style={styles.menuNameTxt}>
                                            {data.menuName}
                                        </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View
                        style={styles.menuDataContainer}
                        onLayout={event => setYValue(event.nativeEvent.layout.y)}
                    >
                        {productListPageData?.
                            filter(filteredData => {
                                if (vegOnly) {
                                    return filteredData.category === 'veg'
                                } else {
                                    return filteredData
                                }
                            })
                            .map((data, index) => {
                                return (
                                    <View
                                        key={data.id}
                                        onLayout={event => {
                                            const layout = event.nativeEvent.layout;
                                            dataCords[index] = layout.y;
                                            setDataCords(dataCords)
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: '100%',
                                                height: 160,
                                            }}>
                                            <Image
                                                source={data.menuImage}
                                                resizeMode="cover"
                                                style={styles.menuDataImg}
                                            />
                                            <Text style={styles.menuText}>
                                                {data.menuName}
                                            </Text>
                                        </View>
                                        <View style={styles.itemsContainer}>
                                            {data.menuData?.map(item => (
                                                <MenuListContainer
                                                    key={item.id}
                                                    data={data}
                                                    item={item}
                                                    addItemToCart={addItemToCart}
                                                    removeItemFromCart={removeItemFromCart}
                                                    totalAmount={totalAmount}
                                                />
                                            ))}
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
            <View>
                <MenuList
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    scrollHandler={scrollHandler} />
            </View>
            {
                cartItems.length > 0 && (
                    <PLPFooterCart
                        totalAmount={totalAmount}
                        totalCount={totalCount}
                        itemsInCart={itemsInCart}
                        cartItems={cartItems}
                        addItemToCart={addItemToCart}
                        removeItemFromCart={removeItemFromCart}
                    />
                )
            }
        </>
    );
};
const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#fff',
        padding: 10,
    },
    exploreMenuTxt: {
        fontSize: 18,
        color: '#33373D',
        fontWeight: 'bold',
        opacity: 0.8,
        paddingTop: 30,
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: 10,
    },
    menuNameTxt: {
        textAlign: 'center',
        position: 'absolute',
        bottom: 10,
        left: '-50%',
        right: '-50%',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    menuDataContainer: {
        paddingHorizontal: 12.5,
        marginTop: 20,
        paddingTop: 25,
        backgroundColor: '#fff',
    },
    menuDataImg: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 11,
        borderTopRightRadius: 11,
    },
    menuText: {
        position: 'absolute',
        bottom: 20,
        left: 5,
        fontSize: 26,
        color: 'red',
        fontWeight: 'bold',
    },
    itemsContainer: {
        padding: 15,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#e7eced',
        shadowColor: 'gray',
        shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        elevation: 0.4,
    },
    itemDescription: {
        color: '#CD427D',
        fontSize: 20,
        fontWeight: 'bold',
    },
    seeMoreBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})
export default ItemsList;
