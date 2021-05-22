import React from 'react';

import { Switch, Link, Route } from 'react-router-dom';

import ProtectedRoute from '/src/components/ProtectedRoute';

// Import pages
import { Home, Login, Register, Dashboard } from './pages';

const Routes = () => {

    return <React.Fragment>
        <Switch>

            <Route exact path="/" component={Home} />

            <ProtectedRoute exact path="/dashboard" component={Dashboard} />

            <Route exact path="/auth/register" component={Register} />

            <Route exact path="/auth/login" component={Login} />

        </Switch>
    </React.Fragment>;

};

export default Routes;