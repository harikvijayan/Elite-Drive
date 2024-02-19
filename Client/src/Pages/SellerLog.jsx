import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate,Link } from 'react-router-dom'
import {  toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/SellerLogin.css'

function SellerLog(){
    const[email,setMail]=useState("")
    const[password,setWord]=useState("")
    const [Cookies,setCookies]=useCookies(["seller_token"])

const nav=useNavigate()

const handleLogin = async() => {
  try{
    const response = await axios.post("http://localhost:5000/seller/login",{email,password})
    console.log(response);
    setCookies("seller_token",response.data.token)
    localStorage.setItem("sellerID",response.data.sellerID)
    toast.success(response.data.message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
   

  }
  catch(error)
  {
    toast.error(error.response.data.message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }
}
  return (
    <div className=' sell-log-container'>
    <div className='sell-log-form-container'>
        <div className='sell-log-form'>
        <h2 className='sell-log-head'>SELLER LOGIN</h2>
        <div className='sell-log-box'>
        <input
         className='sell-log-input'
         value={email}
         placeholder='Email'
         type='email'
         onChange={(e)=>setMail(e.target.value)}
        />
        </div>
        <div className='sell-log-box'>
        <input
        className='sell-log-input'
         type='text'
         placeholder='Password'
         value={password}
         onChange={(e)=>setWord(e.target.value)}
        />
        </div>
        <div className='sell-log-button-container'>
        <button className='sell-log-button' onClick={()=>{handleLogin()}}>Login</button>
        </div>
        <div>
          <p className='sell-log-para'>Doesn't have an account?<Link to='/sellerreg'>signup</Link> </p>
        </div>
        </div>
    </div>

</div>
  )
}

export default SellerLog;