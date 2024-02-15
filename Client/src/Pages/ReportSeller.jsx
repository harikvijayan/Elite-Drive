import React, { useState } from 'react'
import '../Styles/ReportSeller.css'
import logo from '../Icons/logo.png'
function ReportSeller() {
    const[message,setMessage]=useState("")

const submitReport = () => {
    
}

  return (
    <div className='report-body'>
        <div className='report-container'>
            <div className='report-first'>
                <div className='report-second'>
                    <div className='report-forms'>
                        <div className='report-con'>
                        <img className='report-image' src={logo} alt='logo'/>
                        <h1 className='report-name'>EliteDrive</h1>
                        </div>
                        <p className='report-para'>We are Elite Drive, South India's first choice pre owned luxury automobile dealer for many of the moto enthusiasts in Kerala.</p>
                        <p className='report-para'> Our illustrious list of pre owned luxury car brands includes Porsche, We are Royal Drive, South India's first choice pre 
                         owned luxury automobile dealer for many of the moto enthusiasts in Kerala. Our illustrious list of pre owned luxury cars...</p>
                    </div>
                    <div className='report-form'>
                        <h1 className='report-head'>Report Your Problem..</h1>
                        <input className='report-input' type='text' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        <button className='report-Button' onClick={submitReport}>Submit</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
export default ReportSeller
