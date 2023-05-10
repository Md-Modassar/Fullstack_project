import React, { useEffect,useState } from 'react'
//import Blog from './Blog'
import axios from 'axios'
const Blogs = () => {
 const [blogs,setBlogs] =useState([]);
 const [error,setError]=useState("")
  // const sendRequest = async ()=>{
  //   let res =await axios.get("http://localhost:3001/blogs").catch((err)=>console.log(err))
  //   const data=await res.data
  //   console.log(data)
  //   return res.data
  // }
  useEffect(()=>{
     axios.get("http://localhost:3001/blogs")
       .then((res)=>{
         console.log(res.data.msg)
         setBlogs(res.data.msg)})
         .catch((error)=>setError(error.message))

  
  },[]);
  //console.log(blogs)
 return (
 <>
 {error!=="" &&  <h1>{error}</h1>}
  <div className='grid'>
   { 
    blogs.map((data)=>{
      const {title,body,_id}=data
      return(
         
         <div className='card'  key={_id}>
            
            <h2>{title.slice(0,15).toUpperCase()}</h2>
            <p>{body.slice(0,100)}
               </p>
               <p>{_id}</p>

         </div>
        
        // <div><Blog title={title} body={body} authorId={authorId}/></div>
      )
    }
     
     )
   }
   </div>
   </>
   )
    //return (<div>blog</div>)
  
}

export default Blogs