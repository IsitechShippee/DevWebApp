import React, { useContext, useEffect, useState } from 'react'
import { myAppContextUserInfo } from '../../Stores/UserInfoContext'
import { myAppContextPopUp } from '../../Stores/PopUpContext'
import Pictures from '../../Pictures/Pictures'
import './Home.css'
import ListAnnouncement from '../../Components/ListAnnouncement/ListAnnouncement'

function Home(props) {

  const userInfoContext = useContext(myAppContextUserInfo)
  const popUpContext = useContext(myAppContextPopUp)

  const [isPopUp, setIsPopUp] = useState(false)

  useEffect(() => {
    if (popUpContext.popUp.home.value) {
      setIsPopUp(true)
    } else {
      setIsPopUp(false)
    }
  }, [popUpContext])

  return (
    <div className='home'>

      <div className='welcome'>
        <img className='shippee' src={Pictures.Logo} alt='Shippee' />
        <h1 className='title'>Bienvenue{userInfoContext.userInfo && ' ' + userInfoContext.userInfo.firstname},</h1>
        <h2 className='title'>une petite selection :</h2>
      </div>

      <div className='selection_list'>

        <div className='list'>
          <h2 className='selection'>Pour vous :</h2>
          <ListAnnouncement type={'select_announcements'} isViewsMore={true} setIsActiveNavBar={props.setIsActiveNavBar} page={"HOME"}/>
        </div>

        <div className='list'>
          <h2 className='selection'>Dans le coin :</h2>
          <ListAnnouncement type={'loc_announcements'} isViewsMore={true} setIsActiveNavBar={props.setIsActiveNavBar} page={"HOME"}/>
        </div>

        <div className='list'>
          <h2 className='selection'>Posté récemment :</h2>
          <ListAnnouncement type={'recent_announcements'} isViewsMore={true} setIsActiveNavBar={props.setIsActiveNavBar} page={"HOME"}/>
        </div>

      </div>
      {isPopUp && popUpContext.popUp.home.component}

    </div>
  )
}

export default Home