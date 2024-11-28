import React, { useState } from "react"

const Calc = () => {
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
  const [result, setResult] = useState("")
  const [disabling, setDisabling] = useState(false)
  const handleButtonClick = (value) => {
    if (value == "C") {
      setDisabling(false)
      setInput("")
      setResult("")
      value = ""
    }
    if (value === "=") {
      try {
        setResult(eval(input))
        setDisabling(true)
      } catch (error) {
        setResult("Error")
      }
    } else {
      setInput((prev) => prev + value)
    }
  }
  return (
    <div>
      {" "}
      <div>
        <input
          type="text"
          value={input}
          readOnly
          placeholder="0"
          style={{ width: "100%", padding: "10px", fontSize: "20px" }}
        />
      </div>
      <div>
        <input
          type="text"
          value={result}
          readOnly
          placeholder="Result"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "20px",
            marginTop: "10px",
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          marginTop: "20px",
        }}>
        {buttons.map((button) => (
          <button
            disabled={disabling && button.value !== "C"}
            key={button.value}
            onClick={() => handleButtonClick(button.value)}
            style={{
              padding: "20px",
              fontSize: "20px",
              cursor: "pointer",
              color: "black",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
            }}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Calc
