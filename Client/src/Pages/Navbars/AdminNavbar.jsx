
import React, { useState } from 'react';
import logo from '../../Icons/logo.png'
import '../../Styles/AdminNavbar.css';
import { useNavigate } from 'react-router-dom';
import {  toast,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AdminNavbar() {
  const[Cookie,setCookie]=useState(["admin_token"])
  const nav=useNavigate()

  const Logout = () => {
    setCookie("admin_token","")
        localStorage.removeItem("adminID")
        nav('/')
        toast("You Have Been Logged Out"), {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
          };
  };

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
        <li className="admin-navbar-element" onClick={Logout}>LogOut</li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
