import React, { useState ,useEffect} from 'react'
import { FaSearch } from "react-icons/fa";
import '../Styles/Search.css'
import userID from '../Hooks/User.js'
import axios from 'axios';
import { Flip, toast } from 'react-toastify'
import like from '../Icons/Liked.png'
import dis from '../Icons/Disliked.png'
import { Link } from 'react-router-dom';
import { IoMdSpeedometer } from "react-icons/io";

export default function Search() {
    const[search,setSearch]=useState()
    const[data,setData]=useState([])
    const useID=userID()
    const[intrest,setIntrest]=useState([])

    useEffect(()=>{
      fetchIntrest()
    },[])

  const searchButton = async() => {
      try
      {
        const response = await axios.post("http://localhost:5000/product/search",{search})
        setData(response.data ? response.data.searchProducts : []);

      }
      catch(error)
      {
        console.log(error);
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
        console.error("Error during intrestButton request:", error);
        toast.error("An error occurred while processing your request", { transition: Flip });
      }
    }
  };
  

console.log(data);


  return (
    <div className='search-container'>
      <div className='search-section'>
        <div className='search-input-ection'>
          <input
           className='search-input'
            value={search}
            placeholder='Search Your Brand'
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button className='search-logo' onClick={()=>{searchButton()}}><FaSearch /></button>
        </div>
      </div>
      {data.length !==0 ? ( 
      <div className="user-product-list">
              {data.map((data, index) => (
                <div key={index} className={`user-product-card ${data.sold ? 'sold-home-product' : ''}`}>
                 <Link className='product-user-link' to={`/cardetail/${data._id}`}>
                  {data.sold && <div className="sold-tag">Sold</div>}
                    <div className="user-product-container">
                      <img className='user-product-images' src={data.photo} alt={data.brand} />
                      <button className='user-home-like-button' onClick={(e) => { intrestButton(data._id); e.preventDefault() }}>
                        {intrest.some((ele) => ele._id === data._id) ? <img className='product-like' src={like} alt='like' />: <img className='product-like' src={dis} alt='dislike' />}
                      </button>
                    </div>
                    <h2 className='user-product-name'>{data.name}</h2>
                    <h3 className='user-home-product-brand'>{data.brand}</h3>
                    <h5 className='user-home-product-km'><IoMdSpeedometer />{data.km}km</h5>
                    <h4 className='user-home-product-price'>₹ {data.price.toLocaleString()}</h4>

                 </Link> 
                </div>
              ))}
      </div>
      ):( 
      <div className='se-no'>
          <img src='https://cdn-icons-png.flaticon.com/512/2748/2748558.png' className='no-match-image' alt='nothing found' />
      </div>
      )}
    </div>
  )
}
