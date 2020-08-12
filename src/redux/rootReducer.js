import {combineReducers} from "redux";
import {authUserReducer} from "./authUser/reducers";
import {connectRouter} from 'connected-react-router'
import {blockUIReducer} from "./blockUI/reducers";


export const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    authUser: authUserReducer,
    isLoading: blockUIReducer,
});