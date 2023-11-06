import React, { useContext, useState } from 'react'
import '../Announcement.css'
import { myAppContextPopUp } from '../../../Stores/PopUpContext'
import { myAppContextUserInfo } from '../../../Stores/UserInfoContext'
import Pictures from '../../../Pictures/Pictures'
// import axios from '../../../Axios/axios'
import axios from 'axios'

function StudentAnnouncement(props) {

  const popUp = useContext(myAppContextPopUp)
  const userInfo = useContext(myAppContextUserInfo)
  const [isFavorite, setFavories] = useState(props.announcement.favorite)

  const seeAnnouncement = () => {
    popUp.dispatchPopUp({ type: props.page, payload: { type: 'student', value: props.announcement } })
  }

  const addFavories = () => {
    let sendData = {
      id_user: userInfo.userInfo.id,
      id_annoucement: props.announcement.id,
      user: {
        id: sessionStorage.getItem('id'),
        password: sessionStorage.getItem('psw'),
      }
    }

    axios.post(process.env.REACT_APP_API_URL + '/api/Favorite/AddFavorite', sendData)
      .then((response) => {
        console.log(response.data)
        userInfo.dispatchUserInfo({ type: 'LOVE', payload: props.announcement.id })
        setFavories(!isFavorite)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  switch (userInfo.userInfo.type_user.title) {
    case 'Recruteur':
      return (
        <div className="announcement">
          <div className="recruiter">
            <img alt='Profil' className='logo' src={Pictures.EmptyUser} />
            <h3>{props.announcement.user.firstname} {props.announcement.user.surname}</h3>
            <img alt='Love' className='love' src={!isFavorite ? Pictures.Love : Pictures.ActifLove} onClick={addFavories}></img>
          </div>
          <p className="title">{props.announcement.title}</p>
          <div className='localisation'><img alt='Loc' className='loc' src={Pictures.Loc} /><p>{props.announcement.user.cp}</p></div>
          <button onClick={seeAnnouncement}>Voir l'annonce</button>
        </div>
      )
    case 'Etudiant':
      return (
        <div className="announcement">
          <div className="recruiter">
            <img alt='Profil' className='logo' src={Pictures.EmptyUser} />
            <h3>{userInfo.userInfo.firstname} {userInfo.userInfo.surname}</h3>
            <div></div>
          </div>
          <p className="title">{props.announcement.title}</p>
          <div className='localisation'><img alt='Loc' className='loc' src={Pictures.Loc} /><p>{userInfo.userInfo.city}</p></div>
          <button onClick={seeAnnouncement}>Voir l'annonce</button>
        </div>
      )
    default:
      return <></>
  }

}

export default StudentAnnouncement