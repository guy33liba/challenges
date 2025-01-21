import React, { useState } from "react"

const App = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "Rome", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
      correctAnswer: "William Shakespeare",
    },
  ]

  const [questionindex, setQuestionIndex] = useState(0)
  const [message, setMessage] = useState("")
  const [score, setScore] = useState(0)
  const [correct, setCorrect] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)

  const handlenext = () => {
    if (questionindex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1)
      setMessage("")
      setCorrect(false)
    } else {
      setIsGameOver(true)
    }
  }

  const correctAnswer = (answer) => {
    const currentAnswer = questions[questionindex]
    if (currentAnswer.correctAnswer === answer) {
      setMessage(`Correct! ${answer}`)
      setScore((prev) => prev + 1)
      setCorrect(true)
      setTimeout(() => {
        handlenext()
      }, 1000)
    } else {
      setMessage("Incorrect")
      setCorrect(false)
    }
  }

  const newGame = () => {
    setScore(0)
    setQuestionIndex(0)
    setMessage("")
    setCorrect(false)
    setIsGameOver(false)
  }

  return (
    <div style={{ margin: "5rem" }}>
      <h1>Quiz App</h1>
      {!isGameOver ? (
        <>
          <h3>{questions[questionindex].question}</h3>
          <ul>
            {questions[questionindex].answers.map((answer) => (
              <li
                key={answer}
                onClick={() => correctAnswer(answer)}
                style={{
                  cursor: "pointer",
                  color: correct && answer === questions[questionindex].correctAnswer ? "green" : "",
                }}>
                {answer}
              </li>
            ))}
          </ul>
          <button onClick={handlenext} disabled={correct}>
            Next
          </button>
          <h2>Score: {score}</h2>
          <h1>Message: {message}</h1>
        </>
      ) : (
        <>
          <h2>Your final score is: {score}</h2>
          <button onClick={newGame}>Start New Game</button>
        </>
      )}
    </div>
  )
}

export default App
