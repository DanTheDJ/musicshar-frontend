import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

import { Provider } from "react-redux";
import store from "/src/redux/store";

import RootWrapper from './layouts/RootWrapper';

const App = () => {

    return (
        <div>
            <BrowserRouter history={history}>
                <Provider store={store}>
                    <RootWrapper></RootWrapper>
                </Provider>
            </BrowserRouter>
        </div>
    );

};

export default App;