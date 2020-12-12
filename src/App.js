/* eslint-disable no-unused-vars */


import './App.css';
import React, { useState } from "react";
import DisplayCount from "./components/DisplayCount"
import DisplayCards from "./components/DisplayCards"
import Header from "./components/Header"

function App() {
  const [topStreak, setTopStreak] = useState(0);
  const [streak, setStreak] = useState(0);
  const [currentGame, setCurrentGame] = useState(['Andrew']);
  

  const [characterData] = useState(
    [
      ['Andrew', 'Andrew'],
      ['Dudasz', 'Prezidente'],
      ['C', 'C'],
      ['D', 'D'],
      ['E', 'E'],
      ['F', 'F'],
      ['G', 'G'],
      ['H', 'H'],
      ['J', 'J'],
      ['K', 'K'],
    ]
  );



  const clickImage = (id) => {
    
    let currentGameValue = currentGame.includes(characterData[id][0])
    console.log(currentGameValue);
    if (currentGameValue === false){
      // adds score to the current streak
      setStreak(streak + 1);
      if (streak >= topStreak){
        setTopStreak(streak +1);
      }
      setCurrentGame([...currentGame, characterData[id][0]]);
      console.log(currentGame);
    }
    else{
      setStreak(0);
      setCurrentGame([]);
    }
  }


  

  // using loop to put stuff into an array, which we later use to display 12 objects
  let rows = [];
  for (let i = 0; i < 10; i++){
    // onClick here is not a onClick method, but a prop that gets passed down
    rows.push(
    <DisplayCards 
      key={i} 
      name={characterData[i][0]} 
      click={() => clickImage(i)} 
      occupation={characterData[i][1]}
    />
    )
  }


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
        {rows}
      </div> 
    </div>
  );
}

export default App;
