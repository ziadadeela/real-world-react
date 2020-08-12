import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas";

import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'


export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer(history), composeWithDevTools(
    // other store enhancers if any
    applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware
    )
));

// then run the saga
sagaMiddleware.run(rootSaga);


export default store;