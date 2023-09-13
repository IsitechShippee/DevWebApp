import React, { useContext } from 'react'
import '../AnnouncementPopUp.css'
import { myAppContextPopUp } from '../../../Stores/PopUpContext'
import Pictures from '../../../Pictures/Pictures'

function RecruiterAnnouncementPopUp() {

  const popUp = useContext(myAppContextPopUp)
  console.log(popUp.popUp.home.value)

  const close = () => {
    popUp.dispatchPopUp({ type: 'HOME', payload: { type: 'close' } })
  }

  return (
    <div className='PopUp'>PopUp d'une annonce recruteur
      <button className='back' onClick={close}>
        <img alt='back' src={Pictures.Back} />
      </button>
    </div>
  )
}

export default RecruiterAnnouncementPopUp