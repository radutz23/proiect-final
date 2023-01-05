import './choose-gamemode.css';
import React, { useEffect, useRef } from 'react';

export function ChooseGamemode() {
  
  return (

<div>

<div class="menu-wrap">
        <input type="checkbox" class="toggler"/>
        <div class="hamburger"><div></div></div>
        
        <div class="menu">
            <div>
                <div>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="how-to-play">HOW TO PLAY</a></li>
                        <li><a href="#">GO MOBILE!</a></li>
                        <li><a href="#">CONTACT</a></li>
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
            <h1>That's BULLSH*T!</h1>
            <p>'THE CATEGORIES GAME'</p>
            <a href="/choose-categories" class="btnn">LOCAL</a>
            <a href="/log-in" class="btnn">ONLINE</a>
        </div>
        <div class="contact-links">
            <a href="https://www.instagram.com/zaidirfankhan/?hl=en" target="_blank" 
               class="btn contact-details"><i class="fab fa-instagram"></i>
               </a>
            <a
               href="https://twitter.com/ZaidIrfanKhan"
               target="_blank"
               class="btn contact-details"><i class="fab fa-twitter"></i>
              </a>
            <a href="https://codepen.io/zaidik" target="_blank" class="btn contact-details"><i class="fab fa-codepen"></i></a>
            <a href="https://github.com/ZaidKhan144" target="_blank" class="btn contact-details"> <i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/zaid-irfan-khan-9a4b964b/" target="_blank" class="btn contact-details"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:zaidirfan.945@gmail.com" class="btn contact-details"><i class="far fa-envelope"></i></a>
          </div>
    </header>
    </div>
  );
}


