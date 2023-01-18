import React from 'react';

const Annonce = ({title, caption}) => {
    return (
        <div className='annonce'>
            <h3 className='annonce_title'>{title}</h3>
            <p className='annonce_caption'>{caption}</p>
        </div>
    );
};

export default Annonce;