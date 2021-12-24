import { combineReducers } from 'redux';
import { STORE_TITLE } from './types';
import deliveryReducer from '../components/deliveryComponents/deliveryReducer'

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || '[]') },
  action
) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return { cartItems: action.payload.cartItems }
    default: return state
  }
}

const titleInitialState = {
  title: ''
}
const storeTitleReducer = (state = titleInitialState, action) => {
  switch (action.type) {
    case STORE_TITLE: return {
      ...state,
      title: action.payload
    }
    default : return state
  }
}

const rootReducer = combineReducers({
  deliveryReducer
  // storeTitleReducer
  //       cartReducer,
})

export default rootReducer;
