
import React, { useState } from 'react';
import logo from '../../Icons/logo.png'
import '../../Styles/AdminNavbar.css';
import { useNavigate,Link } from 'react-router-dom';
import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdManageAccounts } from "react-icons/md";
import { BiSolidMessageDots } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa6";

function AdminNavbar() {
  const[Cookie,setCookie]=useState(["admin_token"])
  const nav=useNavigate()

  const Logout = () => {
    setCookie("admin_token","")
        localStorage.removeItem("adminID")
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
          theme: "light",
          transition: Bounce,
          };
  };
   console.log(Cookie);                                   
  return (
    <nav className="admin-navbar">
      <div className='admin-navbar-brand'>
        <img className='admin-navbar-image' src={logo} alt='logo'/>
        <h3 className='admin-navbar-head'>EliteDrive</h3>
      </div>
      <ul className="admin-navbar-elements">
        <li className="admin-navbar-element"><Link to='/usermanage' className='admin-navbar-link'>< MdManageAccounts className='use-log' /></Link></li>
        <li className="admin-navbar-element"><Link to='/sellermanage' className='admin-navbar-link'><MdManageAccounts className='sel-log'/></Link></li>
        <li className="admin-navbar-element"><Link to='/userreportmanage' className='admin-navbar-link'><BiSolidMessageDots className='use-rep'/></Link></li>
        <li className="admin-navbar-element"><Link to='/sellreportmanage' className='admin-navbar-link'><BiSolidMessageDots className='sel-rep'/></Link></li>
        <li className="admin-navbar-element"><Link to='/adminpromanage' className='admin-navbar-link'><FaMoneyCheck className='adm-man'/></Link></li>
        <li className="admin-navbar-element" onClick={Logout}><IoMdLogOut className='adm-out'/></li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
