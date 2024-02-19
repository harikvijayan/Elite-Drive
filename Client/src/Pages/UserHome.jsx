import React from 'react';
import '../Styles/UserHome.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'


function UserHome() {
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
    </Carousel>
        </div>
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

        </div>
        <div className='user-home-others'>

        </div>
        
    </div>
  )
}

export default UserHome
