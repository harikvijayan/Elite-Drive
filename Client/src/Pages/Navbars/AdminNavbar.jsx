
import React from 'react';
import logo from '../../Icons/logo.png'
import '../../Styles/AdminNavbar.css';

function AdminNavbar() {
  return (
    <nav className="admin-navbar">
      <div className='admin-navbar-brand'>
        <img className='admin-navbar-image' src={logo} alt='logo'/>
        <h3 className='admin-navbar-head'>EliteDrive</h3>
      </div>
      <ul className="admin-navbar-elements">
        <li className="admin-navbar-element">User Management</li>
        <li className="admin-navbar-element">Seller Management</li>
        <li className="admin-navbar-element">Seller Report</li>
        <li className="admin-navbar-element">User Report</li>
        <li className="admin-navbar-element">Product Management</li>
        <li className="admin-navbar-element">LogOut</li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
