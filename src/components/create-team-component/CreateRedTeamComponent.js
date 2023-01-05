import React, { useState, useEffect } from 'react';


export function CreateRedTeamComponent(props) {
  const [inputValues, setInputValues] = useState([]);
  const [numInputs, setNumInputs] = useState(3);
  const redTeamUrl = 'http://localhost:5000/redteam/1';

  const handleInputChange = (event) => {
    const { value } = event.target;
    const index = Number(event.target.name);
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleButtonClick = () => {
    // console.log(inputValues);
 
 
     fetch(redTeamUrl,{
       method: 'PATCH',
       headers:{'Content-Type': 'application/json'},
       body: JSON.stringify({members:inputValues})
     }).then(res => res.json())
     .then(data => console.log(data))
   };
  

  const handleAddInputButtonClick = () => {
    setNumInputs(numInputs + 1);
  };

  function handleClick() {
    const newCount = props.count + 1;
    props.onCountChange(newCount);
  }

  function handleMultipleFunctions(){
    handleClick();
    handleButtonClick();
  }

  return (


      <div class='create-team create-red-team'>
        <h1>RED TEAM!</h1>

        {[...Array(numInputs)].map((_, i) => (
          <input key={i} name={i} onChange={handleInputChange} placeholder='Player name...' class='red-team player-name-input'/>
        ))}
        <button class='create-team-button-submit' onClick={handleMultipleFunctions}>Lock 'em in!</button>
        <button class='create-team-button-submit' onClick={handleAddInputButtonClick}>Add more players</button>


      </div>
  );
}
