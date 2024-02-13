import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import './App.css';
import  Login  from './Pages/Login';
import  Registration  from './Pages/Registration';
import Home from './Pages/Home';
import AdminInterface from './Pages/AdminInterface';
import SellerLog from './Pages/SellerLog';
import SellerRegistration from './Pages/SellerRegistration';
import Seller from './Pages/Seller';
import SellerReg from './Pages/SellerReg';
import AdminLog from './Pages/AdminLog';
import Buyer from './Pages/Buyer';


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

            <Route path='/seller' element={<Seller/>} />
            <Route path='/sellerregistration' element={<SellerReg/>} />
            <Route path='/adminlogin' element={<AdminLog/>} />

            <Route path='/buyer' element={<Buyer/>} />


            
           
          </Routes>
      </BrowserRouter>
      <ToastContainer /> 
    </div>
  );
}

export default App;
