import React, { useContext } from 'react'
import { myAppContextUserInfo } from '../../Stores/UserInfoContext'
import { myAppContextPopUp } from '../../Stores/PopUpContext'
import Pictures from '../../Pictures/Pictures'
import './Home.css'
import ListAnnouncement from '../../Components/ListAnnouncement/ListAnnouncement'

function Home(props) {

  const userInfoContext = useContext(myAppContextUserInfo)
  const popUpContext = useContext(myAppContextPopUp)

  console.log()

  return (
    <div className='home'>

      <div className='welcome'>
        <img className='shippee' src={Pictures.Logo} alt='Shippee' />
        <h1 className='title'>Bienvenue{userInfoContext.userInfo && ' ' + userInfoContext.userInfo.firstname},</h1>
        <h2 className='title'>une petite selection :</h2>
      </div>

      <div className='selection_list'>

        {/* <div className='list'>
        <h2>Pour vous :</h2>
        <ListAnnouncement type={'select_announcements'} isViewsMore={true}/>
      </div> */}

        {/* <div className='list'>
        <h2>Dans le coin :</h2>
        <ListAnnouncement type={'loc_announcements'} isViewsMore={true}/>
      </div> */}

        <div className='list'>
          <h2 className='selection'>Posté récemment :</h2>
          <ListAnnouncement type={'recents_announcements'} isViewsMore={true} setIsActiveNavBar={props.setIsActiveNavBar}/>
        </div>

        <div className='list'>
          <h2 className='selection'>Posté récemment :</h2>
          <ListAnnouncement type={'recents_announcements'} isViewsMore={true} setIsActiveNavBar={props.setIsActiveNavBar}/>
        </div>

        <div className='list'>
          <h2 className='selection'>Posté récemment :</h2>
          <ListAnnouncement type={'recents_announcements'} isViewsMore={true} setIsActiveNavBar={props.setIsActiveNavBar}/>
        </div>

        <div className='list'>
          <h2 className='selection'>Posté récemment :</h2>
          <ListAnnouncement type={'recents_announcements'} isViewsMore={true} setIsActiveNavBar={props.setIsActiveNavBar}/>
        </div>

        {/* <div className='list'>
        <h2>A revoir :</h2>
        <ListAnnouncement type={'recent_search'} isViewsMore={true}/>
      </div> */}

      </div>
      {/* {popUpContext.popUp.home.value && popUpContext.popUp.home.component} */}

    </div>
  )
}

export default Home