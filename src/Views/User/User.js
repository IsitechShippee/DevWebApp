import React, { useContext } from 'react'
import { myAppContextUserInfo } from '../../Stores/UserInfoContext'
import './User.css'

import ListAnnouncement from '../../Components/ListAnnouncement/ListAnnouncement'

import Pictures from '../../Pictures/Pictures'

function User() {

  const userInfo = useContext(myAppContextUserInfo)

  return (
    <div className='user'>
      <div className='user_info'>
        <h1>Mon profil</h1>
        <div className='user_content'>
          <img src={Pictures.Profils} alt='profil' className='profil_picture' />
          <img src={Pictures.Edit} alt='edit' className='edit_button' />
          <div className='description'>
            <h2>{userInfo.userInfo.firstname} {userInfo.userInfo.surname}</h2>
            <h3>{new Date(userInfo.userInfo.birthday).toLocaleDateString("fr")}</h3>
            <h3>{userInfo.userInfo.city} {userInfo.userInfo.cp}</h3>
            <h3>{userInfo.userInfo.web_site}</h3>

          </div>
          <p><strong>Description :</strong> {userInfo.userInfo.description}</p>
        </div>
      </div>

      <div className='user_list'>
        <ListAnnouncement type={'annoucements'} isViewsMore={false} />
        <ListAnnouncement type={'favorites'} isViewsMore={false} />
      </div>
    </div>
  )
}

export default User