import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from 'axios'
import {useDispatch} from "react-redux"
import { authAction } from "../store";
import {useNavigate} from "react-router-dom"
const Login=()=>{
    const naviagte=useNavigate()
    const dispatch=useDispatch()

    const [input,setInput]=useState({
       fname:"",
       lname:"",
       title:"",
       email:"",
       password:"",
    });
    const [isSingup,setIsSingup]=useState(false)
    const handleChange=(e)=>{
        setInput((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const sendRequest=async (type="login")=>{
     const res=await axios.post(`http://localhost:3001/${type}`,{
            fname:input.fname,
            lname:input.lname,
            title:input.title,
            email:input.email,
            password:input.password
        }).catch(err=>console.log(err))

        const data=await res.data;
        console.log(data)
        return data
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(input)
        if(isSingup)
        {
            sendRequest("authors").then((data)=>localStorage.setItem("userId",data.data._id))
            .then(()=>dispatch(authAction.login()))
            .then(()=>naviagte("/blogs"))
            .then(data=>console.log(data))
        }else{
            sendRequest().then((data)=>localStorage.setItem("userId",data.data._id))
            .then(()=>dispatch(authAction.login()))
            .then(()=>naviagte("/blogs"))
            .then(data=>console.log(data))
        }
    }
    //console.log(data)
    return(
        <div>
         <form onSubmit={handleSubmit}>
             <Box maxWidth={"400px"} display="flex" 
             flexDirection={'column'} alignItems='center' 
             justifyContent={"center"} boxShadow="10px 10px 20px #ccc" 
             padding={3} margin='auto' 
             marginTop={5} borderRadius={5}>
                <Typography variant="h2" padding={3} textAlign="center">
                    {isSingup? "Signup":"Login"}
                </Typography>
               {isSingup &&<TextField name="fname" onChange={handleChange} value={input.fname} placeholder="FName" margin="normal"/>}{" "}
               {isSingup &&<TextField name="lname" onChange={handleChange} value={input.lname} placeholder="LName" margin="normal"/>}{" "}
               {isSingup &&<TextField name="title" onChange={handleChange} value={input.title} placeholder="Title" margin="normal"/>}{" "}
                <TextField name="email" onChange={handleChange} value={input.email} type="email" placeholder="Email" margin="normal"/>
                <TextField name="password" onChange={handleChange} value={input.password} type="Password" placeholder="password" margin="normal"/>
                <Button type="submit" variant="contained" sx={{borderRadius:3,marginTop:3}} color="warning">Submit</Button>
                <Button onClick={()=>setIsSingup(!isSingup)} sx={{borderRadius:3,marginTop:3}}>Change To {isSingup?"Login":"Signup"}</Button>
             </Box>
         </form>
        </div>
    )
}

export default Login