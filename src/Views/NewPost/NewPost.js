import React, { useEffect, useState, useContext } from 'react'

// import SHA3 from 'crypto-js/sha3'

import { myAppContextUserInfo } from '../../Stores/UserInfoContext'
import axios from 'axios'

import Loading from '../../Components/Loading/Loading'
import './NewPost.css'

function NewPost() {

  const userInfoContext = useContext(myAppContextUserInfo)

  const [announcement, setAnnoucement] = useState({ title: '', description: '', division_naf_id: null, diplome_id: null, skills: [] })
  const [donnee, setDonnee] = useState({ skills: null, diplome: null, naf: null })
  const [error, setError] = useState(null)

  // const [isLoading, setIsLoading] = useState(false)
  const isLoading = false
  const [isCompleted, setIsCompleted] = useState([false])

  const [view, setView] = useState(0)
  const viewMax = 1

  const updateInfo = (event) => {
    switch (event.target.id) {
      case 'title':
        setAnnoucement({ ...announcement, 'title': event.target.value })
        getDonnee()
        break;
      case 'description':
        setAnnoucement({ ...announcement, 'description': event.target.value })
        break;
      case 'naf_id':
        // // Console.log(event.target.value)
        let naf = null
        naf = donnee.naf.map((element_naf) => element_naf.naf_division.find((element) => element.title === event.target.value)).find((element) => element !== undefined)
        if (naf) {
          setAnnoucement({ ...announcement, 'division_naf_id': naf.id })
        }
        break;
      case 'diplome_id':
        let diplome = donnee.diplome.find((element) => element.diplome === event.target.value)
        if (diplome) {
          setAnnoucement({ ...announcement, 'diplome_id': diplome.id })
        }
        break;
      case 'skills_add':
        let skill = donnee.skills.find((element) => element.title === event.target.value)
        if (skill) {
          setAnnoucement({ ...announcement, 'skills': [...announcement.skills, skill.id] })
        }
        break;
      case 'skills_remove':
        setAnnoucement({ ...announcement, 'skills': [...announcement.skills.filter(skill => skill !== event.target.value)] })
        break;
      default:
        break
    }
  }

  const validation = () => {
    // Console.log(announcement)
    if (announcement.title
      && announcement.description
      && announcement.division_naf_id
      && announcement.diplome_id
      && announcement.skills
    ) {
      setView(view + 1)
      const info = { ...announcement, user_id: userInfoContext.userInfo.id, type_id: userInfoContext.userInfo.type_user.id }
      // Console.log('info : ', info)
      axios.post(process.env.REACT_APP_API_URL + '/api/Annoucement/AddAnnouncement', info)
        .then((result) => {
          // Console.log(result)
          if (result.status === 200) {
            setError(null)
          } else {
            setError('JSP')
          }
        })
        .catch((error) => {
          setError(error.message)
        })
    } else {
      setError('Veuillez renseigner tous les champs (Sauf ceux possédant une *) !!')
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
    return view === viewMax
    //&& isCompleted[viewMax]
  }

  const getDonnee = () => {
    axios.get(process.env.REACT_APP_API_URL + '/api/Skill/listSkill')
      .then((responseSkills) => {
        axios.get(process.env.REACT_APP_API_URL + '/api/Diplome/list_diplome')
          .then((responseDiplome) => {
            axios.get(process.env.REACT_APP_API_URL + '/api/Naf/list_naf_section_division')
              .then((responseNaf) => {
                setDonnee({ skills: responseSkills.data, diplome: responseDiplome.data, naf: responseNaf.data })
              })
          })
      })
  }

  const form_rendu = () => {
    switch (view) {
      case 0:
        return (
          <>
            <div className='info_content'>
              <h2 className='title'>Titre de l'annonce :</h2>
              <input className='text' type='text' id='title' value={announcement.title} onChange={updateInfo}></input>
            </div>

            <div className='info_content'>
              <h2 className='description'>Description :</h2>
              <textarea className='text' type='text' id='description' value={announcement.description} onChange={updateInfo}></textarea>
            </div>
          </>
        )
      case 1:
        if (donnee.skills && donnee.diplome && donnee.naf) {
          return (
            <>
              <div className='info_content'>
                <h2 className='naf'>Domaine d'activité :</h2>
                <input list="naf" name="naf" id="naf_id" autocomplete="off" placeholder="Domaine d'activité" onChange={updateInfo} />
                <datalist id="naf">
                  {
                    donnee.naf.map((element, index) => (
                      element.naf_division.map((el, i) => (
                        <option key={el.id} value={el.title}></option>
                      ))

                    ))
                  }
                </datalist>
              </div>

              <div className='info_content'>
                {userInfoContext.userInfo.type_user.id === 1 ? <h2 className='diplome'>Diplome possédé :</h2> : <h2 className='diplome'>Diplome requis :</h2>}
                <input list="diplome" name="diplome" id="diplome_id" autocomplete="off" placeholder="Diplome" onChange={updateInfo} />
                <datalist id="diplome">
                  {
                    donnee.diplome.map((element, index) => (
                      <option key={element.id} value={element.diplome}></option>
                    ))
                  }
                </datalist>
              </div>

              <div className='info_content'>
                {userInfoContext.userInfo.type_user.id === 1 ? <h2 className='skills'>Vos compétences :</h2> : <h2 className='skills'>Compétences requises :</h2>}
                <input list="skills" name="skills" id="skills_add" autocomplete="off" placeholder="Compétence" onChange={updateInfo} />
                <datalist id="skills">
                  {
                    donnee.skills.map((element, index) => (
                      <option key={element.id} value={element.title}></option>
                    ))
                  }
                </datalist>
              </div>
            </>
          )
        } else {
          return (<></>)
        }

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
      <h3>Votre annonce a bien été ajoutée !</h3>
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

  const isPrecButton = () => {
    return view > 0 && view <= viewMax
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
        {isPrecButton() && <button className='previous' onClick={() => setView(view - 1)}>Précédent</button>}

        {isNextButton() && <button className='next' onClick={() => setView(view + 1)}>Suivant</button>}

        {isFinishButton() && <button className='finish' onClick={validation}>Terminer</button>}
      </div>

      {error && <div>{error}</div>}
    </div>
  )
}

export default NewPost