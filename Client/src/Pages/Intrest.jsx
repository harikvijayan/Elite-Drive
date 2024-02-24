import React, { useEffect,useState} from 'react'
import userID from '../Hooks/User.js'
import '../Styles/Intrests.css'
import axios from 'axios';
import { Flip, toast } from 'react-toastify'

export default function () {
  const[intrest,setIntrest]=useState([])
  const useID=userID()


    useEffect(()=>{
        fetchIntrest()
    })

    const intrestButton = async (itemid) => {
        const isItemInIntrest = intrest.some((ele) => ele._id === itemid);
      
        if (isItemInIntrest) {
          try {
            const response = await axios.put(`http://localhost:5000/auth/removefromintrest/${useID}`, { itemid });
            toast.success(response.data.message, { transition: Flip });
            fetchIntrest();
          } catch (error) {
            toast(error.response.data.message, { transition: Flip });
          }
        } else {
          try {
            const response = await axios.put(`http://localhost:5000/auth/addtointrest/${useID}`, { itemid });
            toast.success(response.data.message, { transition: Flip });
            fetchIntrest();
          } catch (error) {
            toast(error.response.data.message, { transition: Flip });
          }
        }
      };




      const fetchIntrest = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/auth/getallintrest/${useID}`);
          setIntrest(response.data);
        } catch (error) {
          console.error("Error fetching intrest:", error);
        }
      };
      

  return (
    <div className='int-home-container'>
        <div className='int-home-section'>
            <h1 className='int-home-title'>Your Dream Cars </h1>
            {intrest.length !== 0 ?(
                <div className='int-con-sec'>
                {intrest.map((product, index) => (
                <div key={index} className="user-product-card">
                <img className='user-product-image' src={product.photo} alt={product.brand} />
                <h2 className='user-product-name'>{product.name}</h2>
                <h3 className='user-product-brand'>{product.brand}</h3>
                <h4 className='user-product-price'> ₹{product.price}</h4>
                <div className='user-home-buttons'>
                    <button className='user-home-button' onClick={(e)=>{intrestButton(product._id);e.preventDefault()}}>{intrest.some((ele) => ele._id === product._id) ? "Remove" : "Add"}</button>
                </div>
                </div>
                ))}
                </div>
            ):(
            <div className='no-mans-land'>
                <img src="https://cdn.dribbble.com/users/1244867/screenshots/4346888/media/95f54e2fc2a83d5cd7bb9b3efc26dae2.jpg" alt='no-intrests added'/>
            </div>
        )}
        </div>
    </div>
  )
}
