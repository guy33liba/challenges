import React, { useEffect, useState } from "react";

const MemoryGame4 = () => {
 const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
   const j = Math.floor(Math.random() * (i + 1));
   [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
 };
 const initializeCards = () => {
  const cardValues = ["🍎", "🍌", "🍓", "🍍"];
  const doubledCards = cardValues.flatMap((value, index) => [
   { id: index * 2, value, isFlipped: false, isMatched: false },
   { id: index * 2 + 1, value, isFlipped: false, isMatched: false },
  ]);
  return shuffleArray(doubledCards); // Shuffle before returning
 };
 const [cards, setCards] = useState(initializeCards);
 const [flippedCards, setFlippedCards] = useState([]);
 const [attempts, setAttempts] = useState(0);

 const flipCard = (id) => {
  if (flippedCards.length === 2) return;
  setCards((prevCards) =>
   prevCards.map((card) =>
    card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
   )
  );
  const flipped = cards.find((card) => card.id === id);
  setFlippedCards((prev) => [...prev, flipped]);
 };

 useEffect(() => {
  if (flippedCards.length === 2) {
   setAttempts((prev) => prev + 1);
   const [firstCard, secondCard] = flippedCards;
   if (firstCard.value === secondCard.value) {
    setCards((prev) =>
     prev.map((card) =>
      card.value === firstCard.value ? { ...card, isMatched: true } : card
     )
    );
   } else {
    setTimeout(() => {
     setCards((prevCards) =>
      prevCards.map((card) =>
       card.isFlipped && !card.isMatched ? { ...card, isFlipped: false } : card
      )
     );
    }, 400);
   }
   setFlippedCards([]);
  }
 }, [flippedCards]);

 const matchedCount = cards.reduce(
  (count, card) => (card.isMatched ? count + 1 : count),
  0
 );
 return (
  <div>
   <div style={{ display: "flex", gap: "80px" }}>
    <h1>Memory Card</h1>
    <h1>{attempts}</h1>
    <h1>{matchedCount}</h1>
   </div>{" "}
   <button
    onClick={() => {
     setCards(initializeCards());
     setFlippedCards([]);
     setAttempts(0);
    }}
   >
    Reset
   </button>
   <div className="cardGrid">
    {cards.map((card) => (
     <div
      className="card"
      key={card.id}
      onClick={() => !card.isFlipped && !card.isMatched && flipCard(card.id)}
      style={{
       backgroundColor: card.isFlipped || card.isMatched ? "white" : "lightblue",
       cursor: card.isFlipped || card.isMatched ? "default" : "pointer",
      }}
     >
      {card.isFlipped || card.isMatched ? card.value : "?"}
     </div>
    ))}
   </div>
  </div>
 );
};

export default MemoryGame4;
