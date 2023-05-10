import React from 'react'
import {Avatar,Card,CardHeader,CardContent,CardMedia,Typography} from '@mui/material'
const Blog = (title,body,authorId) => {
  return (
    <div> {" "}<Card sx={{ width:"40%", margin:'auto',mt:2,padding:2,boxShadow:"5px 5px 10px #ccc",":hover":{boxShadow:"10px 10px 20px #ccc"} }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          {authorId}
        
        </Avatar>
      }
     
      title="TH"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image="jn"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {body}
      </Typography>
    </CardContent>

  </Card></div>
  )
}

export default Blog