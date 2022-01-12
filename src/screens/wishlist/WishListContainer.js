import { Link } from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableWithoutFeedback, Linking} from 'react-native';
import {connect} from 'react-redux';
import { removeItemFromWishlist } from '../../redux/actions';
const WishListContainer = ({wishlistData,removeItem,navigation}) => {
  return (
    <View>
      {wishlistData.length>0?(
        wishlistData.map(data => (
          <View
          key={data.id}
          style = {{
              flexDirection:'row',
              justifyContent:'space-between'
          }}
          >
            <View>
              <Text>{data.name}</Text>
              <Text>{data.price}</Text>
            </View>
            <View>
              <Link to={{screen:'cart'}}>Add</Link>
              <TouchableWithoutFeedback
              onPress={()=>removeItem(data)}
              >
                  <Text>Remove from wishlist</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        )))
    : <Text>no items in wishlist</Text>
    }
    </View>
  );
};
const mapStateToProps = state => {
  return {
    wishlistData: state.wishlistReducer.wishlist,
  };
};
const mapDispatchToProps = dispatch =>{
    return{
        removeItem : item => dispatch(removeItemFromWishlist(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WishListContainer);
