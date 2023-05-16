import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './Components/Menu/Menu.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Components/Home/Home.js';
import Chat from './Components/Chat/Chat.js';
import Login from './Components/Login/Login.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <div className="main">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>

  </BrowserRouter>
);
