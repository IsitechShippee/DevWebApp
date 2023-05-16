import './Chat.css';
import Contact from '../Contact/Contact.js';
import Conversation from '../Conversation/Conversation.js';
import { useState } from 'react';

function Chat() {

    const [convPeople, setConvPeople] = useState([])

    const RecupConvPeople = (convpeople, i) => {
        if(document.getElementsByClassName('laConversation')[0].style.display == 'block')
        {
            if(convpeople.user_surname == convPeople.user_surname)
            {
                document.getElementsByClassName('laConversation')[0].style.display = 'none';
                document.getElementsByClassName('LeContact')[i].classList.remove('Selected')
            }
            else
            {
                setConvPeople(convpeople)
                document.getElementsByClassName('laConversation')[0].style.display = 'block';
                for(let y = 0; y < conversation.length; y++)
                {
                    if(document.getElementsByClassName('LeContact')[y].classList.contains('Selected'))
                    {
                        document.getElementsByClassName('LeContact')[y].classList.remove('Selected')
                    }
                }
                document.getElementsByClassName('LeContact')[i].classList.add('Selected')
            }
        }
        else
        {
            setConvPeople(convpeople)
            document.getElementsByClassName('laConversation')[0].style.display = 'block';
            for(let y = 0; y < conversation.length; y++)
            {
                if(document.getElementsByClassName('LeContact')[y].classList.contains('Selected'))
                {
                    document.getElementsByClassName('LeContact')[y].classList.remove('Selected')
                }
            }
            document.getElementsByClassName('LeContact')[i].classList.add('Selected')
        }
        
        
    }

    const conversation = [
        {
            "user_surname": "Moreau",
            "user_firstname": "Juliette",
            "user_picture": "",
            "user_is_online": false,
            "chat": [
                {
                    "id": 1,
                    "content": "Bonjour",
                    "send_time": "2022-02-10T00:00:00",
                    "status": "Lu",
                    "who": true
                },
                {
                    "id": 2,
                    "content": "Bonjour ça va ?",
                    "send_time": "2022-02-11T00:00:00",
                    "status": "Lu",
                    "who": false
                },
                {
                    "id": 3,
                    "content": "Oui et vous ?",
                    "send_time": "2022-02-12T00:00:00",
                    "status": "Lu",
                    "who": true
                },
                {
                    "id": 4,
                    "content": "Très bien, merci",
                    "send_time": "2022-02-13T00:00:00",
                    "status": "Envoyer",
                    "who": false
                }
            ]
        },
        {
            "user_surname": "Rousseau",
            "user_firstname": "Paul",
            "user_picture": "",
            "user_is_online": false,
            "chat": [
                {
                    "id": 5,
                    "content": "Bonjour",
                    "send_time": "2022-02-14T00:00:00",
                    "status": "Lu",
                    "who": true
                },
                {
                    "id": 6,
                    "content": "Bonjour ça va ?",
                    "send_time": "2022-02-15T00:00:00",
                    "status": "Lu",
                    "who": false
                },
                {
                    "id": 7,
                    "content": "Oui et vous ?",
                    "send_time": "2022-02-16T00:00:00",
                    "status": "Lu",
                    "who": true
                },
                {
                    "id": 8,
                    "content": "Très bien, merci",
                    "send_time": "2022-02-17T00:00:00",
                    "status": "Lu",
                    "who": false
                }
            ]
        }
    ]

    const Affiche_Conversation = (conv, i) => {
        RecupConvPeople(conv, i)
    }


    return (
        <>
            <div className="ChatAndConv">
                <div className="Chat">
                    <div className="Cherche_Contact">
                        <input type="text" /><i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                    <div className="Liste_Contact">
                        {
                            conversation.map((index, i) => (
                                <>
                                    <div onClick={() => Affiche_Conversation(index, i)} className={"LeContact " + i}>
                                        <Contact convs={index}/>
                                    </div>
                                    <hr className={i != conversation.length-1 ? "hr" : "nothr"}></hr>
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className="laConversation">
                    <Conversation detail={convPeople} />
                </div>
            </div>

        </>
    );




}

export default Chat;