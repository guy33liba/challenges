import React, { useEffect, useState } from "react"

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

  useEffect(() => {
    if (flippedCards.length < 2) {
      const [firstcard, secondcard] = flippedCards
      if (firstcard === secondcard) {
        setMathched(true)
        setscore((prev) => prev + 1)
      }
    } else {
      setTimeout(() => {
        setFlippedCards([])
      }, 1000)
      setMathched(false)
    }
  }, [flippedCards])
  function handleFlipppedCArd(card) {
    if (flippedCards.length < 2) {
      setFlippedCards((prev) => [...prev, card])
    }
  }
  return (
    <div>
      <h1>Memory Game</h1>
      <div style={{ margin: "auto 0", display: "flex", justifyContent: "center", width: "120px", flexWrap: "wrap", textAlign: "center" }}>
        {cardGame.map((card, index) => (
          <div>
            {index}
            <button
              onClick={() => handleFlipppedCArd(card.id)}
              style={{
                width: "50px",
                fontSize: "30px",
                textAlign: "center",
                backgroundColor: flippedCards.includes(card) || card.symbol ? "#ddd" : "#fff",
              }}>
              {flippedCards.includes(card) || card.mathched ? card.symbol : "?"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
