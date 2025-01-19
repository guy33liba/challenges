import React, { useState } from "react"

const Todolist = () => {
  const [todolist, setTodolist] = useState([])
  const [inputValue, setinputValue] = useState("")
  const [updateValue, setupdateValue] = useState("")
  const [updateId, setupdateId] = useState(null)

  const addItem = (newItem) => {
    setTodolist((prev) => [...prev, { newItem, id: todolist.length + 1 }])
    setinputValue("")
  }
  const deleteItem = (id) => {
    const filteredList = todolist.filter((item) => item.id !== id)
    setTodolist(filteredList)
  }

  const updateItem = (id, updatedItem) => {
    const updatedList = todolist.map((todo) =>
      todo.id === id ? { ...todo, newItem: updatedItem } : todo,
    )

    setTodolist(updatedList)
  }
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
      <button onClick={() => addItem(inputValue)}>Add Item</button>
      {todolist.map((item, index) => (
        <div>
          {updateId === item.id ? (
            <div>
              <input
                type="text"
                value={updateValue}
                onChange={(e) => setupdateValue(e.target.value)}
              />
              <button
                onClick={() => {
                  updateItem(item.id, updateValue)
                  setupdateId(null)
                }}>
                Save
              </button>
              <button onClick={() => setupdateId(null)}>cancel</button>
            </div>
          ) : (
            <div>
              {item.id} : {item.newItem}...........
              <button onClick={() => deleteItem(item.id)}>delete</button>
              <button
                onClick={() => {
                  setupdateId(item.id)
                  updateItem("")
                }}>
                edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Todolist
