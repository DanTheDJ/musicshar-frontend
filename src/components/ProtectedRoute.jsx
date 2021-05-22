import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, auth: auth, ...rest }) => {

    if(auth.profileLoaded && !auth.isLoggedIn)
    {

        return <Redirect to="/auth/login"></Redirect>;

    }

    return (
        <Route {...rest} render={
            props => <Component {...rest} {...props} />
        } />
    );

};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(ProtectedRoute);