import React, { useEffect ,useState} from 'react';
import '../Styles/SellerReport.css'
import { Bounce, Flip, toast } from 'react-toastify';
import axios from 'axios';

export default function SellerReport() {

    const[sellReports,setSellReports]=useState([])


    useEffect(()=>{
        fetchSellerReports()
    },[])


    const fetchSellerReports = async()=>{
        try{
            const response = await axios.get("http://localhost:5000/sellerreport/getsellerreport")
            setSellReports(response.data)

        }
        catch(err)
        {
            toast.error(err.response.data.message,{
                transition:Flip
            })
        }
    }
console.log(sellReports);

const deleteButton = async (id) =>{
  try{
    const response = await axios.delete(`http://localhost:5000/sellerreport/delsellerreport/${id}`)
    toast.success(response.data.message,{
      transition:Flip
    })
    fetchSellerReports();
  }
  catch(error)
  {
    console.log(error);
  }
}

const seenButton = async (sellerID, seen) => {
  try {
    const response = await axios.put(`http://localhost:5000/sellerreport/seensellerreport/${sellerID}`, {
      seen: !seen
    });

    if (response && response.data) {
      toast.success(response.data.message, {
        transition:Bounce
      });
    } else {
      throw new Error("Unexpected response structure");
    }

    fetchSellerReports();
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
          <h2 className='sell-report-header'>Seller Reports</h2>
          <div className='sell-report-info'>
            <table className='sell-report-table'>
              <thead className='sell-report-head'>
                <tr>
                  <th className='sell-report-h'>Seller ID</th>
                  <th className='sell-report-h'>Email</th>
                  <th className='sell-report-h'>Report</th>
                  <th className='sell-report-h'>Action</th>
                </tr>
              </thead>
              <tbody className='sell-report-tbody'>
              {sellReports.map((reports)=>(
                <tr className='sell-report-row' key={reports._id}>
                  <td className='sell-report-data'>{reports._id}</td>
                  <td className='sell-report-data'>{reports.email}</td>
                  <td className='sell-report-data'>{reports.sellerreport}</td>
                  <td className='sell-report-data'>
                    <button className='sell-report-button' onClick={() => seenButton(reports._id, reports.seen)}>{reports.seen ?"Mark as Unread":"Mark as Read"}</button>
                    <button className='sell-report-delete-button' onClick={() => deleteButton(reports._id)}>Delete</button>
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
