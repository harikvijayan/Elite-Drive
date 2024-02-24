import React from 'react'
import {useCookies} from 'react-cookie'
import logo from '../../Icons/logo.png'
import '../../Styles/UserNavbar.css'
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
                <li className='navbar-element'><Link to='/userhome' className='admin-navbar-link'>Home</Link></li>
                <li className='navbar-element'><Link to='/intrest' className='admin-navbar-link'>Intrest</Link></li>
                <li className='navbar-element'><Link to='/useredit' className='admin-navbar-link'>Profile</Link></li>
                <li className='navbar-element'><Link to='/userreport' className='admin-navbar-link'>Report</Link></li>
                <li className='navbar-element' onClick={Logout}>LogOut</li>
            </ul>
        </div>
  

  )
}

export default UserNavbar
