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
      <div>
        <input
          type="text"
          style={{ fontSize: "30px", marginLeft: "120px", position: "relative", left: "500px" }}
          value={inputTask}
          onChange={onchangeValue}
        />
        <div style={{ display: "flex", position: "relative" }}>
          <Categories inputTask={inputTask} addTask={addTask} deleteTask={deleteTask} />
        </div>
      </div>
      {/* {tasks.map((task, index) => {
    return (
     <div key={index}>
      {!task.isEditable ? (
       <div>
        <h2>{task.categories}</h2>
        <input
         type="checkbox"
         checked={task.completed}
         onChange={() => completeTask(task.id)}
        />
        {task.task}
        <button style={{ marginLeft: "10px" }} onClick={() => deleteTask(task.id)}>
         delete
        </button>
        <button style={{ marginLeft: "10px" }} onClick={() => edittasktoggle(task.id)}>
         edit
        </button>
       </div>
      ) : (
       <div>
        <input
         style={{ marginTop: "10px" }}
         type="text"
         value={newInputTask}
         onChange={(e) => setNewInputTask(e.target.value)}
        />
        <button
         style={{ marginLeft: "10px" }}
         onClick={() => editTask(task.id, newInputTask)}
        >
         updateTask
        </button>
       </div>
      )}
     </div>
    )
   })} */}
    </div>
  )
}

export default TaskTracker
