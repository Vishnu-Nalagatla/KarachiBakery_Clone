import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ProductListingHeader} from '.';
import {productListPageData} from '../../assets/AppData/AppData';
import {Link} from '@react-navigation/native';
import MenuList from './MenuList';
const ItemsList = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [headerModal, setHeaderModal] = React.useState(false);
  const [itemsToShow, setItemsToShow] = React.useState(5);
  const [cartItems, setCartItems] = React.useState([]);
  const addItemToCart = product => {
    let itemsInCart = cartItems.slice();
    let isExist = false;
    itemsInCart.forEach(item => {
      if (item.id === product.id) {
        item.quantity++;
        isExist = true;
      }
    });
    if (!isExist) {
      itemsInCart.push({...product, quantity: 1});
    }
    setCartItems(itemsInCart);
  };
  return (
    <>
      <ScrollView>
        <ProductListingHeader
          modalOpen={headerModal}
          setModalOpen={setHeaderModal}
        />
        <View
          style={{
            backgroundColor: modalOpen || headerModal ? '#000' : null,
            opacity: modalOpen || headerModal ? 0.5 : null,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#33373D',
                fontWeight: 'bold',
                opacity: 0.8,
                paddingTop: 30,
              }}>
              Explore Menu
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                paddingTop: 10,
              }}>
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
                    <Text
                      style={{
                        textAlign: 'center',
                        position: 'absolute',
                        bottom: 10,
                        left: '-50%',
                        right: '-50%',
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      {data.menuName}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 12.5,
              marginTop: 20,
              paddingTop: 25,
              backgroundColor: '#fff',
            }}>
            {productListPageData?.map(data => {
              return (
                <View key={data.id} style={{}}>
                  <View
                    style={{
                      width: '100%',
                      height: 160,
                    }}>
                    <Image
                      source={data.menuImage}
                      resizeMode="cover"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderTopLeftRadius: 11,
                        borderTopRightRadius: 11,
                      }}
                    />
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: 20,
                        left: 5,
                        fontSize: 26,
                        color: 'red',
                        fontWeight: 'bold',
                      }}>
                      {data.menuName}
                    </Text>
                  </View>
                  <View
                    style={{
                      padding: 15,
                      borderWidth: 1,
                      borderTopWidth: 0,
                      borderColor: '#e7eced',
                      shadowColor: 'gray',
                      shadowOpacity: 0.25,
                      // shadowRadius: 3.84,
                      elevation: 0.4,
                    }}>
                    {data.menuData?.map(item => {
                      return (
                        <View style={{}} key={item.id}>
                          <Text
                            style={{
                              color: '#CD427D',
                              fontSize: 20,
                              fontWeight: 'bold',
                            }}>
                            {item.itemDescp}
                          </Text>
                          <View
                            style={{
                              marginTop: 50,
                            }}>
                            {item.itemData &&
                              item.itemData
                                .filter((items, index) => index < itemsToShow)
                                .map(items => (
                                  <View
                                    key={items.id}
                                    style={{
                                      borderBottomWidth: 0.8,
                                      borderBottomColor: 'lightgray',
                                      marginBottom: 20,
                                    }}>
                                    <Image
                                      source={
                                        data.category == 'veg'
                                          ? require('../../assets/images/veg-icon.jpg')
                                          : require('../../assets/images/non-veg.jpg')
                                      }
                                      style={{
                                        width: 20,
                                        height: 20,
                                      }}
                                      resizeMode="contain"
                                    />
                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                      }}>
                                      <View>
                                        <Text
                                          style={{
                                            fontSize: 18,
                                            fontWeight: '500',
                                            color: '#020202',
                                            letterSpacing: 0.5,
                                            marginTop: 10,
                                          }}>
                                          {items.name}
                                        </Text>
                                        <Text
                                          style={{
                                            color: '#585858',
                                            fontSize: 16,
                                            fontWeight: '700',
                                            marginVertical: 10,
                                          }}>{` Rs ${items.price}`}</Text>
                                      </View>
                                      <TouchableOpacity
                                        onPress={() => addItemToCart(items)}
                                        style={{
                                          width: 90,
                                          height: 35,
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          // borderRadius:7,
                                          borderWidth: 1,
                                          borderColor: '#e7eced',
                                          shadowColor: '#000',
                                          shadowOpacity: 0.25,
                                          // shadowRadius: 3.84,
                                          elevation: 0.8,
                                        }}>
                                        <Text
                                          style={{
                                            textTransform: 'uppercase',
                                            color: '#CD427D',
                                            fontWeight: 'bold',
                                          }}>
                                          add
                                        </Text>
                                      </TouchableOpacity>
                                    </View>
                                  </View>
                                ))}
                          </View>
                          {item.itemData.length > 5 &&
                          itemsToShow <= item.itemData.length ? (
                            <View
                              style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <TouchableWithoutFeedback
                                onPress={() => setItemsToShow(itemsToShow + 5)}
                                style={{
                                  // textAlign:'center'
                                  flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  height: 0,
                                }}>
                                <Text
                                  style={{
                                    textAlign: 'center',
                                  }}>
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
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View>
        <MenuList modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </View>
      {console.log(cartItems, 'cartItems')}
      {cartItems.length > 0 && (
        <View
          style={{
            backgroundColor: '#CD427D',
            padding: 10,
          }}>
          <Link to={{screen: 'cart', params: {cartItems: {cartItems}}}}>
            View Cart
          </Link>
        </View>
      )}
    </>
  );
};

export default ItemsList;
