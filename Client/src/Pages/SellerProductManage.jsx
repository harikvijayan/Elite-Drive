import axios from 'axios'
import React, { useEffect, useState } from 'react'
import sellerID from '../Hooks/Seller'
import '../Styles/SellProManage.css'
import { Flip, toast ,Bounce} from 'react-toastify'

function SellerProductManage() {
    const[products,setProducts]=useState([])
    const[productid,setProductid]=useState("")
    const sellID=sellerID()
    const[toggle,setToggle]=useState(0)
    const[car,setCar]=useState(0)
    const[km,setKm]=useState("")
    const[name,setName]=useState("")
    const[brand,setBrand]=useState("")
    const[color,setColor]=useState("")
    const[price,setPrice]=useState("")
    const[photo,setPhoto]=useState("")
    const[mileage,setMileage]=useState("")
    const[year,setYear]=useState("")
    const[owner,setOwner]=useState("")
    const[fuel,setFuel]=useState("")
    const[enginecc,setEnginecc]=useState("")


useEffect(()=>{
    sellerProducts()
},[])

const sellerProducts = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/product/getsellerproduct/${sellID}`);
        setProducts(response.data);
        
    } catch (error) {
        console.error("Error fetching seller products:", error);
        
    }
}

const proEdit = async(id) => {
   try
   {
    setToggle(1)
    toast("You can edit your product now !!!"), {
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
    setProductid(id)
    const response = await axios.get(`http://localhost:5000/product/getspecproduct/${id}`)
    setCar(response.data)
    setName(response.data.name)
    setBrand(response.data.brand)
    setColor(response.data.color)
    setPhoto(response.data.photo)
    setPrice(response.data.price)
    setMileage(response.data.mileage)
    setEnginecc(response.data.enginecc)
    setYear(response.data.year)
    setOwner(response.data.owner)
    setFuel(response.data.fuel)
    setKm(response.data.km)

   }
   catch(error)
    {
        toast.error(error?.response?.data?.message,{
            transition:Bounce
        })
    } 
}

const editCancel = async() => {
    setToggle(0)
    
}


const proUpdate = async(id) =>{
   try
   {
    const response = await axios.put(`http://localhost:5000/product/sellproupdate/${id}`,{name,brand,price,color,photo,year,enginecc,mileage,owner,km,fuel,loginid:sellID});
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
        setToggle(0)
        sellerProducts()
   }
   catch(error)
    {
        toast.error(error?.response?.data?.message,{
            transition:Bounce
        })
    } 
}

const proSoldButton = async(id,sold) =>{
    try
    {
        if(sold===true)
        {
            const response =  await axios.put(`http://localhost:5000/product/sold/${id}`,{sold:false})
            toast(response.data.message,{
                transition:Bounce
            })
        }
        else
        {
            const response =  await axios.put(`http://localhost:5000/product/sold/${id}`,{sold:true})
            toast(response.data.message,{
                transition:Bounce
            })
        }
        sellerProducts()
    }
    catch(error)
    {
        toast.error(error?.response?.data?.message,{
            transition:Bounce
        })
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
         sellerProducts()   
    }
    catch(error)
    {
    toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        });
    } 
}


console.log("cars",products);
  return (
    <div className='product-add-container'>
        <h2 className='product-add-title'>Your Cars For Sell</h2>
        <div className='product-add-section' >
        {products.map((pro)=>(   
          <div className='product-add-map' key={pro._id}>
             <div className='product-image-sec'>
                <img className='product-image' src={pro.photo} alt='Product Image'/>
             </div>
             <div className='product-detail-sec'>
                <h2 className='product-model-sec'>{pro.name}</h2>
                <h3 className='product-brand-sec'>{pro.brand}</h3>
             </div>   
             <div className='product-spec-buttons'>
                <button className='product-spec-button' onClick={()=>{proEdit(pro._id)}}>Edit</button>
                <button className='product-spec-button-d' onClick={()=>{proDelete(pro._id)}}>Delete</button>
             </div>
             <div className='product-sold-sec'>
                <button className='product-sold-button' onClick={()=>{proSoldButton(pro._id,pro.sold)}}>{pro.sold ? "Unsold":"Sold"}</button>
             </div>
          </div>
        ))}
        </div>
        {toggle ? (
        <div className='product-edit-section'>
            <div className='product-add-form-edit'>
                <input
                 type='text'
                 className='product-add-input'
                 value={name}
                 placeholder='Model'
                 onChange={(e)=>setName(e.target.value)}
                />
                <input
                 type='text'
                 className='product-add-input'
                 value={brand}
                 placeholder='Brand'
                 onChange={(e)=>setBrand(e.target.value)}
                />
                <input
                 type='text'
                 value={color}
                 className='product-add-input'
                 placeholder='Color'
                 onChange={(e)=>setColor(e.target.value)}
                />
                <input
                 type='number'
                 value={km}
                 className='product-add-input'
                 placeholder='Kilometers'
                 onChange={(e)=>setKm(e.target.value)}
                />
                <input
                 type='text'
                 value={price}
                 className='product-add-input'
                 placeholder='Price'
                 onChange={(e)=>setPrice(e.target.value)}
                />
                <input
                 type='text'
                 value={photo}
                 className='product-add-input'
                 placeholder='Photo'
                 onChange={(e)=>setPhoto(e.target.value)}
                />
                <input
                 type='text'
                 value={mileage}
                 className='product-add-input'
                 placeholder='Mileage'
                 onChange={(e)=>setMileage(e.target.value)}
                />
                <input
                 type='text'
                 value={year}
                 className='product-add-input'
                 placeholder='Year'
                 onChange={(e)=>setYear(e.target.value)}
                />
                <input
                 type='text'
                 value={fuel}
                 className='product-add-input'
                 placeholder='Fuel'
                 onChange={(e)=>setFuel(e.target.value)}
                />
                <input
                 type='text'
                 value={enginecc}
                 className='product-add-input'
                 placeholder='Engine CC'
                 onChange={(e)=>setEnginecc(e.target.value)}
                />
                <input
                 type='text'
                 value={owner}
                 className='product-add-input'
                 placeholder='owner'
                 onChange={(e)=>setOwner(e.target.value)}
                />
                <div className='product-add-f-sec'>
                    <button className='product-add-fbutton' onClick={()=>{proUpdate(productid)}}>Update</button>
                    <button className='product-add-fbutton' onClick={()=>{editCancel()}}>Cancel</button>
                </div>
            </div>
        </div>
        ) : (
        <div className='product-none-section'>

        </div>
        )}
    </div>
    )}
export default SellerProductManage