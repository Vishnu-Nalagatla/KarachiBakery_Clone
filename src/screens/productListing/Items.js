import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import PLPFooterCart from './PLPFooterCart';
import { connect } from 'react-redux';
import { addItemToCartPractice } from '../../redux/actions';
import CartManipulation from './CartManipulation';
import WishList from './WishList';
const Items = ({ items, data, addItemToCart, addItemToCartPra, cartData }) => {
    const [addBtnVisible, setAddBtnVisible] = React.useState(0);
    const onPressHandler = items => {
        addItemToCartPra(items);
    };
    const getIndividualItemQuantity = (quantity) =>{
        console.log(quantity,'quan')
        if(quantity>=1){
            setAddBtnVisible(quantity)
        }else{
            setAddBtnVisible(0);
        }
    };
    var exists=false;
    cartData.map(item => {
        if(item.id==items.id){
            exists=true
        }
    })
    console.log(exists,items.id,":::::::::::::::::exists");
    return (
        <>
            <View
                style={styles.itemContainer}
            >
                <Image
                    source={data.category == 'veg' ?
                        require('../../assets/images/veg-icon.jpg') :
                        require('../../assets/images/non-veg.jpg')
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
                    }}
                >
                    <View>
                        <Text style={styles.itemName}>
                            {items.name}
                        </Text>
                        <View
                        style={{
                            flexDirection:'row',
                            alignItems:'center'
                        }}
                        >
                        <Text style={styles.itemPrice}>
                            {`Rs ${items.price}`}
                        </Text>
                        <WishList items = {items}/>
                        </View>
                    </View>
                    {
                        !exists &&
                        <TouchableOpacity
                            onPress={() => onPressHandler(items)}
                            style={styles.addToCartBtn}
                        >
                            <Text
                                style={styles.addToCartBtnText}>
                                add
                            </Text>
                        </TouchableOpacity>
                    }
                    {
                        console.log(cartData,"itemData::::::::::")
                    }
                    {
                        cartData
                            .filter(itemData => itemData.id === items.id)
                            .map(item => {
                                return (
                                    <CartManipulation 
                                    items={item} 
                                    key={item.id}
                                    getIndividualItemQuantity={getIndividualItemQuantity}
                                    />
                                )
                            })
                    }
                </View>
            </View>
        </>
    )
};
const mapStateToProps = state => {
    return {
        cartData: state.cartReducerPractice.cartItems
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addItemToCartPra: (item) => dispatch(addItemToCartPractice(item))
    }
};
const styles = StyleSheet.create({
    itemContainer: {
        borderBottomWidth: 0.8,
        borderBottomColor: 'lightgray',
        marginBottom: 20,
    },
    itemContentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemName: {
        fontSize: 18,
        fontWeight: '500',
        color: '#020202',
        letterSpacing: 0.5,
        marginTop: 10,
    },
    itemPrice: {
        color: '#585858',
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 10,
        flex:2
    },
    addToCartBtn: {
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
    },
    addToCartBtnText: {
        textTransform: 'uppercase',
        color: '#CD427D',
        fontWeight: 'bold',
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Items);