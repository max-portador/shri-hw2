import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {historyReducer} from "./historyReducer";
import {footerReducer} from "./footerReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    history: historyReducer,
    footer: footerReducer,
})