import React, { useState } from "react"

const AnagramChecker = () => {
  const [wordOne, setWordOne] = useState("")
  const [wordTwo, setWordTwo] = useState("")
  const [result, setResult] = useState("")

  const areAnagrams = (arg1, arg2) => {
    const clearnonalphabetic = arg1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    const clearnonalphabetic2 = arg2.replace(/[^a-z]/g, "").toLowerCase()
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
        areAnagrams(wordOne, wordTwo) ? "The words are anagrams" : "The words are not anagrams",
      )
    }
  }
  return (
    <div>
      <input type="text" value={wordOne} onChange={(e) => setWordOne(e.target.value)} />
      <input type="text" value={wordTwo} onChange={(e) => setWordTwo(e.target.value)} />
      <button onClick={buttonhandler}>check anagram</button>
      <h2>{result}</h2>
    </div>
  )
}

export default AnagramChecker
