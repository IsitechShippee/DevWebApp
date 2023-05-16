import './ListeAnnonce.css';
import PetiteAnnonce from '../PetiteAnnonce/PetiteAnnonce.js';

function ListeAnnonce(props) {

    return (
        <>
            <div className="container">
                <div className="Selection">
                    {
                        props.annonce.map((index) => (
                            <PetiteAnnonce announcement={index} />
                        ))
                    }
                </div>
            </div>
        </>
    );

}

export default ListeAnnonce;