import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({post}) => {
  return (
    <div key={post.id} className='w-2/3 flex flex-col items-start gap-y-1'>
        <NavLink to={`/blog/${post.id}`}>
            <p className='font-bold text-yellow-50 text-2xl hover:text-yellow-100 hover:underline
            ease-in duration-200'>{post.title}</p>
        </NavLink>
            <p className='text-green-200 text-sm'>
                By <span className='italic'>{post.author}</span> on 
                <NavLink to={`/categories/${post.category.replaceAll(' ','-')}`}>
                    <span className='underline cursor-pointer ml-2 hover:text-green-400 ease-in duration-200'>{post.category}</span>
                </NavLink>
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
                        <NavLink to={`/tags/${tag.replaceAll(' ','-')}`}>
                            <span key={index} className='text-blue-400 underline cursor-pointer hover:text-blue-500 ease-in
                            duration-200'>#{tag}</span>
                        </NavLink>
                    ))
                }
            </div>
    </div>
  )
}

export default Card