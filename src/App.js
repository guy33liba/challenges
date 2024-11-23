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
import TaskTracker from "./challenges/task-tracker/TaskTracker"
import MissingNumber from "./challenges/MissingNumber"
import FindtheSingleNumber from "./challenges/FindtheSingleNumber"
import FrequencyCounter from "./challenges/FrequencyCounter"
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
   {/* <Debounce /> */}
   {/* <TaskTracker /> */}
   {/* <MissingNumber/> */}
   {/* <FindtheSingleNumber /> */}
   <FrequencyCounter />
  </div>
 )
}

export default App
