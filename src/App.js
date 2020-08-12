import React from 'react';
import './App.css';
import {TopRibbon} from "./components/TopRibbon";
import {Routes} from "./components/Routes";
import {Provider} from 'react-redux'
import store, {history} from "./redux/store";
import {ConnectedRouter} from 'connected-react-router'


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ConnectedRouter history={history}>
                    <TopRibbon/>
                    <Routes/>
                </ConnectedRouter>
            </div>
        </Provider>
    );
}

export default App;
