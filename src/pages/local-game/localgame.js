import { useEffect, useState,useRef } from 'react';
import { useParams } from 'react-router-dom';
import './localgame.css';

export function LocalGame({ currentTeam, handleScoreIncrement, redTeamScore, blueTeamScore }){

  const blueTeamScoreUrl = 'http://localhost:5000/blueteamscore';
  const redTeamScoreUrl = 'http://localhost:5000/redteamscore';
  const [scorAlbastruFinal, setScorAlbastruFinal] = useState({});
  const [scorRosuFinal, setScorRosuFinal] = useState({});

  useEffect(() => {
    fetch(`${blueTeamScoreUrl}/1`)
      .then((response) => response.json())
      .then((scor) => setScorAlbastruFinal(scor))
  }, []);

  useEffect(() => {
    fetch(`${redTeamScoreUrl}/2`)
      .then((response) => response.json())
      .then((scor) => setScorRosuFinal(scor))
  }, []);
  
    const dataFetchedRef = useRef(false);

    const redTeamUrl = 'http://localhost:5000/redteam';
    const [redTeamPlayers, setRedTeamPlayers] = useState([]);
    const blueTeamUrl = 'http://localhost:5000/blueteam';
    const [blueTeamPlayers, setblueTeamPlayers] = useState([]);

    const blueTeamUrlNomination='http://localhost:5000/blueteamnomination';
    const redTeamUrlNomination ='http://localhost:5000/redteamnomination';

    let blueTeamButtonClicked = false;
    let redTeamButtonClicked = false;


    
    // const blueTeamButton = document.querySelector('.create-blue-team button');
    // blueTeamButton.addEventListener('click', () => {
    //   blueTeamButtonClicked = true;
    //   if (blueTeamButtonClicked && redTeamButtonClicked) {
    //     const blueTeamParagraphs = document.querySelectorAll('.blue-team-player');
    //     const redTeamParagraphs = document.querySelectorAll('.red-team-player');
    //     blueTeamParagraphs.forEach(paragraph => console.log(paragraph.innerText));
    //     redTeamParagraphs.forEach(paragraph => console.log(paragraph.innerText));
    //   }
    // });
    
    // const redTeamButton = document.querySelector('.create-red-team button');
    // redTeamButton.addEventListener('click', () => {
    //   redTeamButtonClicked = true;
    //   if (blueTeamButtonClicked && redTeamButtonClicked) {
    //     const blueTeamParagraphs = document.querySelectorAll('.blue-team-player');
    //     const redTeamParagraphs = document.querySelectorAll('.red-team-player');
    //     blueTeamParagraphs.forEach(paragraph => console.log(paragraph.innerText));
    //     redTeamParagraphs.forEach(paragraph => console.log(paragraph.innerText));
    //   }
    // });
    
//     const blueTeamButtonRef = useRef(null);
// const blueTeamParagraphRef = useRef(null);
// useEffect(() => {
//   blueTeamButtonRef.current.addEventListener('click', () => {
//     console.log(blueTeamParagraphRef.current.innerText);
//   });
// }, []);

const [randomCategory, setRandomCategory] = useState(null);

useEffect(() => {
    if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
    console.log('useeffect code run')
  fetch('http://localhost:5000/questions', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const category = data[randomIndex];

      setRandomCategory(category.Category);
      console.log(category.Category);
      fetch('http://localhost:5000/currentcategory',{       
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify([category.Category])
      })
    });
}, []);



    useEffect(() => {
        const fundalEchipa = document.querySelectorAll('.create-team')
        fundalEchipa.forEach(div => div.classList.add('team-display'));
      }, []);

    useEffect(() => {
        fetch(redTeamUrl)
          .then((response) => response.json())
          .then((redTeamPlayer) => setRedTeamPlayers(redTeamPlayer));
    
      }, []);
      
      useEffect(() => {
          fetch(blueTeamUrl)
            .then((response) => response.json())
            .then((blueTeamPlayer) => setblueTeamPlayers(blueTeamPlayer));
      
        }, []);

        const blueTeamHideButtons = (event) => {
            
            blueTeamButtonClicked = true;
            const textContent = event.target.parentElement.textContent.trim();
const textArray = textContent.split("Nominate");
            if (blueTeamButtonClicked && redTeamButtonClicked) {
    console.log(textArray[0]);

}
fetch(blueTeamUrlNomination,{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify([textArray[0]])
  }).then(res => res.json())
  .then(data => console.log(data))
              
            const clickedButton = event.target;
            const buttons = document.querySelectorAll('.create-blue-team button');
            buttons.forEach(button => {
              if (button !== clickedButton) {
                button.style.visibility = 'hidden';
              }
            });
            clickedButton.innerHTML="Ready!";
          };


  
  
          
          const redTeamHideButtons = (event) => {
            redTeamButtonClicked = true;
            const textContent = event.target.parentElement.textContent.trim();
const textArray = textContent.split("Nominate");
            if (blueTeamButtonClicked && redTeamButtonClicked) {
    console.log(textArray[1]);

}
fetch(redTeamUrlNomination,{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify([textArray[1]])
  }).then(res => res.json())
  .then(data => console.log(data))

              const clickedButton = event.target;
              const buttons = document.querySelectorAll('.create-red-team button');
              buttons.forEach(button => {
                if (button !== clickedButton) {
                  button.style.visibility = 'hidden';
                }
              });
              clickedButton.innerHTML="Ready!";
            };

//  function showButtons() {
//      const buttons = document.querySelectorAll('.team-nominate');
//      buttons.forEach((button) => {
//        button.classList.remove('visibility-hidden');
//      });
//    }

//    setTimeout(showButtons, 5000);


   function sendInnerText() {
    // Get the parent element of the button (the paragraph element)
    var parent = this.parentElement;

    // Get the inner text of the paragraph element
    var innerText = parent.innerText;

    // Log the inner text to the console
    console.log(innerText);
  }



    return(

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
        <div class='this-rounds-category-background'>
            <h1>This round's category is:</h1>
            {randomCategory && <h1 class='current-category-final'>{randomCategory}</h1>}
           
        </div>

        <a class='get-biddin-href' href='/bidding-phase'>Get Biddin'!</a>


            <div class='create-team create-blue-team'>
            
{blueTeamPlayers.map((player, index) => (
        <p class='blue-team-player team-player' 
        key={index} 
        // ref={blueTeamParagraphRef}
        >
        {player}
            <button 
            className='team-nominate' 
            id={`button-${player}`}
            onClick={blueTeamHideButtons}
            // ref={blueTeamButtonRef}
            >
            Nominate
            </button>
        </p>
      ))}
</div>


<div class='create-team create-red-team'>
  {redTeamPlayers.map((player, index) => (
    <p class='red-team-player team-player' key={index}>
      <button 
      className='team-nominate' 
      id={`button-${player}`}
      onClick={redTeamHideButtons}
      >
        Nominate
      </button>
      {player}
    </p>
  ))}
</div>
        <p>{scorAlbastruFinal.score}</p>
        <p>{scorRosuFinal.score}</p>

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