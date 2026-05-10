import React from 'react';
import '../styles/TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <a href="mailto:inertiainfotech@gmail.com" className="topbar-link">
            <i className="fa fa-envelope"></i>
            <span>inertiainfotech@gmail.com</span>
          </a>
          <a href="https://wa.me/919270166932" target="_blank" rel="noopener noreferrer" className="topbar-link">
            <i className="fab fa-whatsapp"></i>
            <span>9270166932</span>
          </a>
        </div>
        <div className="topbar-right">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="topbar-social" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="topbar-social" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="topbar-social" aria-label="Twitter">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
