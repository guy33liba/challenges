import React, { useState } from "react"

const DeleteButton = ({ onDelete }) => {
  return <button onClick={onDelete}>Delete</button>
}
//////////////////////
const EditButton = ({ onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState(task)

  const handleEdit = () => {
    if (isEditing) {
      onEdit(editedTask)
    }
    setIsEditing(!isEditing)
  }
  return (
    <div>
      {isEditing ? (
        <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
      ) : null}
    </div>
  )
}
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
  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={() => addTask()}>Add Task</button>

      <ul>
        {tasks.map((task, index) => {
          return (
            <div>
              {task.task}
              <button onClick={() => deleteTask(task.id)}>delete</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Todolist
