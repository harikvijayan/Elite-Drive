import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/SellerNavbar.css';
import logo from '../../Icons/logo.png'

const SellerNavbar = () => {
  return (
    <div className="seller-navbar-container">
      <div className='seller-navbar-brand'>
        <img className='seller-navbar-image' src={logo} alt='logo'/>
        <h3 className='seller-navbar-head'>EliteDrive</h3>
      </div>
      <ul className="seller-navbar-elements">
        <li className="seller-navbar-element">
          <Link to="" className="seller-navbar-link">
            Home
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link to="" className="seller-navbar-link">
            Profile
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link to="/" className="seller-navbar-link">
            Product Management
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link to="" className="seller-navbar-link">
            Report
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link to="" className="seller-navbar-link">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SellerNavbar;
