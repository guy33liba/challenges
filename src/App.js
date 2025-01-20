import React, { useState } from "react"

const App = () => {
  const cards = [
    {
      id: 1,
      symbol: "A",
      flipped: false,
      mathched: false,
    },
    {
      id: 2,
      symbol: "B",
      flipped: false,
      mathched: false,
    },
    {
      id: 3,
      symbol: "C",
      flipped: false,
      mathched: false,
    },
    {
      id: 4,
      symbol: "D",
      flipped: false,
      mathched: false,
    },
  ]
  const [cardGame, setCardGame] = useState([...cards, ...cards])
  const [flippedCards, setFlippedCards] = useState([])
  const [score, setscore] = useState(0)
  const [mathched, setMathched] = useState(false)

  const addFlippedCards = (card) => {
    setFlippedCards((prev) => [...prev, card])
    if (flippedCards.card[0] === flippedCards.card[1]) {
      setCardGame((card) => ({ ...card, mathched: true }))
      setscore((prev) => prev + 1)
    } else {
      setCardGame((card) => ({ ...card, mathched: false }))
    }
  }
  return (
    <div>
      <h1>Memory Game</h1>
      <div style={{ margin: "auto 0", display: "flex", justifyContent: "center", width: "120px", flexWrap: "wrap", textAlign: "center" }}>
        {cardGame.map((card, index) => (
          <div>
            {index}
            <button onClick={() => addFlippedCards(card.id)} style={{ width: "50px", fontSize: "30px", textAlign: "center" }}>
              {card.symbol}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
