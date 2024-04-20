import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';

const Blogs = () => {

    const {posts,loading} = useContext(AppContext);

  return (
    <div className='w-[100vw] h-full flex flex-col gap-y-10 justify-center items-center text-white'>
        {
            loading? (<Spinner/>) : 
            (
                posts.length === 0 ? (<div className='w-full h-[76vh] flex items-center justify-center text-3xl font-semibold'>
                    <h1>No Posts Found</h1>
                </div>) 
                 : 
                (posts.map( (post) => (
                    <Card key={post.id} post={post}/>
                ) ))
            )
        }
    </div>
  )
}

export default Blogs