import axios from 'axios'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import {  toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminLogin(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[cookies,setCookies]=useCookies(['admin_token'])



    const handleLogin = async() => {
        try{
            const response = await axios.post("http://localhost:5000/admin/login",{email,password})
            setCookies("admin_token",response.data.token)
            localStorage.setItem("adminID",response.data.adminID)
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
        catch(error){
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
            <div>
            <div className='box'>
            <input
             value={email}
             placeholder='Email'
             type='email'
             onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <div className='box'>
            <input
             type='text'
             placeholder='Password'
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            <div>
            <button onClick={()=>{handleLogin()}}>Login</button>
            </div>
            </div>
        </div>

    </div>
  )
}

export default AdminLogin;