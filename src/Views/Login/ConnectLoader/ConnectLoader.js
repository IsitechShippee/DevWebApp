import React, { useEffect, useState } from 'react'
import Loading from '../../../Components/Loading/Loading';
// import useAxios from '../../../Axios/axios'
import axios from 'axios'

function ConnectLoader(props) {

  const [data, setData] = useState(null);

  // const { cancel, data, error, loaded } = useAxios('https://localhost:7061/api/User/testconnect?id=' + "sophie.dupont@gmail.com" + '&psw=' + "test", 'get', null)

  // useEffect(() => {
  //   if (loaded) {
  //     props.setUserInfo({ type: 'CONNECT', payload: data })
  //     setTimeout(() => { props.setConnect(true) }, 500);
  //   }
  // }, [data, error, loaded, props])

  useEffect(() => {
    axios.get('https://localhost:7061/api/User/testconnect?id=' + props.connectInfo.id + '&psw=' + props.connectInfo.psw)
      .then((response) => {
        if(response.data.connexion == false) {
          props.setError(response.data.erreur)
        }else{
          setData(response.data)
        }
      })
      .then(() => {
        props.setUserInfo({ type: 'CONNECT', payload: data })
        setTimeout(() => { 
          props.setLoading(false)
          props.setConnect(true) 
        }, 500);
      })
      .catch((error) => {
        props.setError(error.message)
      })
  }, [data, props])

  return (
    <Loading />
  )

}

export default ConnectLoader