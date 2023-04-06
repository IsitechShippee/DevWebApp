import React from 'react'
import '../Annoucement.css'

function RecuiterAnnoucement(props) {
  
  console.log(props.annoucement)

  return (
    <div className='annoucement'>
      <h4>{props.annoucement.title}</h4>
      <h5>{props.annoucement.localisation}</h5>
      <p>{props.annoucement.description}</p>
    </div>
  )
}

export default RecuiterAnnoucement