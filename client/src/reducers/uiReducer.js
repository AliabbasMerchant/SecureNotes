import { BUTTON_CLICKED, BUTTON_RESET, IS_LOADING } from "../actions/types";

const initalState = {
    button: true,
    loading: false
}

export default function (state=initalState, action) {
    switch(action.type){
        case BUTTON_CLICKED:
            return {
                ...state,
                button: false
            }
        case BUTTON_RESET:
            return {
                ...state,
                button : true
            }
        case IS_LOADING:
            return {
                ...state,
                loading : !state.loading
            }
        default:
            return state;
    }
}