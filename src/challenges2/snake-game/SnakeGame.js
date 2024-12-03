import React, { useState } from "react"
import "./SnakeGame.css"
const SnakeGame = () => {
  ////////////////////////////////////////////////////////////////////////
  const [board, setboard] = useState([])
  const [snakePosition, setSnakePosition] = useState([])
  const [direction, setDirection] = useState("right")
  const [foodPosition, setfoodPosition] = useState([])
  const [running, setRunning] = useState(false)
  ////////////////////////////////////////////////////////////////////////
  function startGame() {
    setSnakePosition([[5, 5]])
    setfoodPosition([[10, 10]])
    setDirection("right")
    setRunning(true)
  }
  //////////////////////////////////////////////////////////////////////////
  function setBoard(board) {
    let numberArray = []
    for (let i = 0; i < 10; i++) {
      numberArray.push(i)
    }
    setboard(numberArray)
  }
  ////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <button
        className="startButton"
        onClick={() => {
          setBoard()
        }}>
        Start Game
      </button>
      <div className="snakeBoard">
        {board.map((item) => {
          return (
            <div>
              {board.map((item) => {
                return <div>{""}</div>
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SnakeGame
