import './gomobile.css';

export function GoMobile(){

    return(

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
            
<div className='woman-with-phone'></div>
<div className='standing-phone-container'>
        <div className='standing-phone'></div>

        <div className='online-store'>
            <div className='appstore'></div>
            <div className='playstore'></div>
        </div>
</div>


        </div>
        
    </header>
    </div>
    );
}