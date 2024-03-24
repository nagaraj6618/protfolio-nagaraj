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
         const res = await axios.post(`${URL}/auth/login`);
         // localStorage.setItem('accessToken',res.data.token)
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