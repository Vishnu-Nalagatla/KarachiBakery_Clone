import { LOGIN_PASSWORD, LOGIN_USERNAME, STORE_TITLE  } from "./types"

export const loginUserName = (userName) => {
    return {
        type: LOGIN_USERNAME,
        payload: userName
    }
}
export const loginPassword = (password) => {
    return {
        type: LOGIN_PASSWORD,
        payload: password
    }
}

export const storeTitle = (title) => {
    return {
        type: STORE_TITLE,
        payload: title
    }
}