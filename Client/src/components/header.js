import React ,{ useState } from "react";
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store";

const Header = () => {
  const dispatch=useDispatch()
 const [value,setValue]= useState()
 //const isLoggedIn=useSelector((state)=>state.isLoggedIn);
   const isLoggedIn=useSelector((state)=>state.isLoggedIn)
  // console.log(isLoggedIn)
  return(
   <AppBar position="sticky" sx={{background:"green"}}>
    <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        {isLoggedIn &&<Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
             <Tabs textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
                 <Tab LinkComponent={Link} to="/blogs"  label="All Blogs"/>
                 <Tab LinkComponent={Link} to="/myblogs" label="My Blogs"/>
                 <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog"/>
             </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
            { !isLoggedIn&&<><Button LinkComponent={Link} to="/login" variant="contained" sx={{margin:1,borderRadius:10}}color="warning">Login</Button>
             <Button variant="contained" sx={{margin:1,borderRadius:10}}color="warning">Signup</Button></>}
             {isLoggedIn &&<Button onClick={()=>dispatch(authAction.logout())} LinkComponent={Link} to="/login" variant="contained" sx={{margin:1,borderRadius:10}}color="warning">Logout</Button>}
        </Box>
    </Toolbar>
  </AppBar>
  );
};

export default Header