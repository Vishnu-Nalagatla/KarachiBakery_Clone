import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {addItemToWishlist, removeItemFromWishlist} from '../../redux/actions';
const WishList = ({
  items,
  addItemToWishlist,
  wishlistData,
  removeItemFromList,
}) => {
  const [addToWishlist, setAddToWishlist] = React.useState(false);
  const addItemToWishlistHandler = () => {
    setAddToWishlist(!addToWishlist);
    addItemToWishlist(items);
  };
  const removeItemFromWishlistHandler = () => {
    setAddToWishlist(!addToWishlist);
    removeItemFromList(items);
  };
  return (
    <View>
      {addToWishlist ? (
        <AntDesign
          name="heart"
          color="#CD427D"
          size={22}
          onPress={removeItemFromWishlistHandler}
        />
      ) : (
        <AntDesign name="hearto" size={22} onPress={addItemToWishlistHandler} />
      )}
    </View>
  );
};
const mapStateToProps = state => {
  return {
    wishlistData: state.wishlistReducer.wishlist,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addItemToWishlist: item => dispatch(addItemToWishlist(item)),
    removeItemFromList: item => dispatch(removeItemFromWishlist(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WishList);
