import React, { useEffect, useRef, useState } from "react"
import EditButton from "./EditButton"
import DeleteButton from "./DeleteButton"
import Completed from "./Completed"
import FilterTask from "./FilterTask"

///////////////////////
const Todolist = () => {
 const [tasks, setTasks] = useState([])
 const [task, setTask] = useState("")
 const [filterTasks, setFilterTasks] = useState(tasks)
 const inputRef = useRef("")

 const addTask = () => {
  if (task.trim() === "") return
  const newTask = {
   task: task.trim(),
   id: tasks.length,
   completed: false,
  }
  //////////////
  const updatedTasks = [...tasks, newTask]
  setTasks(updatedTasks)
  setFilterTasks(updatedTasks)
  setTask("")
  inputRef.current?.focus()
 }
 const deleteTask = (id) => {
  if (tasks.length === 0) return
  const updatedTasks = tasks.filter((item, index) => item.id !== id)
  setTasks(updatedTasks)
  setFilterTasks(updatedTasks)
  // setTasks(tasks.filter((item, index) => index !== id))
 }
 //////////////
 const editTask = (id, newTask) => {
  setTasks(tasks.map((task) => (task.id === id ? { ...task, task: newTask } : task)))
 }
 /////////////
 const completedTask = (id) => {
  const updatedTasks = tasks.map((task) =>
   task.id === id ? { ...task, completed: !task.completed } : task
  )
  setTasks(updatedTasks)
  setFilterTasks(updatedTasks)
 }
 /////////////
 function focusOnInput() {
  inputRef.current.focus()
 }
 useEffect(() => {
  focusOnInput()
 }, [])
 ///////////////
 return (
  <div>
   <input
    type="text"
    ref={inputRef}
    value={task}
    onChange={(e) => setTask(e.target.value)}
   />
   <button onClick={() => addTask()}>Add Task</button>
   <FilterTask tasks={tasks} setFilterTasks={setFilterTasks} />
   <ul>
    {filterTasks.map((task, index) => {
     return (
      <div>
       <div>{task.task}</div>
       <div style={{ display: "flex", gap: "10px" }}>
        <DeleteButton onDelete={() => deleteTask(task.id)} />
        <EditButton task={task.task} onEdit={(newTask) => editTask(task.id, newTask)} />
        <Completed completed={task.completed} onToggle={() => completedTask(task.id)} />
       </div>
      </div>
     )
    })}
   </ul>
  </div>
 )
}

export default Todolist
