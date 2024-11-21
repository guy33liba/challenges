import { isEditable } from "@testing-library/user-event/dist/utils"
import React, { useState } from "react"
import TaskForm from "./TaskForm"

const TaskTracker = () => {
  const [inputTask, setinputTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [newInputTask, setNewInputTask] = useState("")
  const addTask = (task) => {
    // if (inputTask.trim() === "") {
    //   alert("Please enter a task")
    //   return
    // }
    // setTasks([...tasks, { id: tasks.length, task: inputTask, completed: false, isEditing: false }])
    // setinputTask("")
    setTasks([...tasks, task])
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
      <TaskForm addTask={addTask} />
      {/* <input type="text" value={inputTask} onChange={onchangeValue} />

      <button style={{ marginLeft: "10px" }} onClick={() => addTask()}>
        add Task
      </button>
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            {!task.isEditable ? (
              <div>
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
                  onClick={() => editTask(task.id, newInputTask)}>
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
