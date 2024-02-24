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
                        <p className='admin-home-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro recusandae sint voluptatum inventore nihil, itaque maiores provident, ad atque cumque cupiditate voluptas natus quae sit hic laboriosam officiis dolores?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
