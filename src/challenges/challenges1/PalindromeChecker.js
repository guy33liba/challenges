import React, { useState } from "react"

const PalindromeChecker = () => {
  const [word, setWord] = useState("")
  const [result, setResult] = useState("")
  const isPalindrome = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    if (cleanedStr === cleanedStr.split("").reverse().join("")) {
      return true // It's a palindrome.
    } else {
      return false // Not a palindrome.
    }
    return cleanedStr === cleanedStr.split("").reverse().join("")
  }
  const handleCheckPalindrome = () => {
    if (word.trim() === "") {
      setResult("please enter a word")
    } else {
      setResult(isPalindrome(word) ? "Palindrome" : "not a palindrome")
    }
  }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Palindrome Checker</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <br />
      <button
        onClick={handleCheckPalindrome}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}>
        Check
      </button>
      <h2 style={{ marginTop: "20px" }}>{result}</h2>
    </div>
  )
}

export default PalindromeChecker
