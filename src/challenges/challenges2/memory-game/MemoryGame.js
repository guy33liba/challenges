import React, { useState, useEffect } from "react"

// Helper function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

const MemoryGame = () => {
  const [cards, setCards] = useState([])
  const [flippedIndices, setFlippedIndices] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    // Generate the card pairs (for 4 pairs, we use 'A', 'B', 'C', 'D')
    const totalCards = 8
    const cardValues = []
    for (let i = 0; i < totalCards / 2; i++) {
      const value = String.fromCharCode(65 + i) // 'A', 'B', 'C', 'D'...
      cardValues.push(value, value) // Add pairs of cards
    }

    // Shuffle the cards and set them
    const shuffledCards = shuffleArray(cardValues).map((value) => ({
      value,
      isFlipped: false,
      isMatched: false,
    }))

    setCards(shuffledCards)
  }, [])

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || cards[index].isFlipped || cards[index].isMatched) {
      return
    }

    const newCards = [...cards]
    newCards[index].isFlipped = true
    setCards(newCards)

    setFlippedIndices([...flippedIndices, index])
  }

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices
      if (cards[firstIndex].value === cards[secondIndex].value) {
        // Cards match
        const newCards = [...cards]
        newCards[firstIndex].isMatched = true
        newCards[secondIndex].isMatched = true
        setCards(newCards)
        setMatchedCards((prev) => [...prev, cards[firstIndex].value])
      } else {
        // Cards don't match
        setTimeout(() => {
          const newCards = [...cards]
          newCards[firstIndex].isFlipped = false
          newCards[secondIndex].isFlipped = false
          setCards(newCards)
        }, 1000) // Delay for 1 second before flipping back
      }

      // Reset flippedIndices
      setFlippedIndices([])
    }
  }, [flippedIndices, cards])

  useEffect(() => {
    if (matchedCards.length === cards.length / 2) {
      setGameOver(true)
    }
  }, [matchedCards, cards.length])

  return (
    <div>
      <h2>Memory Game</h2>
      {gameOver && <p>You Win!</p>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 100px)", gap: "10px" }}>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              width: "100px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: card.isFlipped || card.isMatched ? "#f0f0f0" : "#ccc",
              fontSize: "24px",
              cursor: "pointer",
              border: "1px solid #000",
            }}>
            {card.isFlipped || card.isMatched ? card.value : "?"}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MemoryGame
