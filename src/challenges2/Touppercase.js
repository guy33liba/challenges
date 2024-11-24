import React, { useState } from "react"

const Touppercase = () => {
 const [word, setWord] = useState("")
 ///////////////////////////////
 function changeTouppercase(str) {
  let wordArray = str.split(" ")
  let result = []
  for (const word of wordArray) {
   result.push(word[0].toUpperCase() + word.slice(1))
  }
  setWord(result.join(" "))
 }
 ///////////////////////////////
 function changeTouppercase2(str) {
  let result = str.split(" ")
  let modified = result
   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
   .join(" ")
   setWord(modified)
 }
 return (
  <div>
   <button onClick={() => changeTouppercase("why are you laughing")}>toUpperCase</button>
   <h3>{word}</h3>
  </div>
 )
}

export default Touppercase
