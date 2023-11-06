import React, { useEffect, useState } from 'react'
import './SignUp.css'

import SHA3 from 'crypto-js/sha3'
import Base64 from 'crypto-js/enc-base64'

import { Link } from 'react-router-dom'

import SearchBar from '../../../Components/SearchBar/SearchBar'
import Loading from '../../../Components/Loading/Loading'

import axios from 'axios'

function SignUp() {

  const [type, setType] = useState('')
  const [studentInfo, setStudentInfo] = useState({ surname: '', firstname: '', email: '', password: '', password2: '', picture: '', description: '', web_site: '', cv: '', cp: '', city: '', birthday: '', is_conveyed: null })
  const [recruiterInfo, setRecruiterInfo] = useState({ id_company: '', surname: '', firstname: '', email: '', password: '', password2: '', picture: '' })
  const [error, setError] = useState(null)
  const [companyList, setCompanyList] = useState(null)
  // const [recruiterIsLoading, setRecruiterIsLoading] = useState(false)
  const [isCompleted, setIsCompleted] = useState([false])
  const [cityList, setCityList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [isAjout, setIsAjout] = useState(null)

  const [view, setView] = useState(0)
  const [viewMax, setViewMax] = useState(1)

  const passwordVerif = (info) => {
    if (info.password.length < 8) {
      setError('Le mot de passe doit faire 8 caractères ou plus !')
      return false
    } else if (info.password.search(/[a-z]/) < 0) {
      setError('Le mot de passe doit comporté au moins une lettre minuscule !')
      return false
    } else if (info.password.search(/[A-Z]/) < 0) {
      setError('Le mot de passe doit comporté au moins une lettre majuscule !')
      return false
    } else if (info.password.search(/[0-9]/) < 0) {
      setError('Le mot de passe doit comporté au moins un chiffre !')
      return false
    } else if (info.password !== info.password2) {
      setError('Les deux mots de passe doivent être identiques !')
      return false
    }
    return true
  }

  const updateInfo = (event) => {
    if (type === 'student') {
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
        case 'password2':
          setStudentInfo({ ...studentInfo, 'password2': event.target.value })
          break;
        case 'picture':
          setStudentInfo({ ...studentInfo, 'picture': event.target.files[0] })
          break;
        case 'description':
          setStudentInfo({ ...studentInfo, 'description': event.target.value })
          break;
        case 'web_site':
          setStudentInfo({ ...studentInfo, 'web_site': event.target.value })
          break;
        case 'cv':
          setStudentInfo({ ...studentInfo, 'cv': event.target.files[0] })
          break;
        case 'cp':
          setStudentInfo({ ...studentInfo, 'cp': event.target.value })
          break;
        case 'city':
          axios.get('https://geo.api.gouv.fr/communes?nom=' + event.target.value + '&boost=population&limit=10')
            .then((response) => {
              setCityList(response.data)
              // setStudentInfo({ ...studentInfo, 'cp': response.data[0].codesPostaux[0] })
            })
            .catch((error) => {
              console.log(error)
            })
          setStudentInfo({ ...studentInfo, 'city': event.target.value })
          break;
        case 'birthday':
          console.log(event.target.value)
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
    } else if (type === 'recruiter') {
      switch (event.target.id) {
        case 'company':
          if (companyList.find((e) => e.name == event.target.value) !== undefined) {
            setRecruiterInfo({ ...recruiterInfo, id_company: companyList.find((e) => e.name == event.target.value).siren })
          } else {
            setRecruiterInfo({ ...recruiterInfo, id_company: '' })
          }
          break;
        case 'firstname':
          setRecruiterInfo({ ...recruiterInfo, 'firstname': event.target.value })
          break;
        case 'surname':
          setRecruiterInfo({ ...recruiterInfo, 'surname': event.target.value })
          break;
        case 'email':
          setRecruiterInfo({ ...recruiterInfo, 'email': event.target.value })
          break;
        case 'password':
          setRecruiterInfo({ ...recruiterInfo, 'password': event.target.value })
          break;
        case 'password2':
          setRecruiterInfo({ ...recruiterInfo, 'password2': event.target.value })
          break;
        case 'picture':
          setRecruiterInfo({ ...recruiterInfo, 'picture': event.target.value })
          break;
        default:
          break
      }
    }
  }

  const rendu = () => {
    if (view === 0) {
      return choice
    }
    if (view > viewMax) {
      return finish_rendu()
    }
    else switch (type) {
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

            <div className='info_content'>
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
              <input className='file' autoComplete='off' accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" type='file' id='picture'
                // filename={studentInfo.picture} 
                onChange={updateInfo}></input>
            </div>

            <div className='info_content'>
              <h2 className='description'>Une description :</h2>
              <textarea className='description' type='text' placeholder='Décrivez vous ...' id='description' value={studentInfo.description} onChange={updateInfo}></textarea>
            </div>

            <div className='info_content'>
              <h2 className='web_site'>Votre site internet : *</h2>
              <input type='text' placeholder='Entrer votre site internet' autoComplete='off' id='web_site' value={studentInfo.web_site} onChange={updateInfo}></input>
            </div>

            <div className='info_content'>
              <h2 className='cv'>Votre CV : *</ h2>
              <input className='file' accept=".pdf" type='file' id='cv' autoComplete='off'
                // filename={studentInfo.cv} 
                onChange={updateInfo}></input>
            </div>
          </>
        )
      case 4:
        return (
          <>
            <div className='info_content'>
              <h2 className='loc'>Votre ville :</h2>
              <div className='loc_content'>
                <input list="citys" name="citys" id="city" placeholder="Votre ville" autoComplete='off' onChange={updateInfo} />
                <datalist id='citys'>
                  {
                    cityList.map((element, index) => {
                      return <option key={index} value={element.nom} />
                    })
                  }
                </datalist>
                <input list="cps" name="cps" id='cp' placeholder="Votre code postal" autoComplete='off' onChange={updateInfo} />
                <datalist id='cps'>
                  {
                    cityList.map((element, index) => {
                      return <option key={index} value={element.codesPostaux[0]} />
                    })
                  }
                </datalist>
              </div>
            </div>

            <div className='info_content'>
              <h2 className='conveyed'>Êtes vous véhiculé :</h2>
              <div className='radio'>
                <input type='radio' name='user-type' id='is_conveyed_true' value={studentInfo.is_conveyed} onChange={updateInfo} />
                <label for='is_conveyed_true' >Oui</label>
                <input type='radio' name='user-type' id='is_conveyed_false' value={!studentInfo.is_conveyed} onChange={updateInfo} />
                <label for='is_conveyed_false' >Non</label>
              </div>
            </div>
          </>
        )
      default:
        return <></>
    }
  }

  const recruiter_rendu = () => {
    let addCompany = false;
    switch (view) {
      case 1:
        if (addCompany === false) {
          return (
            <>
              <div className='info_content'>
                <h2 className='company'>Votre entreprise :</h2>
                {/* <SearchBar change={updateInfo} list={companyList} element={'name'} placeholder={'Rechercher une entreprise'} /> */}
                <input list='companys' name='companys' placeholder='Entrer le nom de votre entreprise' id='company' onChange={updateInfo}></input>
                <datalist id='companys'>
                  {
                    companyList.map((element, index) => {
                      return <option key={index} value={element.name} />
                    })
                  }
                </datalist>
              </div>
              <div className='info_content'>
                <h2>Votre entreprise n'est pas dans la liste ?</h2>
                <button onClick={() => setView(1.5)}>Ajouter la !</button>
              </div>
            </>
          )
        } else {
          return (<>
            <div className='info_content'>
              <p>Cette option sera bientôt disponible !!</p>
              {/* Les info pour add une entreprise */}
            </div>
          </>
          )
        }
      case 2:
        return (
          <>
            <div className='info_content'>
              <h2 className='firstname'>Votre nom :</h2>
              <input type='text' placeholder='Entrer votre nom' id='firstname' value={recruiterInfo.firstname} onChange={updateInfo}></input>
            </div>
            <div className='info_content'>
              <h2 className='surname'>Votre prénom :</h2>
              <input type='text' placeholder='Entrer votre prénom' id='surname' value={recruiterInfo.surname} onChange={updateInfo}></input>
            </div>
            <div className='info_content'>
              <h2 className='picture'>Une photo de profil :</h2>
              <input className='file' autoComplete='off' accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" type='file' id='picture' filename={recruiterInfo.picture} onChange={updateInfo}></input>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className='info_content'>
              <h2 className='email'>Votre adresse email :</h2>
              <input type='text' placeholder='Entrer votre email' id='email' value={recruiterInfo.email} onChange={updateInfo}></input>
            </div>
            <div className='info_content'>
              <h2 className='password'>Un mot de passe :</h2>
              <input type='password' placeholder='Entrer votre mot de passe' id='password' value={recruiterInfo.password} onChange={updateInfo}></input>
              <input type='password' placeholder='Entrer votre mot de passe' id='password2' value={recruiterInfo.password2} onChange={updateInfo}></input>
              <h4 className='info'>Au moins 8 caractères, dont une minuscule, une majuscule et un chiffre !</h4>
            </div>
          </>
        )
      default:
        return <></>
    }
  }

  const finish_rendu = () => {
    return <>
      <h3>Votre compte à bien été créer ! Vous pouvez vous connecter :</h3>
      <Link to='/' className='little_button'>Connexion</Link>
    </>
  }

  const getCompanyList = () => {
    axios.get(process.env.REACT_APP_API_URL + '/api/Company/list_company')
      .then((response) => {
        console.log(response.data)
        setCompanyList(response.data)
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
    if (type === 'student') {
      if (studentInfo.firstname !== '' && studentInfo.surname !== '' && studentInfo.birthday !== '') {
        setIsCompleted([true, true, false, false, false])
        if (studentInfo.email !== '' && passwordVerif(studentInfo)) {
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
    } else if (type === 'recruiter') {
      if (recruiterInfo.id_company !== '') {
        setIsCompleted([true, true, false, false])
        if (recruiterInfo.firstname !== '' && recruiterInfo.surname !== '' && recruiterInfo.picture !== '') {
          setIsCompleted([true, true, true, false])
          if (recruiterInfo.email !== '' && passwordVerif(recruiterInfo)) {
            setIsCompleted([true, true, true, true])
          }
        }
        else {
          setIsCompleted([true, true, false, false])
        }
      } else {
        setIsCompleted([true, false, false, false])
      }
    }
  }, [studentInfo, type, recruiterInfo])

  const choice = (
    <>
      <h2>Vous êtes:</h2>

      <div className='radio'>
        <input id='student' type='radio' name='user-type' onChange={() => { setType('student'); setIsCompleted([true]); setViewMax(4) }} />
        <label for='student'>Étudiant</label>

        <input id='recruiter' type='radio' name='user-type' onChange={() => { setType('recruiter'); getCompanyList(); setIsCompleted([true]); setViewMax(3) }} />
        <label for='recruiter'>Recruteur</label>
      </div>
    </>
  )

  const validation = () => {
    console.log(studentInfo)
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
          const formData = new FormData()
          formData.append('firstname', studentInfo.firstname)
          formData.append('surname', studentInfo.surname)
          formData.append('email', studentInfo.email)
          formData.append('password', Base64.stringify(SHA3(studentInfo.password)))
          formData.append('file_picture', studentInfo.picture)
          formData.append('description', studentInfo.description)
          formData.append('web_site', studentInfo.web_site)
          formData.append('file_cv', studentInfo.cv)
          formData.append('cp', studentInfo.cp)
          formData.append('city', studentInfo.city)
          formData.append('birthday', studentInfo.birthday)
          formData.append('is_conveyed', studentInfo.is_conveyed)

          console.log('info : ', formData)
          axios.post(process.env.REACT_APP_API_URL + '/api/User/AddStudent', formData)
            .then((result) => {
              if (result.status === 200) {
                if (result.data === 'creer') {
                  setIsAjout(true)
                  setView(view + 1)
                } else if (result.data === 'existe') {
                  setError('Un compte existe déjà avec cette adresse mail')
                } else {
                  setError('JSP')
                }
              } else {
                setIsAjout(false)
                setError('JSP')
              }
            })
            .catch((error) => {
              setError(error.message)
            })
        } else {
          setError('Veuillez renseigner tous les champs (Sauf ceux possédant une *) !!')
        }
        break
      case 'recruiter':
        if (recruiterInfo.id_company !== '' && recruiterInfo.firstname !== '' && recruiterInfo.surname !== '' && recruiterInfo.email !== '' && recruiterInfo.password !== '' && recruiterInfo.picture !== '') {
          let info = {
            id_company: recruiterInfo.id_company, firstname: recruiterInfo.firstname, surname: recruiterInfo.surname, email: recruiterInfo.email,
            password: Base64.stringify(SHA3(recruiterInfo.password)), picture: recruiterInfo.picture
          }
          console.log(info)
          axios.post(process.env.REACT_APP_API_URL + '/api/User/AddRecruiter', info)
            .then((result) => {
              if (result.status === 200) {
                if (result.data === 'creer') {
                  setIsAjout(true)
                  setView(view + 1)
                } else if (result.data === 'existe') {
                  setError('Un compte existe déjà avec cette adresse mail')
                } else {
                  setError('JSP')
                }
              } else {
                setIsAjout(false)
                setError('JSP')
              }
            })
            .catch((error) => {
              setError(error.message)
            })
        }
        break;
      default:
        break
    }
  }

  // const newCompany = () => {
  // }

  return (
    <div className='sign_up'>

      <div className='bienvenue'>
        <h1>C'EST À VOUS</h1>
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