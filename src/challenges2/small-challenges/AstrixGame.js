import React from "react"

const Pyramid = ({ rows }) => {
  const pyramid = []
  for (let i = 1; i <= rows; i++) {
    let spaces = ""
    let stars = ""
    // let spaces = " ".repeat(rows - i)
    // let stars = "*".repeat(2 * i - 1)
    for (let j = 0; j < rows - i; j++) {
      spaces += " "
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      stars += "*"
    }

    pyramid.push(`${spaces}${stars}`)
  }
  return (
    <div style={{ fontFamily: "monospace", textAlign: "center" }}>
      {pyramid.map((row, index) => (
        <div key={index}>{row}</div>
      ))}
    </div>
  )
}

export default Pyramid
