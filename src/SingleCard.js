import React from "react";
import "./SingleCard.css";
export default function SingleCard({ card, handleChoice, flipped }) {
 const handleclick = () => {
  handleChoice(card);
 };
 return (
  <div className="card">
   <div key={card.id} className={flipped ? "flipped" : ""}>
    <img className="front" src={card.src} alt="cardFront" />
    <img className="back" src="cover.png" alt="cardback" onClick={handleclick} />
   </div>
  </div>
 );
}
