import { combineReducers } from "redux";
import authReducer from "./authReducer";
import statusReducer from "./statusReducer";
import uireducer from "./uiReducer";

export default combineReducers({
    auth : authReducer,
    status: statusReducer,
    ui: uireducer
});