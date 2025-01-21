import React from "react"
import { useState } from "react"

const App = () => {
  const cards = [
    { id: 1, symbol: "A", flipped: false, matched: false },
    { id: 2, symbol: "B", flipped: false, matched: false },
    { id: 3, symbol: "C", flipped: false, matched: false },
    { id: 4, symbol: "D", flipped: false, matched: false },
  ]
  function shufflingCards(cardId) {
    const shuffledCards = [...cards, ...cards]
    shuffledCards.sort(() => Math.random() - 0.5)
    return shuffledCards.map((card, index) => ({ ...card, id: index }))
  }
  const [cardGame, setCardGame] = useState(shufflingCards)
  const [flippedCards, setFlippedCards] = useState([])

  function flipingCards(cardid) {
    if (flippedCards.length === 2) {
      return
    }
    const updatedCArds = cardGame.map((card) => (card.id === cardid ? { ...card, flipped: true } : card))
    setCardGame(updatedCArds)
    const newFlippedCArds = [...flippedCards, cardid]
    setFlippedCards(newFlippedCArds)

    if (newFlippedCArds.length === 2) {
      setTimeout(() => {
        checkformatch(newFlippedCArds)
      }, 1000)
    }
  }
  function checkformatch([firstid,secondid]){}
  return <div></div>
}

export default App
