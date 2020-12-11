import React from "react";

function DisplayCards(props) {
  return (
    <div>
      <div className="cardImage">Image</div>
      <div className="cardName">Name: {props.name}</div> 
      <div className="cardOccupation">Occupation: {props.occupation}</div>
    </div>
  );
}

export default DisplayCards;
