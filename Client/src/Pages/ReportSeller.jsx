import React, { useState } from 'react'
import '../Styles/ReportSeller.css'
function ReportSeller() {
    const[message,setMessage]=useState("")

const submitReport = () => {
    
}

  return (
    <div className='report-body'>
        <div className='report-container'>
            <div className='report-first'>
                <div className='report-second'>
                    <div className='report-form'>
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
