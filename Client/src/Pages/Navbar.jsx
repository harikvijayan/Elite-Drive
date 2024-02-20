import AdminNavbar from './Navbars/AdminNavbar.jsx';
import HomeNavbar from './Navbars/DefaultNavbar.jsx';
import SellerNavbar from './Navbars/SellerNavbar.jsx';
import UserNavbar from './Navbars/UserNavbar.jsx';

function Navbar() {
  const userToken = localStorage.getItem("userID");
  const adminToken = localStorage.getItem("adminID");
  const sellerToken = localStorage.getItem("sellerID");

  if (!userToken && !adminToken && !sellerToken) 
  {

    return <HomeNavbar />;

  }
   else if (adminToken) 
  {

    return <AdminNavbar />;

  } 
  else if (userToken) 
  { 
    return <UserNavbar />;


  }
  else if (sellerToken) 
  {

    return <SellerNavbar />;

  }
  else 
  {
    
    return null;

  }
}

export default Navbar;
