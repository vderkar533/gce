import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import './App.css';

function NavOne() {
  const containerStyle = {
    margin: '0',
    padding: '0 50px', // Add 20px of padding to the left and right sides
  };

  const navbarStyle = {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    top: '30px',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent" style={navbarStyle}>
      <Helmet>
        <style>{'@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");'}</style>
      </Helmet>
      <div className="container" style={containerStyle}>
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <img src="logo.png" alt="Logo" width="80" height="74" className="d-inline-block align-text-top" style={{ marginRight: '10px' }} />
          </a>
          <h1 style={{ margin: '0', color: 'white', fontFamily: 'Bebas Neue, sans-serif' }}>
            GOVERNMENT COLLEGE OF ENGINEERING, CHANDRAPUR
          </h1>
        </div>
      </div>
    </nav>
  );
}

export default NavOne;
