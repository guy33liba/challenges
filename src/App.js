import React, { createElement, useEffect, useState } from "react"

const App = () => {
  const createGrid = () => {
    let grid = []
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        const element = createElement("div")
        grid.push(element)
      }
    }
    return grid
  }
  const [grid, setGrid] = useState(createGrid)
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>snake game</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(20,20px",
          gridTemplateRows: "repeat(20,20px)",
          gap: "1px",
          marginLeft: "35%",
          marginTop: "20%",
        }}>
        {grid.map((item) => {
          return <div style={{ width: "20px", height: "20px", border: "1px solid black", backgroundColor: "white" }}>{item.element}</div>
        })}
      </div>
    </div>
  )
}

export default App
