import React from 'react';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import PostCard from './Components/PostCard/PostCard';

function App() {
  const images = [
    'https://picsum.photos/id/237/800/400',
    'https://picsum.photos/id/238/800/400',
    'https://picsum.photos/id/239/800/400',
  ];
  
  return (
    <div className='w-full'>
      Hi
      <Navbar/>
      <div className=''>
        <PostCard/>
      </div>
      <Carousel images={images} />
      <Login/>
      <SignUp/>
    </div>
  );
}

export default App;

