import axios from 'axios'
import React, { useState } from 'react'
import { URL } from '../../info/backendUrl'

const Login = () => {
   const [userData,setUserData] = useState({
      email:null,
      password:null
   })
   const handleChange = (e) => {
      setUserData(pre => ({...pre,[e.target.id]:e.target.value}))
   }
   const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(userData);
      try{
         const res = await axios.post(`http://localhost:4000/api/v1/auth/login`,userData,{
            withCredentials:true,
            headers:{
               "Accept":"application/json",
               "Access-Control-Allow-Origin":"*"
            }
         
      });

         localStorage.setItem('accessToken',res.data.token)
         // window.location.href = '/'
         console.log(res.data);
      }
      catch(error){

      }
   }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
         <input id='email' onChange={handleChange} type='email'/>
         <input id='password' onChange={handleChange} type='text'/>
         <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}

export default Login