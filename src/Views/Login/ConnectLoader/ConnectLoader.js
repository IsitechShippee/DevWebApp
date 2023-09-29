import React, { useEffect, useState } from 'react'
import Loading from '../../../Components/Loading/Loading';
// import useAxios from '../../../Axios/axios'
import axios from 'axios'

function ConnectLoader(props) {

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(props.connectInfo.id, props.connectInfo.psw)
    axios.get(process.env.REACT_APP_API_URL + '/api/User/connect?id=' + props.connectInfo.id + '&psw=' + props.connectInfo.psw)
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
            props.setLoading(false)
            props.setConnect(true)
          }, 1000);
        }
      })
      // .then(() => {
      //   props.setUserInfo({ type: 'CONNECT', payload: data })
      //   setTimeout(() => {
      //     props.setLoading(false)
      //     props.setConnect(true)
      //   }, 500);
      // })
      .catch((error) => {
        props.setError(error.message)
      })
  }, [data, props])

  return (
    <Loading />
  )

}

export default ConnectLoader