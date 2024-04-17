import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const {totalPages,page,handlePageChange} = useContext(AppContext);

  return (
    <div className='fixed bottom-0 w-full h-[10vh] bg-black text-white flex justify-center mt-6'>
        <div className='h-full w-2/3 flex items-center justify-between'>

        <div className='flex md:gap-8 gap-2'>
            {
            page>1 &&
                <button className='bg-gray-600 px-4 py-2 rounded-md hover:bg-slate-700 ease-in duration-200'
                onClick={() => {handlePageChange(page-1)}}>
                    Previous
                </button>
            }
            {
            page<totalPages &&
                <button className='bg-gray-600 px-4 py-2 rounded-md hover:bg-slate-700 ease-in duration-200'
                onClick={() => {handlePageChange(page+1)}}>
                    Next
                </button>
            }
        </div>
        <div>
            <p>Page <span className='text-green-400'>{page}</span> of <span className='text-blue-400'>{totalPages}</span></p>
        </div>
        
        </div>
    </div>
  )
}

export default Pagination