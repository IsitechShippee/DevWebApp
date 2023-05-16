import './PetiteAnnonce.css';
import image from '../../Pictures/sncf.png';

function PetiteAnnonce(props) {
    
    return (
        <>
            <div className="lesAnnonces">
                <div className="Entreprise">
                    <img src={image} />
                    <h3>{props.announcement.user.company.name}</h3>
                    <i aria-hidden="true" className={props.announcement.favorite ? 'fa fa-heart fa-2x actif' : 'fa fa-heart fa-2x notactif'}></i>
                </div>
                <p className="Title">{props.announcement.title}</p>
                <div className="Info">
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i>{props.announcement.user.company.city}</p>
                </div>
                <button>Voir l'annonce</button>
            </div>
        </>
    );

}

export default PetiteAnnonce;