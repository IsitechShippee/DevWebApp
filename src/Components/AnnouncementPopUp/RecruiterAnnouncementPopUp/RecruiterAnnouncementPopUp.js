import React, { useContext, useState } from 'react'
import '../AnnouncementPopUp.css'
import { myAppContextPopUp } from '../../../Stores/PopUpContext'
import { myAppContextUserInfo } from '../../../Stores/UserInfoContext'
import Pictures from '../../../Pictures/Pictures'

import axios from 'axios'
// import moment from 'moment'

function RecruiterAnnouncementPopUp(props) {

  const popUp = useContext(myAppContextPopUp)
  const userInfo = useContext(myAppContextUserInfo)

  const [msg, setMsg] = useState('')

  const close = () => {
    popUp.dispatchPopUp({ type: props.page.toUpperCase(), payload: { type: 'close' } })
  }

  const sendMessage = () => {
    if (msg === '') return
    let info = {
      id_sender: userInfo.userInfo.id,
      id_recipient: popUp.popUp[props.page].value.user.id,
      content: msg,
      user: {
        id: sessionStorage.getItem('id'),
        password: sessionStorage.getItem('psw'),
      }
    }
    // console.log(info)
    axios.post(process.env.REACT_APP_API_URL + '/api/Chat/AddChat', info)
      .then((result) => {
        // // Console.log(result)
        if (result.data === 'user existe pas') return
        userInfo.dispatchUserInfo({
          type: 'ADD CHAT', payload: {
            id_people: popUp.popUp[props.page].value.user.id,
            user: {
              surname: popUp.popUp[props.page].value.user.surname,
              firstname: popUp.popUp[props.page].value.user.firstname
            },
            chat: { content: msg, send_time: Date.now(), who: true, status: "Envoyer", id: 0 }
          }
        })
      })
    setMsg('')
  }

  const qualifTab = () => {
    let qualifTab = []
    for (let key in popUp.popUp[props.page].value.qualifications) {
      qualifTab.push(<h4 key={key}> - {popUp.popUp[props.page].value.qualifications[key]}</h4>)
    }
    return qualifTab
  }

  const user_picture = () => {
    // if (popUp.popUp[props.page].value.user.picture || popUp.popUp[props.page].value.user.picture !== "") return popUp.popUp[props.page].value.user.picture
    // else 
    return Pictures.EmptyUser
  }

  const company_picture = () => {
    // if (popUp.popUp[props.page].value.user.company.picture || popUp.popUp[props.page].value.user.company.picture !== "") return popUp.popUp[props.page].value.user.company.picture
    // else 
    return Pictures.EmptyCompany
  }


  if (!popUp.popUp[props.page].value) return <></>

  switch (userInfo.userInfo.type_user.title) {
    case 'Recruteur':
      return (
        <div className='PopUp'>
          <div className='announcement_title'>
            <h1 className='title_ann'>{popUp.popUp[props.page].value.title}</h1>

            <div className='recruiter'>
              <div className='company_info'>
                <img alt='company' src={Pictures.EmptyCompany} />
                <h2>{userInfo.userInfo.company.name}</h2>
                <h3>{userInfo.userInfo.company.cp} {userInfo.userInfo.company.city}</h3>
              </div>
              <div className='recruiter_info'>
                <img alt='recruiter' src={Pictures.EmptyUser} />
                <h2>{userInfo.userInfo.firstname} {userInfo.userInfo.surname}</h2>
              </div>
            </div>
          </div>

          <p align="justify">{popUp.popUp[props.page].value.description}</p>

          <div className='supp_info'>
            <div className='activity_info'>
              <h3>Domaine d'activité : </h3>
              <h4>{popUp.popUp[props.page].value.naf_division_title}</h4>
            </div>
            <div className='qualif'>
              <h3>Qualification nécéssaire : </h3>
              <div className='qualif_list'>
                {
                  qualifTab()
                }
              </div>
            </div>
          </div>

          <h5 className='publish_time'>Date de publication : {new Date(popUp.popUp[props.page].value.publish_date).toLocaleDateString()} à {new Date(popUp.popUp[props.page].value.publish_date).toLocaleTimeString()}</h5>

          <button className='back' onClick={close}>
            <img alt='back' src={Pictures.Back} />
          </button>
        </div>
      )
    case 'Etudiant':
      return (
        <div className='PopUp'>
          <div className='announcement_title'>
            <h1 className='title_ann'>{popUp.popUp[props.page].value.title}</h1>

            <div className='recruiter'>
              <div className='company_info'>
                <img alt='company' src={company_picture()} />
                <h2>{popUp.popUp[props.page].value.user.company.name}</h2>
                <h3>{popUp.popUp[props.page].value.user.company.cp} {popUp.popUp[props.page].value.user.company.city}</h3>
              </div>
              <div className='recruiter_info'>
                <img alt='recruiter' src={user_picture()} />
                <h2>{popUp.popUp[props.page].value.user.firstname} {popUp.popUp[props.page].value.user.surname}</h2>
              </div>
            </div>
          </div>

          <p align="justify">{popUp.popUp[props.page].value.description}</p>

          <div className='supp_info'>
            <div className='activity_info'>
              <h3>Domaine d'activité : </h3>
              <h4>{popUp.popUp[props.page].value.naf_division_title}</h4>
            </div>
            <div className='qualif'>
              <h3>Qualification nécéssaire : </h3>
              <div className='qualif_list'>
                {
                  qualifTab()
                }
              </div>
            </div>
          </div>

          <h5 className='publish_time'>Date de publication : {new Date(popUp.popUp[props.page].value.publish_date).toLocaleDateString()} à {new Date(popUp.popUp[props.page].value.publish_date).toLocaleTimeString()}</h5>

          <div className='message'>
            <input type='text' placeholder='Envoyez un message au recruteur' value={msg} onChange={(e) => setMsg(e.target.value)} />
            <button className='send_massage' onClick={sendMessage}>
              <img alt='send_massage' src={Pictures.Send} />
            </button>
          </div>

          <button className='back' onClick={close}>
            <img alt='back' src={Pictures.Back} />
          </button>
        </div>
      )
    default:
      return <></>
  }
}

export default RecruiterAnnouncementPopUp