import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Message.css'; 
import {URL} from '../../info/backendUrl.js'
function MessageDisplay() {
    const [messages,setMessages] = useState([]);
    async function fetchMessage (){
      const response = await axios.get(`${URL}/contact`);
      console.log(response)
      setMessages(response.data.contactData);
      
    }
    const deleteMessageHandler = async(id) => {
      await axios.delete(`${URL}/contact/${id}`)
      fetchMessage()
    }
    useEffect(() => {
        fetchMessage()
    },[])

  return (
    <div className="message-display-container">
      {messages.map((message, index) => (
        <div key={index} className="message-container">
          <h1 className='head-name'>{message.name}</h1>
          <p>Email: {message.email}</p>
          <p>Message: {message.message}</p>
          <p>Time: {message.time}</p>
          <button onClick={()=>deleteMessageHandler(message._id)} className='btn btn-delete'>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default MessageDisplay;
