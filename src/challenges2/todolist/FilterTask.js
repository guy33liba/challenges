import React from "react"

const FilterTask = ({ tasks, setFilterTasks }) => {
 const handleFilter = (filter) => {
  if (filter === "all") {
   setFilterTasks(tasks)
  } else if (filter === "completed") {
   setFilterTasks(tasks.filter((task) => task.completed))
  } else if (filter === "incomplete") {
   setFilterTasks(tasks.filter((task) => !task.completed))
  }
 }

 return (
  <div style={{ margin: "10px 0" }}>
   <button onClick={() => handleFilter("all")}>All</button>
   <button onClick={() => handleFilter("completed")}>Completed</button>
   <button onClick={() => handleFilter("incomplete")}>Incomplete</button>
  </div>
 )
}

export default FilterTask
