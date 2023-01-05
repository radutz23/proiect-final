import { Home } from '@mui/icons-material';
import React, { useEffect, useRef } from 'react';
import { Socials } from '../../components/socials/socials';
import './contact-us.css';

export function ContactUs() {

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
            



            
        </div>
        <Socials/>
    </header>
    </div>
  );
}

