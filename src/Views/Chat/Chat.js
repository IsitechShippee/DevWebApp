import React, { useState, useContext } from 'react'
import ChatList from '../../Components/ChatList/ChatList'
import './Chat.css'
import axios from 'axios'
import { myAppContextUserInfo } from '../../Stores/UserInfoContext'

import Pictures from '../../Pictures/Pictures'

function Chat() {

  const userInfoContext = useContext(myAppContextUserInfo)

  const [selectedChat, setSelectedChat] = useState(null)
  const [msg, setMsg] = useState('')

  const sendMsg = () => {
    // // Console.log(msg)
    if (msg === '') return
    let info = {
      id_sender: userInfoContext.userInfo.id,
      id_recipient: selectedChat.id_people,
      content: msg,
      user: {
        id: sessionStorage.getItem('id'),
        password: sessionStorage.getItem('psw'),
      }
    }
    // // Console.log(info)
    axios.post(process.env.REACT_APP_API_URL + '/api/Chat/AddChat', info)
      .then((result) => {
      // // Console.log(result)
      // // Console.log(selectedChat)
      userInfoContext.dispatchUserInfo({ type: 'ADD CHAT', payload: { id_people: selectedChat.id_people, chat: { content: msg, send_time: Date.now(), who: true, status: "Envoyer", id: 0 } } })
    })
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
          <input type='text' placeholder='Envoyer un message' value={msg} onInput={(e) => setMsg(e.target.value)} />
          <button onClick={sendMsg}><img src={Pictures.Send} alt='send_button' /></button>
          {/* Il me faut l'id des user qui envoies les message dans la requete de connexion dans le tableau des convs */}
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