import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import createHistory from "history/createBrowserHistory"

ReactDOM.render(
    <BrowserRouter history={createHistory}>
        <App/>
    </BrowserRouter>
    , document.getElementById('root')
);

