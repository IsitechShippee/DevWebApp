import './Contact.css';
import image from '../../Pictures/user.png';
import { useEffect, useState } from 'react';

function Contact(props) {

    const [nbNonLu, setNbNonLu] = useState([])

    const CompterNbChatNonLu = () => {
        var nb = 0;
        for (let i = 0; i < props.convs.chat.length; i++) {
            if (props.convs.chat[i].status == "Envoyer" && props.convs.chat[i].who == false) {
                nb++
            }
        }
        setNbNonLu(nb)
    }

    useEffect(() => {
        CompterNbChatNonLu()
    })
    
    return (
        <>

            <div className='Contact'> 
                <div className="Contact_Picture">
                    <img src={image} />
                </div>
                <div className="Contact_Data">
                    <h3 className="People">{props.convs.user_surname} {props.convs.user_firstname}</h3>
                    <p className={!props.convs.chat[props.convs.chat.length - 1].who && props.convs.chat[props.convs.chat.length - 1].status == "Envoyer" ? "Texte Recu" : "Texte"} >{props.convs.chat[props.convs.chat.length - 1].who ? "Vous : " + props.convs.chat[props.convs.chat.length - 1].content : props.convs.chat[props.convs.chat.length - 1].status == "Envoyer" ? "Nouveau message !!" : props.convs.chat[props.convs.chat.length - 1].content} {}</p>
                </div>
            </div>
        </>
    );

}

export default Contact;