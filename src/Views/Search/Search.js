import React, { useState, useContext, useEffect } from 'react'
import './Search.css'
import RecruiterAnnouncement from '../../Components/Announcement/RecriuterAnnouncement/RecruiterAnnouncement'
import StudentAnnouncement from '../../Components/Announcement/StudentAnnouncement/StudentAnnouncement'
import Pictures from '../../Pictures/Pictures'
import SearchBar from '../../Components/SearchBar/SearchBar'
import axios from 'axios'
import { myAppContextUserInfo } from '../../Stores/UserInfoContext'
import { myAppContextPopUp } from '../../Stores/PopUpContext'

function Search() {
  const userInfoContext = useContext(myAppContextUserInfo)
  const popUpContext = useContext(myAppContextPopUp)

  const [isActive, setIsActive] = useState(false)
  const [cityList, setCityList] = useState([])
  const [isPopUp, setIsPopUp] = useState(false)

  const [donnee, setDonnee] = useState({})

  const [searchList, setSearchList] = useState([])

  useEffect(() => {
    if (popUpContext.popUp.search.value) {
      setIsPopUp(true)
    } else {
      setIsPopUp(false)
    }
  }, [popUpContext])

  const filterList = {
    diplome: [
      { id: null, name: "- Choisir un diplome -" },
      { id: 1, name: "Sans Diplôme" },
      { id: 2, name: "Bac" },
      { id: 3, name: "Bac + 2" },
      { id: 4, name: "Bac + 3" },
    ],
    activity: [
      { id: 1, name: "Informatique" },
      { id: 2, name: "Agriculture" },
      { id: 3, name: "Mangeuse de queue" },
      { id: 4, name: "Pret à porter" },
    ]
  }

  const active = () => {
    setIsActive(!isActive)
  }

  const cityIsUpdate = (event) => {
    axios.get('https://geo.api.gouv.fr/communes?nom=' + event.target.value + '&limit=5')
      .then((response) => {
        let list = []
        response.data.forEach(element => {
          list.push(element.nom)
        })
        setCityList(list)
        setDonnee({ ...donnee, cp: response.data[0].codesPostaux[0] })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const research = () => {
    let url = 'id=' + userInfoContext.userInfo.type_user.id
    if (donnee.cp) {
      url += '&cp=' + donnee.cp
    } else{
      url += '&cp=' + userInfoContext.userInfo.cp 
    }
    if (donnee.diplome) {
      url += '&diplome=' + donnee.diplome
    }
    console.log('request : ', process.env.REACT_APP_API_URL + '/api/Annoucement/listannouncement?' + url)
    axios.get(process.env.REACT_APP_API_URL + '/api/Annoucement/listannouncement?' + url)
      .then((response) => {
        console.log('search reponse : ', response.data)
        setSearchList(response.data)
      })
  }

  const searchUpdate = (e) => {
    let newSearchList = []
    searchList.filter((element) => {
      if (element.title.includes(e.target.value)) {
        newSearchList.push(element)
      }
      return null
    })
    setSearchList(newSearchList)
  }

  return (
    <div className={isActive ? 'search' : 'search active'}>

      <div className='search_page'>
        <div className='research_bar'>
          <SearchBar change={searchUpdate} list={searchList} element={'title'} placeholder={'Rechercher des annonces'} />
          <button onClick={research}><img src={Pictures.Search} alt='Search' /></button>
        </div>

        <div className='search_result'>
          {
            searchList.map((element, index) => (
              <RecruiterAnnouncement key={index} announcement={element} page={'SEARCH'}/>))
          }
        </div>
      </div>

      <span></span>

      <div className='filters'>
        <button className='filter_button' onClick={active}><img src={Pictures.Filters} alt='Filters' /></button>
        {
          !isActive && <h1 className='title'>Filtrer</h1>
        }
        {
          !isActive && <div className='filter_list'>
            <div className='city'>
              <h1>Localisation</h1>
              <SearchBar change={cityIsUpdate} list={cityList} placeholder={'Rechercher une ville '} />
            </div>

            <h1>Diplôme maximum</h1>
            <select onChange={(e) => (setDonnee({ ...donnee, diplome: e.target.value }))}>
              {
                filterList.diplome.map((element, index) => (
                  <option key={index} value={element.id}>{element.name}</option>
                ))
              }
            </select>

            <div className='validation'>
              <button >Réinitialiser</button>
              <button onClick={research}>Valider</button>
            </div>
          </div>
        }
      </div>

      {isPopUp && popUpContext.popUp.search.component}

    </div>
  )
}

export default Search