import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import '../Styles/Search.css'

export default function Search() {
    const[search,setSearch]=useState()

  const searchButton = () => {

  }



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
    </div>
  )
}
