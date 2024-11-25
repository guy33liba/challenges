import React, { useState } from "react"
import "./Todolist.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
const DeleteButton = ({ onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete")) {
      setIsDeleting(true)
      setTimeout(() => {
        onDelete() // Call the delete action after the timeout
        setIsDeleting(false) // Re-enable the button
      }, 2000) // 2-second delay
    }
  }

  return (
    <button onClick={handleDelete} disabled={isDeleting}>
      <div className={`delete-text ${isDeleting ? "deleting" : ""}`}>
        {isDeleting ? "Deleting..." : "Delete"}
        {isDeleting ? <div className="spinner"></div> : null}
        {isDeleting ? <FontAwesomeIcon icon={faSpinner} spin /> : null}
      </div>
    </button>
  )
}

export default DeleteButton
