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
import FindLongestWord from "./challenges/FindLongestWord"
import FindDuplicates from "./challenges/FindDuplicates"
import SumOfNumbers from "./challenges/SumOfNumbers"
import ReverseString from "./challenges/ReverseString"
import App2 from "./challenges2/App2"
import Fiboncci2 from "./challenges/Fiboncci2"
const App = () => {
  return (
    <div className="app">
      {/* <PalindromeChecker /> */}
      {/* <PrimeChecker /> */}
      {/* <AnagramChecker /> */}
      {/* {<TodoList />} */}
      {/* <Fibonacci /> */}
      {/* <Fiboncci2 /> */}
      {/* <Capitilize /> */}
      {/* <DYnamicList /> */}
      {/* <Debounce /> */}
      {/* <TaskTracker /> */}
      {/* <MissingNumber/> */}
      {/* <FindtheSingleNumber /> */}
      {/* <FrequencyCounter /> */}
      {/* <FindLongestWord /> */}
      <FindDuplicates />
      {/* <SumOfNumbers /> */}
      {/* <ReverseString /> */}
      {/* <App2 /> */}
    </div>
  )
}

export default App
