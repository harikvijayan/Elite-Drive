import axios from 'axios'
import React, { useEffect, useState } from 'react'
import sellerID from '../Hooks/Seller'

function SellerProductManage() {
    const[products,setProducts]=useState()
    const sellID=sellerID()


useEffect(()=>{
    sellerProducts()
})

const sellerProducts = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/product/getsellerproduct/${sellID}`);
        setProducts(response.data);
    } catch (error) {
        console.error("Error fetching seller products:", error);
        
    }
}

console.log("cars",products);
  return (
    <div>
        <h1>seller products</h1>
    </div>
  )
}
export default SellerProductManage