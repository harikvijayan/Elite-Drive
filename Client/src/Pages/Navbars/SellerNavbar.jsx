import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Icons/logo.png'
import '../../Styles/SellerNavbar.css';
import {  toast,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SellerNavbar = () => {

  const[Cookie,setCookie]=useState(["seller_token"])
  const nav=useNavigate()

  const LogOut = () => {
    setCookie("seller_token","")
        localStorage.removeItem("sellerID")
        nav('/')
        window.location.reload()
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
    <div className="seller-navbar-container">
      <div className='seller-navbar-brand'>
        <img className='seller-navbar-image' src={logo} alt='logo'/>
        <h3 className='seller-navbar-head'>EliteDrive</h3>
      </div>
      <ul className="seller-navbar-elements">
        <li className="seller-navbar-element">
          <Link to="sellerhome" className="seller-navbar-link">
            Home
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link to="sellerprofile" className="seller-navbar-link">
            Profile
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link to="/productmanage" className="seller-navbar-link">
            Product Management
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link to="/productadd" className="seller-navbar-link">
            Sell My Car
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link to="/sellerreport" className="seller-navbar-link">
            Report
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link  className="seller-navbar-link" onClick={LogOut}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SellerNavbar;
