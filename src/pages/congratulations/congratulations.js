import React, { useEffect, useRef } from 'react';
import { Socials } from '../../components/socials/socials';

export function Congratulations() {
  

  return (

<div>

<div class="menu-wrap">
        <input type="checkbox" class="toggler"/>
        <div class="hamburger"><div></div></div>
        
        <div class="menu">
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
    <header class="showcase">
    <div class="account">
        <a href="/log-in" class="btnn login">LOG IN</a>
        <a href="/log-in" class="btnn signup">SIGN UP</a>
        </div>

        <div class="container showcase-inner">
            <h1>SEEMS LIKE WE HAVE A WINNER</h1>
            <h1>CONGRATULATIONS</h1>
            <p>'THE CATEGORIES GAME'</p>
            <a href="/play" class="btnn">WANNA GO AT IT AGAIN?</a>
        </div>
        <Socials/>
    </header>
    </div>
  );
}


