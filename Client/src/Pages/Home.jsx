import React from 'react'
import '../Styles/Home.css'
import {useNavigate} from 'react-router-dom'

function Home(){
  
  const nav = useNavigate()

  const submitButton = () => {
    nav('/sellerlog')
  }

  return (
    <div className='home-container'>
      <div className='home-section'>
        <h2 className='home-header'>Welcome To EliteDrive !!!</h2>
        <div className='home-para'>
          <p className='home-para-section'>Welcome to EliteDrive, your premier destination for buying and selling second-hand premium vehicles in India.We redefine the automotive experience by offering a curated selection of top-tier, pre-owned vehicles that combine luxury, performance, and reliability. Our commitment to excellence ensures that every vehicle on EliteDrive meets the highest standards, making us the go-to destination for those seeking quality and sophistication in their automotive choices. Explore the epitome of luxury and reliability with EliteDrive – where every drive is an elite experienc!</p>
          <div className='home-button-section'>
            <button className='home-button' onClick={submitButton}>Sell Your Car</button>
          </div>
        </div>
      </div>
        
    </div>
  )
}
export default Home;