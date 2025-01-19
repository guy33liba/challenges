import React, { useState } from "react"

const Fiboncci2 = () => {
  const [input, setinput] = useState([])
  const [fibonacci, setfibonacci] = useState([])
  const handleit = (num) => {
    let sqe = [0, 1]
    for (let i = 2; i < num; i++) {
      sqe[i] = sqe[i - 1] + sqe[i - 2]
    }
    setfibonacci(sqe)
  }
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
      <button onClick={() => handleit(input)}>Generate Fibonacci Sequence</button>
      {fibonacci.map((item) => {
        return <p>{item}</p>
      })}
    </div>
  )
}

export default Fiboncci2
