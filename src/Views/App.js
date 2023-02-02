import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { myAppContextUserInfo } from '../Stores/UserInfoContext';

import NavBar from './../Components/NavBar/NavBar'
import Home from './Home/Home'
import Search from './Search/Search'
import NewPost from './NewPost'
import Chat from './Chat/Chat'
import User from './User/User'
import Settings from './Settings/Settings'

function App() {

  const userInfo = useContext(myAppContextUserInfo)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/search/*" element={<Search />} />
        {userInfo && <Route path="/newpost/*" element={<NewPost />} />}
        {userInfo && <Route path="/chat/*" element={<Chat />} />}
        <Route path="/user/*" element={<User />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;