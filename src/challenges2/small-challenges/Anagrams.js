import React, { useState } from "react"

const Anagrams = () => {
 const [stringA, setStringA] = useState("")
 const [stringB, setStringB] = useState("")
 const [result, setResult] = useState("")
 function charMap(str) {
  const charmap = {}
  str = str.toLowerCase().replace(/[\W]/g, "")
  for (const char of str) {
   charmap[char] = ++charmap[char] || 1
  }
  return charmap
 }
 function anagrams(stringA, stringB) {
  const charmapA = charMap(stringA)
  const charmapB = charMap(stringB)
  if (Object.keys(charmapA).length !== Object.keys(charmapB).length) {
   return false
  }
  for (const char in charmapA) {
   if (charmapA[char] !== charmapB[char]) {
    return false
   }
  }
  return true
 }
 const handleCheck = () => {
  const isAnagram = anagrams(stringA, stringB)
  if (!stringA || !stringB) {
   alert("Please")
  }
  setResult(isAnagram ? "the strings are anagrams!" : "the strings are not anagrams.")
 }
 anagrams("RAIL! SAFER", "FAiry TALes")
 return (
  <div style={{ display: "flex", flexDirection: "column" }}>
   A<input type="text" value={stringA} onChange={(e) => setStringA(e.target.value)} />
   B<input type="text" value={stringB} onChange={(e) => setStringB(e.target.value)} />
   <div>
    <button onClick={handleCheck}>check Anagrams</button>
   </div>
   <p>{result}</p>
  </div>
 )
}

export default Anagrams
