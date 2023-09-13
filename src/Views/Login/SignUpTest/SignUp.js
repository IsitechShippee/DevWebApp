import React, { useEffect, useState } from 'react'
import './SignUp.css'

import SHA3 from 'crypto-js/sha3'

import { Link } from 'react-router-dom'

import SearchBar from '../../../Components/SearchBar/SearchBar'
import Loading from '../../../Components/Loading/Loading'

import axios from 'axios'

function SignUp() {

  const [type, setType] = useState('')
  const [studentInfo, setStudentInfo] = useState({ surname: '', firstname: '', email: '', password: '', password2: '', picture: '', description: '', web_site: '', cv: '', cp: '', city: '', birthday: '', is_conveyed: null })
  const [recruiterInfo, setRecruiterInfo] = useState({})
  const [error, setError] = useState(null)
  const [companyList, setCompanyList] = useState(null)
  // const [recruiterIsLoading, setRecruiterIsLoading] = useState(false)
  const [isCompleted, setIsCompleted] = useState([false])
  const [cityList, setCityList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [isAjout, setIsAjout] = useState(null)

  const [view, setView] = useState(0)
  const [viewMax, setViewMax] = useState(1)

  const passwordVerif = () => {
    if (studentInfo.password.length < 8) {
      setError('Le mot de passe doit faire 8 caractères ou plus !')
      return false
    } else if (studentInfo.password.search(/[a-z]/) < 0) {
      setError('Le mot de passe doit comporté au moins une lettre minuscule !')
      return false
    } else if (studentInfo.password.search(/[A-Z]/) < 0) {
      setError('Le mot de passe doit comporté au moins une lettre majuscule !')
      return false
    } else if (studentInfo.password.search(/[0-9]/) < 0) {
      setError('Le mot de passe doit comporté au moins un chiffre !')
      return false
    } else if (studentInfo.password !== studentInfo.password2) {
      setError('Les deux mots de passe doivent être identiques !')
      return false
    }
    return true
  }

  const updateInfo = (event) => {
    switch (event.target.id) {
      case 'firstname':
        setStudentInfo({ ...studentInfo, 'firstname': event.target.value })
        break;
      case 'surname':
        setStudentInfo({ ...studentInfo, 'surname': event.target.value })
        break;
      case 'email':
        setStudentInfo({ ...studentInfo, 'email': event.target.value })
        break;
      case 'password':
        let hash = SHA3(event.target.value, { outputLength: 512 })
        console.log(hash)
        setStudentInfo({ ...studentInfo, 'password': event.target.value })
        break;
      case 'password2':
        setStudentInfo({ ...studentInfo, 'password2': event.target.value })
        break;
      case 'picture':
        setStudentInfo({ ...studentInfo, 'picture': event.target.value })
        break;
      case 'description':
        setStudentInfo({ ...studentInfo, 'description': event.target.value })
        break;
      case 'web_site':
        setStudentInfo({ ...studentInfo, 'web_site': event.target.value })
        break;
      case 'cv':
        setStudentInfo({ ...studentInfo, 'cv': event.target.value })
        break;
      case 'cp':
        setStudentInfo({ ...studentInfo, 'cp': event.target.value })
        break;
      case 'city':
        axios.get('https://geo.api.gouv.fr/communes?nom=' + event.target.value + '&boost=population&limit=10')
          .then((response) => {
            console.log(response)
            setCityList(response.data)
            setStudentInfo({ ...studentInfo, 'cp': response.data[0].codesPostaux[0] })
          })
          .catch((error) => {
            console.log(error)
          })
        setStudentInfo({ ...studentInfo, 'city': event.target.value })
        break;
      case 'birthday':
        setStudentInfo({ ...studentInfo, 'birthday': event.target.value })
        break;
      case 'is_conveyed_true':
        if (event.target.checked === true) {
          setStudentInfo({ ...studentInfo, 'is_conveyed': true })
        }
        break;
      case 'is_conveyed_false':
        if (event.target.checked === true) {
          setStudentInfo({ ...studentInfo, 'is_conveyed': false })
        }
        break;
      default:
        break
    }
  }

  const rendu = () => {
    if (view === 0) {
      return choice
    }
    if (view > viewMax) {
      return finish_rendu
    }
    switch (type) {
      case 'student':
        return student_rendu()
      case 'recruiter':
        return recruiter_rendu()
      default:
        return choice
    }
  }

  const student_rendu = () => {
    switch (view) {
      case 1:
        return (
          <>
            <div className='info_content'>
              <h2 className='firstname'>Votre nom :</h2>
              <input type='text' placeholder='Entrer votre nom' id='surname' value={studentInfo.surname} onChange={updateInfo}></input>
            </div>

            <div className='info_content'>
              <h2 className='surname'>Votre prénom :</h2>
              <input type='text' placeholder='Entrer votre prénom' id='firstname' value={studentInfo.firstname} onChange={updateInfo}></input>
            </div>

            <div className='info-content'>
              <h2 className='birthday'>Votre date de naissance :</h2>
              <input className='date' type='date' id='birthday' value={studentInfo.birthday} onChange={updateInfo}></input>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className='info_content'>
              <h2 className='email'>Votre email :</h2>
              <input type='text' placeholder='Entrer votre email' id='email' value={studentInfo.email} onChange={updateInfo}></input>
            </div>

            <div className='info_content'>
              <h2 className='password'>Un mot de passe :</h2>
              <input type='password' placeholder='Entrer votre mot de passe' id='password' value={studentInfo.password} onChange={updateInfo}></input>
              <input type='password' placeholder='Entrer votre mot de passe' id='password2' value={studentInfo.password2} onChange={updateInfo}></input>
              <h4 className='info'>Au moins 8 caractères, dont une minuscule, une majuscule et un chiffre !</h4>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className='info_content'>
              <h2 className='picture'>Une photo de profil :</h2>
              <input className='file' accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" type='file' id='picture' filename={studentInfo.picture} onChange={updateInfo}></input>
            </div>

            <div className='info_content'>
              <h2 className='description'>Une description :</h2>
              <input className='description' type='text' placeholder='Décrivez vous ...' id='description' value={studentInfo.description} onChange={updateInfo}></input>
            </div>

            <div className='info_content'>
              <h2 className='web_site'>Votre site internet : *</h2>
              <input type='text' placeholder='Entrer votre site internet' id='web_site' value={studentInfo.web_site} onChange={updateInfo}></input>
            </div>

            <div className='info-content'>
              <h2 className='cv'>Votre CV : *</ h2>
              <input className='file' accept=".pdf" type='file' id='cv' filename={studentInfo.cv} onChange={updateInfo}></input>
            </div>
          </>
        )
      case 4:
        return (
          <>
            <div className='info-content'>
              <h2 className='loc'>Votre ville :</h2>
              <SearchBar id='city' change={updateInfo} list={cityList} element={'nom'} placeholder='Votre ville' />
              <input type='text' placeholder='Votre code postal' id='cp' value={studentInfo.cp} onChange={updateInfo}></input>
            </div>

            <div className='info-content'>
              <h2 className='conveyed'>Êtes vous véhiculé :</h2>
              <input type='radio' name='user-type' id='is_conveyed_true' value={studentInfo.is_conveyed} onChange={updateInfo} />
              <label>Oui</label>
              <input type='radio' name='user-type' id='is_conveyed_false' onChange={updateInfo} />
              <label>Non</label>
            </div>
          </>
        )
      default:
        return <></>
    }
  }

  const recruiter_rendu = () => {
    return <></>
  }

  const finish_rendu = () => {
    return <>
      <h3>Votre compte à bien été créer ! Vous pouvez vous connecter :</h3>
      <Link to='/' className='little_button'></Link>
    </>
  }

  const getCompanyList = () => {
    axios.get('https://localhost:7061/api/Company/list_company')
      .then((response) => {
        console.log(response.data)
        let list = []
        for (let i = 0; i < response.data.length; i++) {
          list[i] = response.data[i].name
        }
        setCompanyList(list)
      })
      .then(() => {
        setTimeout(() => {
          setIsLoading(true)
        }, 1000)
      })
      .catch((error) => { console.log(error) })
  }

  const isNextButton = () => {
    return view < viewMax && isCompleted[view]
  }

  const isFinishButton = () => {
    return view >= viewMax && isCompleted[viewMax]
  }

  useEffect(() => {
    if (studentInfo.firstname !== '' && studentInfo.surname !== '' && studentInfo.birthday !== '') {
      setIsCompleted([true, true, false, false, false])
      if (studentInfo.email !== '' && passwordVerif()) {
        setError(null)
        setIsCompleted([true, true, true, false, false])
        if (studentInfo.picture !== '' && studentInfo.description !== '') {
          setIsCompleted([true, true, true, true, false])
          if (studentInfo.city !== '' && studentInfo.cp !== '' && studentInfo.is_conveyed !== null) {
            setIsCompleted([true, true, true, true, true])
          } else {
            setIsCompleted([true, true, true, true, false])
          }
        } else {
          setIsCompleted([true, true, true, false, false])
        }
      } else {
        setIsCompleted([true, true, false, false, false])
      }
    } else {
      setIsCompleted([true, false, false, false, false])
    }
    // setIsCompleted([true, true, true, true, true])
  }, [studentInfo])

  const choice = (
    <>
      <h2 className='psw'>Vous êtes:</h2>
      <input type='radio' name='user-type' onChange={() => { setType('student'); setIsCompleted([true]); setViewMax(4) }} />
      <label>Etudiant</label>
      <input type='radio' name='user-type' onChange={() => { setType('recruiter'); getCompanyList(); setIsCompleted([true]); setViewMax(1) }} />
      <label>Recruteur</label>
    </>
  )

  const validation = () => {
    setView(view + 1)
    switch (type) {
      case 'student':
        if (studentInfo.firstname
          && studentInfo.surname
          && studentInfo.email
          && studentInfo.password
          && studentInfo.picture
          && studentInfo.description
          && studentInfo.cp
          && studentInfo.city
          && studentInfo.birthday
          && studentInfo.is_conveyed
        ) {
          // let info = {password: sha256(studentInfo.password), ...studentInfo} 
          // console.log(info)
          // axios.post('https://localhost:7061/api/User/AddStudent', studentInfo)
          //   .then((result) => {
          //     if (result.status == 200) {
          //       setIsAjout(true);
          //     } else {
          //       setIsAjout(false)
          //       setError('JSP')
          //     }
          //   })
          //   .catch((error) => {
          //     setError(error.message)
          //   })
        } else {
          setError('Veuillez renseigner tous les champs (Sauf ceux possédant une *) !!')
        }
        break

      default:
        break
    }
  }

  // const newCompany = () => {
  // }

  return (
    <div className='sign_up'>

      <div className='bienvenue'>
        <h1>C'EST A VOUS</h1>
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

export default SignUp