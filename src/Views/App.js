import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { myAppContextUserInfo } from '../Stores/UserInfoContext'

import Login from './Login/Login'
import ConnectLoader from './Login/ConnectLoader/ConnectLoader'
import NavBar from '../Components/NavBar/NavBar'
import Home from './Home/Home'
import Search from './Search/Search'
import NewPost from './NewPost/NewPost'
import Chat from './Chat/Chat'
import User from './User/User'
import Settings from './Settings/Settings'
import Error from './Error/Error';

function App() {
  // const [screenOrientation, setScreenOrientation] = useState(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait')

  const userInfo = useContext(myAppContextUserInfo)
  const [isConnect, setConnect] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [connectInfo, setConnectInfo] = useState(null)

  const [isActiveNavBar, setIsActiveNavBar] = useState(0)

  useEffect(() => {
    if (sessionStorage.getItem('id') && sessionStorage.getItem('psw')) {
      setLoading(true)
      setConnectInfo({ id: sessionStorage.getItem('id'), psw: sessionStorage.getItem('psw') })
    } else {
      setLoading(false)
    }

    if(error){
      sessionStorage.clear()
    }
  }, [error])

  const connected = <div className="app">
    <NavBar isActive={isActiveNavBar} setIsActive={setIsActiveNavBar} setConnect={setConnect} />
    <Routes>
      <Route path="/" element={<Home setIsActiveNavBar={setIsActiveNavBar} />} />
      <Route path="/search/*" element={<Search />} />
      <Route path="/newpost/*" element={<NewPost />} />
      <Route path="/chat/*" element={<Chat />} />
      <Route path="/user/*" element={<User />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </div>

  const loading = <Routes>
    <Route path="*" element={<ConnectLoader
      setConnect={setConnect}
      setLoading={setLoading}
      setError={setError}
      setUserInfo={userInfo.dispatchUserInfo}
      connectInfo={connectInfo} />}
    />
  </Routes>

  const notConnected = <Routes>
    <Route path='/*' element={<Login
      setLoading={setLoading}
      setConnectInfo={setConnectInfo}
      setError={setError}
      error={error}
    />}
    />
    <Route path="*" element={<Error />} />
  </Routes>

  const connexion = isLoading ? loading : notConnected
  // if (screenOrientation == "landscape") {
  return (
    isConnect ? connected : connexion
  );
  // } else {
  //   return (
  //     <div className="app">
  //       <h1>Rotate your phone</h1>
  //     </div>
  //   )
  // }
}

export default App;
