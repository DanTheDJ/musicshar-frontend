import React from 'react';

import { Switch, Link, Route } from 'react-router-dom';

// Import pages
import { Home, Login, Register } from './pages';

const Routes = () => {

    return <React.Fragment>
        <Switch>

            <Route exact path="/" component={Home} />

            <Route exact path="/auth/register" component={Register} />

            <Route exact path="/auth/login" component={Login} />

        </Switch>
    </React.Fragment>;

};

export default Routes;