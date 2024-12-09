import React, { useEffect, useState } from "react"
import "./SnakeGame.css"
function App() {
  const [snake, setSnake] = useState([
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2 },
  ])
  const [food, setfood] = useState(null)
  const rows = 20
  const cols = 20

  const generateFood = () => {
    const emptyCells = []
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (!snake.some((segment) => segment.x === j && segment.y === i)) {
          emptyCells.push({ x: j, y: i })
        }
      }
    }
    const randomindex = Math.floor(Math.random() * emptyCells.length)
    const foodPosition = emptyCells[randomindex]

    setfood(foodPosition)
  }

  // Generate food when the component mounts
  useEffect(() => {
    generateFood()
  }, [snake]) // Re-generate foo
  const board = []

  for (let i = 0; i < rows; i++) {
    const row = []
    for (let j = 0; j < cols; j++) {
      // Check if the current cell is part of the snake's body
      const isSnakeCell = snake.some((segment) => segment.x === j && segment.y === i)
      const isFoodCell = food && food.x === j && food.y === i
      row.push(
        <div
          key={`${i}-${j}`}
          className={`cell ${isSnakeCell ? "snake" : ""}${
            isFoodCell ? "food" : ""
          }`}></div>,
      )
    }
    board.push(
      <div key={i} className="row">
        {row}
      </div>,
    )
  }
  return <div className="board">{board}</div>
}

export default App
