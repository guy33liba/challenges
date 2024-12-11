import React, { useEffect, useState } from "react"

const MemoryGame4 = () => {
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i >= 0; i--) {
      const j = (Math.floor(Math.random() * (i + 1))[(shuffled[i], shuffled[j])] = [
        shuffleArray[j],
        shuffleArray[j],
      ])
    }
    return shuffled
  }
  function initializeCards() {
    const cardValues = ["🍎", "🍌", "🍓", "🍍"]
    const doubledCards = cardValues.map(
      (value, index) => (
        { id: index * 2, value, isFlipped: false, isMatched: false },
        { id: index * 2 + 1, value, isFlipped: false, isMatched: false }
      ),
    )
    return shuffleArray(doubledCards)
  }
  const [cards, setCards] = useState(initializeCards)
  const [flippedCards, setFlippedCards] = useState([])
  const [attmepts, setAttmepts] = useState(0)

  function flipCard(id) {
    if (flippedCards.length === 2) return
    setCards((prev) =>
      prev.map((card) =>
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
        setCards((prev) =>
          prev.map((card) =>
            card.value === firstCard.value ? { ...card, isMatched: true } : card,
          ),
        )
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.isFlipped && !card.isMatched ? { ...card, isFlipped: false } : card,
            ),
          )
        })
      }
    }
  })
  return <div></div>
}

export default MemoryGame4
