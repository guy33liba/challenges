import React, { useEffect, useState } from "react";

const gridSize = 25;
const initialSnake = [{ x: 10, y: 10 }];

const getRandomFoodPosition = () => ({
  x: Math.floor(Math.random() * gridSize),
  y: Math.floor(Math.random() * gridSize),
});

const App = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState("RIGHT");
  const [food, setFood] = useState(getRandomFoodPosition());
  const [gameOver, setGameOver] = useState(false);

  const moveSnake = () => {
    setSnake((prevSnake) => {
      let newHead = { ...prevSnake[0] };

      switch (direction) {
        case "RIGHT":
          newHead.x += 1;
          break;
        case "LEFT":
          newHead.x -= 1;
          break;
        case "UP":
          newHead.y -= 1;
          break;
        case "DOWN":
          newHead.y += 1;
          break;
        default:
          break;
      }

      // **Boundary Collision Check**
      if (newHead.x < 0 || newHead.x >= gridSize || newHead.y < 0 || newHead.y >= gridSize) {
        setGameOver(true);
        return prevSnake; // Stop movement
      }

      // **Food Collision (Grow Snake)**
      if (newHead.x === food.x && newHead.y === food.y) {
        setFood(getRandomFoodPosition()); // Spawn new food
        return [newHead, ...prevSnake]; // Grow snake
      }

      return [newHead, ...prevSnake.slice(0, -1)]; // Move normally
    });
  };

  useEffect(() => {
    if (gameOver) return; // Stop game if gameOver is true

    const handleKeyDown = (e) => {
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

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, gameOver]);

  useEffect(() => {
    if (gameOver) return; // Stop movement if game is over

    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [direction, gameOver]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Snake Game</h1>
      {gameOver && <h2 style={{ textAlign: "center", color: "red" }}>Game Over</h2>}
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          margin: "5% auto",
          flexDirection: "column",
          width: `${gridSize * 25}px`,
        }}
      >
        {Array.from({ length: gridSize }).map((_, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {Array.from({ length: gridSize }).map((_, colIndex) => {
              const isSnake = snake.some((segment) => segment.x === colIndex && segment.y === rowIndex);
              const isFood = food.x === colIndex && food.y === rowIndex;
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  style={{
                    border: "1px solid black",
                    width: "25px",
                    height: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isSnake ? "green" : isFood ? "red" : "white",
                  }}
                >
                  {isSnake ? "🐍" : isFood ? "🍎" : ""}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
