
import {ADD_ITEM_TO_CART, STORE_TITLE} from './types';
export const storeTitle = name =>{
    return{
        type:STORE_TITLE,
        payload:name
    }
}
export const addItemToCart = (items,product) => dispatch =>{
    const cartItems = items.slice();
    let isExist = false;
    cartItems.forEach(item =>{
        if(item.id === product.id){
            isExist = true;
            item.count++;
        }
    });
    if(!isExist){
        cartItems.push({...product,count:1})
    }
    dispatch({
        type:ADD_ITEM_TO_CART,
        payload : {cartItems},
    })
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
}
