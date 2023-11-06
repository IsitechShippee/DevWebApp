import React, { useContext } from 'react'
import './ChatList.css'
import axios from 'axios'

import { myAppContextUserInfo } from '../../Stores/UserInfoContext'

function ChatList(props) {

    const userInfo = useContext(myAppContextUserInfo)

    const isRead = (chat) => {
        // // Console.log()
        if (chat.chat[chat.chat.length - 1].who || !chat.chat[chat.chat.length - 1].status === "Vu") {
            return true
        }
        return false
    }

    const reading = (chat) => {
        if (!isRead(chat)) {
            let info = {
                id_sender: userInfo.userInfo.id,
                id_user: chat.id_people,
                user: {
                    id: sessionStorage.getItem('id'),
                    password: sessionStorage.getItem('psw'),
                }
            }
            // // Console.log(info)
            axios.post(process.env.REACT_APP_API_URL + '/api/Chat/AddChat', info)
                .then((result) => {
                    // // Console.log(result)
                    userInfo.dispatchUserInfo({ type: 'SET VU', payload: chat })
                })
                .catch((error) => {
                    // // Console.log(error.message)
                })
        }
    }

    return (
        <div className='ChatList'>
            {
                userInfo.userInfo.convs.map((chat, index) => {
                    return <div className={isRead(chat) ? 'chat_bubble' : 'chat_bubble unread'} key={index} onClick={() => { props.setSelectedChat(chat); reading(chat) }}>
                        <img alt='profils' src={props.profils /*chat.user_picture*/} />
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