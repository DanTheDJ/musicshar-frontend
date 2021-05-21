import React, { useState, useEffect } from 'react';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { connect } from "react-redux";

// optional configuration
const alertOptions = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
};

import { loadProfile } from '/src/helpers/authHelpers';

import TopNavbar from '../../components/TopNavbar';

import Routes from '../../Routes';

import backgroundImage from '../../img/header.png';
import Footer from '../../components/Footer';

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: (data) => dispatch({ type: 'LOGIN_SUCCESS', payload:{ user: data }})
  };
};

const RootWrapper = ({ user, loggedIn }) => {

  useEffect(() => {

    loadProfile(loggedIn);

  }, []);

  return <AlertProvider template={AlertTemplate} {...alertOptions}>
    <div className="leading-normal tracking-normal text-gray-300 bg-cover bg-fixed bg-gray-900 h-full" style={{ backgroundImage: `url("${backgroundImage}")` }}>
        <div>
          <TopNavbar/>

          <Routes />

          <Footer />
      </div>
    </div>
</AlertProvider>;
};

export default connect(mapStateToProps, mapDispatchToProps)(RootWrapper);