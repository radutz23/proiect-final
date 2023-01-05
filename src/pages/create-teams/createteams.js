import './createteams.css';
import React, { useEffect, useRef, useState,useContext } from 'react';
import {CreateBlueTeamComponent} from '../../components/create-team-component/CreateBlueTeamComponent'
import { CreateRedTeamComponent } from '../../components/create-team-component/CreateRedTeamComponent';

export function CreateTeams() {

    const [blueCount, setBlueCount] = useState(0);
    const [redCount, setRedCount] = useState(0);
  
    function handleBlueCountChange(newCount) {
      setBlueCount(newCount);
    }
  
    function handleRedCountChange(newCount) {
      setRedCount(newCount);
    }
  

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

            <CreateBlueTeamComponent count={blueCount} onCountChange={handleBlueCountChange}></CreateBlueTeamComponent>
            <CreateRedTeamComponent count={redCount} onCountChange={handleRedCountChange}></CreateRedTeamComponent>

        <a href="/local-game"  className={blueCount > 0 && redCount > 0 ? 'btnn' : 'btnn create-team-button-disabled'}>PLAY!</a>
            
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


