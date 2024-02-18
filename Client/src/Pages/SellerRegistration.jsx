import React, { useState } from 'react';
import axios from 'axios';
import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import '../Styles/SellerRegistration.css'

function SellerRegistration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [match, setMatch] = useState('');

  const addSeller = async () => {
    if (password === match) {
      try {
        const response = await axios.post("http://localhost:5000/seller/register", { username, email, phoneno, address, password });
        toast(response.data.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Flip,
        });
        setPassword('');
        setEmail('');
        setMatch('');
        setUsername('');
        setAddress('');
        setPhoneno('');
      } catch (error) {
        toast.error(error.response.data.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Flip,
        });
      }
    } else {
      toast.warn("password doesn't match", {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Flip,
      });
    }
  };
  
  return (
    <div className='sell-reg-container'>
      <div className='sell-reg-form-container'>
      <h1 className='sell-reg-head'>Seller Registration</h1>
      <div className='sell-reg-box'> 
                <input
                    className='sell-reg-input'
                    type='text'
                    value={username}
                    placeholder='Username'
                    onChange={(e)=>setUsername(e.target.value)}
                />
            </div>
            <div className='sell-reg-box'> 
                <input
                    className='sell-reg-input'
                    type='text'
                    value={email}
                    placeholder='Email'
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className='sell-reg-box'> 
                <input
                    className='sell-reg-input'
                    type='text'
                    value={address}
                    placeholder='Address'
                    onChange={(e)=>setAddress(e.target.value)}
                />
            </div>
            <div className='sell-reg-box'> 
                <input
                    className='sell-reg-input'
                    type='text'
                    value={phoneno}
                    placeholder='Phone Number'
                    onChange={(e)=>setPhoneno(e.target.value)}
                />
            </div>
            <div className='sell-reg-box'>
                <input
                    className='sell-reg-input'
                    type='text'
                    value={password}
                    placeholder='Password'
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div className='sell-reg-box'>
                <input
                    className='sell-reg-input'
                    type='text'
                    placeholder='Re-enter Password'
                    value={match}
                    onChange={(e)=>setMatch(e.target.value)}
                />
            </div>
      <div className='sell-reg-button-container'>
        <button className='sell-reg-button' onClick={addSeller}>Register</button>
      </div>
      <p className='sell-reg-para'>
        already have an account?<Link to="/sellerlog">login</Link>
      </p>
    </div>
    </div>
  );
}

export default SellerRegistration;
