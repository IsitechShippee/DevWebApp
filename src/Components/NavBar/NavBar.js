import React from 'react'
import { Link } from 'react-router-dom'
import SVG from '../../SVG/SVG'
import './NavBar.css'

function NavBar(props) {

  const acitveElement = (id) => {
    props.setIsActive(id)
    // // Console.log(id)
  }
  
  const disconnect = () => {
    sessionStorage.clear()
    props.setConnect(false)
  }

  return (
    <div className='navbar'>
      <Link to='/' onClick={() => acitveElement(0)} className={props.isActive === 0 ? 'active' : ''}>
        <SVG.Home />
        <h1>Accueil</h1>
      </Link>
      <Link to='/search' onClick={() => acitveElement(1)} className={props.isActive === 1 ? 'active' : ''}>
        <SVG.Search />
        <h1>Rechercher</h1>
      </Link>
      <Link to='/newpost' onClick={() => acitveElement(2)} className={props.isActive === 2 ? 'active' : ''}>
        <SVG.Add />
        <h1>Poster</h1>
      </Link>
      <Link to='/chat' onClick={() => acitveElement(3)} className={props.isActive === 3 ? 'active' : ''}>
        <SVG.Chat />
        <h1>Message</h1>
      </Link>
      <Link to='/user' onClick={() => acitveElement(4)} className={props.isActive === 4 ? 'user active' : 'user'}>
        <SVG.User />
        <h1>Compte</h1>
      </Link>
      <Link to='/' onClick={disconnect}>
        <SVG.Disconnect />
        <h1>Déconnexion</h1>
      </Link>
    </div>
  )
}

export default NavBar