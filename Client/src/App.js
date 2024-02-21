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

import ReportUser from './Pages/ReportUser';
import UserNavbar from './Pages/Navbars/UserNavbar';
import AdminNavbar from './Pages/Navbars/AdminNavbar';
import SellerNavbar from './Pages/Navbars/SellerNavbar';
import HomeNavbar from './Pages/Navbars/DefaultNavbar';
import Navbar from './Pages/Navbar';
import UserHome from './Pages/UserHome';
import UserProfileEdit from './Pages/UserProfileEdit';
import UserManagement from './Pages/UserManagement';
import SellerManagement from './Pages/SellerManagement';
import SellerReport from './Pages/SellerReport';
import UserReport from './Pages/UserReport';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Registration/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/admininter' element={<AdminInterface/>} />
            <Route path='/sellerlog' element={<SellerLog/>} />
            <Route path='/sellerreg' element={<SellerRegistration/>} /> 
            <Route path='/adminlogin' element={<AdminLog/>} />
            <Route path='/productadd' element={<SellCar/>} />
            <Route path='/sellerreport' element={<ReportSeller/>} />
            <Route path='/userreport' element={<ReportUser/>} />
            <Route path='/usernav' element={<UserNavbar/>} />
            <Route path='/adminnav' element={<AdminNavbar/>} />
            <Route path='/sellernav' element={<SellerNavbar/>} />
            <Route path='/defaultnav' element={<HomeNavbar/>} />
            <Route path='/userhome' element={<UserHome/>} />
            <Route path='/useredit' element={<UserProfileEdit/>} />
            <Route path='/usermanage' element={<UserManagement/>} />
            <Route path='/sellermanage' element={<SellerManagement/>} />
            <Route path='/sellreportmanage' element={<SellerReport/>} />
            <Route path='/userreportmanage' element={<UserReport/>} />
            
 
          </Routes>
      </BrowserRouter>
      <ToastContainer /> 
    </div>
  );
}

export default App;
