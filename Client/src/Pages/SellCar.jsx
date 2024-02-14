import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/SellCar.css'
import sellerID from '../Hooks/Seller';

function SellCar() {
    const[name,setName]=useState("")
    const[brand,setBrand]=useState("")
    const[color,setColor]=useState("")
    const[price,setPrice]=useState("")
    const[photo,setPhoto]=useState("")
    const[mileage,setMileage]=useState("")
    const[year,setYear]=useState("")
    const[fuel,setFuel]=useState("")
    const[enginecc,setEnginecc]=useState("")
    const[owner,setOwner]=useState("")
    const[loginid]=useState(sellerID)

    const handleSubmit =async() =>{
        try{
            await axios.post("http://localhost:5000/product/add",{name,brand,color,price,photo,mileage,year,fuel,enginecc,owner,loginid})
            toast.success('Product Added  Successfully ', {
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
                setName("")
                setBrand("")
                setColor("")
                setPhoto("")
                setPrice("")
                setMileage("")
                setFuel("")
                setEnginecc("")
                setYear("")
                setOwner("")
        }
        catch(err){
            toast.error(err.response.data.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        }
    }

  return (
    <div>
        <div className='container-field'>
            <div className='container-field-form'>
                <div className='field-form-seller'>
                    <h4 className='moye-moye'>Car Details</h4>
                  
                    <input className='input-seller' placeholder="Name" type='text' value={name}  onChange={(e)=>setName(e.target.value)}/>
                 
                    <input className='input-seller' type='text' value={brand} placeholder='Brand' onChange={(e)=>setBrand(e.target.value)}/>
               
                    <input className='input-seller' type='text' value={color} placeholder='Color' onChange={(e)=>setColor(e.target.value)}/>
                  
                   
                    <input className='input-seller' type='number' value={price} placeholder='Price' onChange={(e)=>setPrice(e.target.value)}/>
                   
                
                    <input className='input-seller' type='text' value={photo} placeholder='Photo' onChange={(e)=>setPhoto(e.target.value)}/>
                 
                  
                    <input className='input-seller' type='number' value={mileage} placeholder='Mileage' onChange={(e)=>setMileage(e.target.value)}/>
                   
                  
                    <input className='input-seller' type='number' value={year} placeholder='Year' onChange={(e)=>setYear(e.target.value)}/>
          
                   
                    <input className='input-seller' type='text' value={fuel} placeholder='Fuel' onChange={(e)=>setFuel(e.target.value)}/>
                  
               
                    <input className='input-seller' type='number' value={enginecc} placeholder='EngineCC' onChange={(e)=>setEnginecc(e.target.value)}/>
                   
                    
                    <input className='input-seller' type='number' value={owner} placeholder='Owner' onChange={(e)=>setOwner(e.target.value)}/>
                   
                    <div className='form-button-handle'>
                        <button className='btn-sell' onClick={handleSubmit} >Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default SellCar