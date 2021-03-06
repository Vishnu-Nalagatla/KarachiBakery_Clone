import { LOGIN_PASSWORD, LOGIN_USERNAME, STORE_TITLE } from "../../redux/types";

const initialState = {
    userName: '',
    password: '',
    storeTitle: '',
}

const deliveryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USERNAME:
            return {
                ...state,
                userName: action.payload
            }
        case LOGIN_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
            case STORE_TITLE: return {
                ...state,
                storeTitle: action.payload
            }
            default : return state
            break;
    };
};
export default deliveryReducer;