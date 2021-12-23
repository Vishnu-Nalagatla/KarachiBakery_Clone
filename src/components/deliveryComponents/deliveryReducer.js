

const initialState = {
    itemCount : 0,
}

const deliveryReducer = (state = initialState , action) => {
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
export default deliveryReducer;