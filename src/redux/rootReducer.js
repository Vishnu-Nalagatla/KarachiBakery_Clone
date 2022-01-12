import {combineReducers} from 'redux';
import {
  ADD_BTN_VISIBLE,
  ADD_ITEM_PRACTICE,
  ADD_ITEM_TO_WISHLIST,
  COMPLETE_ITEM_REMOVE,
  REMOVE_ITEM_FROM_CART_PRACTICE,
  REMOVE_ITEM_FROM_WISHLIST,
  SET_CART_EMPTY,
  STORE_TITLE,
} from './types';
import deliveryReducer from '../components/deliveryComponents/deliveryReducer';

export const cartReducer = (
  state = {cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]')},
  action,
) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {cartItems: action.payload.cartItems};
    default:
      return state;
  }
};
const cartDataPractice = {
  cartItems: [],
  userName: '',
};
const cartReducerPractice = (state = cartDataPractice, action) => {
  switch (action.type) {
    case REMOVE_ITEM_FROM_CART_PRACTICE:
      console.log('minus');
      const isItemExist = state.cartItems.find(
        item => item.id === action.payload.id,
      );
      if (isItemExist.quantity === 1) {
        let filteredCart = state.cartItems.filter(
          data => data.id !== action.payload.id,
        );
        return {
          ...state,
          cartItems: filteredCart,
        };
      } else {
        const decreaseItem = state.cartItems.map(data =>
          data.id === action.payload.id
            ? {...data, quantity: data.quantity - 1}
            : data,
        );
        return {
          ...state,
          cartItems: decreaseItem,
        };
      }
    case ADD_ITEM_PRACTICE:
      let itemsInCart = state.cartItems.slice();
      let isExist = false;
      itemsInCart.forEach(item => {
        if (item.id === action.payload.id) {
          item.quantity++;
          isExist = true;
        }
      });
      if (!isExist) {
        itemsInCart.push({...action.payload, quantity: 1});
      }
      return {
        ...state,
        cartItems: itemsInCart,
      };
    case COMPLETE_ITEM_REMOVE:
      const removeItem = state.cartItems.filter(
        data => data.id !== action.payload.id,
      );
      console.log(action.payload, 'remove');
      return {
        ...state,
        cartItems: removeItem,
      };
      case SET_CART_EMPTY : return{
        cartItems:action.payload
      }
    default:
      return state;
  }
};
const initialBtnVisible = {
  btnVisible: true,
};
const btnVisibleReducer = (state = initialBtnVisible, action) => {
  switch (action.type) {
    case ADD_BTN_VISIBLE:
      return {
        ...state,
        btnVisible: action.payload,
      };
    default:
      return state;
  }
};

const initialWishlist = {
  wishlist: [],
};

const wishlistReducer = (state = initialWishlist, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_WISHLIST:
      const wishlistedItems = state.wishlist.slice();
      wishlistedItems.push({...action.payload});
      return {
        ...state,
        wishlist: wishlistedItems,
      };
    case REMOVE_ITEM_FROM_WISHLIST:
      const removeItem = state.wishlist.filter(
        data => data.id !== action.payload.id,
      );
      return {
        ...state,
        wishlist: removeItem,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  deliveryReducer,
  cartReducerPractice,
  btnVisibleReducer,
  wishlistReducer,
  // storeTitleReducer
  //       cartReducer,
});

export default rootReducer;
