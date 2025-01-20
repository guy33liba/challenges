import React from "react"
import { useState } from "react"

const App = () => {
  const cardsArray = [
    { id: 1, symbol: "A", flipped: false, ismatched: false },
    { id: 1, symbol: "B", flipped: false, ismatched: false },
    { id: 1, symbol: "C", flipped: false, ismatched: false },
    { id: 1, symbol: "A", flipped: false, ismatched: false },
    { id: 1, symbol: "B", flipped: false, ismatched: false },
    { id: 1, symbol: "C", flipped: false, ismatched: false },
  ]
  const shuffleCards = [...cardsArray].sort(() => Math.random() - 0.5)

  const [cardlist, setCardlist] = useState(shuffleCards)
  const flipcard = (id) => {
    cardlist.map((card) => (card.id === id ? { ...card, flipped: !card.flipped } : card))
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>card game</h2>
      <div style={{ display: "flex", width: "130px", flexWrap: "wrap", justifyContent: "center", margin: "0 auto" }}>
        {cardsArray.map((item) => (
          <button onClick={() => flipcard(item.id)} style={{ fontSize: "40px" }}>
            {item.flipped ? item.symbol : "?"}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
