import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1).replaceAll('-',' ');

    return(
    <div className='mt-[13vh] mb-[12vh] flex flex-col w-[100vw] items-center'>
        <div className='flex gap-2 md:gap-10 w-11/12 md:w-2/3 px-4 justify-center items-center tracking-wide mb-3'>
            <button className='bg-gray-500 text-xl md:text-2xl font-semibold px-4 py-2 rounded-md'
            onClick={() => {navigate(-1)}}>
                BACK
            </button>
            <h1 className='text-xl md:text-2xl text-white flex items-center gap-x-1 md:gap-x-2'>
                Blogs on <span className='text-blue-500 underline'>{category}</span>
            </h1>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
    )
}

export default CategoryPage