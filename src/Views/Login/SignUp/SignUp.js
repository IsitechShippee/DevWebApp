import React, { useState } from 'react'
import './SignUp.css'

import SearchBar from '../../../Components/SearchBar/SearchBar'
import Loading from '../../../Components/Loading/Loading'

import axios from 'axios'

function SignUp() {

  const [type, setType] = useState('')
  const [studentInfo, setStudentInfo] = useState({})
  const [recruiterInfo, setRecruiterInfo] = useState({})
  const [error, setError] = useState(null)
  const [companyList, setCompanyList] = useState(null)
  const [recruiterIsLoading, setRecruiterIsLoading] = useState(false)

  const validation = () => {
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
          axios.post('https://localhost:7061/api/User/AddStudent', studentInfo)
            .catch((error) => {
              setError(error.message)
            })
        } else {
          setError('Veuillez renseigner tous les champs (Sauf ceux possédant une *) !!')
        }
        break

      default:
        break
    }
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
        setStudentInfo({ ...studentInfo, 'password': event.target.value })
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
        setStudentInfo({ ...studentInfo, 'city': event.target.value })
        break;
      case 'birthday':
        setStudentInfo({ ...studentInfo, 'birthday': event.target.value })
        break;
      case 'is_conveyed_true':
        setStudentInfo({ ...studentInfo, 'is_conveyed': true })
        break;
      case 'is_conveyed_false':
        setStudentInfo({ ...studentInfo, 'is_conveyed': false })
        break;
      default:
        break
    }
  }

  const newCompany = () => {

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
          console.log('Good')
          setRecruiterIsLoading(true)
        }, 1000)
      })
      .catch((error) => { console.log(error) })
  }

  const formulaire = () => {
    switch (type) {
      case 'student':
        return student
      case 'recruiter':
        return recruiterIsLoading ? recruiter : <Loading />
      default:
        return <></>
    }
  }

  const student = (
    <div className='info'>
      <div className='info_content'>
        <h2 className='firstname'>Votre nom :</h2>
        <input type='text' placeholder='Entrer votre nom' id='firstname' onChange={updateInfo}></input>
      </div>

      <div className='info_content'>
        <h2 className='surname'>Votre prénom :</h2>
        <input type='text' placeholder='Entrer votre prénom' id='surname' onChange={updateInfo}></input>
      </div>

      <div className='info_content'>
        <h2 className='email'>Votre email :</h2>
        <input type='text' placeholder='Entrer votre email' id='email' onChange={updateInfo}></input>
      </div>

      <div className='info_content'>
        <h2 className='password'>Un mot de passe :</h2>
        <input type='password' placeholder='Entrer votre mot de passe'></input>
        <input type='password' placeholder='Entrer votre mot de passe' id='password' onChange={updateInfo}></input>
        <h4 className='info'>Au moins 7 caractères, dont une minuscule, une majuscule et un chiffre !</h4>
      </div>

      <div className='info_content'>
        <h2 className='picture'>Une photo de profil :</h2>
        <input className='file' type='file' id='picture' onChange={updateInfo}></input>
      </div>

      <div className='info-content'>
        <h2 className='birthday'>Votre date de naissance :</h2>
        <input className='date' type='date' id='birthday' onChange={updateInfo}></input>
      </div>

      <div className='info_content'>
        <h2 className='description'>Une description :</h2>
        <input className='description' type='text' placeholder='Décrivez vous ...' id='description' onChange={updateInfo}></input>
      </div>

      <div className='info_content'>
        <h2 className='web_site'>Votre site internet : *</h2>
        <input type='text' placeholder='Entrer votre site internet' id='web_site' onChange={updateInfo}></input>
      </div>

      <div className='info-content'>
        <h2 className='cv'>Votre CV : *</ h2>
        <input className='file' type='file' id='cv' onChange={updateInfo}></input>
      </div>

      <div className='info-content'>
        <h2 className='loc'>Votre ville :</h2>
        <input type='text' placeholder='Votre code postal' id='cp' onChange={updateInfo}></input>
        <input type='text' placeholder='Votre ville' id='city' onChange={updateInfo}></input>
      </div>

      <div className='info-content'>
        <h2 className='conveyed'>Êtes vous véhiculé :</h2>
        <input type='radio' name='user-type' id='is_conveyed_true' onChange={updateInfo} />
        <label>Oui</label>
        <input type='radio' name='user-type' id='is_conveyed_false' onChange={updateInfo} />
        <label>Non</label>
      </div>

      <div className='info-content'>
        <button onClick={validation}>Valider</button>
      </div>

    </div>
  )

  const recruiter = (
    <div className='info'>
      <h2 className='company'>Votre société</h2>
      <SearchBar change={updateInfo} list={companyList} placeholder='Cherchez votre société ..' />
      <div className='info_content'>
        <h2 className='create_company'>Votre entreprise n'existe pas dans la liste</h2>
        <button onClick={newCompany}>Creer</button>
      </div>
    </div>
  )

  return (
    <div className='sign_up'>

      <div className='bienvenue'>
        <h1>C'EST A VOUS</h1>
      </div>

      <div className='info_content'>
        <h2 className='psw'>Vous êtes:</h2>
        <input type='radio' name='user-type' onChange={() => setType('student')} />
        <label>Etudiant</label>
        <input type='radio' name='user-type' onChange={() => { setType('recruiter'); getCompanyList() }} />
        <label>Recruteur</label>
      </div>

      {/* {formulaire()} */}

      {error && <div>{error}</div>}

    </div>
  )
}

export default SignUp