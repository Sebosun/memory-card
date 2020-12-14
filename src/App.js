/* eslint-disable no-unused-vars */


import './App.css';
import React, { useEffect, useState } from "react";
import DisplayCount from "./components/DisplayCount"
import DisplayCards from "./components/DisplayCards"
import Header from "./components/Header"

function App() {
  const [topStreak, setTopStreak] = useState(0);
  const [streak, setStreak] = useState(0);
  const [currentGame, setCurrentGame] = useState([]);
  const [rowGeneration, setRowGeneration] = useState([]);
  const [characterData, setCharacterData] = useState(
    [['https://i.imgur.com/naSTmQU.png' ,'Aphrodite', 'Goddess of Love'],
    ['https://i.imgur.com/iD93qvy.png', 'Ares', 'God of War'],
    ['https://i.imgur.com/jQH3Cs7.png', 'Artemis', 'Goddes of the hunt'],
    ['https://i.imgur.com/WcesNjz.png', 'Athena', 'Goddess of wisdom'],
    ['https://i.imgur.com/BT4GwI6.png', 'Chaos', 'Embodiment of the primordial void'],
    ['https://i.imgur.com/bZiAoUP.png', 'Dionysus', 'God of Wine'],
    ['https://i.imgur.com/qaR0Dkn.png', 'Hades', 'god of the Underworld'],
    ['https://i.imgur.com/AM8v7ub.png', 'Hermes', 'God of commerce, trickery and travel'],
    ['https://i.imgur.com/vDWluCq.png', 'Megaera', 'One of the Fury Sisters'],
    ['https://i.imgur.com/nSVrdT7.png', 'Thanatos', 'god of Death']]
  );

  // useEffect runs now if currentGame changes . The very first render (when the page loads) also generates the rows
  // which are used later to display the cards
  useEffect(() => {
    setCharacterData(shuffleArray(characterData));
    setRowGeneration(generateRows)
    console.log(streak)
    console.log(currentGame)
  }, [currentGame])
  const clickImage = (id) => {
    let currentGameValue = currentGame.includes(characterData[id])
    if (currentGameValue === false){
      // adds score to the current streak
      setCurrentGame([...currentGame, characterData[id]]);
      
      if (streak >= topStreak){
        setTopStreak(streak +1);
      }
      
      setStreak(streak + 1);
    }
    else{
      setStreak(0);
      setCurrentGame([]);
    }
  }

  // stolen from stack, randomizes an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  // using loop to put stuff into an array, which we later use to display 12 objects
  function generateRows() {
    let rows = [];
    for (let i = 0; i < 10; i++){
      // onClick here is not a onClick method, but a prop that gets passed down
      rows.push(
        <DisplayCards 
          key={i} 
          image={characterData[i][0]}
          name={characterData[i][1]}  
          occupation={characterData[i][2]}
          click={() => clickImage(i)}
        />)
      }
      return rows
    }

  return (
    <div>
      <div className="header">
        <Header />
        {/* For some reason I needed to add a space here for it to work the way I wanted it to */}
        <div className="countWrapper"> 
          <DisplayCount
            name="Top Streak"
            count={topStreak} 
          />
          <DisplayCount
            name="Streak"
            count={streak} 
          />
        </div>
      </div>

      <div className="cardsDisplay">
        {rowGeneration}
      </div> 
      
    </div>
  );
}

export default App;
