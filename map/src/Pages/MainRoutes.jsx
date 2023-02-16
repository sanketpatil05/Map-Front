import React from 'react'
import{Routes, Route} from "react-router-dom"
import { Dashboard } from './Dashboard'
import { Home } from './Home'
import { Login } from './Login'
import { PrivateRoute } from './PrivateRoute'
import { Signup } from './Signup'
export const MainRoutes = () => {
  return (
    <div>
    
    <Routes>
          <Route path="/" element={<Home />} />
 
  <Route path="/login" element={<Login />} />

 
  <Route path='/Signup' element={<Signup/>} />
   <Route path='/dashboard' element={

    <PrivateRoute>
      
        <Dashboard/>
      

    </PrivateRoute>
   }/>


  <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>

    </div>
  )
}
