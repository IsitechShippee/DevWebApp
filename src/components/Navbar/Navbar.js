import './Navbar.css';
import React, { useState } from 'react';
//Importation des icônes
import Home from '../../images/Home.png';
import Search from '../../images/Search.png';
import Post from '../../images/Post.png';
import Chat from '../../images/Chatting.png';
import User from '../../images/User.png';
import Parameter from '../../images/Parameter.png';

function Navbar() {

  const [isShow, setIsShow] = useState(false);

  return (
    <div className="Navbar">
      <div
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}>
        <div className='Navbar-small'>
          <div className='Navbar-top'>
            <div className='NavbarItem'>
              <a className='Navbar-links' href='#'><img className='NavbarImg zoom' src={Home}></img></a>
            </div>
            <div className='NavbarItem'>
              <a className='Navbar-links' href='#'><img className='NavbarImg zoom' src={Search}></img></a>
            </div>
            <div className='NavbarItem'>
              <a className='Navbar-links' href='#'><img className='NavbarImg zoom' src={Post}></img></a>
            </div>
            <div className='NavbarItem'>
              <a className='Navbar-links' href='#'><img className='NavbarImg zoom' src={Chat}></img></a>
            </div>
          </div>
          <div className='Navbar-bottom'>
            <div className='NavbarItem'>
              <a className='Navbar-links' href='#'><img className='NavbarImg zoom' src={User}></img></a>
            </div>
            <div className='NavbarItem'>
              <a className='Navbar-links' href='#'><img className='NavbarImg zoom' src={Parameter}></img></a>
            </div>
          </div>
        </div>
      </div>
      {isShow && (
        <div className='Navbar-extend'>
          <div className='Navbar-top-extend'>
            <div className='NavbarItem-extend'>
              <a className='Navbar-links-extend' href='#'>
              <p className='Navbar-name zoom'>Accueil</p></a>
            </div>
            <div className='NavbarItem-extend'>
              <a className='Navbar-links-extend' href='#'>
              <p className='Navbar-name zoom'>Rechercher</p></a>
            </div>
            <div className='NavbarItem-extend'>
              <a className='Navbar-links-extend' href='#'>
              <p className='Navbar-name zoom'>Poster</p></a>
            </div>
            <div className='NavbarItem-extend'>
              <a className='Navbar-links-extend' href='#'>
              <p className='Navbar-name zoom'>Discussion</p></a>
            </div>
          </div>
          <div className='Navbar-bottom-extend'>
            <div className='NavbarItem-extend'>
              <a className='Navbar-links-extend' href='#'>
              <p className='Navbar-name zoom'>Compte</p></a>
            </div>
            <div className='NavbarItem-extend'>
              <a className='Navbar-links-extend' href='#'>
              <p className='Navbar-name zoom'>Paramètre</p></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;