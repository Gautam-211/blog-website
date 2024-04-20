import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();


    async function fetchData(page=1,tag=null, category){
        setLoading(true);

        try {
            let url = `${baseUrl}?page=${page}`;
            if(tag){
                url += `&tag=${tag}`;
            }
            else if (category){
                url += `&category=${category}`;
            }

            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            
        } catch (error) {
            toast.error("Something went wrong");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }

        finally{
            console.log("Hello");
            setLoading(false);
        }
    }

    function handlePageChange(page){
        navigate({search : `?page=${page}`});
        setPage(page);
    }


    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchData,
        handlePageChange,
    };

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}