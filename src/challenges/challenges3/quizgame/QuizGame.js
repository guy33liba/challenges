import React, { useState } from "react"

const QuizGame = () => {
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
  const [questionIndex, setQuestionIndex] = useState(0)
  const [correct, setCorrect] = useState(false)
  const [score, setscore] = useState(0)
  const [message, setMessage] = useState("hello")
  if (questionIndex > 2) {
    setQuestionIndex(0)
  }
  function setnextquestion() {
    if (questionIndex < 2) {
      setQuestionIndex((prev) => prev + 1)
      setCorrect(false)
    } else {
      setMessage(`Your Score is ${score}`)
      setQuestionIndex(0)
      setCorrect(false)
    }
  }
  const currentQuestion = questions[questionIndex]

  function handleAnswer(answer) {
    const currentQuestion = questions[questionIndex]
    if (answer === currentQuestion.correctAnswer) {
      setMessage(`Correct Answer: ${currentQuestion.correctAnswer}`)
      setCorrect(true)
      setscore((prev) => prev + 1)
    } else {
      console.log(`Incorrect! The correct answer is: ${currentQuestion.correctAnswer}`)
      setCorrect(false)
    }
  }

  return (
    <div style={{ marginLeft: "320px" }}>
      <h2>Quiz Game</h2>
      <div>{questions[questionIndex].question}</div>
      <ul>
        {questions[questionIndex].answers.map((item, index) => (
          <ul style={{ width: "200px" }} key={index}>
            <li>
              <button
                onClick={() => handleAnswer(item)}
                style={{
                  backgroundColor: correct && item === currentQuestion.correctAnswer ? "green" : "",
                  marginTop: "10px",
                  height: "30px",
                  width: "200px",
                }}>
                {item}
              </button>
            </li>
          </ul>
        ))}
      </ul>
      <button style={{ marginLeft: "120px" }} onClick={() => setnextquestion()}>
        Next Question
      </button>
      <h2>{score}</h2>
      <h2>{message}</h2>
    </div>
  )
}

export default QuizGame
