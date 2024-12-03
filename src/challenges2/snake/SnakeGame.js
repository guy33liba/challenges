import React, { useEffect, useState } from "react"
import "./SnakeGame.css"
const SnakeGame = () => {
  /////////////////////////////////

  const [board, setBoard] = useState([])
  const [snake, setSnake] = useState([
    [5, 5],
    [5, 6],
    [5, 7],
  ])
  const [food, setFood] = React.useState([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)])
  const [direction, setDirection] = useState("right")
  const snakeHead = snake[snake.length - 1]

  /////////////////////////////////

  useEffect(() => {
    const createBoard = () => {
      const rows = 20
      const cols = 20
      const newBoard = Array(rows)
        .fill(null)
        .map(() => Array(cols).fill(null))

      snake.forEach(([row, col]) => {
        newBoard[row][col] = "snake"
      })

      const [foodRow, foodCol] = food
      newBoard[foodRow][foodCol] = "food"

      setBoard(newBoard)
    }
    createBoard()
  }, [snake, food])

  /////////////////////////////////
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp" && direction !== "down") {
        setDirection("up")
      }
      if (e.key === "ArrowDown" && direction !== "up") {
        setDirection("down")
      }
      if (e.key === "ArrowLeft" && direction !== "right") {
        setDirection("left")
      }
      if (e.key === "ArrowRight" && direction !== "left") {
        setDirection("right")
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [direction])
  const handleFoodEaten = () => {
    const newFoodPosition = generateRandomPosition()
    setFood(newFoodPosition)
  }

  /////////////////////////////////

  const moveSnake = () => {
    const newSnake = [...snake]
    let newHead

    switch (direction) {
      case "up":
        ;(newHead = [snake[snake.length - 1][0] - 1]), snake[snake.lenth - 1][1]
        break
      case "down":
        ;(newHead = [snake[snake.length - 1][0] + 1]), snake[snake.length - 1][1]
        break
    }
    const snakeHead = newSnake[newSnake.length - 1]
    if (snakeHead[0] === food[0] && snakeHead[1] === food[1]) {
      handleFoodEaten()
    } else {
      newSnake.shift()
    }
    setSnake(newSnake)
  }

  /////////////////////////////////

  const generateRandomPosition = () => {
    const row = Math.floor(Math.random() * 20)
    const col = Math.floor(Math.random() * 20)
    return [row, col]
  }

  /////////////////////////////////

  return (
    <div>
      <div style={{ display: "grid", gridTemplateRows: "repeat(20, 20px)" }}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "grid", gridTemplateColumns: "repeat(20, 20px)" }}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: cell === "snake" ? "green" : cell === "food" ? "yellow" : "lightblue",
                  border: "1px solid black",
                }}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SnakeGame
