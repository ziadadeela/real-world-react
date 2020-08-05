import React from 'react';
import './App.css';
import {TopRibbon} from "./components/TopRibbon";
import {Routes} from "./components/Routes";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux'
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <TopRibbon/>
                    <Routes/>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
