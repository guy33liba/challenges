import React, { useEffect, useState } from "react"
import "./SnakeGame.css"
function App() {
  const [snake, setSnake] = useState([
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2 },
  ])
  const [food, setfood] = useState(null)
  const [direction, setDirection] = useState("right")
  const rows = 20
  const cols = 20
  const moveSnake = () => {
    const head = { ...snake[0] }
    switch (direction) {
      case "up":
        head.y -= 1
        break
      case "down":
        head.y += 1
        break
      case "left":
        head.x -= 1
        break
      case "right":
        head.x += 1
        break
      default:
        break
    }
    const newSnake = [head, ...snake.slice(0, snake.length - 1)]
    if (head.x === food.x && head.y === food.y) {
      newSnake.push(snake[snake.length - 1])
      generateFood()
    }
    setSnake(newSnake)
  }
  const handleKeyPresses = (e) => {
    switch (e.key) {
      case "ArrowUp":
        !direction === "down" && setDirection("up")
        break
      case "ArrowDown":
        !direction === "up" && setDirection("down")
        break
      case "ArrowLeft":
        !direction === "right" && setDirection("left")
        break
      case "ArrowRight":
        !direction === "left" && setDirection("right")
        break
    }
  }
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
