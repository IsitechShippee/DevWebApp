import React from 'react';
import Annonce from './Annonce';

const ListAnnonce = () => {
    return (
        <div>
            <Annonce
                title="Recherche développeur web H/F"
                caption="Qualification requise : BAC + 3, etc ..."  
            />
            <Annonce
                title="Recherche cuisinier en gastonomie française"
                caption="Qualification requise : BTS où +, etc ...."
            />
        </div>
    );
};

export default ListAnnonce;