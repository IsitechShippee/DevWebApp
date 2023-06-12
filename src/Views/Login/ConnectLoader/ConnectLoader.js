import React, { useEffect, useState } from 'react'
import Loading from '../../../Components/Loading/Loading';
// import useAxios from '../../../Axios/axios'
import axios from 'axios'

function ConnectLoader(props) {

  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  // const { cancel, data, error, loaded } = useAxios('https://localhost:7061/api/User/testconnect?id=' + "sophie.dupont@gmail.com" + '&psw=' + "test", 'get', null)

  // useEffect(() => {
  //   if (loaded) {
  //     props.setUserInfo({ type: 'CONNECT', payload: data })
  //     setTimeout(() => { props.setConnect(true) }, 500);
  //   }
  // }, [data, error, loaded, props])

  useEffect(() => {
    axios.get('https://localhost:7061/api/User/testconnect?id=' + "sophie.dupont@gmail.com" + '&psw=' + "test")
      .then((response) => {
        setData(response.data)
      })
      .then(() => {
        setLoaded(true)
        props.setUserInfo({ type: 'CONNECT', payload: data })
        setTimeout(() => { props.setConnect(true) }, 500);
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [setLoaded, data, props])

  return (
    <Loading />
  )

}

export default ConnectLoader