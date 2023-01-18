import React from 'react';

const Header = () => {
    
    let btn1 = document.getElementById("button_signUp");
    let btn2 = document.getElementById("button_login");
    let div1 = document.getElementById("container_signUp");
    let div2 = document.getElementById("container_login");
    btn1.addEventListener("click", () => {
        if (getComputedStyle(div1).display != "none") {
            div1.style.display = "none";
        } else {
            div1.style.display = "block";
        }
    })

    function buttonClick() {
        if (getComputedStyle(div2).display != "none") {
            div2.style.display = "none";
        } else {
            div2.style.display = "block";
        }
    };
    btn2.onclick = buttonClick;

    return (
        <header className='gradient'>
            <img class="img-logo-top" src="./Image/Shippee.png"></img>
            <div>
                <button className="button zoom" id="button_signUp">Connexion</button>
                <button className="button zoom" id="button_login">Inscription</button>
            </div>
            <div id="container_signUp">
                <p>Sign Up</p>
                <button><img className="img-cross" src="./Image/circle-cross.svg"></img></button>
            </div>
            <div id="container_login">
                <p>Sign Up</p>
                <button><img className="img-cross" src="./Image/circle-cross.svg"></img></button>
            </div>
        </header>
    );
};

export default Header;