import React, { useContext } from 'react'
import '../AnnouncementPopUp.css'
import { myAppContextPopUp } from '../../../Stores/PopUpContext'
import Pictures from '../../../Pictures/Pictures'
// import moment from 'moment'

function RecruiterAnnouncementPopUp(props) {

  const popUp = useContext(myAppContextPopUp)
  console.log(popUp.popUp[props.page].value)

  const close = () => {
    popUp.dispatchPopUp({ type: props.page.toUpperCase(), payload: { type: 'close' } })
  }

  const qualifTab = () => {
    let qualifTab = []
    for (let key in popUp.popUp.home.value.qualifications) {
      qualifTab.push(<h4 key={key}> - {popUp.popUp.home.value.qualifications[key]}</h4>)
    }
    return qualifTab
  }

  return (
    <div className='PopUp'>
      <div className='announcement_title'>
        <h1 className='title_ann'>{popUp.popUp.home.value.title}</h1>

        <div className='recruiter'>
          <img alt='compagny' src={popUp.popUp.home.value.user.company.picture} />
          <h2>{popUp.popUp.home.value.user.company.name}</h2>
          <h3>{popUp.popUp.home.value.user.company.cp} {popUp.popUp.home.value.user.company.city}</h3>
          <div className='recruiter_info'>
            <h2><img alt='recruiter_picture' src={popUp.popUp.home.value.user.picture} />{popUp.popUp.home.value.user.firstname} {popUp.popUp.home.value.user.surname}</h2>
          </div>
        </div>
      </div>

      <p align="justify">{popUp.popUp.home.value.description}</p>

      <div className='supp_info'>
        <div className='activity_info'>
          <h3>Domaine d'activité : </h3>
          <h4>{popUp.popUp.home.value.naf_division_title}</h4>
        </div>
        <div className='qualif'>
          <h3>Qualification nécéssaire : </h3>
          <div className='qualif_list'>
            {
              qualifTab()
            }
          </div>
        </div>
      </div>

      <h5 className='publish_time'>Date de publication : {new Date(popUp.popUp.home.value.publish_date).toLocaleDateString()} à {new Date(popUp.popUp.home.value.publish_date).toLocaleTimeString()}</h5>

      <div className='message'>
        <input type='text' placeholder='Envoyer un message au recruteur' />
        <button className='send_massage'>
          <img alt='send_massage' src={Pictures.Send} />
        </button>
      </div>

      <button className='back' onClick={close}>
        <img alt='back' src={Pictures.Back} />
      </button>
    </div>
  )
}

export default RecruiterAnnouncementPopUp