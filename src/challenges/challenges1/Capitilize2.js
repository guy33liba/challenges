import React, { useState } from "react"

const Capitilize2 = () => {
 const [word, setWord] = useState()
 const [newWord, setNewWord] = useState("")
 function capitalWord(str) {
  const capitalized = str.charAt(0).toUpperCase() + word.slice(1)
  setNewWord(capitalized)
 }

 return (
  <div>
   <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
   <button onClick={() => capitalWord(word)}>capitalize</button>
   <h1> {newWord}</h1>
  </div>
 )
}

export default Capitilize2
