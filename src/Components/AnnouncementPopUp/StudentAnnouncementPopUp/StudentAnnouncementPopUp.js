import React, {useContext} from 'react'
import { myAppContextPopUp } from '../../../Stores/PopUpContext'
function UserAnnoucement() {

  const popUpContext = useContext(myAppContextPopUp)

  console.log(popUpContext)

  return (
    <div className='student_annoucement'>
      <h1>{popUpContext.title}</h1>
      <p>{popUpContext.description}</p>
    </div>
  )
}

export default UserAnnoucement