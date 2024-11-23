import React, { useState } from "react"

const FrequencyCounter = () => {
 const words = ["apple", "banana", "apple", "orange", "banana", "apple"]

 const [count, setcount] = useState({})
 function findFREquency(arr) {
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
 function calculateFreuency(arr) {
  const frequency = {}
  for (let word of arr) {
   frequency[word] = (frequency[word] || 0) + 1
  }
 }

 return (
  <div>
   <button onClick={() => findFREquency(words)}>finding</button>
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
