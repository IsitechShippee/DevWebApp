import React, { useContext, useState, useEffect } from 'react'
import '../Announcement.css'
import { myAppContextPopUp } from '../../../Stores/PopUpContext'
import { myAppContextUserInfo } from '../../../Stores/UserInfoContext'
import Pictures from '../../../Pictures/Pictures'
// import axios from '../../../Axios/axios'
import axios from 'axios'

function RecruiterAnnouncement(props) {

  const popUp = useContext(myAppContextPopUp)
  const userInfo = useContext(myAppContextUserInfo)
  const [isFavorite, setFavories] = useState(props.announcement.favorite)

  // useEffect(() => {
  //   setFavories(props.favorite)
  // }, [props])

  const seeAnnouncement = () => {
    console.log(props.announcement)
    console.log(isFavorite)
    //popUp.dispatchPopUp({ type: 'HOME', payload: { type: 'recruiter', value: props.announcement } })
  }


  const addFavories = () => {
    let sendData = {
      "id_user": userInfo.userInfo.id,
      "id_annoucement": props.announcement.id
    }

    axios.post('https://localhost:7061/api/Favorite/AjoutFavorite', sendData)
    .then((response)=> {
      console.log(response.data)
      userInfo.dispatchUserInfo({ type: 'LOVE', payload: props.announcement })
      setFavories(!isFavorite)
    })
    .catch((error)=> {
      console.log(error.message)
    })
  }

  return (
    <div className="announcement">
      <div className="recruiter">
        <img alt='Logo' className='logo' src={Pictures.SNCF} />
        <h3>{props.announcement.user.company.name}</h3>
        <img alt='Love' className='love' src={!isFavorite ? Pictures.Love : Pictures.ActifLove} onClick={addFavories}></img>
      </div>
      <p className="title">{props.announcement.title}</p>
      <div className='localisation'><img alt='Loc' className='loc' src={Pictures.Loc} /><p>{props.announcement.user.company.city}</p></div>
      <button onClick={seeAnnouncement}>Voir l'annonce</button>
    </div>
  )
}

export default RecruiterAnnouncement