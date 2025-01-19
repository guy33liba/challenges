import React, { useState } from "react"

const Calc3 = () => {
  const buttons = [
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "/", value: "/" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "*", value: "*" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "-", value: "-" },
    { label: "0", value: "0" },
    { label: ".", value: "." },
    { label: "=", value: "=" },
    { label: "+", value: "+" },
    { label: "C", value: "C" },
  ]
  const [input, setInput] = useState("")
  const [result, setResult] = useState([])
  const [lastResult, setLastResult] = useState(false)
  function calculate(btn) {
    const value = btn.value

    if (value === "=") {
      try {
        const evaluation = eval(input) // Perform calculation
        setResult(evaluation)
        setInput(evaluation.toString()) // Set the evaluated result as new input
        setLastResult(true) // Indicate that "=" was the last action
      } catch {
        setResult("Error")
        setInput("")
        setLastResult(false)
      }
    } else if (value === "C") {
      setInput("")
      setResult("")
      setLastResult(false) // Reset state
    } else {
      if (lastResult && !["+", "-", "*", "/"].includes(value)) {
        // If "=" was the last action and the next button isn't an operator, start fresh
        setInput(value)
      } else {
        setInput(input + value)
      }
      setLastResult(false) // Reset after appending
    }
  }

  return (
    <div>
      <input type="text" style={{ fontSize: "30px" }} value={input} onChange={(e) => setInput(e.target.value)} />
      <div style={{ display: "flex", width: "200px", flexWrap: "wrap" }}>
        {buttons.map((button) => (
          <button
            style={{ fontSize: "30px" }}
            key={button.label}
            disabled={button.value === "C" && result.length === 0}
            onClick={() => {
              calculate(button)
            }}>
            {button.label}
          </button>
        ))}
      </div>
      <div>Result: {result}</div>
    </div>
  )
}

export default Calc3
