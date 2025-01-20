import React, { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./SingleCard";

const cardimages = [
 { src: "helmet.png", matched: false },
 { src: "potion.png", matched: false },
 { src: "scroll.png", matched: false },
 { src: "shield.png", matched: false },
 { src: "sword.png", matched: false },
 { src: "ring.png", matched: false },
];
const App = () => {
 const [cards, setCards] = useState([]);
 const [turns, setTurns] = useState(0);

 const [choiceone, setChoiceone] = useState(null);
 const [choicetwo, setChoicetwo] = useState(null);
 const [gameover, setGameover] = useState(false);
 const shuffleCards = () => {
  const shuffledCards = [...cardimages, ...cardimages].sort(() => Math.random(cardimages) - 0.5).map((card) => ({ ...card, id: Math.random() }));
  setCards(shuffledCards);
  setTurns(0);
 };
 function handleChoice(card) {
  choiceone ? setChoicetwo(card) : setChoiceone(card);
 }

 function resetTurn() {
  setChoiceone(null);
  setChoicetwo(null);
  setTurns((prevturns) => prevturns + 1);
 }
 useEffect(() => {
  if (!gameover) {
   if (choiceone && choicetwo) {
    if (choiceone.src === choicetwo.src) {
     setCards((prev) => prev.map((card) => (card.src === choiceone.src ? { ...card, matched: true } : card)));
     console.log("matched");
     resetTurn();
    } else {
     console.log("not matched");
     resetTurn();
    }
   }
  }
 }, [choiceone, choicetwo]);
 useEffect(() => {
  if (cards.length > 0 && cards.every((card) => card.matched)) {
   setGameover(true);
  }
 }, [gameover]);
 return (
  <div className="App">
   <h1>Magic Match</h1>
   {gameover }
   <h2>{turns}</h2>
   <button onClick={shuffleCards}>New Game</button>
   <div className="cardGrid">
    {cards.map((card) => (
     <SingleCard card={card} handleChoice={handleChoice} flipped={card.id === choiceone?.id || card.id === choicetwo?.id || card.matched} />
    ))}
   </div>
  </div>
 );
};

export default App;
