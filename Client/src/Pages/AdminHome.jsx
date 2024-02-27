import React from 'react'
import logo from '../Icons/logo.png'
import '../Styles/AdminHome.css'
export default function AdminHome() {
  return (
    <div className='admin-home-container'>
        <div className='admin-home-section'>
            <div className='admin-home-back'>
                <div className='admin-home-content'>
                    <h2 className='admin-home-brand'><img className='admin-home-logo' src={logo} alt='logo'/>EliteDrive</h2>
                    <div className='admin-home-para'>
                        <p className='admin-home-p'>Welcome to EliteDrive, your premier destination for buying and selling second-hand premium vehicles in India.We redefine the automotive experience by offering a curated selection of top-tier, pre-owned vehicles that combine luxury, performance, and reliability. Our commitment to excellence ensures that every vehicle on EliteDrive meets the highest standards, making us the go-to destination for those seeking quality and sophistication in their automotive choices. Explore the epitome of luxury and reliability with EliteDrive – where every drive is an elite experience!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
