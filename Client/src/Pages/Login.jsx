import axios from 'axios'
import {useCookies} from "react-cookie"
import React, { useState } from 'react'
import {useNavigate, Link } from 'react-router-dom'
import {  toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(){
const [email,setMail]=useState("")
const [password,setWord]=useState("")
const [Cookies,setCookies]=useCookies(['user_token'])

const nav=useNavigate()

const handleLogin = async() => {
  try{
    const response = await axios.post("http://localhost:5000/auth/login",{email,password})
    setCookies("user_token",response.data.token)
    localStorage.setItem("userID",response.data.userID)
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
    nav('/home')

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
    <div className='container'>
        <div>
            <h1>User Login</h1>
            <div>
            <div className='box'>
            <input
             value={email}
             placeholder='Email'
             type='email'
             onChange={(e)=>setMail(e.target.value)}
            />
            </div>
            <div className='box'>
            <input
             type='text'
             placeholder='Password'
             value={password}
             onChange={(e)=>setWord(e.target.value)}
            />
            </div>
            <div>
            <button onClick={()=>{handleLogin()}}>Login</button>
            </div>
            <div>
              <p>Doesn't have an account?<Link to='/signup'>signup</Link> </p>
            </div>
            </div>
        </div>

    </div>
  )
}
export default Login