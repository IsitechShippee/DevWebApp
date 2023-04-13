import React, { useContext } from 'react'
import { myAppContextUserInfo } from '../../Stores/UserInfoContext'
import { myAppContextPopUp } from '../../Stores/PopUpContext'
import LogoShippee from '../../Pictures/Logo_Shippee.png'
import './Home.css'
import ListAnnoucement from '../../Components/ListAnnoucement/ListAnnoucement'
import PopUp from '../../Components/PopUp/PopUp'

function Home() {

  const userInfo = useContext(myAppContextUserInfo)
  const popUp = useContext(myAppContextPopUp)

  console.log()

  return (
    <div className='home'>

      <div className='welcome'>
        <img src={LogoShippee} alt='Shippee' />
        <h1 className='title'>Bienvenue{userInfo.userInfo && ' ' + userInfo.userInfo.firstname},</h1>
        <h2 className='title'>une petite selection :</h2>
      </div>

      <div className='list'>
        <ListAnnoucement type={'select_announcements'} isViewsMore={true} title={'Pour vous'} />
      </div>

      { popUp.home && <PopUp></PopUp>}

    </div>
  )
}

export default Home