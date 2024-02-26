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
    <div className="body-container">
	<div className="detail-card">
		<div className="detail-imgBx">
			<img className="detail-img" src="shoe.jpg"/>
		</div>
		<div class="detail-details">
			<h3 className="detail-h3">Name<br/><span className="detail-span">Brand</span></h3>
			<h4 className="detail-h4">Car Details</h4>
			<h4 className="detail-h4">Specifications</h4>
			<ul class="detail-size">
				<li className="detail-li">color</li>
				<li className="detail-li">fuel</li>
				<li className="detail-li">year</li>
				<li className="detail-li">Mileage</li>
				<li className="detail-li">Owner</li>
				<li className="detail-li">Engine CC</li>
			</ul>
			<div class="detail-group">
				<h2 className="detail-h2"><sup className="detail-sup">₹</sup>199<small className="detail-small">.99</small></h2>
				<a className="detail-a" href="#">Contact Seller</a>
			</div>
		</div>
	</div>
</div>
  )}
export default CarDetail