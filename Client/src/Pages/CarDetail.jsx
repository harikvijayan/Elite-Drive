import React, { useEffect, useState } from 'react';
import '../Styles/CardDetail.css';
import { Bounce, toast } from 'react-toastify';
import color from '../Icons/color.png'
import fuel from '../Icons/fuel.png'
import owner from '../Icons/owner.png'
import calender from '../Icons/calendar.png'
import mileage from '../Icons/mileage.png'
import cc from '../Icons/cc.png'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CarDetail() {
    const[car,setCar]=useState({})
	const[toggle,setToggle]=useState(0)
	const[seller,setSeller]=useState({})
    const {productID}= useParams()
    console.log("productID",productID);
  useEffect(()=>{
    fetchProduct()
	fetchSeller()
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



 const fetchSeller = async(id) =>{
	try
	{
	const response=await axios.get(`http://localhost:5000/seller/getseller/${id}`)
	setSeller(response.data)
	}
	catch(error)
	{
		console.log(error);
	}
 }

 const sellerContact = () => {
	setToggle(1)
 }

 const cancelButton = () => {
	setToggle(0)
 }


console.log("product",car);
console.log("seller",seller);
console.log("value",toggle);

  return (
    <div className="body-container">
	{!toggle ? ( 
	<div className="detail-card">
		<div className="detail-imgBx">
			<img className="detail-img" src={car.photo} alt='car'/>
		</div>
		<div class="detail-details">
			<h3 className="detail-h3">{car.name}<br/><span className="detail-span">{car.brand}</span></h3>
			<h4 className="detail-h4">Car Details</h4>
			<h4 className="detail-h4">Specifications</h4>
			<div className='detail-section'>
			<ul className="detail-size">
				<li className="detail-li"><img src={color} className='detail-logo' alt='logo' />{car.color}</li>
				<li className="detail-li"><img src={fuel} className='detail-logo' alt='logo' />{car.fuel}</li>
				<li className="detail-li"><img src={calender} className='detail-logo' alt='logo' />{car.year}</li>
			</ul>
			<ul className='detail-size'>
				<li className="detail-li"><img src={mileage} className='detail-logo' alt='logo' />{car.mileage}Km</li>
				<li className="detail-li"><img src={owner} className='detail-logo' alt='logo' />{car.owner}</li>
				<li className="detail-li"><img src={cc} className='detail-logo' alt='logo' />{car.enginecc}cc</li>
			</ul>
			</div>
			<div class="detail-group">
				<h2 className="detail-h2"><sup className="detail-sup">₹</sup>{car.price}<small className="detail-small">.00</small></h2>
				<button className="detail-a" onClick={()=>{fetchSeller(car.loginid), sellerContact()}}>Contact Seller</button>
			</div>
		</div>
	</div>
	):(
	<div className='another-section'>
		<div className='pro-sell-container'>
			{seller.ban === false ? (  
			<div className='pro-sell-section'>
				<h3 className='pro-sell-detail'>UserName :<h4 className='pro-sell-h4'>{seller.username}</h4></h3>
				<h3 className='pro-sell-detail'>Email : <h4 className='pro-sell-h4'>{seller.email}</h4></h3>
				<h3 className='pro-sell-detail'>Contact No : <h4 className='pro-sell-h4'>{seller.phoneno}</h4></h3>
				<h3 className='pro-sell-detail'>Address :<h4 className='pro-sell-h4'> {seller.address}</h4></h3>
				<div>
					<button className='pro-sell-cancel' onClick={()=>{cancelButton()}}>Cancel</button>
				</div>
			</div>
			):(
			<div>
				<p className='pro-sell-ban'>
				"This seller is banned because of violation of privacy concerns and fraudulent activities,<br/>
				including unauthorized access to customer information, misappropriation of sensitive data,<br/>
				and engaging in deceptive practices to exploit and compromise the trust of the users"<br/>
				</p>
				<div>
					<button className='pro-sell-cancel' onClick={()=>{cancelButton()}}>Cancel</button>
				</div>
			</div>
			)}
		</div>
	</div>
	 )}
</div>
  )}
export default CarDetail