import React, { useState } from "react"

const Fiboncci2 = () => {
  const [input, setInput] = useState([])
  const [result, setResult] = useState([])
  const fibonacc222 = (num) => {
    let array = [0, 1]
    for (let i = 2; i < input; i++) {
      array.push(array[i - 1] + array[i - 2])
    }
    setResult(array)
  }
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={fibonacc222}>set fiboncacc</button>
      <p>
        fibonacci :
        {result.map((item) => {
          return <p>{item}</p>
        })}
      </p>
    </div>
  )
}

export default Fiboncci2
