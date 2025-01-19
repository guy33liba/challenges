import React, { useEffect, useState } from "react"

const SnakeGame2 = () => {
 const rows = 20
 const cols = 20

 const [score, setScore] = useState(0)
 const [board, setBoard] = useState([])
 const [direction, setDirection] = useState("right")
 const [snake, setSnake] = useState([
  { x: 5, y: 5 },
  { x: 5, y: 6 },
  { x: 5, y: 7 },
 ])
 const [food, setFood] = useState({
  x: Math.floor(Math.random() * cols),
  x: Math.floor(Math.random() * rows),
 })
 const createBoard = () => {
  const newBoard = Array(rows)
   .fill(null)
   .map(() => Array(cols).fill(null))

  snake.forEach(({ x, y }) => {
   newBoard[y][x] = "snake"
  })
  newBoard[food.y][food.x] = "food"
  
  setBoard(newBoard)

 }

 return <div></div>
}
export default SnakeGame2
