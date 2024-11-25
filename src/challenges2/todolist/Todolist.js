import React, { useState } from "react"
import EditButton from "./EditButton"
import DeleteButton from "./DeleteButton"

///////////////////////
const Todolist = () => {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")

  const addTask = () => {
    if (task.trim() === "") return
    setTasks([...tasks, { task: task, id: task.length }])
    setTask("")
  }
  const deleteTask = (id) => {
    if (tasks.length === 0) return
    setTasks(tasks.filter((item, index) => item.id !== id))
    // setTasks(tasks.filter((item, index) => index !== id))
  }
  const editTask = (id, newTask) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, task: newTask } : task)))
  }
  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={() => addTask()}>Add Task</button>

      <ul>
        {tasks.map((task, index) => {
          return (
            <div>
              <div>{task.task}</div>
              <div style={{ display: "flex", gap: "10px" }}>
                <DeleteButton onDelete={() => deleteTask(task.id)} />
                <EditButton task={task.task} onEdit={(newTask) => editTask(task.id, newTask)} />
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Todolist
