import './App.css';
import React, { useEffect, useState } from "react";
import DisplayCount from "./components/DisplayCount"
import DisplayCards from "./components/DisplayCards"
import Header from "./components/Header"

function App() {
  const [topStreak, setTopStreak] = useState(0);
  const [streak] = useState(0);
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

  // using loop to put stuff into an array, which we later use to display 12 objects
  let rows = [];
  for (let i = 0; i < 10; i++){
    rows.push(<DisplayCards key={i} name={characterData[i][0]} occupation={characterData[i][1]}/>)
  }


  useEffect(() => {
    const addTopStreak = () =>{
      setTopStreak(topStreak + 1);
    }
    document.addEventListener("click", addTopStreak);
  }, [topStreak])

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
