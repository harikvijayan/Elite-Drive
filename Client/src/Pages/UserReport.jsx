import React, { useEffect ,useState} from 'react';
import '../Styles/SellerReport.css'
import { Bounce, Flip, toast } from 'react-toastify';
import axios from 'axios';

export default function UserReport() {

    const[userReports,setUserReports]=useState([])


    useEffect(()=>{
        fetchUserReports()
    },[])


    const fetchUserReports = async()=>{
        try{
            const response = await axios.get("http://localhost:5000/userreport/getuserreport")
            setUserReports(response.data)

        }
        catch(err)
        {
            toast.error(err.response.data.message,{
                transition:Flip
            })
        }
    }
console.log(userReports);

const seenButton = async (userID, seen) => {
  try {
    const response = await axios.put(`http://localhost:5000/userreport/seenuserreport/${userID}`, {
      seen: !seen
    });

    if (response && response.data) {
      toast.success(response.data.message, {
        transition:Bounce
      });
    } else {
      throw new Error("Unexpected response structure");
    }

    fetchUserReports();
  } catch (error) {
    const errorMessage = error.response?.data.message || "Error occurred";
    toast.error(errorMessage, {
      transition:Bounce
    });
  }
};


  return (
    <div className='sell-report-container'>
      <div className='sell-report-section'>
        <div className='sell-report-division'>
          <h2 className='sell-report-header'>User Reports</h2>
          <div className='sell-report-info'>
            <table className='sell-report-table'>
              <thead className='sell-report-head'>
                <tr>
                  <th className='sell-report-h'>User ID</th>
                  <th className='sell-report-h'>Email</th>
                  <th className='sell-report-h'>Report</th>
                  <th className='sell-report-h'>Action</th>
                </tr>
              </thead>
              <tbody className='sell-report-tbody'>
              {userReports.map((reports)=>(
                <tr className='sell-report-row' key={reports._id}>
                  <td className='sell-report-data'>{reports._id}</td>
                  <td className='sell-report-data'>{reports.email}</td>
                  <td className='sell-report-data'>{reports.userreport}</td>
                  <td className='sell-report-data'>
                    <button className='sell-report-button' onClick={() => seenButton(reports._id, reports.seen)}>{reports.seen ?"Mark as Unread":"Mark as Read"}</button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
