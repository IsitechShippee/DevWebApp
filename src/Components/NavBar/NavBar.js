import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SVG from '../../Pictures/SVG'
import './NavBar.css'

function NavBar() {

  const [isActive, setIsActive] = useState(0)

  const acitveElement = (id) => {
    setIsActive(id)
    console.log(id)
  }

  return (
    <div className='navbar'>
      <Link to='/' onClick={() => acitveElement(0)} className={isActive === 0 ? 'active' : ''}>
        <SVG.Home />
        <h1>Accueil</h1>
      </Link>
      <Link to='/search' onClick={() => acitveElement(1)} className={isActive === 1 ? 'active' : ''}>
        <SVG.Home2 />
        <h1>Rechercher</h1>
      </Link>
      <Link to='/newpost' onClick={() => acitveElement(2)} className={isActive === 2 ? 'active' : ''}>
        <SVG.Home />
        <h1>NewPost</h1>
      </Link>
      <Link to='/chat' onClick={() => acitveElement(3)} className={isActive === 3 ? 'active' : ''}>
        <SVG.Home2 />
        <h1>Message</h1>
      </Link>
      <Link to='/user' onClick={() => acitveElement(4)} className={isActive === 4 ? 'user active' : 'user'}>
        <SVG.Home />
        <h1>Compte</h1>
      </Link>
    </div>
  )
}

export default NavBar