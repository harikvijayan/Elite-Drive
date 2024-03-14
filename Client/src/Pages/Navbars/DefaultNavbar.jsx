import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/DefaultNavbar.css';
import logo from '../../Icons/logo.png'
import { MdAdminPanelSettings } from "react-icons/md";

const HomeNavbar = () => {
  return (
    <div className="home-navbar-container">
    <div className='admin-navbar-brand'>
        <img className='admin-navbar-image' src={logo} alt='logo'/>
        <h3 className='admin-navbar-head'>EliteDrive</h3>
      </div> 
      <ul className="home-navbar-elements">
        <li className="home-navbar-element">
          <Link to="/login" className="home-navbar-link">
            User Login
          </Link>
        </li>
        <li className="home-navbar-element">
          <Link to="/sellerlog" className="home-navbar-link">
            Seller Login
          </Link>
        </li>
        <li className="home-navbar-element">
          <Link to="/adminlogin" className="home-navbar-link">
          <MdAdminPanelSettings  className='adm-logo'/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeNavbar;
