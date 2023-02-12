import React, { useContext } from 'react'
import { myAppContextUserInfo } from '../../Stores/UserInfoContext'
import LogoShippee from '../../Pictures/Logo_Shippee.png'
import './Home.css'
import ListAnnoucement from '../../Components/ListAnnoucement/ListAnnoucement'

function Home() {

  const userInfo = useContext(myAppContextUserInfo)

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

    </div>
  )
}

export default Home