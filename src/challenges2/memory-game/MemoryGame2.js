import React, { useState } from "react"
import "./MemoryGame2.css"

const MemoryGame2 = () => {
  const [cardsArray, setCardsArray] = useState([])
  const [flippedStates, setflippedStates] = useState([])
  const [flippedIndices, setFlippedIndices] = useState([]) // Track flipped cards
  const [isChecking, setIsChecking] = useState(false) // Prevent clicking during check
  let cards = [
    "photos/photo1.png",
    "photos/photo2.png",
    "photos/photo3.png",
    "photos/photo4.png",
    "photos/photo5.png",
    "photos/photo6.png",
  ]

  function handleCards(items) {
    let newCardsArray = []
    for (let i = 0; i < items.length; i++) {
      let element = items[i]
      newCardsArray.push(element, element)
    }
    for (let i = newCardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newCardsArray[i], newCardsArray[j]] = [newCardsArray[j], newCardsArray[i]]
    }
    setCardsArray(newCardsArray)
    setflippedStates(new Array(newCardsArray.length).fill(false))
  }
  const handleFlip = (index) => {
    if (isChecking || flippedStates[index]) return // Prevent flipping during checks or re-flipping the same card

    const updatedFlippedStates = [...flippedStates]
    updatedFlippedStates[index] = true
    setflippedStates(updatedFlippedStates)

    const updatedFlippedIndices = [...flippedIndices, index]
    setFlippedIndices(updatedFlippedIndices)

    if (updatedFlippedIndices.length === 2) {
      setIsChecking(true) // Disable clicks while checking
      setTimeout(() => checkForMatch(updatedFlippedIndices), 1000) // Wait 1 second before checking
    }
  }

  const checkForMatch = (indices) => {
    const [firstIndex, secondIndex] = indices
    if (cardsArray[firstIndex] !== cardsArray[secondIndex]) {
      const updatedFlippedStates = [...flippedStates]
      updatedFlippedStates[firstIndex] = false
      updatedFlippedStates[secondIndex] = false
      setflippedStates(updatedFlippedStates)
    }
    setFlippedIndices([])
    setIsChecking(false)
  }
  return (
    <div>
      <h1>Memory Game</h1>

      <br />
      <button className="startButton" onClick={() => handleCards(cards)}>
        Start Game
      </button>
      <div className="cardsGrid">
        {cardsArray.map((item, index) => {
          return (
            <div className="cardItem" key={index}>
              <button
                className={`cardButton ${flippedStates[index] ? "cardFlipped" : "cardFlipped2"}`}
                onClick={() => handleFlip(index)}>
                <div className="cardContent">
                  {<img src={flippedStates[index] ? item : "photos/photo7.png"} alt="Hidden" />}
                </div>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MemoryGame2
