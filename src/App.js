import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

import { Index, Login} from './pages'; 

const App = () => {

    return (
        <div>
            <h1>App</h1>
            <BrowserRouter history={history}>
                <Switch>

                    <Route exact path="/">
                        <Index></Index>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );

};

export default App;