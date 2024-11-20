import React, { useState } from "react"

const Capitilize = () => {
 const [word, setword] = useState("")
 const [result, setResult] = useState("")

 const capitalizeFirstLetter = (string) => {
  const words = string.split(" ")
  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
 }
 // let array = []
 // for (const word of words) {
 //  array.push(word[0].toUpperCase() + word.slice(1))
 // }
 // return array.join(" ")
 const handleCapitalizeFirstLetter = () => {
  if (word.trim() === "") {
   setResult("Please enter a word")
  } else {
   setResult(capitalizeFirstLetter(word))
  }
 }
 return (
  <div>
   <input type="text" value={word} onChange={(e) => setword(e.target.value)} />
   <button onClick={() => handleCapitalizeFirstLetter()}>set word</button>
   <h2>{result}</h2>
  </div>
 )
}

export default Capitilize
