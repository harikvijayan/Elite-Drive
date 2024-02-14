import axios from 'axios'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import {  toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/AdminLog.css'
import { useNavigate } from 'react-router-dom';

function AdminLog() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[cookies,setCookies]=useCookies(['admin_token'])
    const nav=useNavigate()

    const handleLogin = async() => {
        try{
            const response = await axios.post("http://localhost:5000/admin/login",{email,password})
            console.log("response",response);
            setCookies("admin_token",response.data.token)
            localStorage.setItem("adminID",response.data.adminID)
            toast.success(response.data.message,{
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
                nav('/admininter')

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
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(); 
    };


  return (
    <div className='body'>
            <div className="wrapper">
                <form onSubmit={handleSubmit} className="form">
                    <h1 className="title">-- LOGIN --</h1>
                    <input type="text" className="input" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <i className="fa-solid fa-user"></i>
                    <input type="password" className="input" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <i className="fa-solid fa-lock"></i>
                    <button type="submit" className="submit">Login</button>
                </form>
                <div className="banner">
                    <h1 className="wel_text">EliteDrive</h1>
                    <p className="para">Welcome Admin !!!</p>
                </div>
            </div>
        </div>
  )
}
export default AdminLog