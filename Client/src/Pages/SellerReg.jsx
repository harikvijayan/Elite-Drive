import React from 'react'
import '../Styles/Seller.css'

function SellerReg() {
  return (
    <div className='body'>
        <div className="login-page">
            <div className="form">
                <form className="register-form" method="POST">
                <h2>Register</h2>
                <input type="text" placeholder="Full Name *" required/>
                <input type="text" placeholder="Username *" required/>
                <input type="email" placeholder="Email *" required/>
                <input type="password" placeholder="Password *" required/>
                <a className="btn" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Create
                </a>
                <p className="message">Already registered? <a href="#">Sign In</a></p>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default SellerReg
