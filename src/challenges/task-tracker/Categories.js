import React, { useState } from "react"

const Categories = ({ inputTask, addTask }) => {
  const [categories, setCategories] = useState({
    sport: [],
    health: [],
    profession: [],
    personal: [],
  })
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const addTaskToCategory = () => {
    if (selectedCategory && inputTask) {
      setCategories((prevCategories) => ({
        ...prevCategories,
        [selectedCategory]: [...prevCategories[selectedCategory], inputTask],
      }))
    }
  }

  return (
    <div>
      {/* Dropdown for category selection */}
      <select
        style={{
          marginLeft: "10px",
          height: "44px",
          marginTop: "10px",
          fontSize: "20px",
        }}
        value={selectedCategory}
        onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        {Object.keys(categories).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          addTaskToCategory()
          addTask()
        }}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "18px",
        }}>
        Add Task
      </button>

      {/* Display Tasks by Category */}
      <div className="categoryList" style={{ marginTop: "20px" }}>
        {Object.keys(categories).map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>
              {categories[category].map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
