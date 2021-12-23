import { ADD_ITEM_TO_CART, ITEM_COUNT, ITEM_COUNT_DECREASE, ITEM_COUNT_INCREASE, REMOVE_ITEM_FROM_CART } from "./types"

export const itemCount = (count) => {
    return {
        type: ITEM_COUNT,
        payload: count
    }
}

export const itemCountIncrease = (countIncrease) => {
    return {
        type: ITEM_COUNT_INCREASE,
        payload: countIncrease
    }
}

export const itemCountDecrease = (countDecrease) => {
    return {
        type: ITEM_COUNT_DECREASE,
        payload: countDecrease
    }
}

export const addItemToCart = (items) =>{
    return{
        type:ADD_ITEM_TO_CART,
        payload:items
    }
};

export const removeItemFromCart = () =>{
    return{
        type:REMOVE_ITEM_FROM_CART
    }
}