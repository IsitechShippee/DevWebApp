import React, { useEffect, useState, useContext } from 'react'

import SHA3 from 'crypto-js/sha3'

import { myAppContextUserInfo } from '../../Stores/UserInfoContext'
import axios from 'axios'

import Loading from '../../Components/Loading/Loading'
import './NewPost.css'

function NewPost() {

  const userInfoContext = useContext(myAppContextUserInfo)

  const [announcement, setAnnoucement] = useState({ title: '', description: '', division_naf_id: null, diplome_id: null, skills: [] })
  const [error, setError] = useState(null)

  const [isLoading, setIsLoading] = useState(false)
  const [isCompleted, setIsCompleted] = useState([false])

  const [view, setView] = useState(0)
  const viewMax = 1

  const updateInfo = (event) => {
    switch (event.target.id) {
      case 'title':
        setAnnoucement({ ...announcement, 'title': event.target.value })
        break;
      case 'description':
        setAnnoucement({ ...announcement, 'description': event.target.value })
        break;
      case 'division_naf_id':
        setAnnoucement({ ...announcement, 'division_naf_id': event.target.value })
        break;
      case 'diplome_id':
        setAnnoucement({ ...announcement, 'diplome_id': event.target.value })
        break;
      case 'skills_add':
        setAnnoucement({ ...announcement, 'skills': [...announcement.skills, event.target.value] })
        break;
      case 'skills_remove':
        setAnnoucement({ ...announcement, 'skills': [...announcement.skills.filter(skill => skill !== event.target.value)] })
        break;
      default:
        break
    }
  }

  const validation = () => {
    setView(view + 1)
    if (announcement.title
      && announcement.description
      && announcement.division_naf_id
      && announcement.diplome_id
      && announcement.skills
    ) {
      const info = { ...announcement, user_id: userInfoContext.userInfo.id, type_id: userInfoContext.userInfo.type_user.id }
      console.log('info : ', info)
      axios.post('https://localhost:7061/api/Annoucement/AddAnnouncement', info)
        .then((result) => {
          console.log(result)
          if (result.status === 200) {
            if (result.data === 'creer') {
              setView(view + 1)
            } else if (result.data === 'existe') {
              setError('Un compte existe déjà avec cette adresse mail')
            } else {
              setError('JSP')
            }
          } else {
            setError('JSP')
          }
        })
        .catch((error) => {
          setError(error.message)
        })
    } else {
      // setError('Veuillez renseigner tous les champs (Sauf ceux possédant une *) !!')
    }
  }

  useEffect(() => {
    if (announcement.title !== '' && announcement.description !== '') {
      setIsCompleted([true, false])
      if (announcement.division_naf_id !== '' && announcement.diplome_id !== '' && announcement.skills.length !== 0) {
        setIsCompleted([true, true])
      } else {
        setIsCompleted([true, false])
      }
    } else {
      setIsCompleted([false, false])
    }
  }, [announcement])

  const isNextButton = () => {
    return view < viewMax && isCompleted[view]
  }

  const isFinishButton = () => {
    return view >= viewMax && isCompleted[viewMax]
  }

  const form_rendu = () => {
    switch (view) {
      case 0:
        return (
          <>
            <div className='info_content'>
              <h2 className='title'>Titre :</h2>
              <input className='text' type='text' id='title' filename={announcement.title} onChange={updateInfo}></input>
            </div>

            <div className='info_content'>
              <h2 className='description'>Description :</h2>
              <textarea className='text' type='text' id='description' filename={announcement.description} onChange={updateInfo}></textarea>
            </div>
          </>
        )
      case 1:
        return (
          <>
            <div className='info_content'>
              <h2 className='title'>Titre :</h2>
              <input className='text' type='text' id='title' filename={announcement.title} onChange={updateInfo}></input>
            </div>

            <div className='info_content'>
              <h2 className='description'>Description :</h2>
              <textarea className='text' type='text' id='description' filename={announcement.description} onChange={updateInfo}></textarea>
            </div>
          </>
        )
      case 2:
        return (
          <></>
        )
      default:
        return <></>
    }
  }

  const finish_rendu = () => {
    return <>
      <h3>Votre annonce à bien été ajouté !</h3>
    </>
  }

  const rendu = () => {
    if (view > viewMax) {
      return finish_rendu()
    }
    else {
      return form_rendu()
    }
  }

  return (
    <div className='newpost'>
      <div className='new'>
        <h1>Créer une nouvelle annonce</h1>
      </div>

      <div className='content_container'>
        {isLoading ? <Loading /> : rendu()}
      </div>

      <div className='button_nav'>
        {view > 0 && <button className='previous' onClick={() => setView(view - 1)}>Précedent</button>}

        {isNextButton() && <button className='next' onClick={() => setView(view + 1)}>Suivant</button>}

        {isFinishButton() && <button className='finish' onClick={validation}>Terminer</button>}
      </div>

      {error && <div>{error}</div>}
    </div>
  )
}

export default NewPost