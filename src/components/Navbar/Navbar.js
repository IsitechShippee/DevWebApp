import './Navbar.css';
import React from "react";
import { Nav } from "react-bootstrap";

import Home from '../../images/Home.png';
import Search from '../../images/Search.png';
import Post from '../../images/Post.png';
import Chat from '../../images/Chatting.png';
import User from '../../images/User.png';
import Parameter from '../../images/Parameter.png';

function Navbar() {
  return (
    <Nav className="Navbar">
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
    </Nav>
  );
}

export default Navbar;