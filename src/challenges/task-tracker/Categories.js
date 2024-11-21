import React, { useState } from "react"
const Categories = ({ inputTask }) => {
  const [categories, setCategories] = useState([
    {
      sport: [],
      health: [],
      profession: [],
      personal: [],
    },
  ])
  const [selectedCategory, setSelectedCategory] = useState("")
  const categorySelection = () => {
    if (categories === categories.sport) {
      setCategories([...categories, { categories: inputTask }])
    }
  }

  return (
    <div>
      {categories.map((category) => {
        return (
          <div key={category.sport}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ marginLeft: "10px", height: "44px", marginTop: "10px", fontSize: "30px" }}>
              <option value="">Select Category</option>
              {Object.keys(categories).map((category) => (
                <option key={category} value="category">
                  {category}
                </option>
              ))}
            </select>
          </div>
        )
      })}
      <div>
        {categories.map((category) => {
          return (
            <div className="categoryList" key={category.sport} style={{ marginTop: "20px" }}>
              <div key={category} style={{ marginBottom: "20px" }}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
