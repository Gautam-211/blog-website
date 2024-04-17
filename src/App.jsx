import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";

function App() {

  const {fetchData} = useContext(AppContext);

  useEffect( () => {
    fetchData();
  },[])

  return (
    <div className='relative w-screen min-h-screen flex flex-col bg-gray-800'>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;
