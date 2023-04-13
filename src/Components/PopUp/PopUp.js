import React, { useContext } from 'react'
import { myAppContextPopUp } from '../../Stores/PopUpContext'

function PopUp() {

    const popUp = useContext(myAppContextPopUp)

    return (
        <div className='pop_up'>
            {popUp.home}
        </div>
    )
}

export default PopUp