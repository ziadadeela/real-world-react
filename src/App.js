import React from 'react';
import './App.css';
import {TopRibbon} from "./components/TopRibbon";
import {Routes} from "./components/Routes";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <TopRibbon/>
                <Routes/>
            </Router>
        </div>
    );
}

export default App;
