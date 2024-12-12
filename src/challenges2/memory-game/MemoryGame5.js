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

  return <div>MemoryGame5</div>
}

export default MemoryGame5
