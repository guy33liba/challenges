import React, { useState } from "react"

const Fibonacci = () => {
  const [numTerms, setNumTerms] = useState([])
  const [fibSequence, setfibSequence] = useState([])
  function fibonacciSequance(num) {
    let sequence = [0, 1]
    for (let i = 2; i < num; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2])
    }
    console.log(sequence)
    setfibSequence(sequence)
  }
  return (
    <div>
      <input type="number" value={numTerms} onChange={(e) => setNumTerms(e.target.value)} />
      <button onClick={() => fibonacciSequance(numTerms)}>Generate Fibonacci Sequence</button>
      <div>
        {fibSequence.map((num, index) => (
          <p key={index}>{num}</p>
        ))}
      </div>
    </div>
  )
}

export default Fibonacci
