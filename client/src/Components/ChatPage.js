import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ChatPage = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async() => {
        const {data} = await axios.get('/api/chat');
        console.log("running")
        setChats(data);

    };

    useEffect(() => {
        fetchChats();
        console.log("use running")
    }, [] )

  return (
    <div>
        {chats.map((chat) => (<div key={chat.id}>{ chat.chatName}</div>
        ))}
        </div>
  )
}

export default ChatPage