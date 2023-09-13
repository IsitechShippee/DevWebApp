import React, { useContext } from 'react'
import './ChatList.css'

import { myAppContextUserInfo } from '../../Stores/UserInfoContext'

function ChatList(props) {

    const userInfo = useContext(myAppContextUserInfo)

    const isRead = (chat) => {
        console.log()
        if (chat.chat[chat.chat.length - 1].who || !chat.chat[chat.chat.length - 1].status === "Vu") {
            return true
        }
        return false
    }

    return (
        <div className='ChatList'>
            {
                userInfo.userInfo.convs.map((chat, index) => {
                    return <div className={isRead(chat) ? 'chat_bubble' : 'chat_bubble unread'} key={index} onClick={() => props.setSelectedChat(chat)}>
                        <img src={props.profils /*chat.user_picture*/} />
                        <div>
                            <h1 className='profil'>{chat.user_firstname} {chat.user_surname}</h1>
                            <p>{chat.chat[chat.chat.length - 1].content}</p>
                        </div>
                    </div>
                })
            }
        </div>

    )
}

export default ChatList