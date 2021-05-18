import React from 'react';

import TopNavbar from '../../components/TopNavbar';

import Routes from '../../Routes';

import backgroundImage from '../../img/header.png';
import Footer from '../../components/Footer';

const RootWrapper = () => {

return <div>
  <div className="leading-normal tracking-normal text-gray-300 bg-cover bg-fixed bg-gray-900" style={{
    backgroundImage: `url("${backgroundImage}")`
    }}>
    <div>
        
        <TopNavbar />

        <Routes />

        <Footer />

    </div>
    </div>
</div>;
};

export default RootWrapper;