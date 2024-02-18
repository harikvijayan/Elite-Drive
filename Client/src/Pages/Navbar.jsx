
import React from 'react';
import AdminNavbar from './Navbars/AdminNavbar.jsx';
import HomeNavbar from './Navbars/DefaultNavbar.jsx';
import SellerNavbar from './Navbars/SellerNavbar.jsx';
import UserNavbar from './Navbars/UserNavbar.jsx';

function Navbar({ userRole }) {

  const userToken = localStorage.getItem("user_token");
  const adminToken = localStorage.getItem("admin_token");
  const sellerToken = localStorage.getItem("seller_token");

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
