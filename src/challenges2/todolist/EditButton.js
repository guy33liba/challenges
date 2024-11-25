import { useState } from "react"

const EditButton = ({ task, onEdit }) => {
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
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  )
}
export default EditButton
