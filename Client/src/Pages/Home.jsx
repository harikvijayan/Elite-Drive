import React from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Home(){
    const nav=useNavigate()
    const [Cookies,setCookies]=useCookies(['access_token'])

    const buttonClick = () =>{
    
        setCookies("access_token","")
        localStorage.removeItem("userID")
        nav('/')
    }
  return (
    <div>
        <h1>Home</h1>
        <div>
          {Cookies.access_token && <button onClick={()=>{buttonClick()}}>Logout</button>}
            
        </div>
    </div>
  )
}
export default Home;