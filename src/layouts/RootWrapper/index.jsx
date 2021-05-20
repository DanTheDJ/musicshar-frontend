import React from 'react';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// optional configuration
const alertOptions = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
};

import TopNavbar from '../../components/TopNavbar';

import Routes from '../../Routes';

import backgroundImage from '../../img/header.png';
import Footer from '../../components/Footer';



const RootWrapper = () => {

  return <AlertProvider template={AlertTemplate} {...alertOptions}>
  <div className="leading-normal tracking-normal text-gray-300 bg-cover bg-fixed bg-gray-900 h-full" style={{ backgroundImage: `url("${backgroundImage}")` }}>
    
      <div>
        <TopNavbar />

        <Routes />

        <Footer />
    </div>
    </div>
</AlertProvider>;
};
export default RootWrapper;