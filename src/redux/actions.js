import { ADD_ITEM_TO_CART, ITEM_COUNT, ITEM_COUNT_INCREASE } from "./types";


const initialState = {
    itemCount : 0,
    cartItems: []

}

const reducer = (state = initialState , action) => {
switch (action.type) {
    case ITEM_COUNT:
        return {
            ...state,
            itemCount : action.payload
        }
        break;
        case ITEM_COUNT_INCREASE : 
        return {

        }

    default:
        break;
}
}
export default reducer;

const initialState = {
};
