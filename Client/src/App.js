import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import './App.css';
import  Login  from './Pages/Login';
import  Registration  from './Pages/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<Registration/>} />
          </Routes>
      </BrowserRouter>
      <ToastContainer /> 
    </div>
  );
}

export default App;
