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
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter Task..."
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Option</option>
        <option value="Work"> Work</option>
        <option value="Personal"> Personal</option>
        <option value="Fitness">Fitness</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
