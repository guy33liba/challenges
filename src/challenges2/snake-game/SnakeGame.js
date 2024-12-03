import React, { useState } from "react"
import "./SnakeGame.css"
const SnakeGame = () => {
  const [board, setboard] = useState([])
  function setBoard(board) {
    let numberArray = []
    for (let i = 0; i < 10; i++) {
      numberArray.push(i)
    }
    setboard(numberArray)
  }
  return (
    <div>
      <button onClick={() => setBoard()}>Start Button</button>
      <div className="snakeBoard">
        {board.map((item) => {
          return (
            <div>
              <div>{item}</div>
              <div>{item}</div>
              <div>{item}</div>
              <div>{item}</div>
              <div>{item}</div>
              <div>{item}</div>
              <div>{item}</div>
              <div>{item}</div>
              <div>{item}</div>
              <div>{item}</div>
              <div>{item}</div>
              <div>{item}</div>
              <div>{item}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SnakeGame
