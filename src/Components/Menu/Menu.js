import './Menu.css';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import image from '../../Pictures/Logo_Shippee.png';



function Menu() {

    const myReducerChangeMenuActif = (state, action) => {
        const menu = { home: false, search: false, annonce: false, chat: false, profil: false, setting: false }
        switch (action.payload) {
            case 1: menu.home = true; return menu
            case 2: menu.search = true; return menu
            case 3: menu.annonce = true; return menu
            case 4: menu.chat = true; return menu
            case 5: menu.profil = true; return menu
            case 6: menu.setting = true; return menu
        }
    }

    const [changeMenuActif, setChangeMenuActif] = useReducer(myReducerChangeMenuActif, { home: true, search: false, annonce: false, chat: false, profil: false, setting: false })

    const changeMenu = (val) => {
        setChangeMenuActif({ type: "menu", payload: val })
    }

    return (
        <div className='Menu'>
            <div className='Titre'><img src={image} /></div>
            <div className="Icon Primary">
                <Link to="home"><div title="Home" onClick={() => changeMenu(1)} className={changeMenuActif.home ? "Actif Sous_Menu" : "Sous_Menu"}><i class="fa fa-home" aria-hidden="true"></i></div></Link>
                <Link to="search"><div title="Search" onClick={() => changeMenu(2)} className={changeMenuActif.search ? "Actif Sous_Menu" : "Sous_Menu"}><i class="fa fa-search" aria-hidden="true"></i></div></Link>
                <Link to="annonce"><div title="Annonce" onClick={() => changeMenu(3)} className={changeMenuActif.annonce ? "Actif Sous_Menu" : "Sous_Menu"}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div></Link>
                <Link to="chat"><div title="Chat" onClick={() => changeMenu(4)} className={changeMenuActif.chat ? "Actif Sous_Menu" : "Sous_Menu"}><i class="fa fa-comments" aria-hidden="true"></i></div></Link>
            </div>
            <div className="Icon Secondary">
                <Link to="profile"><div title="Profile" onClick={() => changeMenu(5)} className={changeMenuActif.profil ? "Actif Sous_Menu" : "Sous_Menu"}><i class="fa fa-user" aria-hidden="true"></i></div></Link>
                <Link to="settings"><div title="Settings" onClick={() => changeMenu(6)} className={changeMenuActif.setting ? "Actif Sous_Menu" : "Sous_Menu"}><i class="fa fa-cogs" aria-hidden="true"></i></div></Link>
            </div>
        </div>
    );

}

export default Menu;