import React from "react"
import "./App.css"
import PalindromeChecker from "./challenges/PalindromeChecker"
import PrimeChecker from "./challenges/PrimeChecker"
import AnagramChecker from "./challenges/AnagramChecker"
import Fibonacci from "./challenges/Fibonacci"
import TodoList from "./challenges/TodoList"
const App = () => {
 return (
  <div className="app">
   {/* <PalindromeChecker /> */}
   {/* <PrimeChecker /> */}
   {/* <AnagramChecker /> */}
   {<TodoList />}
   {/* <Fibonacci /> */}
  </div>
 )
}

export default App
