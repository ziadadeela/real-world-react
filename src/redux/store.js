import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
    // other store enhancers if any
));

export default store;