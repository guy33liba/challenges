import React, { useState } from "react"

const PrimeChecker = () => {
  const [number, setNumber] = useState("")
  const [result, setResult] = useState("")

  // Function to check if a number is prime
  const isPrime = (num) => {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }

  // Handle the button click
  const handleCheckPrime = () => {
    const num = parseInt(number, 10)
    if (isNaN(num)) {
      setResult("Please enter a valid number")
    } else {
      setResult(isPrime(num) ? "Prime" : "Not Prime")
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Prime Checker</h1>
      <input
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <br />
      <button
        onClick={handleCheckPrime}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}>
        Check
      </button>
      <h2 style={{ marginTop: "20px" }}>{result}</h2>
    </div>
  )
}

export default PrimeChecker
