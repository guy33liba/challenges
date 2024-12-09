import React, { useEffect, useRef, useState } from "react"
import "./SnakeGame.css"
import { clear } from "@testing-library/user-event/dist/clear"

function App() {
  const [snake, setSnake] = useState([
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2 },
  ])
  const [food, setFood] = useState(null)
  const [direction, setDirection] = useState("right")
  const [gameOver, setGameOver] = useState(false)
  const rows = 20
  const cols = 20
  const intervalRef = useRef(null)
  useEffect(() => {
    if (gameOver) return
    intervalRef.current = setInterval(() => {
      moveSnake()
    }, 100)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [snake, direction, gameOver])
  // Move snake logic
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

    if (checkGameOver()) {
      alert("Game Over!")
      setGameOver(true)
      setSnake([
        { x: 2, y: 2 },
        { x: 3, y: 2 },
        { x: 4, y: 2 },
      ])
      setDirection("right")
      return
    }

    const newSnake = [head, ...snake.slice(0, snake.length - 1)]

    if (head.x === food.x && head.y === food.y) {
      newSnake.push(snake[snake.length - 1]) // Add a new segment
      generateFood()
    }

    setSnake(newSnake)
  }

  // Check game over condition
  const checkGameOver = () => {
    const head = snake[0]
    if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
      return true
    }
    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        return true
      }
    }
    return false
  }

  // Handle keypresses for direction change
  const handleKeyPresses = (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (direction !== "down") setDirection("up")
        break
      case "ArrowDown":
        if (direction !== "up") setDirection("down")
        break
      case "ArrowLeft":
        if (direction !== "right") setDirection("left")
        break
      case "ArrowRight":
        if (direction !== "left") setDirection("right")
        break
      default:
        break
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPresses)
    return () => {
      document.removeEventListener("keydown", handleKeyPresses)
    }
  }, [direction])

  // Generate food logic
  const generateFood = () => {
    const emptyCells = []
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (!snake.some((segment) => segment.x === j && segment.y === i)) {
          emptyCells.push({ x: j, y: i })
        }
      }
    }
    const randomIndex = Math.floor(Math.random() * emptyCells.length)
    const foodPosition = emptyCells[randomIndex]
    setFood(foodPosition)
  }

  // Generate food when the component mounts or snake changes
  useEffect(() => {
    generateFood()
  }, [snake])

  // Board rendering
  const board = []
  for (let i = 0; i < rows; i++) {
    const row = []
    for (let j = 0; j < cols; j++) {
      const isSnakeCell = snake.some((segment) => segment.x === j && segment.y === i)
      const isFoodCell = food && food.x === j && food.y === i
      row.push(
        <div
          key={`${i}-${j}`}
          className={`cell ${isSnakeCell ? "snake" : ""}${
            isFoodCell ? " food" : ""
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
