import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Container, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux'
import { get_auth } from '../Redux/action'

export const Login = () => {

  const [data, setData] =useState({});
  
  const dispatch = useDispatch()

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
     
     if(res.data.token){
        
      dispatch(get_auth())
     }
     }).catch((er)=>{
      console.log(er)
      alert("Error occured")
     })

  
     
    }





  return (
    <div>
      
      
    

      <Container>
<Text fontSize={"20px"} color="green">  Login</Text>
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
