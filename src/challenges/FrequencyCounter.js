import React, { useState } from "react"

const FrequencyCounter = () => {
 const words = ["apple", "banana", "apple", "orange", "banana", "apple"]
 const [count, setcount] = useState({})
 function find(arr) {
  let frequency = {}
  for (let word of arr) {
   if (frequency[word]) {
    frequency[word] += 1
   } else {
    frequency[word] = 1
   }
  }
  setcount(frequency)
 }

 return (
  <div>
   <button onClick={() => find(words)}>finding</button>
   <div>{JSON.stringify(count)}</div>
   <ul>
    {count &&
     Object.entries(count).map(([key, value]) => (
      <li key={key}>
       {key}: {value}
      </li>
     ))}
   </ul>
  </div>
 )
}

export default FrequencyCounter
