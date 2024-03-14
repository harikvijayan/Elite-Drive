import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Icons/logo.png'
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import '../../Styles/SellerNavbar.css';
import {  toast,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sell from '../../Icons/sell.png'
import { GoReport } from "react-icons/go";
import { RiLogoutCircleRLine } from "react-icons/ri";
import man from '../../Icons/man.png'

const SellerNavbar = () => {

  const[Cookie,setCookie]=useState(["seller_token"])
  const nav=useNavigate()

  const LogOut = () => {
    setCookie("seller_token","")
        localStorage.removeItem("sellerID")
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
          window.location.reload()
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
          <FaHome className='log-nav'/>
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link to="sellerprofile" className="seller-navbar-link">
          <CgProfile className='log-nav'/>
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link to="/productmanage" className="seller-navbar-link">
          <img src={man} alt='logo' className='log-navu' />
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link to="/productadd" className="seller-navbar-link">
            <img src={sell} alt='logo' className='log-navu' />
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link to="/sellerreport" className="seller-navbar-link">
          <GoReport className='log-nav'/>
          </Link>
        </li>
        <li className="seller-navbar-element">
          <Link  className="seller-navbar-link" onClick={LogOut}>
          <RiLogoutCircleRLine  className='log-nav'/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SellerNavbar;
