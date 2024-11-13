import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
// import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import HomePage from './Components/Home';
import AddPost from './Components/AddPost';

function App() {
  const images = [
    'https://picsum.photos/id/237/800/400',
    'https://picsum.photos/id/238/800/400',
    'https://picsum.photos/id/239/800/400',
  ];
  
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
           <Route path="/addPost" element={<AddPost/>}/>
          
      
      {/* <Carousel images={images} /> */}
      
      
        </Routes>
      </BrowserRouter>
     
  
  );
}

export default App;

