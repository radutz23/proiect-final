import './createteams.css';
import React, { useEffect, useRef, useState,useContext } from 'react';
import {CreateBlueTeamComponent} from '../../components/create-team-component/CreateBlueTeamComponent'
import { CreateRedTeamComponent } from '../../components/create-team-component/CreateRedTeamComponent';
import { Socials } from '../../components/socials/socials';

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
        <Socials/>
    </header>
    </div>
  );
}


