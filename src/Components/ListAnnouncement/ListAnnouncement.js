import React, { useContext } from 'react'
import StudentAnnouncement from '../Announcement/StudentAnnouncement/StudentAnnouncement'
import RecruiterAnnouncement from '../Announcement/RecriuterAnnouncement/RecruiterAnnouncement'
import { Link } from 'react-router-dom'
import { myAppContextUserInfo } from '../../Stores/UserInfoContext'
import './ListAnnouncement.css'

function ListAnnouncement(props) {

    const userInfo = useContext(myAppContextUserInfo)

    const selection = (announcement, index) => {
        if (props.type === "annoucements") {
            switch (userInfo.userInfo.type_user.title) {
                case 'Recruteur': {
                    return (<RecruiterAnnouncement key={index} announcement={announcement} type={props.type} page={props.page}/>)
                }
                case 'Etudiant': {
                    return (<StudentAnnouncement key={index} announcement={announcement} type={props.type} page={props.page}/>)
                }
                default: {
                    return null
                }
            }
        } else {
            switch (userInfo.userInfo.type_user.title) {
                case 'Recruteur': {
                    return (<StudentAnnouncement key={index} announcement={announcement} type={props.type} page={props.page}/>)
                }
                case 'Etudiant': {
                    return (<RecruiterAnnouncement key={index} announcement={announcement} type={props.type} page={props.page}/>)
                }
                default: {
                    return null
                }
            }
        }
    }

    return (
        <div className='list_announcement'>
            <div className='content_list'>
                {userInfo.userInfo[props.type].map((announcement, index) => (selection(announcement, index)))}
                {props.isViewsMore && <Link to='/search'><button className='see_more' onClick={() => props.setIsActiveNavBar(1)}>Voir plus</button></Link>}
            </div>
        </div>
    )
}

export default ListAnnouncement