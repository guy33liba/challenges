import React, { useState } from "react"

const TodoList = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  const addTask = () => {
    if (input.trim() === "") return // Prevent adding empty tasks
    const newTask = { task: input, id: todos.length, completed: false, isEditing: false }
    setTodos([...todos, newTask])
    setInput("") // Clear the input field
  }

  const toggleCompletion = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleEdit = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)))
  }

  const updateTask = (id, newTaskText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: newTaskText } : todo)))
  }
  const saveTask = (id, newTaskText) => {
    setTodos(
      todos.map((todo, index) => {
        return todo.id === id ? { ...todo, task: newTaskText, isEditing: false } : todo
      }),
    )
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.isEditing ? (
              <>
                <input
                  type="text"
                  value={todo.task}
                  onChange={(e) => updateTask(todo.id, e.target.value)}
                />
                <button onClick={() => saveTask(todo.id, todo.task)}>Save</button>
              </>
            ) : (
              <>
                <span>{todo.task}</span>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompletion(todo.id)}
                />
                <button onClick={() => toggleEdit(todo.id)}>Edit</button>
                <button onClick={() => deleteTask(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
