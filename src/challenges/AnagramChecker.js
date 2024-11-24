import React, { useState } from "react"

const AnagramChecker = () => {
 const [wordOne, setWordOne] = useState("")
 const [wordTwo, setWordTwo] = useState("")
 const [result, setResult] = useState("")

 const areAnagrams = (arg1, arg2) => {
  const clearnonalphabetic = arg1.replace(/[\W]/g, "").toLowerCase()
  const clearnonalphabetic2 = arg2.replace(/[\W]/g, "").toLowerCase()
  const sortedWordOne = clearnonalphabetic.split("").sort().join("")
  const sortedWordTwo = clearnonalphabetic2.split("").sort().join("")
  if (sortedWordOne === sortedWordTwo) {
   return true
  } else {
   return false
  }
 }
 const buttonhandler = (str) => {
  if (str === "") {
   setResult("Please enter a word")
  } else {
   setResult(
    areAnagrams(wordOne, wordTwo)
     ? "The words are anagrams"
     : "The words are not anagrams"
   )
  }
 }
 ///////////
 function cleanStr(str) {
  return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("")
 }
 function anagrams(wordOne, wordTwo) {
  if (cleanStr(wordOne) !== cleanStr(wordTwo)) {
   setResult("no anagram")
  } else {
   setResult("yes anagram")
  }
 }
 return (
  <div>
   <input type="text" value={wordOne} onChange={(e) => setWordOne(e.target.value)} />
   <input type="text" value={wordTwo} onChange={(e) => setWordTwo(e.target.value)} />
   <button
    style={{ marginLeft: "10px", marginRight: "10px" }}
    onClick={() => anagrams(wordOne, wordTwo)}
   >
    check anagram 1
   </button>
   <button onClick={() => buttonhandler()}>check anagram 2</button>
   <h2>{result}</h2>
  </div>
 )
}

export default AnagramChecker
