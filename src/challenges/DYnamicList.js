import React, { useState } from "react"

const DYnamicList = () => {
  const [itemInput, setItemInput] = useState("")
  const [editInput, setEditInput] = useState("")
  const [list, setList] = useState([])

  const addItem = () => {
    if (itemInput.trim()) {
      setList((prevList) => [...prevList, { id: Date.now(), value: itemInput, isEditing: false }])
      setItemInput("") // Clear input
    }
  }

  const deleteItem = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id))
  }

  const editItem = (id, currentValue) => {
    setList((prevList) =>
      prevList.map((item) => (item.id === id ? { ...item, isEditing: true } : item)),
    )
    setEditInput(currentValue) // Set editInput to current task's value
  }

  const saveItem = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, value: editInput, isEditing: false } : item,
      ),
    )
    setEditInput("") // Clear edit input after saving
  }

  return (
    <div>
      <input type="text" value={itemInput} onChange={(e) => setItemInput(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
      <h2>
        {list.map((item) => (
          <div key={item.id}>
            {item.isEditing ? (
              <>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <button onClick={() => saveItem(item.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{item.value}</span>
                <button
                  onClick={() => editItem(item.id, item.value)}
                  style={{ marginLeft: "10px" }}>
                  Edit
                </button>
                <button onClick={() => deleteItem(item.id)} style={{ marginLeft: "10px" }}>
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </h2>
    </div>
  )
}

export default DYnamicList
