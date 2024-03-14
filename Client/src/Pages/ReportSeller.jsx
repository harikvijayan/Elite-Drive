import React, { useEffect, useState } from 'react'
import '../Styles/ReportSeller.css'
import logo from '../Icons/logo.png'
import sellerID from '../Hooks/Seller';
import {  toast,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function ReportSeller() {
    const[message,setMessage]=useState("")
    const[mail,setMail]=useState([])
    const [report, setReport] = useState([]);
    const[loginid]=useState(sellerID)
    const sellID=sellerID()
    console.log(loginid);

useEffect(()=>{
    fetchUser();
    fetchReport();
})

const fetchUser = async() =>{
    try{
        const response=await axios.get(`http://localhost:5000/seller/getseller/${sellID}`)
        setMail(response.data.email)
    }
    catch(err)
    {
        console.log(err);
    }
}
console.log(mail);



const submitReport = async() => {
    try{
       const response = await axios.post("http://localhost:5000/sellerreport/addbyseller",{sellerreport:message,loginid,email:mail})
       toast(response.data.message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Flip,
      });
     setMessage("")
    }
    catch(err)
    {
        toast.error(err.response.data.message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Flip,
          });
    }
    
}


const fetchReport = async() =>{
    const response = await axios.get(`http://localhost:5000/sellerreport/getsellerreport/${sellID}`)
    setReport(response.data)
}
console.log("report",report);
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
                        <p className='report-para'>"Hello EliteDrive community! Your satisfaction is our priority. If you've encountered any issues or have feedback regarding our premium second-hand cars, we're here to assist you. Your input helps us improve and ensures your experience with EliteDrive is nothing short of exceptional. Please feel free to report any problems or share your feedback here. Thank you for being a part of the EliteDrive family!"</p>
                    </div>
                    <div className='report-form'>
                        <h1 className='report-head'>Report Your Problem..</h1>
                        <input className='report-input' type='text' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        <button className='report-Button' onClick={submitReport}>Submit</button>
                    </div>
                    {report.length !== 0 ? (  
                    <div className='report-mapping-container'> 
                        <div className='report-map-table'>
                            <h3 className='report-map-heading'>Your Most Recent Report</h3>
                            <table className='map-report-table'>
                                <thead className='map-report-head'>
                                    <tr>
                                        <th className='map-report-h'>Report</th>
                                        <th className='map-report-h'>Status</th>
                                    </tr>
                                </thead>
                                <tbody className='map-report-tbody'>
                                 {report.map((data)=>(
                                    <tr className='map-report-row' key={data._id}>
                                     <td className='map-report-data'>{data.sellerreport}</td>
                                     <td className='map-report-data'>{data.seen ? "Received" : "Pending"}</td>
                                    </tr>
                                 ))}
                                </tbody>

                            </table>

                        </div>
                    </div>
                    ):(
                    <div className='report-no-map'>
                        <h4 className='report-no-header'>You Haven't Reported Any Problem..☺</h4>
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
  )
}
export default ReportSeller
