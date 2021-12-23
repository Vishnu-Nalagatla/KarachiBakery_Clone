import React from 'react'
import { View, Text, StyleSheet,TouchableWithoutFeedback } from 'react-native'
import Items from './Items'

const MenuListContainer = ({item,data,addItemToCart,removeItemFromCart, totalAmount}) => {
    const [itemsToShow, setItemsToShow] = React.useState(5);
    return (
        <View>
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
                        addItemToCart = {addItemToCart}
                        removeItemFromCart = {removeItemFromCart}
                        totalAmount = {totalAmount}
                    />
                )
                )}
        </View>
        {item.itemData.length > 5 &&
            itemsToShow <= item.itemData.length ? (
            <View style={styles.seeMoreBtn}>
                <TouchableWithoutFeedback
                    onPress={() => setItemsToShow(itemsToShow+5)}
                    style={[styles.seeMoreBtn, { height: 0 }]}>
                    <Text style={{ textAlign: 'center', }}>
                        see More
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        ) : null}
    </View>
    );
};
const styles = StyleSheet.create({
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
export default MenuListContainer
