import { Route, Routes } from "react-router-dom";
import Header from "./components/header"
import Login from "./components/login";
import Blogs from "./components/blogs";
import UserBlogs from "./components/userblogs";
import BlogsDetails from "./components/blogsdetails";
import AddBlogs from "./components/addblogs";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn=useSelector((state)=>state.isLoggedIn);
  console.log(isLoggedIn)
  return <React.Fragment>
     <header>
     <Header/>
     </header>
     
   
    <main>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/myblogs" element={<UserBlogs/>}/>
        <Route path="/myblogs/:id" element={<BlogsDetails/>}/>
        <Route path="/blogs/add"element={<AddBlogs/>}/>

      </Routes>
    </main>
  </React.Fragment>
}

export default App;
