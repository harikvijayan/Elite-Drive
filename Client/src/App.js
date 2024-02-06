import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import './App.css';
import  Login  from './Pages/Login';
import  Registration  from './Pages/Registration';
import Home from './Pages/Home';
import AdminLogin from './Pages/AdminLogin';
import AdminInterface from './Pages/AdminInterface';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<Registration/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/adminlog' element={<AdminLogin/>} />
            <Route path='/admininter' element={<AdminInterface/>} />

          </Routes>
      </BrowserRouter>
      <ToastContainer /> 
    </div>
  );
}

export default App;
