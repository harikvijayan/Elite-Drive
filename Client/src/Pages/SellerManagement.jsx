import React, { useEffect, useState } from 'react';
import '../Styles/UserManagement.css'; 
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

export default  function SellerManagement() {
    const[sellers,setSellers]=useState([])


    useEffect(()=>{
        fetchSellers()
    },[])

    const fetchSellers = async() =>{
        try{
            const response=await axios.get("http://localhost:5000/seller/getsellers")
            
            setSellers(response.data)
           
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const banButton = async(sellerID,ban)=>{

        try
        {
            if(ban===true)
            {
                const response =  await axios.put(`http://localhost:5000/seller/changeban/${sellerID}`,{ban:false})
                toast.success(response.data.message,{
                    transition:Bounce
                })
            }
            else
            {
                const response =  await axios.put(`http://localhost:5000/seller/changeban/${sellerID}`,{ban:true})
                toast.success(response.data.message,{
                    transition:Bounce
                })
            }
            fetchSellers()
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
          <h2 className='user-manage-title'>Sellers Information</h2>
        </div>
        <div className='user-manage-info'>
          <table className='user-manage-table'>
            <thead>
              <tr className='user-manage-first'>
                <th className='user-manage-header'>SellerID</th>
                <th className='user-manage-header'>Username</th>
                <th className='user-manage-header'>Email</th>
                <th className='user-manage-header' >Address</th>
                <th className='user-manage-header'>Contact No.</th>
                <th className='user-manage-header'>Action</th>
              </tr>
            </thead>
            <tbody>
            {sellers.map((a)=>( 
              <tr key={a._id} className='user-manage-second'>
                <td className='user-manage-data'>{a._id}</td>
                <td className='user-manage-data'>{a.username}</td>
                <td className='user-manage-data'>{a.email}</td>
                <td className='user-manage-data'>{a.address}</td>
                <td className='user-manage-data'>{a.phoneno}</td>
                <td className='user-manage-data'><button className='user-action-button' onClick={() => banButton(a._id, a.ban)}>{a.ban?"UnBan":"Ban"}</button></td>
              </tr>
            ))}    
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


