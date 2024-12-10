import React, { useEffect, useState } from "react"
import "./MemoryGame3.css"
const MemoryGame3 = () => {
  const shuffleArray = (array) => {
    const shuffled = [...array] // Create a copy of the array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)) // Pick a random index
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]] // Swap elements
    }
    return shuffled
  }
  const initializeCards = () => {
    const cardValues = ["A", "B", "C", "D"]
    const doubledCards = cardValues.flatMap((value, index) => [
      { id: index * 2, value, isFlipped: false, isMatched: false },
      { id: index * 2 + 1, value, isFlipped: false, isMatched: false },
    ])
    return shuffleArray(doubledCards) // Shuffle before returning
  }
  const [cards, setCards] = useState(initializeCards)
  const [flippedCards, setFlippedCards] = useState([])
  const [attmepts, setAttmepts] = useState(0)

  const flipCard = (id) => {
    if (flippedCards.length === 2) return

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card,
      ),
    )
    const flipped = cards.find((card) => card.id === id)
    console.log(flipped)
    setFlippedCards((prev) => [...prev, flipped])
  }
  useEffect(() => {
    if (flippedCards.length === 2) {
      setAttmepts((prev) => prev + 1)
      const [firstCard, secondCard] = flippedCards
      if (firstCard.value === secondCard.value) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.value === firstCard.value ? { ...card, isMatched: true } : card,
          ),
        )
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.isFlipped && !card.isMatched ? { ...card, isFlipped: false } : card,
            ),
          )
        }, 1000)
      }
      setFlippedCards([])
    }
  }, [flippedCards])
  const matchedCount = cards.reduce(
    (count, card) => (card.isMatched ? count + 1 : count),
    0,
  )
  return (
    <div>
      <div style={{ display: "flex", gap: "80px" }}>
        <h1>Memory Card</h1>
        <h1>{attmepts}</h1>
        <h1>{matchedCount}</h1>
      </div>{" "}
      <button
        onClick={() => {
          setCards(initializeCards())
          setFlippedCards([])
          setAttmepts(0)
        }}>
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
            }}>
            {card.isFlipped || card.isMatched ? card.value : "?"}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MemoryGame3
