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
    [['Andrew', 'Andrew'],
      ['Dudasz', 'Prezidente'],
      ['C', 'C'],
      ['D', 'D'],
      ['E', 'E'],
      ['F', 'F'],
      ['G', 'G'],
      ['H', 'H'],
      ['J', 'J'],
      ['K', 'K']]
  );


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
          name={characterData[i][0]} 
          click={() => clickImage(i)} 
          occupation={characterData[i][1]}
        />)
      }
      return rows
    }

  useEffect(() => {
    setCharacterData(shuffleArray(characterData));
    setRowGeneration(generateRows())
    console.log(streak)
    console.log(currentGame)
  }, [streak, currentGame])


  // useEffect(() => {
  //   const addTopStreak = () =>{
  //     setTopStreak(topStreak + 1);
  //   }
  //   document.addEventListener("click", addTopStreak);
  // }, [topStreak])

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
