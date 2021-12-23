import React from 'react';
import {
    Button,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { ProductListingHeader } from '.';
import { productListPageData } from '../../assets/AppData/AppData';
import { Link } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MenuList from './MenuList';
import Items from './Items';
import VegOnly from './VegOnly';
import PlpOffers from '../../components/PlpOffers';
import GlobalStyles from '../../utils/GlobalStyles';
import CurrentLocationPlp from '../../components/deliveryComponents/CurrentLocationPlp';
const ItemsList = ({ navigation }) => {
    let listViewRef;
    const [modalOpen, setModalOpen] = React.useState(false);
    const [headerModal, setHeaderModal] = React.useState(false);
    const [itemsToShow, setItemsToShow] = React.useState(5);
    const [cartItems, setCartItems] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const [vegOnly, setVegOnly] = React.useState(false);
    const addItemToCart = (product) => {
        setCount(count + 1);
        let itemsInCart = cartItems.slice();
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
    return (
        <>
            <ScrollView
                ref={(ref) => {
                    listViewRef = ref;
                }}
            >
                <CurrentLocationPlp navigation={navigation} />
                <ProductListingHeader
                    headerModal={headerModal}
                    setHeaderModal={setHeaderModal} />
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
                        <View style={[styles.exploreMenu, GlobalStyles.flexDirection]}>
                            <Image style={[styles.exploreMenuImg]} source={require('../../assets/itemsList/menu-icon.png')} />
                            <Text style={styles.exploreMenuTxt}>
                                Explore Menu
                            </Text>
                        </View>
                        <View style={styles.productsContainer}>
                            {productListPageData?.map(data => (
                                <TouchableOpacity
                                    key={data.id}
                                    style={{
                                        width: '23%',
                                        height: 90,
                                        marginTop: 10,
                                    }}
                                    activeOpacity={0.3}>
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
                    <View style={styles.menuDataContainer}>
                        {productListPageData?.
                            filter(filteredData => {
                                if (vegOnly) {
                                    return filteredData.category === 'veg'
                                } else {
                                    return filteredData
                                }
                            })
                            .map(data => {
                                return (
                                    <View key={data.id}>
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
                                            {data.menuData?.map(item => {
                                                return (
                                                    <View key={item.id}>
                                                        <Text style={styles.itemDescription}>
                                                            {item.itemDescp}
                                                        </Text>
                                                        <View
                                                            style={{
                                                                marginTop: 50,
                                                            }}>
                                                            {item.itemData && item.itemData
                                                                .filter((items, index) => index < itemsToShow)
                                                                .map(items => (
                                                                    <Items
                                                                        items={items}
                                                                        key={items.id}
                                                                        data={data}
                                                                        addItemToCart={addItemToCart}
                                                                    />
                                                                )
                                                                )}
                                                        </View>
                                                        {item.itemData.length > 5 &&
                                                            itemsToShow <= item.itemData.length ? (
                                                            <View style={styles.seeMoreBtn}>
                                                                <TouchableWithoutFeedback
                                                                    // onPress={() => showMoreFun(item)}
                                                                    style={[styles.seeMoreBtn, { height: 0 }]}>
                                                                    <Text style={{ textAlign: 'center', }}>
                                                                        see More
                                                                    </Text>
                                                                </TouchableWithoutFeedback>
                                                            </View>
                                                        ) : null}
                                                    </View>
                                                );
                                            })}
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
                    setModalOpen={setModalOpen} />
            </View>
            {
                cartItems.length > 0 && (
                    <View style={styles.itemsListCartContainer}>
                        <View style={styles.itemsListCartContent}>
                            <View>
                                <FontAwesome5
                                    name="shopping-bag"
                                    size={30}
                                    color="#fff"
                                />
                                <View style={styles.countContainer}>
                                    <Text style={styles.countText}>
                                        {count}
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.totalPrice}>
                                Rs--
                                {
                                    cartItems.reduce((a, v) => a + v.quantity * v.price, 0)
                                }.00
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Link
                                to={{
                                    screen: 'cart',
                                    params: { cartItems: { cartItems }, addItemInCart: { addItemToCart } }
                                }}
                                style={styles.cartLink}
                            >View Cart</Link>


                            <FontAwesome5
                                name="arrow-right"
                                size={15}
                                color='#fff'
                            />
                        </View>
                    </View>)
            }
        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#fff',
        padding: 10,
    },
    exploreMenu: {
        paddingTop: 20,
    },
    exploreMenuImg: {
        backgroundColor: '#cd427d',
        width: 22,
        height: 22,
    },
    exploreMenuTxt: {
        fontSize: 18,
        color: '#33373D',
        fontWeight: 'bold',
        opacity: 0.8,
        paddingLeft: 5,
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
    itemsListCartContainer: {
        backgroundColor: '#CD427D',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemsListCartContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    countContainer: {
        position: 'absolute',
        left: 15,
        backgroundColor: 'red',
        width: 25,
        height: 25,
        borderRadius: 50
    },
    countText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    totalPrice: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    cartLink: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
    }
})
export default ItemsList;
