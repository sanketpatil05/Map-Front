import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Container } from '@chakra-ui/layout'
import React, { useState } from 'react'
import axios from "axios";
export const Login = () => {

  const [data, setData] =useState({});
  

  const handleChange=(e)=>{

      const {id, value}=e.target;
    
      setData({ ...data,
        [id]:value
      })
      
    }



    const handlesubmit=()=>{
    
     //console.log(data);
     axios.post("https://reqres.in/api/login",data).then((res)=>{
       
     console.log("data",res.data.token)
     
    //  if(res.data.token){
    
   
    //  }
     }).catch((er)=>{
      console.log(er)
      alert("Error occured")
     })

  
     
    }





  return (
    <div>Login

<Container>
    
    <FormControl>
      <FormLabel>Enter Your email</FormLabel>
      <Input type='text' onChange={handleChange} id="email"  />
      <FormLabel>Password</FormLabel>
      <Input type='password'  onChange={handleChange} id="password" />
      
      
      <Button type="submit" colorScheme='teal' onClick={handlesubmit} >Login</Button>
    </FormControl>
    </Container>
     





    </div>
  )
}
