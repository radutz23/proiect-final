import './choosecategories.css';
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

export function ChooseCategories() {
  
    useEffect(() => {
        document.body.classList.add('choose-categories-page-body');
      }, []);
    

      function submitCategoriesHandler(){
        $( ".category-input" ).on( "click", function() {
            if($( ".category-input:checked" ).length > 1)
            {
                $('#submitCategories').prop('disabled', false);
            }
            else
            {
                $('#submitCategories').prop('disabled', true);
            }  
          });
      }

      useEffect(() => {
        submitCategoriesHandler();
      }, []);
      

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

        <div class="input-container">
  <ul class="ks-cboxtags">
    <li><input type="checkbox" class="category-input" id="checkboxOne" value="Rainbow Dash"/><label for="checkboxOne">Football</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxTwo" value="Cotton Candy"/><label for="checkboxTwo">Movies</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxThree" value="Rarity"/><label for="checkboxThree">Cartoons</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxFour" value="Moondancer"/><label for="checkboxFour">Art</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxFive" value="Surprise"/><label for="checkboxFive">Geography</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxSix" value="Twilight Sparkle"/><label for="checkboxSix">History</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxSeven" value="Fluttershy"/><label for="checkboxSeven">Manele</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxEight" value="Derpy Hooves"/><label for="checkboxEight">Anatomy</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxNine" value="Princess Celestia"/><label for="checkboxNine">Sports</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxTen" value="Gusty"/><label for="checkboxTen">Tennis</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxEleven" value="Discord"/><label for="checkboxEleven">Finances</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxTwelve" value="Clover"/><label for="checkboxTwelve">Fashion</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxThirteen" value="Baby Moondancer"/><label for="checkboxThirteen">Astronomy</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxFourteen" value="Medley"/><label for="checkboxFourteen">School</label></li>
    <li><input type="checkbox" class="category-input" id="checkboxFifteen" value="Firefly"/><label for="checkboxFifteen">Cars</label></li>
  </ul>

  <input class="btnn login" type="submit" id ="submitCategories" value="Choose Categories" disabled href='/create-teams'/>

</div>

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


