import React, { useContext } from 'react'
import StudentAnnoucement from '../Annoucement/StudentAnnoucement/StudentAnnoucement'
import RecruiterAnnoucement from '../Annoucement/RecriuterAnnoucement/RecruiterAnnoucement'
import { Link } from 'react-router-dom'
import { myAppContextUserInfo } from '../../Stores/UserInfoContext'
import './ListAnnoucement.css'

function ListAnnoucement(props) {

    const userInfo = useContext(myAppContextUserInfo)

    const selection = (annoucement, index) => {
        switch (userInfo.userInfo.type_user.title) {
            case 'Recruteur': {
                return (<StudentAnnoucement key={index} annoucement={annoucement} />)
            }
            case 'Etudiant': {
                return (<RecruiterAnnoucement key={index} annoucement={annoucement} />)
            }
            default: {
                return null
            }
        }
    }

    return (
        <div className='list_annoucement'>
            <h3>{props.title}</h3>
            <div className='scroll'>
                <div className='content_list'>
                    {userInfo.userInfo[props.type].map((annoucement, index) => (selection(annoucement, index)))}
                    {props.isViewsMore && <Link to='/'><button>Voir plus</button></Link>}
                </div>
            </div>
        </div>
    )
}

export default ListAnnoucement