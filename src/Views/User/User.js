import React, { useContext, useEffect, useState } from 'react'
import { myAppContextUserInfo } from '../../Stores/UserInfoContext'
import './User.css'

import ListAnnouncement from '../../Components/ListAnnouncement/ListAnnouncement'
import { myAppContextPopUp } from '../../Stores/PopUpContext'

import Pictures from '../../Pictures/Pictures'

function User() {

  const userInfo = useContext(myAppContextUserInfo)
  const popUpContext = useContext(myAppContextPopUp)

  const [isPopUp, setIsPopUp] = useState(false)

  useEffect(() => {
    if (popUpContext.popUp.user.value) {
      setIsPopUp(true)
    } else {
      setIsPopUp(false)
    }
  }, [popUpContext])

  switch (userInfo.userInfo.type_user.title) {
    case 'Etudiant':
      return (
        <div className='user'>
          <span className='user_background'></span>
          <div className='user_info'>
            <h1>Mon profil</h1>
            <div className='user_content'>
              <div className='contour_profil_picture'><img src={Pictures.EmptyUser} alt='profil' className='profil_picture' /></div>
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
            <h2>Vos annonces :</h2>
            <ListAnnouncement type={'annoucements'} isViewsMore={false} page={"USER"} />
            <h2>Vos favorites :</h2>
            <ListAnnouncement type={'favorites'} isViewsMore={false} page={"USER"} />
          </div>

          {isPopUp && popUpContext.popUp.user.component}

        </div>
      )
    case 'Recruteur':
      return (
        <div className='user'>
          <span className='user_background'></span>
          <div className='user_info'>
            <h1>Mon profil</h1>
            <div className='user_content'>
              <div className='contour_profil_picture'><img src={Pictures.EmptyUser} alt='profil' className='profil_picture' /></div>
              <div className='description'>
                <h2>{userInfo.userInfo.firstname} {userInfo.userInfo.surname}</h2>
                <div className='company_info'>
                  <img alt='company' className='company_picture' src={Pictures.EmptyCompany} />
                  <h3>{userInfo.userInfo.company.name}</h3>
                  <h3>{userInfo.userInfo.company.cp} {userInfo.userInfo.company.city}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className='user_list'>
            <h2>Vos annonces :</h2>
            <ListAnnouncement type={'annoucements'} isViewsMore={false} page={"USER"} />
            <h2>Vos favorites :</h2>
            <ListAnnouncement type={'favorites'} isViewsMore={false} page={"USER"} />
          </div>

          {isPopUp && popUpContext.popUp.user.component}

        </div>
      )

    default: return <></>
  }

}

export default User