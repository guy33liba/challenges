import React from "react"

const TaskForm = ({
  tasks,
  completeTask,
  deleteTask,
  edittasktoggle,
  editTask,
  newInputTask,
  setNewInputTask,
}) => {
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            {!task.isEditable ? (
              <div>
                <h2>{task.categories}</h2>
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
      })}
    </div>
  )
}

export default TaskForm
