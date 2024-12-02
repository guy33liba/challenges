import React, { useState } from "react"
import "./MemoryGame2.css"

const MemoryGame2 = () => {
  const [cardsArray, setCardsArray] = useState([])
  const [flippedStates, setflippedStates] = useState([])
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
    setCardsArray(newCardsArray)
  }
  const handleFlip = (index) => {
    const updatedFlippedStates = [...flippedStates]
    updatedFlippedStates[index] = !updatedFlippedStates[index]
    setflippedStates(updatedFlippedStates)
  }
  return (
    <div>
      <button style={{ marginLeft: "20px" }} onClick={() => handleCards(cards)}>
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
