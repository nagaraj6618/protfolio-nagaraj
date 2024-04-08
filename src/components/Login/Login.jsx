import axios from 'axios'
import React, { useState } from 'react'
import { URL } from '../../info/backendUrl'
// import {Box} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
   const navigate = useNavigate();
   const [userData, setUserData] = useState({
      email: null,
      password: null
   })
   const handleChange = (e) => {
      setUserData(pre => ({ ...pre, [e.target.id]: e.target.value }))
   }
   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(userData);
      try {
         const res = await axios.post(`${URL}/auth/login`, userData, {
            withCredentials: true,
         });

         localStorage.setItem('accessToken', res.data.token)
         navigate('/')
         // window.location.href = '/'
         console.log(res.data);
      }
      catch (error) {

      }
   }
   return (
      <React.Fragment>
         <div className='container'>
            <div className='title-admin'>Admin Login</div>
            <form onSubmit={handleSubmit} className='form-container'>
               <div className='form-item'>
                  <label className='form-label'>Email:</label>
                  <input id='email' onChange={handleChange} type='email' className='form-input' />
               </div>
               <div>
                  <label className='form-label'>Password</label>
                  <input id='password' onChange={handleChange} type='text' className='form-input' />
                  <button type='submit' className='btn-submit'>Login</button>
               </div>
            </form>
            <Link to='/admin/register'><p className=' btn-submit'>Create an Account</p></Link>
         </div>
         <div className='container'>
         
         </div>
      </React.Fragment>
   )
}

export default Login