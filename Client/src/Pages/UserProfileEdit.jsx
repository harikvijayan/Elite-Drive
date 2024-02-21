import React, { useEffect, useState } from 'react'
import userID from '../Hooks/User.js'
import axios from 'axios'


function UserProfileEdit() {
    const[userData,setUserData]=useState("")
    const[toggle,setToggle]=useState(0)
    const useID=userID()
    console.log("users id",useID);

useEffect(()=>{
    userDetail()
},[])

const userDetail = async() =>{
    try
    {
       const response = await axios.get(`http://localhost:5000/auth/getuser/${useID}`)
       setUserData(response.data)


    }
    catch(error)
    {
        console.log(error);
    }
}
console.log("user data",userData);

  return (
    <div className='user-edit-container'>
        <div className='user-edit-section'>
          <div className='user-edit-form'>
            <h2 className='user-edit-title'>Your Profile</h2>
          </div>
        </div>
    </div>
  )
}

export default UserProfileEdit
