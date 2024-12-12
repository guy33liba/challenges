import React, { useEffect } from "react"
import { useState } from "react"

const MemoryGame5 = () => {
  function shuffleCard(array) {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i < shuffledArray.length; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[j], shuffledArray[i]] = [shuffledArray[i], shuffledArray[j]]
    }
    return shuffledArray
  }
  const initializeCards = () => {
    const cardValues = ["🍎", "🍌", "🍓", "🍍"]
    const doubledCard = cardValues.map(
      (value, index) => (
        {
          id: index * 2,
          value,
          isFlipped: false,
          isMatched: false,
        },
        { id: index * 2 + 1, value, isFlipped: false, isMatched: false }
      ),
    )
    return shuffledArray(doubledCard)
  }
  const [cards, setCards] = useState(initializeCards)
  const [flippedCards, setflippedCards] = useState([])
  const [attempts, setAttempts] = useState(0)

  const flipCard = (id) => {
    if (flippedCards.length === 2) return
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card,
      ),
    )
    const flipped = cards.find((card) => card.id === id)
    setflippedCards((prev) => [...prev, flipped])
  }
  useEffect(() => {
    if (flippedCards.length == 2) {
      setAttempts((prev) => prev + 1)
      const [firstCard, secondCard] = flippedCards
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.value === firstCard ? { ...card, isMatched: false } : card,
        ),
      )
    } else {
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.isFlipped && !card.isMatched ? { ...card, isFlipped: false } : card,
          ),
        )
      }, 400)
    }
    setflippedCards([])
  }, [flippedCards])
  const matchedCount = cards.reduce(
    (count, card) => (card.isMatched ? count + 1 : count),
    0,
  )
  return (
    <div>
      <div>
        <h1>Memory Card</h1>
        <h1>{attempts}</h1>
        <h1>{matchedCount}</h1>
      </div>
      <button
        onClick={() => {
          setCards(initializeCards())
          setflippedCards([])
          setAttempts(0)
        }}>
        Reset
      </button>
      <div className="cardGrid">
        {cards.map((card) => (
          <div
            className="card"
            style={{
              backgroundColor: card.isFlipped || card.isMatched ? "white" : "lightblue",
              cursor: card.isFlipped || card.isMatched ? "default" : "pointer",
            }}
            onClick={() => !card.isFlipped && !card.isMatched && flipCard(card.id)}>
            {card.isFlipped || card.isMatched ? card.value : "?"}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MemoryGame5
