import React from "react"
import "./App.css"
import PalindromeChecker from "./challenges/PalindromeChecker"
import PrimeChecker from "./challenges/PrimeChecker"
import AnagramChecker from "./challenges/AnagramChecker"
import Fibonacci from "./challenges/Fibonacci"
import TodoList from "./challenges/TodoList"
import Capitilize from "./challenges/Capitilize"
import DYnamicList from "./challenges/DYnamicList"
import Debounce from "./challenges/Debounce"
const App = () => {
  return (
    <div className="app">
      {/* <PalindromeChecker /> */}
      {/* <PrimeChecker /> */}
      {/* <AnagramChecker /> */}
      {/* {<TodoList />} */}
      {/* <Fibonacci /> */}
      {/* <Capitilize /> */}
      {/* <DYnamicList /> */}
      <Debounce />
    </div>
  )
}

export default App
