import React, { useState } from "react"
const Categories = () => {
  const [categories, setCategories] = useState([
    {
      sport: [],
      health: [],
      profession: [],
      personal: [],
    },
  ])

  return (
    <div>
      {categories.map((category) => {
        return (
          <div key={category.sport}>
            <select
              style={{ marginLeft: "10px", height: "44px", marginTop: "10px", fontSize: "30px" }}>
              <option value="">Select Category</option>
              <option value={category.sport}>sport</option>
              <option value={category.health}>health</option>
              <option value={category.profession}>profession</option>
              <option value={category.personal}>personal</option>
            </select>
          </div>
        )
      })}
      <div>
        {categories.map((category) => {
          return (
            <div
              className="categoryList"
              key={category.sport}
              style={{
         
              }}>
              <div value={category.sport}>sport</div>
              <div value={category.health}>health</div>
              <div value={category.profession}>profession</div>
              <div value={category.personal}>personal</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
