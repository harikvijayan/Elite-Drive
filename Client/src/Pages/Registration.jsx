import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  axios from 'axios'
import {  toast,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registration(){
    const[newusername,setNewusername]=useState("")
    const[mail,setMail]=useState("")
    const[newpassword,setNewpassword]=useState("")
    const[match,setMatch]=useState("")

    const addUser = async() => {
        if(newpassword === match)
        {
          try{
            await axios.post("http://localhost:5000/auth/register",{username:newusername,password:newpassword,email:mail})
            toast.success('User Registered Successfully 👨‍💼', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
                });
            setNewpassword("")
            setMail("")
            setMatch("")
            setNewusername("")
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
                theme: "dark",
                transition: Flip,
                });
          }

        }

        else
        {
            toast.warn("password doesn't match",{
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,  
            })
        }

    }
  return (
    <div>
        <div>
        <div> 
          <input
            className='input-box'
            type='text'
            value={newusername}
            placeholder='Username'
            onChange={(e)=>setNewusername(e.target.value)}
          />
        </div>
        <div> 
          <input
            className='input-box'
            type='text'
            value={mail}
            placeholder='Email'
            onChange={(e)=>setMail(e.target.value)}
          />
        </div>
        <div>
        <input
        className='input-box'
        type='text'
        value={newpassword}
        placeholder='Password'
        onChange={(e)=>setNewpassword(e.target.value)}
        />
        </div>
        <div>
        <input
          className='input-box'
          type='text'
          placeholder='Re-enter Password'
          value={match}
          onChange={(e)=>setMatch(e.target.value)}
        />
        </div>
        <div>
        <button onClick={addUser}>Submit</button>
        </div>
        <p>alredy have an account?<Link to='/'>login</Link></p>
      </div>  
    </div>
  
  )
}
export default Registration
