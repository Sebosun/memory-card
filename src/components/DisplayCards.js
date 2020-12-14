import React from "react";

function DisplayCards(props) {
  return (
    <div className="wrapper">
      <div>
        <img src={props.image} className="cardImage" onClick={props.click} className="cardImage"></img>
      </div>
      <div className="cardName">Name: {props.name}</div> 
      <div className="cardOccupation">Occupation: {props.occupation}</div>
    </div>
  );
}

export default DisplayCards;
