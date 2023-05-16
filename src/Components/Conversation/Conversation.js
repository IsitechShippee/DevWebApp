import './Conversation.css';
import image from '../../Pictures/user.png';

function Conversation(props) {

    const Affiche_Conversation = () => {
        alert(document.getElementsByClassName('textarea')[0].value)
        document.getElementsByClassName('textarea')[0].value = ""
    }

    if (props.detail.length != 0) {
        return (
            <>
                <div className="Conversation">
                    <div className="NamePeople">
                        <img src={props.detail.user_picture == "" ? image : props.detail.user_picture} />
                        <p>{props.detail.user_surname} {props.detail.user_firstname}</p>
                    </div>
                    <div className="Messages">
                        <div className="Phone" id="style-1">
                            <ul className="List">
                                {
                                    props.detail.chat.map((index, i) => (
                                        <li className={props.detail.chat[i].who ? "Item Item--right" : "Item Item--left"}>
                                            <div className="Messagess">
                                                <div className="Message">
                                                    <div className="Message-inner">
                                                        {props.detail.chat[i].content}
                                                    </div>
                                                </div>
                                                <div className="">
                                                    {i == props.detail.chat.length - 1 && props.detail.chat[i].who ? props.detail.chat[i].status : ""}
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="Ecrire">
                        <textarea className="textarea" placeholder='Type your message here'></textarea>
                        <div className="Envoie">
                            <i onClick={() => Affiche_Conversation()} className="fa fa-paper-plane fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (
            <></>
        );
    }



}

export default Conversation;