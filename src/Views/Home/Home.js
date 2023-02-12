import React, { useContext } from 'react'
import { myAppContextUserInfo } from '../../Stores/UserInfoContext'
import LogoShippee from '../../Pictures/Logo_Shippee.png'
import './Home.css'

function Home() {

  const userInfo = useContext(myAppContextUserInfo)

  console.log()

  return (
    <div className='home'>
      <div className='welcome'>
        <img src={LogoShippee} alt='Shippee' />
        <h1>Bienvenue{userInfo.userInfo && ' ' + userInfo.userInfo.firstname},</h1>
        <h2>une petite selection :</h2>
      </div>
      
      <div className='list'></div>
    </div>
  )
}

export default Home