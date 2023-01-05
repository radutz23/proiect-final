import './biddingphase.css';
import React, { useEffect, useRef, useState,useContext } from 'react';
import { Timer } from '../../components/timer/timer';
import { LocalGame } from '../local-game/localgame';

export function BiddingPhase() {

    


    // const [redTeamScore, setRedTeamScore] = useState(0);
    // const [blueTeamScore, setBlueTeamScore] = useState(0);
  
   

    const [currentTeam, setCurrentTeam] = useState('');
    const [showTimer, setShowTimer] = useState(false);

    const dataFetchedRef2 = useRef(false);
    const dataFetchedRef3 = useRef(false);

    const blueTeamNominationUrl='http://localhost:5000/blueteamnomination/'
    const redTeamNominationUrl='http://localhost:5000/redteamnomination/'

    const [blueTeamNomination, setBlueTeamNomination] = useState('');
    const [redTeamNomination, setRedTeamNomination] = useState('');
    
    const hideModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.add('visibility-hidden');
      }; 

    useEffect(() => {
        fetch(blueTeamNominationUrl, {
          method: 'GET',
        })
          .then(response => response.json())
          .then(blueTeamNominee => {
            setBlueTeamNomination(blueTeamNominee[0][0]);
          });
      }, []);

    useEffect(() => {
        fetch(redTeamNominationUrl, {
          method: 'GET',
        })
          .then(response => response.json())
          .then(redTeamNominee => {
            setRedTeamNomination(redTeamNominee[0][0]);
          });
      }, []);

      useEffect(() => {
        const fundalEchipa = document.querySelectorAll('.create-team')
        fundalEchipa.forEach(div => div.classList.add('team-display'));
      }, []);


      const [count, setCount] = useState(0);
      const [isBlueTurn, setIsBlueTurn] = useState(true);
      const [previousCount, setPreviousCount] = useState(0);
    
      const handleChange = event => {
        setCount(Number(event.target.value));
      };
      const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };
      const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
      };
      const handleBid = () => {
        if (count !== previousCount) {
          setIsBlueTurn(prevIsBlueTurn => !prevIsBlueTurn);
          setPreviousCount(count);
        }
      };
    
      const lockInBid = () =>{
        document.querySelector('.showcase-inner').classList.add('visibility-hidden');
        const echipaCurenta = document.querySelector('.this-teams-turn').textContent;
        console.log(echipaCurenta)
        if(echipaCurenta === "Red team's turn"){
            setCurrentTeam('blue');
            console.log('blue');
        }else{
            setCurrentTeam('red');
            console.log('red');
        }
        setShowTimer(true);
    }

    
////////////////////////////////////////////////////////

const [playedQuestion, setPlayedQuestion] = useState(null);
const [playedCategory, setPlayedCategory] = useState('');

useEffect(() => {
    if (dataFetchedRef2.current) return;
      dataFetchedRef2.current = true;
    fetch('http://localhost:5000/currentcategory', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
          console.log(data[0][0]);
          setPlayedCategory(data[0][0]);
          fetch(`http://localhost:5000/questions?Category=${data[0][0]}`, {
            method: 'GET',
          })
            .then(response => response.json())
            .then(data => {
          // Access the "Question" field of the object and log it to the console
          console.log(data[0].Question);
          setPlayedQuestion(data[0].Question);
              });
        });
      }, []);

      
//console.log(playedCategory);

    //   useEffect(() => {
    //     if (dataFetchedRef3.current) return;
    //   dataFetchedRef3.current = true;
    //       }, []);


///////////////////////////////////////////////////////


// function rightYes(){
//     blueScore=blueScore+1;
//     console.log(blueScore);
// }

// const handleScoreIncrement = (team) => {
//     if (team === 'red') {
//       setRedTeamScore(redTeamScore + 1);
//     } else if (team === 'blue') {
//       setBlueTeamScore(blueTeamScore + 1);
//     }
//   };

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
        
        .then(console.log(Number(scorAlbastruFinal.score+1)))
    }, []);

    
    const url = currentTeam === 'blue' ? `http://localhost:5000/blueteamscore/1` : `http://localhost:5000/redteamscore/1`;
    const body = currentTeam === 'blue' ? {score:Number(scorAlbastruFinal.score+1)}:{score:5};
    
    //   {score: ${parseInt(scorAlbastruFinal.score, 10)+1}} : { "score": parseInt(scorRosuFinal.score, 10)+1 }
    useEffect(() => {
      //  console.log(typeof scorAlbastruFinal.score);
      //  console.log(scorRosuFinal.score);
      console.log(body);
      }, []);
  
      function cresteScoru(){
          fetch(url, {
              method: 'PATCH',
              body: JSON.stringify(body)
          });
      }



  return (

<div>

<div className='modal visibility-hidden'>
    <button onClick={hideModal}>CLOSE</button>
</div>


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

        {showTimer && (
        <div className='showcase-inner'>
        <Timer currentTeam={currentTeam} testezSiEU={cresteScoru}
        // handleScoreIncrement={handleScoreIncrement} 
        // redTeamScore={redTeamScore} 
        // blueTeamScore={blueTeamScore} 

        />
        </div>
      )}
        <div class="container showcase-inner">
            <div class='question-prompt'>
            {playedCategory && <h1>{playedCategory}</h1>}
            {playedQuestion && <p>{playedQuestion}</p>}
           
    </div>
            

            <h1 class='this-teams-turn'>{isBlueTurn ? "Blue team's turn" : "Red team's turn"}</h1>
      
      <input class='input-bid' type="text" value={count} onChange={handleChange} />
      <div class='input-modifier-container'>
      <button class='input-modifier-button' onClick={handleDecrement} disabled={count === previousCount}>-</button>
      <button class='input-modifier-button' onClick={handleIncrement}>+</button>
      </div>


      <button class='input-modifier-button' onClick={handleBid}>Bid</button>
      <button class='input-modifier-button' onClick={lockInBid}>That's BULLSH*T!</button>


<div class='create-team create-blue-team background-bidder'>

<p class='blue-team-player team-player bidding-nominee'>{blueTeamNomination}</p>

</div>



<div class='create-team create-red-team'>

<p class='red-team-player team-player bidding-nominee background-bidder'>{redTeamNomination}</p>

</div>
            
        </div>
    </header>
    </div>
  );
}


