import React from "react"

const Pyramid = ({ rows }) => {
  const pyramid = []

  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i) // Correct spacing
    let stars = "*".repeat(2 * i - 1) // Correct star pattern

    pyramid.push(`${spaces}${stars}`)
  }

  return (
    <div style={{ fontFamily: "monospace", textAlign: "center", whiteSpace: "pre" }}>
      {pyramid.map((row, index) => (
        <div key={index}>{row}</div>
      ))}
    </div>
  )
}

export default Pyramid
