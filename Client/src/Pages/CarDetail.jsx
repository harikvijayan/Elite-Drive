import React, { useEffect, useState } from 'react';
import '../Styles/CardDetail.css';
import { Bounce, toast } from 'react-toastify';
import { IoColorPalette } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import { SiCoronaengine } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { PiEngineBold } from "react-icons/pi"
import { IoIosPerson } from "react-icons/io";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CarDetail() {
    const[car,setCar]=useState({})
    const {productID}= useParams()
    console.log("productID",productID);
  useEffect(()=>{
    fetchProduct()
  },[])

  const fetchProduct = async() =>
  {
    try
    {
    const response = await axios.get(`http://localhost:5000/product/getmyproduct/${productID}`)
    setCar(response.data)
    }
    catch(error)
    {
    console.log(error);
    }
  }
console.log("product",car);

  return (
    <div className="card-body">
       <div className="card-container">
           <div className="card-imgBx">
               <img className="card-image" src={car.photo} alt="car"/>
           </div>
           <div className="card-details">
             <h3 className="card-brand-name">{car.name}<br /><span className="card-brand">{car.brand}</span></h3>
             <h4 className="card-car-detail">Car Details</h4>
               <ul className="card-size">
                 <li className="card-set"><IoColorPalette className='pro-home-icon' />{car.color}</li>
                 <li className="card-set"><SiCoronaengine className='pro-home-icon' />{car.mileage}</li>
                 <li className="card-set"><SlCalender className='pro-home-icon' />{car.year}</li>
               </ul>
               <ul className="card-size">
                 <li className="card-set"><PiEngineBold className='pro-home-icon' />{car.enginecc}</li>
                 <li className="card-set"><BsFuelPump className='pro-home-icon' />{car.fuel}</li>
                 <li className="card-set"><IoIosPerson className='pro-home-icon' />{car.owner}</li>
               </ul>
           <div className="card-group">
             <h2 className="card-price-symbol"><sup className="card-price-rupee">₹</sup>{car.price}</h2>
             <a className="card-hyper" href="#">Connect Seller</a>
           </div>
         </div>
       </div>
     </div>
  )}
export default CarDetail