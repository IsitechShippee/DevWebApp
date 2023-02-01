import './Annonce.css';
import React from "react";

function Annonce() {

    return (
        <section class='Annonce'>
            <div class='Annonce-Title'>
                <p class="Title">Devellopeur Full Stack H/F</p>
                <a href="#"><span class="Loc">Lyon 6, (69006)</span></a>
            </div>
            <div class='Annonce-Description'>
                <p class="Description">Recherche developpeur full stack dans les sites webs. Recherche developpeur full stack dans les sites webs. 
                    Recherche developpeur full stack dans les sites webs......</p>
                <button class="AnnonceBtn" onclick="showMore()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg></button>
                </div>
        </section>
    );
}


export default Annonce;