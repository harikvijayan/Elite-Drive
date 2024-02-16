import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import './App.css';
import  Login  from './Pages/Login';
import  Registration  from './Pages/Registration';
import Home from './Pages/Home';
import AdminInterface from './Pages/AdminInterface';
import SellerLog from './Pages/SellerLog';
import SellerRegistration from './Pages/SellerRegistration';
import AdminLog from './Pages/AdminLog';

import SellCar from './Pages/SellCar';
import ReportSeller from './Pages/ReportSeller';
import Navbar from './Pages/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<Registration/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/admininter' element={<AdminInterface/>} />
            <Route path='/sellerlog' element={<SellerLog/>} />
            <Route path='/sellerreg' element={<SellerRegistration/>} /> 
            <Route path='/adminlogin' element={<AdminLog/>} />
            <Route path='/productadd' element={<SellCar/>} />
            <Route path='/sellerreport' element={<ReportSeller/>} />

            <Route path='/nav' element={<Navbar/>} />
            
 
          </Routes>
      </BrowserRouter>
      <ToastContainer /> 
    </div>
  );
}

export default App;
