import React from 'react'
import '../Styles/Home.css'


function Home(){

  const submitButton = () => {
    
  }

  return (
    <div className='home-container'>
      <div className='home-section'>
        <h2 className='home-header'>Welcome To EliteDrive !!!</h2>
        <div className='home-para'>
          <p className='home-para-section'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae tempore corrupti sapiente ad debitis, velit itaque quisquam! Architecto omnis commodi perferendis id in accusamus vitae ipsam ullam vel harum!</p>
          <div className='home-button-section'>
            <button className='home-button' onClick={submitButton}>Sell Your Car</button>
          </div>
        </div>
      </div>
        
    </div>
  )
}
export default Home;