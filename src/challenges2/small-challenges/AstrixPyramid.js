import React, { useState } from "react"

const AstrixPyramid = () => {
  const [rows, setRows] = useState(0)
  const [pyramid, setPyramid] = useState([])

  const generatePyramid = () => {
    const tempPyramid = []
    for (let i = 1; i < rows; i++) {
      const spaces = " ".repeat(rows - i)
      const stars = "*".repeat(2 * i - 1)
      tempPyramid.push(spaces + stars)
    }
    // tempPyramid.push("*".repeat(i))
    setPyramid(tempPyramid)
  }
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Asterix Pyramid</h2>
      <input
        type="number"
        placeholder="Enter number of rows"
        value={rows}
        onChange={(e) => setRows(e.target.value || 0)}
      />
      <button onClick={generatePyramid} style={{ marginLeft: "10px" }}>
        Generate Pyramid
      </button>
      <div style={{ marginTop: "20px" }}>
        {pyramid.map((row, index) => (
          <div key={index}>{row}</div>
        ))}
      </div>
    </div>
  )
}

export default AstrixPyramid
