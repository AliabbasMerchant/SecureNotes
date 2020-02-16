import { GET_STATUS, CLEAR_STATUS } from "./types";

export const returnStatus = (msg, status, id=null) => {
    return {
        type: GET_STATUS,
        payload: {msg, status, id}
    }
}

export const clearStatus = () => {
    return {
        type: CLEAR_STATUS
    }
}
