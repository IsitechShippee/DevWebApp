import React, { useState } from 'react'
import ChatList from '../../Components/ChatList/ChatList'
import './Chat.css'

import Pictures from '../../Pictures/Pictures'

function Chat() {

  const [selectedChat, setSelectedChat] = useState(null)
  const [msg, setMsg] = useState('')

  const sendMsg = () => {
    console.log(msg)
    setMsg('')
  }

  const contentChat = () => {
    if (selectedChat) {
      return <div className='chat_content'>
        <div className='head'>
          <img src={Pictures.Profils /*selectedChat.user_picture*/} alt='profils_picture' />
          <h1>{selectedChat.user_firstname} {selectedChat.user_surname}</h1>
        </div>
        <div className='chats'>
          {selectedChat.chat.map((element, index) => {
            if (element.who) {
              return <p className='owner' key={index}>{element.content}</p>
            }
            return <p className='recipient' key={index}>{element.content}</p>
          })}
        </div>
        <div className='foot'>
          <div className='text_bar'>
            <input type='text' placeholder='Envoyer un message' value={msg} onInput={(e) => setMsg(e.target.value)}/>
            <button onClick={sendMsg}><img src={Pictures.Send} alt='send_button' /></button>
          </div>
        </div>
      </div>
    } else {
      return <div className='chat_content'></div>
    }
  }
  return (
    <div className='Chat'>
      <ChatList setSelectedChat={setSelectedChat} profils={Pictures.Profils} />
      {contentChat()}
    </div>
  )
}

export default Chat