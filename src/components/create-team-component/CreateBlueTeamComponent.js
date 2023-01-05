import React, { useState, useEffect } from 'react';

export function CreateBlueTeamComponent(props) {
  const [inputValues, setInputValues] = useState([]);
  const [numInputs, setNumInputs] = useState(3);
  const blueTeamUrl = 'http://localhost:5000/blueteam';

  const handleInputChange = (event) => {
    const { value } = event.target;
    const index = Number(event.target.name);
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  function handleMultipleFunctions(){
    handleClick();
    handleButtonClick();
  }
  
  const handleButtonClick = () => {
    console.log(inputValues);

    fetch(blueTeamUrl,{
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(inputValues)
    }).then(res => res.json())
    .then(data => console.log(data))
  };

  function handleClick() {
    const newCount = props.count + 1;
    props.onCountChange(newCount);
  }

  const handleAddInputButtonClick = () => {
    setNumInputs(numInputs + 1);
  };

  
//   useEffect(() => {
//     const button = document.querySelector('.create-teams-page-submit');
//     button.classList.add('create-teams-page-submit');
//   }, []);
  
  return (
      <div class='create-team create-blue-team'>
        <h1>BLUE TEAM!</h1>

      {[...Array(numInputs)].map((_, i) => (
        <input key={i} name={i} onChange={handleInputChange} placeholder='Player name...' class='blue-team player-name-input'/>
      ))}
      <button class='create-team-button-submit' onClick={handleMultipleFunctions}>Lock 'em in!</button>
      <button class='create-team-button-submit' onClick={handleAddInputButtonClick}>Add more players</button>
    </div>
  );
}
