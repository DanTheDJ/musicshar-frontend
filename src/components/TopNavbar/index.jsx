import React, { Component, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { connect } from 'react-redux';

import { logout } from '/src/redux/actions/auth';

import AuthedNavbar from './Authed';
import UnauthedNavbar from './Unauthed';

const TopNavbar = ({ user, logout }) => {

    const history = useLocation();

    if(!!user)
    {

        // User is logged in
        return <AuthedNavbar history={history} user={user} logout={logout}></AuthedNavbar>;

    }
    
    return <UnauthedNavbar history={history}></UnauthedNavbar>;

};

const mapStateToProps = state => ({
    user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (data) => dispatch(logout())
    };
};  

export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);