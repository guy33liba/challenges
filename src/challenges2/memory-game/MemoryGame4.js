import React from "react"
import { useState } from "react"

const MemoryGame4 = () => {
 const [cards, setCards] = useState([
  { id: 1, value: "a", filpped: false, matched: false },
  { id: 2, value: "b", filpped: false, matched: false },
  { id: 3, value: "c", filpped: false, matched: false },
  { id: 4, value: "d", filpped: false, matched: false },
 ])
 return (
  <div>
   <h1>Memory Game</h1>
   <div className="cardGrid">
    {cards.map((card) => (
     <div key={card.id}></div>
    ))}
   </div>
  </div>
 )
}

export default MemoryGame4
