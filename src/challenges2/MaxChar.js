import React, { useState } from "react"

const MaxChar = () => {
 const [max, setMax] = useState({})
 function findMax(str) {
  const charMap = {}
  let max = 0
  let maxChar = ""

  for (const num of str) {
   if (charMap[num]) {
    charMap[num] = charMap[num] + 1
   } else {
    charMap[num] = 1
   }
  }
  for (const [key, value] of Object.entries(charMap)) {
   if (value > max) {
    max = value
    maxChar = key
   }
  }
  setMax({ max: max, maxChar: maxChar })
  console.log(max)
 }
 return (
  <div>
   <button onClick={() => findMax("aaaccccccbbb")}>click</button>
   <h2>
    {max.maxChar ? (
     <div>
      Most Frequent Character: <strong>{max.maxChar}</strong> <br />
      Frequency: <strong>{max.max}</strong>
     </div>
    ) : (
     "No data yet"
    )}
   </h2>
  </div>
 )
}

export default MaxChar
