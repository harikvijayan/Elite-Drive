import React from 'react'
import '../Styles/SellHome.css'
import { useNavigate } from 'react-router-dom'

export default function SellerHome() {

    const nav=useNavigate()

const sellCar = () =>{
    nav('/productadd')
}

  return (
    <div className='sell-home-container'>
        <div className='sell-home-section'>
            <div className='sell-home-sector'>
                <h1 className='sell-home-title'>EliteDrive Welcomes You !!!</h1>
                <div className='sell-home-para-section'>
                    <p className='sell-home-para'>Welcome to EliteDrive, your premier destination for buying and selling second-hand premium vehicles in India.We redefine the automotive experience by offering a curated selection of top-tier, pre-owned vehicles that combine luxury, performance, and reliability. Our commitment to excellence ensures that every vehicle on EliteDrive meets the highest standards, making us the go-to destination for those seeking quality and sophistication in their automotive choices. Explore the epitome of luxury and reliability with EliteDrive – where every drive is an elite experience!</p>
                </div>
                <div className='sell-home-but'>
                    <button className='sell-home-button' onClick={()=>{sellCar()}}>Sell Your Car</button>
                </div>
            </div>
        </div>
    </div>
  )
}
