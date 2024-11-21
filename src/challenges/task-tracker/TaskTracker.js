import React, { useState } from "react"
import Categories from "./Categories"

const TaskTracker = ({ categories }) => {
  const [inputTask, setinputTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [newInputTask, setNewInputTask] = useState("")
  const addTask = (task) => {
    if (inputTask.trim() === "") {
      alert("Please enter a task")
      return
    }
    setTasks([
      ...tasks,
      { id: tasks.length, task: inputTask, completed: false, isEditing: false, categories },
    ])
    setinputTask("")
  }
  const onchangeValue = (e) => {
    setinputTask(e.target.value)
  }
  const deleteTask = (id) => {
    setTasks(() => tasks.filter((task) => task.id !== id))
  }
  const completeTask = (id) => {
    setTasks((task) =>
      task.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    )
  }
  const edittasktoggle = (id) => {
    setTasks((task) =>
      task.map((item) => (item.id === id ? { ...item, isEditable: !item.isEditable } : item)),
    )
  }
  const editTask = (id, newTask) => {
    setTasks((task) =>
      task.map((task) => (task.id === id ? { ...task, task: newTask, isEditable: false } : task)),
    )
  }
  return (
    <div>
      <input type="text" style={{ fontSize: "30px" }} value={inputTask} onChange={onchangeValue} />
      <div style={{ display: "flex" }}>
        <button
          style={{ marginTop: "10px", fontSize: "30px", height: "44px" }}
          onClick={() => addTask()}>
          add Task
        </button>
        <Categories inputTask={inputTask} tasks={tasks} />
      </div>
      
    </div>
  )
}

export default TaskTracker
