import './gomobile.css';

export function GoMobile(){

    return(

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
            
<div class='woman-with-phone'></div>
<div class='standing-phone-container'>
        <div class='standing-phone'></div>

        <div class='online-store'>
            <div class='appstore'></div>
            <div class='playstore'></div>
        </div>
</div>


        </div>
        
    </header>
    </div>
    );
}