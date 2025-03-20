import React, { useState, useEffect } from "react";

const gridSize = 20; // 20x20 grid
const boardSize = gridSize * gridSize; // Total cells

const getRandomFoodPosition = (snake) => {
  let foodPosition;
  do {
    foodPosition = Math.floor(Math.random() * boardSize);
  } while (snake.includes(foodPosition)); // Ensure food is not inside the snake
  return foodPosition;
};

const SnakeGame = () => {
  const [snake, setSnake] = useState([210]); // Starting position
  const [food, setFood] = useState(getRandomFoodPosition([210]));
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) return;
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction, gameOver]);

  useEffect(() => {
    if (gameOver) return;
    const moveSnake = () => {
      setSnake((prevSnake) => {
        let newSnake = [...prevSnake];
        let head = newSnake[0];

        switch (direction) {
          case "RIGHT":
            head += 1;
            if (head % gridSize === 0) setGameOver(true); // Right wall
            break;
          case "LEFT":
            head -= 1;
            if (head % gridSize === gridSize - 1 || head < 0) setGameOver(true); // Left wall
            break;
          case "UP":
            head -= gridSize;
            if (head < 0) setGameOver(true); // Top wall
            break;
          case "DOWN":
            head += gridSize;
            if (head >= boardSize) setGameOver(true); // Bottom wall
            break;
          default:
            break;
        }

        if (newSnake.includes(head)) {
          setGameOver(true); // Collision with itself
          return prevSnake;
        }

        newSnake.unshift(head);

        if (head === food) {
          setFood(getRandomFoodPosition(newSnake)); // Generate new food
        } else {
          newSnake.pop(); // Move snake
        }

        return newSnake;
      });
    };

    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  }, [direction, gameOver]);

  return (
    <div>
      <h1>Snake Game</h1>
      {gameOver && <h2>Game Over! Refresh to restart.</h2>}
      <div
        style={{
          height: "400px",
          width: "400px",
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          border: "2px solid black",
          margin: "auto",
        }}
      >
        {[...Array(boardSize)].map((_, index) => (
          <div
            key={index}
            style={{
              width: "20px",
              height: "20px",
              background: snake.includes(index)
                ? "green"
                : index === food
                ? "red"
                : "white",
              border: "1px solid black",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SnakeGame;
