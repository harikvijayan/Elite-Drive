import axios from 'axios'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import {  toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/AdminLog.css'

function AdminLog() {
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
    <div className='body'>
        <div className="wrapper">
            <form action="" className="form">
                <h1 className="title">-- LOGIN --</h1>
             
                    <input type="text" className="input" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <i className="fa-solid fa-user"></i>
             
              
                    <input type="password" className="input" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <i className="fa-solid fa-lock"></i>
                
                <button className="submit" onClick={handleLogin}>Login</button>
            </form>
            <div className="banner">
                <h1 className="wel_text">Elite Drive</h1>
                <p className="para">Welcome Admin !!!</p>
            </div>
        </div>
    </div>
  )
}
export default AdminLog