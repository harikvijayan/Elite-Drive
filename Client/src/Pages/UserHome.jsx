import React, { useEffect, useState } from 'react';
import '../Styles/UserHome.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import userID from '../Hooks/User.js'
import axios from 'axios';
import { Flip, toast } from 'react-toastify'
import like from '../Icons/Liked.png'
import dis from '../Icons/Disliked.png'
import { Link } from 'react-router-dom';


// import { IoColorPalette } from "react-icons/io5";
// import { BsFuelPump } from "react-icons/bs";
// import { SiCoronaengine } from "react-icons/si";
// import { SlCalender } from "react-icons/sl";
// import { PiEngineBold } from "react-icons/pi"
// import { IoIosPerson } from "react-icons/io";


function UserHome() {
  const[products,setProducts]=useState([])
  const[intrest,setIntrest]=useState([])
  const useID=userID()



useEffect(()=>{
  getAllCommodities()
  fetchIntrest()
},[])

const getAllCommodities = async() => 
{

  try{
    const response = await axios.get("http://localhost:5000/product/getallcars")
    setProducts(response.data)

  }
  catch(err)
  {
    console.log(err);
  }

}

const fetchIntrest = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/auth/getallintrest/${useID}`);
    setIntrest(response.data);
  } catch (error) {
    console.error("Error fetching intrest:", error);
  }
};


console.log(intrest);

const intrestButton = async (itemid) => {
  const isItemInIntrest = intrest.some((ele) => ele._id === itemid);

  if (isItemInIntrest) {
    try {
      const response = await axios.put(`http://localhost:5000/auth/removefromintrest/${useID}`, { itemid });
      getAllCommodities();
      toast.success(response.data.message, { transition: Flip });
      fetchIntrest();
    } catch (error) {
      toast(error.response.data.message, { transition: Flip });
    }
  } else {
    try {
      const response = await axios.put(`http://localhost:5000/auth/addtointrest/${useID}`, { itemid });
      getAllCommodities();
      toast.success(response.data.message, { transition: Flip });
      fetchIntrest();
    } catch (error) {
      toast(error.response.data.message, { transition: Flip });
    }
  }
};



  return (
    <div className='user-home-container'>
        <div className='user-home-carousel'>
        <Carousel showArrows={true}>
      <div className='user-carousel'>
        <img src="https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" />
        <p className="legend">Ford Mustang</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
        <p className="legend">BMW 7 Series 730Ld</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1605036242577-8ee228902af1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 3" />
        <p className="legend">BMW X3 xDrive 20D Luxury Line</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1619767886645-0ae16581bf6b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 4" />
        <p className="legend">TOYOTA Fortuner</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 5" />
        <p className="legend">PORSCHE Panamera</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1549632891-a0bea6d0355b?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 6" />
        <p className="legend">Range Rover Sport HSE</p>
      </div>
      <div>
        <img src="https://w0.peakpx.com/wallpaper/239/44/HD-wallpaper-ford-ford-everest-car-suv-silver-car.jpg" alt="Slide 6" />
        <p className="legend">Ford Endeavour</p>
      </div>
      <div>
        <img src="https://i.pinimg.com/originals/15/e5/22/15e522c2973bf7958d3e73cb510e5e0a.jpg" alt="Slide 6" />
        <p className="legend">G Wagon</p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/4062200/pexels-photo-4062200.jpeg?cs=srgb&dl=pexels-erik-mclean-4062200.jpg&fm=jpg" alt="Slide 6" />
        <p className="legend">Land Rover Range Rover</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-4.0.3" alt="Slide 6" />
        <p className="legend">BMW</p>
      </div>
      <div>
        <img src="https://c.wallhere.com/photos/08/f7/sunset_sun_vw_bug_volkswagen_50mm_nikon_low-887029.jpg!d" alt="Slide 6" />
        <p className="legend">An Old Legend</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1608341089966-92c09e62214f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF1ZGl8ZW58MHx8MHx8fDA%3D" alt="Slide 6" />
        <p className="legend">Audi</p>
      </div>
      <div>
        <img src="https://w.forfun.com/fetch/f9/f9500607611e4eff53592aa40ce5a05a.jpeg" alt="Slide 6" />
        <p className="legend">Mercedes Benz</p>
      </div>
      <div>
        <img src="https://wallpapers.com/images/hd/shiny-black-maserati-2ggnus7cijbxr3r2.jpg" alt="Slide 6" />
        <p className="legend">Maserati</p>
      </div>
      <div>
        <img src="https://wallpapercave.com/wp/wp9083161.jpg" alt="Slide 6" />
        <p className="legend">Mini Cooper</p>
      </div>
    </Carousel>
        </div>
        <h1 className='user-home-br-head'>--- Our Brands ---</h1>
        <div className='user-home-brands'>
          <div className='user-brand-div1'>
          <ul className='user-brand-list'>
            <li className='user-brand-container '>
               <img className='user-brand-image' src='https://www.royaldrive.in/_next/image?url=https%3A%2F%2Froyaldrive-prod.s3.ap-south-1.amazonaws.com%2F1682356846370-2241058audi.webp&w=1920&q=75' alt='img'/>
            </li>
            <li className='user-brand-container '>
               <img className='user-brand-image' src='https://www.royaldrive.in/_next/image?url=https%3A%2F%2Froyaldrive-prod.s3.ap-south-1.amazonaws.com%2F1682356813096-7989427jaguar.webp&w=1920&q=75' alt='img'/>
            </li>
            <li className='user-brand-container '>
               <img className='user-brand-image' src='https://www.royaldrive.in/_next/image?url=https%3A%2F%2Froyaldrive-prod.s3.ap-south-1.amazonaws.com%2F1682356768302-9997152bmw.webp&w=1920&q=75' alt='img'/>
            </li>
            <li className='user-brand-container '>
               <img className='user-brand-image' src='https://www.royaldrive.in/_next/image?url=https%3A%2F%2Froyaldrive-prod.s3.ap-south-1.amazonaws.com%2F1682356485572-3632853Luxus.webp&w=1920&q=75' alt='img'/>
            </li>
          </ul>
          </div>  
          <div className='user-brand-div2'>
            <ul className='user-brand-list'>
            <li className='user-brand-container '>
               <img className='user-brand-image' src='https://www.royaldrive.in/_next/image?url=https%3A%2F%2Froyaldrive-prod.s3.ap-south-1.amazonaws.com%2F1682403463279-7895849Mercedes%20(1).webp&w=1920&q=75' alt='img'/>
            </li>
            <li className='user-brand-container '>
               <img className='user-brand-image' src='https://www.royaldrive.in/_next/image?url=https%3A%2F%2Froyaldrive-prod.s3.ap-south-1.amazonaws.com%2F1682356305491-957876lamborghini.webp&w=1920&q=75' alt='img'/>
            </li>
            <li className='user-brand-container '>
               <img className='user-brand-image' src='https://www.royaldrive.in/_next/image?url=https%3A%2F%2Froyaldrive-prod.s3.ap-south-1.amazonaws.com%2F1682356456559-7584565land_rover.webp&w=1920&q=75' alt='img'/>
            </li>
            <li className='user-brand-container '>
               <img className='user-brand-image' src='https://www.royaldrive.in/_next/image?url=https%3A%2F%2Froyaldrive-prod.s3.ap-south-1.amazonaws.com%2F1683115019951-2920863ferrari.webp&w=1920&q=75' alt='img'/>
            </li>
          </ul>
          </div>

        </div>
        <div className='user-home-elements'>
         
            <div className="user-product-list">
                {products.map((product, index) => (
                <div key={index} className={`user-product-card ${product.sold ? 'sold-home-product' : ''}`}>
                <Link className='product-user-link' to={`/cardetail/${product._id}`}>
                  {product.sold && <div className="sold-tag">Sold</div>}
                  <div className="user-product-container">
                    <img className='user-product-images' src={product.photo} alt={product.brand} />
                    <button className='user-home-like-button' onClick={(e) => { intrestButton(product._id); e.preventDefault() }}>
                        {intrest.some((ele) => ele._id === product._id) ? <img className='product-like' src={like} alt='like' />: <img className='product-like' src={dis} alt='dislike' />}
                    </button>
                  </div>
                  <h2 className='user-product-name'>{product.name}</h2>
                  <h3 className='user-home-product-brand'>{product.brand}</h3>
                  <h4 className='user-home-product-price'>₹ {product.price}</h4> 
                  </Link> 
                </div>
                ))}
            </div>
        </div>


        <div className='user-home-others'>

        </div>
        
    </div>
  )
}

export default UserHome
