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
  const rows = 20
  const cols = 20
  const snakeHead = snake[snake.length - 1]
  ////////////////////////////////

  const [food, setFood] = React.useState([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)])
  const [direction, setDirection] = useState("right")
  const [gameover, setGameover] = useState(false)

  const isOutOfBounds = (head) => {
    const [row, col] = head

    return row < 0 || row >= 20 || col < 0 || col >= 20
  }
  /////////////////////////////////
  useEffect(() => {
    const createBoard = () => {
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
    if (gameover) return

    const newSnake = [...snake] // Copy the snake array

    let newHead
    switch (direction) {
      case "up":
        newHead = [snake[snake.length - 1][0] - 1, snake[snake.length - 1][1]] // Move up (decrease row)
        break
      case "down":
        newHead = [snake[snake.length - 1][0] + 1, snake[snake.length - 1][1]] // Move down (increase row)
        break
      case "left":
        newHead = [snake[snake.length - 1][0], snake[snake.length - 1][1] - 1] // Move left (decrease column)
        break
      case "right":
        newHead = [snake[snake.length - 1][0], snake[snake.length - 1][1] + 1] // Move right (increase column)
        break
      default:
        return // No movement if direction is undefined
    }
    if (isOutOfBounds(newHead)) {
      alert("Game Over! Snake went out of bounds.")
      resetGame() // Optional: Reset the game or end it
      return
    }
    newSnake.push(newHead) // Add the new head to the snake

    // Check if snake ate the food
    const snakeHead = newSnake[newSnake.length - 1]
    if (snakeHead[0] === food[0] && snakeHead[1] === food[1]) {
      handleFoodEaten() // Handle food eating logic
    } else {
      newSnake.shift() // Remove the tail if no food is eaten
    }

    setSnake(newSnake) // Update the snake's position
  }
  /////////////////////////////////
  useEffect(() => {
    const interval = setInterval(() => {
      moveSnake() // Move the snake at regular intervals
    }, 200) // Adjust the speed here (200ms per move)

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval)
  }, [snake, direction, food])
  const generateRandomPosition = () => {
    let row, col
    do {
      row = Math.floor(Math.random() * rows)
      col = Math.floor(Math.random() * cols)
    } while (snake.some(([sRow, sCol]) => sRow === row && sCol === col))
    return [row, col]
  }

  /////////////////////////////////
  const resetGame = () => {
    setSnake([
      [5, 5],
      [5, 6],
      [5, 7],
    ]) // Reset snake to starting position
    setFood([10, 10]) // Reset food to starting position
    setDirection("RIGHT") // Reset direction
  }
  return (
    <div>
      {" "}
      <button onClick={resetGame} style={{ padding: "10px", marginBottom: "10px" }}>
        Reset Game
      </button>
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
