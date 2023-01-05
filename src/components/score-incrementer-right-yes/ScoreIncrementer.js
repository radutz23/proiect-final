import React, { useState } from 'react';

const ScoreIncrementer = ({ currentTeam }) => {
  const [redTeamScore, setRedTeamScore] = useState(0);
  const [blueTeamScore, setBlueTeamScore] = useState(0);

  const handleClick = () => {
    if (currentTeam === 'red') {
      setRedTeamScore(redTeamScore + 1);
    } else if (currentTeam === 'blue') {
      setBlueTeamScore(blueTeamScore + 1);
    }
  };

  return (
    <div>
      <a onClick={handleClick} href='/local-game'>Increment Score</a>
      <p>Red Team Score: {redTeamScore}</p>
      <p>Blue Team Score: {blueTeamScore}</p>
    </div>
  );
};

export default ScoreIncrementer;
