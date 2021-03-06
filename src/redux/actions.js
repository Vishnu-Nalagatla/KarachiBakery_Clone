import {
  ADD_BTN_VISIBLE,
  ADD_ITEM_PRACTICE,
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_WISHLIST,
  CART_TOTAL_COUNT,
  COMPLETE_ITEM_REMOVE,
  REMOVE_ITEM_FROM_CART_PRACTICE,
  REMOVE_ITEM_FROM_WISHLIST,
  SET_CART_EMPTY,
  STORE_TITLE,
} from './types';
export const storeTitle = name => {
  return {
    type: STORE_TITLE,
    payload: name,
  };
};
export const loginUserName = userName => {
  return {
    type: LOGIN_USERNAME,
    payload: userName,
  };
};
export const loginPassword = password => {
  return {
    type: LOGIN_PASSWORD,
    payload: password,
  };
};
export const addItemToCart = (items, product) => dispatch => {
  const cartItems = items.slice();
  let isExist = false;
  cartItems.forEach(item => {
    if (item.id === product.id) {
      isExist = true;
      item.count++;
    }
  });
  if (!isExist) {
    cartItems.push({...product, count: 1});
  }
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: {cartItems},
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const addItemToCartPractice = item => {
  return {
    type: ADD_ITEM_PRACTICE,
    payload: item,
  };
};
export const removeItemFromCart = item => {
  return {
    type: REMOVE_ITEM_FROM_CART_PRACTICE,
    payload: item,
  };
};
export const removeEntireItem = item => {
  return {
    type: COMPLETE_ITEM_REMOVE,
    payload: item,
  };
};

export const addBtnVisible = visible => {
  return {
    type: ADD_BTN_VISIBLE,
    payload: visible,
  };
};

export const addItemToWishlist = item => {
  return {
    type: ADD_ITEM_TO_WISHLIST,
    payload: item,
  };
};
export const removeItemFromWishlist = item => {
  return {
    type: REMOVE_ITEM_FROM_WISHLIST,
    payload: item,
  };
};
export const setCartEmpty = empty =>{
  return{
    type:SET_CART_EMPTY,
    payload:empty
  }
}