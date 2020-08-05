import {combineReducers} from "redux";
import {authUserReducer} from "./authUser/reducers";

export const rootReducer = combineReducers({
    authUser: authUserReducer,
});