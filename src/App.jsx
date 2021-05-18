import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

import RootWrapper from './layouts/RootWrapper';

const App = () => {

    return (
        <div>
            <BrowserRouter history={history}>
                <RootWrapper></RootWrapper>
            </BrowserRouter>
        </div>
    );

};

export default App;