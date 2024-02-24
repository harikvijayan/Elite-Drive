import React, { useEffect, useState } from 'react'
import sellerID from '../Hooks/Seller.js'
import axios from 'axios'
import '../Styles/UprofileEdit.css'
import { Flip, toast } from 'react-toastify'


function SellerProfileEdit() {
    const[sellerData,setSellerData]=useState([])
    const[toggle,setToggle]=useState(0)
    const[passtoggle,setPasstoggle]=useState(0)
    const[matchtoggle,setMatchtoggle]=useState(false)
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[address,setAddress]=useState()
    const[phoneno,setPhoneno]=useState()
    const[newpassword,setNewpassword]=useState("")
    const[matchpassword,setMatchpassword]=useState("")
    const[password,setPassword]=useState("")
    const sellID=sellerID()

useEffect(()=>{
    sellerDetail()
},[])

const sellerDetail = async() =>{
    try
    {
       const response = await axios.get(`http://localhost:5000/seller/getseller/${sellID}`)
       setSellerData(response.data)
      
    }
    catch(error)
    {
        console.log(error);
    }
}

const editButton = async()=>{
  setToggle(1)
  setUsername(sellerData.username)
  setEmail(sellerData.email)
  setAddress(sellerData.address)
  setPhoneno(sellerData.phoneno)
}

const updateNewPassword = async() => {
  try
  {
    if(matchpassword !== newpassword)
    {
      toast("Password Doesnt Match !!!"), {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        };
    }
    else
    {
      const response=await axios.put(`http://localhost:5000/seller/sellerpassupdate/${sellID}`,{password:newpassword})
      toast(response.data.message), {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
      };
      setMatchtoggle(response.data.status)
      setPasstoggle(0)
      setToggle(0)
      setPassword("")
      setMatchpassword("")
      setNewpassword("")
    }
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
      theme: "dark",
      transition: Flip,
      });
    } 
  

}

const updateProfile = async() => {
  try
  {
    const response=await axios.put(`http://localhost:5000/seller/sellermailupdate/${sellID}`,{username,email,address,phoneno})
    toast(response.data.message), {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
      };
     
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
      theme: "dark",
      transition: Flip,
      });
  } 
}

const cancelProfile = async() => {
  setToggle(0)
  setMatchtoggle(0)
}

const passChange = async() => {
  setPasstoggle(1)
}
const prePassSubmit = async() => {
  try
  {
    const response=await axios.post(`http://localhost:5000/seller/sellerpassmatch/${sellID}`,{password})
    toast(response.data.message), {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
      };
      setMatchtoggle(response.data.status)
      setPasstoggle(0)
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
      theme: "dark",
      transition: Flip,
      });
  } 
}

const canPassSubmit = async() => {
  
  setPasstoggle(0)

}


const cancelNewPassword = async() => {
  
  setToggle(0)
  setMatchtoggle(0)

}


  return (
    <div className='user-edit-container'>
        <div className='user-edit-section'>
          <h2 className='user-head'>Welcome {sellerData.username}...</h2>
          <div className='user-edit-form'>
            <h2 className='user-edit-title'>Your Profile</h2>
            {toggle ?(
            <div className='user-edit-form'>
              <input
              className='user-edit-input'
              type='text'
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              />
              <input
              className='user-edit-input'
              type='text'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
              <input
              className='user-edit-input'
              type='text'
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              />
              <input
              className='user-edit-input'
              type='text'
              value={phoneno}
              onChange={(e)=>setPhoneno(e.target.value)}
              />
              <div className='user-edit-button2'>
                  <button className='user-edit-update' onClick={updateProfile}>Update</button>
                  <button className='user-edit-update' onClick={cancelProfile}>Cancel</button>
                  <button className='user-edit-update' onClick={passChange}>Password Update</button>
              </div>
            </div>
              
              ):(
              <div className='user-edit-button-div'>
                <button className='user-edit-button' onClick={editButton}>EDIT</button>
              </div>
              )}
          </div>
        </div>
        <div className='user-edit-section-2'>
        {passtoggle ?(  
          <div className='user-edit-section-container'>
            <input
             type='text'
             className='user-in'
             value={password}
             placeholder='Previous Password'
             onChange={(e)=>setPassword(e.target.value)}
            />
            <div className='pre-pass-section'>
            <button className='previous-password-button' onClick={prePassSubmit}>Submit</button>
            <button className='previous-password-button' onClick={canPassSubmit}>Cancel</button>
            </div>
          </div>
        ):(
          <div>

          </div>
        )}
        </div>
        <div className='password-section'>
          {matchtoggle ?(
           <div className='password-confirm-sections'>
              <input 
              className='new-pass-input'
              type='text'
              value={newpassword}
              placeholder='New Password'
              onChange={(e)=>setNewpassword(e.target.value)}
              />
              <input 
              className='new-pass-input'
              type='text'
              value={matchpassword}
              placeholder='Confirm Password'
              onChange={(e)=>setMatchpassword(e.target.value)}
              />
              <div className='password-button-section'>
                <button className='new-pass-button' onClick={updateNewPassword}>Update</button>
                <button className='new-pass-button' onClick={cancelNewPassword}>Cancel</button>
              </div>
           </div>
            ):(
           <div>

           </div>
          )}
        </div>
    </div>
  )
}

export default SellerProfileEdit
