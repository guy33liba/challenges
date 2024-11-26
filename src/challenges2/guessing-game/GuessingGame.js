import React, { useState } from "react"

const GuessingGame = () => {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1)
  const [guess, setGuess] = useState("")
  const [message, setMessage] = useState("")
  const [guessCount, setGuessCount] = useState(0)
  const [resetToggle, setResetToggle] = useState(false)
  const handleGuess = (e) => {
    e.preventDefault()
    const numGuess = parseInt(guess, 10)
    if (isNaN(numGuess)) {
      setMessage("please enter a valid number")
      return
    }
    if (numGuess < targetNumber) {
      setMessage("Too low!")
      setGuessCount((prev) => prev + 1)
    } else if (numGuess > targetNumber) {
      setMessage("Too High!")
      setGuessCount((prev) => prev + 1)
    } else {
      setMessage("Correct! you gueessed the number!!")
      setResetToggle(true)
    }
  }
  const handleReset = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1)
    setGuess("")
    setMessage("")
    setGuessCount(0)
    setResetToggle(false)
  }
  return (
    <div>
      <form onSubmit={handleGuess}>
        <h1>Number guessing Game</h1>
        <p>Guess a number Between 1 ad 100</p>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your Guess"
        />
        <div>
          <input type="range" value={guess} />
        </div>
        <button type="submit">Submit Guess</button>
        <p>{message} </p>
        <p>Number of Guess: {guessCount}</p>
        {resetToggle && <button onClick={handleReset}>Reset Game</button>}
      </form>
    </div>
  )
}

export default GuessingGame
