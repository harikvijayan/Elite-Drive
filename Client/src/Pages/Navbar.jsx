import React from 'react'
import {useCookies} from 'react-cookie'
import logo from '../Icons/logo.png'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
const [Cookies, setCookie] =useCookies(["token"])

function Navbar() {


  return (
    <div className='navbar-container'>
    
            <div className='navbar-brand'>
           <img className='navbar-image' src={logo} alt='logo'/>
          <h2 className='navbar-head'>EliteDrive</h2>
            </div>
            
            <ul className='navbar-elements'>
                <li className='navbar-element'><Link to='/sellerlog' className='navbar-link'> Sell Your Car</Link></li>
                <li className='navbar-element'>Home</li>
                <li className='navbar-element'>Interest</li>
                <li className='navbar-element'>Profile</li>
                <li className='navbar-element'>Report</li>
                <li className='navbar-element'>{Cookies.token ? "LogOut" :" LogIn"}</li>
            </ul>
        </div>
  

  )
}

export default Navbar
