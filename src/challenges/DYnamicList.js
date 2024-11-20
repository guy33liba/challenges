import React, { useState } from "react"

const DYnamicList = () => {
  const [itemInput, setItemInput] = useState("")
  const [list, setList] = useState([])

  const addItem = () => {
    if (itemInput.trim()) {
      setList((prevList) => [...prevList, { id: list.length, value: itemInput,isEditing:false }])
      setItemInput("")
    }
  }
  const deleteItem = (id) => {
    setList((prevList) => prevList?.filter((item) => item.id !== id))
  }
  const editItem = (id, newValue) => {
    setList((prevlist) => prevlist.map((item) => ({ value: newValue, isEditing: !isEditing })))
  }
  return (
    <div>
      <input type="text" value={itemInput} onChange={(e) => setItemInput(e.target.value)} />
      <button onClick={() => addItem(itemInput)}>addItem</button>
      <h2>
        {list.map((item, index) => {
          return (
            <div key={item.id}>
              {item.value}
              <button onClick={() => deleteItem(item.id)} style={{ marginLeft: "10px" }}>
                delete
              </button>
              {item.isEditing ? (
                <input type="text" value={} />
              ) : (
                <button onClick={() => editItem(item.id)} style={{ marginLeft: "10px" }}>
                  edit
                </button>
              )}
            </div>
          )
        })}
      </h2>
    </div>
  )
}

export default DYnamicList
