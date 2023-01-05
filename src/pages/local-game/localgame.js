import { useEffect, useState,useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Socials } from '../../components/socials/socials';
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
  }, [scorAlbastruFinal.score]);

  useEffect(() => {
    fetch(`${redTeamScoreUrl}/1`)
    .then(console.log(scorAlbastruFinal))
      .then((response) => response.json())
      .then((scor) => setScorRosuFinal(scor))
  }, [scorRosuFinal.score]);
  
    const dataFetchedRef = useRef(false);

    const redTeamUrl = 'http://localhost:5000/redteam/1';
    const [redTeamPlayers, setRedTeamPlayers] = useState([]);
    const blueTeamUrl = 'http://localhost:5000/blueteam/1';
    const [blueTeamPlayers, setblueTeamPlayers] = useState([]);

    const blueTeamUrlNomination='http://localhost:5000/blueteamnomination/1';
    const redTeamUrlNomination ='http://localhost:5000/redteamnomination/1';

    let blueTeamButtonClicked = false;
    let redTeamButtonClicked = false;

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
      fetch('http://localhost:5000/currentcategory/1',{       
        method: 'PATCH',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({actualcurrentcategory:category.Category})
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
          .then((redTeamPlayer) => setRedTeamPlayers(redTeamPlayer.members));
    
      }, []);
      
    //  console.log("echipa rosie: "+ redTeamPlayers)
      useEffect(() => {
          fetch(blueTeamUrl)
            .then((response) => response.json())
            .then((blueTeamPlayer) => setblueTeamPlayers(blueTeamPlayer.members));
      
        }, []);

        const blueTeamHideButtons = (event) => {
            
            blueTeamButtonClicked = true;
            const textContent = event.target.parentElement.textContent.trim();
const textArray = textContent.split("Nominate");
            if (blueTeamButtonClicked && redTeamButtonClicked) {
    console.log("ce cacat e text array" + textArray[0]);

}
fetch(blueTeamUrlNomination,{
    method: 'PATCH',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({actualblueteamnomination:textArray[0]})
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
    method: 'PATCH',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({actualredteamnomination:textArray[1]})
  }).then(res => res.json())
  .then(data => console.log("ce moloz e asta" + data))

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
            <p class='scoreboard'>{scorAlbastruFinal.score}</p>
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
<p class='scoreboard'>{scorRosuFinal.score}</p>
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
        
        

        </div>
        <Socials/>
    </header>
    </div>
    );
}