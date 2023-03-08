import * as React from 'react';
import './login.css';

import { useEffect, useRef } from 'react';

export function SignInSide() {

useEffect(() => {
  document.body.classList.add('login-page-body');
}, []);

// signUpButton.addEventListener('click', ()=> container.classList.add('right-panel-active')
// );
// signInButton.addEventListener('click', ()=> container.classList.remove('right-panel-active')
// );

const signUpButton = useRef(null);
const signInButton = useRef(null);
const container = useRef(null);

useEffect(() => {
  // const signUpButton = document.getElementById('signUp');
  // const signInButton = document.getElementById('signIn');
  // const container = document.getElementById('container-login');

  signUpButton.current.addEventListener('click', () => {
    container.current.classList.add('right-panel-active');
  });
  signInButton.current.addEventListener('click', () => {
    container.current.classList.remove('right-panel-active');
  });
}, []);

  return (

<div className="container-login" id="container-login" ref={container}>
        <div className="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="https://www.instagram.com/radutz23" target="_blank" className="social"><i className="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/radutz23" target="_blank" className="social"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/alexandru-catalin-radulescu" target="_blank" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className="su" >Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign In</h1>
                <div className="social-container">
                    <a href="https://www.instagram.com/radutz23" target="_blank" className="social"><i className="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/radutz23" target="_blank" className="social"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/alexandru-catalin-radulescu" target="_blank" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="https://www.youtube.com/channel/UChkbDUG76-C6vGBSkv12c0A" target="_blank">I Forgot my Password</a>
                <button className="si">Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>Show them who's boss!</p>
                    <button className="ghost" id="signIn" ref={signInButton}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Wanderer!</h1>
                    <p>Came here to prove people wrong?</p>
                    <button className="ghost" id="signUp" ref={signUpButton}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  );
}