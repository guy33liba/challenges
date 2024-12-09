import React, { useEffect, useState } from "react"

const RockPaperScissors = () => {
  const [input, setinput] = useState("")
  const [player, setPlayer] = useState("")
  const [computer, setComputer] = useState("")
  const [result, setResult] = useState("")

  const getRandomChoice = () => {
    const choices = ["scissors", "paper", "rock"]
    return choices[Math.floor(Math.random() * 3)]
  }

  useEffect(() => {
    if (!player || !computer) return // Prevent result calculation if choices are not ready

    if (
      (player === "scissors" && computer === "paper") ||
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock")
    ) {
      setResult("Player Wins!")
    } else if (
      (computer === "scissors" && player === "paper") ||
      (computer === "rock" && player === "scissors") ||
      (computer === "paper" && player === "rock")
    ) {
      setResult("Computer Wins!")
    } else if (player === computer) {
      setResult("It's a Draw!")
    } else {
      setResult("Invalid Choice.")
    }
  }, [player, computer])

  const handlePlay = () => {
    const newComputerChoice = getRandomChoice()
    setComputer(newComputerChoice)
    setinput(player)
  }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <input
        type="text"
        value={player}
        placeholder="Enter rock, paper, or scissors"
        onChange={(e) => setPlayer(e.target.value.toLowerCase())}
      />
      <button onClick={handlePlay}>Play</button>
      <h2>Player: {input}</h2>
      <h2>Computer: {computer}</h2>
      <h1>{result}</h1>
    </div>
  )
}

export default RockPaperScissors
