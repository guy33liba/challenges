import React, { useEffect, useState } from "react"
import "./MemoryGame3.css"
const MemoryGame3 = () => {
  const intializeCards = () => {
    const cardValues = ["a", "b", "c", "d"]
    return cardValues.map((value, index) => {
      return {
        id: index,
        value,
        isFlipped: false,
      }
    })
  }

  const [cards, setCards] = useState(intializeCards)
  const [flippedCards, setFlippedCards] = useState([])

  const flipCard = (id) => {
    if (flippedCards.length === 2) {
      return
    }
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card,
      ),
    )
    const flipped = cards.find((card) => card.id === id)
    setFlippedCards((prev) => [...prev, flipped])
  }
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards
      if (firstCard.value === secondCard.value) {
        setCards((prevCards) => {
          prevCards.map((card) => {
            card.value === firstCard.value ? { ...card, isMatched: true } : card
          })
        })
      }
    } else {
      setTimeout(() => {
        setCards((prevCards) => {
          prevCards.map((card) =>
            card.isFlipped && !card.isMatched ? { ...card, isFlipped: false } : card,
          )
        })
      })
    }
  })
  return (
    <div>
      <h1>Memory Card Game</h1>
      <div className="cardGrid">
        {cards.map((card, index) => {
          return (
            <div key={card.id} className="card" onClick={() => flipCard(card.id)}>
              {card.isFlipped ? card.value : "?"}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MemoryGame3
