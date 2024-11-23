import React, { useState } from "react"

const FrequencyCounter = () => {
 const words = ["apple", "banana", "apple", "orange", "banana", "apple"]
 const [start, setStart] = useState(null)
 function find(arr) {
  let frequency = {}
  for (let word of arr) {
   if (frequency[word]) {
    frequency[word] += 1
   } else {
    frequency[word] = 1
   }
  }
  setStart(frequency)
 }

 return (
  <div>
   <button onClick={() => find(words)}>finding</button>
   <div>{JSON.stringify(start)}</div>
   <ul>
    {start &&
     Object.entries(start).map(([key, value]) => (
      <li key={key}>
       {key}: {value}
      </li>
     ))}
   </ul>
  </div>
 )
}

export default FrequencyCounter
