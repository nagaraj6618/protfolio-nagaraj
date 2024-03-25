import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { URL } from '../../info/backendUrl'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Register = () => {
   const navigate = useNavigate();
   const token = localStorage.getItem('accessToken');
   
   const [userData, setUserData] = useState({
      email: null,
      password: null,
      username: null
   })
   const handleChange = (e) => {
      setUserData(pre => ({ ...pre, [e.target.id]: e.target.value }))
   }
   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(userData);
      try {
         const res = await axios.post(`${URL}/auth/register`, userData, {
            withCredentials: true,
         });

         localStorage.setItem('accessToken', res.data.token)
         navigate('/admin/login')
         
         console.log(res.data);
      }
      catch (error) {
         console.log(error)
      }
   }
   return (
      <React.Fragment>

         <div className='container'>
            <div className="message-display-container">
               {token == undefined &&

                  <div className='status-admin'>
                     <p>Please log in as the admin😊..</p>
                  </div>}
            </div>
            <form onSubmit={handleSubmit} className='form-container'>
               <div className='form-item'>
                  <label className='form-label'>User Name:</label>
                  <input id='username' onChange={handleChange} type='text' className='form-input' />
               </div>
               <div className='form-item'>
                  <label className='form-label'>Email:</label>
                  <input id='email' onChange={handleChange} type='email' className='form-input' />
               </div>
               <div>
                  <label className='form-label'>Password</label>
                  <input id='password' onChange={handleChange} type='text' className='form-input' />
                  <button type='submit' className='btn-submit'>Register</button>
               </div>
            </form>
            <Link to='/admin/login'><p className='link-account'>SignIn</p></Link>
         </div>
      </React.Fragment>
   )
}

export default Register