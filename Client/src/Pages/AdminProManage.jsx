import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Bounce,Flip, toast } from 'react-toastify'
import '../Styles/AdminPromanage.css'
import { IoColorPalette } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import { SiCoronaengine } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { PiEngineBold } from "react-icons/pi"
import { IoIosPerson } from "react-icons/io";
import { IoMdSpeedometer } from "react-icons/io";


export default function AdminProManage() {

    const[products,setProducts]=useState([])

    useEffect(()=>{
        fetchAllProducts()
    })
    
    const fetchAllProducts = async() =>{
        try
        {
            const response = await axios.get("http://localhost:5000/product/getallcars")
            setProducts(response.data)
        }
        catch(err)
        {
            console.log(err);
        }
    }

    const proDelete = async(id) =>{
        try
        {
            const response = await axios.delete(`http://localhost:5000/product/remove/${id}`)
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
             fetchAllProducts()   
        }
        catch(error)
        {
            toast.error(error?.response?.data?.message,{
                transition: Bounce
            })
        } 
    }


console.log(products);
  return (
    <div className='adm-pro-container'>
  {products.length !== 0 ? (
    <div className='adm-pro-section'>
      <h1 className='adm-pro-title'>Commodities For Sale</h1>
      {products.map((car) => (
        <div className={`adm-pro-sector ${car.sold ? 'sold-product' : ''}`} key={car._id}>
          {car.sold && <div className="sold-tag">Sold</div>}
          <img className='adm-pro-img' src={car.photo} alt='pro-img' />
          <div className='adm-pro-detail'>
            <h2 className='adm-pro-model'>{car.name}</h2>
            <h3 className='adm-pro-brand'>{car.brand}</h3>
            <h4 className='adm-pro-price'>₹ {car.price.toLocaleString()}</h4>
            <h4 className='adm-pro-price'><IoMdSpeedometer />{car.km}</h4>
            <div className='adm-pro-specs'>
              <p className='adm-pro-thing'><IoColorPalette className='admin-home-icon' /><br/>{car.color}</p>
              <p className='adm-pro-thing'><SiCoronaengine className='admin-home-icon' /><br/>{car.mileage}Km</p>
              <p className='adm-pro-thing'><SlCalender className='admin-home-icon' /><br/>{car.year}</p><br/>
              <p className='adm-pro-thing'><PiEngineBold className='admin-home-icon' /><br/>{car.enginecc}cc</p>
              <p className='adm-pro-thing'><BsFuelPump className='admin-home-icon' /><br/>{car.fuel}</p>
              <p className='adm-pro-thing'><IoIosPerson className='admin-home-icon' /><br/>{car.owner}</p>
            </div>
            <h6 className='adm-pro-sellerid'>Seller ID: {car.loginid}</h6>
            <h4 className='adm-pro-status'>Vehicle Status : {car.sold ? " SOLD " : " UNSOLD "}</h4>
          </div>
          <button className='adm-del-button' onClick={() => { proDelete(car._id) }}>Delete</button>
        </div>
      ))}
    </div>
  ) : (
    <div className='adm-none-section'>
      <img className='adm-none-image' src='https://media4.giphy.com/media/xUStFKHmuFPYk/giphy.gif?cid=6c09b952ptbdvvq0cujux7qpjxaz0visn254mhzijgyahqrb&ep=v1_gifs_search&rid=giphy.gif&ct=g' alt='none-img' />
    </div>
  )}
</div>
  )
}
