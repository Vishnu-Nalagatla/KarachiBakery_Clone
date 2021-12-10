import React from 'react'
import { View, Text } from 'react-native'
import Items from './Items'

const MenuListContainer = ({item,data}) => {
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
    )
}

export default MenuListContainer
