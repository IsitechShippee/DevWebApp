import React, { useEffect, useState } from 'react'
import Loading from '../../../Components/Loading/Loading';
import axios from 'axios'

import SHA3 from 'crypto-js/sha3'
import Base64 from 'crypto-js/enc-base64'

function ConnectLoader(props) {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.post(process.env.REACT_APP_API_URL + '/api/User/connect', { id: props.connectInfo.id, password: Base64.stringify(SHA3(props.connectInfo.psw)) })
      .then((response) => {
        console.log(response)
        if (response.data.connexion === "false") {
          props.setError(response.data.erreur)
          setTimeout(() => {
            props.setLoading(false)
            props.setConnect(false)
          }, 500);
        } else {
          setData(response.data)
          props.setUserInfo({ type: 'CONNECT', payload: data })
          setTimeout(() => {
            sessionStorage.setItem('id', props.connectInfo.id)
            sessionStorage.setItem('psw', Base64.stringify(SHA3(props.connectInfo.psw)))
            props.setLoading(false)
            props.setConnect(true)
          }, 1000);
        }
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