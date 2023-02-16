import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button,  Stack } from '@chakra-ui/react'
export const Home = () => {

    const navigate=useNavigate();

  return (
    <div>

     <h1>Map View</h1>

     <div style={{display:"flex", gap:"42%"}}>
   
   <Link to={"/signup"}><div>Signup</div></Link>
     <Link to={"/login"}><div>Login</div></Link>
   <Link to={"/dashboard"}><div>Dashboard</div></Link>
     </div>

    </div>
  )
}
