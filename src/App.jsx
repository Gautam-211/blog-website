import { useContext, useEffect} from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams  } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  const {fetchData} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect( () => {

    const page = searchParams.get('page') ?? 1;

    if (location.pathname.includes('tags')){
      const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchData(Number(page), tag);
    }
    else if(location.pathname.includes('categories')){
      const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchData(Number(page), null , category);
    }
    else{
      fetchData(Number(page));
    }

  },[location.pathname, location.search]);

  return (
    <div className='relative w-screen min-h-screen flex flex-col bg-gray-800'>
    <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/blog/:blogId" element={<BlogPage/>}/>
       <Route path="/tags/:tag" element={<TagPage/>}/>
       <Route path="/categories/:category" element={<CategoryPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
