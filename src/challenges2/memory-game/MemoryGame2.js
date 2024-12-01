import React, { useState } from "react"
import "./MemoryGame2.css"
const MemoryGame2 = () => {
  const [cardsArray, setCardsArray] = useState([])
  let cards = ["card 1", "card 2", "card 3", "card 4", "card 5", "card 6"]
  function handleCards(items) {
    let newCardsArray = []
    for (let i = 0; i < items.length; i++) {
      let element = items[i]
      newCardsArray.push(element, element)
    }
    setCardsArray(newCardsArray)
  }
  console.log(cardsArray)
  return (
    <div>
      <button onClick={() => handleCards(cards)}>cards</button>
      <div className="cardsGrid">
        {
          <div className="cardItem">
            {cardsArray.map((item) => {
              return <div key={item}>{item}</div>
            })}
          </div>
        }
      </div>
    </div>
  )
}

export default MemoryGame2
