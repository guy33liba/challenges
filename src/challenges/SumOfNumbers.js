import React, { useState } from "react"

const SumOfNumbers = () => {
 const [summary, setsummary] = useState(0)

 const arrayofnumbers = [1, 2, 3, 4]
 const findTheSum = (arr) => {
  for (let item of arr) {
   setsummary(summary + item)
  }
  return summary
 }
 return (
  <div>
   <button onClick={() => findTheSum(arrayofnumbers)}>summary</button>
   <h2>
    {summary.map((item) => {
     return <div>{item}</div>
    })}
   </h2>
  </div>
 )
}

export default SumOfNumbers
