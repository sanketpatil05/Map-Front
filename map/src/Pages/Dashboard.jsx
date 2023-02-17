import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card,  CardBody,  Text, Wrap } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export const Dashboard = () => {

  const [data, setData]=useState([]);

useEffect(()=>{

  axios.get("https://map-backend-eqb9.onrender.com/city").then((res)=>{

  console.log(res.data)
  setData(res.data)
  })
  .catch((er)=>{
    console.log(er)
  })


},[])
  return (
<>
    <Text fontSize='6xl' color={"red"}>Dashboard</Text>

     <Wrap >
     {data.map((el)=>(

       
        <Link to={`/dashboard/${el._id}`} state={el}  ><Card key={el._id} bg='green.200' > 
         <CardBody>
             <Text>{el.city}</Text> 

         </CardBody>
        </Card></Link>
       ))}
     </Wrap>
      

      
   
</>
 
  )
}
