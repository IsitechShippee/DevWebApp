import './Navbar.css';
import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
//Importation des composants
import HomePage from '../Home/Home';
import SearchPage from '../Search/Search';
/*import PostPage from '../Post/Post';
import ChattingPage from '../Chatting/Chat';*/
//Importation des icônes
import Home from '../../images/Home.png';
import Search from '../../images/Search.png';
import Post from '../../images/Post.png';
import Chat from '../../images/Chatting.png';
import User from '../../images/User.png';
import Parameter from '../../images/Parameter.png';

export default  function Navbar() {

  const [isShow, setIsShow] = useState(false);

  return (
    <div className="Navbar">
      <div
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}>
        <div className='Navbar-small'>
          <div className='Navbar-top'>
            <div className='NavbarItem'>
              <Link to="/" className='Navbar-links'><img className='NavbarImg zoom' src={HomePage}></img></Link>
            </div>
            <div className='NavbarItem'>
              <a className='Navbar-links' href='#'><img className='NavbarImg zoom' src={SearchPage}></img></a>
            </div>
            <div className='NavbarItem'>
              <a className='Navbar-links' href='#'><img className='NavbarImg zoom' src='#'></img></a>
            </div>
            <div className='NavbarItem'>
              <a className='Navbar-links' href='#'><img className='NavbarImg zoom' src='#'></img></a>
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
      <Route exact path="/" component={HomePage} />
      <Route exact path="/recherche" component={SearchPage} />
    </div>
  );
}