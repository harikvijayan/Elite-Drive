import React, { useEffect, useState } from 'react';
import '../Styles/UserManagement.css'; 
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

export default  function UserManagement() {
    const[users,setUsers]=useState([])


    useEffect(()=>{
        fetchUsers()
    },[])

    const fetchUsers = async() =>{
        try{
            const response=await axios.get("http://localhost:5000/auth/getusers")
            console.log("users",response);
            setUsers(response.data)
           
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const banButton = async(userID,ban)=>{

        try
        {
            if(ban===true)
            {
                const response =  await axios.put(`http://localhost:5000/auth/changeban/${userID}`,{ban:false})
                toast.success(response.data.message,{
                    transition:Bounce
                })
            }
            else
            {
                const response =  await axios.put(`http://localhost:5000/auth/changeban/${userID}`,{ban:true})
                toast.success(response.data.message,{
                    transition:Bounce
                })
            }
            fetchUsers()
        }
        catch(error)
        {
            toast.error(error.response.data.message,{
                transition:Bounce
            })
        }

    }




  return (
    <div className='user-manage-container'>
      <div className='user-manage-section'>
        <div className='user-manage-title-div'>
          <h2 className='user-manage-title'>Users Information</h2>
        </div>
        <div className='user-manage-info'>
          <table className='user-manage-table'>
            <thead>
              <tr className='user-manage-first'>
                <th className='user-manage-header'>UserID</th>
                <th className='user-manage-header'>Username</th>
                <th className='user-manage-header'>Email</th>
                <th className='user-manage-header'>Action</th>
              </tr>
            </thead>
            <tbody>
            {users.map((user)=>( 
              <tr key={user._id} className='user-manage-second'>
                <td className='user-manage-data'>{user._id}</td>
                <td className='user-manage-data'>{user.username}</td>
                <td className='user-manage-data'>{user.email}</td>
                <td className='user-manage-data'><button className='user-action-button' onClick={() => banButton(user._id, user.ban)}>{user.ban?"UnBan":"Ban"}</button></td>
              </tr>
            ))}    
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


