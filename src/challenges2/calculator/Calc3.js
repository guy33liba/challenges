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
  function calculate(btn) {
    if (input === "=") {
      setResult([eval(result.join(""))])
    } else if (input === "C") {
      setInput("")
      setResult([])
    } else {
      setInput(input + btn.value)
      setResult([...result, btn.value])
    }
  }
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
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
      <div>Result: {result.join("")}</div>
    </div>
  )
}

export default Calc3
