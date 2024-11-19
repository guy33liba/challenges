import React from "react"
import "./App.css"
import PalindromeChecker from "./challenges/PalindromeChecker"
import PrimeChecker from "./challenges/PrimeChecker"
import AnagramChecker from "./challenges/AnagramChecker"
import Fibonacci from "./challenges/Fibonacci"
const App = () => {
  return (
    <div className="app">
      {/* <PalindromeChecker /> */}
      {/* <PrimeChecker /> */}
      {/* <AnagramChecker /> */}
      <Fibonacci />
    </div>
  )
}

export default App
