import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login(){
const [mail,setMail]=useState("")
const [word,setWord]=useState("")
  return (
    <div className='container'>
        <div>
            <div>
            <div className='box'>
            <input
             value={mail}
             placeholder='Email'
             type='email'
             onChange={(e)=>setMail(e.target.value)}
            />
            </div>
            <div className='box'>
            <input
             type='text'
             placeholder='Password'
             value={word}
             onChange={(e)=>setWord(e.target.value)}
            />
            </div>
            <div>
            <button onClick={()=>{handleLogin()}}>Login</button>
            </div>
            <div>
              <p>Doesn't have an account?<Link to='/signup'>signup</Link> </p>
            </div>
            </div>
        </div>

    </div>
  )
}
export default Login