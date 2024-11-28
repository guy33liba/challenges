import React from "react"

const Pyramid = ({ rows }) => {
  // Build the pyramid as an array of strings
  const pyramid = []

  for (let i = 1; i <= rows; i++) {
    let row = ""

    // Add spaces
    for (let j = 1; j <= rows - i; j++) {
      row += " "
    }

    // Add asterisks
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*"
    }

    pyramid.push(row) // Add the row to the pyramid array
  }

  // Render the pyramid
  return (
    <div style={{ fontFamily: "monospace", textAlign: "center" }}>
      {pyramid.map((row, index) => (
        <div key={index}>{row}</div>
      ))}
    </div>
  )
}

export default Pyramid
