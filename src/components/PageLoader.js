import React from 'react';
import '../styles/PageLoader.css';
import logo from '../assets/logo.png';


const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-logo"><img src={logo} alt="Inertia Infotech" className="navbar-logo-img" />
        </div>
        <div className="loader-bar">
          <div className="loader-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
