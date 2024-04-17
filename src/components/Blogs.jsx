import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {

    const {posts,loading} = useContext(AppContext);

  return (
    <div className='w-[100vw] h-full flex flex-col gap-y-10 justify-center items-center mt-[12vh] mb-[12vh] text-white'>
        {
            loading? (<Spinner/>) : 
            (
                posts.length === 0 ? (<div className='w-full h-[100vh] flex items-center justify-center text-3xl font-semibold'>
                    <h1>No Posts Found</h1>
                </div>) 
                 : 
                (posts.map( (post) => (
                    <div key={post.id} className='w-2/3 flex flex-col items-star gap-y-1'>
                        <p className='font-bold text-yellow-50 text-2xl'>{post.title}</p>
                        <p className='text-green-200 text-sm'>
                            By <span className='italic'>{post.author}</span> on <span className='underline cursor-pointer'>{post.category}</span>
                        </p>
                        <p className='text-gray-400 text-xs'>
                            Posted on {post.date}
                        </p>
                        <p className='text-blue-100 text-lg'>
                            {post.content}
                        </p>
                        <div className='flex flex-wrap gap-x-3 gap-y-2'>
                            {
                                post.tags.map( (tag,index ) => (
                                    <span key={index} className='text-blue-400 underline cursor-pointer'>#{tag}</span>
                                ))
                            }
                        </div>
                    </div>
                ) ))
            )
        }
    </div>
  )
}

export default Blogs