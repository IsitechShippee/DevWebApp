import './Home.css';
import React from "react";
import Annonce from "../Announcement/Annonce";

function Home() {

  return (
    <section className='Home'>
      <div className='HomeWelcome'>
        <h1 className='HomeWelcome-Name'>Bonjour, User !</h1>
        <p>Une petite selection ?</p>
      </div>
      <div className='HomeForYou'>
        <h2 className='HomeForYou-Title'>Pour vous :</h2>
        <div className='HomeForYou-Annonce'>
          <Annonce />
          <Annonce />
          <Annonce />
          <div>
            <button className='HomeForYouBtn zoom'>
              <svg className="HomeForYouImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div className='HomeClose'>

      </div>
      <div className='HomeRecently'>
        
      </div>
    </section>
  );
}

export default Home;