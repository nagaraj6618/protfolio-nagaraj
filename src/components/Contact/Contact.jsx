import React, { useState } from 'react'
import './Contact.css'
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import resumePDF from "../../img/nagara-resume.pdf"
import ClockComponent from '../ClockComponent/ClockComponent';
import SocialIcon from "../home/SocialIcon";
import { URL } from "../../info/backendUrl.js"
import axios from 'axios';
import Alert from '@mui/material/Alert';

const Contact = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: "",
   });
   const [alertOpen, setAlertOpen] = useState(false);
   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };
   const formSubmitHandler = async (e) => {
      e.preventDefault();
      try {
         // const responseData = () => {
          await axios.post(`${URL}/contact`, formData);

         setFormData({
            name: '',
            email: '',
            message: ''
         });
         setAlertOpen(true);
      }
      catch (error) {
         console.error('Error:', error);
      }
   }
   return (
      <div>


{alertOpen && (
  <Alert
    onClose={() => setAlertOpen(false)}
    severity="success"
    className="alert"
  >
    Form submitted successfully! & Check Mail Inbox
  </Alert>
)}

         <div className='contact'>Contact Me

         </div>

         <div className='container'>


            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }} style={{
               transition: 'all 0.3s ease',
            }}>
               <ClockComponent />
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label}

                  />
               ))}
               <a target="_blank" aria-label="Resume" className='socialicon'
                  rel="noopener noreferrer" href={resumePDF} download="Nagaraj Resume">
                  <i className='fa fa-download' aria-hidden="true" />
               </a>
            </Box>
            <form onSubmit={formSubmitHandler} className='form-container'>
               <div className='form-item'>
                  <label className='form-label'>Name:</label>
                  <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleInputChange}
                     className='form-input'
                  />
               </div>
               <div className='form-item'>
                  <label className='form-label'>Email:</label>
                  <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     className='form-input'
                  />
               </div>
               <div className='form-item'>
                  <label className='form-label'>Message:</label>
                  <textarea
                     name="message"
                     value={formData.message}
                     onChange={handleInputChange}
                     className='form-input'
                  />
               </div>
               <button type="submit" className='btn-submit'>Submit</button>
            </form>

         </div>
      </div>
   )
}

export default Contact