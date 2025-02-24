import React, { useEffect, useState } from "react"
import "./App.css"
const boardsize = 20
const snakerandomPosition = Math.floor(Math.random()) * boardsize
const getrandomposition = () => ({
  x: Math.floor(Math.random() * boardsize),
  y: Math.floor(Math.random() * boardsize),
})
const App = () => {
  const [snake, setSnake] = useState({ x: snakerandomPosition, y: snakerandomPosition })
  const [food, setFood] = useState(getrandomposition())
  const [direction, setDirection] = useState("Right")
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  useEffect(() => {
    if (gameOver) return
  }, [])
  return <div></div>
}

export default App
