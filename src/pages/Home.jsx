import React from 'react';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const Home = () => {
  return (
    <div className='mt-[12vh] mb-[12vh]'>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default Home