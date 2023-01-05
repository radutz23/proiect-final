import React, { useEffect, useRef } from 'react';
import { Socials } from '../../components/socials/socials';

export function Congratulations() {
  

  return (

<div>

<div className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger"><div></div></div>
        
        <div className="menu">
            <div>
                <div>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/how-to-play">HOW TO PLAY</a></li>
                        <li><a href="/go-mobile">GO MOBILE!</a></li>
                        <li><a href="/contact-us">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <header className="showcase">
    <div className="account">
        <a href="/log-in" className="btnn login">LOG IN</a>
        <a href="/log-in" className="btnn signup">SIGN UP</a>
        </div>

        <div className="container showcase-inner">
            <h1>SEEMS LIKE WE HAVE A WINNER</h1>
            <h1>CONGRATULATIONS</h1>
            <p>'THE CATEGORIES GAME'</p>
            <a href="/play" className="btnn">WANNA GO AT IT AGAIN?</a>
        </div>
        <Socials/>
    </header>
    </div>
  );
}


