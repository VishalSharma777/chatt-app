import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ChatPage = () => {

    const [chat,setChat] = useState([]);
    
    const fetchdata = async() =>{
        const {data} = await axios.get('/api/chat')
        setChat(data)
       
    };
    useEffect(()=>{
        fetchdata();
    }, []);

  return (
    <div> 
        {chat.map(chat=><div key={chat._id}>{chat.chatName}</div>)}
    </div>
  )
}

export default ChatPage