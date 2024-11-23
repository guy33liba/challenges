import React, { useState } from "react"

const Categories = ({ inputTask, addTask, deleteTask }) => {
 const [categories, setCategories] = useState({
  sport: [],
  health: [],
  profession: [],
  personal: [],
 })
 const [selectedCategory, setSelectedCategory] = useState("")
 const [isEditing, setIsEditing] = useState(null)
 const [editVAlue, setEditVAlue] = useState("")

 const addTaskCategory = () => {
  if (inputTask) {
   setCategories((prev) => ({
    ...prev,
    [selectedCategory]: [...prev[selectedCategory], inputTask],
   }))
  }
 }
 const deleteTaskFromCategory = (category, index) => {
  setCategories((prev) => ({
   ...prev,
   [category]: prev[category].filter((_, i) => i !== index),
  }))
 }
 const startEditing = (category, index, task) => {
  setIsEditing({ category, index })
  setEditVAlue(task)
 }
 const saveEditing = () => {
  if (isEditing) {
   const { category, index } = isEditing
   setCategories((prev) => ({
    ...prev,
    [category]: prev[category].map((task, i) => {
     return i === index ? editVAlue : task
    }),
   }))
  }
  setIsEditing(null)
 }
 const cancleEdit = () => {
  setIsEditing(null)
  setEditVAlue("")
 }

 return (
  <div>
   <div
    style={{ marginLeft: "10px", height: "44px", marginTop: "10px", fontSize: "20px" }}
   >
    <select
     style={{
      marginLeft: "10px",
      height: "44px",
      marginTop: "10px",
      fontSize: "20px",
      position: "relative",
      left: "600px",
     }}
     value={selectedCategory}
     onChange={(e) => setSelectedCategory(e.target.value)}
    >
     <option value="">Select Category</option>
     {Object.keys(categories).map((category) => (
      <option ley={category} value={category}>
       {category}
      </option>
     ))}
    </select>
    <button
     onClick={() => {
      addTaskCategory()
      addTask()
     }}
     style={{
      marginLeft: "10px",
      padding: "10px 20px",
      fontSize: "18px",
      position: "relative",
      left: "600px",
      height: "44px",
      width: "200px",
     }}
    >
     Add Task
    </button>
   </div>
   <div className="categoryList" style={{ marginTop: "20px" }}>
    {Object.keys(categories).map((category) => (
     <div style={{ border: "1px solid black" }} key={category}>
      <h3>{category}</h3>
      <ul>
       {categories[category].map((task, index) => (
        <div key={index}>
         {isEditing?.category === category && isEditing.index === index ? (
          <div>
           <input
            type="text"
            value={editVAlue}
            onChange={(e) => setEditVAlue(e.target.value)}
           />
           <button onClick={saveEditing}>save</button>
           <button onClick={cancleEdit}>cancel</button>
          </div>
         ) : (
          <div
           className="deleteEditBlock"
           style={{ width: "250px", marginBottom: "15px" }}
          >
           <span>{task}</span>
           <div
            style={{
             width: "250px",
             display: "flex",
             flexDirection: "column",
             width: "100%",
            }}
           >
            <button
             style={{ borderRadius: "10px" }}
             onClick={() => deleteTaskFromCategory(category, index)}
            >
             Delete
            </button>
            <button
             style={{ borderRadius: "10px", marginTop: "10px" }}
             onClick={() => startEditing(category, index, task)}
            >
             Edit
            </button>
           </div>
          </div>
         )}
        </div>
       ))}
      </ul>
     </div>
    ))}
   </div>
  </div>
 )
}
export default Categories
