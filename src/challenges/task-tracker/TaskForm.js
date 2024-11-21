import React from "react"

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText && category) {
      addTask({ id: Date.now(), text: taskText, category, completed: false })
      setTaskText("")
      setCategory("")
    }
  }
  return <form></form>
}

export default TaskForm
