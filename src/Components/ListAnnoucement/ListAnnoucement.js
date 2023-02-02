import React from 'react'
import Annoucement from './../Annoucement/Annoucement'
import { Link } from 'react-router-dom'

function ListAnnoucement(props) {


    return (
        <div className='ListAnnoucement'>
            {props.tabAnnoucement.map((annoucement, index) => (
                <Annoucement key={index} annoucement={annoucement} />
            ))}
            {props.isViewsMore && <Link><button>Voir plus</button></Link>}
        </div>
    )
}

export default ListAnnoucement