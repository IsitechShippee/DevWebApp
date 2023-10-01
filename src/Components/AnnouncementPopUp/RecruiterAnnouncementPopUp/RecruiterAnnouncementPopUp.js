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
    <div className='PopUp'>
      <button className='back' onClick={close}>
        <img alt='back' src={Pictures.Back} />
      </button>

      <h1>{popUp.popUp.home.value.title}</h1>

      <p>{popUp.popUp.home.value.description}</p>

      <h3>Domaine d'activité : {popUp.popUp.home.value.naf_division_title}</h3>
      <h3>Date de publication : {popUp.popUp.home.value.publish_date}</h3>
    </div>
  )
}

export default RecruiterAnnouncementPopUp