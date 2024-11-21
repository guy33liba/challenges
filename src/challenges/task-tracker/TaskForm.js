import React from "react"

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText && category) {
    }
  }
  return <div></div>
}

export default TaskForm
