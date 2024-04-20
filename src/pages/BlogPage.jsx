import React, { useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import Card from '../components/Card';

const BlogPage = () => {
    const [blog,setBlog] = useState(null);
    const [relatedBlogs,setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {loading, setLoading} = useContext(AppContext);
    const newBaseUrl = 'https://codehelp-apis.vercel.app/api/';

    const blogId = location.pathname.split('/').at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs)
        }
        catch(error){
            toast.error("Something went wrong");
            setBlog(null);
            setRelatedBlogs([]);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect( () => {
        if (blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname,location.search])

  return (
    <div className='mt-[13vh] mb-[12vh] flex flex-col w-[100vw] items-center'>
        <button className='bg-gray-500 text-xl md:text-2xl font-semibold px-4 py-2 rounded-md mb-3'
            onClick={() => {navigate(-1)}}>
            BACK
        </button>
        {
            loading? 
            (<Spinner/>)
             : 
            (blog? 
            (
                <div className='flex flex-col w-full items-center gap-y-7'>
                    <Card post={blog}/>
                    <h2 className='text-4xl font-semibold text-white my-5'>Related blogs</h2>
                    {
                        relatedBlogs.map( (post) => (
                            <div className='w-full flex flex-col items-center'
                            key={post.id}>
                                <Card post={post}/>
                            </div>
                        ))
                    }
                </div>
            ) 
            : 
            (<div className='w-full h-[76vh] flex items-center justify-center text-3xl font-semibold'>
                <h1>No Posts Found</h1>
            </div>)) 
        }
    </div>
  )
}

export default BlogPage