import React from 'react'
import logo from '../Icons/logo.png'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-class'>
            <div className='navbar-brand'>
            <img className='navbar-image' src={logo} alt='logo'/>
            <h2 className='navbar-head'>EliteDrive</h2>
            </div>
            <ul className='navbar-elements'>
                <li className='navbar-element'>Home</li>
                <li className='navbar-element'>Intrest</li>
                <li className='navbar-element'>Profile</li>
                <li className='navbar-element'>Report</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
