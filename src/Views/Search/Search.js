import React, { useState } from 'react'
import './Search.css'
import RecriuterAnnouncement from '../../Components/Announcement/RecriuterAnnouncement/RecruiterAnnouncement'
import StudentAnnouncement from '../../Components/Announcement/StudentAnnouncement/StudentAnnouncement'
import Pictures from '../../Pictures/Pictures'
import SearchBar from '../../Components/SearchBar/SearchBar'
import axios from 'axios'

function Search() {

  const [isActive, setIsActive] = useState(false)
  const [cityList, setCityList] = useState([])

  const [searchList, setSearchList] = useState([])

  const filterList = {
    diplome: [
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
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const research = () => {
    setSearchList([])
  }

  const recentSearch = ['Une recherche null']

  return (
    <div className={isActive ? 'search' : 'search active'}>

      <div className='search_page'>
        <div className='research_bar'>
          <SearchBar list={recentSearch} placeholder={'Rechercher des annonces'} />
          <button onClick={research}><img src={Pictures.Search} alt='Search' /></button>
        </div>

        <div className='search_result'>
          {
            searchList.map((element, index) => (
              <RecriuterAnnouncement />
            ))
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

            <h1>Diplôme</h1>
            <select >
              {
                filterList.diplome.map((element, index) => (
                  <option key={index} value={element.id}>{element.name}</option>
                ))
              }
            </select>

            <h1>Secteur d'activité</h1>
            <select >
              {
                filterList.activity.map((element, index) => (
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

    </div>
  )
}

export default Search