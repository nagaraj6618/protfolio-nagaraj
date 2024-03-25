import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Message.css';
import { URL } from '../../info/backendUrl.js'
function MessageDisplay() {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem('accessToken');
  async function fetchMessage() {
    try {
      console.log(token)
      const response = await axios.get(`${URL}/contact`, {
        withCredentials:true,
        
      });
      console.log(response)
      setMessages(response.data.contactData);
 
    }
    catch (err) {
      console.log("error:", err)
    }
  }
  const deleteMessageHandler = async (id) => {
    await axios.delete(`${URL}/contact/${id}`)
  
    fetchMessage()
  }
  useEffect(() => {
    fetchMessage()
  }, [])

  return (
    <div className="message-display-container">
      {(messages.length==0) && 
      
      <div className='status-admin'>
        <p>Please log in as the admin😊..</p>
      </div>}
      {messages && messages.map((message, index) => (
        <div key={index} className="message-container">
          <h1 className='head-name'>{message.name}</h1>
          <p>Email: {message.email}</p>
          <p>Message: {message.message}</p>
          <p>Time: {message.time}</p>
          <button onClick={() => deleteMessageHandler(message._id)} className='btn btn-delete'>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default MessageDisplay;
