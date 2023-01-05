import React, {useEffect, useState } from 'react';

export function Timer({testezSiEU, testezSiEU2}) {
  const [timeUp, setTimeUp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setTimeUp(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const startTimer = () => {
    setTimeUp(false);
    setTimeLeft(5);
  };

  const showModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('visibility-hidden');
  };
  
//   useEffect(() => {
//     async function fetchScore() {
//       const response = await fetch('http://localhost:5000/blueteamscore');
//       const data = await response.json();
//       setScore(data[0]);
//     }

//     fetchScore();
//   }, []);


  //////////////////////////////////////////////////////////////////
  function ScoreIncrementer({ currentTeam }) {
    const [score, setScore] = useState(0);
  
    useEffect(() => {
      async function fetchScore() {
        const response = await fetch(`http://localhost:5000/${currentTeam}teamscore`);
        const data = await response.json();
        setScore(data[0]);
      }
  
      fetchScore();
    }, [currentTeam]);
  
    async function incrementScore() {
      const response = await fetch(`http://localhost:5000/${currentTeam}teamscore`, {
        method: 'PUT',
        body: JSON.stringify({ score: score + 1 }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
      setScore(data[0]);
    }
  
    
  }

  return (
    <div id="timer">
      {timeUp ? (
        <div>
        <h1>Did he get it right?</h1>
        <button onClick={testezSiEU}>Yeah...</button>
        <button onClick={testezSiEU2}>HAHA No!</button>
        <button className='answer-checker' onClick={showModal}>Check valid answers!</button>
        </div>
      ) : (
        '00:' + timeLeft
      )}
    </div>
  );
}


