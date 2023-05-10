import React, { useEffect, useState } from 'react'
import axios from "axios";
const Userblogs = () => {

   const [blogs,setBlogs]=useState()
   const id=localStorage.getItem("userId")
   const [error,setError]=useState("")


  //  const sendRequest=async()=>{
  //     const res=await axios.get(`http://localhost:3001/blog/${id}`).catch((err)=>console.log(err))
  //     const data=await res.data

  //     return data
       
  // };
  useEffect(()=>{
    axios.get(`http://localhost:3001/blog/${id}`)
       .then((res)=>{
         console.log(res.data)
         setBlogs(res.data.msg)
        }
         )
        .catch((error)=>setError(error.message))
   // sendRequest().then((data)=>setBlogs(data.blogs))
  },[])
   console.log(blogs)

   //return <div>myblogs</div>
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

}

export default Userblogs