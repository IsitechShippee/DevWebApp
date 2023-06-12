import React, { useContext } from 'react'
import '../Announcement.css'
import { myAppContextPopUp } from '../../../Stores/PopUpContext'

function StudentAnnoucement(props) {

  const popUp = useContext(myAppContextPopUp)

  return (
    <div className='annoucement' onClick={popUp.dispatchPopUp({ type: 'HOME', payload: {type: 'student', value:props.annoucement} })}>
      <h4>{props.annoucement.title}</h4>
      <h5>{props.annoucement.localisation}</h5>
      <p>{props.annoucement.description}</p>
    </div>
  )
}

export default StudentAnnoucement