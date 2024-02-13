import React from 'react'
import '../Styles/Seller.css'

function Seller() {
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
                <form className="login-form" method="post">
                <h2> Login </h2>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required/>
                <a className="btn" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign in
                </a>
                <p className="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Seller
