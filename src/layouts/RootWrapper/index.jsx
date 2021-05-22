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

import { loadProfile } from '/src/redux/actions/auth';

import TopNavbar from '../../components/TopNavbar';

import Routes from '../../Routes';

import backgroundImage from '../../img/header.png';
import Footer from '../../components/Footer';

const RootWrapper = ({ user, loadProfileInformation }) => {

  useEffect(() => {

    loadProfileInformation();

  }, []);

  return <AlertProvider template={AlertTemplate} {...alertOptions}>
    <div className="leading-normal tracking-normal text-gray-300 bg-cover bg-fixed bg-gray-900 h-full" style={{ backgroundImage: `url("${backgroundImage}")`, minHeight: '100vh' }}>
        <div>
          <TopNavbar/>

          <Routes />

          <Footer />
      </div>
    </div>
</AlertProvider>;
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadProfileInformation: () => dispatch(loadProfile())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootWrapper);