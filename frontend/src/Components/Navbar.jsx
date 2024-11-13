import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Importing user icon from react-icons
import {useNavigate} from 'react-router-dom';


export default function Navbar() {
  const navigate= useNavigate();
 
 const handleLogout=()=>{
  
  localStorage.removeItem('jwtToken');
  navigate('/');
 }
  return (
    <div>
    <nav className="bg-purple-400 p-4 ">
      {
      !(localStorage.getItem('jwtToken'))?
      <div className="flex justify-between items-center">
      <div className="text-white">
        <a href="/" className="text-lg font-semibold">Rentora.IDK</a>
      </div>
      
      <div className="text-white">
      <div className="flex text-xl gap-5">
        <button  onClick={()=>navigate('/login')}>Login</button>
        <button onClick={()=>navigate('/signup')}>SignUp  </button>
        {/* <button onClick={handleLogout}>LogOut</button> */}
        <FaUserCircle size={30} />
      </div>
       
      </div>
      </div>
      :
      <div className="flex justify-between items-center">
      <div className="text-white">
        <a href="/" className="text-lg font-semibold">RentoraLoginned.</a>
      </div>
      <div className="flex gap-10 text-3xl">
      <button  onClick={()=>navigate('/')}>wishList</button>
        <button onClick={()=>navigate('/addPost')}>post</button>
        <button onClick={()=>navigate('/')}>messages</button>
        
      <div className="text-white flex-col">
        <FaUserCircle size={35} />
        <button onClick={handleLogout}>Logout</button>
      </div>
      </div>
      </div>
      
}
    </nav>
    </div>
  );
}
