import React, { useEffect } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="flex-col items-center justify-center w-full h-full gap-y-1">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
