import React from 'react'
import {useCookies} from 'react-cookie'
import logo from '../../Icons/logo.png'
import '../../Styles/UserNavbar.css'
import { GoReport } from "react-icons/go";
import { MdManageAccounts } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import {  toast,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UserNavbar() {
  const [Cookies, setCookie] =useCookies(["access_token"])
  const nav=useNavigate()

  const Logout = () => {
    setCookie("access_token","")
        localStorage.removeItem("userID")
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
    <div className='navbar-container'>
    
            <div className='navbar-brand'>
           <img className='navbar-image' src={logo} alt='logo'/>
          <h2 className='navbar-head'>EliteDrive</h2>
            </div>
            <ul className='navbar-elements'>
                <li className='navbar-element'><Link to='/search' className='admin-navbar-link'><FaSearch className='lo-nav' /></Link></li>
                <li className='navbar-element'><Link to='/userhome' className='admin-navbar-link'><FaHome className='lo-navu'/></Link></li>
                <li className='navbar-element'><Link to='/intrest' className='admin-navbar-link'><FaHeart className='lo-navu' /></Link></li>
                <li className='navbar-element'><Link to='/userreport' className='admin-navbar-link'><GoReport className='lo-navu'/></Link></li>
                <li className='navbar-element'><Link to='/useredit' className='admin-navbar-link'><MdManageAccounts  className='lo-navu'/></Link></li>
                <li className='navbar-element' onClick={Logout}><AiOutlineLogout className='lo-navu' /></li>
            </ul>
        </div>
  

  )
}

export default UserNavbar
