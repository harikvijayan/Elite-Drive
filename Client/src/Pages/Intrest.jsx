import React, { useEffect,useState} from 'react'
import userID from '../Hooks/User.js'
import '../Styles/Intrests.css'
import axios from 'axios';
import like from '../Icons/Liked.png'
import dis from '../Icons/Disliked.png'
import { Flip, toast } from 'react-toastify'
import { Link } from 'react-router-dom';
import { IoMdSpeedometer } from "react-icons/io";

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
                <div key={index} className={`user-product-card ${product.sold ? 'sold-home-product' : ''}`}>
                <Link className='product-user-link' to={`/cardetail/${product._id}`}>
                  {product.sold && <div className="sold-tag">Sold</div>}
                <img className='user-product-image' src={product.photo} alt={product.brand} />
                <button className='user-home-like-button' onClick={(e) => { intrestButton(product._id); e.preventDefault() }}>
                        {intrest.some((ele) => ele._id === product._id) ? <img className='product-like' src={like} alt='like' />: <img className='product-like' src={dis} alt='dislike' />}
                </button>
                <h2 className='user-product-name'>{product.name}</h2>
                <h3 className='user-product-brand'>{product.brand}</h3>
                <h4 className='user-product-price'> ₹{product.price}</h4>
                <h5 className='user-product-km'><IoMdSpeedometer />{product.km}km</h5>
                </Link>
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
