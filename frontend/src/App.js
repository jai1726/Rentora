import React from 'react';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';

function App() {
  const images = [
    'https://picsum.photos/id/237/800/400',
    'https://picsum.photos/id/238/800/400',
    'https://picsum.photos/id/239/800/400',
  ];
  
  return (
    <div>
      Hi
      <Navbar/>
      <Carousel images={images} />
      <Login/>
      <SignUp/>
    </div>
  );
}

export default App;

