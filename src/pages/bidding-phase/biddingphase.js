import './biddingphase.css';
import React, { useEffect, useRef, useState,useContext } from 'react';
import { Timer } from '../../components/timer/timer';
import { LocalGame } from '../local-game/localgame';
import { useNavigate } from 'react-router-dom';

export function BiddingPhase() {

    const navigate = useNavigate();


    // const [redTeamScore, setRedTeamScore] = useState(0);
    // const [blueTeamScore, setBlueTeamScore] = useState(0);
  
   

    const [currentTeam, setCurrentTeam] = useState('');
    const [showTimer, setShowTimer] = useState(false);

    const dataFetchedRef2 = useRef(false);
    const dataFetchedRef3 = useRef(false);

    const blueTeamNominationUrl='http://localhost:5000/blueteamnomination/1'
    const redTeamNominationUrl='http://localhost:5000/redteamnomination/1'

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
            console.log("concurentul albastru este " + blueTeamNominee.actualblueteamnomination);
            setBlueTeamNomination(blueTeamNominee.actualblueteamnomination);
          });
      }, []);

    useEffect(() => {
        fetch(redTeamNominationUrl, {
          method: 'GET',
        })
          .then(response => response.json())
          .then(redTeamNominee => {
            setRedTeamNomination(redTeamNominee.actualredteamnomination);
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
  fetch('http://localhost:5000/currentcategory/1', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      setPlayedCategory(data.actualcurrentcategory);
      console.log(data.actualcurrentcategory)
      return data;
    })
    .then(data => {
      fetch(`http://localhost:5000/questions?Category=${data.actualcurrentcategory}`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          console.log(data[0].Question);
          setPlayedQuestion(data[0].Question);
        })
        .catch(error => {
          console.error(error);
        });
    })
    .catch(error => {
      console.error(error);
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
      fetch(`${redTeamScoreUrl}/1`)
        .then((response) => response.json())
        .then((scor) => setScorRosuFinal(scor))
    }, []);

    
    const url = currentTeam === 'blue' ? `http://localhost:5000/blueteamscore/1` : `http://localhost:5000/redteamscore/1`;
    const url2 = currentTeam === 'blue' ?  `http://localhost:5000/redteamscore/1`:`http://localhost:5000/blueteamscore/1`;
    const body = currentTeam === 'blue' ? {score:Number(scorAlbastruFinal.score+1)}:{score:Number(scorRosuFinal.score+1)};
    const body2 = currentTeam === 'blue' ? {score:Number(scorRosuFinal.score+1)}:{score:Number(scorAlbastruFinal.score+1)};
    const checkWinnerYes = currentTeam === 'blue' ? scorAlbastruFinal.score : scorRosuFinal.score;
    const checkWinnerNo = currentTeam === 'blue' ? scorRosuFinal.score : scorAlbastruFinal.score ;

    //   {score: ${parseInt(scorAlbastruFinal.score, 10)+1}} : { "score": parseInt(scorRosuFinal.score, 10)+1 }
    useEffect(() => {
      console.log("scorul este" + scorAlbastruFinal.score);
      //  console.log(scorRosuFinal.score);
      console.log(checkWinnerYes)
      }, []);
  
      function cresteScoruYes(){
          fetch(url, {
              method: 'PATCH',
              headers:{'Content-Type': 'application/json'},
              body: JSON.stringify(body)
          });

          if(checkWinnerYes==2){
            navigate('/congratulations');
          }else{
            navigate('/local-game');
          }
      }

      function cresteScoruNo(){
          fetch(url2, {
              method: 'PATCH',
              headers:{'Content-Type': 'application/json'},
              body: JSON.stringify(body2)
          });

          if(checkWinnerNo==2){
            navigate('/congratulations');
          }else{
            navigate('/local-game');
          }
      }

//       const [questionAnswers, setquestionAnswers] = useState([]);

//       useEffect(() => {
//         fetch(`http://localhost:5000/questions?Category=${playedCategory}`)
//           .then((response) => response.json())
//           .then((answer) => setquestionAnswers(answer.Answers));
//       }, []);
//       console.log('categoria magica este' + playedCategory)
// console.log(questionAnswers.Answers);
  return (

<div>

<div className='modal visibility-hidden'>
{/* {questionAnswers.map((raspuns) => (
    <p class='red-team-player team-player'>
      {raspuns}
    </p>
  ))} */}
    <button onClick={hideModal}>CLOSE</button>
</div>


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

        {showTimer && (
        <div className='showcase-inner'>
        <Timer currentTeam={currentTeam} testezSiEU={cresteScoruYes} testezSiEU2={cresteScoruNo}
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


